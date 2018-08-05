import Vue from 'vue'
import GameOfLife from '@/components/GameOfLife'

describe('GameOfLife.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(GameOfLife)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello .title').textContent)
      .toEqual('Game Of Life')
  })
})
