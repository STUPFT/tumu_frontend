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
    <div style="margin-top: 10px;">
      <a-radio-group @change="onChange" v-model="value">
        <a-radio :value="1">按破坏类型搜索</a-radio>
        <a-radio :value="2">按地区信息搜索</a-radio>
      </a-radio-group>
    </div>
    <!--分割线-->
    <a-divider orientation="left" style="margin-bottom: 0;padding: 0 50px;">
      <span style="font-weight: 600;">分类</span>
    </a-divider>
    <!--折叠面板-用于过滤选择破坏类型-->
    <div id="collapse-filter">
      <a-collapse defaultActiveKey="1" :bordered="false">
        <a-collapse-panel header="破坏类型" key="1">
          <a-button  id="DY0" @click="onDamageTyleButton">全部</a-button>
          <a-button class="damageType" v-for="(value,key,index) in damageType" :key="index" :id="'DY'+ value.type_id"  @click="onDamageTyleButton">{{value.type_name}}</a-button>
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

    <!-- 地区卡片列表 -->
    <div class="region-cards">
      <div v-for="item in regionList" :key="item.id" class="region-card">
        <!-- <img v-bind:src="item.first_picture" alt=""> -->
        <img src="../assets/test.jpg" alt="">
        <div class="region-name">{{ item.name }}</div>
        <div class="region-desc">
          <h1>简介</h1>
          <p>{{ item.introduction }}</p>
          <a-button type="danger" @click="checkDetail">查看更多</a-button>
        </div>
      </div>
    </div>
    <a-pagination style="margin-bottom: 80px;" v-model="current" :total="50" />

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
      current: 2,
      damageType:{},
      regionList: [
        {
          id: 1,
          name: '名称',
          first_picture: '../assets/test.jpg',
          introduction: `如果你有问题，没有其他地方可以转向，神秘而难以捉摸的罗伯特·麦考尔将为你寻求的治安法官提供帮助
            如果你有问题，没有其他地方可以转向，神秘而难以捉摸的罗伯特·麦考尔将为你寻求的治安法官提供帮助
            如果你有问题，没有其他地方可以转向，神秘而难以捉摸的罗伯特·麦考尔将为你寻求的治安法官提供帮助
            如果你有问题，没有其他地方可以转向，神秘而难以捉摸的罗伯特·麦考尔将为你寻求的治安法官提供帮助`
        },
        {
          id: 2,
          name: '名称',
          first_picture: '../assets/test.jpg',
          introduction: `如果你有问题，没有其他地方可以转向，神秘而难以捉摸的罗伯特·麦考尔将为你寻求的治安法官提供帮助
            如果你有问题，没有其他地方可以转向，神秘而难以捉摸的罗伯特·麦考尔将为你寻求的治安法官提供帮助
            如果你有问题，没有其他地方可以转向，神秘而难以捉摸的罗伯特·麦考尔将为你寻求的治安法官提供帮助
            如果你有问题，没有其他地方可以转向，神秘而难以捉摸的罗伯特·麦考尔将为你寻求的治安法官提供帮助`
        },
        {
          id: 3,
          name: '名称',
          first_picture: '../assets/test.jpg',
          introduction: `如果你有问题，没有其他地方可以转向，神秘而难以捉摸的罗伯特·麦考尔将为你寻求的治安法官提供帮助
            如果你有问题，没有其他地方可以转向，神秘而难以捉摸的罗伯特·麦考尔将为你寻求的治安法官提供帮助
            如果你有问题，没有其他地方可以转向，神秘而难以捉摸的罗伯特·麦考尔将为你寻求的治安法官提供帮助
            如果你有问题，没有其他地方可以转向，神秘而难以捉摸的罗伯特·麦考尔将为你寻求的治安法官提供帮助`
        },
        {
          id: 4,
          name: '名称',
          first_picture: '../assets/test.jpg',
          introduction: `如果你有问题，没有其他地方可以转向，神秘而难以捉摸的罗伯特·麦考尔将为你寻求的治安法官提供帮助
            如果你有问题，没有其他地方可以转向，神秘而难以捉摸的罗伯特·麦考尔将为你寻求的治安法官提供帮助`
        },
        {
          id: 5,
          name: '名称',
          first_picture: '../assets/test.jpg',
          introduction: `如果你有问题，没有其他地方可以转向，神秘而难以捉摸的罗伯特·麦考尔将为你寻求的治安法官提供帮助
            如果你有问题，没有其他地方可以转向，神秘而难以捉摸的罗伯特·麦考尔将为你寻求的治安法官提供帮助`
        },
        {
          id: 6,
          name: '名称',
          first_picture: '../assets/test.jpg',
          introduction: ''
        },
      ],
    }
  },
  mounted(){
    // 获取破坏类型列表。
    this.GetDamageTypeList();
  },
  methods: {
    onSearch(keyword) {
      this.search_keyword = keyword;
      this.$router.push('/search');
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
    },

    checkDetail() {
      this.$router.push({
        path: '/detail'
      })
    },
    // 获取破坏类型列表
    async GetDamageTypeList (){
      try{
        this.damageType = (await this.$api.home.damageType({})).damageType;
      }catch(err){
        console.log(err);
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
  margin: 0 50px;
}
button.ant-btn{
  margin: 5px;
}
#DY0,#rating0{
  color:rgb(64, 169, 255);
  border-color: rgb(64, 169, 255);
}

.region-cards {
  max-width: 1340px;
  margin: 40px auto;
  padding: auto;
  overflow: auto;
}

.region-card {
  width: 380px;
  height: 300px;
  float: left;
  margin: 32px;
  cursor: pointer;
  border: 3px solid rgb(236, 240, 241);
  border-radius: 8px;
  box-shadow: 1px 2px 1px #888888;
  transition: all .5s cubic-bezier(.8, .5, .2, 1.4);
}

.region-card img {
  width: 100%;
  height: 260px;
  border-radius: 6px;
  transition: all .5s cubic-bezier(.8, .5, .2, 1.4);
}

.region-card .region-name {
  width: 100%;
  height: 40px;
  transition: all .5s cubic-bezier(.8, .5, .2, 1.4);
  font-size: 18px;
  line-height: 36px;
  bottom: 0;
  text-align: center;
  background-color: rgb(236, 240, 241);
  color: #000;
  opacity: 0.3;
}

.region-desc {
  position: absolute;
  top:0px;
  left:0px;
  background-color: rgba(255,255,255,.7);
  width:100%;
  height:100%;
  transition: all .7s ease-in-out;
  padding: 20px;
  box-sizing: border-box;
  clip-path: circle(0% at 100% 100%);
}

.region-card:hover .region-desc {
  left:0px;
  transition: all .7s ease-in-out;
  clip-path: circle(75%);
}

.region-card:hover {
  transition: all .5s cubic-bezier(.8,.5,.2,1.4);
  box-shadow: 0px 2px 3px rgba(0,0,0,.3);
  transform: scale(.97);
}

.region-card:hover img, .card:hover .region-name {
  transition: all .5s cubic-bezier(.8,.5,.2,1.4);
  filter: blur(3px);
}

.region-card h1 {
  color: #ff3838;
  letter-spacing: 1px;
  margin: 0px;
}

.region-card p {
  line-height: 24px;
  height: 70%;
  opacity: 0.8;
  padding: 8px 0 0 6px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 7;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

