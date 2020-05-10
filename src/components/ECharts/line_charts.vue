<template>
<div id="line_chart" :style="{width: '300px', height: '300px'}" class="line_chart"></div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    mounted() {
        this.drawLine();
    },
    methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let line_chart = this.$echarts.init(document.getElementById('line_chart'))
        // 绘制图表
        line_chart.setOption({
            title: { text: '营收增长率曲线' },
            tooltip: {},
            xAxis: {
                data: ["15-16","16-17","17-18","18-19"]
            },
            yAxis: {
                type:'value'
            },
            series: [{
                type: 'line',
                data: [225,160,81.4,49.5]
            }]
        });
    }
  }
}
</script>

<style scoped>
.line_chart{
    margin: 0 auto;
}
</style>