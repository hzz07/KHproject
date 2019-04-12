<template>
  <transition name="confirm-fade">
    <div class="confirm" v-show="showFlag" @click.stop>
      <div class="confirm-wrapper">
        <div class="confirm-content">
          <div class="title">
            提示
          </div>
          <p class="text">{{text}}</p>
          <div class="operate">
            <div @click="cancel" v-show="cancelBtnText.length>0" class="operate-btn left">{{cancelBtnText}}</div>
            <div @click="confirm"  class="operate-btn">{{confirmBtnText}}</div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      text: {
        type: String,
        default: ''
      },
      confirmBtnText: {
        type: String,
        default: '确定'
      },
      cancelBtnText: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        showFlag: false
      }
    },
    methods: {
      show() {
        this.showFlag = true
      },
      hide() {
        this.showFlag = false
      },
      cancel() {
        this.hide()
        this.$emit('cancel')
      },
      confirm() {
        this.hide()
        this.$emit('confirm')
      },

    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  .confirm
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    z-index: 998
    background-color: rgba(0,0,0,0.5);
    &.confirm-fade-enter-active
      animation: confirm-fadein 0.3s
      .confirm-content
        animation: confirm-zoom 0.3s
    .confirm-wrapper
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      z-index: 999
      border-radius :8px
      padding: 80px 20px 2px 20
      width: 69%
      background-image :url("../../common/imgs/reqBj2.png")
      background-size :cover
      .confirm-content

        border-radius: 13px
        .title
          font-size .3rem
          text-align center
          height .9rem
          line-height .9rem
        .text
          padding: 0 .2rem;
          height 1rem
          margin-top .8rem
          text-align: center
          font-size: .3rem
          color: grey

          line-height: .38rem;
        .operate
          display: flex
          align-items: center
          text-align: center
          font-size: .3rem
          .operate-btn
            flex: 1
            line-height: 22px
            padding: 10px 0
            border-top: 1px solid #F3DEDE
            color:  #2C5779

  @keyframes confirm-fadein
    0%
      opacity: 0
    100%
      opacity: 1

  @keyframes confirm-zoom
    0%
      transform: scale(0)
    50%
      transform: scale(1.1)
    100%
      transform: scale(1)
</style>
