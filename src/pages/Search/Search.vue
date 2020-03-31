<!--
 * @Author: your name
 * @Date: 2020-03-31 15:45:06
 * @LastEditTime: 2020-03-31 15:56:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop0331\gshop-app\src\pages\Search\Search.vue
 -->
<template>
  <div id="app">
    <section class="search">
      <header class="search_header">
        <img class="search_sort" src="../../assets/images/order/up.png" alt />
        <form action="#" class="search_form">
          <!-- <img class="search_icon" src="../../assets/images/order/search.png" alt=""> -->
          <input type="search" name="search" placeholder="请输入商家或美食名称" class="search_input" />
          <a class="search_text">搜索</a>
        </form>
      </header>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import './Search.styl';
</style>