<template>
  <div class="testCss">这里是盒子内的实际内容。有 25px 内间距，25px 外间距、25px 绿色边框。</div>
</template>

<script>
export default {
  name: 'TestCss'
}
</script>

<style lang="stylus" scoped>
.testCss
  width: 300px
  background-color: red
  margin: 25px
  border: 25px solid green
  padding: 25px
</style>
