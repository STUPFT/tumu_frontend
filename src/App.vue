<template>
  <div id="app">
    <div class="header">
      <span class="name">潮汕民居数据库</span>
      <a href="/" class="home">首页</a>
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
  margin-top: 100px;
}
.header {
  width: 100%;
  height: 50px;
  line-height: 50px;
  position: fixed;
  top: 0;
  z-index: 2;
  text-align: left;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 5px 10px 0 rgba(0, 64, 128, 0.05);
}
.name {
  font-size: 20px;
  line-height: 50px;
  margin-left: 50px;
}
.home {
  margin-left: 60px;
  color: #0c093c;
  cursor: pointer;
}
</style>
