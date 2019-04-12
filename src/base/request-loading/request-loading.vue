
<template>
  <div class="loading">
    <img src="./loading.gif" alt="">
    <span class="title">{{title}}</span>
  </div>
</template>

<script>
  export default {
    name: 'LOADING',
    data () {
      return {}
    },
    props:{
      title:{
        type:String,
        default:'加载中 ...'
      }

    }
  }
</script>
<style scoped>
  .loading{
    position: fixed;
    top:0;
    left:0;
    z-index:121;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
  }
  .loading img{
    width: .5rem;
    height: .5rem;

  }
  .title{
    margin-top: .2rem;
    font-size: .3rem;
  }

</style>
