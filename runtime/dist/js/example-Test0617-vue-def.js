(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["example-Test0617-vue-def"],{"3dfd":function(e,t){throw new Error('Module parse failed: Unexpected token (1:12)\nYou may need an appropriate loader to handle this file type.\n> {"structure":{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","layout":[20,40,40],"rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","def":{"defheight":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"href":"v2-layout-colctn","component":"v2-layout-colctn","children":[null,{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"col","layout":[33,33,33],"rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","def":{"defheight":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"href":"v2-layout-rowctn","component":"v2-layout-rowctn","children":[{"style":{"chartWarpStyle":{"background-color":"","margin":"","padding":"","height":"400px","width":"550px"}},"configs":"e1Config","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","href":"v2-component-echart","component":"v2-component-echart","children":[],"events":{},"id":1560751404343,"pid":1560751375661},{"style":{"chartWarpStyle":{"background-color":"","margin":"","padding":"","height":"400px","width":"550px"}},"configs":"e2Config","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","href":"v2-component-echart","component":"v2-component-echart","children":[],"events":{},"id":1560751458361,"pid":1560751375661},null],"events":{},"id":1560751375661,"pid":1560751335260},{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"col","layout":[33,33,33],"rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","def":{"defheight":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"href":"v2-layout-rowctn","component":"v2-layout-rowctn","children":[null,null,null],"events":{},"id":1560751383614,"pid":1560751335260}],"events":{},"id":1560751335260,"pid":"root"}],"events":{}},"logic":{"methods":{},"watch":{},"beforeCreate":{"labelObj":{"view":[],"output":[]},"code":"","upCode":[],"downCode":[]},"created":{"labelObj":{"view":[],"output":[]},"code":"","upCode":[],"downCode":[]},"beforeMount":{"labelObj":{"view":[],"output":[]},"code":"","upCode":[],"downCode":[]},"mounted":{"labelObj":{"view":[],"output":[]},"code":"","upCode":[],"downCode":[]},"beforeUpdate":{"labelObj":{"view":[],"output":[]},"code":"","upCode":[],"downCode":[]},"updated":{"labelObj":{"view":[],"output":[]},"code":"","upCode":[],"downCode":[]},"beforeDestroy":{"labelObj":{"view":[],"output":[]},"code":"","upCode":[],"downCode":[]},"destroyed":{"labelObj":{"view":[],"output":[]},"code":"","upCode":[],"downCode":[]},"pollList":[{"labelObj":{"view":[{"index":1,"name":"t1","desp":"t1","type":"parm","value":[{"option":{"name":"diy","desp":"自定义代码","mode":"custom","input":[{"type":"Value","value":"pipe.get(\'/v1/ds/excel/poll\').then(function (response) {\\nif (response.data.status) {\\nreturn response.data.content.content;\\n}\\nthrow response.data.errorMsg;\\n})\\n\\n"},{"type":"Value","value":"this.value2"}]},"children":[{"id":1,"option":{"type":"Value","value":"pipe.get(\'/v1/ds/excel/poll\',{\\n    number:9\\n})\\n.then(function (response) {\\nif (response.data.status) {\\nreturn response.data.content.content;\\n}\\nthrow response.data.errorMsg;\\n})\\n\\n"}},{"id":2,"option":{"type":"Value","value":"this.value2"}}],"mode":"custom","id":3}],"note":"//表一数据"},{"index":2,"name":"t2","desp":"t2","type":"parm","value":[{"option":{"name":"diy","desp":"自定义代码","mode":"custom","input":[{"type":"Value","value":"pipe.get(\'/v1/ds/excel/poll\',{\\n    number:9,\\n    max:500,\\n    min:100\\n })\\n.then(function (response) {\\nif (response.data.status) {\\nreturn response.data.content.content;\\n}\\nthrow response.data.errorMsg;\\n})\\n"},{"type":"Value","value":"this.value2"}]},"children":[{"id":1,"option":{"type":"Value","value":"pipe.get(\'/v1/ds/excel/poll\',{\\n    number:9,\\n    max:500,\\n    min:100\\n })\\n.then(function (response) {\\nif (response.data.status) {\\nreturn response.data.content.content;\\n}\\nthrow response.data.errorMsg;\\n})\\n"}},{"id":2,"option":{"type":"Value","value":"this.value2"}}],"mode":"custom","id":3}],"note":"//表二数据"},{"index":3,"name":"t3","desp":"t3","type":"parm","value":[{"option":{"name":"diy","desp":"自定义代码","mode":"custom","input":[{"type":"Value","value":"new Promise(resolve=>{  \\nthis.e1Config.series[0].data = t1;\\nthis.e2Config.series[0].data.map((item,index)=>{\\nitem.value=t2[index];\\n}) ;\\n$(\'#1560751404343\')[0].__vue__.chart.setOption(this.e1Config,true);\\n$(\'#1560751458361\')[0].__vue__.chart.setOption(this.e2Config,true)\\n })\\n"},{"type":"Value","value":"this.value2"}]},"children":[{"id":1,"option":{"type":"Value","value":"new Promise(resolve=>{  \\nthis.e1Config.series[0].data = t1;\\nthis.e2Config.series[0].data.map((item,index)=>{\\nitem.value=t2[index];\\n}) ;\\n$(\'#1560751404343\')[0].__vue__.chart.setOption(this.e1Config,true);\\n$(\'#1560751458361\')[0].__vue__.chart.setOption(this.e2Config,true)\\n })\\n"}},{"id":2,"option":{"type":"Value","value":"this.value2"}}],"mode":"custom","id":3}],"note":"//图表一重绘"}],"output":[]},"code":"","desp":"动态数据","freq":10,"index":1}]},"dataBasket":{"data":{"e1Config":"{\\r\\n   title : {\\r\\n        text: \'各条线服务得分\',\\r\\n        subtext: \'单位：分\'\\r\\n    },\\r\\n    legend: {\\r\\n        data:[\'得分\']\\r\\n    },\\r\\n    tooltip: {\\r\\n        trigger: \'axis\'\\r\\n    },\\r\\n    toolbox: {\\r\\n        show: true,\\r\\n        feature: {\\r\\n            magicType: {type: [\'line\', \'bar\']},\\r\\n        }\\r\\n    },\\r\\n    xAxis : [\\r\\n        {\\r\\n            type : \'category\',\\r\\n            data : [\'零售\',\'投行\',\'自营\',\'资产\',\'研发\',\'机构\',\'风控\',\'合规\',\'稽查\']\\r\\n        }\\r\\n    ],\\r\\n    yAxis : [\\r\\n        {\\r\\n            type : \'value\',\\r\\n            min:0,\\r\\n            max:100\\r\\n        }\\r\\n    ],\\r\\n    series : [\\r\\n        {\\r\\n            name:\'得分\',\\r\\n            type:\'bar\',\\r\\n            data:[0,0,0,0,0,0,0,0,0],\\r\\n            itemStyle:{\\r\\n                normal: {\\r\\n                    color: function (params) {\\r\\n                        return \'rgb(0, 0, 255)\';\\r\\n                    },\\r\\n                    label:{\\r\\n                        show:true,\\r\\n                        position:\'top\',\\r\\n                        textStyle:{\\r\\n                            color:\'blue\',\\r\\n                            fontSize:16\\r\\n                        }\\r\\n                    }\\r\\n                }\\r\\n            },\\r\\n            markLine : {\\r\\n                data : [\\r\\n                    {type : \'average\', name: \'平均值\'}\\r\\n                ]\\r\\n            }\\r\\n        }\\r\\n    ] \\r\\n}","e2Config":"{\\r\\n    title:{\\r\\n        text:\'各条线成本占比\',\\r\\n        subtext: \'单位：%\'\\r\\n    },\\r\\n   tooltip : {\\r\\n        trigger: \'item\',\\r\\n        formatter: \\"{b}:({d}%)\\"\\r\\n    },\\r\\n    calculable : false,\\r\\n    series : [\\r\\n        {\\r\\n            type:\'pie\',\\r\\n            radius : [100, 140],\\r\\n            \\r\\n            // for funnel\\r\\n            x: \'60%\',\\r\\n            width: \'35%\',\\r\\n            funnelAlign: \'left\',\\r\\n            \\r\\n            data:[\\r\\n                {value:335, name:\'合规\'},\\r\\n                {value:310, name:\'投行\'},\\r\\n                {value:234, name:\'机构\'},\\r\\n                {value:135, name:\'研发\'},\\r\\n                {value:200, name:\'稽查\'},\\r\\n                {value:251, name:\'自营\'},\\r\\n                {value:147, name:\'资产\'},\\r\\n                {value:102, name:\'零售\'},\\r\\n                {value:150, name:\'风控\'}\\r\\n            ]\\r\\n        }\\r\\n    ]\\r\\n}"},"list":[{"name":"e1Config","desp":"表一配置","item":[{"name":"this.e1Config.title","desp":"title","item":[{"name":"this.e1Config.title.text","desp":"text"},{"name":"this.e1Config.title.subtext","desp":"subtext"}]},{"name":"this.e1Config.legend","desp":"legend","item":[{"name":"this.e1Config.legend.data","desp":"data"}]},{"name":"this.e1Config.tooltip","desp":"tooltip","item":[{"name":"this.e1Config.tooltip.trigger","desp":"trigger"}]},{"name":"this.e1Config.toolbox","desp":"toolbox","item":[{"name":"this.e1Config.toolbox.show","desp":"show"},{"name":"this.e1Config.toolbox.feature","desp":"feature"}]},{"name":"this.e1Config.xAxis","desp":"xAxis","value":""},{"name":"this.e1Config.yAxis","desp":"yAxis","value":""},{"name":"this.e1Config.series","desp":"series","value":""}]},{"name":"e2Config","desp":"表二配置","item":[{"name":"this.e2Config.title","desp":"title","item":[{"name":"this.e2Config.title.text","desp":"text"},{"name":"this.e2Config.title.subtext","desp":"subtext"}]},{"name":"this.e2Config.tooltip","desp":"tooltip","item":[{"name":"this.e2Config.tooltip.trigger","desp":"trigger"},{"name":"this.e2Config.tooltip.formatter","desp":"formatter"}]},{"name":"this.e2Config.calculable","desp":"calculable","value":""},{"name":"this.e2Config.series","desp":"series","value":""}]}],"mapping":{"1560751404343":[{"id":1560751404343,"modelValue":"configs","dataValue":"e1Config","type":""}],"1560751458361":[{"id":1560751458361,"modelValue":"configs","dataValue":"e2Config","type":""}]}},"events":{}}')}}]);