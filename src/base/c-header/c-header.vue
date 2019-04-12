<template>
  <div class="cli-header">
    <div class="goHome">
      <img class="home-cli" src="../../common/imgs/home.png" alt="">
    </div>
    <div class="center">
        <h3 class="khactivity" :class="cliactive"  @click="cliCustomer"> 客户登记</h3>
        <h3 class="zyuan" :class="clizyActive"  @click="cliZunYuan"> 准增员</h3>
    </div>

    <div class="cli">
      <div class="cli-search">
        <img src="../../common/imgs/fangdajing.png" alt="">
      </div>
      <div class="cli-add">
        <img src="../../common/imgs/tianjia.png" alt="">
      </div>
    </div>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'c-header',
    methods:{
      cliCustomer(){
        this.$emit('cliCustomer')
      },
      cliZunYuan(){
        this.$emit('cliZunYuan')
      },

    },
    computed:{
      cliactive(){
          return this.increase===0 ? 'cliactive' : ''
      },
      clizyActive(){
        return this.increase ===1 ? 'clizyActive' : ''
      },
      ...mapGetters([
        'increase',
      ])
    },

  }
</script>

<style scoped>
  .cli-header {
    position:relative;
    display: flex;
    justify-content:space-between;
    left: 0;
    top: 0;
    text-align: center;
    width: 100%;
    height: .88rem;
    background: #3c8efe;
    color: #fff;
  }
  img {
    width: .4rem;
    height: .4rem ;
    float: left;
    margin-top: .22rem;
  }
  .home-cli{
    margin-left: .22rem;
  }
  .center{
    flex: 1;
    line-height: .88rem;
    display: flex;
    /*实现垂直居中*/
    align-items: center;
    /*实现水平居中*/
    justify-content: center;
    text-align: justify;
  }

  h3{
    height: .85rem;
    display: inline-block;
    font-size:.35rem;
    margin: 0 .2rem;
    padding: 0 .1rem;
    box-sizing: border-box;
    margin-bottom: 2px;
  }
  .cliactive,.clizyActive{
    border-bottom: 3px solid #fff;
  }
  .cli{
    display: flex;
    justify-content: space-between;
  }
  .cli-add{
    margin-left: .2rem;
    margin-right: .3rem;
  }
  .goHome,.cli{
    line-height: .88rem;
    width: 15%;
    text-align: center;
  }
</style>
