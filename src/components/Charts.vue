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
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['破坏类型1','破坏类型2','破坏类型3','破坏类型4','破坏类型5','破坏类型6']
        },
        series : [
          {
            name: '破坏类型',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
              {value:12, name:'破坏类型1'},
              {value:8, name:'破坏类型2'},
              {value:20, name:'破坏类型3'},
              {value:40, name:'破坏类型4'},
              {value:10, name:'破坏类型5'},
              {value:10, name:'破坏类型6'}
            ],
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
    }
  }
}
</script>

<style>
  .chart-container:hover{
    box-shadow: 0 8px 8px rgba(10,16,20,.24),0 0 8px rgba(10,16,20,.12);
  }
</style>
