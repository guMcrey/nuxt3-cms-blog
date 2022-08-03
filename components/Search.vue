<template>
  <div class="search-wrapper" @click.self="closeMaskHandler">
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
      <ul :class="showList ? 'article-list' : 'article-list-area'">
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
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()
const inputRef = ref()
const inputValue = ref('')
let count = 0
const showList = ref(false)
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
  searchArticleList.value = (searchArticle.value as any).result || []
}

const inputHandler = (event: any) => {
  if (event.data) {
    inputValue.value += event.data
    showList.value = true
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
      showList.value = false
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
  showList.value = !showList.value
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
.search-wrapper
  position fixed
  top 0
  right 0
  bottom 0
  left 0
  background-color rgba(244, 244, 245, 0.7)
  z-index 999
  display flex
  justify-content center
  backdrop-filter blur(8px)
.wrapper-area
  position absolute
  padding 10px 25px
  top 15%
  width 45%
  background-color #fff
  box-shadow inset 0px 0px 0 0 hsla(0,0%,100%,0.4),0 3px 5px 0 #5f4b6d
  border-radius 12px
  max-height 600px
  transition all 6s
.wrapper-area-disable
  max-height 0px
  transition all 6s
.input-wrapper
  display flex
  align-items center
  gap 8px
.input-bar
  width 100%
  padding 12px
  font-size 18px
.search-icon
  width 20px
  height auto
  position relative
  left -1024px
  filter drop-shadow(#a3a3a3 1024px 0)
.input-bar:empty:before
    content attr(placeholder)
    color #a3a3a3
    font-size 18px
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
  width 100%
  transition all 4s
  max-height 600px
  margin-bottom 10px
  overflow hidden
.article-list-area
  max-height 0
  transition all 5s
.article-list-item
  padding 13px 8px
  display flex
  align-items center
  border-bottom 1px solid #f1f1f1
  transition height 3s
  cursor pointer
  &:hover
    background-color rgba(244,244,244,0.6)
    transition background 0.3s
    border-radius 8px
  &:first-child
    margin-top 10px
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
  font-size 16px
  font-family "NotoSans"
  font-weight 500
  color #333
.item-content-subtitle
  font-size 13px
  font-family "NotoSans"
  font-weight 400
  color #737373
  margin-top 3px
  white-space nowrap
  text-overflow ellipsis
  overflow hidden
.no-result-found
  display flex
  align-items center
  justify-content center
  margin-top 15px
  padding 12px
  color #737373
  img
    width 40px
    height auto
    padding-right 15px
</style>
