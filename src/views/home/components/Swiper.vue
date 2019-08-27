<template>
<swiper :options="swiperOption">
    <swiper-slide>
        <img src="" alt="">
    </swiper-slide>
    <swiper-slide>I'm Slide 2</swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {}
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>>
