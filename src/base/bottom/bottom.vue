<template>
  <div class="fbBotton">
    <div class="fBl left fBactivity" ref="1">
      <img src="../../common/imgs/2_03.png" class="khimg" />
      <span class="khname">客户</span>
    </div>
    <div class="fBl right" ref="2">
      <img src="../../common/imgs/2_05.png" class="rcimg" />
      <span class="khname">日程</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "bottom"
    }
</script>

<style scoped lang="stylus">
  .fbBotton
    border-top:1px solid rgba(0,0,0,.1)
    height 1rem
    bottom 0
    position absolute
    display flex
    width 100%
    justify-content center
    .fBl
      flex 1
      display flex
      justify-content: center; /* 水平居中 */
      align-items: center;     /* 垂直居中 */
      flex-direction:column;
      background-color #fff
      img
        display block
        width .45rem
        height .45rem
      .khname
        padding-top .1rem
        font-size .25rem
    .left
      background-color: #E4F0FA;

</style>
