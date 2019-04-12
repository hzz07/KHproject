<template>
  <div id="app">
    <router-view @changeConfirm="changeConfirm" ></router-view>
    <loading v-show="showLoading"></loading>
    <confirm ref="confirm" @confirm="reload" :text="text"></confirm>
  </div>

</template>

<script>

  import {mapGetters} from 'vuex'
  import loading from 'base/request-loading/request-loading'
  import confirm from 'base/confirm/confirm'
  export default {

    name: 'App',
    data(){
      return{
        text:'您当前的网络有问题，请稍后重试'
      }

    },
    computed:{
      ...mapGetters(['showLoading','changeNetwork','showConfirm']),
    },
    methods:{
      reload(){
        if(!this.changeNetwork){
          window.location.reload();
        }else{
          this.$refs.confirm.hide()
          this.text = ''
        }

      },
      changeConfirm(txt){
        this.text = txt
      }
    },
    components:{
      loading,
      confirm
    },
    watch:{
      changeNetwork(){
        if(!this.changeNetwork){
          this.$refs.confirm.show()
        }
      },
      text(){
        if(this.text!=''){
          this.$refs.confirm.show()
        }

      },
      showConfirm(){
        if(this.showConfirm){
          this.$refs.confirm.show()
        }
      }

    },
  }
</script>

<style>

</style>
