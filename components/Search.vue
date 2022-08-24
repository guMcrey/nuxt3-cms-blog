<template>
  <div class="wrapper-area">
    <div class="input-wrapper">
      <img
        class="search-icon"
        src="@/assets/images/icons/search.svg"
        alt="search"
      />
      <div
        ref="inputRef"
        class="input-bar"
        contenteditable="true"
        placeholder="Search articles"
        :value="inputValue"
        @input="inputHandler"
        @keydown.enter="keydownHandler"
      ></div>
      <div
        :class="inputValue ? 'clear-bar' : 'clear-bar-disabled'"
        @click="clearInputHandler"
      >
        Clear
      </div>
    </div>
    <ul class="article-list">
        <template v-if="inputValue && searchArticleList?.length">
          <li
            class="article-list-item"
            v-for="item in searchArticleList"
            :key="item.article_id"
            @click="jumpToDetail(item.article_id)"
          >
            <div class="list-item-img-wrap">
              <img
                v-if="item.main_img"
                class="list-item-img"
                :src="`http://localhost:3000/images/${item.main_img}`"
                alt="main img"
              />
            </div>
            <div class="list-item-content">
              <div class="item-content-title">{{ item.title }}</div>
              <div class="item-content-subtitle">
                {{ item.author }} · {{ item.description }}
              </div>
            </div>
          </li>
        </template>
        <div
          class="no-result-found"
          v-if="inputValue && !searchArticleList.length"
        >
          <img src="@/assets/images/icons/no-data.svg" alt="no-data" />
          No result found.
        </div>
      </ul>
  </div>
</template>

<script lang="ts" setup>
import {watch} from 'vue'
const router = useRouter()
const inputRef = ref()
const inputValue = ref('')
let count = 0
const searchArticleList = ref<any[]>([])

const emits = defineEmits(['close'])

const searchHandler = async () => {
  if (!inputValue.value) return
  searchArticleList.value = []
  const {
    data: searchArticle,
  } = await useFetch(
    `http://localhost:3001/api/articles?title=${inputValue.value}&publish_status=publish`,
    {key: inputValue.value}
  )
  searchArticleList.value = (searchArticle.value as any)?.result || []
}

const inputHandler = (event: any) => {
  if (event.data) {
    inputValue.value += event.data
    count += 1
  } else {
    // remove keydown clear
    if (count > 1) {
      inputValue.value = inputValue.value.substring(
        0,
        inputValue.value.length - 1
      )
      count--
    } else {
      inputValue.value = ''
    }
  }
}

const keydownHandler = (event: any) => {
  event.returnValue = false
  return false
}

const clearInputHandler = () => {
  inputRef.value.innerHTML = ''
  inputValue.value = ''
  searchArticleList.value = []
}

const jumpToDetail = (id: number) => {
  router.push({path: `/articles/${id}`})
  emits('close')
}

const closeMaskHandler = () => {
  emits('close')
}

watch(
  inputValue,
  () => {
    if (inputValue.value) {
      const useDebounce = debounce(searchHandler, 1000)
      useDebounce()
    } else {
      searchArticleList.value = []
    }
  },
  {immediate: true}
)
</script>

<style lang="stylus" scoped>
.wrapper-area-disable
  max-height 0px
.input-wrapper
  position relative
  display flex
  align-items center
  gap 8px
  padding 4px 20px
  width 340px
  background-color #F0F0F3
  border-radius 50px
  box-sizing border-box
  z-index 2
.input-bar
  width 100%
  padding 8px
  font-size 16px
.search-icon
  width 19px
  height auto
  position relative
.input-bar:empty:before
    content attr(placeholder)
    color #7F7A8A
    font-size 15px
    font-family 'NotoSans'
    font-weight 400
.input-bar[contenteditable]
  outline 0px solid transparent
.clear-bar
  opacity 1
  font-size 13px
  font-family 'NotoSans'
  font-weight 400
  border-bottom 1px solid #000
  cursor pointer
  transition all 0.3s
.clear-bar-disabled
  opacity 0
  transition all 0.3s
.article-list
  position absolute
  top 20px
  left 0
  right 0
  width 338px
  max-height 300px
  margin-bottom 10px 
  overflow hidden
  z-index 1
  border 1px solid rgba(0, 0, 0, 0.1)
  background-color #fff
  z-index 1
  border-radius 0 0 12px 12px
.article-list-item
  padding 7px 10px
  display flex
  align-items center
  border-bottom 1px solid #f1f1f1
  cursor pointer
  &:hover
    background-color rgba(244,244,244,0.6)
    transition background 0.3s
    border-radius 8px
  &:first-child
    margin-top 30px
  &:last-child
    border-bottom none
.list-item-img-wrap
  min-width 45px
  height 45px
  display flex
  justify-content center
  align-items center
  border 1px solid #f5f5f5
  border-radius 8px
  background-color #f5f5f5
.list-item-img
  display block
  max-width 100%
  max-height 100%
.list-item-content
  margin-left 20px
  white-space nowrap
  text-overflow ellipsis
  overflow hidden
.item-content-title
  font-size 15px
  font-family "NotoSans"
  font-weight 500
  color #0D0230
.item-content-subtitle
  font-size 13px
  font-family "NotoSans"
  font-weight 400
  color #848193
  margin-top 3px
  white-space nowrap
  text-overflow ellipsis
  overflow hidden
.no-result-found
  margin-top 30px
  display flex
  align-items center
  justify-content center
  padding 12px
  color #737373
  font-size 13px
  font-family 'NotoSans'
  font-weight 400 
  img
    width 20px
    height auto
    padding-right 15px
</style>
