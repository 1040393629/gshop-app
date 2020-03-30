<template>
  <div class="app" style="backgroundColor:#fff">
    <header class="header">
      <span class="header_search">
        <i class="iconfont iconsousuo"></i>
      </span>
      <span class="header_title">
        <span class="header_title_text ellipsis">海珠区仲恺路501号</span>
      </span>
      <span class="header_login">
        <span class="header_login_text">登录 | 注册</span>
      </span>
    </header>

    <!-- 首页导航轮播图 -->
    <nav class="home_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="#" class="link_to_food">
              <div class="food_container">
                <img src="../../assets/images/nav/6.jpg" alt />
              </div>
              <span>预订早餐</span>
            </a>
            <a href="#" class="link_to_food">
              <div class="food_container">
                <img src="../../assets/images/nav/16.png" alt />
              </div>
              <span>包子粥店</span>
            </a>
            <a href="#" class="link_to_food">
              <div class="food_container">
                <img src="../../assets/images/nav/13.jpg" alt />
              </div>
              <span>简餐</span>
            </a>
            <a href="#" class="link_to_food">
              <div class="food_container">
                <img src="../../assets/images/nav/9.jpg" alt />
              </div>
              <span>美食</span>
            </a>
            <a href="#" class="link_to_food">
              <div class="food_container">
                <img src="../../assets/images/nav/8.jpg" alt />
              </div>
              <span>土豪推荐</span>
            </a>
            <a href="#" class="link_to_food">
              <div class="food_container">
                <img src="../../assets/images/nav/1.jpg" alt />
              </div>
              <span>甜品</span>
            </a>
            <a href="#" class="link_to_food">
              <div class="food_container">
                <img src="../../assets/images/nav/10.jpg" alt />
              </div>
              <span>川湘菜</span>
            </a>
            <a href="#" class="link_to_food">
              <div class="food_container">
                <img src="../../assets/images/nav/11.jpg" alt />
              </div>
              <span>麻辣烫</span>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="#" class="link_to_food">
              <div class="food_container">
                <img src="../../assets/images/nav/18.png" alt />
              </div>
              <span>日韩料理</span>
            </a>
            <a href="#" class="link_to_food">
              <div class="food_container">
                <img src="../../assets/images/nav/15.png" alt />
              </div>
              <span>汉堡薯条</span>
            </a>
            <a href="#" class="link_to_food">
              <div class="food_container">
                <img src="../../assets/images/nav/17.png" alt />
              </div>
              <span>蛋糕</span>
            </a>

            <a href="#" class="link_to_food">
              <div class="food_container">
                <img src="../../assets/images/nav/14.jpg" alt />
              </div>
              <span>果蔬生鲜</span>
            </a>

            <a href="#" class="link_to_food">
              <div class="food_container">
                <img src="../../assets/images/nav/8.jpg" alt />
              </div>
              <span>披萨意园</span>
            </a>
            <a href="#" class="link_to_food">
              <div class="food_container">
                <img src="../../assets/images/nav/3.jpg" alt />
              </div>
              <span>药品专购</span>
            </a>

            <a href="#" class="link_to_food">
              <div class="food_container">
                <img src="../../assets/images/nav/12.jpg" alt />
              </div>
              <span>新店特惠</span>
            </a>
            <a href="#" class="link_to_food">
              <div class="food_container">
                <img src="../../assets/images/nav/4.jpg" alt />
              </div>
              <span>准时达</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
    <!-- 分割线 -->
    <div class="line"></div>

    <!-- 附近商家 -->
    <div class="home_shop_list">
      <div class="shop_header">
        <img src="../../assets/images/nav/line.png" alt />
        <span style="color:#999">附近商家</span>
      </div>

      <!-- 商家内容 -->
      <div class="shop_container">
        <a class="shop_container_item">
          <div class="shop_left">
            <img class="shop_img" src="../../assets/images/shop/2.jpg" />
          </div>
          <div class="shop_right">
            <section class="shop_detail_header">
              <h4 class="shop_title ellipsis">仲恺校园饭店</h4>
              <ul class="shop_detail_ul">
                <li class="supports">保</li>
                <li class="supports">准</li>
                <li class="supports">票</li>
              </ul>
            </section>
            <section class="shop_rating_order">
              <!-- 商家评分星星 -->
              <section class="shop_rating_order_left">
                <div class="star">
                  <img src="../../assets/images/stars/star_on.png" alt="">
                  <img src="../../assets/images/stars/star_on.png" alt="">
                  <img src="../../assets/images/stars/star_on.png" alt="">
                  <img src="../../assets/images/stars/star_half.png" alt="">
                  <img src="../../assets/images/stars/star_off.png" alt="">
                </div>
                <div class="rating_section" style="fontSize:12px;">3.6</div>
                <div class="order_section"  style="fontSize:12px;">月售106单</div>
              </section>
              <section class="shop_rating_order_right">
                <span class="delivery_style delivery_right">仲恺专送</span>
              </section>
            </section>
            <section class="shop_distance">
              <p class="shop_delivery_msg">
                <span>¥20起送</span>
                <span class="segmentation">/</span>
                <span>配送费约¥5</span>
              </p>
            </section>
          </div>
        </a>
        <a class="shop_container_item">
          <div class="shop_left">
            <img class="shop_img" src="../../assets/images/shop/2.jpg" />
          </div>
          <div class="shop_right">
            <section class="shop_detail_header">
              <h4 class="shop_title ellipsis">仲恺校园饭店</h4>
              <ul class="shop_detail_ul">
                <li class="supports">保</li>
                <li class="supports">准</li>
                <li class="supports">票</li>
              </ul>
            </section>
            <section class="shop_rating_order">
              <!-- 商家评分星星 -->
              <section class="shop_rating_order_left">
                <div class="star">
                  <img src="../../assets/images/stars/star_on.png" alt="">
                  <img src="../../assets/images/stars/star_on.png" alt="">
                  <img src="../../assets/images/stars/star_on.png" alt="">
                  <img src="../../assets/images/stars/star_half.png" alt="">
                  <img src="../../assets/images/stars/star_off.png" alt="">
                </div>
                <div class="rating_section" style="fontSize:12px;">3.6</div>
                <div class="order_section"  style="fontSize:12px;">月售106单</div>
              </section>
              <section class="shop_rating_order_right">
                <span class="delivery_style delivery_right">仲恺专送</span>
              </section>
            </section>
            <section class="shop_distance">
              <p class="shop_delivery_msg">
                <span>¥20起送</span>
                <span class="segmentation">/</span>
                <span>配送费约¥5</span>
              </p>
            </section>
          </div>
        </a>
        <a class="shop_container_item">
          <div class="shop_left">
            <img class="shop_img" src="../../assets/images/shop/2.jpg" />
          </div>
          <div class="shop_right">
            <section class="shop_detail_header">
              <h4 class="shop_title ellipsis">仲恺校园饭店</h4>
              <ul class="shop_detail_ul">
                <li class="supports">保</li>
                <li class="supports">准</li>
                <li class="supports">票</li>
              </ul>
            </section>
            <section class="shop_rating_order">
              <!-- 商家评分星星 -->
              <section class="shop_rating_order_left">
                <div class="star">
                  <img src="../../assets/images/stars/star_on.png" alt="">
                  <img src="../../assets/images/stars/star_on.png" alt="">
                  <img src="../../assets/images/stars/star_on.png" alt="">
                  <img src="../../assets/images/stars/star_half.png" alt="">
                  <img src="../../assets/images/stars/star_off.png" alt="">
                </div>
                <div class="rating_section" style="fontSize:12px;">3.6</div>
                <div class="order_section"  style="fontSize:12px;">月售106单</div>
              </section>
              <section class="shop_rating_order_right">
                <span class="delivery_style delivery_right">仲恺专送</span>
              </section>
            </section>
            <section class="shop_distance">
              <p class="shop_delivery_msg">
                <span>¥20起送</span>
                <span class="segmentation">/</span>
                <span>配送费约¥5</span>
              </p>
            </section>
          </div>
        </a>
        <a class="shop_container_item">
          <div class="shop_left">
            <img class="shop_img" src="../../assets/images/shop/2.jpg" />
          </div>
          <div class="shop_right">
            <section class="shop_detail_header">
              <h4 class="shop_title ellipsis">仲恺校园饭店</h4>
              <ul class="shop_detail_ul">
                <li class="supports">保</li>
                <li class="supports">准</li>
                <li class="supports">票</li>
              </ul>
            </section>
            <section class="shop_rating_order">
              <!-- 商家评分星星 -->
              <section class="shop_rating_order_left">
                <div class="star">
                  <img src="../../assets/images/stars/star_on.png" alt="">
                  <img src="../../assets/images/stars/star_on.png" alt="">
                  <img src="../../assets/images/stars/star_on.png" alt="">
                  <img src="../../assets/images/stars/star_half.png" alt="">
                  <img src="../../assets/images/stars/star_off.png" alt="">
                </div>
                <div class="rating_section" style="fontSize:12px;">3.6</div>
                <div class="order_section"  style="fontSize:12px;">月售106单</div>
              </section>
              <section class="shop_rating_order_right">
                <span class="delivery_style delivery_right">仲恺专送</span>
              </section>
            </section>
            <section class="shop_distance">
              <p class="shop_delivery_msg">
                <span>¥20起送</span>
                <span class="segmentation">/</span>
                <span>配送费约¥5</span>
              </p>
            </section>
          </div>
        </a>
        <a class="shop_container_item">
          <div class="shop_left">
            <img class="shop_img" src="../../assets/images/shop/2.jpg" />
          </div>
          <div class="shop_right">
            <section class="shop_detail_header">
              <h4 class="shop_title ellipsis">仲恺校园饭店</h4>
              <ul class="shop_detail_ul">
                <li class="supports">保</li>
                <li class="supports">准</li>
                <li class="supports">票</li>
              </ul>
            </section>
            <section class="shop_rating_order">
              <!-- 商家评分星星 -->
              <section class="shop_rating_order_left">
                <div class="star">
                  <img src="../../assets/images/stars/star_on.png" alt="">
                  <img src="../../assets/images/stars/star_on.png" alt="">
                  <img src="../../assets/images/stars/star_on.png" alt="">
                  <img src="../../assets/images/stars/star_half.png" alt="">
                  <img src="../../assets/images/stars/star_off.png" alt="">
                </div>
                <div class="rating_section" style="fontSize:12px;">3.6</div>
                <div class="order_section"  style="fontSize:12px;">月售106单</div>
              </section>
              <section class="shop_rating_order_right">
                <span class="delivery_style delivery_right">仲恺专送</span>
              </section>
            </section>
            <section class="shop_distance">
              <p class="shop_delivery_msg">
                <span>¥20起送</span>
                <span class="segmentation">/</span>
                <span>配送费约¥5</span>
              </p>
            </section>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../assets/stylus/minix.styl'
// 头部
.header {
  background-color: #02a774;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 45px;

  .header_search {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 10%;
    height: 50%;

    .iconfont {
      font-size: 25px;
      color: #fff;
    }
  }

  .header_title {
    position: absolute;
    top: 50%;
    left: 40%;
    transform: translate(-50%, -50%);
    width: 30%;
    color: #fff;
    text-align: center;

    .header_title_text {
      width: 150%;
      font-size: 20px;
      color: #fff;
      display: block;
    }
  }

  .header_login {
    font-size: 14px;
    color: #fff;
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
  }
}

.home_nav {
  bottom-border-1px(#e4e4e4);
  margin-top: 45px;
  background: #fff;

  .swiper-container {
    width: 100%;

    .swiper-wrapper {
      width: 100%;

      .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        .link_to_food {
          width: 25%;
          text-align: center;
        }

        .food_container {
          display: block;
          width: 100%;
          text-align: center;
        }
      }
    }
  }
}

.line {
  border: 7px solid #eee;
  margin: 20px 0 10px 0;
}

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