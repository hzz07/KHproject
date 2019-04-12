import Vue from 'vue'
import Router from 'vue-router'
import ClientRegister from '@/components/clientRegister'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/clientRegister'
    },
    {
      path: '/clientRegister',
      name: 'ClientRegister',
      component: ClientRegister
    }
  ]
})
