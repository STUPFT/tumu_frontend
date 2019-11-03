<template>
  <div class="container">
    <!-- 搜索栏组件 -->
    <div>
      <!-- 搜索栏 -->
      <div id="search-bar">
        <a-input-search
          placeholder="input search text"
          @search="onSearch"
          enterButton="Search"
          size="large"
          v-model="keyword"
        />
      </div>
      <!-- 单选按钮 -->
      <div style="margin-top: 10px;">
        <a-radio-group @change="onChange" v-model="value">
          <a-radio :value="1">按地区信息搜索</a-radio>
          <a-radio :value="2">按破坏类型搜索</a-radio>
        </a-radio-group>
      </div>
    </div>
    <!-- 搜索结果为空 -->
    <div v-if="result.length === 0" style="margin-top: 120px;">
      <a-empty image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original">
        <span slot="description"> 暂无相关内容 </span>
      </a-empty>
    </div>
    <!-- 搜索结果 -->
    <div v-else>
      <a-divider style="margin-bottom: 50px;">搜索结果</a-divider>
      <div class="result-body" v-for="(item, index) in result" :key="index">
        <div class="result-pic-box" :style="'background: url('+item.first_picture+') no-repeat; background-size: 100% 100%;'"></div>
        <div class="result-text">
          <div class="result-text-content">
            <div class="result-title-content">
              <h1>{{ item.name }}</h1>
              <p> 
                {{ item.intro }}
              </p>
            </div>
            <span class="cui-btn" @click="checkDetail(item.id)">查看更多</span>
          </div>
        </div>
      </div>
      <a-back-top />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      value: 1,
      keyword: '',
      result: []
    }
  },
  async created() {
    const keyword = this.$route.query.keyword
    if (keyword) {
      this.keyword = keyword
      this.value = this.$route.query.modeValue
      await this.onSearch()
    }
  },
  methods: {
    async onSearch() {
      const key = this.keyword
      if (!key) return
      this.result = []
      const mode = this.value === 1 ? 'region_info' : 'damage_type' 
      const data = (await this.$api.search.search({ key, mode })).data
      let temp
      data.forEach(d => {
        temp = {}
        temp.id = d.region_id
        temp.name = d.region_name
        temp.first_picture = d.first_picture
        temp.intro = d.introduction.length < 200 ? d.introduction : d.introduction.substring(0, 200).concat('...')
        this.result.push(temp)
      })
    },
    onChange(e) {
      this.value = e.target.value;
    },
    checkDetail(id) {
      this.$router.push({
        path: 'detail',
        query: {
          id: id
        }
      });
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 50px;
}

#search-bar {
  height: 100%;
  width: 50%;
  margin: 0 auto;
}

.result-body {
  position: relative;
  text-align: left;
  margin-bottom: 80px;
}

.result-pic-box {
  position: absolute;
	top: 12px;
	left: 0;
	width: 420px;
	height: 280px;
	background-position: center;
	background-size: cover
}

.result-text {
  box-shadow: 0 15px 30px 10px rgba(196,203,222,0.43);
	border-radius: 2px;
	padding-left: 40px;
	margin-left: 380px;
	background-color: white;
	height: 304px;
}

.result-body:after {
	content: "";
	display: table;
	clear: both;
}

.result-text-content {
	position: relative;
	overflow: hidden;
  width: 100%;
	height: 100%;
  padding: 30px 60px;
}

.result-text-content h1 {
	max-height: 56px;
	font-size: 22px;
	line-height: 24px;
	color: #383e63;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 1;
	overflow: hidden;
	margin-bottom: 10px
}

.result-text-content p {
	margin-bottom: 20px;
	font-size: 14px;
	line-height: 22px;
	color: #737895;
	position: relative;
}

.result-text-content p::before {
	content: "";
	width: 21px;
	height: 18px;
	background: url("../assets/ei-v3-point.png") no-repeat;
	background-size: cover;
	position: absolute;
	bottom: -28px;
	right: -31px;
}

.result-text-content p::after {
	content: "";
	width: 21px;
	height: 18px;
	background: url("../assets/ei-v3-point.png") no-repeat;
	background-size: cover;
	position: absolute;
	top: 0;
	left: -31px;
	transform: rotatez(180deg);
}

.cui-btn {
	display: inline-block;
	height: 40px;
	padding: 0 30px;
	border: solid 1px transparent;
	border-radius: 2px;
	background: transparent;
	font-weight: 400;
	font-size: 14px;
	line-height: 38px;
	text-align: center;
	white-space: nowrap;
	vertical-align: middle;
	border-color: #f66f6a;
	background-color: #f66f6a;
	color: #fff;
  cursor: pointer;
}

.cui-btn:hover {
	box-shadow: 0 8px 16px rgba(246,111,106,0.5);
}
</style>