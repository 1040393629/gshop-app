<template>
  <div id="app">
    <section class="search">
      <header class="search_header">
        <img class="search_sort" src="../../assets/images/order/up.png" alt />
        <form class="search_form" @submit.prevent="search">
          <!-- <img class="search_icon" src="../../assets/images/order/search.png" alt=""> -->
          <input 
          type="search" 
          name="search" 
          placeholder="请输入商家或美食名称" 
          class="search_input"
          v-model="keyword"
          />
          <input type="submit" class="search_text" value="提交">
        </form>
      </header>

      <section class="list" v-if="!noSearchShops">
      <ul class="list_container">
        <!--:to="'/shop?id='+item.id"-->
        <router-link :to="{path:'/shop', query:{id:item.id}}" tag="li"
                     v-for="item in searchShops" :key="item.id" class="list_li">
          <section class="item_left">
            <img :src="imgBaseUrl + item.image_path" class="restaurant_img">
          </section>
          <section class="item_right">
            <div class="item_right_text">
              <p>
                <span>{{item.name}}</span>
              </p>
              <p>月售 {{item.month_sales||item.recent_order_num}} 单</p>
              <p>{{item.delivery_fee||item.float_minimum_order_amount}} 元起送 / 距离{{item.distance}}</p>
            </div>
          </section>
        </router-link>
      </ul>
    </section>
      <div class="search_none" v-else>
       <img class="img" src="/static/timg.jpg" alt="">
      </div>
    </section>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
      keyword:'',
      imgBaseUrl: 'http://cangdu.org:8001/img/',
      noSearchShops: false
    }
  },
  computed: {
      ...mapState(['searchShops'])
    },
  methods: {
    search() {
      //获取搜素关键字
      const keyword = this.keyword.trim()
      //进行搜索
      if(keyword) {
        this.$store.dispatch('searchShops',keyword)
        console.log(keyword,typeof keyword);
      }
    }
  },
   watch: {
      searchShops (value) {
        if(!value.length) { // 没有数据

          this.noSearchShops = true
        } else {// 有数据

          this.noSearchShops = false
        }
      }
    },
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import './Search.styl';
</style>