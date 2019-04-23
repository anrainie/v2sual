export const variables = (function () {
  return {
    'variables': [{
      'desp': '系统主色',
      'defaultValue': '#04bebd',
      'cssAttrs': ['color', 'background-color', 'border-color', 'border-top-color', 'border-right-color', 'border-bottom-color', 'border-left-color'],
      'name': 'sMainColor'
    }, {
      'desp': '系统色hover态、修饰块hover 配色',
      'defaultValue': 'rgba(4,190,189,0.1)',
      'cssAttrs': ['background-color', 'border-color', 'border-top-color', 'border-right-color', 'border-bottom-color', 'border-left-color', 'color'],
      'name': 'sMainHoverColor'
    }, {
      'desp': '系统色active态、修饰线、文字 配色',
      'defaultValue': '#00a4af',
      'cssAttrs': ['background-color', 'border-color', 'border-top-color', 'border-right-color', 'border-bottom-color', 'border-left-color', 'color'],
      'name': 'sMainActiveColor'
    }, {
      'desp': '系统一级菜单背景色',
      'defaultValue': '#1c2b36',
      'cssAttrs': ['background-color'],
      'name': 'sLv1MenuBgColor'
    }, {
      'desp': '系统二级菜单背景色',
      'defaultValue': ' #152028',
      'cssAttrs': ['background-color'],
      'name': 'sLv2MenuBgColor'
    }, {
      'desp': '系统正常/focus态按钮色',
      'defaultValue': ' #4a5659',
      'cssAttrs': ['color', 'border-left-color', 'border-bottom-color', 'border-right-color', 'border-top-color', 'border-color', 'background-color'],
      'name': 'sBtnColor'
    }, {
      'desp': '系统按钮hover态配色',
      'defaultValue': '#636e70',
      'cssAttrs': ['color', 'border-left-color', 'border-bottom-color', 'border-right-color', 'border-top-color', 'border-color', 'background-color'],
      'name': 'sBtnHoverColor'
    }, {
      'desp': '系统按钮active态配色',
      'defaultValue': '#283033',
      'cssAttrs': ['color', 'border-left-color', 'border-bottom-color', 'border-right-color', 'border-top-color', 'border-color', 'background-color'],
      'name': 'sBtnActiveColor'
    }, {
      'desp': '系统字体大小',
      'defaultValue': '12px',
      'cssAttrs': ['font-size'],
      'name': 'sFontSize'
    }, {
      'desp': '按钮、表格、标题文字大小',
      'defaultValue': '14px',
      'cssAttrs': ['font-size'],
      'name': 'sBtnTableFontSize'
    }, {
      'desp': '内容凸显和图表标值文字大小',
      'defaultValue': '16px',
      'cssAttrs': ['font-size'],
      'name': 'sChartDigitFontSize'
    }, {
      'desp': '区域、块标题或版面凸显文字大小',
      'defaultValue': '18px',
      'cssAttrs': ['font-size'],
      'name': 'sBlockTitleFontSize'
    }, {
      'desp': '图文和色块组合字体文字大小',
      'defaultValue': '24px',
      'cssAttrs': ['font-size'],
      'name': 'sImgColorBlockFontSize'
    }, {
      'desp': '凸显文字和大字标记文字大小',
      'defaultValue': '30px',
      'cssAttrs': ['font-size'],
      'name': 'sBigCharacterFontSize'
    }, {
      'desp': '系统正常字体粗细',
      'defaultValue': 400,
      'cssAttrs': ['font-weight'],
      'name': 'sFontWeight'
    }, {
      'desp': '系统偏细字体粗细',
      'defaultValue': 300,
      'cssAttrs': ['font-weight'],
      'name': 'sFontWeightLight'
    }, {
      'desp': '系统加粗字体粗细',
      'defaultValue': 700,
      'cssAttrs': ['font-weight'],
      'name': 'sFontWeightBold'
    }, {
      'desp': '系统字体颜色（大部分使用）',
      'defaultValue': '#333333',
      'cssAttrs': ['color'],
      'name': 'sFontcolor'
    }, {
      'desp': '系统标题、表头、重要内容、功能性图标（如下拉箭头等）配色',
      'defaultValue': '#4d4d4d',
      'cssAttrs': ['color'],
      'name': 'sPrimaryFontColor'
    }, {
      'desp': '系统常规内容文字、图标、弹窗关闭按钮颜色',
      'defaultValue': '#666666',
      'cssAttrs': ['color'],
      'name': 'sSecondaryFontColor'
    }, {
      'desp': '系统辅助性内容、备注文字、线框hover颜色',
      'defaultValue': '#888888',
      'cssAttrs': ['color', 'border-left-color', 'border-bottom-color', 'border-right-color', 'border-top-color', 'border-color'],
      'name': 'sAssistanceFontColor'
    }, {
      'desp': '系统行高',
      'defaultValue': 1.5,
      'cssAttrs': ['line-height'],
      'name': 'sLineHeight'
    }, {
      'desp': '系统描边、分隔线配色',
      'defaultValue': '#e5e5e5',
      'cssAttrs': ['border-left-color', 'border-bottom-color', 'border-right-color', 'border-top-color', 'border-color'],
      'name': 'sLineColor'
    }, {
      'desp': '系统全局区域、块的底色',
      'defaultValue': '#f2f2f2',
      'cssAttrs': ['background-color'],
      'name': 'sBlockBgColor'
    }, {
      'desp': '全局标签、小区域、卡片底色',
      'defaultValue': '#fafafa',
      'cssAttrs': ['background-color'],
      'name': 'sTabCardBgColor'
    }, {
      'desp': '系统边角弧度',
      'defaultValue': '4px',
      'cssAttrs': ['border-radius'],
      'name': 'sBorderRadius'
    }, {
      'desp': '系统正常内边距值',
      'defaultValue': '10px  12px',
      'cssAttrs': ['padding'],
      'name': 'sNormalPadding'
    }, {
      'desp': '系统偏大内边距值',
      'defaultValue': '20px 30px',
      'cssAttrs': ['padding'],
      'name': 'sLargePadding'
    }, {
      'desp': '系统同一个组件内部DOM元素之间的margin值',
      'defaultValue': '6px',
      'cssAttrs': ['margin', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left'],
      'name': 'sInnerMargin'
    }, {
      'desp': '系统不同组件之间的margin值',
      'defaultValue': '10px',
      'cssAttrs': ['margin', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left'],
      'name': 'sOuterMargin'
    }, {
      'desp': '主消息配色',
      'defaultValue': '#3db9ff',
      'cssAttrs': ['color', 'border-left-color', 'border-bottom-color', 'border-right-color', 'border-top-color', 'border-color', 'background-color'],
      'name': 'sInfoColor'
    }, {
      'desp': '次消息配色',
      'defaultValue': '#7266ba',
      'cssAttrs': ['color', 'border-left-color', 'border-bottom-color', 'border-right-color', 'border-top-color', 'border-color', 'background-color'],
      'name': 'sSecondaryInfo'
    }, {
      'desp': '成功配色',
      'defaultValue': '#23ad44',
      'cssAttrs': ['color', 'border-left-color', 'border-bottom-color', 'border-right-color', 'border-top-color', 'border-color', 'background-color'],
      'name': 'sSuccessColor'
    }, {
      'desp': '警告配色',
      'defaultValue': '#ffba00',
      'cssAttrs': ['color', 'border-left-color', 'border-bottom-color', 'border-right-color', 'border-top-color', 'border-color', 'background-color'],
      'name': 'sWarningColor'
    }, {
      'desp': '错误配色',
      'defaultValue': '#f05050',
      'cssAttrs': ['color', 'border-left-color', 'border-bottom-color', 'border-right-color', 'border-color', 'border-top-color', 'background-color'],
      'name': 'sErrorColor'
    }, {
      'desp': '失效未定义配色',
      'defaultValue': '#a6a6a6',
      'cssAttrs': ['color', 'border-left-color', 'border-bottom-color', 'border-right-color', 'border-top-color', 'border-color', 'background-color'],
      'name': 'sUndefined'
    }, {
      'desp': '白色',
      'defaultValue': '#ffffff',
      'cssAttrs': ['color', 'border-left-color', 'border-bottom-color', 'border-right-color', 'border-top-color', 'border-color', 'background-color'],
      'name': 'white'
    }, {
      'desp': '透明色',
      'defaultValue': 'transparent',
      'cssAttrs': ['color', 'border-left-color', 'border-bottom-color', 'border-right-color', 'border-top-color', 'border-color', 'background-color'],
      'name': 'transparent'
    }, {
      'desp': '不可用状态配色',
      'defaultValue': '#cccccc',
      'cssAttrs': ['color', 'border-left-color', 'border-bottom-color', 'border-right-color', 'border-top-color', 'border-color', 'background-color'],
      'name': 'sDisabledColor'
    }, {
      'desp': '下拉菜单、下拉按钮层级',
      'defaultValue': 1000,
      'cssAttrs': ['z-index'],
      'name': 'sZindexDropdown'
    }, {
      'desp': '固定自粘页脚页头层级',
      'defaultValue': 1020,
      'cssAttrs': ['z-index'],
      'name': 'sZindexSticky'
    }, {
      'desp': '绝对定位模块层级',
      'defaultValue': 1030,
      'cssAttrs': ['z-index'],
      'name': 'sZindexFixed'
    }, {
      'desp': '模态框遮罩层级',
      'defaultValue': 1040,
      'cssAttrs': ['z-index'],
      'name': 'sZindexMask'
    }, {
      'desp': '模态框层级',
      'defaultValue': 1050,
      'cssAttrs': ['z-index'],
      'name': 'sZindexModal'
    }, {
      'desp': '弹出气泡层级',
      'defaultValue': 1060,
      'cssAttrs': ['z-index'],
      'name': 'sZindxPopover'
    }, {
      'desp': '弹出工具提示如Title属性层级',
      'defaultValue': 1070,
      'cssAttrs': ['z-index'],
      'name': 'sZindexTooltip'
    }]
  };
})();
