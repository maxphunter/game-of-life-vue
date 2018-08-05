import Vue from 'vue'
import Router from 'vue-router'
import GameOfLife from '@/components/GameOfLife'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'gameOfLife',
      component: GameOfLife
    }
  ]
})
