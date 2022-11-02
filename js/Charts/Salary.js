var salaryChart = function(element)
{
    var myChart = echarts.init(element,'essos');

      // 指定图表的配置项和数据
      var option ={
    title: {
        text: "各城市平均工资",
        subtext: "单位：元",
        x: "center"
    },
    tooltip: {
        trigger: "item"
    },
    legend: {
        orient: "vertical",
        x: "left",
        y: "center",
        data: ["北京市", "天津市", "石家庄市", "唐山市", "秦皇岛市", "邯郸市", "邢台市", "保定市", "张家口市", "承德市", "沧州市", "廊坊市", "衡水市", "太原市", "大同市", "阳泉市", "长治市", "晋城市", "朔州市", "晋中市", "运城市", "忻州市", "临汾市", "吕梁市", "呼和浩特市", "包头市", "乌海市", "赤峰市", "通辽市", "鄂尔多斯市", "呼伦贝尔市", "巴彦淖尔市", "乌兰察布市", "沈阳市", "大连市", "鞍山市", "抚顺市", "本溪市", "丹东市", "锦州市", "营口市", "阜新市", "辽阳市", "盘锦市", "铁岭市", "朝阳市", "葫芦岛市", "长春市", "吉林市", "四平市", "辽源市", "通化市", "白山市", "松原市", "白城市", "哈尔滨市", "齐齐哈尔市", "鸡西市", "鹤岗市", "双鸭山市", "大庆市", "伊春市", "佳木斯市", "七台河市", "牡丹江市", "黑河市", "绥化市", "上海市", "南京市", "无锡市", "徐州市", "常州市", "苏州市", "南通市", "连云港市", "淮安市", "盐城市", "扬州市", "镇江市", "泰州市", "宿迁市", "杭州市", "宁波市", "温州市", "嘉兴市", "湖州市", "绍兴市", "金华市", "衢州市", "舟山市", "台州市", "丽水市", "合肥市", "芜湖市", "蚌埠市", "淮南市", "马鞍山市", "淮北市", "铜陵市", "安庆市", "黄山市", "滁州市", "阜阳市", "宿州市", "六安市", "亳州市", "池州市", "宣城市", "福州市", "厦门市", "莆田市", "三明市", "泉州市", "漳州市", "南平市", "龙岩市", "宁德市", "南昌市", "景德镇市", "萍乡市", "九江市", "新余市", "鹰潭市", "赣州市", "吉安市", "宜春市", "抚州市", "上饶市", "济南市", "青岛市", "淄博市", "枣庄市", "东营市", "烟台市", "潍坊市", "济宁市", "泰安市", "威海市", "日照市", "临沂市", "德州市", "聊城市", "滨州市", "菏泽市", "郑州市", "开封市", "洛阳市", "平顶山市", "安阳市", "鹤壁市", "新乡市", "焦作市", "濮阳市", "许昌市", "漯河市", "三门峡市", "南阳市", "商丘市", "信阳市", "周口市", "驻马店市", "武汉市", "黄石市", "十堰市", "宜昌市", "襄阳市", "鄂州市", "荆门市", "孝感市", "荆州市", "黄冈市", "咸宁市", "随州市", "长沙市", "株洲市", "湘潭市", "衡阳市", "邵阳市", "岳阳市", "常德市", "张家界市", "益阳市", "郴州市", "永州市", "怀化市", "娄底市", "广州市", "韶关市", "深圳市", "珠海市", "汕头市", "佛山市", "江门市", "湛江市", "茂名市", "肇庆市", "惠州市", "梅州市", "汕尾市", "河源市", "阳江市", "清远市", "东莞市", "中山市", "潮州市", "揭阳市", "云浮市", "南宁市", "柳州市", "桂林市", "梧州市", "北海市", "防城港市", "钦州市", "贵港市", "玉林市", "百色市", "贺州市", "河池市", "来宾市", "崇左市", "海口市", "三亚市", "儋州市", "重庆市", "成都市", "泸州市", "德阳市", "绵阳市", "广元市", "遂宁市", "内江市", "乐山市", "南充市", "眉山市", "宜宾市", "雅安市", "巴中市", "资阳市", "贵阳市", "六盘水市", "遵义市", "安顺市", "毕节市", "铜仁市", "昆明市", "曲靖市", "玉溪市", "保山市", "昭通市", "丽江市", "普洱市", "临沧市", "拉萨市", "昌都市", "林芝市", "那曲市", "西安市", "铜川市", "宝鸡市", "咸阳市", "渭南市", "延安市", "汉中市", "榆林市", "安康市", "商洛市", "兰州市", "嘉峪关市", "金昌市", "白银市", "天水市", "武威市", "张掖市", "平凉市", "酒泉市", "庆阳市", "定西市", "陇南市", "西宁市", "海东市", "银川市", "石嘴山市", "吴忠市", "固原市", "中卫市", "乌鲁木齐市", "克拉玛依市", "吐鲁番市", "哈密市"]
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
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    calculable: true,
    series: [
        {
            name: "城镇非私营单位在岗职工平均工资(元)",
            type: "funnel",
            x: "15%",
            x2: "15%",
            y2: "10%",
            max: 185026,
            itemStyle: {
                normal: {
                    labelLine: {
                        show: false
                    }
                },
                emphasis: {
                    labelLine: {
                        show: false
                    }
                }
            },
            data: [
                {
                    value: 185026,
                    name: "北京市"
                },
                {
                    value: 118918,
                    name: "天津市"
                },
                {
                    value: 84870,
                    name: "石家庄市"
                },
                {
                    value: 82483,
                    name: "唐山市"
                },
                {
                    value: 85609,
                    name: "秦皇岛市"
                },
                {
                    value: 71148,
                    name: "邯郸市"
                },
                {
                    value: 70311,
                    name: "邢台市"
                },
                {
                    value: 75635,
                    name: "保定市"
                },
                {
                    value: 73958,
                    name: "张家口市"
                },
                {
                    value: 73929,
                    name: "承德市"
                },
                {
                    value: 80905,
                    name: "沧州市"
                },
                {
                    value: 92653,
                    name: "廊坊市"
                },
                {
                    value: 68819,
                    name: "衡水市"
                },
                {
                    value: 88650,
                    name: "太原市"
                },
                {
                    value: 75145,
                    name: "大同市"
                },
                {
                    value: 68077,
                    name: "阳泉市"
                },
                {
                    value: 71306,
                    name: "长治市"
                },
                {
                    value: 73443,
                    name: "晋城市"
                },
                {
                    value: 77091,
                    name: "朔州市"
                },
                {
                    value: 74469,
                    name: "晋中市"
                },
                {
                    value: 65317,
                    name: "运城市"
                },
                {
                    value: 69414,
                    name: "忻州市"
                },
                {
                    value: 71121,
                    name: "临汾市"
                },
                {
                    value: 76906,
                    name: "吕梁市"
                },
                {
                    value: 89549,
                    name: "呼和浩特市"
                },
                {
                    value: 86333,
                    name: "包头市"
                },
                {
                    value: 88270,
                    name: "乌海市"
                },
                {
                    value: 79912,
                    name: "赤峰市"
                },
                {
                    value: 81558,
                    name: "通辽市"
                },
                {
                    value: 102903,
                    name: "鄂尔多斯市"
                },
                {
                    value: 78803,
                    name: "呼伦贝尔市"
                },
                {
                    value: 83608,
                    name: "巴彦淖尔市"
                },
                {
                    value: 81305,
                    name: "乌兰察布市"
                },
                {
                    value: 95908,
                    name: "沈阳市"
                },
                {
                    value: 98812,
                    name: "大连市"
                },
                {
                    value: 70993,
                    name: "鞍山市"
                },
                {
                    value: 74909,
                    name: "抚顺市"
                },
                {
                    value: 64857,
                    name: "本溪市"
                },
                {
                    value: 61537,
                    name: "丹东市"
                },
                {
                    value: 71400,
                    name: "锦州市"
                },
                {
                    value: 72505,
                    name: "营口市"
                },
                {
                    value: 63670,
                    name: "阜新市"
                },
                {
                    value: 73390,
                    name: "辽阳市"
                },
                {
                    value: 68858,
                    name: "盘锦市"
                },
                {
                    value: 71582,
                    name: "铁岭市"
                },
                {
                    value: 67895,
                    name: "朝阳市"
                },
                {
                    value: 68269,
                    name: "葫芦岛市"
                },
                {
                    value: 92905,
                    name: "长春市"
                },
                {
                    value: 71733,
                    name: "吉林市"
                },
                {
                    value: 67134,
                    name: "四平市"
                },
                {
                    value: 66603,
                    name: "辽源市"
                },
                {
                    value: 65126,
                    name: "通化市"
                },
                {
                    value: 63022,
                    name: "白山市"
                },
                {
                    value: 75817,
                    name: "松原市"
                },
                {
                    value: 69606,
                    name: "白城市"
                },
                {
                    value: 84796,
                    name: "哈尔滨市"
                },
                {
                    value: 69460,
                    name: "齐齐哈尔市"
                },
                {
                    value: 62287,
                    name: "鸡西市"
                },
                {
                    value: 55114,
                    name: "鹤岗市"
                },
                {
                    value: 64267,
                    name: "双鸭山市"
                },
                {
                    value: 96088,
                    name: "大庆市"
                },
                {
                    value: 50319,
                    name: "伊春市"
                },
                {
                    value: 57737,
                    name: "佳木斯市"
                },
                {
                    value: 62859,
                    name: "七台河市"
                },
                {
                    value: 64465,
                    name: "牡丹江市"
                },
                {
                    value: 62944,
                    name: "黑河市"
                },
                {
                    value: 57631,
                    name: "绥化市"
                },
                {
                    value: 174678,
                    name: "上海市"
                },
                {
                    value: 138005,
                    name: "南京市"
                },
                {
                    value: 115748,
                    name: "无锡市"
                },
                {
                    value: 86138,
                    name: "徐州市"
                },
                {
                    value: 113273,
                    name: "常州市"
                },
                {
                    value: 113744,
                    name: "苏州市"
                },
                {
                    value: 92542,
                    name: "南通市"
                },
                {
                    value: 92008,
                    name: "连云港市"
                },
                {
                    value: 83216,
                    name: "淮安市"
                },
                {
                    value: 89727,
                    name: "盐城市"
                },
                {
                    value: 87874,
                    name: "扬州市"
                },
                {
                    value: 93129,
                    name: "镇江市"
                },
                {
                    value: 85944,
                    name: "泰州市"
                },
                {
                    value: 78697,
                    name: "宿迁市"
                },
                {
                    value: 132188,
                    name: "杭州市"
                },
                {
                    value: 111286,
                    name: "宁波市"
                },
                {
                    value: 96775,
                    name: "温州市"
                },
                {
                    value: 107614,
                    name: "嘉兴市"
                },
                {
                    value: 97620,
                    name: "湖州市"
                },
                {
                    value: 85837,
                    name: "绍兴市"
                },
                {
                    value: 96589,
                    name: "金华市"
                },
                {
                    value: 124605,
                    name: "衢州市"
                },
                {
                    value: 108495,
                    name: "舟山市"
                },
                {
                    value: 91307,
                    name: "台州市"
                },
                {
                    value: 115583,
                    name: "丽水市"
                },
                {
                    value: 104818,
                    name: "合肥市"
                },
                {
                    value: 83593,
                    name: "芜湖市"
                },
                {
                    value: 80102,
                    name: "蚌埠市"
                },
                {
                    value: 96671,
                    name: "淮南市"
                },
                {
                    value: 92490,
                    name: "马鞍山市"
                },
                {
                    value: 85560,
                    name: "淮北市"
                },
                {
                    value: 85332,
                    name: "铜陵市"
                },
                {
                    value: 79459,
                    name: "安庆市"
                },
                {
                    value: 82877,
                    name: "黄山市"
                },
                {
                    value: 83281,
                    name: "滁州市"
                },
                {
                    value: 78062,
                    name: "阜阳市"
                },
                {
                    value: 74188,
                    name: "宿州市"
                },
                {
                    value: 88247,
                    name: "六安市"
                },
                {
                    value: 70775,
                    name: "亳州市"
                },
                {
                    value: 84912,
                    name: "池州市"
                },
                {
                    value: 82058,
                    name: "宣城市"
                },
                {
                    value: 96478,
                    name: "福州市"
                },
                {
                    value: 108554,
                    name: "厦门市"
                },
                {
                    value: 75316,
                    name: "莆田市"
                },
                {
                    value: 90508,
                    name: "三明市"
                },
                {
                    value: 76330,
                    name: "泉州市"
                },
                {
                    value: 89060,
                    name: "漳州市"
                },
                {
                    value: 82487,
                    name: "南平市"
                },
                {
                    value: 82970,
                    name: "龙岩市"
                },
                {
                    value: 92223,
                    name: "宁德市"
                },
                {
                    value: 93774,
                    name: "南昌市"
                },
                {
                    value: 72319,
                    name: "景德镇市"
                },
                {
                    value: 80056,
                    name: "萍乡市"
                },
                {
                    value: 81455,
                    name: "九江市"
                },
                {
                    value: 85324,
                    name: "新余市"
                },
                {
                    value: 79399,
                    name: "鹰潭市"
                },
                {
                    value: 75085,
                    name: "赣州市"
                },
                {
                    value: 70103,
                    name: "吉安市"
                },
                {
                    value: 70644,
                    name: "宜春市"
                },
                {
                    value: 71861,
                    name: "抚州市"
                },
                {
                    value: 72108,
                    name: "上饶市"
                },
                {
                    value: 108391,
                    name: "济南市"
                },
                {
                    value: 116115,
                    name: "青岛市"
                },
                {
                    value: 84758,
                    name: "淄博市"
                },
                {
                    value: 75428,
                    name: "枣庄市"
                },
                {
                    value: 107271,
                    name: "东营市"
                },
                {
                    value: 88339,
                    name: "烟台市"
                },
                {
                    value: 82085,
                    name: "潍坊市"
                },
                {
                    value: 85437,
                    name: "济宁市"
                },
                {
                    value: 75073,
                    name: "泰安市"
                },
                {
                    value: 77022,
                    name: "威海市"
                },
                {
                    value: 85886,
                    name: "日照市"
                },
                {
                    value: 80594,
                    name: "临沂市"
                },
                {
                    value: 76721,
                    name: "德州市"
                },
                {
                    value: 79960,
                    name: "聊城市"
                },
                {
                    value: 80233,
                    name: "滨州市"
                },
                {
                    value: 71449,
                    name: "菏泽市"
                },
                {
                    value: 89464,
                    name: "郑州市"
                },
                {
                    value: 60758,
                    name: "开封市"
                },
                {
                    value: 77000,
                    name: "洛阳市"
                },
                {
                    value: 65272,
                    name: "平顶山市"
                },
                {
                    value: 67048,
                    name: "安阳市"
                },
                {
                    value: 58297,
                    name: "鹤壁市"
                },
                {
                    value: 63509,
                    name: "新乡市"
                },
                {
                    value: 64602,
                    name: "焦作市"
                },
                {
                    value: 73100,
                    name: "濮阳市"
                },
                {
                    value: 67237,
                    name: "许昌市"
                },
                {
                    value: 63931,
                    name: "漯河市"
                },
                {
                    value: 69767,
                    name: "三门峡市"
                },
                {
                    value: 61104,
                    name: "南阳市"
                },
                {
                    value: 60509,
                    name: "商丘市"
                },
                {
                    value: 62036,
                    name: "信阳市"
                },
                {
                    value: 57587,
                    name: "周口市"
                },
                {
                    value: 60574,
                    name: "驻马店市"
                },
                {
                    value: 107567,
                    name: "武汉市"
                },
                {
                    value: 73486,
                    name: "黄石市"
                },
                {
                    value: 80481,
                    name: "十堰市"
                },
                {
                    value: 81053,
                    name: "宜昌市"
                },
                {
                    value: 78512,
                    name: "襄阳市"
                },
                {
                    value: 82032,
                    name: "鄂州市"
                },
                {
                    value: 83218,
                    name: "荆门市"
                },
                {
                    value: 71857,
                    name: "孝感市"
                },
                {
                    value: 61734,
                    name: "荆州市"
                },
                {
                    value: 67847,
                    name: "黄冈市"
                },
                {
                    value: 77732,
                    name: "咸宁市"
                },
                {
                    value: 71143,
                    name: "随州市"
                },
                {
                    value: 105603,
                    name: "长沙市"
                },
                {
                    value: 84738,
                    name: "株洲市"
                },
                {
                    value: 71074,
                    name: "湘潭市"
                },
                {
                    value: 70240,
                    name: "衡阳市"
                },
                {
                    value: 68987,
                    name: "邵阳市"
                },
                {
                    value: 68050,
                    name: "岳阳市"
                },
                {
                    value: 73745,
                    name: "常德市"
                },
                {
                    value: 79586,
                    name: "张家界市"
                },
                {
                    value: 72492,
                    name: "益阳市"
                },
                {
                    value: 74129,
                    name: "郴州市"
                },
                {
                    value: 66641,
                    name: "永州市"
                },
                {
                    value: 76055,
                    name: "怀化市"
                },
                {
                    value: 69412,
                    name: "娄底市"
                },
                {
                    value: 135138,
                    name: "广州市"
                },
                {
                    value: 98366,
                    name: "韶关市"
                },
                {
                    value: 139436,
                    name: "深圳市"
                },
                {
                    value: 107284,
                    name: "珠海市"
                },
                {
                    value: 84400,
                    name: "汕头市"
                },
                {
                    value: 94536,
                    name: "佛山市"
                },
                {
                    value: 88219,
                    name: "江门市"
                },
                {
                    value: 98028,
                    name: "湛江市"
                },
                {
                    value: 86586,
                    name: "茂名市"
                },
                {
                    value: 90002,
                    name: "肇庆市"
                },
                {
                    value: 89840,
                    name: "惠州市"
                },
                {
                    value: 85160,
                    name: "梅州市"
                },
                {
                    value: 85628,
                    name: "汕尾市"
                },
                {
                    value: 86494,
                    name: "河源市"
                },
                {
                    value: 87212,
                    name: "阳江市"
                },
                {
                    value: 92883,
                    name: "清远市"
                },
                {
                    value: 79601,
                    name: "东莞市"
                },
                {
                    value: 95309,
                    name: "中山市"
                },
                {
                    value: 83437,
                    name: "潮州市"
                },
                {
                    value: 69943,
                    name: "揭阳市"
                },
                {
                    value: 86847,
                    name: "云浮市"
                },
                {
                    value: 97079,
                    name: "南宁市"
                },
                {
                    value: 86155,
                    name: "柳州市"
                },
                {
                    value: 82096,
                    name: "桂林市"
                },
                {
                    value: 75836,
                    name: "梧州市"
                },
                {
                    value: 80132,
                    name: "北海市"
                },
                {
                    value: 88304,
                    name: "防城港市"
                },
                {
                    value: 73822,
                    name: "钦州市"
                },
                {
                    value: 77986,
                    name: "贵港市"
                },
                {
                    value: 76079,
                    name: "玉林市"
                },
                {
                    value: 86362,
                    name: "百色市"
                },
                {
                    value: 86858,
                    name: "贺州市"
                },
                {
                    value: 85292,
                    name: "河池市"
                },
                {
                    value: 76582,
                    name: "来宾市"
                },
                {
                    value: 78189,
                    name: "崇左市"
                },
                {
                    value: 90277,
                    name: "海口市"
                },
                {
                    value: 93152,
                    name: "三亚市"
                },
                {
                    value: 86970,
                    name: "儋州市"
                },
                {
                    value: 98380,
                    name: "重庆市"
                },
                {
                    value: 104463,
                    name: "成都市"
                },
                {
                    value: 68716,
                    name: "泸州市"
                },
                {
                    value: 88437,
                    name: "德阳市"
                },
                {
                    value: 84222,
                    name: "绵阳市"
                },
                {
                    value: 79873,
                    name: "广元市"
                },
                {
                    value: 68864,
                    name: "遂宁市"
                },
                {
                    value: 67573,
                    name: "内江市"
                },
                {
                    value: 87663,
                    name: "乐山市"
                },
                {
                    value: 83013,
                    name: "南充市"
                },
                {
                    value: 82096,
                    name: "眉山市"
                },
                {
                    value: 87304,
                    name: "宜宾市"
                },
                {
                    value: 77965,
                    name: "雅安市"
                },
                {
                    value: 73449,
                    name: "巴中市"
                },
                {
                    value: 78205,
                    name: "资阳市"
                },
                {
                    value: 101829,
                    name: "贵阳市"
                },
                {
                    value: 89001,
                    name: "六盘水市"
                },
                {
                    value: 10216,
                    name: "遵义市"
                },
                {
                    value: 82795,
                    name: "安顺市"
                },
                {
                    value: 88442,
                    name: "毕节市"
                },
                {
                    value: 65278,
                    name: "铜仁市"
                },
                {
                    value: 102304,
                    name: "昆明市"
                },
                {
                    value: 89052,
                    name: "曲靖市"
                },
                {
                    value: 98139,
                    name: "玉溪市"
                },
                {
                    value: 83733,
                    name: "保山市"
                },
                {
                    value: 94947,
                    name: "昭通市"
                },
                {
                    value: 100632,
                    name: "丽江市"
                },
                {
                    value: 95620,
                    name: "普洱市"
                },
                {
                    value: 99755,
                    name: "临沧市"
                },
                {
                    value: 125998,
                    name: "拉萨市"
                },
                {
                    value: 123660,
                    name: "昌都市"
                },
                {
                    value: 121361,
                    name: "林芝市"
                },
                {
                    value: 149738,
                    name: "那曲市"
                },
                {
                    value: 104363,
                    name: "西安市"
                },
                {
                    value: 69120,
                    name: "铜川市"
                },
                {
                    value: 73028,
                    name: "宝鸡市"
                },
                {
                    value: 69290,
                    name: "咸阳市"
                },
                {
                    value: 65596,
                    name: "渭南市"
                },
                {
                    value: 79799,
                    name: "延安市"
                },
                {
                    value: 73316,
                    name: "汉中市"
                },
                {
                    value: 88461,
                    name: "榆林市"
                },
                {
                    value: 68251,
                    name: "安康市"
                },
                {
                    value: 61124,
                    name: "商洛市"
                },
                {
                    value: 93847,
                    name: "兰州市"
                },
                {
                    value: 87807,
                    name: "嘉峪关市"
                },
                {
                    value: 86195,
                    name: "金昌市"
                },
                {
                    value: 75745,
                    name: "白银市"
                },
                {
                    value: 68500,
                    name: "天水市"
                },
                {
                    value: 75582,
                    name: "武威市"
                },
                {
                    value: 85779,
                    name: "张掖市"
                },
                {
                    value: 86228,
                    name: "平凉市"
                },
                {
                    value: 80752,
                    name: "酒泉市"
                },
                {
                    value: 80521,
                    name: "庆阳市"
                },
                {
                    value: 75289,
                    name: "定西市"
                },
                {
                    value: 69164,
                    name: "陇南市"
                },
                {
                    value: 98369,
                    name: "西宁市"
                },
                {
                    value: 72108,
                    name: "海东市"
                },
                {
                    value: 105653,
                    name: "银川市"
                },
                {
                    value: 91602,
                    name: "石嘴山市"
                },
                {
                    value: 100167,
                    name: "吴忠市"
                },
                {
                    value: 110060,
                    name: "固原市"
                },
                {
                    value: 102042,
                    name: "中卫市"
                },
                {
                    value: 98907,
                    name: "乌鲁木齐市"
                },
                {
                    value: 129545,
                    name: "克拉玛依市"
                },
                {
                    value: 87678,
                    name: "吐鲁番市"
                },
                {
                    value: 92265,
                    name: "哈密市"
                }
            ]
        }
    ]
};

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
}