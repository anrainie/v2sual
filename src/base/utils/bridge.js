import { cssConfigDB } from './config.css.js';
import { variables } from '../../components/lib/aweb.theme-variables.js';
let CONST = {
  REGEX: {
    URL: /##[^#_]+_URL(?:_([^#]+))?##/gi,
    OVERVIEW_URL_SINGLE: /##(\d+)-OVERVIEW_URL##/,
    URL_REDUNDANCY: /(##|_URL(?:_(?:[^#]+))?##)/gi,
    URL_INDEX: /_URL_([^#]+)##$/,
    URL_ID: /^##([^#_]+)_URL/,
    WIDGET: {
      NAME: /%%_NAME%%/gi,
      INDEX: /%%_INDEX%%/gi,
      ID: /%%_WID%%/gi,
      PLACEHOLDER: /##(_(?:ID|ATTR|OPTION|CSS|URL|VAR)+)?##/gi
    }
  }
};
const transformThemeVariables = (themeVar) => {
  let data = {};

  if (themeVar) {
    for (let index = -1, elem; elem = themeVar[++index];) {
      if (elem.name && elem.desp) {
        let key = '@' + elem.name;
        let obj = {
          desp: elem.desp,
          name: key
        };
        let css;

        if (typeof elem.cssAttrs === 'string') {
          css = elem.cssAttrs.split(' ');
        } else {
          css = elem.cssAttrs;
        }
        for (let idx = -1, c; c = css[++idx];) {
          (data[c] || (data[c] = [])).push(obj);
        }

        data[key] = elem.defaultValue;
      }
    }
  }
  return data;
};
const getAllCssAttr = () => {
  let allCssAttrArray = cssConfigDB().get();
  let allCssAttr = [];

  for (let i = 0, len = allCssAttrArray.length; i < len; i++) {
    allCssAttr.push(allCssAttrArray[i].name);
  }

  return allCssAttr;
};
const turnCssConfigToArr = (cssConfig) => {
  let themeObj = {
    expand: true,
    name: 'theme',
    type: 'object',
    attr: [],
    desp: '类名样式'
  };
  let styleObj = {
    expand: true,
    name: 'style',
    type: 'object',
    desp: '样式',
    attr: []
  };
  let style, index, value;
  let attrArray;
  let allAttr;
  let result = [];

  if (cssConfig) {
    if (style = cssConfig.style) {
      for (index = -1; value = style[++index];) {
        let cssAttrs = value.cssAttrs.split(' ');

        attrArray = cssConfigDB.filter(item => cssAttrs.includes(item.name))
          .concat([{
            name: 'moreCss',
            divType: 'moreCss',
            type: 'more_btn',
            desp: 'moreCss',
            noAlert: true
          }]);

        styleObj.attr.push({
          name: value.name,
          desp: value.desp,
          type: 'object',
          attr: attrArray
        });
      }
    }

    // 添加一个自定义项，用于存储全量的css配置项

    allAttr = cssConfigDB.filter(item => getAllCssAttr().includes(item.name));

    styleObj.attr.push({
      name: 'allAttr',
      type: 'object',
      attr: allAttr
    });

    if ($.isArray(cssConfig.theme)) {
      cssConfig.theme.map(function (x) {
        x.type = 'css_theme_select';
        x.style = 'height: auto';
      });
      themeObj.attr = cssConfig.theme;
    }
  }
  result = [themeObj, styleObj];

  return result;
};

export default{
  edm_collection_default () {
    return JSON.stringify({
      __edm_collection: {
        'PUBCODECNAME': '_desp_',
        'COLSCALE': '0',
        'name': '_name_',
        'desp': '_desp_',
        'Parameter': {
          'pname': '字段长度',
          'pvalue': '50'
        },
        'type': 'String',
        'fieldLength': '50'
      }
    }
    );
  },
  getDefaultValue (instance, item) {
    var defaultValue = item.defaultValue;
    if (typeof instance[item.name] === 'number') {
      return instance[item.name];
    } else {
      if (defaultValue) {
        if (typeof defaultValue === 'object') {
          return JSON.stringify(defaultValue);
        } else {
          return defaultValue.toString();
        }
      } else {
        return '';
      }
    }
  },
  baseConfigInitInstance (instance, array, extras, notSendEdm, noReplaceData) {
    var context = this,
      cache,
      instanceCache,
      arrayCache,
      extrasCache,
      cursor = -1,
      noReplaceData = noReplaceData,
      eventAccumulator = 1,
      _i,
      _item,
      key,
      children,
      childrenMap,
      defaultValue,
      caches = [
        {
          instance: instance,
          array: array,
          extras: extras
        }
      ];

    // if (extras && AUI) {
    //     extras.widgetID = extras.widgetID || AUI.currentWidgetID;
    // }

    while ((cache = caches[++cursor])) {
      instanceCache = cache.instance;
      arrayCache = cache.array;
      extrasCache = cache.extras;

      if ($.isArray(arrayCache)) {
        $.each(arrayCache, function (i, item) {
          var name = item.name,
            stringifyTemp,
            temp;

          switch (item.type) {
            case 'tab':
              caches.push({
                instance: instanceCache,
                array: item.tabPanes,
                extras: extrasCache
              });
              break;

            case 'object':
              if (
                item.isRequire &&
                    extrasCache &&
                    extrasCache.instanceParentArr
              ) {
                // set attr manually
                // at this situation, name is equal to string require
                item.attr = getRequireAttr(
                  extrasCache.instanceParentArr,
                  instanceCache
                );
              } else {
                if (item.attr) {
                  if ((children = item.children)) {
                    childrenMap = {};
                    for (_i = -1; (_item = children[++_i]);) {
                      // if ((defaultValue = _item.defaultValue) && !(/null/i.test(defaultValue))) {
                      //
                      // }
                      childrenMap[_item.name] = _item;
                    }

                    for (_i = -1; (_item = item.attr[++_i]);) {
                      if (
                        childrenMap.hasOwnProperty(_item.name) &&
                            (defaultValue =
                              childrenMap[_item.name].defaultValue) &&
                            !/null/i.test(defaultValue)
                      ) {
                        _item.defaultValue = defaultValue;
                      }
                    }
                    // for (key in children) {
                    //     if (children.hasOwnProperty(key) && (defaultValue = children[key].defaultValue) && !(/null/i.test(defaultValue))) {
                    //         item.attr[key].defaultValue = defaultValue;
                    //     }
                    //
                    // }
                  }

                  if (typeof instanceCache[name] !== 'object') {
                    instanceCache[name] = {};
                  }
                  caches.push({
                    instance: instanceCache[name],
                    array: item['attr'],
                    extras: extrasCache
                  });
                } else {
                  instanceCache[name] = {};
                }
              }
              break;

            case 'array':
              if (item['attrInEachElement']) {
                if (
                  (!instanceCache[name] ||
                        ($.isArray(instanceCache[name]) &&
                          instanceCache[name].length === 0)) &&
                      item['attrInEachElement'] !== 'self'
                ) {
                  instanceCache[name] = [];
                  instanceCache[name].push(
                    context.baseConfigInitInstance(
                      {
                        active: 'true'
                      },
                      item['attrInEachElement'],
                      {
                        noreplace: true,
                        name: item.desp,
                        widgetID: extrasCache && extrasCache.widgetID
                      },
                      notSendEdm,
                      noReplaceData
                    )
                  );

                  if (item.append || item.appendNumber) {
                    if (item.appendNumber && !item.append) {
                      for (i = 0; i < item.appendNumber; i++) {
                        item.append = item.append || [];
                        item.append.push({});
                      }
                    }
                    $.each(JSON.parse(JSON.stringify(item.append)), function (
                      index,
                      value
                    ) {
                      value.active = true;
                      instanceCache[name].push(
                        context.baseConfigInitInstance(
                          value,
                          item['attrInEachElement'],
                          {
                            name: item.desp,
                            widgetID: extrasCache && extrasCache.widgetID,
                            order: index + 1,
                            instanceParentArr: instanceCache[name]
                          },
                          notSendEdm,
                          noReplaceData
                        )
                      );
                    });
                  }
                } else if (
                  $.isArray(instanceCache[name]) &&
                      instanceCache[name].length > 0
                ) {
                  if (item['attrInEachElement'] === 'self') {
                    item['attrInEachElement'] = JSON.parse(
                      JSON.stringify(arrayCache)
                    );
                  }

                  if (!instanceCache[name][0].active) {
                    // 第一个元素的active不存在，说明已做过normalize处理
                    instanceCache[name].unshift(
                      context.baseConfigInitInstance(
                        {
                          active: true
                        },
                        item['attrInEachElement'],
                        {
                          noreplace: true,
                          name: item.desp,
                          widgetID: extrasCache && extrasCache.widgetID
                        },
                        notSendEdm,
                        noReplaceData
                      )
                    );
                  }

                  // 对数组的每个元素进行init处理
                  $.each(instanceCache[name], function (index, value) {
                    value.active =
                          typeof value.active === 'string'
                            ? JSON.parse(value.active)
                            : value.active;
                    if (value.active === undefined) {
                      value.active = true;
                    }
                    if (index > 0) {
                      context.baseConfigInitInstance(
                        value,
                        item['attrInEachElement'],
                        {
                          name: item.desp,
                          widgetID: extrasCache && extrasCache.widgetID,
                          order: index,
                          instanceParentArr: instanceCache[name],
                          arrayValue: value
                        },
                        notSendEdm,
                        noReplaceData
                      );
                    }
                  });
                }
              } else {
                instanceCache[name] = instanceCache[name] || [];
              }
              if (item.hasEvent && !noReplaceData) {
                //   if (extrasCache) {
                //     eventUtil.eventSelectorUpdate(
                //       extrasCache.widgetID,
                //       instanceCache[name]
                //     );
                //   } else {
                //     eventUtil.eventSelectorUpdate(
                //       AUI.currentWidgetID,
                //       instanceCache[name]
                //     );
                //   }
              }
              break;

            case 'edmCollection':
              //  let edm_collection_default=context.edm_collection_default();

              if (item['attrInEachElement']) {
                instanceCache[name] = instanceCache[name] || [];
                if (!instanceCache[name].length) {
                  // instanceCache[name].elements = [];
                  let initData = context.baseConfigInitInstance({ active: true}, item['attrInEachElement'], {}, notSendEdm, noReplaceData);

                  instanceCache[name].push($.extend(true, {}, initData, {[ item.edmKey]: item.name + 0}));

                  if (item.append || item.appendNumber) {
                    if (item.appendNumber && !item.append) {
                      for (i = 0; i < item.appendNumber; i++) {
                        item.append = item.append || [];
                        item.append.push({});
                      }
                    }

                    $.each(item.append, function (index, value) {
                      let i = index + 1;
                      value.active = true;
                      instanceCache[name].push(
                        $.extend(
                          true,
                          {},
                          context.baseConfigInitInstance({}, item['attrInEachElement'], {}, notSendEdm, noReplaceData),
                          value,
                          {[ item.edmKey]: item.name + i}
                        )
                      );
                    });
                  }
                } else {
                  if (!instanceCache[name].active) {
                    // 第一个元素的active不存在，说明已做过normalize处理
                    instanceCache[name].unshift(
                      $.extend(true, {},
                        context.baseConfigInitInstance(
                          {
                            active: true
                          },
                          item['attrInEachElement'],
                          {

                          },
                          notSendEdm,
                          noReplaceData

                        ),
                        {[ item.edmKey]: item.name + 0}
                      )
                    );
                  }
                  // 对数组的每个元素进行init处理
                  $.each(instanceCache[name], function (index, value) {
                    value.active = typeof value.active === 'string' ? JSON.parse(value.active) : value.active;
                    if (value.active === undefined) {
                      value.active = true;
                    }
                    if (index > 0) {
                      caches.push({
                        instance: value,
                        array: item['attrInEachElement'],
                        extras: {}
                      });
                    }
                  });
                }
              } else {
                instanceCache[name] = [];
                // instanceCache[name].elements = [];
              }

              // if (item.hasEvent && !noReplaceData) {
              //   //   if (extrasCache) {
              //   //     eventUtil.eventSelectorUpdate(
              //   //       extrasCache.widgetID,
              //   //       instanceCache[name].elements
              //   //     );
              //   //   } else {
              //   //     eventUtil.eventSelectorUpdate(
              //   //       AUI.currentWidgetID,
              //   //       instanceCache[name].elements
              //   //     );
              //   //   }
              // }

              // instanceCache[name].edmKey = item["edmKey"];

              // 同步edm数据
              // if (
              //   !notSendEdm &&
              //   extrasCache &&
              //   extrasCache.widgetID &&
              //   !(
              //     auiApp.mode === CONST.MODE.WIDGET_BUILDER &&
              //     AUI.currentWidgetID === CONST.WIDGET.CONFIG_WIDGET_ID
              //   )
              // ) {
              //   edmUtil.edmUpdateDataModelList({
              //     widgetID: extrasCache.widgetID,
              //     foreignID: extrasCache.widgetID,
              //     edmID: instanceCache[name].edmID,
              //     applyTo: CONST.STEP.APPLY_TO.WIDGET,
              //     direction: CONST.EDM.DIRECTION.response,
              //     callback: (function(obj) {
              //       return function(
              //         keys,
              //         fields,
              //         ids,
              //         edmID,
              //         foreignID,
              //         widgetID
              //       ) {
              //         obj.edmID = edmID;
              //         obj.fields = fields;
              //         obj.ids = ids;
              //         obj.keys = keys;

              //         $.each(obj.elements, function(index, value) {
              //           if (value.active === true && index !== 0) {
              //             value.edmKey = fields[index - 1];
              //             value.edmItemId = ids[index - 1];
              //           }
              //         });
              //       };
              //     })(instanceCache[name])
              //   });
              // }
              break;

            case 'string_select':
              stringifyTemp =
                    instanceCache[name] && instanceCache[name].toString();

              if (item.group) {
                temp = item.group[0].valueArray
                  ? item.group[0].valueArray[0]
                  : '';
              } else {
                temp = item.valueArray ? item.valueArray[0] : '';
              }

              if (typeof stringifyTemp !== 'undefined') {
                instanceCache[name] = stringifyTemp;
              } else {
                instanceCache[name] =
                      (typeof item.defaultValue !== 'undefined' &&
                        item.defaultValue.toString()) ||
                      temp;
              }

              if (name === 'data-authority') {
                instanceCache[name] = instanceCache[name] || '10';
              }
              break;

            case 'number':
              if (typeof instanceCache[name] !== 'number') {
                if (instanceCache[name] === undefined) {
                  switch (typeof item.defaultValue) {
                    case 'undefined':
                      item.defaultValue = '';
                      break;

                    case 'string':
                      if (item.defaultValue !== '') {
                        item.defaultValue = Number(item.defaultValue);
                      }
                      break;
                  }
                  instanceCache[name] = item.defaultValue;
                } else {
                  if (instanceCache[name] !== '') {
                    instanceCache[name] =
                          instanceCache[name] !== undefined &&
                          instanceCache[name] !== '' &&
                          JSON.parse(instanceCache[name]);
                  }
                }
              }
              break;

            case 'boolean':
              instanceCache[name] =
                    (typeof instanceCache[name] !== 'undefined' &&
                      instanceCache[name].toString()) ||
                    (typeof item.defaultValue !== 'undefined' &&
                      item.defaultValue.toString()) ||
                    'true';
              if (typeof instanceCache[name] !== 'boolean') {
                instanceCache[name] =
                      instanceCache[name] !== undefined &&
                      JSON.parse(instanceCache[name]);
              }
              break;

            case 'tags_input':
              instanceCache[name] =
                    instanceCache[name] || item.defaultValue || '';

              if (typeof instanceCache[name] !== 'string') {
                instanceCache[name] = JSON.stringify(instanceCache[name]);
              }
              break;

            case 'multiple_select':
              // 转化成数组

              instanceCache[name] = instanceCache[name] || item.defaultValue;
              if (!$.isArray(instanceCache[name])) {
                instanceCache[name] =
                      (instanceCache[name] &&
                        instanceCache[name].split(item.separator || ' ')) ||
                      [];
              }
              break;
            case 'comboTree':
              if (
                (item.dataType === 'handler' ||
                      item.dataType === 'function') &&
                    item.defaultValue &&
                    !/null/i.test(item.defaultValue)
              ) {
                instanceCache['jsValue_' + name] =
                      instanceCache['jsValue_' + name] ||
                      item.defaultValue ||
                      'function(){}';
                instanceCache[name] =
                      instanceCache[name] === ''
                        ? ''
                        : instanceCache[name] || 'jsEditor';
              }
              break;
            default:
              if (item.direction === 'request') {
                instanceCache[name] = instanceCache[name] || {};
                instanceCache[name].id = instanceCache[name].id;
                instanceCache[name].name = instanceCache[name].name;
                instanceCache[name].url =
                      instanceCache[name].url ||
                      (extrasCache &&
                        '##' +
                          extrasCache.widgetID +
                          '_URL_' +
                          instanceCache[name].id +
                          '##');
              } else {
                if (!item['switch']) {
                  switch (item.formatter) {
                    case 'replace':
                      // ++AUI.data.eventAccumulator;
                      // ;
                      if (
                        (extrasCache && !extrasCache.noreplace) ||
                            !extrasCache
                      ) {
                        // if (instanceCache[name] !== undefined) {
                        //     switch (item.idUniqueSpace) {
                        //         case 'widget':
                        //             if (extrasCache && extrasCache.widgetID) {
                        //                 eventAccumulatorMap[extrasCache.widgetID][instanceCache[name]] = true;
                        //                 eventAccumulatorMap[instanceCache[name]] = true;
                        //             }
                        //             break;
                        //         default:
                        //             eventAccumulatorMap[instanceCache[name]] = true;
                        //             break;
                        //     }
                        //     instanceCache[name] = instanceCache[name];
                        //     if (typeof instanceCache[name] === 'string') {
                        //         if (instanceCache[name].indexOf(item.desp) !== -1) {
                        //             extrasCache && extrasCache.arrayValue && (extrasCache.arrayValue.active = false);
                        //         }
                        //     }
                        // } else {
                        //     switch (item.idUniqueSpace) {
                        //         case 'widget':
                        //             if (extrasCache && extrasCache.widgetID) {
                        //                 while (eventAccumulator in eventAccumulatorMap[extrasCache.widgetID]) {
                        //                     eventAccumulator++;
                        //                 }
                        //             }
                        //             break;
                        //         default:
                        //             while (eventAccumulator in eventAccumulatorMap) {
                        //                 eventAccumulator++;
                        //             }
                        //             break;
                        //     }
                        //     if(!noReplaceData){
                        //         instanceCache[name] = item.defaultValue
                        //             .replace(CONST.REGEX.WIDGET.NAME, item.desp)
                        //             .replace(CONST.REGEX.WIDGET.INDEX, eventAccumulator + 1)
                        //             .replace(CONST.REGEX.FOREIGN_WIDGET.FOREIGN_WIDGET_SPILT, item.name);
                        //     }else{
                        //         instanceCache[name]=item.defaultValue;
                        //     }
                        //     dataModel.set('eventAccumulator', eventAccumulator + 2);
                        // }
                      } else {
                        instanceCache[name] = instanceCache[name] || '';
                      }

                      break;

                    case 'replaceWithFunction':
                      instanceCache[name] = instanceCache[name];
                      break;

                    case 'selector':
                      if (extrasCache) {
                        if (!noReplaceData) {
                          instanceCache[name] = item.defaultValue
                            .replace(
                              CONST.REGEX.WIDGET.NAME,
                              extrasCache.name
                            )
                            .replace(
                              CONST.REGEX.WIDGET.INDEX,
                              extrasCache.order || ''
                            );
                        } else {
                          instanceCache[name] = item.defaultValue;
                        }
                      } else {
                        instanceCache[name] = '';
                      }
                      break;

                    default:
                      if (name === 'appJsCode') {
                        // 对appJsCode进行特殊处理
                        instanceCache[name] =
                              instanceCache[name] &&
                              instanceCache[name].toString();
                        if (instanceCache[name]) {
                          if (instanceCache[name].indexOf('app.') !== 0) {
                            instanceCache[name] =
                                  'app.' +
                                  instanceCache.name +
                                  '=' +
                                  instanceCache[name];
                          }

                          if (
                            (instanceCache.belongTo === 'class' ||
                                  instanceCache.belongTo === 'closure') &&
                                instanceCache[name].substr(-2, 2) !== '()' &&
                                instanceCache[name].substr(-3, 3) !== '();'
                          ) {
                            instanceCache[name] = instanceCache[name] + '()';
                          }
                        }
                      } else {
                        if (
                          !(
                            typeof instanceCache[name] in
                                {
                                  undefined: true,
                                  string: true
                                }
                          ) &&
                              !item.keepFormat
                        ) {
                          temp = JSON.stringify(instanceCache[name]);
                        } else {
                          temp =
                                instanceCache[name] ||
                                context.getDefaultValue(instanceCache, item);
                        }
                        instanceCache[name] =
                              instanceCache[name] === '' ? '' : temp;
                      }

                      break;
                  }
                }
              }

              if (typeof instanceCache[name] === 'string') {
                instanceCache[name] = instanceCache[name].replace(
                  /%%_NAME%%/g,
                  instanceCache.id || ''
                );
              }
              break;
          }
        });
      }
    }

    return instance;
  },
  cssConfigInitInstance (instance, css, isResumed) {
    let cache;
    let cursor = -1;
    let temp;

    let itemCopy, point, forLength;
    let instanceCache, arrayCache;

    let name, type, variablesName;
    let itemType;
    let defaultTheme = {};

    let themeVar = transformThemeVariables(variables); // $AW.fresher && $AW.fresher.variablesCopy
    let cssArr = turnCssConfigToArr(css);

    let caches = [{
      cssObj: instance || {},
      cssArray: cssArr
    }];

    while (cache = caches[++cursor]) {
      instanceCache = cache.cssObj;
      arrayCache = cache.cssArray;

      if (instanceCache && Array.isArray(arrayCache)) {
        for (let i = -1, item; item = arrayCache[++i];) {
          name = item.name;
          type = item.type;

          switch (type) {
            case 'object':
              if (Array.isArray(item.attr)) {
                if (instanceCache && typeof instanceCache[name] !== 'object') {
                  instanceCache[name] = {};
                }

                caches.push({
                  cssObj: instanceCache[name] || {},
                  cssArray: item.attr
                });
              }
              break;

            case 'css_input_select':
            case 'input_append':
              item.type = 'input_append';
              item.appendOption = ['px', 'em', 'rem', '%', 'auto', ''];
              item.appendOptionDesp = ['px', 'em', 'rem', '%', 'auto', ''];

              item.spanType = 'list';
              item.selectNum = 1;
              item.keepFormat = true;

              if ((typeof instanceCache[name] === 'string' && instanceCache[name] !== '') && !instanceCache[name].match(/^@.*/)) {
                instanceCache[name] = instanceCache[name].replace(/\s/g, '');
                for (point = 0, forLength = item.appendOption.length; point < forLength; point++) {
                  if (instanceCache[name].indexOf(item.appendOption[point]) !== -1 && instanceCache[name].substr(0, instanceCache[name].indexOf(item.appendOption[point])).replace(REAL_REGULAR, '') === '') {
                    temp = item.appendOption[point];
                    break;
                  }
                }
                instanceCache[name] = {
                  inputValue: temp && instanceCache[name].substr(0, instanceCache[name].length - temp.length) || '',
                  selectValue: temp || item.appendOption[5]
                };
              } else {
                instanceCache[name] = instanceCache[name] || {
                  inputValue: '',
                  selectValue: ''
                };
              }

              break;

            case 'css_string_input':
              item.type = 'string_input';
              if (instanceCache[name] === 0 || instanceCache[name] === '0') {
                instanceCache[name] = instanceCache[name];
              } else {
                instanceCache[name] = instanceCache[name] || '';
              }

              break;

            case 'string_input':

              if (item.className) {
                if (isResumed) {
                  instanceCache[name] = instanceCache[name] || '';
                } else {
                  instanceCache[name] = instanceCache[name];
                }
              } else {
                if (instanceCache[name] === 0 || instanceCache[name] === '0') {
                  instanceCache[name] = instanceCache[name];
                } else {
                  instanceCache[name] = instanceCache[name] || '';
                }
              }
              break;

            case 'css_img_url':
              item.type = 'file';
              instanceCache[name] = instanceCache[name] || '';

              break;

            case 'color_pick':
              item.type = 'colorPicker';
              instanceCache[name] = instanceCache[name] || '';
              break;

            case 'css_theme_select':
              itemCopy = JSON.parse(JSON.stringify(item));
              itemCopy.type = 'directive_div';
              itemCopy.noAlert = true;
              itemCopy.divType = item.type;

              item.type = 'object';
              item.expand = true;
              item.attr = [itemCopy];

              defaultTheme[item.name] = item.valueArray[0];

              if (!instanceCache[name] || !instanceCache[name][name]) {
                instanceCache[name] = defaultTheme;
              } else {
                instanceCache[name] = instanceCache[name];
              }

              break;
          }

          if (themeVar && themeVar.hasOwnProperty(item.name)) {
            if ((itemType = item.type) !== 'string_select') {
              item.canSwap = true; // 是否开启切换
              item.spanType = 'list';
              item.selectNum = 1;
              item.valueArray = [''];
              item.despArray = ['默认'];

              if ((!instanceCache[name]) && instanceCache[name] !== 0 && instanceCache[name] !== '0') {
                if (!item.oldType) {
                  item.type = 'string_select';
                  item.oldType = itemType;
                }
              } else if (typeof instanceCache[name] === 'object' && !instanceCache[name].inputValue && !instanceCache[name].selectValue) {
                if (!item.oldType) {
                  item.type = 'string_select';
                  item.oldType = itemType;
                  instanceCache[name] = '';
                }
              }
            }
            variablesName = themeVar[item.name];
            if (variablesName) {
              for (let index = -1, value; value = variablesName[++index];) {
                item.valueArray.push(value.name);
                item.despArray.push(value.desp);
              }
            }
          }
        }
      }
    }

    return instance;
  }
};
