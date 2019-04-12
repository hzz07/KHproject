<template>
  <div class="loading">
    <img src="./loading.gif" alt="" v-show="showLoading">
      <p class="desc">{{title}}</p>
  </div>
</template>

<script>
export default {
  props: {
      title: {
        type: String,
        default: '正在加载中...'
      },
      showLoading:{
        type: Boolean,
        default:true
      }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  .loading
    width: 100%
    text-align: center
    img
      width: .5rem;
      height: .5rem;
    .desc
      line-height: 20px;
      font-size: 0.2rem;
      color: rgba(0,0,0,.6);
 /* !**
 * ==============================================
 * Experiment-Gooey Effect
 * Dot Overtaking
 * ==============================================
 *!
  .loading{
    width: 100%
    !*text-align: center*!
    align-items center
  }
  .desc{
    line-height: 20px;
    font-size: 0.2rem;
    color: rgba(0,0,0,.6);
  }
  .stage {
    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;
  }
  !**
 * ==============================================
 * Dot Stretching
 * ==============================================
 *!
  .dot-stretching {
    position: relative;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #9880ff;
    color: #9880ff;
    transform: scale(1.25, 1.25);
    animation: dotStretching 2s infinite ease-in;
  }

  .dot-stretching::before, .dot-stretching::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
  }

  .dot-stretching::before {
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #9880ff;
    color: #9880ff;
    animation: dotStretchingBefore 2s infinite ease-in;
  }

  .dot-stretching::after {
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #9880ff;
    color: #9880ff;
    animation: dotStretchingAfter 2s infinite ease-in;
  }

  @keyframes dotStretching {
    0% {
      transform: scale(1.25, 1.25);
    }
    50%,
    60% {
      transform: scale(0.8, 0.8);
    }
    100% {
      transform: scale(1.25, 1.25);
    }
  }

  @keyframes dotStretchingBefore {
    0% {
      transform: translate(0) scale(0.7, 0.7);
    }
    50%,
    60% {
      transform: translate(-20px) scale(1, 1);
    }
    100% {
      transform: translate(0) scale(0.7, 0.7);
    }
  }

  @keyframes dotStretchingAfter {
    0% {
      transform: translate(0) scale(0.7, 0.7);
    }
    50%,
    60% {
      transform: translate(20px) scale(1, 1);
    }
    100% {
      transform: translate(0) scale(0.7, 0.7);
    }
  }
*/

</style>

