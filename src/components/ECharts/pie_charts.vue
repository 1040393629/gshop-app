<template>
<div id="pie_chart" :style="{width: '300px', height: '300px'}" class="pie_chart"></div>
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
        let pie_chart = this.$echarts.init(document.getElementById('pie_chart'))
        // 绘制图表
        pie_chart.setOption({
            tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['美团', '饿了么+百度外卖','其他']
    },
    series: [
        {
            name: '餐饮外卖',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '18',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 43.1, name: '美团'},
                {value: 48.8, name: '饿了么+百度外卖'},
                {value: 8.1, name: '其他'},
            ]
        }
    ]
        });
    }
  }
}
</script>

<style scoped>
.pie_chart{
    margin: 100px auto;
}
</style>