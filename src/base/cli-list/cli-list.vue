<template>
  <div class="cli-list">
    <div class="cli-list1">
      <div class="cli-list-all cli-list-com" v-for="(items,index) in tags" @click="cliActive(index)" :class="cliTitleS(index)">
        <div class="cli-size" data-index="0">{{items.name}}</div>
        <div class="triangle-down"></div>
      </div>

    </div>
    <transition name="normal">
      <div class="check-list" v-show="checkListShow">
        <scroll ref="scroll" class="scroll" :data="checkList">
          <ul >
            <li v-for="(items, index) in checkList" :key="index" @click.stop="_checkList(index)" :class="checkStyle(index)">
              <p  v-if="items.name">{{items.name}}</p>
              <p  v-else="items.name"  >{{items.month}}</p>
              <span class="iconfont icon-duihao"></span>
            </li>
          </ul>
        </scroll>
      </div>
    </transition>
    <transition name="shadow">
      <div class="checkShadow" @click.prevent="toggleShow" v-show="checkListShow">
      </div>
    </transition>

  </div>
</template>

<script>
  import Scroll from 'base/scroll/scroll'
  import {getData} from 'common/js/dom'
  import {mapGetters,mapMutations} from 'vuex'
  export default {
    name: "cli-list",
    props:{
      customerTags:{
        type:Array,
        default:[]
      },
      stateData:{
        type:Array,
        default:[]
      },
      gzState:{
        type:Array,
        default:[]
      },
      khBirthday:{
        type:Array,
        default:[]
      }
    },
    data(){
      return {
        checkList:[],
        checkListShow:false,
        checkIndex:0,
        checkFlag:-1,
      }
    },
    components: {
      Scroll
    },
    methods: {
      cliActive(index) {
        index=parseInt(index)

        if(index===0 ){
          this.checkList=this.stateData
        }
        if(index===1){
          this.checkList=this.gzState
        }
        if(index === 2||index ===3 ){
          this.checkList=this.khBirthday
        }
        if(this.tagFlag != index){
          this.checkFlag = -1
        }
        this.$emit('checkIndex',index)
        if(this.checkIndex === index){
          return this.checkListShow = !this.checkListShow
        }
        this.checkIndex = index
        this.setCheckFlag(0)
        this.setTagFlag(this.checkIndex)
      },
      cliTitleS(index){
        if(this.checkIndex === index){
          return 'cliTitleS'
        }
        return ''
      },
      _checkList(index){
        this.checkFlag = index
        this.setCheckFlag(this.checkFlag)
        this.checkListShow = !this.checkListShow
        this.$emit('checkFlagIndex',index)
      },
      refresh() {
        this.$refs.scroll.refresh()
      },
      checkStyle(index){
        if(this.checkFlag ===index){
          return 'checkStyle'
        }
        return ''
      },
      toggleShow(){
         return this.checkListShow = !this.checkListShow
      },
      ...mapMutations({
        'setTagFlag':'SET_TAG_FLAG',
        'setCheckFlag':'SET_CHECK_FLAG'
      })
    },
    created() {
      console.log(this.customerTags)
      console.log(this.stateData)
      console.log(this.gzState)
      console.log(this.khBirthday)
    },
    computed:{
      tags(){
        if(this.increase===0){
          return this.customerTags
        }else{

        }
      },
      ...mapGetters(
        ['increase','tagFlag']
      )
    },
    watch:{
      checkList(){
        this.refresh()
      },

    }

  }
</script>

<style scoped lang="stylus">
  .cli-list
    width: 100%;
    height: 1rem;
    background-color: #fff;
    border-bottom: 1px solid rgba(0, 0, 0, .2)
    .cli-list1
      display: flex;
      height: 1rem;
      .cli-list-com
        flex: 1;
        font-size: .32rem;
        display: flex;
        justify-content: center;
        .triangle-down
          width: 0;
          margin-top: .5rem;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 7px solid #c7c8c9;
          margin: auto 0;
        .cli-size
          color: #4c688f;
          line-height: 1rem;
          &:active
            color:#3c8efe
      .cliTitleS
        .cli-size
          color:#3c8efe
          border-bottom: 2px solid #3a8cfe
        .triangle-down
          border-top: 7px solid #3c8efe;
    .check-list
      height: 2.4rem;
      overflow: hidden;
      z-index: 99;
      position: fixed;
      width: 100%;
      background-color: #fff;
      margin-top: 1px;
//       &.normal-enter-active, &.normal-leave-active
//         transition: all 0.1s cubic-bezier(0.86, 0.18, 0.82, 1.32)
// 
//       &.normal-enter, &.normal-leave-to
//         transform: translate3d(0,0, 0)
//         height 0
//         opacity: 0
      .scroll
        height: 100%;
        overflow: hidden;
        li
          display:flex
          justify-content space-between
          height .65rem
          margin .2rem .2rem
          p
            font-size .35rem
          .iconfont
            display block
          .icon-duihao:before
            content:''
        .checkStyle
          p
            color: #3c8efe
          .iconfont
            display block
            font-size .45rem
            color: #3c8efe
          .icon-duihao:before
            content:'\e633'
    .checkShadow
      position: fixed;
      width: 100%;
      bottom: 0;
      top: 4.4rem;
      opacity .2
      z-index 99
      background-color: rgba(0,0,0,.8);
      &.shadow-enter-active, &.shadow-leave-active
        transition: all 0.1s cubic-bezier(0.86, 0.18, 0.82, 1.32)
      &.shadow-enter, &.shadow-leave-to
        transform: translate3d(0,5rem, 0)
        opacity: 0
</style>
