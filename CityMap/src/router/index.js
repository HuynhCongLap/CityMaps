import Vue from 'vue'
import Router from 'vue-router'
import Transit from '@/components/Transit'
import Root from '@/components/Root'
import MyAddresses from '@/components/MyAddresses'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Root Page',
      component: Root
    },
    {
      path: '/transit',
      name: 'Transit Page',
      component: Transit
    },
    {
      path: '/myaddresses',
      name: 'Address Page',
      component: MyAddresses
    }
  ]
})
