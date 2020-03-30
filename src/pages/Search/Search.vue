<template>
  <div id="app">
    <section class="search">
      <header class="header">
          <img class="search_sort" src="../../assets/images/order/up.png" alt="">
      <form action="#" class="search_form">
          <!-- <img class="search_icon" src="../../assets/images/order/search.png" alt=""> -->
          <input 
          type="search" 
          name="search" 
          placeholder="请输入商家或美食名称"
          class="search_input">
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
@import './Search.styl'
</style>