import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Bikecheck from '@/components/Bikecheck/Bikecheck'
import Shop from '@/components/Shop/Shop'
import StreamComp from '@/components/StreamComp/StreamComp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/bikecheck',
      name: 'Bikecheck',
      component: Bikecheck
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/stream',
      name: 'StreamComp',
      component: StreamComp
    }
    
  ]
})
