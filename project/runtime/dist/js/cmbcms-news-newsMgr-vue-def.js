(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["cmbcms-news-newsMgr-vue-def"],{"02b7":function(t,e){throw new Error('Module parse failed: Unexpected token (1:12)\nYou may need an appropriate loader to handle this file type.\n> {"structure":{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"direction":"row","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-layout","href":"v2-layout","children":[{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"公告管理","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"id":1564132652035,"pid":1564132587089,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}},{"component":"v2-layout","href":"v2-layout","layout":["10","90"],"direction":"row","children":[{"theme":{"btnType":"","size":""},"style":{"btnStyle":{"background-color":"","height":"","width":""}},"btnName":"添加公告","shape":"def","loading":false,"disabled":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-btn","href":"v2-component-btn","children":[],"events":{"_op_componentBtn_btn":{"click":["addNews"]}},"id":1564132722557,"pid":1564132596255,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}},{"theme":{"tableType":"border","size":""},"columns":[{"active":true,"prop":"columns0","label":"","fixed":"","width":"","sortable":false},{"active":true,"prop":"title","label":"标题","fixed":"","width":"","sortable":false},{"active":true,"prop":"content","label":"正文","fixed":"","width":"","sortable":false},{"active":true,"prop":"modified","label":"修改时间","fixed":"","width":"","sortable":true}],"selection":"","openIndex":false,"toolBar":false,"toolTitle":"操作列","toolLocation":"right","toolWidth":"170","toolBtns":[{"active":"true","btnName":"编辑","type":"primary","handler":"editNews"},{"active":true,"btnName":"删除","type":"danger","handler":"deleteNews"}],"tHeight":"","tMaxHeight":"","tableData":"${newsListData}","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-table","href":"v2-component-table","children":[],"events":{},"id":1564367911594,"pid":1564132596255,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}}],"style":{},"pid":"1564132587089-1","id":1564132596255,"ctnClass":"","customClass":"","realSize":["%","%"],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""},"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}],"events":{},"layout":["10","90"],"realSize":["%","%"],"id":1564132587089,"pid":"root","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""},"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}],"events":{},"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]},"logic":{"methods":{"queryNewsList":{"labelObj":{"view":[{"index":"2F3EE42899EBED77C38169D505B6B45E","name":"t4","desp":"t4","type":"parm","value":[{"option":{"name":"diy","desp":"自定义代码","mode":"custom","input":[{"type":"Value","value":"$axios.post(\'v1/ds/cmbcms/cmbcms/queryNewsList\',{}\\n    ).then(res=>{\\n        debugger;\\n\\n        if(res.data.retType === \'SUCCESS\'){\\n            ctx.newsListData = res.data.jsonData;\\n            ctx.$store.state.root.$store.state.loadingPage=false;\\n        }else{\\n            this.$message({\\n                showClose: true,\\n                message: res.data.retMsg,\\n                type: \'error\'\\n            });\\n        }\\n        \\n    }).catch(error=> {\\n        this.$message({\\n                showClose: true,\\n                message: error,\\n                type: \'error\'\\n        });\\n    });","children":[]},{"type":"Value","value":"this.value2","children":[]}]},"children":[{"id":0,"option":{"type":"Value","value":"$axios.post(\'v1/ds/cmbcms/cmbcms/queryNewsList\',{}\\n    ).then(res=>{\\n        debugger;\\n\\n        if(res.data.retType === \'SUCCESS\'){\\n            ctx.newsListData = res.data.jsonData;\\n            ctx.$store.state.root.$store.state.loadingPage=false;\\n        }else{\\n            this.$message({\\n                showClose: true,\\n                message: res.data.retMsg,\\n                type: \'error\'\\n            });\\n        }\\n        \\n    }).catch(error=> {\\n        this.$message({\\n                showClose: true,\\n                message: error,\\n                type: \'error\'\\n        });\\n    });","children":[]}},{"id":0,"option":{"type":"Value","value":"this.value2","children":[]}}],"mode":"custom","id":0}],"note":"//注释"}],"output":[]},"code":"","name":"queryNewsList","desp":"查询公告列表","upCode":[],"downCode":[],"custom":true,"params":[]},"editNews":{"labelObj":{"view":[{"index":"3CBB643BE61CF74703F91F3CB1AB90A6","name":"t4","desp":"t4","type":"parm","value":[{"option":{"name":"diy","desp":"自定义代码","mode":"custom","input":[{"type":"Value","value":"ctx.open({\\n\\t  status:true,\\n\\t\\ttitle:\'编辑公告\',\\n\\t\\tpath:\'cmbcms/editNews\',\\n\\t\\tpage:\'cmbcms/home/newsOpt\',\\n\\t\\ttype:\'SUB\',\\n\\t\\tparams:{userOptFlag:\'editNews\',userOptLabel:\'编辑公告\',news: row},\\n\\t\\thideCancelBtn:true,\\n\\t\\thideConfirmBtn:true,\\n\\t\\tconfirmCallback:() => { \\n\\t\\t\\tctx.queryNewsList();\\n\\t\\t\\tctx.$root.$store.state.loadingPage=false;\\n\\t\\t\\tctx.close();\\n\\t\\t\\tconsole.log(\'点击确定\')\\n\\t\\t},\\n\\t\\tcancelCallback:(e) => {\\n\\t\\t\\tconsole.log(\'点击取消\')\\n\\t\\t}\\n})","children":[]},{"type":"Value","value":"this.value2","children":[]}]},"children":[{"id":0,"option":{"type":"Value","value":"ctx.open({\\n\\t  status:true,\\n\\t\\ttitle:\'编辑公告\',\\n\\t\\tpath:\'cmbcms/editNews\',\\n\\t\\tpage:\'cmbcms/news/newsOpt\',\\n\\t\\ttype:\'SUB\',\\n\\t\\tparams:{newsOptFlag:\'editNews\',newsOptLabel:\'编辑公告\',news: row},\\n\\t\\thideCancelBtn:true,\\n\\t\\thideConfirmBtn:true,\\n\\t\\tconfirmCallback:() => { \\n\\t\\t\\tctx.queryNewsList();\\n\\t\\t\\tctx.$root.$store.state.loadingPage=false;\\n\\t\\t\\tctx.close();\\n\\t\\t\\tconsole.log(\'点击确定\')\\n\\t\\t},\\n\\t\\tcancelCallback:(e) => {\\n\\t\\t\\tconsole.log(\'点击取消\')\\n\\t\\t}\\n})","children":[]}},{"id":0,"option":{"type":"Value","value":"this.value2","children":[]}}],"mode":"custom","id":0}],"note":"//注释"}],"output":[]},"code":"","name":"editNews","desp":"编辑公告","upCode":[],"downCode":[],"custom":true,"params":["index","row"]},"addNews":{"labelObj":{"view":[{"index":"E7C2CBADB22E3427D261C08734AB4134","name":"t4","desp":"t4","type":"parm","value":[{"option":{"name":"diy","desp":"自定义代码","mode":"custom","input":[{"type":"Value","value":"ctx.open({\\n\\t  status:true,\\n\\t\\ttitle:\'添加新公告\',\\n\\t\\tpath:\'cmbcms/addNews\',\\n\\t\\tpage:\'cmbcms/home/newsOpt\',\\n\\t\\ttype:\'SUB\',\\n\\t\\tparams:{userOptFlag:\'addNews\',userOptLabel:\'添加新公告\'},\\n\\t\\thideCancelBtn:true,\\n\\t\\thideConfirmBtn:true,\\n\\t\\tconfirmCallback:() => { \\n\\t\\t\\tctx.queryNewsList();\\n\\t\\t\\tctx.$root.$store.state.loadingPage=false;\\n\\t\\t\\tctx.close();\\n\\t\\t\\tconsole.log(\'点击确定\')\\n\\t\\t},\\n\\t\\tcancelCallback:(e) => {\\n\\t\\t\\tconsole.log(\'点击取消\')\\n\\t\\t}\\n})","children":[]},{"type":"Value","value":"this.value2","children":[]}]},"children":[{"id":0,"option":{"type":"Value","value":"ctx.open({\\n\\t  status:true,\\n\\t\\ttitle:\'添加新公告\',\\n\\t\\tpath:\'cmbcms/addNews\',\\n\\t\\tpage:\'cmbcms/news/newsOpt\',\\n\\t\\ttype:\'SUB\',\\n\\t\\tparams:{newsOptFlag:\'addNews\',newsOptLabel:\'添加新公告\'},\\n\\t\\thideCancelBtn:true,\\n\\t\\thideConfirmBtn:true,\\n\\t\\tconfirmCallback:() => { \\n\\t\\t\\tctx.queryNewsList();\\n\\t\\t\\tctx.$root.$store.state.loadingPage=false;\\n\\t\\t\\tctx.close();\\n\\t\\t\\tconsole.log(\'点击确定\')\\n\\t\\t},\\n\\t\\tcancelCallback:(e) => {\\n\\t\\t\\tconsole.log(\'点击取消\')\\n\\t\\t}\\n})","children":[]}},{"id":0,"option":{"type":"Value","value":"this.value2","children":[]}}],"mode":"custom","id":0}],"note":"//注释"}],"output":[]},"code":"","name":"addNews","desp":"添加新公告","upCode":[],"downCode":[],"custom":true,"params":[]},"deleteNews":{"labelObj":{"view":[{"index":"B279989AFA4A4FB85F78F72C4954CA1A","name":"t4","desp":"t4","type":"parm","value":[{"option":{"name":"diy","desp":"自定义代码","mode":"custom","input":[{"type":"Value","value":"$axios.post(\'v1/ds/cmbcms/cmbcms/deleteNews\',{id: row.id}\\n    ).then(res=>{\\n        if(res.data.retType === \'SUCCESS\'){\\n            ctx.$root.$store.state.loadingPage=true;\\n\\n            ctx.queryNewsList();\\n            ctx.$message({\\n                showClose: true,\\n                message: res.data.retMsg,\\n                type: \'success\'\\n            });\\n        }else{\\n            ctx.$message({\\n                showClose: true,\\n                message: res.data.retMsg,\\n                type: \'error\'\\n            });\\n        }\\n        \\n    }).catch(error=> {\\n        ctx.$message({\\n                showClose: true,\\n                message: error,\\n                type: \'error\'\\n        });\\n    });","children":[]},{"type":"Value","value":"this.value2","children":[]}]},"children":[{"id":0,"option":{"type":"Value","value":"$axios.post(\'v1/ds/cmbcms/cmbcms/deleteNews\',{id: row.id}\\n    ).then(res=>{\\n        if(res.data.retType === \'SUCCESS\'){\\n            ctx.$root.$store.state.loadingPage=true;\\n\\n            ctx.queryNewsList();\\n            ctx.$message({\\n                showClose: true,\\n                message: res.data.retMsg,\\n                type: \'success\'\\n            });\\n        }else{\\n            ctx.$message({\\n                showClose: true,\\n                message: res.data.retMsg,\\n                type: \'error\'\\n            });\\n        }\\n        \\n    }).catch(error=> {\\n        ctx.$message({\\n                showClose: true,\\n                message: error,\\n                type: \'error\'\\n        });\\n    });","children":[]}},{"id":0,"option":{"type":"Value","value":"this.value2","children":[]}}],"mode":"custom","id":0}],"note":"//注释"}],"output":[]},"code":"","name":"deleteNews","desp":"删除公告","upCode":[],"downCode":[],"custom":true,"params":["index","row"]}},"watch":{},"computed":{},"beforeCreate":{"labelObj":{"view":[],"output":[]},"code":"","upCode":[],"downCode":[]},"created":{"labelObj":{"view":[{"index":"915C535F8307ECB51721DB8114230A58","name":"t4","desp":"t4","type":"parm","value":[{"option":{"name":"diy","desp":"自定义代码","mode":"custom","input":[{"type":"Value","value":"ctx.queryNewsList()","children":[]},{"type":"Value","value":"this.value2","children":[]}]},"children":[{"id":0,"option":{"type":"Value","value":"ctx.queryNewsList()","children":[]}},{"id":0,"option":{"type":"Value","value":"this.value2","children":[]}}],"mode":"custom","id":0}],"note":"//注释"}],"output":[]},"code":"","upCode":[],"downCode":[]},"beforeMount":{"labelObj":{"view":[],"output":[]},"code":"","upCode":[],"downCode":[]},"mounted":{"labelObj":{"view":[],"output":[]},"code":"","upCode":[],"downCode":[]},"beforeUpdate":{"labelObj":{"view":[],"output":[]},"code":"","upCode":[],"downCode":[]},"updated":{"labelObj":{"view":[],"output":[]},"code":"","upCode":[],"downCode":[]},"beforeDestroy":{"labelObj":{"view":[],"output":[]},"code":"","upCode":[],"downCode":[]},"destroyed":{"labelObj":{"view":[],"output":[]},"code":"","upCode":[],"downCode":[]},"pollList":[],"undefined":{"labelObj":{"view":[{"index":"915C535F8307ECB51721DB8114230A58","name":"t4","desp":"t4","type":"parm","value":[{"option":{"name":"diy","desp":"自定义代码","mode":"custom","input":[{"type":"Value","value":"ctx.queryNewsList()","children":[]},{"type":"Value","value":"this.value2","children":[]}]},"children":[{"id":0,"option":{"type":"Value","value":"ctx.queryNewsList()","children":[]}},{"id":0,"option":{"type":"Value","value":"this.value2","children":[]}}],"mode":"custom","id":0}],"note":"//注释"}],"output":[]},"code":"","upCode":[],"downCode":[]}},"dataBasket":{"data":{"newsListData":"[\\n    \\n]"},"list":[{"name":"newsListData","desp":"newsListData","value":"[\\n    \\n]"}],"mapping":{"1564367911594":[{"id":1564367911594,"modelValue":"tableData","dataValue":"newsListData","type":""}]}},"events":{},"display":{"icon":"icontongyong","desp":"公告管理","width":"100%","height":"100%"},"scssCode":""}')}}]);