(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["cmbcms-subAccount-authentication-vue-def"],{"04d8":function(t,e){throw new Error('Module parse failed: Unexpected token (1:12)\nYou may need an appropriate loader to handle this file type.\n> {"structure":{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"component":"v2-layout","href":"v2-layout","layout":["20","10","10","10","20","30"],"direction":"row","children":[{"active":"0","direction":"horizontal","processStatus":"process","finishStatus":"finish","alignCenter":true,"simple":false,"list":[{"active":"true","title":"身份验证","description":"","icon":""},{"active":true,"title":"绑定银行卡","description":"","icon":""},{"active":true,"title":"完成开户","description":"","icon":""}],"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-steps","href":"v2-component-steps","children":[],"events":{},"id":1564470542837,"pid":1564470486485,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}},{"theme":{"size":""},"style":{"label":{"font-size":"","font-weight":"","color":""}},"label":"客户姓名","titleMode":"col","labelWitdh":"100px","inputType":"text","rows":"2","placeholder":"请选择","prepend":"","append":"","maxlength":"","minlength":"","prefixIcon":"","suffixIcon":"","showWordLimit":false,"value":"${userIdentity.name}","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"id":1564470624759,"pid":1564470486485,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}},{"theme":{"size":""},"style":{"label":{"font-size":"","font-weight":"","color":""}},"label":"身份证号","titleMode":"col","labelWitdh":"100px","inputType":"text","rows":"2","placeholder":"请选择","prepend":"","append":"","maxlength":"","minlength":"","prefixIcon":"","suffixIcon":"","showWordLimit":false,"value":"${userIdentity.identity_card}","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"id":1564470683904,"pid":1564470486485,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"上传证件图片","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"id":1564470704802,"pid":1564470486485,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}},{"maxCount":"1","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-mobile-uploader","href":"v2-mobile-uploader","children":[],"events":{},"id":1564470738154,"pid":1564470486485,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}},{"theme":{"btnType":"","size":""},"style":{"btnStyle":{"background-color":"#1D35EA","height":"","width":"100%"}},"btnName":"下一步","shape":"def","loading":false,"disabled":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-btn","href":"v2-component-btn","children":[],"events":{"_op_componentBtn_btn":{"click":["nextStepClick"]}},"id":1564470760677,"pid":1564470486485,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"#FFFFFF"}}],"style":{},"pid":"root-0","id":1564470486485,"ctnClass":"","customClass":"","realSize":["%","%","%","%","%","%"],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""},"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}],"events":{},"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]},"logic":{"methods":{"nextStepClick":{"labelObj":{"view":[{"index":"9C7713A250E7F10FC4F0C5A82C9B2F11","name":"t4","desp":"t4","type":"parm","value":[{"option":{"name":"diy","desp":"自定义代码","mode":"custom","input":[{"type":"Value","value":"ctx.$root.commit(\'currentPageIndex\',1);","children":[]},{"type":"Value","value":"this.value2","children":[]}]},"children":[{"id":0,"option":{"type":"Value","value":"// ctx.$root.$emit(\'currentPageIndex\',1);\\n// ctx.$root.$emit(\'nextStepEvent\',ctx.subAccountDict);\\nctx.$root.$emit(\'currentPageIndex\',{\\n    index: 1,\\n    data: ctx.userIdentity\\n});","children":[]}},{"id":0,"option":{"type":"Value","value":"this.value2","children":[]}}],"mode":"custom","id":0}],"note":"//注释"}],"output":[]},"code":"","name":"nextStepClick","desp":"nextStepClick","upCode":[],"downCode":[],"custom":true,"params":[]}},"watch":{},"computed":{},"beforeCreate":{"labelObj":{"view":[],"output":[]},"code":"","upCode":[],"downCode":[]},"created":{"labelObj":{"view":[],"output":[]},"code":"","upCode":[],"downCode":[]},"beforeMount":{"labelObj":{"view":[],"output":[]},"code":"","upCode":[],"downCode":[]},"mounted":{"labelObj":{"view":[],"output":[]},"code":"","upCode":[],"downCode":[]},"beforeUpdate":{"labelObj":{"view":[],"output":[]},"code":"","upCode":[],"downCode":[]},"updated":{"labelObj":{"view":[],"output":[]},"code":"","upCode":[],"downCode":[]},"beforeDestroy":{"labelObj":{"view":[],"output":[]},"code":"","upCode":[],"downCode":[]},"destroyed":{"labelObj":{"view":[],"output":[]},"code":"","upCode":[],"downCode":[]},"pollList":[]},"dataBasket":{"data":{"userIdentity":"{\\n    name: \'\',\\n    identity_card: \'\'\\n}"},"list":[{"name":"userIdentity","desp":"用户身份","item":[{"name":"this.userIdentity.name","desp":"name","value":""},{"name":"this.userIdentity.identity_card","desp":"identity_card","value":""}]}],"mapping":{"1564466590139":[],"1564470624759":[{"id":1564470624759,"modelValue":"value","dataValue":"userIdentity.name","type":""}],"1564470683904":[{"id":1564470683904,"modelValue":"value","dataValue":"userIdentity.identity_card","type":""}]}},"events":{},"display":{"icon":"icontongyong","desp":"子账户管理","width":"100%","height":"100%"},"scssCode":""}')}}]);