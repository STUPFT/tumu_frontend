<template>
  <div class="con-container">
    <h1>总结</h1>
    <hr style="opacity: 0.3;">
    <span class="con-desc">
      {{ content ? content : '暂无内容' }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'Conclusion',
  inheritAttrs: false,
  props: {
    content: String
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
.con-container {
  padding: 10px 30px;
  width: 100%;
  height: auto;
  background-color: #FFF;
  border: 1px solid rgba(255, 255, 255);
  border-radius: 6px;
}

.con-container:hover {
  box-shadow: 0 8px 8px rgba(10,16,20,.24),0 0 8px rgba(10,16,20,.12);
}

.con-desc {
  opacity: 0.7;
}
</style>