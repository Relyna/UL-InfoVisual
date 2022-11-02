var onCityModeChange = function(obj) {
    var citySelector = document.getElementById("citySelector");
    if (obj.value == "all") {
        citySelector.style.display = "none";
    } else {
        citySelector.style.display = "block";
    }
}

var generateCity = function(province, city) {
    var frag = document.createDocumentFragment();
    // 4.遍历数据
    for (var i = 0; i < data.length; i++) {
        var option = document.createElement("option");
        option.innerHTML = data[i].name;
        option.value = data[i].code;
        frag.appendChild(option);
    }
    // 5.添加到省级下拉框中
    province.appendChild(frag);

    // 1.创建一个数组，用于存放市级数据
    var cityArr = []
    // 2.给省级下拉框绑定事件,onchang(当省级数据变化时，触发该事件)
    province.onchange = function () {
        //清空市级与区级中的数据，防止重复
        city.innerHTML = "<option value=\"\">请选择城市</option>"
        // 3.遍历数据，将遍历的数据与当前的省作比较，将相对应的市级数据存放到数组中
        for (var i = 0; i < data.length; i++) {
            if (data[i].code == this.value) {
                cityArr = data[i].children;
                break;
            }
        }
        // 4.遍历市级数据
        for (var j = 0; j < cityArr.length; j++) {
            var option = document.createElement("option");
            option.innerHTML = cityArr[j].name;
            option.value = cityArr[j].code;
            frag.appendChild(option);
        }
        city.appendChild(frag);
    }
}

var properties = [];

var generate = function() {
    clearCharts();
    var chartBox = document.getElementById("middleColumn");
    if (getMode() == "all") {
        properties = getSelectedProperties();
        if (properties.length > 0)
            drawChart(properties[0], chartBox);
    } else {
        properties = [];
        drawChart("compare",chartBox);
    }
}

var drawNext = function() {
    var chartBox = document.getElementById("middleColumn");
    if (properties.length > 1) {
        properties.shift();
        drawChart(properties[0], chartBox);
    }
}

var clearCharts = function() {
    var chartBox = document.getElementById("middleColumn");
    while (chartBox.firstChild) {
        chartBox.removeChild(chartBox.firstChild);
    }
    chartBox.style.transform = "translate(0px, 0px)";
}

var getSelectedProperties = function() {
    var list = document.getElementById("properties-list");
    var properties = [];
    for (var i = 0; i < list.children.length; i++) {
        var checkbox = list.children[i].getElementsByTagName("input")[0];
        if (checkbox.checked) {
            properties.push(checkbox.id);
        }
    }
    return properties;
}

var getMode = function() {
    var mode = document.getElementById("modeSelector");
    return mode.value;
}

var newChart = function(id) {
    return `<div class="chart-box"><div id="${id}" class="chart-container"></div></div><br>`;
}

var drawChart = function(property, chartBox) {
    clearCharts();
    chartBox.innerHTML += newChart(property + "Chart");
    var chart = document.getElementById(property + "Chart");
    switch (property) {
        case "cityroads":
            cityroadsChart(chart);
            break;
        case "enterprise":
            enterpriseChart(chart);
            break;
        case "population":
            populationChart(chart);
            break;
        case "gdp":
            gdpChart(chart);
            break;
        case "greening":
            greeningChart(chart);
            break;
        case "hospital":
            hospitalChart(chart);
            break;
        case "school":
            schoolChart(chart);
            break;
        case "house":
            houseChart(chart);
            break;
        case "salary":
            salaryChart(chart);
            break;
        case "compare":
            compareChart(chart);
            break;
        default:
            alert("未找到" + property + "对应的图表");
            break;
    }
}