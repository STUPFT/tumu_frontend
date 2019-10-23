<template>
  <div id="container">
    <!-- 搜索栏 -->
    <div id="search-bar">
      <a-input-search
        placeholder="input search text"
        @search="onSearch"
        enterButton="Search"
        size="large"
      />
    </div>
    <!-- 单选按钮 -->
    <div>
      <a-radio-group @change="onChange" v-model="value">
        <a-radio :value="1">按破坏类型搜索</a-radio>
        <a-radio :value="2">按地区信息搜索</a-radio>
      </a-radio-group>
    </div>
    <!--分割线-->
    <a-divider id="divider"/>
    <!--折叠面板-用于过滤选择破坏类型-->
    <div id="collapse-filter">
      <a-collapse defaultActiveKey="1" :bordered="false">
        <a-collapse-panel header="破坏类型" key="1">
          <a-button  id="DY0" @click="onDamageTyleButton">全部</a-button>
          <a-button class="damageType" id="DY1" @click="onDamageTyleButton">破坏类型一</a-button>
          <a-button class="damageType" id="DY2" @click="onDamageTyleButton">破坏类型二</a-button>
          <a-button class="damageType" id="DY3" @click="onDamageTyleButton">破坏类型三</a-button>
          <a-button class="damageType" id="DY4" @click="onDamageTyleButton">破坏类型四</a-button>
          <a-button class="damageType" id="DY5" @click="onDamageTyleButton">破坏类型五</a-button>
          <a-button class="damageType" id="DY6" @click="onDamageTyleButton">破坏类型六</a-button>
          <a-button class="damageType" id="DY7" @click="onDamageTyleButton">破坏类型七</a-button>
          <a-button class="damageType" id="DY8" @click="onDamageTyleButton">破坏类型八</a-button>
          <a-button class="damageType" id="DY9" @click="onDamageTyleButton">破坏类型九</a-button>
          <a-button class="damageType" id="DY10" @click="onDamageTyleButton">破坏类型十</a-button>
          <a-button class="damageType" id="DY11" @click="onDamageTyleButton">破坏类型十一</a-button>
          <a-button class="damageType" id="DY12" @click="onDamageTyleButton">破坏类型十二</a-button>
          <a-button class="damageType" id="DY13" @click="onDamageTyleButton">破坏类型十三</a-button>
          <a-button class="damageType" id="DY14" @click="onDamageTyleButton">破坏类型十四</a-button>
          <a-button class="damageType" id="DY15" @click="onDamageTyleButton">破坏类型十五</a-button>
        </a-collapse-panel>
        <a-collapse-panel header="待修复紧迫性评级" key="2">
          <a-button id="rating0" @click="onRepairRatingButton">全部</a-button>
          <a-button class="RepairRating" id="rating1" @click="onRepairRatingButton">一级</a-button>
          <a-button class="RepairRating" id="rating2" @click="onRepairRatingButton">二级</a-button>
          <a-button class="RepairRating" id="rating3" @click="onRepairRatingButton">三级</a-button>
          <a-button class="RepairRating" id="rating4" @click="onRepairRatingButton">四级</a-button>
          <a-button class="RepairRating" id="rating5" @click="onRepairRatingButton">五级</a-button>
        </a-collapse-panel>
      </a-collapse>
    </div>
    <!-- 测试回到顶部按钮用 -->
    <div style="height:5000px;"></div>
    <!-- 回到顶部 -->
    <a-back-top />
  </div>

</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      search_keyword: '',
      value: 1,
    }
  },
  methods: {
    onSearch(value) {
      this.search_keyword = value;
    },
    onChange(e) {
      this.value = e.target.value;
    },
    // 按钮颜色的切换
    onDamageTyleButton(e){
      const ele = e.target;
      if(ele.id === 'DY0'){
        // 把"全部"按钮设成蓝色
        ele.style['border-color'] = ele.style['color'] = 'rgb(64, 169, 255)'
        const damageTypeBT = document.getElementsByClassName('damageType')
        // 把其他按钮设成灰色
        for(let key in damageTypeBT){
          damageTypeBT[key].style['color'] = 'rgba(0,0,0,0.6)';
          damageTypeBT[key].style['border-color'] = 'rgb(217,217,217)';
        }
      }
      else {
        // 把"全部"按钮设成灰色
        const allBT = document.getElementById("DY0")
        allBT.style['color'] = 'rgba(0,0,0,0.6)';
        allBT.style['border-color'] = 'rgb(217,217,217)';
        // 把点击按钮设置成蓝色或灰色（选与不选）
        if(ele.style['color'] === 'rgb(64, 169, 255)'){
          ele.style['color'] = 'rgba(0,0,0,0.6)'
          ele.style['border-color'] = 'rgb(217,217,217)'
        }
        else {
          ele.style['border-color'] = ele.style['color'] = 'rgb(64, 169, 255)'
        }
      }
    },
    onRepairRatingButton(e){
      const ele = e.target;
      if(ele.id === 'rating0'){
        // 把"全部"按钮设成蓝色
        ele.style['border-color'] = ele.style['color'] = 'rgb(64, 169, 255)'
        const RepairRatingBT = document.getElementsByClassName('RepairRating')
        // 把其他按钮设成灰色
        for(let key in RepairRatingBT){
          RepairRatingBT[key].style['color'] = 'rgba(0,0,0,0.6)';
          RepairRatingBT[key].style['border-color'] = 'rgb(217,217,217)';
        }
      }
      else {
        // 把"全部"按钮设成灰色
        const allBT = document.getElementById("rating0")
        allBT.style['color'] = 'rgba(0,0,0,0.6)';
        allBT.style['border-color'] = 'rgb(217,217,217)';
        // 把点击按钮设置成蓝色或灰色（选与不选）
        if(ele.style['color'] === 'rgb(64, 169, 255)'){
          ele.style['color'] = 'rgba(0,0,0,0.6)'
          ele.style['border-color'] = 'rgb(217,217,217)'
        }
        else {
          ele.style['border-color'] = ele.style['color'] = 'rgb(64, 169, 255)'
        }
      }
    }
  },
}
</script>

<style scoped>
#container {
  margin: 0;
  padding: 0;
}

#search-bar {
  height: 100%;
  width: 50%;
  margin: 0 auto;
}
#collapse-filter{
  text-align: left;
}
button.ant-btn{
  margin: 5px;
}
#divider{
  margin-bottom:0;
}
#DY0,#rating0{
  color:rgb(64, 169, 255);
  border-color: rgb(64, 169, 255);
}
</style>
