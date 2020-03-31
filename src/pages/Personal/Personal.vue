<template>
  <div id="app">
    <section class="personal" style="width:100%">
      <header class="personal_header">
        <span class="personal_header_title">
          <span class="header_title_text">个人中心</span>
        </span>
      </header>
      <section class="personal_number">
        <a href="#" class="personal_link">
          <div class="personal_img">
            <img src="../../assets/images/personal/person.png" alt />
          </div>
          <div class="user_info">
            <p class="user_info_top">登陆/注册</p>
            <p>
              <span class="user_icon">
                <i class="iconfont iconshouji icon_mobile"></i>
              </span>
              <span class="icon_mobile_number">暂无绑定手机号</span>
            </p>
          </div>
          <span class="arrow">
            <i class="iconfont iconzuojiantou icon_arrow"></i>
          </span>
        </a>
      </section>
      <section class="personal_info_data border-1px">
        <ul class="info_data_list">
          <a href="javascript:" class="info_data_link">
            <span class="info_data_top">
              <span>0.00</span>元
            </span>
            <span class="info_data_bottom">我的余额</span>
          </a>
          <a href="javascript:" class="info_data_link">
            <span class="info_data_top">
              <span>0</span>个
            </span>
            <span class="info_data_bottom">我的优惠</span>
          </a>
          <a href="javascript:" class="info_data_link">
            <span class="info_data_top">
              <span>0</span>分
            </span>
            <span class="info_data_bottom">我的积分</span>
          </a>
        </ul>
      </section>
      <section class="personal_my_order border-1px">
        <!-- 我的订单 -->
        <a class="my_order">
          <span>
            <i class="iconfont icondingdan2"></i>
          </span>
          <div class="my_order_div">
            <span>我的订单</span>
            <span class="my_order_icon">
              <i class="iconfont iconzuojiantou"></i>
            </span>
          </div>
        </a>
        <!-- 积分商场 -->
        <a class="my_order">
          <span>
            <i class="iconfont iconjifen"></i>
          </span>
          <div class="my_order_div">
            <span>积分商城</span>
            <span class="my_order_icon">
              <i class="iconfont iconzuojiantou"></i>
            </span>
          </div>
        </a>
        <!-- 会员卡 -->
        <a class="my_order">
          <span>
            <i class="iconfont iconhuiyuan"></i>
          </span>
          <div class="my_order_div">
            <span>外卖会员</span>
            <span class="my_order_icon">
              <i class="iconfont iconzuojiantou"></i>
            </span>
          </div>
        </a>
        <!-- 服务中心 -->
        <a href="javascript:" class="my_order">
          <span>
            <i class="iconfont iconfuwu"></i>
          </span>
          <div class="my_order_div">
            <span>服务中心</span>
            <span class="my_order_icon">
              <i class="iconfont iconzuojiantou"></i>
            </span>
          </div>
        </a>
      </section>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import './Personal.styl';
@import '../../assets/stylus/minix.styl';
</style>