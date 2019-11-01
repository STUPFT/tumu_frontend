<template>
  <div class="pictures-bar" :id="pictureId">
    <img v-for="(item, index) in imgList" :key="index" :src="item" alt="" title="点击查看大图">
  </div>
</template>

<script>
import Viewer from 'viewerjs';
import 'viewerjs/dist/viewer.css';

export default {
  name: 'Picture',
  inheritAttrs: false,
  props: {
    pictureId: {
      type: String,
      default: 'pictures'
    },
    imgList: Array
  },
  data() {
    return {}
  },
  mounted() {
    const ViewerDom = document.getElementById(this.pictureId);
    new Viewer(ViewerDom, {});
  }
}
</script>

<style>
.pictures-bar {
  height: 160px;
  width: 100%;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
}

/* .pictures-bar::-webkit-scrollbar {
  display: none;
} */

.pictures-bar img {
  height: 160px;
  width: auto;
  margin-right: 10px;
  cursor: pointer;
}

/* 滚动条样式 */
::-webkit-scrollbar-track-piece {
  background-color:#f8f8f8;
}
::-webkit-scrollbar {
  width:9px;
  height:9px;
}
::-webkit-scrollbar-thumb {
  background-color:#dddddd;
  background-clip:padding-box;
  min-height:28px;
}
::-webkit-scrollbar-thumb:hover {
  background-color:#bbb;
}
</style>