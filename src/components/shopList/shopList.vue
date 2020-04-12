<template>
<div class="home_shop_list">
      <div class="shop_header">
        <img src="../../assets/images/nav/line.png" alt />
        <span style="color:#999">附近商家</span>
      </div>

      <!-- 商家内容 -->
      <div class="shop_container" v-if="shops.length">
        <a class="shop_container_item" v-for="(item,index) in shops" :key="index">
          <div class="shop_left">
            <img class="shop_img" :src="baseImgUrl+item.image_path" />
          </div>
          <div class="shop_right">
            <section class="shop_detail_header">
              <h4 class="shop_title ellipsis">{{ item.name }}</h4>
              <ul class="shop_detail_ul">
                <li class="supports" v-for="(element,index) in item.supports" :key="index">{{ element.icon_name }}</li>
              </ul>
            </section>
            <section class="shop_rating_order">
              <!-- 商家评分星星 -->
              <section class="shop_rating_order_left">
                <star :score="item.rating" :size="24"/>
                <!-- <div class="star">
                  <img src="../../assets/images/stars/star_on.png" alt="">
                  <img src="../../assets/images/stars/star_on.png" alt="">
                  <img src="../../assets/images/stars/star_on.png" alt="">
                  <img src="../../assets/images/stars/star_half.png" alt="">
                  <img src="../../assets/images/stars/star_off.png" alt="">
                </div> -->
                <div class="rating_section" style="fontSize:12px;">{{ item.rating }}</div>
                <div class="order_section"  style="fontSize:12px;">月售{{item.recent_order_num}}单</div>
              </section>
              <section class="shop_rating_order_right">
                <span class="delivery_style delivery_right">仲恺专送</span>
              </section>
            </section>
            <section class="shop_distance">
              <p class="shop_delivery_msg">
                <span>{{item.float_minimum_order_amount}}起送</span>
                <span class="segmentation">/</span>
                <span>配送费约{{item.float_delivery_fee }}</span>
              </p>
            </section>
          </div>
        </a>
      </div>
      <ul v-else>
        <li v-for="(item,index) in 6" :key="index">
          <img src="../../assets/images/shop_back.svg" alt="">
        </li>
      </ul>
    </div>
</template>

<script>

import { mapState } from 'vuex'
import star from '../star/star'

export default {
  name:"shopList",
  components:{
    star
  },
  data(){
    return {
      baseImgUrl:'http://cangdu.org:8001/img/'
    }
  },
  computed:{
    ...mapState(['shops'])
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../assets/stylus/minix.styl'
.home_shop_list 
  background-color: #fff !important
  padding 0 0 40px 0
  .shop_header 
    display: flex;
    align-items: center;
  .shop_container
    margin-bottom 10px
    .shop_container_item
      display flex
      flex-direction row
      margin 30px 0
      .shop_left
        width 23%
      .shop_right
        float right
        width 77%
        .shop_detail_header
          display flex
          flex-direction row
          .shop_title
            float left
            width 200px
            color #333
            font-size 16px
            line-height 16px
            font-weight 700
            &::before
              content '品牌'
              display inline-block
              font-size 11px
              line-height 11px
              color #333
              background-color #ffd930
              padding 2px 2px
              border-radius 2px
              margin-right 5px
          .shop_detail_ul
            float right 
            margin-top 3px
            margin-left 15px
            .supports
              float left
              font-size 8px
              color #999
              border 1px solid #f1f1f1
              padding 0 5px
              border-radius 2px
        .shop_rating_order
          clearFix() 
          width 100%
          margin-top 12px
          margin-bottom 12px
          .shop_rating_order_left
            float left 
            color #ff9a0d
            display flex
            flex-direction row
            text-align center
            align-items center
            padding 0 2px;
            .rating_section
              margin 0 5px;
          .shop_rating_order_right 
            float right
            .delivery_style
              transform-origin 35px 0 
              transform scale(.7)
              display inline-block
              font-size 14px
              padding 1px
              border-radius 2px
              margin-right 10px
            .delivery_right
              color #02a774
              border 1px solid #02a774
        .shop_distance
          clearFix()
          width 100%
          font-size 12px
          .shop_delivery_msg
            float left
            transform-origin 0
            transform scale(.9)
            color #666
            .segmentation
              color #ccc
</style>