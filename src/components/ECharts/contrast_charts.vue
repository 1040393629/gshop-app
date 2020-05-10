<template>
  <div id="contrast_chart" :style="{width: '300px', height: '300px'}" class="contrast_chart"></div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let contrast_chart = this.$echarts.init(
        document.getElementById("contrast_chart")
      );
      // 绘制图表
      contrast_chart.setOption({
        title: {
          text: "对比图",
          subtext: "数据来自网络"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        legend: {
          data: ["2017年", "2018年"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: "category",
          data: ['交易用户数(亿)','在线外卖用户规模(亿)','订单量(亿单)']
        },
        series: [
          {
            name: "2017年",
            type: "bar",
            data: [3.1,3.05,55.7,]
          },
          {
            name: "2018年",
            type: "bar",
            data: [4.0,3.58,109.6,]
          }
        ]
      });
    }
  }
};
</script>
<style scoped>
.contrast_chart {
  margin: 0 auto;
  margin-bottom: 100px;
}
</style>