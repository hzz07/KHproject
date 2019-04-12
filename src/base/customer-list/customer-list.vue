<template>
  <div class="customer" >
    <scroll
      class="scroll"
      ref="scroll"
      :data="customList"
      :pullup="pullup"
      :probeType='probeType'
      @scroll='scroll'
      :beforeScroll="true"
      :listenScroll=listenScroll
      @scrollToEnd="searchMore"
    >
      <ul ref="customer">
        <li v-for="(item,key,index) in list[0]" ref="listGroup">
          <h2 v-html="key"></h2>
          <ul class="wrap-info">
            <li class="info" v-for="items in item">
              <div class="avtaor" >
               {{items.cusname}}
              </div>
              <div class="customer-info">
                <div class="customer-info-top">
                  <div class="cuName">
                    {{items.cusname}}
                  </div>
                  <div class="cuStatus" v-show="items.applystate==='1'">
                    已签单
                  </div>

                </div>
                <div class="customer-info-bottom">
                  <div class="hudong" v-html="lastHdong(items.lastTime,items.visnum)">
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </li>
        <div class="list-img" style=""
             v-show="!customList.length>0"
        >
          <img src="../../common/imgs/backg.png" alt="">
        </div>
        <loading v-show="hasMore" :title="title" :showLoading="showLoading"></loading>
      </ul>
      <div class="list-fixed" v-show="fixedTitle&&list.length>0"  ref='fixed'>
        <h1 class="fixed-title">{{fixedTitle}}</h1>
      </div>
    </scroll>
    <div class="nameKey">
      <ul>
        <li
          v-for="(item,index) in key" :data-index='index'
          @touchstart.prevent="progressTouchStart"
          @touchmove.prevent="progressTouchMove"
          :class="{'cliColor':currentIndex===index}"
        >
          {{item}}
        </li>
      </ul>
    </div>

  </div>

</template>

<script>
  import Scroll from 'base/scroll/scroll'
  import {objKeySort} from 'common/js/util' //进行获取客户列表的排序
  import {customerMixin} from 'common/js/mixin'
  import {getData} from 'common/js/dom'
  import Loading from 'base/loading/loading'
  const ANCHOR_HEIGHT = 22
  const TITLE_HEIGHT = 20
  export default {
    name: "customer-list",
    data(){
      return{
        pullup:true,
        list:[],
        key:[],
        totolPage:0,
        scrollY:-1,
        currentIndex:0,
        diff:-1,
        fixedTitle:'',
        currenPage:1,
        title:'上拉加载',
        showLoading:false
      }
    },
    props:{
      keyNum:{
        type:Array,
        default:()=>[]
      },
      allPage:{
        type:Number,
        default: 1
      },
      customList:{
        type:Array,
        default:()=>[]
      },
      page:{
        type:Number,
        default:1
      }
    },
    methods:{
      searchMore(){
        if(this.totolPage>this.currenPage){
          this.showLoading=true
          this.title='加载中...'
          this.$emit('pullDown')
        }
      },
      lastHdong(lastTime,visnum){
        if(lastTime) {
          lastTime = lastTime.split(' ')[0].split('-').join('/');
          lastTime = parseInt((new Date() - new Date(lastTime)) / 1000 / 60 / 60 / 24);
          lastTime = (lastTime.toString()).replace(/-/g, "");
          if(lastTime == 0) {
            return '今天刚刚互动' + ' | ' + '互动' + visnum + '次';
          } else {
            return  '上次互动' + lastTime + '天前' + ' | ' + '互动' + visnum + '次';
          }
        } else {
          return  '无互动记录';
        }
      },
      progressTouchStart(e){
        let anchorIndex= getData(e.target, 'index');
        let firstTouch = e.touches[0]
        this.touch.y1=firstTouch.pageY
        this.touch.anchorIndex = anchorIndex
        this._scrollTo(anchorIndex)

      },
      progressTouchMove(e){
        let firstTouch = e.touches[0]
        this.touch.y2 = firstTouch.pageY
        let delta= (this.touch.y2 -this.touch.y1)/ANCHOR_HEIGHT |0
        let anchorIndex = parseInt(this.touch.anchorIndex) + delta
        this._scrollTo(anchorIndex)
      },
      _scrollTo(index){
        if(!index && index!==0){
          return
        }
        if(index<0){
          index =0
        }else if(index>this.listenHeight.length -2 ){
          index = this.listenHeight.length -2
        }

        this.scrollY=-this.listenHeight[index]
        this.$refs.scroll.scrollToElement(this.$refs.listGroup[index],0)
      },
      _calculateHeight(){
        this.listenHeight=[]
        const list = this.$refs.listGroup
        let height =0;
        this.listenHeight.push(height);
        for (let i=0;i<list.length;i++){
          let item = list[i]
          height+=item.clientHeight
          this.listenHeight.push(height)
        }
      },

      scroll(pos){
        this.scrollY=pos.y
      },
    },
    created(){
      this.touch={}
      this.listenHeight = []
      this.probeType= 3
      this.listenScroll = true
    },
    watch:{
      keyNum(){

        return this.key = this.keyNum
      },
      allPage(){

        return this.totolPage = this.allPage
      },
      page(){

        return this.currenPage = this.page
      },
      customList(){

        if(this.customList.length===0){
          return this.list=[]
        }
				
        this.list.push(objKeySort(this.customList[0]))
        if(this.list.length>1){
          this.list.splice(0,1)
        }
        return this.list
      },
      list(){
        setTimeout(()=>{
          this._calculateHeight()
        },20)
        this.$refs.scroll.refresh()
      },
      currentIndex(){
        if(this.scrollY<=0){
          this.fixedTitle = this.key[this.currentIndex]
        }
      },
      scrollY(newY){
        if(newY>0){
          this.currentIndex = -1
          this.fixedTitle = ''
          return
        }
        const listenHeight = this.listenHeight

        for(let i = 0;i<listenHeight.length-1;i++){
          let height1=listenHeight[i]
          let height2=listenHeight[i+1]
          if(!height2 || (-newY >= height1 && -newY <height2)){
            this.diff =height2+newY
            this.currentIndex = i
            return
          }

        }
        //当滚动到底部，且-newY的大于最后一个元素的上限
        this.currentIndex =listenHeight.length-2
      },
      diff(newVal){
        let fixedTop=(newVal>0 && newVal<TITLE_HEIGHT)?newVal-TITLE_HEIGHT:0
        if(this.fixedTop ===fixedTop){
          return
        }
        this.fixedTop = fixedTop
        this.$refs.fixed.style.transform= `translate3D(0,${fixedTop}px,0)`
      }
    },
    computed:{
      hasMore(){
        if(this.totolPage>this.currenPage){
          return true
        }else{
          return false
        }

      }
    },
    components:{
      Scroll,
      Loading
    }
  }
