<template>
  <div id="container" v-infinite-scroll="loadMore" :infinite-scroll-disabled="busy" :infinite-scroll-distance="-40" :infinite-scroll-throttle-delay="1000">
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
          <a-button class="damageType" v-for="(value,key,index) in damageType" :key="index" :typeId="value.type_id" :id="'DY'+ value.type_id"  @click="onDamageTyleButton">{{value.type_name}}</a-button>
        </a-collapse-panel>
        <a-collapse-panel header="待修复紧迫性评级" key="2">
          <a-button id="rating0" @click="onRepairRatingButton">全部</a-button>
          <a-button class="RepairRating" :repairRating="1" id="rating1" @click="onRepairRatingButton">一级</a-button>
          <a-button class="RepairRating" :repairRating="2" id="rating2" @click="onRepairRatingButton">二级</a-button>
          <a-button class="RepairRating" :repairRating="3" id="rating3" @click="onRepairRatingButton">三级</a-button>
          <a-button class="RepairRating" :repairRating="4" id="rating4" @click="onRepairRatingButton">四级</a-button>
          <a-button class="RepairRating" :repairRating="5" id="rating5" @click="onRepairRatingButton">五级</a-button>
        </a-collapse-panel>
      </a-collapse>
    </div>

    <!-- 地区卡片列表 -->
    <div class="region-cards">
      <div v-for="(item,key,index) in regionList" :key="index" class="region-card">
        <!-- <img v-bind:src="item.first_picture" alt=""> -->
        <img :src="item.first_picture" alt="">
        <div class="region-name">{{ item.region_name }}</div>
        <div class="region-desc">
          <h1>简介</h1>
          <p>{{ item.introduction }}</p>
          <a-button type="danger" @click="checkDetail(item.region_id)">查看更多</a-button>
        </div>
      </div>
    </div>
    <div v-if="loading && !busy" class="demo-loading-container">
      <a-spin />
    </div>
    <!-- 回到顶部 -->
    <a-back-top />
  </div>

</template>

<script>
  import infiniteScroll from 'vue-infinite-scroll'
