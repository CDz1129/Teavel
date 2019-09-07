<template>
<div>
  <div class="search">
    <input v-model="keyword" type="text"  class="search-input" placeholder="输入城市名或拼音" />
  </div>
  <div class="search-context" ref="search" v-show="keyword">
      <ul>
          <li class="search-item border-bottom"
          v-for="item in list"
          :key="item.id"
          @click='handleCityClick(item.name)'>{{item.name}}</li>
          <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
      </ul>
  </div>
</div>
</template>

<script>
import { setTimeout } from 'timers'
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search, { click: true })
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (!this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const searchList = []
        for (const key in this.cities) {
          if (this.cities.hasOwnProperty(key)) {
            const element = this.cities[key]
            element.forEach(value => {
              if (value.spell.includes(this.keyword) ||
                    value.name.includes(this.keyword)) {
                searchList.push(value)
              }
            })
          }
        }
        this.list = searchList
      }, 60)
    }
  }

}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
  height: 0.72rem
  padding: 0 0.1rem
  background: $bgColor
  .search-input
    box-sizing: border-box
    width: 100%
    height: 0.62rem
    padding: 0 0.1rem
    line-height: 0.62rem
    text-align: center
    border-radius: 0.06rem
    color: #666
.search-context
    z-index 1
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    background #eee
    .search-item
        line-height .62rem
        padding-left .2rem
        color #666
        background #fff

</style>
