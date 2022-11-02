var houseChart = function(element)
{
    var myChart = echarts.init(element,'essos');

    // 指定图表的配置项和数据
    var option ={
  title: {
      text: "各城市商品房待售面积",
      subtext: "单位：万平方米",
      x: "center"
  },
  tooltip: {
      trigger: "item"
  },
  legend: {
      orient: "vertical",
      x: "left",
      y: "center",
    data: ["北京市", "天津市", "石家庄市", "唐山市", "秦皇岛市", "邯郸市", "邢台市", "保定市", "张家口市", "承德市", "沧州市", "廊坊市", "衡水市", "太原市", "大同市", "阳泉市", "长治市", "晋城市", "朔州市", "晋中市", "运城市", "忻州市", "临汾市", "吕梁市", "呼和浩特市", "包头市", "乌海市", "赤峰市", "通辽市", "鄂尔多斯市", "呼伦贝尔市", "巴彦淖尔市", "乌兰察布市", "沈阳市", "大连市", "鞍山市", "抚顺市", "本溪市", "丹东市", "锦州市", "营口市", "阜新市", "辽阳市", "盘锦市", "铁岭市", "朝阳市", "葫芦岛市", "长春市", "吉林市", "四平市", "辽源市", "通化市", "白山市", "松原市", "白城市", "哈尔滨市", "齐齐哈尔市", "鸡西市", "鹤岗市", "双鸭山市", "大庆市", "伊春市", "佳木斯市", "七台河市", "牡丹江市", "黑河市", "绥化市", "上海市", "南京市", "无锡市", "徐州市", "常州市", "苏州市", "南通市", "连云港市", "淮安市", "盐城市", "扬州市", "镇江市", "泰州市", "宿迁市", "杭州市", "宁波市", "温州市", "嘉兴市", "湖州市", "绍兴市", "金华市", "衢州市", "舟山市", "台州市", "丽水市", "合肥市", "芜湖市", "蚌埠市", "淮南市", "马鞍山市", "淮北市", "铜陵市", "安庆市", "黄山市", "滁州市", "阜阳市", "宿州市", "六安市", "亳州市", "池州市", "宣城市", "福州市", "厦门市", "莆田市", "三明市", "泉州市", "漳州市", "南平市", "龙岩市", "宁德市", "南昌市", "景德镇市", "萍乡市", "九江市", "新余市", "鹰潭市", "赣州市", "吉安市", "宜春市", "抚州市", "上饶市", "济南市", "青岛市", "淄博市", "枣庄市", "东营市", "烟台市", "潍坊市", "济宁市", "泰安市", "威海市", "日照市", "临沂市", "德州市", "聊城市", "滨州市", "菏泽市", "郑州市", "开封市", "洛阳市", "平顶山市", "安阳市", "鹤壁市", "新乡市", "焦作市", "濮阳市", "许昌市", "漯河市", "三门峡市", "南阳市", "商丘市", "信阳市", "周口市", "驻马店市", "武汉市", "黄石市", "十堰市", "宜昌市", "襄阳市", "鄂州市", "荆门市", "孝感市", "荆州市", "黄冈市", "咸宁市", "随州市", "长沙市", "株洲市", "湘潭市", "衡阳市", "邵阳市", "岳阳市", "常德市", "张家界市", "益阳市", "郴州市", "永州市", "怀化市", "娄底市", "广州市", "韶关市", "深圳市", "珠海市", "汕头市", "佛山市", "江门市", "湛江市", "茂名市", "肇庆市", "惠州市", "梅州市", "汕尾市", "河源市", "阳江市", "清远市", "东莞市", "中山市", "潮州市", "揭阳市", "云浮市", "南宁市", "柳州市", "桂林市", "梧州市", "北海市", "防城港市", "钦州市", "贵港市", "玉林市", "百色市", "贺州市", "河池市", "来宾市", "崇左市", "海口市", "三亚市", "儋州市", "重庆市", "成都市", "自贡市", "攀枝花市", "泸州市", "德阳市", "绵阳市", "广元市", "遂宁市", "内江市", "乐山市", "南充市", "眉山市", "宜宾市", "广安市", "达州市", "雅安市", "巴中市", "贵阳市", "六盘水市", "遵义市", "安顺市", "毕节市", "铜仁市", "昆明市", "曲靖市", "玉溪市", "保山市", "昭通市", "丽江市", "普洱市", "临沧市", "拉萨市", "日喀则市", "昌都市", "林芝市", "山南市", "西安市", "铜川市", "宝鸡市", "咸阳市", "渭南市", "延安市", "汉中市", "榆林市", "安康市", "商洛市", "兰州市", "嘉峪关市", "金昌市", "白银市", "天水市", "武威市", "张掖市", "平凉市", "酒泉市", "庆阳市", "定西市", "陇南市", "西宁市", "海东市", "银川市", "石嘴山市", "吴忠市", "固原市", "中卫市", "乌鲁木齐市", "克拉玛依市", "吐鲁番市", "哈密市"]
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
          name: "待售面积(万平方米)",
          type: "funnel",
          x: "15%",
          x2: "15%",
          y2: "10%",
          max: 2536,
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
                  value: 2454,
                  name: "北京市"
              },
              {
                  value: 824,
                  name: "天津市"
              },
              {
                  value: 121,
                  name: "石家庄市"
              },
              {
                  value: 123,
                  name: "唐山市"
              },
              {
                  value: 79,
                  name: "秦皇岛市"
              },
              {
                  value: 84,
                  name: "邯郸市"
              },
              {
                  value: 15,
                  name: "邢台市"
              },
              {
                  value: 63,
                  name: "保定市"
              },
              {
                  value: 164,
                  name: "张家口市"
              },
              {
                  value: 69,
                  name: "承德市"
              },
              {
                  value: 24,
                  name: "沧州市"
              },
              {
                  value: 113,
                  name: "廊坊市"
              },
              {
                  value: 51,
                  name: "衡水市"
              },
              {
                  value: 82,
                  name: "太原市"
              },
              {
                  value: 114,
                  name: "大同市"
              },
              {
                  value: 13,
                  name: "阳泉市"
              },
              {
                  value: 125,
                  name: "长治市"
              },
              {
                  value: 53,
                  name: "晋城市"
              },
              {
                  value: 54,
                  name: "朔州市"
              },
              {
                  value: 28,
                  name: "晋中市"
              },
              {
                  value: 70,
                  name: "运城市"
              },
              {
                  value: 93,
                  name: "忻州市"
              },
              {
                  value: 73,
                  name: "临汾市"
              },
              {
                  value: 82,
                  name: "吕梁市"
              },
              {
                  value: 190,
                  name: "呼和浩特市"
              },
              {
                  value: 56,
                  name: "包头市"
              },
              {
                  value: 27,
                  name: "乌海市"
              },
              {
                  value: 87,
                  name: "赤峰市"
              },
              {
                  value: 102,
                  name: "通辽市"
              },
              {
                  value: 144,
                  name: "鄂尔多斯市"
              },
              {
                  value: 121,
                  name: "呼伦贝尔市"
              },
              {
                  value: 51,
                  name: "巴彦淖尔市"
              },
              {
                  value: 65,
                  name: "乌兰察布市"
              },
              {
                  value: 396,
                  name: "沈阳市"
              },
              {
                  value: 545,
                  name: "大连市"
              },
              {
                  value: 268,
                  name: "鞍山市"
              },
              {
                  value: 137,
                  name: "抚顺市"
              },
              {
                  value: 80,
                  name: "本溪市"
              },
              {
                  value: 247,
                  name: "丹东市"
              },
              {
                  value: 151,
                  name: "锦州市"
              },
              {
                  value: 230,
                  name: "营口市"
              },
              {
                  value: 273,
                  name: "阜新市"
              },
              {
                  value: 61,
                  name: "辽阳市"
              },
              {
                  value: 131,
                  name: "盘锦市"
              },
              {
                  value: 162,
                  name: "铁岭市"
              },
              {
                  value: 107,
                  name: "朝阳市"
              },
              {
                  value: 114,
                  name: "葫芦岛市"
              },
              {
                  value: 568,
                  name: "长春市"
              },
              {
                  value: 81,
                  name: "吉林市"
              },
              {
                  value: 126,
                  name: "四平市"
              },
              {
                  value: 16,
                  name: "辽源市"
              },
              {
                  value: 91,
                  name: "通化市"
              },
              {
                  value: 57,
                  name: "白山市"
              },
              {
                  value: 87,
                  name: "松原市"
              },
              {
                  value: 14,
                  name: "白城市"
              },
              {
                  value: 630,
                  name: "哈尔滨市"
              },
              {
                  value: 169,
                  name: "齐齐哈尔市"
              },
              {
                  value: 82,
                  name: "鸡西市"
              },
              {
                  value: 19,
                  name: "鹤岗市"
              },
              {
                  value: 47,
                  name: "双鸭山市"
              },
              {
                  value: 141,
                  name: "大庆市"
              },
              {
                  value: 29,
                  name: "伊春市"
              },
              {
                  value: 89,
                  name: "佳木斯市"
              },
              {
                  value: 40,
                  name: "七台河市"
              },
              {
                  value: 202,
                  name: "牡丹江市"
              },
              {
                  value: 25,
                  name: "黑河市"
              },
              {
                  value: 115,
                  name: "绥化市"
              },
              {
                  value: 2536,
                  name: "上海市"
              },
              {
                  value: 237,
                  name: "南京市"
              },
              {
                  value: 562,
                  name: "无锡市"
              },
              {
                  value: 182,
                  name: "徐州市"
              },
              {
                  value: 413,
                  name: "常州市"
              },
              {
                  value: 832,
                  name: "苏州市"
              },
              {
                  value: 485,
                  name: "南通市"
              },
              {
                  value: 100,
                  name: "连云港市"
              },
              {
                  value: 144,
                  name: "淮安市"
              },
              {
                  value: 325,
                  name: "盐城市"
              },
              {
                  value: 254,
                  name: "扬州市"
              },
              {
                  value: 325,
                  name: "镇江市"
              },
              {
                  value: 234,
                  name: "泰州市"
              },
              {
                  value: 191,
                  name: "宿迁市"
              },
              {
                  value: 491,
                  name: "杭州市"
              },
              {
                  value: 410,
                  name: "宁波市"
              },
              {
                  value: 85,
                  name: "温州市"
              },
              {
                  value: 239,
                  name: "嘉兴市"
              },
              {
                  value: 179,
                  name: "湖州市"
              },
              {
                  value: 266,
                  name: "绍兴市"
              },
              {
                  value: 216,
                  name: "金华市"
              },
              {
                  value: 83,
                  name: "衢州市"
              },
              {
                  value: 65,
                  name: "舟山市"
              },
              {
                  value: 133,
                  name: "台州市"
              },
              {
                  value: 48,
                  name: "丽水市"
              },
              {
                  value: 274,
                  name: "合肥市"
              },
              {
                  value: 101,
                  name: "芜湖市"
              },
              {
                  value: 32,
                  name: "蚌埠市"
              },
              {
                  value: 45,
                  name: "淮南市"
              },
              {
                  value: 46,
                  name: "马鞍山市"
              },
              {
                  value: 36,
                  name: "淮北市"
              },
              {
                  value: 160,
                  name: "铜陵市"
              },
              {
                  value: 139,
                  name: "安庆市"
              },
              {
                  value: 104,
                  name: "黄山市"
              },
              {
                  value: 102,
                  name: "滁州市"
              },
              {
                  value: 50,
                  name: "阜阳市"
              },
              {
                  value: 86,
                  name: "宿州市"
              },
              {
                  value: 110,
                  name: "六安市"
              },
              {
                  value: 69,
                  name: "亳州市"
              },
              {
                  value: 94,
                  name: "池州市"
              },
              {
                  value: 94,
                  name: "宣城市"
              },
              {
                  value: 353,
                  name: "福州市"
              },
              {
                  value: 264,
                  name: "厦门市"
              },
              {
                  value: 172,
                  name: "莆田市"
              },
              {
                  value: 55,
                  name: "三明市"
              },
              {
                  value: 321,
                  name: "泉州市"
              },
              {
                  value: 305,
                  name: "漳州市"
              },
              {
                  value: 91,
                  name: "南平市"
              },
              {
                  value: 195,
                  name: "龙岩市"
              },
              {
                  value: 52,
                  name: "宁德市"
              },
              {
                  value: 132,
                  name: "南昌市"
              },
              {
                  value: 38,
                  name: "景德镇市"
              },
              {
                  value: 50,
                  name: "萍乡市"
              },
              {
                  value: 66,
                  name: "九江市"
              },
              {
                  value: 42,
                  name: "新余市"
              },
              {
                  value: 22,
                  name: "鹰潭市"
              },
              {
                  value: 99,
                  name: "赣州市"
              },
              {
                  value: 93,
                  name: "吉安市"
              },
              {
                  value: 67,
                  name: "宜春市"
              },
              {
                  value: 43,
                  name: "抚州市"
              },
              {
                  value: 151,
                  name: "上饶市"
              },
              {
                  value: 147,
                  name: "济南市"
              },
              {
                  value: 510,
                  name: "青岛市"
              },
              {
                  value: 72,
                  name: "淄博市"
              },
              {
                  value: 172,
                  name: "枣庄市"
              },
              {
                  value: 35,
                  name: "东营市"
              },
              {
                  value: 201,
                  name: "烟台市"
              },
              {
                  value: 294,
                  name: "潍坊市"
              },
              {
                  value: 141,
                  name: "济宁市"
              },
              {
                  value: 102,
                  name: "泰安市"
              },
              {
                  value: 220,
                  name: "威海市"
              },
              {
                  value: 53,
                  name: "日照市"
              },
              {
                  value: 187,
                  name: "临沂市"
              },
              {
                  value: 85,
                  name: "德州市"
              },
              {
                  value: 41,
                  name: "聊城市"
              },
              {
                  value: 80,
                  name: "滨州市"
              },
              {
                  value: 193,
                  name: "菏泽市"
              },
              {
                  value: 758,
                  name: "郑州市"
              },
              {
                  value: 45,
                  name: "开封市"
              },
              {
                  value: 121,
                  name: "洛阳市"
              },
              {
                  value: 169,
                  name: "平顶山市"
              },
              {
                  value: 37,
                  name: "安阳市"
              },
              {
                  value: 87,
                  name: "鹤壁市"
              },
              {
                  value: 82,
                  name: "新乡市"
              },
              {
                  value: 69,
                  name: "焦作市"
              },
              {
                  value: 32,
                  name: "濮阳市"
              },
              {
                  value: 52,
                  name: "许昌市"
              },
              {
                  value: 2,
                  name: "漯河市"
              },
              {
                  value: 51,
                  name: "三门峡市"
              },
              {
                  value: 116,
                  name: "南阳市"
              },
              {
                  value: 148,
                  name: "商丘市"
              },
              {
                  value: 308,
                  name: "信阳市"
              },
              {
                  value: 268,
                  name: "周口市"
              },
              {
                  value: 278,
                  name: "驻马店市"
              },
              {
                  value: 184,
                  name: "武汉市"
              },
              {
                  value: 36,
                  name: "黄石市"
              },
              {
                  value: 116,
                  name: "十堰市"
              },
              {
                  value: 44,
                  name: "宜昌市"
              },
              {
                  value: 44,
                  name: "襄阳市"
              },
              {
                  value: 16,
                  name: "鄂州市"
              },
              {
                  value: 169,
                  name: "荆门市"
              },
              {
                  value: 55,
                  name: "孝感市"
              },
              {
                  value: 91,
                  name: "荆州市"
              },
              {
                  value: 207,
                  name: "黄冈市"
              },
              {
                  value: 102,
                  name: "咸宁市"
              },
              {
                  value: 13,
                  name: "随州市"
              },
              {
                  value: 441,
                  name: "长沙市"
              },
              {
                  value: 87,
                  name: "株洲市"
              },
              {
                  value: 51,
                  name: "湘潭市"
              },
              {
                  value: 167,
                  name: "衡阳市"
              },
              {
                  value: 108,
                  name: "邵阳市"
              },
              {
                  value: 91,
                  name: "岳阳市"
              },
              {
                  value: 101,
                  name: "常德市"
              },
              {
                  value: 16,
                  name: "张家界市"
              },
              {
                  value: 38,
                  name: "益阳市"
              },
              {
                  value: 28.7,
                  name: "郴州市"
              },
              {
                  value: 992,
                  name: "永州市"
              },
              {
                  value: 75,
                  name: "怀化市"
              },
              {
                  value: 71,
                  name: "娄底市"
              },
              {
                  value: 977,
                  name: "广州市"
              },
              {
                  value: 203,
                  name: "韶关市"
              },
              {
                  value: 354,
                  name: "深圳市"
              },
              {
                  value: 304,
                  name: "珠海市"
              },
              {
                  value: 316,
                  name: "汕头市"
              },
              {
                  value: 325,
                  name: "佛山市"
              },
              {
                  value: 388,
                  name: "江门市"
              },
              {
                  value: 58,
                  name: "湛江市"
              },
              {
                  value: 120,
                  name: "茂名市"
              },
              {
                  value: 269,
                  name: "肇庆市"
              },
              {
                  value: 499,
                  name: "惠州市"
              },
              {
                  value: 200,
                  name: "梅州市"
              },
              {
                  value: 33,
                  name: "汕尾市"
              },
              {
                  value: 130,
                  name: "河源市"
              },
              {
                  value: 240,
                  name: "阳江市"
              },
              {
                  value: 407,
                  name: "清远市"
              },
              {
                  value: 301,
                  name: "东莞市"
              },
              {
                  value: 589,
                  name: "中山市"
              },
              {
                  value: 75,
                  name: "潮州市"
              },
              {
                  value: 81,
                  name: "揭阳市"
              },
              {
                  value: 108,
                  name: "云浮市"
              },
              {
                  value: 231,
                  name: "南宁市"
              },
              {
                  value: 64,
                  name: "柳州市"
              },
              {
                  value: 150,
                  name: "桂林市"
              },
              {
                  value: 63,
                  name: "梧州市"
              },
              {
                  value: 129,
                  name: "北海市"
              },
              {
                  value: 34,
                  name: "防城港市"
              },
              {
                  value: 108,
                  name: "钦州市"
              },
              {
                  value: 110,
                  name: "贵港市"
              },
              {
                  value: 91,
                  name: "玉林市"
              },
              {
                  value: 77,
                  name: "百色市"
              },
              {
                  value: 24,
                  name: "贺州市"
              },
              {
                  value: 46,
                  name: "河池市"
              },
              {
                  value: 118,
                  name: "来宾市"
              },
              {
                  value: 37,
                  name: "崇左市"
              },
              {
                  value: 149,
                  name: "海口市"
              },
              {
                  value: 46,
                  name: "三亚市"
              },
              {
                  value: 38,
                  name: "儋州市"
              },
              {
                  value: 2082,
                  name: "重庆市"
              },
              {
                  value: 1059,
                  name: "成都市"
              },
              {
                  value: 42,
                  name: "自贡市"
              },
              {
                  value: 63,
                  name: "攀枝花市"
              },
              {
                  value: 77,
                  name: "泸州市"
              },
              {
                  value: 109,
                  name: "德阳市"
              },
              {
                  value: 103,
                  name: "绵阳市"
              },
              {
                  value: 79,
                  name: "广元市"
              },
              {
                  value: 81,
                  name: "遂宁市"
              },
              {
                  value: 20,
                  name: "内江市"
              },
              {
                  value: 29,
                  name: "乐山市"
              },
              {
                  value: 74,
                  name: "南充市"
              },
              {
                  value: 150,
                  name: "眉山市"
              },
              {
                  value: 101,
                  name: "宜宾市"
              },
              {
                  value: 22,
                  name: "广安市"
              },
              {
                  value: 14,
                  name: "达州市"
              },
              {
                  value: 47,
                  name: "雅安市"
              },
              {
                  value: 64,
                  name: "巴中市"
              },
              {
                  value: 108,
                  name: "贵阳市"
              },
              {
                  value: 35,
                  name: "六盘水市"
              },
              {
                  value: 178,
                  name: "遵义市"
              },
              {
                  value: 29,
                  name: "安顺市"
              },
              {
                  value: 36,
                  name: "毕节市"
              },
              {
                  value: 53,
                  name: "铜仁市"
              },
              {
                  value: 402,
                  name: "昆明市"
              },
              {
                  value: 44,
                  name: "曲靖市"
              },
              {
                  value: 211,
                  name: "玉溪市"
              },
              {
                  value: 55,
                  name: "保山市"
              },
              {
                  value: 61,
                  name: "昭通市"
              },
              {
                  value: 25,
                  name: "丽江市"
              },
              {
                  value: 44,
                  name: "普洱市"
              },
              {
                  value: 23,
                  name: "临沧市"
              },
              {
                  value: 21,
                  name: "拉萨市"
              },
              {
                  value: 2,
                  name: "日喀则市"
              },
              {
                  value: 2,
                  name: "昌都市"
              },
              {
                  value: 7,
                  name: "林芝市"
              },
              {
                  value: 1,
                  name: "山南市"
              },
              {
                  value: 150,
                  name: "西安市"
              },
              {
                  value: 37,
                  name: "铜川市"
              },
              {
                  value: 29,
                  name: "宝鸡市"
              },
              {
                  value: 12,
                  name: "咸阳市"
              },
              {
                  value: 64,
                  name: "渭南市"
              },
              {
                  value: 65,
                  name: "延安市"
              },
              {
                  value: 104,
                  name: "汉中市"
              },
              {
                  value: 95,
                  name: "榆林市"
              },
              {
                  value: 23,
                  name: "安康市"
              },
              {
                  value: 9,
                  name: "商洛市"
              },
              {
                  value: 92,
                  name: "兰州市"
              },
              {
                  value: 33,
                  name: "嘉峪关市"
              },
              {
                  value: 29,
                  name: "金昌市"
              },
              {
                  value: 82,
                  name: "白银市"
              },
              {
                  value: 16,
                  name: "天水市"
              },
              {
                  value: 22,
                  name: "武威市"
              },
              {
                  value: 115,
                  name: "张掖市"
              },
              {
                  value: 13,
                  name: "平凉市"
              },
              {
                  value: 89,
                  name: "酒泉市"
              },
              {
                  value: 13,
                  name: "庆阳市"
              },
              {
                  value: 66,
                  name: "定西市"
              },
              {
                  value: 6,
                  name: "陇南市"
              },
              {
                  value: 41,
                  name: "西宁市"
              },
              {
                  value: 74,
                  name: "海东市"
              },
              {
                  value: 636,
                  name: "银川市"
              },
              {
                  value: 51,
                  name: "石嘴山市"
              },
              {
                  value: 130,
                  name: "吴忠市"
              },
              {
                  value: 72,
                  name: "固原市"
              },
              {
                  value: 104,
                  name: "中卫市"
              },
              {
                  value: 385,
                  name: "乌鲁木齐市"
              },
              {
                  value: 10,
                  name: "克拉玛依市"
              },
              {
                  value: 21,
                  name: "吐鲁番市"
              },
              {
                  value: 53,
                  name: "哈密市"
              }
          ]
      }
  ]
};

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}