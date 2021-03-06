var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var app = {};
option = null;
var data = [
    [0, 10000, 6785.71],
    [0, 10000, 6825],
    [0, 6500, 4463.33],
    [0, 5600, 3793.83],
    [0, 4000, 3060],
    [0, 4000, 3222.33],
    [0, 4000, 3133.33]
];
var cities = ['扶贫', '农业生产发展', '就业补贴', '医疗补助', '退耕还林还草', '林业和草原', '水利'];
var barHeight = 50;

option = {
    title: {
        text: '惠民惠农财政补贴项目',
        subtext: '按项目大类统计资金分配情况'
    },
    legend: {
        show: true,
        data: ['金额范围', '均值']
    },
    grid: {
        top: 100
    },
    angleAxis: {
        type: 'category',
        data: cities
    },
    tooltip: {
        show: true,
        formatter: function (params) {
            var id = params.dataIndex;
            return cities[id] + '<br>最低：' + data[id][0] + '<br>最高：' + data[id][1] + '<br>平均：' + data[id][2];
        }
    },
    radiusAxis: {
    },
    polar: {
    },
    series: [{
        type: 'bar',
        itemStyle: {
            color: 'transparent'
        },
        data: data.map(function (d) {
            return d[0];
        }),
        coordinateSystem: 'polar',
        stack: '最大最小值',
        silent: true
    }, {
        type: 'bar',
        data: data.map(function (d) {
            return d[1] - d[0];
        }),
        coordinateSystem: 'polar',
        name: '金额范围',
        stack: '最大最小值'
    }, {
        type: 'bar',
        itemStyle: {
            color: 'transparent'
        },
        data: data.map(function (d) {
            return d[2] - barHeight;
        }),
        coordinateSystem: 'polar',
        stack: '均值',
        silent: true,
        z: 10
    }, {
        type: 'bar',
        data: data.map(function (d) {
            return barHeight * 2;
        }),
        coordinateSystem: 'polar',
        name: '均值',
        stack: '均值',
        barGap: '-100%',
        z: 10
    }]
};

        // option = option2
        // option = JSON.parse(data);
        // if (option && typeof option === "object") {
        //     myChart.setOption(option, true);
        // }
