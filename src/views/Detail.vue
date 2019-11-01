<template>
  <div style="margin: 0 80px;">
    <div v-if="region_name === ''">
      <a-empty />
    </div>
    <div v-else>
      <h1 style="text-align: left; margin-left: 80px; margin-bottom: 40px; font-weight: 600;">{{ region_name }}</h1>
      <div class="left">
        <a-menu style="width: 256px;" mode="inline" @click="handleClick">
          <a-menu-item key="intro">
            <a-icon type="link" />
            简介
          </a-menu-item>
          <a-sub-menu>
            <span slot="title"><a-icon type="database" /><span>破坏类型</span></span>
            <!-- TODO -->
            <a-menu-item :key="'d'+index" v-for="(item, index) in damages">破坏类型{{ index+1 }}</a-menu-item>
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
        <Introduction v-if="menuKey==='intro'" :intro="intro"/>
        <Damages v-if="menuKey.startsWith('d')" :damages="damages"/>
        <Charts v-if="menuKey==='chart'" :damages="damages"/>
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
      region_name: '',  // 地区名称
      intro: {
        content: '',
        pictures: []
      },  // 简介相关
      damages: [
        // { id: 1, name: '', percent: 0, pictures: [] }
      ],  // 破坏类型相关
      rankValue: 0,  // 评级
      conclusion: '',  // 总结
    }
  },
  mounted() {
    const id = this.$route.query.id
    // 一次请求
    // 处理成需要的格式
    this.$api.detail.regionDetail(id).then(detail => {
      const data = detail.data
      this.region_name = data.region_name
      this.intro.content = data.introduction
      this.intro.pictures.push(data.first_picture)
      data.pictures.forEach(pic => this.intro.pictures.push(pic.picture_path))
      this.rankValue = data.repair_rating
      this.conclusion = data.conclusion
      const damages = data.damage_type
      this.damages = []
      let temp = {}
      damages.forEach(damage => {
        temp = {}
        temp.id = damage.type_id
        // TODO
        temp.name = `破坏类型${damage.type_id}`
        temp.percent = damage.percent
        temp.pictures = []
        damage.pictures.forEach(pic => temp.pictures.push(pic.picture_path))
        this.damages.push(temp)
      })
    })
  },
  methods: {
    handleClick(e) {
      this.menuKey = e.key;
      if (e.key.startsWith('d')) {
        const anchor = this.$el.querySelector(`#${e.key}`) || {};
        document.documentElement.scrollTop = anchor.offsetTop;
      }
    }
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