<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide>
        <img
          class="swiper-img"
          src="https://z1.muscache.cn/pictures/hongbao/marquee/original/08993cb0-97e9-4bf2-a4ec-f1f7055a7010.jpg"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="swiper-img"
          src="https://z1.muscache.cn/pictures/hongbao/marquee/original/ca413674-f798-401a-9a6d-c4cd01e67238.jpg"
        />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

.wrapper
  overflow: hidden
  width: 100%
  // height: 0
  // padding-bottom: 31.25%
  .swiper-img
    width: 100%

</style>>