export default {
  name: 'Home',
  directives: {infiniteScroll},
  data() {
    return {
      search_keyword: '',
      value: 1,
      current: 2,
      damageType:{},
      allDamageTypeId:'',
      repair_rating:'1,2,3,4,5',
      regionListParams:{},
      regionList:[],
      busy:false, //控制下拉加载的。
      page:0, //控制第几页。
      loading:false, // 控制加载中标签。
      anyMoreRegion:true // 是否还有更多的地区列表
    }
  },
  async created(){
    // 获取破坏类型列表。
    await this.GetDamageTypeList();
    this.GetRegionList()
  },
  methods: {
    onSearch(keyword) {
      if (!keyword) return;
      this.search_keyword = keyword;
      this.$router.push({
        path: '/search',
        query: {
          keyword: keyword
        }
      });
    },
    onChange(e) {
      this.value = e.target.value;
    },
    // 按钮颜色的切换
    async onDamageTyleButton(e){
      const ele = e.target;
      let situation = 0; // 用于后面筛选的时候分开各种情况。
      if(ele.id === 'DY0'){
        // 把"全部"按钮设成蓝色
        ele.style['border-color'] = ele.style['color'] = 'rgb(64, 169, 255)'
        const damageTypeBT = document.getElementsByClassName('damageType')
        // 把其他按钮设成灰色
        for(let ele of damageTypeBT){
          ele.style['color'] = 'rgba(0,0,0,0.6)';
          ele.style['border-color'] = 'rgb(217,217,217)';
        }
        await this.changeRegionListByDamageType(this.allDamageTypeId,situation)
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
          // 是蓝色，则直接从type_id中删除
          situation = 1
          await this.changeRegionListByDamageType(ele.getAttribute('typeId'),situation)
        }
        else {
          ele.style['border-color'] = ele.style['color'] = 'rgb(64, 169, 255)'
          // 不是蓝色，则需要先用include判断是全部按钮为蓝，还是其他按钮为蓝，分开处理。
          situation = 2
          await this.changeRegionListByDamageType(ele.getAttribute('typeId'),situation)
        }
      }
    },
    async onRepairRatingButton(e){
      const ele = e.target;
      let situation = 0; // 用于后面筛选的时候分开各种情况。
      if(ele.id === 'rating0'){
        // 把"全部"按钮设成蓝色
        ele.style['border-color'] = ele.style['color'] = 'rgb(64, 169, 255)'
        const RepairRatingBT = document.getElementsByClassName('RepairRating')
        // 把其他按钮设成灰色
        for(let ele of RepairRatingBT){
          ele.style['color'] = 'rgba(0,0,0,0.6)';
          ele.style['border-color'] = 'rgb(217,217,217)';
        }
        await this.changeRegionListByRepairRating(this.repair_rating,situation)
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
          // 是蓝色，则直接从type_id中删除
          situation = 1
          await this.changeRegionListByRepairRating(ele.getAttribute('repairRating'),situation)
        }
        else {
          ele.style['border-color'] = ele.style['color'] = 'rgb(64, 169, 255)'
          // 不是蓝色，则需要先用include判断是全部按钮为蓝，还是其他按钮为蓝，分开处理。
          situation = 2
          await this.changeRegionListByRepairRating(ele.getAttribute('repairRating'),situation)
        }
      }
    },

    checkDetail(id) {
      this.$router.push({
        path: '/detail',
        query: {
          id: id
        }
      })
    },
    // 获取破坏类型列表
    async GetDamageTypeList (){
      try{
        this.damageType = (await this.$api.home.damageType({})).damageType;
        // 把damageType存起来，方便其他页面使用。
        this.$store.state.damageType = this.damageType
      }catch(err){
        console.log(err);
      }
    },
    // 初始化时获取地区列表。
    async GetRegionList(){
      let type_id = ''
      // 获取全部的破坏类型id
      for( let value in this.damageType){
        type_id = type_id + this.damageType[value].type_id
      }
      // 用逗号隔开每个数字
      type_id = type_id.split('').join(',')
      // 初始化damageTypeId,方便后面的时候，不用每次都求
      this.allDamageTypeId = type_id
      const repair_rating = this.repair_rating
      this.regionListParams = {
        type_id,
        repair_rating,
        start:0,
        num:10,
      }
      this.regionList = (await this.$api.home.regionList(this.regionListParams)).region
    },
    // 根据用户对破坏类型和评级的刷选动态刷新地区列表
    async changeRegionListByDamageType(type_id,situation){
      switch (situation) {
        // 用户点击破坏类型的'全部'按钮，则把参数的type_id修改为包含全部破坏类型的id
        case 0:
          this.regionListParams.type_id = type_id;
          break;
        // 用户点击了破坏类型的非'全部'按钮，并且该按钮为蓝色，则直接把该type_id从按钮中删除
        case 1:
          this.regionListParams.type_id = this.regionListParams.type_id.replace(/,/g,'').replace(type_id,'')
          this.regionListParams.type_id = this.regionListParams.type_id.split('').join(',')
          break;
        // 用户点击了破坏类型的非'全部'按钮，并且该按钮不为蓝色，则分情况处理，用include判断，如果该type_id存在，
              // 则证明是'全部'按钮为蓝，所以直接覆盖就行，如果不是，则需要添加。
        case 2:
          this.regionListParams.type_id.includes(type_id)? this.regionListParams.type_id = type_id:(
            this.regionListParams.type_id ==='' ? this.regionListParams.type_id = this.regionListParams.type_id + `${type_id}` : this.regionListParams.type_id = this.regionListParams.type_id + `,${type_id}`
        )
          break;
      }
      // 对滚动加载的相关参数进行初始化
      this.page = 0;
      this.anyMoreRegion = true;
      this.busy = false
      this.regionListParams.start = 0
      // 发送请求获取数据
      this.regionList = (await this.$api.home.regionList(this.regionListParams)).region
    },
    async changeRegionListByRepairRating(repair_rating,situation){
      switch (situation) {
              // 用户点击评级的'全部'按钮，则把参数的repair_rating修改为包含全部评级
        case 0:
          this.regionListParams.repair_rating = repair_rating ;
          break;
              // 用户点击了评级的非'全部'按钮，并且该按钮为蓝色，则直接把该评级从参数中删除
        case 1:
          this.regionListParams.repair_rating = this.regionListParams.repair_rating.replace(/,/g,'').replace(repair_rating,'')
          this.regionListParams.repair_rating = this.regionListParams.repair_rating.split('').join(',')
          break;
              // 用户点击了评级的非'全部'按钮，并且该按钮不为蓝色，则分情况处理，用include判断，如果该type_id存在，
              // 则证明是'全部'按钮为蓝，所以直接覆盖就行，如果不是，则需要添加。
        case 2:
          this.regionListParams.repair_rating.includes(repair_rating)? this.regionListParams.repair_rating = repair_rating:(
          this.regionListParams.repair_rating ==='' ? this.regionListParams.repair_rating = this.regionListParams.repair_rating + `${repair_rating}` : this.regionListParams.repair_rating = this.regionListParams.repair_rating + `,${repair_rating}`
          )
          break;
      }
      // 对滚动加载的相关参数进行初始化。
      this.page = 0;
      this.anyMoreRegion = true;
      this.busy = false
      this.regionListParams.start = 0
      // 发送请求获取数据
      this.regionList = (await this.$api.home.regionList(this.regionListParams)).region
    },
    async loadMore(){
      // 防止regionListParams还没初始化就执行了这个函数导致报错。
      if(this.regionListParams.start === undefined){
        return;
      }
      this.loading = true;
      if(this.anyMoreRegion){
        this.page++;
        this.regionListParams.start = this.page * 10;
        let regionList = (await this.$api.home.regionList(this.regionListParams)).region
        !(regionList.length === 0)? this.regionList = this.regionList.concat(regionList) : (()=>{
          this.anyMoreRegion = false;
          this.busy = false;
          this.$message.warning('所有地区已经加载完');
        })()
      }
      else{
        this.$message.warning('所有地区已经加载完')
      }
      this.loading = false;
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
.demo-loading-container {
  position: absolute;
  bottom: 40px;
  width: 100%;
  text-align: center;
}
</style>

