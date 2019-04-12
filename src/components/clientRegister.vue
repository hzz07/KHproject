<template>
  <div class="cli-all">
    <c-header></c-header>
    <cli-list
      :stateData="statekfdata"
      :customerTags="customerTags"
      :gzState="gzState"
      :khBirthday="khBirthday"
      @checkIndex = 'checkIndex'
      @checkFlagIndex = 'checkFlagIndex'

    ></cli-list>
    <div class="content">
      <div class="content-list">
        <customer-list
          :allPage="allPage"
          :keyNum = "keyNum"
          :customList ="customList"
          :page="page"
          @pullDown="pullList"
        ></customer-list>
      </div>
      <!--<loading :title="title" v-show="this.customList.length>0"></loading>-->
    </div>
    <c-bottom></c-bottom>



  </div>
</template>

<script>
  import CHeader from 'base/c-header/c-header'
  import CliList from 'base/cli-list/cli-list'
  import Loading from 'base/loading/loading'
  import CBottom from 'base/bottom/bottom'
  import CustomerList from 'base/customer-list/customer-list'
  import confirm from 'base/confirm/confirm'
  import {saveAgentid} from 'common/js/cache'
  import {mapGetters, mapMutations} from 'vuex'
  import {checkCustomer, getDiscList} from 'api/axios'
  import {arr_unique,concatArray} from 'common/js/util'
  import {url} from 'api/api'
  import axios from 'axios'
  import {statekfdata, customerTags, gzstate, khbirthday} from 'common/js/checkJSON'

  export default {
    name: 'clientRegister',
    data() {
      return {
        title: '正在加载，请稍等...',
        page:1,
        allPage:0,
        keyNum:[],
        customList:[],
        firstClick:0,
        pullDown:false
      }
    },
    created() {
      let agentid = this.$route.query.agentid
      if (!agentid) {
        this.confirmText('当前没有获取到客户工号，请重试！')
        return
      }

      this.saveAgentid(agentid)
      this.$nextTick(()=>{
        this.checkfirstPull()
      },20)

    },

    computed: {
      statekfdata() {
        return statekfdata
      },
      customerTags() {
        return customerTags
      },
      gzState() {
        return gzstate
      },
      khBirthday() {
        return khbirthday
      },
      ...mapGetters(
        ['agentid', 'increase','tagFlag','checkFlag']
      )

    },
    methods: {

      checkfirstPull() {
        let agentid = this.agentid
        this.$api.api.checkCustomer({
          agentid: agentid
        }).then((res) => {

          if (parseInt(res.code) === 200 && parseInt(res.message[0]) === 0) {
            this.getCustomer()
          } else if (parseInt(res.code) === 200 && parseInt(res.status) === 2) {
            this.confirmText = '数据正在初始化中，点击确定按钮刷新页面'
          } else if (parseInt(res.code) === 200 && parseInt(res.message[0]) === 1) {
            this.pullFirstC()
          } else {
            this.confirmText = '服务器开小差啦，请稍后重试或者联系管理员'
          }
        }).catch((error) => {
          this.confirmText = '服务器开小差啦，请稍后重试或者联系管理员'
        })

      },
      //获取客户列表
      getCustomer() {
        this.$api.api.indexAllCus({
          agentid: this.agentid,
          flag: this.checkFlag,
          increase: this.increase,
          page:this.page
        }).then((res) => {
          this.obtainList(res)

        }).catch((error) => {
          this.confirmText = '服务器开小差啦，请稍后重试或者联系管理员'
        })
      },
      checkIndex(index){


        if(this.firstClick ===index && !this.pullDown){
          return
        }
        if(!this.pullDown){
          this.page= 1
        }
        this.pullDown= false
        this.firstClick =index
        if(index===0){
          this.$api.api.indexAllCus({
            agentid: this.agentid,
            flag: this.checkFlag,
            increase: this.increase,
            page:this.page
          }).then((res) => {
            this.obtainList(res)
          }).catch((error) => {
            this.confirmText = '服务器开小差啦，请稍后重试或者联系管理员'
          })
        }
        if(index ===1){
          this.$api.api.followStatus({
            agentid: this.agentid,
            flag: this.checkFlag,
            increase: this.increase,
            page:this.page
          }).then((res) => {
            this.obtainList(res)

          }).catch((error) => {
            this.confirmText = '服务器开小差啦，请稍后重试或者联系管理员'
          })
        }
        if(index===2){
          this.$api.api.cusBirthday({
            agentid: this.agentid,
            flag: this.checkFlag,
            increase: this.increase,
            page:this.page
          }).then((res) => {
            this.obtainList(res)

          }).catch((error) => {
            this.confirmText = '服务器开小差啦，请稍后重试或者联系管理员'
          })
        }
        if(index===3){
          this.$api.api.policyAnni({
            agentid: this.agentid,
            flag: this.checkFlag,
            increase: this.increase,
            page:this.page
          }).then((res) => {
            this.obtainList(res)

          }).catch((error) => {
            this.confirmText = '服务器开小差啦，请稍后重试或者联系管理员'
          })
        }
      },
      checkFlagIndex(index){
        if(this.tagFlag===0){
          this.$api.api.indexAllCus({
            agentid: this.agentid,
            flag: this.checkFlag,
            increase: this.increase,
            page:this.page
          }).then((res) => {
            this.obtainList(res)
          }).catch((error) => {
            this.confirmText = '服务器开小差啦，请稍后重试或者联系管理员'
          })
        }
        if(this.tagFlag===1){
          this.$api.api.followStatus({
            agentid: this.agentid,
            flag: this.checkFlag,
            increase: this.increase,
            page:this.page
          }).then((res) => {
            this.obtainList(res)

          }).catch((error) => {
            this.confirmText = '服务器开小差啦，请稍后重试或者联系管理员'
          })
        }
        if(this.tagFlag===2){
          this.$api.api.cusBirthday({
            agentid: this.agentid,
            flag: this.checkFlag,
            increase: this.increase,
            page:this.page
          }).then((res) => {
            this.obtainList(res)

          }).catch((error) => {
            this.confirmText = '服务器开小差啦，请稍后重试或者联系管理员'
          })
        }
        if(this.tagFlag===3){
          this.$api.api.policyAnni({
            agentid: this.agentid,
            flag: this.checkFlag,
            increase: this.increase,
            page:this.page
          }).then((res) => {
            this.obtainList(res)

          }).catch((error) => {
            this.confirmText = '服务器开小差啦，请稍后重试或者联系管理员'
          })
        }
      },
      obtainList(res){
        if (parseInt(res.code) === 200 && parseInt(res.status) === 1) {
          this.allPage = Math.abs(Math.ceil(res.message[0]/1000))
          this.dealList(res.message[1])
        }else if(parseInt(res.code) === 200 && parseInt(res.status) === 0) {
          this.allPage = 0
          this.dealList([])
          this.confirmText('当前没有客户，请添加客户！')
        }else{
          this.confirmText = '服务器开小差啦，请稍后重试或者联系管理员'
        }
      },
      pullList(){
        this.page++
        this.pullDown = true
        this.checkIndex(this.tagFlag)

      },
      //进行第一次拉取
      pullFirstC() {
        this.$api.api.firstPullcuster({
          agentid: thisAgentid,
        });
        this.confirmText = '您第一次进入该系统，服务器正在拉取数据，请等待几分钟后刷新页面'
      },
      saveAgentid(agentid) {
        this.set_agentid(agentid)
      },
      dealList(list){
        if(list.length===0){
          return this.keyNum =  this.customList=[]
        }
        this.keyNum= this.keyNum.concat(Object.getOwnPropertyNames(list))
        this.keyNum.sort();
        this.customList = this.customList.concat(list)
        this.keyNum = arr_unique( this.keyNum)
        if(this.keyNum.indexOf('#') > -1){
          this.keyNum.splice(this.keyNum.indexOf('#'),1);
          this.keyNum.push('#');
        }
        this._.mergeWith(this.customList[0],list,function(dest, src){
          if(_.isArray(dest) && _.isArray(src)){
            return dest.concat(src);
          }
        })

        if(this.customList.length>1){
          this.customList.splice(1,1)
        }
        console.log(this.customList)
        // if(this.customList.length>0){
        //   const a5 = _.mergeWith(this.customList[0],list,function foo (a,b) {
        //     if (_.isArray(a)) {
        //       return a.concat(b)
        //     }
        //   })
        //
        //   console.log(a5)
        //
        // }

      },
      confirmText(text) {

        this.$emit('changeConfirm', text)
      },
      ...mapMutations({
        set_agentid: 'SET_AGENTID'
      })
    },
    watch: {

    },
    components: {
      CHeader,
      CliList,
      Loading,
      CBottom,
      CustomerList
    },


  }
</script>

<style scoped lang="stylus">
  .cli-all
    width: 100%
    background: #F6F8FC

    .content
      position: fixed;
      width: 100%;
      top: 1.9rem;
      bottom: 1rem;
      background-color #F6F8FC;

</style>
