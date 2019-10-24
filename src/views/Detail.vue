<template>
  <div style="margin: 100px 100px;">
    <a-menu style="width: 256px; float: left;" mode="inline" @click="handleClick">
      <a-menu-item key="intro">
        <a-icon type="link" />
        简介
      </a-menu-item>
      <a-sub-menu>
        <span slot="title"><a-icon type="database" /><span>破坏类型</span></span>
        <a-menu-item :key="'d'+index" v-for="(item, index) in damage">破坏类型{{ index+1 }}</a-menu-item>
      </a-sub-menu>
      <a-menu-item key="stat">
        <a-icon type="pie-chart" />
        数据统计
      </a-menu-item>
      <a-menu-item key="rank">
        <a-icon type="schedule" />
        评级和总结
      </a-menu-item>
    </a-menu>
    <div v-if="damage.length === 0">
      <a-empty />
    </div>
    <div v-else>
      <Introduction v-if="menuKey==='intro'"/>
      <Damages v-if="menuKey.startsWith('d')"/>
      <Statistics v-if="menuKey==='stat'"/>
      <div v-if="menuKey==='rank'">
        <Rank/>
        <Conclusion/>
      </div>
    </div>
    <a-back-top />
  </div>
</template>

<script>
import Introduction from '../components/Introduction'
import Damages from '../components/Damages'
import Statistics from '../components/Statistics'
import Rank from '../components/Rank'
import Conclusion from '../components/Conclusion'
// import { Introduction, Damages, Statistics, Rank, Conclusion } from '../components'

export default {
  name: 'Detail',
  components: {
    Introduction,
    Damages,
    Statistics,
    Rank,
    Conclusion
  },
  data() {
    return {
      menuKey: 'intro',
      damage: [
        { name: '破坏' },
        { name: '破坏' },
        { name: '破坏' },
        { name: '破坏' },
        { name: '破坏' },
        { name: '破坏' }
      ]
    }
  },
  methods: {
    handleClick(e) {
      this.menuKey = e.key;
      if (e.key.startsWith('d')) {
        const anchor = this.$el.querySelector(`#${e.key}`) || {};
        document.documentElement.scrollTop = anchor.offsetTop;
      }
    },
  },
}
</script>

<style scoped>

</style>