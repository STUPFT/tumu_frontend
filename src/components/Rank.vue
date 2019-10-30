<template>
  <div class="rate-container">
    <h1 class="rate-title">评级</h1>
    <hr style="opacity: 0.3;">
    <a-rate :defaultValue="rankValue" disabled />
    <span class="rate-desc">{{ rateDesc[rankValue-1] }}</span>
  </div>
</template>

<script>
export default {
  name: 'Rank',
  inheritAttrs: false,
  props: {
    rankValue: Number
  },
  data() {
    return {
      rateDesc: ['一般严重', '不严重', '严重', '较严重', '非常严重']
    }
  },
  components: {
  }
}
</script>

<style scoped>
.rate-container {
  padding: 10px 30px;
  width: 100%;
  height: 120px;
  background-color: #FFF;
  border: 1px solid rgba(255, 255, 255);
  border-radius: 6px;
}

.rate-container:hover {
  box-shadow: 0 8px 8px rgba(10,16,20,.24),0 0 8px rgba(10,16,20,.12);
}

.rate-desc {
  margin-left: 16px;
  opacity: 0.7;
}
</style>