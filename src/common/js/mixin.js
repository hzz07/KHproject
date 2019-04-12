export const customerMixin = {
  data(){
    return{
      list:[]
    }
  },
  mounted() {
    this.customerlist(this.list)
  },
  activated() {
    this.customerlist(this.list)
  },
  watch: {
    list(newVal) {
      this.customerlist(newVal)
    }
  },
  methods: {
    customerlist() {
      throw new Error('component must implement handlePlaylist method')
    }
  }
}
