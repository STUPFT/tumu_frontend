<template>
  <div class="pictures-bar" id="pictures">
    <img v-for="(item, index) in imgArr" :key="index" :src="item" alt="" title="点击查看大图">
  </div>
</template>

<script>
import Viewer from 'viewerjs';
import 'viewerjs/dist/viewer.css';

export default {
  name: 'Pictures',
  data() {
    return {
      imgArr: [
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538988692454&di=a6086c2c80a99ec0a50ed3696776f39e&imgtype=0&src=http%3A%2F%2Fpic165.nipic.com%2Ffile%2F20180522%2F12398452_105538125000_2.jpg',
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539582468&di=78699558c94fff160ae1fa5cc73be9fa&imgtype=jpg&er=1&src=http%3A%2F%2Fpic166.nipic.com%2Ffile%2F20180522%2F12398452_105521854000_2.jpg',
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538987750399&di=8c77894bad73fbc3c1c82ebde9309ff2&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D09e9a51105f41bd5ce5ee0b438a2e4a7%2Ffaedab64034f78f083c1d8c972310a55b2191cc5.jpg',
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538987750397&di=70b58f375170a335264545cdea00aec9&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D79013c1e743e6709aa0d4dbf52bffa51%2Fb7fd5266d0160924759f6222df0735fae6cd3455.jpg',
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538987750397&di=106be7a370b48812e9e7ed19e9c8eb16&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D896dc4cbde62853586edda61f99713aa%2Fd009b3de9c82d158de82e7888b0a19d8bc3e4282.jpg'
              ]
    }
  },
  mounted() {
    const ViewerDom = document.getElementById('pictures');
    new Viewer(ViewerDom, {});
  }
}
</script>

<style>
.pictures-bar {
  height: 200px;
  width: 100%;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
}

.pictures-bar::-webkit-scrollbar {
  display: none;
}

.pictures-bar img {
  height: 200px;
  width: auto;
  margin-right: 10px;
  cursor: pointer;
}
</style>