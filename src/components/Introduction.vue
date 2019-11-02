<template>
  <div class="intro-container">
    <h1>简介</h1>
    <hr style="opacity: 0.3; margin-bottom: 30px">
    <div style="margin-top: 40px;">
      <span class="intro-desc">
        {{ intro.content }}
      </span>
    </div>
    <Pictures :imgList="intro.pictures"/>
  </div>
</template>

<script>
import Pictures from '../components/Pictures'

export default {
  name: 'Introduction',
  props: {
    intro: Object
  },
  data() {
    return {}
  },
  components: {
    Pictures
  }
}
</script>

<style>
.intro-container {
  padding: 10px 30px;
  width: 100%;
  height: auto;
  background-color: #FFF;
  border: 1px solid rgba(255, 255, 255);
  border-radius: 6px;
}

.intro-desc {
  opacity: 0.7;
}
.pictures-bar{
  margin-top:30px;
}
</style>
