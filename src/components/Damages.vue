<template>
  <div>
    <!-- <h1 id="d0">破坏类型一</h1>
    <div style="height: 120px;width: 100%;"></div> -->
    <div class="damage-container" v-for="(item, index) in damageList" :key="index">
      <h1 :id="'d'+index">{{ item.name }}</h1>
      <hr style="opacity: 0.3; margin-bottom: 30px">
      <!-- TODO 此处id需要传入，否则仅有第一个可以查看大图 -->
      <Pictures :pictureId="'picture'+index" :imgList="item.imgList"/>
    </div>
  </div>
</template>

<script>
import Pictures from '../components/Pictures'
export default {
  name: 'Damages',
  data() {
    return {
      damageList: [
        {
          name: '破坏类型一',
          imgList: [
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538988692454&di=a6086c2c80a99ec0a50ed3696776f39e&imgtype=0&src=http%3A%2F%2Fpic165.nipic.com%2Ffile%2F20180522%2F12398452_105538125000_2.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539582468&di=78699558c94fff160ae1fa5cc73be9fa&imgtype=jpg&er=1&src=http%3A%2F%2Fpic166.nipic.com%2Ffile%2F20180522%2F12398452_105521854000_2.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538987750399&di=8c77894bad73fbc3c1c82ebde9309ff2&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D09e9a51105f41bd5ce5ee0b438a2e4a7%2Ffaedab64034f78f083c1d8c972310a55b2191cc5.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538987750397&di=70b58f375170a335264545cdea00aec9&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D79013c1e743e6709aa0d4dbf52bffa51%2Fb7fd5266d0160924759f6222df0735fae6cd3455.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538987750397&di=106be7a370b48812e9e7ed19e9c8eb16&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D896dc4cbde62853586edda61f99713aa%2Fd009b3de9c82d158de82e7888b0a19d8bc3e4282.jpg'
          ]
        },
        {
          name: '破坏类型二',
          imgList: [
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538988692454&di=a6086c2c80a99ec0a50ed3696776f39e&imgtype=0&src=http%3A%2F%2Fpic165.nipic.com%2Ffile%2F20180522%2F12398452_105538125000_2.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539582468&di=78699558c94fff160ae1fa5cc73be9fa&imgtype=jpg&er=1&src=http%3A%2F%2Fpic166.nipic.com%2Ffile%2F20180522%2F12398452_105521854000_2.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538987750399&di=8c77894bad73fbc3c1c82ebde9309ff2&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D09e9a51105f41bd5ce5ee0b438a2e4a7%2Ffaedab64034f78f083c1d8c972310a55b2191cc5.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538987750397&di=70b58f375170a335264545cdea00aec9&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D79013c1e743e6709aa0d4dbf52bffa51%2Fb7fd5266d0160924759f6222df0735fae6cd3455.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538987750397&di=106be7a370b48812e9e7ed19e9c8eb16&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D896dc4cbde62853586edda61f99713aa%2Fd009b3de9c82d158de82e7888b0a19d8bc3e4282.jpg'
          ]
        },
        {
          name: '破坏类型三',
          imgList: [
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538988692454&di=a6086c2c80a99ec0a50ed3696776f39e&imgtype=0&src=http%3A%2F%2Fpic165.nipic.com%2Ffile%2F20180522%2F12398452_105538125000_2.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539582468&di=78699558c94fff160ae1fa5cc73be9fa&imgtype=jpg&er=1&src=http%3A%2F%2Fpic166.nipic.com%2Ffile%2F20180522%2F12398452_105521854000_2.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538987750399&di=8c77894bad73fbc3c1c82ebde9309ff2&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D09e9a51105f41bd5ce5ee0b438a2e4a7%2Ffaedab64034f78f083c1d8c972310a55b2191cc5.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538987750397&di=70b58f375170a335264545cdea00aec9&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D79013c1e743e6709aa0d4dbf52bffa51%2Fb7fd5266d0160924759f6222df0735fae6cd3455.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538987750397&di=106be7a370b48812e9e7ed19e9c8eb16&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D896dc4cbde62853586edda61f99713aa%2Fd009b3de9c82d158de82e7888b0a19d8bc3e4282.jpg'
          ]
        },
        {
          name: '破坏类型四',
          imgList: [
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538988692454&di=a6086c2c80a99ec0a50ed3696776f39e&imgtype=0&src=http%3A%2F%2Fpic165.nipic.com%2Ffile%2F20180522%2F12398452_105538125000_2.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539582468&di=78699558c94fff160ae1fa5cc73be9fa&imgtype=jpg&er=1&src=http%3A%2F%2Fpic166.nipic.com%2Ffile%2F20180522%2F12398452_105521854000_2.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538987750399&di=8c77894bad73fbc3c1c82ebde9309ff2&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D09e9a51105f41bd5ce5ee0b438a2e4a7%2Ffaedab64034f78f083c1d8c972310a55b2191cc5.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538987750397&di=70b58f375170a335264545cdea00aec9&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D79013c1e743e6709aa0d4dbf52bffa51%2Fb7fd5266d0160924759f6222df0735fae6cd3455.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538987750397&di=106be7a370b48812e9e7ed19e9c8eb16&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D896dc4cbde62853586edda61f99713aa%2Fd009b3de9c82d158de82e7888b0a19d8bc3e4282.jpg'
          ]
        },
        {
          name: '破坏类型五',
          imgList: [
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538988692454&di=a6086c2c80a99ec0a50ed3696776f39e&imgtype=0&src=http%3A%2F%2Fpic165.nipic.com%2Ffile%2F20180522%2F12398452_105538125000_2.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539582468&di=78699558c94fff160ae1fa5cc73be9fa&imgtype=jpg&er=1&src=http%3A%2F%2Fpic166.nipic.com%2Ffile%2F20180522%2F12398452_105521854000_2.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538987750399&di=8c77894bad73fbc3c1c82ebde9309ff2&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D09e9a51105f41bd5ce5ee0b438a2e4a7%2Ffaedab64034f78f083c1d8c972310a55b2191cc5.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538987750397&di=70b58f375170a335264545cdea00aec9&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D79013c1e743e6709aa0d4dbf52bffa51%2Fb7fd5266d0160924759f6222df0735fae6cd3455.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538987750397&di=106be7a370b48812e9e7ed19e9c8eb16&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D896dc4cbde62853586edda61f99713aa%2Fd009b3de9c82d158de82e7888b0a19d8bc3e4282.jpg'
          ]
        },
        {
          name: '破坏类型六',
          imgList: [
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538988692454&di=a6086c2c80a99ec0a50ed3696776f39e&imgtype=0&src=http%3A%2F%2Fpic165.nipic.com%2Ffile%2F20180522%2F12398452_105538125000_2.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539582468&di=78699558c94fff160ae1fa5cc73be9fa&imgtype=jpg&er=1&src=http%3A%2F%2Fpic166.nipic.com%2Ffile%2F20180522%2F12398452_105521854000_2.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538987750399&di=8c77894bad73fbc3c1c82ebde9309ff2&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D09e9a51105f41bd5ce5ee0b438a2e4a7%2Ffaedab64034f78f083c1d8c972310a55b2191cc5.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538987750397&di=70b58f375170a335264545cdea00aec9&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D79013c1e743e6709aa0d4dbf52bffa51%2Fb7fd5266d0160924759f6222df0735fae6cd3455.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538987750397&di=106be7a370b48812e9e7ed19e9c8eb16&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D896dc4cbde62853586edda61f99713aa%2Fd009b3de9c82d158de82e7888b0a19d8bc3e4282.jpg'
          ]
        }
      ]
    }
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