</script>

<style scoped lang="stylus">
  .customer
    height 100%
    overflow hidden
    .scroll
      position absolute
      width 100%
      height 100%
      overflow hidden
      margin-right: 6%;
      margin-top .1rem
      box-shadow: 0px 0px 10px 1px rgba(0,0,0,.1);
      ul
        width 98%
        margin auto
        h2
          height 20px
          background-color:rgba(0,0,0,0.1)
          font-size .16rem
          line-height .4rem
          padding-left .1rem
          color #204d89
        .wrap-info
          width 100%
          background-color white
          .info
            height 1.6rem
            border-bottom 1px solid rgba(0,0,0,.1)
            display flex
            align-items center
            .avtaor
              width .9rem
              height .9rem
              margin-left .28rem
              border-radius 50%
              background-image url("../../common/imgs/Abg.png")
              background-size cover
              color: white
              font-size .2rem
              line-height .9rem
              text-align center
              overflow hidden
            .customer-info
              margin .32rem 0
              flex 1
              margin-left .32rem
              .customer-info-top
                display flex
                .cuName
                  font-size .35rem
                .cuStatus
                  font-size .20rem
                  color #204d89
                  line-height .35rem
                  border-radius .1rem
                  padding 0 .2rem
                  border 1px dashed #0086b3
                  height .35rem
                  margin-left .30rem
              .customer-info-bottom
                display flex
                .hudong
                  font-size .22rem
                  margin-top .25rem
      .list-fixed
        position: absolute
        top:0;
        left: 0
        width: 98%;
        margin-left:1% ;
        .fixed-title
          height 20px
          background-color:#E5E5E5
          font-size .16rem
          line-height .4rem
          padding-left .1rem
          color #204d89
    .nameKey
      width .4rem
      position absolute
      right 0
      margin-top 2.5%
      height 95%
      ul
        width .35rem
        height 100%
        border-radius .15rem
        display: flex
        justify-content center
        align-items center
        flex-direction column
        li
          width .35rem
          font-size .3rem
          height 22px
          text-align center
        .cliColor
          color: red
    .list-img
      width 100%
      position relative
      img
        width 100%
</style>
