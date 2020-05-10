<template>
<footer class="footer_guide">
    <a href="#" class="guide_item" :class="{on: '/home' === $route.path}" @click="goTo('/home')">
        <span class="item_icon">
            <i class="iconfont iconwaimai"></i>
        </span>
        <span>外卖</span>
    </a>
     <a href="#" class="guide_item" :class="{on: '/search' === $route.path}" @click="goTo('/search')">
        <span class="item_icon">
            <i class="iconfont iconsousuo"></i>
        </span>
        <span>搜索</span>
    </a>
     <a href="#" class="guide_item" :class="{on: '/order' === $route.path}" @click="goTo('/order')">
        <span class="item_icon">
            <i class="iconfont icondingdan"></i>
        </span>
        <span>数据分析</span>
    </a>
     <a href="#" class="guide_item" :class="{on: '/personal' === $route.path}" @click="goTo('/personal')">
        <span class="item_icon">
            <i class="iconfont icongeren"></i>
        </span>
        <span>个人</span>
    </a>
</footer>
</template>

<script>
export default {
    methods:{
        goTo(path){
            this.$router.push(path);
        }
    }
}
</script>

<style  lang="stylus" rel="stylesheet/stylus">
@import '../../assets/stylus/minix.styl'
.footer_guide
  top-border-1px(#e4e4e4)
  position fixed
  z-index 100
  left 0
  right 0
  bottom 0
  background-color #fff
  width 100%
  height 50px
  display flex
  .guide_item
    display flex
    flex 1
    text-align center
    flex-direction column
    align-items center
    color #999999
    margin-top 3px
    &.on
      color #02a774
    span 
      font-size 14px
      margin-top 2px
      margin-bottom 2px
      .iconfont
        font-size 24px
</style>