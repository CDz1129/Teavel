<template>
  <div>
    <div class="title">热门推荐</div>
    <ul>
      <li class="item" v-for="(item) of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.titleDesc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [
        {
          id: 1,
          imgUrl:
            'https://imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_216x190_1d9c854f.jpg',
          title: '深圳出发-跟团游',
          titleDesc:
            '深圳出发-跟团游 深圳地王大厦（上顶层观光）、大梅沙、中英街、滨海栈道、世界之窗一日游，送保险'
        },
        {
          id: 2,
          imgUrl:
            'https://imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_216x190_1d9c854f.jpg',
          title: '深圳出发-跟团游',
          titleDesc:
            '深圳出发-跟团游 深圳地王大厦（上顶层观光）、大梅沙、中英街、滨海栈道、世界之窗一日游，送保险'
        },
        {
          id: 3,
          imgUrl:
            'https://imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_216x190_1d9c854f.jpg',
          title: '深圳出发-跟团游',
          titleDesc:
            '深圳出发-跟团游 深圳地王大厦（上顶层观光）、大梅沙、中英街、滨海栈道、世界之窗一日游，送保险'
        },
        {
          id: 4,
          imgUrl:
            'https://imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_216x190_1d9c854f.jpg',
          title: '深圳出发-跟团游',
          titleDesc:
            '深圳出发-跟团游 深圳地王大厦（上顶层观光）、大梅沙、中英街、滨海栈道、世界之窗一日游，送保险'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
  margin-top: 0.2rem
  line-height: 0.8rem
  background: #eee
  text-indent: 0.2rem
.item
  overflow: hidden
  display: flex
  height: 1.9rem
  .item-img
    width: 1.7rem
    height: 1.7rem
    padding: 0.1rem
  .item-info
    flex: 1
    padding: 0.1rem
    min-width: 0
    .item-title
      line-height: 0.54rem
      font-size: 0.32rem
      ellipsis()
    .item-desc
      line-height: 0.4rem
      color: #ccc
      ellipsis()
    .item-button
      line-height: 0.44rem
      margin-top: 0.16rem
      background: #ff9300
      padding: 0 0.2rem
      border-radius: 0.06rem
      color: #fff
</style>
