<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt />
          </div>
          <p class="icon-desc">{{item.imgDesc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      coinList: [
        {
          id: 1,
          imgUrl: 'https://s.qunarzz.com/vacation_react/around/entry2_2.png',
          imgDesc: '热门景点'
        },
        {
          id: 2,
          imgUrl: 'https://s.qunarzz.com/vacation_react/around/entry3.png',
          imgDesc: '自驾游'
        },
        {
          id: 3,
          imgUrl: 'https://s.qunarzz.com/vacation_react/around/entry5.png',
          imgDesc: '跟团游'
        },
        {
          id: 4,
          imgUrl: 'https://s.qunarzz.com/vacation_react/around/entry4.png',
          imgDesc: '景点门票'
        },
        {
          id: 5,
          imgUrl: 'https://s.qunarzz.com/vacation_react/around/entry2_2.png',
          imgDesc: '热门景点'
        },
        {
          id: 6,
          imgUrl: 'https://s.qunarzz.com/vacation_react/around/entry3.png',
          imgDesc: '自驾游'
        },
        {
          id: 7,
          imgUrl: 'https://s.qunarzz.com/vacation_react/around/entry5.png',
          imgDesc: '跟团游'
        },
        {
          id: 8,
          imgUrl: 'https://s.qunarzz.com/vacation_react/around/entry1.png',
          imgDesc: '景+酒'
        },
        {
          id: 9,
          imgUrl: 'https://s.qunarzz.com/vacation_react/around/entry5.png',
          imgDesc: '跟团游'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.coinList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.icons
  overflow: hidden
  height: 0
  padding-bottom: 50%
  .icon
    position: relative
    overflow: hidden
    float: left
    width: 25%
    height: 0
    padding-bottom: 25%
    .icon-img
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0.44rem
      box-sizing: border-box
      padding: 0.1rem
      .icon-img-content
        display: block
        margin: 0 auto
        height: 100%
    .icon-desc
      position: absolute
      left: 0
      right: 0
      bottom: 0
      height: 0.44rem
      line-height: 0.44rem
      color: $darkTextColor
      text-align: center
      ellipsis()
</style>
