<template>
  <div class="index-header">
    <div class="header-top">
        <div class="header-top-title">Discover Nice Articles Here.</div>
        <div class="header-top-subtitle">All the articles and contents of the site have been updated today and you can find your articles and contents quickly and without and problems.</div>
    </div>
    <div class="header-bottom">
        <Search />
        <ul class="header-bottom-tags">
            <div v-for="tItem in tagList" :key="tItem.name" :class="tItem.isChecked ? 'bottom-tags-item active-tag' : 'bottom-tags-item'" @click="clickTagsHandler(tItem.name)">{{tItem.name}}</div>
        </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {reactive, ref} from 'vue'
let tagList = ref([
    {name: 'All', isChecked: true},
    {name: 'Typescript', isChecked: false},
    {name: 'JavaScript', isChecked: false},
    {name: 'Vue', isChecked: false},
])

const clickTagsHandler = (name: string) => {
    tagList.value.forEach((_: any) => {
        console.log(_.name, name)
        if (_.name === name) {
            _.isChecked = true
        } else {
            _.isChecked = false
        }
    })
}
</script>

<style lang="stylus" scoped>
.index-header
  margin-top 15px
  padding 18px 35px
  border-left 1px solid #F0F0F3
  border-right 1px solid #F0F0F3
.header-top-title
  font-size 30px
  font-weight 700
  font-family 'NotoSans'
  //   #1c2b33
  color #0D0230
.header-top-subtitle
  margin-top 15px
  font-size 15px
  font-weight 400
  font-family 'NotoSans'
  color #848193
  line-height 1.7em
  max-width 50%
.header-bottom
  position relative
  margin-top 30px
  display flex
  align-items center
  justify-content flex-start
.header-bottom-search
  background-color #F0F0F3
  width 200px
  padding 17px
  border-radius 20px
.header-bottom-tags
  margin-left 40px
  display flex
  align-items center
.bottom-tags-item
  padding 0 30px
  font-size 15px
  font-family 'NotoSans'
  font-weight 400
  color #848193
  cursor pointer
.active-tag
  background-color #8500fe
  color #fff
  padding 8px 22px
  border-radius 22px
</style>