var compareChart = function(element)
{
    var myChart = echarts.init(element, null, {
        renderer: 'canvas',
        useDirtyRect: false
    });
    var app = {};

    var option;

    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['上海', '北京']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'value'
        }],
        yAxis: [{
            type: 'category',
            axisTick: {
                show: false
            },
            itemStyle:
            {
                color:"white"
        },
            data: ['道路面积', '常住人口', '绿化覆盖率', '地区生产总值', '商品房待售面积', '企业数', '平均工资', '医院数', '学校数']
        }],
        series: [{
            name: '上海',
            type: 'bar',
            stack: 'Total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [25.57, 46.80, 56.75, 48.26, 49.18, 25.59, 51.44, 64.80, 51.16],
            color: "#87626b"

        }, {
            name: '北京',
            type: 'bar',
            stack: 'Total',
            label: {
                show: true,

            },
            emphasis: {
                focus: 'series'
            },
            data: [74.43, 53.20, 43.25, 51.74, 50.82, 74.41, 48.56, 35.2, 48.84],
            color: "#e89868"
        }]
    };

    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
}