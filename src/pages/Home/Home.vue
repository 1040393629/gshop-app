<template>
  <div class="app" style="backgroundColor:#fff">
    <header class="header">
      <span class="header_search">
        <i class="iconfont iconsousuo"></i>
      </span>
      <span class="header_title">
        <span class="header_title_text ellipsis">{{this.$store.state.address.name}}</span>
      </span>
      <span class="header_login">
        <span class="header_login_text">登录 | 注册</span>
      </span>
    </header>

    <!-- 首页导航轮播图 -->
    <nav class="home_nav">
      <div class="swiper-container" v-if="foodList.length">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(items,index) in foodArr" :key="index">
            <a href="#" class="link_to_food" v-for="(item,index) in items" :key="index">
              <div class="food_container">
                <img :src="baseImageUrl+item.image_url" style="width:50px;height:50px">
              </div>
              <span>{{ item.title }}</span>
            </a>
          </div>
          <!-- 分页器 -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <img src="../../assets/images/msite_back.svg" alt="" v-else>
    </nav>
    <!-- 分割线 -->
    <div class="line"></div>

    <!-- 附近商家 -->
    <shop-list></shop-list>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import ShopList from "../../components/shopList/shopList";
import {mapState} from 'vuex'
export default {
  components: {
    ShopList
  },
  data(){
    return{
      baseImageUrl:'https://fuss10.elemecdn.com'
    }
  },
  computed: {
    ...mapState(["foodList"]),
    foodArr() {
      //二维食物分类
      let smallFoodArr = this.$store.state.foodList;
      let arr = []; //准备一个二维数组  最后返回
      let minArr = [];
      smallFoodArr.forEach(element => {
        if (minArr.length === 8) {
          minArr = [];
        }
        if (minArr.length === 0) {
          arr.push(minArr);
        }
        minArr.push(element);
      });
      return arr;
    }
  },
  watch: {
    foodList(value) {
      this.$nextTick(() => {
        //创建swiper对象
        new Swiper(".swiper-container", {
          loop: true,
          autoplay: true,
          effect: "cube",
          pagination: {
            el: ".swiper-pagination"
          }
        });
      });
    }
  },
  mounted() {
    //根据经纬度请求地址
    this.$store.dispatch("getAddress");
    this.$store.dispatch("getFoodList");
    this.$store.dispatch("getShops");
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../assets/stylus/minix.styl';

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
    height: 200px;

    .swiper-wrapper {
      width: 100%;

      .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        visibility: visible;

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

.home_shop_list {
  background-color: #fff !important;
  padding: 0 0 40px 0;

  .shop_header {
    display: flex;
    align-items: center;
  }

  .shop_container {
    margin-bottom: 10px;

    .shop_container_item {
      display: flex;
      flex-direction: row;
      margin: 30px 0;

      .shop_left {
        width: 23%;
      }

      .shop_right {
        float: right;
        width: 77%;

        .shop_detail_header {
          display: flex;
          flex-direction: row;

          .shop_title {
            float: left;
            width: 200px;
            color: #333;
            font-size: 16px;
            line-height: 16px;
            font-weight: 700;

            &::before {
              content: '品牌';
              display: inline-block;
              font-size: 11px;
              line-height: 11px;
              color: #333;
              background-color: #ffd930;
              padding: 2px 2px;
              border-radius: 2px;
              margin-right: 5px;
            }
          }

          .shop_detail_ul {
            float: right;
            margin-top: 3px;
            margin-left: 15px;

            .supports {
              float: left;
              font-size: 8px;
              color: #999;
              border: 1px solid #f1f1f1;
              padding: 0 5px;
              border-radius: 2px;
            }
          }
        }

        .shop_rating_order {
          clearFix();
          width: 100%;
          margin-top: 12px;
          margin-bottom: 12px;

          .shop_rating_order_left {
            float: left;
            color: #ff9a0d;
            display: flex;
            flex-direction: row;
            text-align: center;
            align-items: center;
            padding: 0 2px;

            .rating_section {
              margin: 0 5px;
            }
          }

          .shop_rating_order_right {
            float: right;

            .delivery_style {
              transform-origin: 35px 0;
              transform: scale(0.7);
              display: inline-block;
              font-size: 14px;
              padding: 1px;
              border-radius: 2px;
              margin-right: 10px;
            }

            .delivery_right {
              color: #02a774;
              border: 1px solid #02a774;
            }
          }
        }

        .shop_distance {
          clearFix();
          width: 100%;
          font-size: 12px;

          .shop_delivery_msg {
            float: left;
            transform-origin: 0;
            transform: scale(0.9);
            color: #666;

            .segmentation {
              color: #ccc;
            }
          }
        }
      }
    }
  }
}
</style>