<template>
  <div>
    <a-menu style="width: 256px" mode="inline" @click="handleClick">
      <a-menu-item key="1">
        <a-icon type="link" />
        简介
      </a-menu-item>
      <a-sub-menu key="sub">
        <span slot="title"><a-icon type="database" /><span>破坏类型</span></span>
        <a-menu-item key="2">破坏类型1</a-menu-item>
        <a-menu-item key="3">破坏类型2</a-menu-item>
        <a-menu-item key="4">破坏类型3</a-menu-item>
        <a-menu-item key="5">破坏类型4</a-menu-item>
        <a-menu-item key="6">破坏类型5</a-menu-item>
        <a-menu-item key="7">破坏类型6</a-menu-item>
        <a-menu-item key="8">破坏类型7</a-menu-item>
        <a-menu-item key="9">破坏类型8</a-menu-item>
      </a-sub-menu>
      <a-menu-item key="10">
        <a-icon type="pie-chart" />
        数据统计
      </a-menu-item>
      <a-menu-item key="11">
        <a-icon type="schedule" />
        评级和总结
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  methods: {
    handleClick(e) {
      console.log('click ', e);
    },
  },
}
</script>

<style scoped>

</style>