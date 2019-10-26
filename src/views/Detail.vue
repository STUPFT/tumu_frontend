<template>
  <div style="margin: 0 80px;">
    <div v-if="damage.length === 0">
      <a-empty />
    </div>
    <div v-else>
      <h1 style="text-align: left; margin-left: 80px; margin-bottom: 40px; font-weight: 600;">沟南许地</h1>
      <div class="left">
        <a-menu style="width: 256px;" mode="inline" @click="handleClick">
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
      </div>
      
      <div class="right">
        <Introduction v-if="menuKey==='intro'"/>
        <Damages v-if="menuKey.startsWith('d')"/>
        <Statistics v-if="menuKey==='stat'"/>
        <div v-if="menuKey==='rank'">
          <Rank/>
          <div style="height: 26px; width: 100%;"></div>
          <Conclusion/>
        </div>
      </div>
      <a-back-top />
    </div>
  </div>
</template>

<script>
import Introduction from '../components/Introduction'
import Damages from '../components/Damages'
import Statistics from '../components/Statistics'
import Rank from '../components/Rank'
import Conclusion from '../components/Conclusion'

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
.left {
  width: 260px;
  padding: 0 2px;
  float: left;
}

.right {
  overflow: hidden;
  text-align: left;
  padding: 10px 30px;
}
</style>