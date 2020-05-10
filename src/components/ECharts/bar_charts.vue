<template>
<div id="bar_chart" :style="{width: '300px', height: '300px'}" class="bar_chart"></div>
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
        let bar_chart = this.$echarts.init(document.getElementById('bar_chart'))
        // 绘制图表
        bar_chart.setOption({
            title: { text: '2015-2019年美团外卖营收' },
            tooltip: {},
            xAxis: {
                type: 'category',
                data: ["2015","2016","2017","2018","2019"]
            },
            yAxis: {
                type:'value'
            },
            series: [{
                name: '营收',
                type: 'bar',
                data: [40, 130, 339, 381.4,975.29]
            }]
        });
    }
  }
}
</script>

<style scoped>
.bar_chart{
    margin: 0 auto;
}
</style>