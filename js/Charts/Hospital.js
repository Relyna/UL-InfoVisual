var hospitalChart = function(element)
{
    var myChart = echarts.init(element,'essos');
    var starPath = 'path://M527.57504 71.91552 24.38144 417.75616 24.38144 512l94.24384 0 0 440.0896 786.75456 0L905.37984 512l94.23872 0L999.61856 417.75616 527.57504 71.91552zM752.3072 660.17792l-174.67392 0 0 174.67392L446.05952 834.85184l0-174.67392L272.52224 660.17792l0-130.432 174.67392 0L447.19616 355.07712l130.43712 0 0 174.67392 174.67392 0L752.3072 660.17792z';
    // 指定图表的配置项和数据
    var option ={
  title: {
      text: "各城市医院数量",
  },
  tooltip: {
      trigger: "axis"
  },
  legend: {
      data: ["医院数"]
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
          type: "category",
          
          data: ["北京市", "天津市", "石家庄市", "唐山市", "秦皇岛市", "邯郸市", "邢台市", "保定市", "张家口市", "承德市", "沧州市", "廊坊市", "衡水市", "太原市", "大同市", "阳泉市", "长治市", "晋城市", "朔州市", "晋中市", "运城市", "忻州市", "临汾市", "吕梁市", "呼和浩特市", "包头市", "乌海市", "赤峰市", "通辽市", "鄂尔多斯市", "呼伦贝尔市", "巴彦淖尔市", "乌兰察布市", "沈阳市", "大连市", "鞍山市", "抚顺市", "本溪市", "丹东市", "锦州市", "营口市", "阜新市", "辽阳市", "盘锦市", "铁岭市", "朝阳市", "葫芦岛市", "长春市", "吉林市", "四平市", "辽源市", "通化市", "白山市", "松原市", "白城市", "哈尔滨市", "齐齐哈尔市", "鸡西市", "鹤岗市", "双鸭山市", "大庆市", "伊春市", "佳木斯市", "七台河市", "牡丹江市", "黑河市", "绥化市", "上海市", "南京市", "无锡市", "徐州市", "常州市", "苏州市", "南通市", "连云港市", "淮安市", "盐城市", "扬州市", "镇江市", "泰州市", "宿迁市", "杭州市", "宁波市", "温州市", "嘉兴市", "湖州市", "绍兴市", "金华市", "衢州市", "舟山市", "台州市", "丽水市", "合肥市", "芜湖市", "蚌埠市", "淮南市", "马鞍山市", "淮北市", "铜陵市", "安庆市", "黄山市", "滁州市", "阜阳市", "宿州市", "六安市", "亳州市", "池州市", "宣城市", "福州市", "厦门市", "莆田市", "三明市", "泉州市", "漳州市", "南平市", "龙岩市", "宁德市", "南昌市", "景德镇市", "萍乡市", "九江市", "新余市", "鹰潭市", "赣州市", "吉安市", "宜春市", "抚州市", "上饶市", "济南市", "青岛市", "淄博市", "枣庄市", "东营市", "烟台市", "潍坊市", "济宁市", "泰安市", "威海市", "日照市", "临沂市", "德州市", "聊城市", "滨州市", "菏泽市", "郑州市", "开封市", "洛阳市", "平顶山市", "安阳市", "鹤壁市", "新乡市", "焦作市", "濮阳市", "许昌市", "漯河市", "三门峡市", "南阳市", "商丘市", "信阳市", "周口市", "驻马店市", "武汉市", "黄石市", "十堰市", "宜昌市", "襄阳市", "鄂州市", "荆门市", "孝感市", "荆州市", "黄冈市", "咸宁市", "随州市", "长沙市", "株洲市", "湘潭市", "衡阳市", "邵阳市", "岳阳市", "常德市", "张家界市", "益阳市", "郴州市", "永州市", "怀化市", "娄底市", "广州市", "韶关市", "深圳市", "珠海市", "汕头市", "佛山市", "江门市", "湛江市", "茂名市", "肇庆市", "惠州市", "梅州市", "汕尾市", "河源市", "阳江市", "清远市", "东莞市", "中山市", "潮州市", "揭阳市", "云浮市", "南宁市", "柳州市", "桂林市", "梧州市", "北海市", "防城港市", "钦州市", "贵港市", "玉林市", "百色市", "贺州市", "河池市", "来宾市", "崇左市", "海口市", "三亚市", "三沙市", "儋州市", "重庆市", "成都市", "自贡市", "攀枝花市", "泸州市", "德阳市", "绵阳市", "广元市", "遂宁市", "内江市", "乐山市", "南充市", "眉山市", "宜宾市", "广安市", "达州市", "雅安市", "巴中市", "资阳市", "贵阳市", "六盘水市", "遵义市", "安顺市", "毕节市", "铜仁市", "昆明市", "曲靖市", "玉溪市", "保山市", "昭通市", "丽江市", "普洱市", "临沧市", "拉萨市", "日喀则市", "昌都市", "林芝市", "山南市", "那曲市", "西安市", "铜川市", "宝鸡市", "咸阳市", "渭南市", "延安市", "汉中市", "榆林市", "安康市", "商洛市", "兰州市", "嘉峪关市", "金昌市", "白银市", "天水市", "武威市", "张掖市", "平凉市", "酒泉市", "庆阳市", "定西市", "陇南市", "西宁市", "海东市", "银川市", "石嘴山市", "吴忠市", "固原市", "中卫市", "乌鲁木齐市", "克拉玛依市", "吐鲁番市", "哈密市"]
      }
  ],
  yAxis: [
      {
          type: "value"
      }
  ],
  dataZoom: [
  {
    type: 'inside',
    start: 0,
    end: 10
  },
  {
    start: 0,
    end: 10
  }
],
  series: [
      {
          name: "医院数",
          type: "pictorialBar",
          symbol:starPath,
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
          data: [733, 423, 328, 209, 66, 272, 196, 434, 130, 93, 186, 182, 148, 164, 132, 48, 103, 94, 82, 101, 275, 113, 195, 108, 102, 102, 25, 101, 79, 96, 203, 54, 57, 283, 210, 101, 51, 41, 53, 76, 122, 50, 56, 55, 64, 102, 94, 229, 172, 64, 40, 68, 41, 84, 46, 324, 135, 66, 42, 55, 118, 39, 98, 25, 83, 58, 66, 398, 271, 210, 177, 86, 234, 227, 90, 67, 167, 91, 53, 91, 235, 353, 195, 150, 94, 72, 96, 149, 91, 35, 135, 59, 212, 101, 106, 88, 68, 83, 31, 91, 33, 78, 137, 111, 55, 94, 39, 61, 139, 62, 60, 59, 128, 91, 49, 48, 51, 136, 30, 31, 62, 20, 27, 124, 73, 89, 96, 170, 284, 460, 154, 82, 70, 186, 232, 218, 108, 69, 61, 221, 120, 142, 99, 237, 282, 94, 167, 92, 100, 59, 165, 94, 59, 110, 64, 65, 437, 89, 118, 211, 216, 362, 51, 63, 94, 90, 23, 59, 69, 69, 86, 40, 40, 241, 112, 72, 169, 139, 125, 108, 32, 103, 119, 140, 104, 116, 289, 54, 145, 42, 56, 131, 53, 121, 76, 58, 81, 48, 43, 65, 61, 64, 112, 68, 35, 71, 27, 148, 70, 82, 44, 27, 16, 37, 69, 59, 44, 33, 45, 27, 29, 83, 34, 1, 22, 859, 630, 68, 27, 150, 85, 126, 85, 76, 76, 101, 173, 88, 141, 252, 438, 46, 78, 54, 193, 123, 209, 76, 296, 115, 322, 135, 65, 61, 167, 40, 69, 56, 27, 32, 32, 69, 18, 25, 359, 41, 94, 155, 180, 68, 91, 108, 53, 59, 116, 8, 16, 95, 116, 48, 45, 50, 40, 45, 55, 61, 73, 55, 78, 36, 46, 105, 27, 144, 21, 20, 57]
          ,animationDelay: function (idx) {
          return idx * 10;
      }
      }
  ],animationEasing: 'elasticOut',
  animationDelayUpdate: function (idx) {
      return idx * 5;
  }
};

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}