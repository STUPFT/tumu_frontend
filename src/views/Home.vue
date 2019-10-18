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
      search_keyword: ''
    }
  },
  methods: {
    onSearch(value) {
      this.search_keyword = value
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
</style>