option3 = {
    "angleAxis": {
        "type": "category",
        "data": [
            "扶贫",
            "农业生产发展",
            "就业补贴",
            "医疗补助",
            "退耕还林还草",
            "林业和草原",
            "水利"
        ]
    },
    "radiusAxis": {},
    "title": {
        "text": "惠民惠农财政补贴项目",
        "subtext": "按项目大类统计资金分配情况"
    },
    "tooltip": {
        "show": true
    },
    "legend": {
        "show": true,
        "data": [
            "金额范围",
            "均值"
        ]
    },
    "grid": {
        "top": 100
    },
    "series": [
        {
            "type": "bar",
            "itemStyle": {
                "color": "transparent"
            },
            "data": [
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            "coordinateSystem": "polar",
            "stack": "最大最小值",
            "silent": true
        },
        {
            "type": "bar",
            "data": [
                10000,
                10000,
                6500,
                5600,
                4000,
                4000,
                4000
            ],
            "coordinateSystem": "polar",
            "name": "金额范围",
            "stack": "最大最小值"
        },
        {
            "type": "bar",
            "itemStyle": {
                "color": "transparent"
            },
            "data": [
                6735.71,
                6775,
                4413.33,
                3743.83,
                3010,
                3172.33,
                3083.33
            ],
            "coordinateSystem": "polar",
            "stack": "均值",
            "silent": true,
            "z": 10
        },
        {
            "type": "bar",
            "data": [
                100,
                100,
                100,
                100,
                100,
                100,
                100
            ],
            "coordinateSystem": "polar",
            "name": "均值",
            "stack": "均值",
            "barGap": "-100%",
            "z": 10
        }
    ],
    "polar": {}
}

// 后太生成数据
option4 = {
    "title": {
        "text": "惠民惠农财政补贴项目controller",
        "subtext": "按项目大类统计资金分配情况xxxx"
    },
    "legend": {
        "data": [
            "金额范围",
            "均值"
        ],
        "show": true
    },
    "grid": {
        "top": 100
    },
    "angleAxis": {
        "category": "category",
        "data": [
            "扶贫",
            "农业生产发展",
            "就业补贴",
            "医疗补助",
            "退耕还林还草",
            "林业和草原xxx",
            "水利"
        ]
    },
    "tooltip": {
        "formatter": "{a} <br/>{b} : {c}",
        "show": true
    },
    "radiusAxis": {},
    "polar": [],
    "series": [
        {
            "name": "均值",
            "type": "bar",
            "stack": "最大最小值",
            "itemStyle": {
                "normal": {
                    "color": "transparent"
                }
            },
            "z": 10,
            "coordinateSystem": "polar",
            "data": [
                10000,
                10000,
                6500,
                5600,
                4000,
                4000,
                4000
            ]
        },
        {
            "name": "均值",
            "type": "bar",
            "stack": "最大最小值",
            "itemStyle": {
                "normal": {
                    "color": "transparent"
                }
            },
            "z": 10,
            "coordinateSystem": "polar",
            "data": [
                11000,
                11000,
                7500,
                6600,
                5000,
                5000,
                5000
            ]
        },
        {
            "name": "均值",
            "type": "bar",
            "stack": "最大最小值",
            "itemStyle": {
                "normal": {
                    "color": "transparent"
                }
            },
            "z": 10,
            "coordinateSystem": "polar",
            "data": [
                12000,
                12000,
                8500,
                7600,
                6000,
                6000,
                6000
            ]
        },
        {
            "name": "均值",
            "type": "bar",
            "stack": "最大最小值",
            "itemStyle": {
                "normal": {
                    "color": "transparent"
                }
            },
            "z": 10,
            "coordinateSystem": "polar",
            "data": [
                13000,
                13000,
                9500,
                8600,
                7000,
                7000,
                7000
            ]
        },
        {
            "name": "均值",
            "type": "bar",
            "stack": "最大最小值",
            "itemStyle": {
                "normal": {
                    "color": "transparent"
                }
            },
            "z": 10,
            "coordinateSystem": "polar",
            "data": [
                14000,
                14000,
                10500,
                9600,
                8000,
                8000,
                8000
            ]
        },
        {
            "name": "均值",
            "type": "bar",
            "stack": "最大最小值",
            "itemStyle": {
                "normal": {
                    "color": "transparent"
                }
            },
            "z": 10,
            "coordinateSystem": "polar",
            "data": [
                15000,
                15000,
                11500,
                10600,
                9000,
                9000,
                9000
            ]
        },
        {
            "name": "均值",
            "type": "bar",
            "stack": "最大最小值",
            "itemStyle": {
                "normal": {
                    "color": "transparent"
                }
            },
            "z": 10,
            "coordinateSystem": "polar",
            "data": [
                16000,
                16000,
                12500,
                11600,
                10000,
                10000,
                10000
            ]
        }
    ]
}

option5={
    "title": {
        "text": "惠民惠农财政补贴项目controller",
        "subtext": "按项目大类统计资金分配情况xxxx"
    },
    "legend": {
        "data": [
            "金额范围",
            "均值"
        ],
        "show": true
    },
    "grid": {
        "top": 100
    },
    "angleAxis": {
        "category": "category",
        "data": [
            "扶贫",
            "农业生产发展",
            "就业补贴",
            "医疗补助",
            "退耕还林还草",
            "林业和草原xxx",
            "水利"
        ]
    },
    "tooltip": {
        "formatter": "{a} <br/>{b} : {c}",
        "show": true
    },
    "radiusAxis": {},
    "polar": [],
    "series": [
        {
            "name": "均值",
            "type": "bar",
            "stack": "最大最小值",
            "itemStyle": {
                "normal": {
                    "color": "transparent"
                }
            },
            "z": 10,
            "coordinateSystem": "polar",
            "data": [
                10000,
                10000,
                6500,
                5600,
                4000,
                4000,
                4000
            ]
        },
        {
            "name": "均值",
            "type": "bar",
            "stack": "最大最小值",
            "itemStyle": {
                "normal": {
                    "color": "transparent"
                }
            },
            "z": 10,
            "coordinateSystem": "polar",
            "data": [
                11000,
                11000,
                7500,
                6600,
                5000,
                5000,
                5000
            ]
        },
        {
            "name": "均值",
            "type": "bar",
            "stack": "最大最小值",
            "itemStyle": {
                "normal": {
                    "color": "transparent"
                }
            },
            "z": 10,
            "coordinateSystem": "polar",
            "data": [
                12000,
                12000,
                8500,
                7600,
                6000,
                6000,
                6000
            ]
        },
        {
            "name": "均值",
            "type": "bar",
            "stack": "最大最小值",
            "itemStyle": {
                "normal": {
                    "color": "transparent"
                }
            },
            "z": 10,
            "coordinateSystem": "polar",
            "data": [
                13000,
                13000,
                9500,
                8600,
                7000,
                7000,
                7000
            ]
        },
        {
            "name": "均值",
            "type": "bar",
            "stack": "最大最小值",
            "itemStyle": {
                "normal": {
                    "color": "transparent"
                }
            },
            "z": 10,
            "coordinateSystem": "polar",
            "data": [
                14000,
                14000,
                10500,
                9600,
                8000,
                8000,
                8000
            ]
        },
        {
            "name": "均值",
            "type": "bar",
            "stack": "最大最小值",
            "itemStyle": {
                "normal": {
                    "color": "transparent"
                }
            },
            "z": 10,
            "coordinateSystem": "polar",
            "data": [
                15000,
                15000,
                11500,
                10600,
                9000,
                9000,
                9000
            ]
        },
        {
            "name": "均值",
            "type": "bar",
            "stack": "最大最小值",
            "itemStyle": {
                "normal": {
                    "color": "transparent"
                }
            },
            "z": 10,
            "coordinateSystem": "polar",
            "data": [
                16000,
                16000,
                12500,
                11600,
                10000,
                10000,
                10000
            ]
        }
    ]
}
$.ajax({
    url: "http://127.0.0.1:8080/project1",
    type: 'get',
    cache: false,
    dataType: 'json',
    //data:para,
    success: function (data) {
        // console.log(data);
        // console.log($.extend($.extend({}, data), option));
        // console.log($.extend($.extend({}, option), data));
        // option = $.extend(data, option);
        // option=data;
        option = option4;
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
    },
    error: function () {
        // toastr.error('操作失败!');
    }
});
//
