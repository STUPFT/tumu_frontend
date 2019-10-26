<template>
  <div class="intro-container">
    <h1>简介</h1>
    <hr style="opacity: 0.3; margin-bottom: 30px">
    <Pictures/>
    <div style="margin-top: 40px;">
      <span class="intro-desc">
        {{ intro }}
      </span>
    </div>
  </div>
</template>

<script>
import Pictures from '../components/Pictures'

export default {
  name: 'Introduction',
  data() {
    return {
      intro: `
        沟南许地汕头沟南许地位于汕头市区北郊， 面积1．5平方公里，人口1800余人，距市中心只有7公里，古地名叫紫菔陇。全村皆姓许，先祖由中原许昌迁闽，进而入潮，至第十世许兆基及其四子许弘烈自潮州来此开基，繁衍七百载；传至十五世，脉分数支，一支留居本土，一支外迁广州，成为广州的名门望族。
        沟南许地汕头沟南许地位于汕头市区北郊， 面积1．5平方公里，人口1800余人，距市中心只有7公里，古地名叫紫菔陇。全村皆姓许，先祖由中原许昌迁闽，进而入潮，至第十世许兆基及其四子许弘烈自潮州来此开基，繁衍七百载；传至十五世，脉分数支，一支留居本土，一支外迁广州，成为广州的名门望族。
        沟南许地汕头沟南许地位于汕头市区北郊， 面积1．5平方公里，人口1800余人，距市中心只有7公里，古地名叫紫菔陇。全村皆姓许，先祖由中原许昌迁闽，进而入潮，至第十世许兆基及其四子许弘烈自潮州来此开基，繁衍七百载；传至十五世，脉分数支，一支留居本土，一支外迁广州，成为广州的名门望族。
        沟南许地汕头沟南许地位于汕头市区北郊， 面积1．5平方公里，人口1800余人，距市中心只有7公里，古地名叫紫菔陇。全村皆姓许，先祖由中原许昌迁闽，进而入潮，至第十世许兆基及其四子许弘烈自潮州来此开基，繁衍七百载；传至十五世，脉分数支，一支留居本土，一支外迁广州，成为广州的名门望族。
      `
    }
  },
  components: {
    Pictures
  }
}
</script>

<style>
.intro-container {
  padding: 10px 30px;
  width: 90%;
  height: auto;
  background-color: #FFF;
  border: 1px solid rgba(255, 255, 255);
  border-radius: 6px;
}

.intro-desc {
  opacity: 0.7;
}
</style>