<!--
 * @Author: your name
 * @Date: 2020-03-31 15:45:06
 * @LastEditTime: 2020-03-31 16:24:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop0331\gshop-app\src\pages\Order\Order.vue
 -->
<template>
  <div id="app">
    <BarCharts/>
    <LineCharts/>
    <PieCharts/>
    <ContrastCharts/>
  </div>
</template>

<script>
import BarCharts from '../../components/ECharts/bar_charts'
import LineCharts from '../../components/ECharts/line_charts'
import PieCharts from '../../components/ECharts/pie_charts'
import ContrastCharts from '../../components/ECharts/contrast_charts'
export default {
  components:{
    BarCharts,
    LineCharts,
    PieCharts,
    ContrastCharts
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import './Order.styl';
</style>