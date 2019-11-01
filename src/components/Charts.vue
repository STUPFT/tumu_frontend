<template>
  <div>
    <!-- 图表 -->
    <a-card class="chart-container">
      <div style="width: 800px;height: 600px;" id="damageTypePie"></div>
    </a-card>
  </div>
</template>

<script>
export default {
  name: 'Charts',
  props: {
    damages: Array
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    this.initDamageTypePie();
  },
  methods:{
    initDamageTypePie(){
      console.log(this.damages)
      const {data,legend} = this.formatData()
      const damageTypePie = this.$echarts.init(document.getElementById('damageTypePie'), 'light');
      const options = {
        title : {
          text: '该地区不同破坏类型占比',
          x:'center'
        },
        tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} :{d}%"
        },
        toolbox: {
          show: true,
          feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
          }
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: legend
        },
        series : [
          {
            name: '破坏类型',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:data,
            label: {
              normal: {
                textStyle: {
                  color: 'rgba(0, 0, 0, 0.5)'
                }
              }
            },
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      damageTypePie.setOption(options);
    },
    // 格式化数据
    formatData(){
      let data = []
      let legend =[]
      this.damages.forEach(err => {
        let temp = {
          value:err.percent,
          name:err.name
        }
        data.push(temp)
        legend.push(err.name)
      })
      return {
        data,
        legend
      }
    }
  }
}
</script>

<style>
  .chart-container:hover{
    box-shadow: 0 8px 8px rgba(10,16,20,.24),0 0 8px rgba(10,16,20,.12);
  }
</style>
