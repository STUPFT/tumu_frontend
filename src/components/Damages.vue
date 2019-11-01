<template>
  <div>
    <!-- <h1 id="d0">破坏类型一</h1>
    <div style="height: 120px;width: 100%;"></div> -->
    <div class="damage-container" v-for="(item, index) in damages" :key="index">
      <h1 :id="'d'+index">{{ item.name }}</h1>
      <hr style="opacity: 0.3; margin-bottom: 30px">
      <!-- TODO 此处id需要传入，否则仅有第一个可以查看大图 -->
      <Pictures :pictureId="'picture'+index" :imgList="item.pictures"/>
    </div>
  </div>
</template>

<script>
import Pictures from '../components/Pictures'
export default {
  name: 'Damages',
  props: {
    damages: Array
  },
  data() {
    return {
    }
  },
  mounted() {
    // let temp = {}
    // this.damages.forEach(damage => {
    //   temp = {}
    //   temp.id = damage.type_id
    //   temp.name = `破坏类型${damage.type_id}`
    //   temp.pictures = []
    //   damage.pictures.forEach(pic => temp.pictures.push(pic.picture_path))
    //   this.damagesList.push(temp)
    // })
  },
  components: {
    Pictures
  }
}
</script>

<style>
.damage-container {
  padding: 10px 30px;
  margin-bottom: 30px;
  width: 100%;
  height: auto;
  background-color: #FFF;
  border: 1px solid rgba(255, 255, 255);
  border-radius: 6px;
}

.damage-container:hover {
  box-shadow: 0 8px 8px rgba(10,16,20,.24),0 0 8px rgba(10,16,20,.12);
}

</style>