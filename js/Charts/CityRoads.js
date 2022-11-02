var cityroadsChart = function (element) {
    var myChart = echarts.init(element, 'essos');
    var starPath = 'path://M794.453333 101.262222h-234.951111v54.897778H455.111111V101.262222H227.555556L127.146667 944.355556h768L794.453333 101.262222z m-236.657777 790.471111h-99.555556v-158.151111h99.555556z m0-261.404444h-99.555556v-160.142222h99.555556zM455.111111 362.666667V256h99.555556v105.528889z m0 0';

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: "各城市道路面积",
            subtext: "单位：万平方米"
        },
        tooltip: {
            trigger: "axis"
        },
        legend: {
            data: ["城市道路面积"]
        },
        toolbox: {
            show: true,
            feature: {
                mark: {
                    show: true
                },
                dataView: {
                    show: true,
                    readOnly: true
                },
                magicType: {
                    show: false,
                    type: ["line", "bar"]
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        calculable: true,
        xAxis: [
            {
                type: "value",
                boundaryGap: [0, 0.01]
            }
        ],
        yAxis: [
            {
                type: "category",
                data: ["  北京市", "  天津市", "  石家庄市", "  唐山市", "  秦皇岛市", "  邯郸市", "  邢台市", "  保定市", "  张家口市", "  承德市", "  沧州市", "  廊坊市", "  衡水市", "  太原市", "  大同市", "  阳泉市", "  长治市", "  晋城市", "  运城市", "  忻州市", "  临汾市", "  吕梁市", "  呼和浩特市", "  包头市", "  乌海市", "  赤峰市", "  通辽市", "  鄂尔多斯市", "  呼伦贝尔市", "  巴彦淖尔市", "  乌兰察布市", "  沈阳市", "  大连市", "  鞍山市", "  抚顺市", "  本溪市", "  丹东市", "  锦州市", "  营口市", "  阜新市", "  辽阳市", "  盘锦市", "  铁岭市", "  朝阳市", "  葫芦岛市", "  长春市", "  四平市", "  通化市", "  白城市", "  哈尔滨市", "  齐齐哈尔市", "  鹤岗市", "  双鸭山市", "  大庆市", "  伊春市", "  佳木斯市", "  七台河市", "  牡丹江市", "  黑河市", "  绥化市", "上海市", "  南京市", "  无锡市", "  徐州市", "  常州市", "  苏州市", "  南通市", "  连云港市", "  淮安市", "  盐城市", "  扬州市", "  镇江市", "  泰州市", "  宿迁市", "  杭州市", "  宁波市", "  温州市", "  嘉兴市", "  湖州市", "  绍兴市", "  金华市", "  衢州市", "  舟山市", "  台州市", "  丽水市", "  合肥市", "  芜湖市", "  蚌埠市", "  淮南市", "  马鞍山市", "  淮北市", "  铜陵市", "  安庆市", "  黄山市", "  滁州市", "  阜阳市", "  宿州市", "  六安市", "  亳州市", "  池州市", "  宣城市", "  福州市", "  厦门市", "  莆田市", "  三明市", "  泉州市", "  漳州市", "  南平市", "  龙岩市", "  宁德市", "  南昌市", "  景德镇市", "  九江市", "  新余市", "  鹰潭市", "  赣州市", "  吉安市", "  宜春市", "  抚州市", "  上饶市", "  济南市", "  青岛市", "  淄博市", "  枣庄市", "  东营市", "  烟台市", "  潍坊市", "  济宁市", "  泰安市", "  威海市", "  日照市", "  临沂市", "  德州市", "  聊城市", "  滨州市", "  菏泽市", "  郑州市", "  开封市", "  洛阳市", "  平顶山市", "  安阳市", "  鹤壁市", "  新乡市", "  焦作市", "  濮阳市", "  许昌市", "  漯河市", "  三门峡市", "  南阳市", "  商丘市", "  信阳市", "  周口市", "  驻马店市", "  武汉市", "  黄石市", "  十堰市", "  宜昌市", "  襄阳市", "  鄂州市", "  荆门市", "  孝感市", "  荆州市", "  黄冈市", "  咸宁市", "  随州市", "  长沙市", "  株洲市", "  湘潭市", "  衡阳市", "  邵阳市", "  岳阳市", "  常德市", "  张家界市", "  益阳市", "  永州市", "  怀化市", "  广州市", "  韶关市", "  深圳市", "  珠海市", "  汕头市", "  江门市", "  湛江市", "  茂名市", "  惠州市", "  梅州市", "  汕尾市", "  河源市", "  阳江市", "  清远市", "  潮州市", "  揭阳市", "  云浮市", "  南宁市", "  柳州市", "  桂林市", "  梧州市", "  北海市", "  防城港市", "  钦州市", "  贵港市", "  玉林市", "  百色市", "  贺州市", "  河池市", "  来宾市", "  崇左市", "  海口市", "  三亚市", "重庆市", "  自贡市", "  攀枝花市", "  泸州市", "  德阳市", "  绵阳市", "  广元市", "  遂宁市", "  内江市", "  乐山市", "  南充市", "  眉山市", "  宜宾市", "  广安市", "  达州市", "  雅安市", "  巴中市", "  资阳市", "  贵阳市", "  六盘水市", "  遵义市", "  安顺市", "  毕节市", "  铜仁市", "  昆明市", "  曲靖市", "  玉溪市", "  保山市", "  昭通市", "  丽江市", "  普洱市", "  临沧市", "  林芝市", "  西安市", "  铜川市", "  宝鸡市", "  咸阳市", "  渭南市", "  延安市", "  汉中市", "  榆林市", "  安康市", "  商洛市", "  兰州市", "  嘉峪关市", "  金昌市", "  白银市", "  天水市", "  武威市", "  张掖市", "  平凉市", "  酒泉市", "  庆阳市", "  定西市", "  陇南市", "  海东市", "  银川市", "  石嘴山市", "  吴忠市", "  固原市", "  中卫市", "  乌鲁木齐市", "  克拉玛依市", "  吐鲁番市", "  哈密市"],
                nameTextStyle: {
                    fontSize: 2
                },
                axisTick: {
                    show: true
                }
            }
        ],

        dataZoom: [
            {
              type: 'slider',
              show: true,
              // 设置组件控制的y轴
              yAxisIndex: 0,
              right: 40,    
              top: 60,
              // 数据窗口范围的起始百分比。范围是：0 ~ 100。表示 0% ~ 100%
              // 也可以用 startValue设置起始值
              start: 0,
              end: 5,
              width: 12,
              height: 450,
              // 组件的背景颜色
              backgroundColor: 'rgba(255, 255, 255, 0.4)',
              // 选中范围的填充颜色
              fillerColor: '#ffe696',
              // 边框颜色
              borderColor: '#ffffff',
              // 是否显示detail，即拖拽时候显示详细数值信息
              showDetail: false,
              // 控制手柄的尺寸
              handleSize: 16,
              // 是否在 dataZoom-silder 组件中显示数据阴影。数据阴影可以简单地反应数据走势。
              showDataShadow: false,
            },
            {
              type: 'inside',
              yAxisIndex: [0],
              start: 29,
              end: 36,
              // 不按任何功能键，鼠标滚轮能触发缩放
              zoomOnMouseWheel: false,
              // 不按任何功能键，鼠标移动能触发数据窗口平移
              moveOnMouseWheel: true
            }
          ],
        series: [
            {
                name: "城市道路面积",
                type: "pictorialBar",
                symbol: starPath,
                symbolRepeat: true,
                symbolSize: ['80%', '60%'],
                barCategoryGap: '40%',
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#ffe696' },
                        { offset: 0.5, color: '#e89868' },
                        { offset: 1, color: '#87626b' }
                    ])
                },
                data: [10654, 17510, 6332, 4580, 2436, 4197, 2543, 4418, 2102, 1274, 1439, 1309, 1192, 6725, 2532, 283, 1531, 849, 668, 801, 724, 433, 3060, 3192, 1524, 2613, 1241, 2958, 737, 1126, 1111, 8861, 5036, 3149, 1476, 1089, 897, 1029, 2281, 946, 1431, 1899, 670, 480, 521, 7957, 717, 432, 385, 6787, 1246, 504, 555, 3771, 782, 637, 488, 1070, 197, 376, 31012, 17061, 7424, 4863, 5599, 11477, 6037, 2736, 4103, 3554, 2990, 2643, 3124, 2168, 10073, 6329, 3659, 1985, 2852, 3834, 2562, 1369, 1429, 3194, 765, 8913, 4724, 2615, 2125, 1693, 1549, 1415, 1588, 1133, 2373, 2530, 1910, 1677, 1614, 822, 1284, 4604, 3662, 1623, 389, 3973, 1385, 467, 978, 744, 3577, 1485, 1812, 1230, 492, 4112, 1239, 1756, 2202, 1979, 12610, 10501, 6586, 2826, 2882, 7291, 4713, 5717, 3096, 4165, 2070, 6018, 3135, 2486, 2222, 2274, 6902, 2214, 3728, 1557, 1571, 1039, 1255, 1468, 1127, 2003, 1163, 676, 2408, 3220, 948, 1005, 1213, 13517, 1981, 1777, 3002, 2347, 595, 1267, 1561, 1164, 1015, 1293, 774, 10008, 3123, 1660, 2047, 1146, 2107, 1806, 475, 1338, 1245, 685, 19147, 885, 12235, 3634, 3680, 3146, 1594, 1386, 4875, 874, 585, 656, 1197, 894, 941, 1818, 293, 5640, 4282, 2106, 1608, 1633, 944, 1511, 1465, 1368, 827, 822, 839, 871, 459, 1895, 1103, 23593, 2279, 1132, 2981, 1853, 2799, 911, 1677, 1100, 1226, 2411, 1017, 2364, 1232, 490, 827, 772, 939, 3040, 819, 1305, 1189, 745, 1082, 5141, 1712, 951, 861, 568, 236, 407, 304, 190, 12107, 567, 1393, 1122, 167, 597, 630, 1689, 426, 251, 2838, 905, 498, 738, 764, 633, 388, 722, 627, 354, 289, 223, 446, 4226, 1924, 592, 823, 585, 7013, 2479, 409, 596]
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}