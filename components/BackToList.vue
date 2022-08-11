<template>
  <div class="back-area">
    <img
      class="back-area-btn"
      src="@/assets/images/icons/more-btn.svg"
      alt="back"
    />
    <span class="back-area-text">Back to list</span>
  </div>
</template>

<style lang="stylus" scoped>
.back-area
  padding 0 100px
  margin-top 40px
  display flex
  align-items center
.back-area-btn
  width 36px
  height 36px
  transform rotate(180deg)
.back-area-text
  margin-left 15px
  font-size 16px
  font-weight 400
  font-family "NotoSans"
</style>
