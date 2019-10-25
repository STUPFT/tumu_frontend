<template>
  <div id="app">
    <div class="title">
      <span class="website-name">潮汕民居数据库</span>
      <span class="navigate-home" @click="navigateToHome">首页</span>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  methods: {
    navigateToHome() {
      this.$router.push('/');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.title {
  width: 100%;
  height: 80px;
  margin-bottom: 60px;
  text-align: left;
  background: #000;
  color: #FFF;
}
.website-name {
  font-size: 36px;
  line-height: 80px;
  margin-left: 80px;
}
.navigate-home {
  font-size: 18px;
  line-height: 80px;
  margin-left: 60px;
  cursor: pointer;
}
.navigate-home:hover {
  background: #0ab2d2;
}
</style>
