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
          <a-menu-item key="chart">
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
        <Charts v-if="menuKey==='chart'"/>
        <div v-if="menuKey==='rank'">
          <Rank :rankValue="rankValue"/>
          <div style="height: 26px; width: 100%;"></div>
          <Conclusion :content="conclusion"/>
        </div>
      </div>
      <a-back-top />
    </div>
  </div>
</template>

<script>
import Introduction from '../components/Introduction'
import Damages from '../components/Damages'
import Charts from '../components/Charts'
import Rank from '../components/Rank'
import Conclusion from '../components/Conclusion'

export default {
  name: 'Detail',
  components: {
    Introduction,
    Damages,
    Charts,
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
      ],
      rankValue: 1,
      conclusion: `
        沟南许地汕头沟南许地位于汕头市区北郊， 面积1．5平方公里，人口1800余人，距市中心只有7公里，古地名叫紫菔陇。全村皆姓许，先祖由中原许昌迁闽，进而入潮，至第十世许兆基及其四子许弘烈自潮州来此开基，繁衍七百载；传至十五世，脉分数支，一支留居本土，一支外迁广州，成为广州的名门望族。
        沟南许地汕头沟南许地位于汕头市区北郊， 面积1．5平方公里，人口1800余人，距市中心只有7公里，古地名叫紫菔陇。全村皆姓许，先祖由中原许昌迁闽，进而入潮，至第十世许兆基及其四子许弘烈自潮州来此开基，繁衍七百载；传至十五世，脉分数支，一支留居本土，一支外迁广州，成为广州的名门望族。
        沟南许地汕头沟南许地位于汕头市区北郊， 面积1．5平方公里，人口1800余人，距市中心只有7公里，古地名叫紫菔陇。全村皆姓许，先祖由中原许昌迁闽，进而入潮，至第十世许兆基及其四子许弘烈自潮州来此开基，繁衍七百载；传至十五世，脉分数支，一支留居本土，一支外迁广州，成为广州的名门望族。
        沟南许地汕头沟南许地位于汕头市区北郊， 面积1．5平方公里，人口1800余人，距市中心只有7公里，古地名叫紫菔陇。全村皆姓许，先祖由中原许昌迁闽，进而入潮，至第十世许兆基及其四子许弘烈自潮州来此开基，繁衍七百载；传至十五世，脉分数支，一支留居本土，一支外迁广州，成为广州的名门望族。
      `
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