(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["v2MobileInput"] = factory(require("vue"));
	else
		root["v2MobileInput"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "61d3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1128":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deepAssign; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a142");
/* eslint-disable no-use-before-define */

var hasOwnProperty = Object.prototype.hasOwnProperty;

function assignKey(to, from, key) {
  var val = from[key];

  if (!Object(___WEBPACK_IMPORTED_MODULE_0__[/* isDef */ "b"])(val)) {
    return;
  }

  if (!hasOwnProperty.call(to, key) || !Object(___WEBPACK_IMPORTED_MODULE_0__[/* isObj */ "c"])(val) || typeof val === 'function') {
    to[key] = val;
  } else {
    to[key] = deepAssign(Object(to[key]), from[key]);
  }
}

function deepAssign(to, from) {
  Object.keys(from).forEach(function (key) {
    assignKey(to, from, key);
  });
  return to;
}

/***/ }),

/***/ "157a":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("aca7");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("430f4d50", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "2350":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "2638":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}var normalMerge=["attrs","props","domProps"],toArrayMerge=["class","style","directives"],functionalMerge=["on","nativeOn"],mergeJsxProps=function(a){return a.reduce(function(c,a){for(var b in a)if(!c[b])c[b]=a[b];else if(-1!==normalMerge.indexOf(b))c[b]=_extends({},c[b],a[b]);else if(-1!==toArrayMerge.indexOf(b)){var d=c[b]instanceof Array?c[b]:[c[b]],e=a[b]instanceof Array?a[b]:[a[b]];c[b]=d.concat(e)}else if(-1!==functionalMerge.indexOf(b)){for(var f in a[b])if(c[b][f]){var g=c[b][f]instanceof Array?c[b][f]:[c[b][f]],h=a[b][f]instanceof Array?a[b][f]:[a[b][f]];c[b][f]=g.concat(h)}else c[b][f]=a[b][f];}else if("hook"==b)for(var i in a[b])c[b][i]=c[b][i]?mergeFn(c[b][i],a[b][i]):a[b][i];else c[b]=a[b];return c},{})},mergeFn=function(a,b){return function(){a&&a.apply(this,arguments),b&&b.apply(this,arguments)}};module.exports=mergeJsxProps;


/***/ }),

/***/ "3c69":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// EXTERNAL MODULE: ./node_modules/vant/es/utils/deep-assign.js
var deep_assign = __webpack_require__("1128");

// CONCATENATED MODULE: ./node_modules/vant/es/locale/lang/zh-CN.js
/* harmony default export */ var zh_CN = ({
  name: '姓名',
  tel: '电话',
  save: '保存',
  confirm: '确认',
  cancel: '取消',
  delete: '删除',
  complete: '完成',
  loading: '加载中...',
  telEmpty: '请填写电话',
  nameEmpty: '请填写姓名',
  confirmDelete: '确定要删除么',
  telInvalid: '请填写正确的电话',
  vanContactCard: {
    addText: '添加联系人'
  },
  vanContactList: {
    addText: '新建联系人'
  },
  vanPagination: {
    prev: '上一页',
    next: '下一页'
  },
  vanPullRefresh: {
    pulling: '下拉即可刷新...',
    loosing: '释放即可刷新...'
  },
  vanSubmitBar: {
    label: '合计：'
  },
  vanCoupon: {
    valid: '有效期',
    unlimited: '无使用门槛',
    discount: function discount(_discount) {
      return _discount + "\u6298";
    },
    condition: function condition(_condition) {
      return "\u6EE1" + _condition + "\u5143\u53EF\u7528";
    }
  },
  vanCouponCell: {
    title: '优惠券',
    tips: '使用优惠',
    count: function count(_count) {
      return _count + "\u5F20\u53EF\u7528";
    }
  },
  vanCouponList: {
    empty: '暂无优惠券',
    exchange: '兑换',
    close: '不使用优惠',
    enable: '可使用优惠券',
    disabled: '不可使用优惠券',
    placeholder: '请输入优惠码'
  },
  vanAddressEdit: {
    area: '地区',
    postal: '邮政编码',
    areaEmpty: '请选择地区',
    addressEmpty: '请填写详细地址',
    postalEmpty: '邮政编码格式不正确',
    defaultAddress: '设为默认收货地址',
    telPlaceholder: '收货人手机号',
    namePlaceholder: '收货人姓名',
    areaPlaceholder: '选择省 / 市 / 区'
  },
  vanAddressEditDetail: {
    label: '详细地址',
    placeholder: '街道门牌、楼层房间号等信息'
  },
  vanAddressList: {
    add: '新增地址'
  }
});
// CONCATENATED MODULE: ./node_modules/vant/es/locale/index.js



var proto = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype;
var defineReactive = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.util.defineReactive;
defineReactive(proto, '$vantLang', 'zh-CN');
defineReactive(proto, '$vantMessages', {
  'zh-CN': zh_CN
});
/* harmony default export */ var locale = __webpack_exports__["a"] = ({
  messages: function messages() {
    return proto.$vantMessages[proto.$vantLang];
  },
  use: function use(lang, messages) {
    var _this$add;

    proto.$vantLang = lang;
    this.add((_this$add = {}, _this$add[lang] = messages, _this$add));
  },
  add: function add(messages) {
    if (messages === void 0) {
      messages = {};
    }

    Object(deep_assign["a" /* deepAssign */])(proto.$vantMessages, messages);
  }
});

/***/ }),

/***/ "4598":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return raf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return doubleRaf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cancelRaf; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a142");
/**
 * requestAnimationFrame polyfill
 */

var prev = Date.now();
/* istanbul ignore next */

function fallback(fn) {
  var curr = Date.now();
  var ms = Math.max(0, 16 - (curr - prev));
  var id = setTimeout(fn, ms);
  prev = curr + ms;
  return id;
}
/* istanbul ignore next */


var root = ___WEBPACK_IMPORTED_MODULE_0__[/* isServer */ "d"] ? global : window;
/* istanbul ignore next */

var iRaf = root.requestAnimationFrame || fallback;
/* istanbul ignore next */

var iCancel = root.cancelAnimationFrame || root.clearTimeout;
function raf(fn) {
  return iRaf.call(root, fn);
} // double raf for animation

function doubleRaf(fn) {
  raf(function () {
    raf(fn);
  });
}
function cancelRaf(id) {
  iCancel.call(root, id);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("e41f")))

/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "61d3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: C:/Users/wubingyu/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("98c7")
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6ca89b2e-vue-loader-template"}!C:/Users/wubingyu/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../@v2-components/v2-mobile-input/index.vue?vue&type=template&id=47cdd741&
var v2_mobile_inputvue_type_template_id_47cdd741_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('van-cell-group',{class:_vm.widgetClass,style:(_vm.model.commonStyle)},[_c('van-field',{attrs:{"placeholder":_vm.model.placeholder,"label":_vm.model.label,"disabled":_vm.model.disabled,"required":_vm.model.required,"readonly":_vm.model.readonly},model:{value:(_vm.model.value),callback:function ($$v) {_vm.$set(_vm.model, "value", $$v)},expression:"model.value"}},[(_vm.model.button)?_c('van-button',{attrs:{"slot":"button","size":_vm.model.buttonSize,"type":_vm.model.buttonType},slot:"button"},[_vm._v(_vm._s(_vm.model.buttonText))]):_vm._e()],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ../@v2-components/v2-mobile-input/index.vue?vue&type=template&id=47cdd741&

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}
// EXTERNAL MODULE: ./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js
var helper = __webpack_require__("2638");
var helper_default = /*#__PURE__*/__webpack_require__.n(helper);

// EXTERNAL MODULE: ./node_modules/vant/es/utils/create/index.js + 4 modules
var create = __webpack_require__("d282");

// CONCATENATED MODULE: ./node_modules/vant/es/utils/functional.js


var inheritKey = ['ref', 'style', 'class', 'attrs', 'nativeOn', 'directives', 'staticClass', 'staticStyle'];
var mapInheritKey = {
  nativeOn: 'on'
}; // inherit partial context, map nativeOn to on

function inherit(context, inheritListeners) {
  var result = inheritKey.reduce(function (obj, key) {
    if (context.data[key]) {
      obj[mapInheritKey[key] || key] = context.data[key];
    }

    return obj;
  }, {});

  if (inheritListeners) {
    result.on = result.on || {};

    _extends(result.on, context.data.on);
  }

  return result;
} // emit event

function emit(context, eventName) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var listeners = context.listeners[eventName];

  if (listeners) {
    if (Array.isArray(listeners)) {
      listeners.forEach(function (listener) {
        listener.apply(void 0, args);
      });
    } else {
      listeners.apply(void 0, args);
    }
  }
} // mount functional component

function mount(Component, data) {
  var instance = new external_commonjs_vue_commonjs2_vue_root_Vue_default.a({
    el: document.createElement('div'),
    props: Component.props,
    render: function render(h) {
      return h(Component, _extends({
        props: this.$props
      }, data));
    }
  });
  document.body.appendChild(instance.$el);
  return instance;
}
// CONCATENATED MODULE: ./node_modules/vant/es/mixins/popup/context.js
var context_context = {
  zIndex: 2000,
  lockCount: 0,
  stack: [],

  get top() {
    return this.stack[this.stack.length - 1];
  }

};
// CONCATENATED MODULE: ./node_modules/vant/es/mixins/touch.js

var MIN_DISTANCE = 10;

function getDirection(x, y) {
  if (x > y && x > MIN_DISTANCE) {
    return 'horizontal';
  }

  if (y > x && y > MIN_DISTANCE) {
    return 'vertical';
  }

  return '';
}

var TouchMixin = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
  data: function data() {
    return {
      direction: ''
    };
  },
  methods: {
    touchStart: function touchStart(event) {
      this.resetTouchStatus();
      this.startX = event.touches[0].clientX;
      this.startY = event.touches[0].clientY;
    },
    touchMove: function touchMove(event) {
      var touch = event.touches[0];
      this.deltaX = touch.clientX - this.startX;
      this.deltaY = touch.clientY - this.startY;
      this.offsetX = Math.abs(this.deltaX);
      this.offsetY = Math.abs(this.deltaY);
      this.direction = this.direction || getDirection(this.offsetX, this.offsetY);
    },
    resetTouchStatus: function resetTouchStatus() {
      this.direction = '';
      this.deltaX = 0;
      this.deltaY = 0;
      this.offsetX = 0;
      this.offsetY = 0;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vant/es/mixins/portal.js


function getElement(selector) {
  if (typeof selector === 'string') {
    return document.querySelector(selector);
  }

  return selector();
}

function PortalMixin(_ref) {
  var afterPortal = _ref.afterPortal;
  return external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
    props: {
      getContainer: [String, Function]
    },
    watch: {
      getContainer: function getContainer() {
        this.portal();
      }
    },
    mounted: function mounted() {
      if (this.getContainer) {
        this.portal();
      }
    },
    methods: {
      portal: function portal() {
        var getContainer = this.getContainer;
        var container;

        if (getContainer) {
          container = getElement(getContainer);
        } else if (this.$parent) {
          container = this.$parent.$el;
        }

        if (container && container !== this.$el.parentNode) {
          container.appendChild(this.$el);
        }

        if (afterPortal) {
          afterPortal.call(this);
        }
      }
    }
  });
}
// EXTERNAL MODULE: ./node_modules/vant/es/utils/index.js
var utils = __webpack_require__("a142");

// CONCATENATED MODULE: ./node_modules/vant/es/utils/dom/event.js
/* eslint-disable no-empty */

/* eslint-disable getter-return */

/* eslint-disable import/no-mutable-exports */

var supportsPassive = false;

if (!utils["d" /* isServer */]) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', {
      get: function get() {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    });
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

function event_on(target, event, handler, passive) {
  if (passive === void 0) {
    passive = false;
  }

  if (!utils["d" /* isServer */]) {
    target.addEventListener(event, handler, supportsPassive ? {
      capture: false,
      passive: passive
    } : false);
  }
}
function off(target, event, handler) {
  if (!utils["d" /* isServer */]) {
    target.removeEventListener(event, handler);
  }
}
function event_stopPropagation(event) {
  event.stopPropagation();
}
function preventDefault(event, isStopPropagation) {
  /* istanbul ignore else */
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault();
  }

  if (isStopPropagation) {
    event_stopPropagation(event);
  }
}
// CONCATENATED MODULE: ./node_modules/vant/es/overlay/index.js




 // Types

var _createNamespace = Object(create["a" /* createNamespace */])('overlay'),
    createComponent = _createNamespace[0],
    overlay_bem = _createNamespace[1];

function preventTouchMove(event) {
  preventDefault(event, true);
}

function Overlay(h, props, slots, ctx) {
  var style = _extends({
    zIndex: props.zIndex
  }, props.customStyle);

  if (Object(utils["b" /* isDef */])(props.duration)) {
    style.animationDuration = props.duration + "s";
  }

  return h("transition", {
    "attrs": {
      "name": "van-fade"
    }
  }, [h("div", helper_default()([{
    "directives": [{
      name: "show",
      value: props.show
    }],
    "style": style,
    "class": [overlay_bem(), props.className],
    "on": {
      "touchmove": preventTouchMove
    }
  }, inherit(ctx, true)]))]);
}

Overlay.props = {
  show: Boolean,
  duration: [Number, String],
  className: null,
  customStyle: null,
  zIndex: {
    type: [Number, String],
    default: 1
  }
};
/* harmony default export */ var es_overlay = (createComponent(Overlay));
// CONCATENATED MODULE: ./node_modules/vant/es/mixins/popup/overlay.js




var defaultConfig = {
  className: '',
  customStyle: {}
};
var overlay_overlay; // close popup when click overlay && closeOnClickOverlay is true

function onClickOverlay() {
  if (context_context.top) {
    var vm = context_context.top.vm;
    vm.$emit('click-overlay');

    if (vm.closeOnClickOverlay) {
      if (vm.onClickOverlay) {
        vm.onClickOverlay();
      } else {
        vm.close();
      }
    }
  }
}

function updateOverlay() {
  if (!overlay_overlay) {
    overlay_overlay = mount(es_overlay, {
      on: {
        click: onClickOverlay
      }
    });
  }

  if (context_context.top) {
    var _context$top = context_context.top,
        vm = _context$top.vm,
        config = _context$top.config;
    var el = vm.$el;

    if (el && el.parentNode) {
      el.parentNode.insertBefore(overlay_overlay.$el, el);
    } else {
      document.body.appendChild(overlay_overlay.$el);
    }

    _extends(overlay_overlay, defaultConfig, config, {
      show: true
    });
  } else {
    overlay_overlay.show = false;
  }
}
function openOverlay(vm, config) {
  if (!context_context.stack.some(function (item) {
    return item.vm === vm;
  })) {
    context_context.stack.push({
      vm: vm,
      config: config
    });
    updateOverlay();
  }
}
function closeOverlay(vm) {
  var stack = context_context.stack;

  if (stack.length) {
    if (context_context.top.vm === vm) {
      stack.pop();
      updateOverlay();
    } else {
      context_context.stack = stack.filter(function (item) {
        return item.vm !== vm;
      });
    }
  }
}
// CONCATENATED MODULE: ./node_modules/vant/es/utils/dom/scroll.js
// get nearest scroll element
// http://w3help.org/zh-cn/causes/SD9013
// http://stackoverflow.com/questions/17016740/onscroll-function-is-not-working-for-chrome
var overflowScrollReg = /scroll|auto/i;
function getScrollEventTarget(element, rootParent) {
  if (rootParent === void 0) {
    rootParent = window;
  }

  var node = element;

  while (node && node.tagName !== 'HTML' && node.nodeType === 1 && node !== rootParent) {
    var _window$getComputedSt = window.getComputedStyle(node),
        overflowY = _window$getComputedSt.overflowY;

    if (overflowScrollReg.test(overflowY)) {
      if (node.tagName !== 'BODY') {
        return node;
      } // see: https://github.com/youzan/vant/issues/3823


      var _window$getComputedSt2 = window.getComputedStyle(node.parentNode),
          htmlOverflowY = _window$getComputedSt2.overflowY;

      if (overflowScrollReg.test(htmlOverflowY)) {
        return node;
      }
    }

    node = node.parentNode;
  }

  return rootParent;
}
function getScrollTop(element) {
  return 'scrollTop' in element ? element.scrollTop : element.pageYOffset;
}
function setScrollTop(element, value) {
  'scrollTop' in element ? element.scrollTop = value : element.scrollTo(element.scrollX, value);
}
function getRootScrollTop() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}
function setRootScrollTop(value) {
  setScrollTop(window, value);
  setScrollTop(document.body, value);
} // get distance from element top to page top

function getElementTop(element) {
  return (element === window ? 0 : element.getBoundingClientRect().top) + getRootScrollTop();
}
function getVisibleHeight(element) {
  return element === window ? element.innerHeight : element.getBoundingClientRect().height;
}
// CONCATENATED MODULE: ./node_modules/vant/es/mixins/popup/index.js






var PopupMixin = {
  mixins: [TouchMixin, PortalMixin({
    afterPortal: function afterPortal() {
      if (this.overlay) {
        updateOverlay();
      }
    }
  })],
  props: {
    // whether to show popup
    value: Boolean,
    // whether to show overlay
    overlay: Boolean,
    // overlay custom style
    overlayStyle: Object,
    // overlay custom class name
    overlayClass: String,
    // whether to close popup when click overlay
    closeOnClickOverlay: Boolean,
    // z-index
    zIndex: [Number, String],
    // prevent body scroll
    lockScroll: {
      type: Boolean,
      default: true
    },
    // whether to lazy render
    lazyRender: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      inited: this.value
    };
  },
  computed: {
    shouldRender: function shouldRender() {
      return this.inited || !this.lazyRender;
    }
  },
  watch: {
    value: function value(val) {
      var type = val ? 'open' : 'close';
      this.inited = this.inited || this.value;
      this[type]();
      this.$emit(type);
    },
    overlay: function overlay() {
      this.renderOverlay();
    }
  },
  mounted: function mounted() {
    if (this.value) {
      this.open();
    }
  },

  /* istanbul ignore next */
  activated: function activated() {
    if (this.value) {
      this.open();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.close();

    if (this.getContainer && this.$parent && this.$parent.$el) {
      this.$parent.$el.appendChild(this.$el);
    }
  },

  /* istanbul ignore next */
  deactivated: function deactivated() {
    this.close();
  },
  methods: {
    open: function open() {
      /* istanbul ignore next */
      if (this.$isServer || this.opened) {
        return;
      } // cover default zIndex


      if (this.zIndex !== undefined) {
        context_context.zIndex = this.zIndex;
      }

      this.opened = true;
      this.renderOverlay();

      if (this.lockScroll) {
        event_on(document, 'touchstart', this.touchStart);
        event_on(document, 'touchmove', this.onTouchMove);

        if (!context_context.lockCount) {
          document.body.classList.add('van-overflow-hidden');
        }

        context_context.lockCount++;
      }
    },
    close: function close() {
      if (!this.opened) {
        return;
      }

      if (this.lockScroll) {
        context_context.lockCount--;
        off(document, 'touchstart', this.touchStart);
        off(document, 'touchmove', this.onTouchMove);

        if (!context_context.lockCount) {
          document.body.classList.remove('van-overflow-hidden');
        }
      }

      this.opened = false;
      closeOverlay(this);
      this.$emit('input', false);
    },
    onTouchMove: function onTouchMove(event) {
      this.touchMove(event);
      var direction = this.deltaY > 0 ? '10' : '01';
      var el = getScrollEventTarget(event.target, this.$el);
      var scrollHeight = el.scrollHeight,
          offsetHeight = el.offsetHeight,
          scrollTop = el.scrollTop;
      var status = '11';
      /* istanbul ignore next */

      if (scrollTop === 0) {
        status = offsetHeight >= scrollHeight ? '00' : '01';
      } else if (scrollTop + offsetHeight >= scrollHeight) {
        status = '10';
      }
      /* istanbul ignore next */


      if (status !== '11' && this.direction === 'vertical' && !(parseInt(status, 2) & parseInt(direction, 2))) {
        preventDefault(event, true);
      }
    },
    renderOverlay: function renderOverlay() {
      var _this = this;

      if (this.$isServer || !this.value) {
        return;
      }

      this.$nextTick(function () {
        _this.updateZIndex(_this.overlay ? 1 : 0);

        if (_this.overlay) {
          openOverlay(_this, {
            zIndex: context_context.zIndex++,
            duration: _this.duration,
            className: _this.overlayClass,
            customStyle: _this.overlayStyle
          });
        } else {
          closeOverlay(_this);
        }
      });
    },
    updateZIndex: function updateZIndex(value) {
      if (value === void 0) {
        value = 0;
      }

      this.$el.style.zIndex = ++context_context.zIndex + value;
    }
  }
};
// EXTERNAL MODULE: ./node_modules/vant/es/utils/format/unit.js
var unit = __webpack_require__("ea8e");

// CONCATENATED MODULE: ./node_modules/vant/es/info/index.js


 // Types

var info_createNamespace = Object(create["a" /* createNamespace */])('info'),
    info_createComponent = info_createNamespace[0],
    info_bem = info_createNamespace[1];

function info_Info(h, props, slots, ctx) {
  if (!Object(utils["b" /* isDef */])(props.info) || props.info === '') {
    return;
  }

  return h("div", helper_default()([{
    "class": info_bem()
  }, inherit(ctx, true)]), [props.info]);
}

info_Info.props = {
  info: [Number, String]
};
/* harmony default export */ var es_info = (info_createComponent(info_Info));
// CONCATENATED MODULE: ./node_modules/vant/es/image/index.js





var image_createNamespace = Object(create["a" /* createNamespace */])('image'),
    image_createComponent = image_createNamespace[0],
    image_bem = image_createNamespace[1];

/* harmony default export */ var es_image = (image_createComponent({
  props: {
    src: String,
    fit: String,
    alt: String,
    round: Boolean,
    width: [Number, String],
    height: [Number, String],
    lazyLoad: Boolean,
    showError: {
      type: Boolean,
      default: true
    },
    showLoading: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      loading: true,
      error: false
    };
  },
  watch: {
    src: function src() {
      this.loading = true;
      this.error = false;
    }
  },
  computed: {
    style: function style() {
      var style = {};

      if (Object(utils["b" /* isDef */])(this.width)) {
        style.width = Object(unit["a" /* addUnit */])(this.width);
      }

      if (Object(utils["b" /* isDef */])(this.height)) {
        style.height = Object(unit["a" /* addUnit */])(this.height);
      }

      return style;
    }
  },
  created: function created() {
    var $Lazyload = this.$Lazyload;

    if ($Lazyload) {
      $Lazyload.$on('loaded', this.onLazyLoaded);
      $Lazyload.$on('error', this.onLazyLoadError);
    }
  },
  beforeDestroy: function beforeDestroy() {
    var $Lazyload = this.$Lazyload;

    if ($Lazyload) {
      $Lazyload.$off('loaded', this.onLazyLoaded);
      $Lazyload.$off('error', this.onLazyLoadError);
    }
  },
  methods: {
    onLoad: function onLoad(event) {
      this.loading = false;
      this.$emit('load', event);
    },
    onLazyLoaded: function onLazyLoaded(_ref) {
      var el = _ref.el;

      if (el === this.$refs.image && this.loading) {
        this.onLoad();
      }
    },
    onLazyLoadError: function onLazyLoadError(_ref2) {
      var el = _ref2.el;

      if (el === this.$refs.image && !this.error) {
        this.onError();
      }
    },
    onError: function onError(event) {
      this.error = true;
      this.loading = false;
      this.$emit('error', event);
    },
    onClick: function onClick(event) {
      this.$emit('click', event);
    },
    renderPlaceholder: function renderPlaceholder() {
      var h = this.$createElement;

      if (this.loading && this.showLoading) {
        return h("div", {
          "class": image_bem('loading')
        }, [this.slots('loading') || h(es_icon, {
          "attrs": {
            "name": "photo-o",
            "size": "22"
          }
        })]);
      }

      if (this.error && this.showError) {
        return h("div", {
          "class": image_bem('error')
        }, [this.slots('error') || h(es_icon, {
          "attrs": {
            "name": "warning-o",
            "size": "22"
          }
        })]);
      }
    },
    renderImage: function renderImage() {
      var h = this.$createElement;
      var imgData = {
        class: image_bem('img'),
        attrs: {
          alt: this.alt
        },
        style: {
          objectFit: this.fit
        }
      };

      if (this.error) {
        return;
      }

      if (this.lazyLoad) {
        return h("img", helper_default()([{
          "ref": "image",
          "directives": [{
            name: "lazy",
            value: this.src
          }]
        }, imgData]));
      }

      return h("img", helper_default()([{
        "attrs": {
          "src": this.src
        },
        "on": {
          "load": this.onLoad,
          "error": this.onError
        }
      }, imgData]));
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": image_bem({
        round: this.round
      }),
      "style": this.style,
      "on": {
        "click": this.onClick
      }
    }, [this.renderImage(), this.renderPlaceholder()]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/icon/index.js




 // Types

var icon_createNamespace = Object(create["a" /* createNamespace */])('icon'),
    icon_createComponent = icon_createNamespace[0],
    icon_bem = icon_createNamespace[1];

function isImage(name) {
  return name ? name.indexOf('/') !== -1 : false;
}

function Icon(h, props, slots, ctx) {
  var imageIcon = isImage(props.name);
  return h(props.tag, helper_default()([{
    "class": [props.classPrefix, imageIcon ? '' : props.classPrefix + "-" + props.name],
    "style": {
      color: props.color,
      fontSize: Object(unit["a" /* addUnit */])(props.size)
    }
  }, inherit(ctx, true)]), [slots.default && slots.default(), imageIcon && h(es_image, {
    "class": icon_bem('image'),
    "attrs": {
      "fit": "contain",
      "src": props.name,
      "showLoading": false
    }
  }), h(es_info, {
    "attrs": {
      "info": props.info
    }
  })]);
}

Icon.props = {
  name: String,
  size: [Number, String],
  info: [Number, String],
  color: String,
  tag: {
    type: String,
    default: 'i'
  },
  classPrefix: {
    type: String,
    default: icon_bem()
  }
};
/* harmony default export */ var es_icon = (icon_createComponent(Icon));
// CONCATENATED MODULE: ./node_modules/vant/es/popup/index.js



var popup_createNamespace = Object(create["a" /* createNamespace */])('popup'),
    popup_createComponent = popup_createNamespace[0],
    popup_bem = popup_createNamespace[1];

/* harmony default export */ var popup = (popup_createComponent({
  mixins: [PopupMixin],
  props: {
    round: Boolean,
    duration: Number,
    transition: String,
    position: {
      type: String,
      default: 'center'
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },
  beforeCreate: function beforeCreate() {
    var _this = this;

    var createEmitter = function createEmitter(eventName) {
      return function (event) {
        return _this.$emit(eventName, event);
      };
    };

    this.onClick = createEmitter('click');
    this.onOpened = createEmitter('opened');
    this.onClosed = createEmitter('closed');
  },
  render: function render() {
    var _bem;

    var h = arguments[0];

    if (!this.shouldRender) {
      return;
    }

    var round = this.round,
        position = this.position,
        duration = this.duration;
    var transitionName = this.transition || (position === 'center' ? 'van-fade' : "van-popup-slide-" + position);
    var style = {};

    if (Object(utils["b" /* isDef */])(duration)) {
      style.transitionDuration = duration + "s";
    }

    return h("transition", {
      "attrs": {
        "name": transitionName
      },
      "on": {
        "afterEnter": this.onOpened,
        "afterLeave": this.onClosed
      }
    }, [h("div", {
      "directives": [{
        name: "show",
        value: this.value
      }],
      "style": style,
      "class": popup_bem((_bem = {
        round: round
      }, _bem[position] = position, _bem)),
      "on": {
        "click": this.onClick
      }
    }, [this.slots()])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/utils/color.js
var RED = '#f44';
var BLUE = '#1989fa';
var GREEN = '#07c160';
var WHITE = '#fff';
var GRAY = '#c9c9c9';
var GRAY_DARK = '#969799';
// CONCATENATED MODULE: ./node_modules/vant/es/loading/index.js



 // Types

var loading_createNamespace = Object(create["a" /* createNamespace */])('loading'),
    loading_createComponent = loading_createNamespace[0],
    loading_bem = loading_createNamespace[1];

function LoadingIcon(h, props) {
  if (props.type === 'spinner') {
    var Spin = [];

    for (var i = 0; i < 12; i++) {
      Spin.push(h("i"));
    }

    return Spin;
  }

  return h("svg", {
    "class": loading_bem('circular'),
    "attrs": {
      "viewBox": "25 25 50 50"
    }
  }, [h("circle", {
    "attrs": {
      "cx": "50",
      "cy": "50",
      "r": "20",
      "fill": "none"
    }
  })]);
}

function LoadingText(h, props, slots) {
  if (slots.default) {
    var style = props.textSize && {
      fontSize: Object(unit["a" /* addUnit */])(props.textSize)
    };
    return h("span", {
      "class": loading_bem('text'),
      "style": style
    }, [slots.default()]);
  }
}

function Loading(h, props, slots, ctx) {
  var color = props.color,
      size = props.size,
      type = props.type;
  var style = {
    color: color
  };

  if (size) {
    var iconSize = Object(unit["a" /* addUnit */])(size);
    style.width = iconSize;
    style.height = iconSize;
  }

  return h("div", helper_default()([{
    "class": loading_bem([type, {
      vertical: props.vertical
    }])
  }, inherit(ctx, true)]), [h("span", {
    "class": loading_bem('spinner', type),
    "style": style
  }, [LoadingIcon(h, props)]), LoadingText(h, props, slots)]);
}

Loading.props = {
  size: [Number, String],
  vertical: Boolean,
  textSize: [Number, String],
  type: {
    type: String,
    default: 'circular'
  },
  color: {
    type: String,
    default: GRAY
  }
};
/* harmony default export */ var es_loading = (loading_createComponent(Loading));
// CONCATENATED MODULE: ./node_modules/vant/es/action-sheet/index.js







 // Types

var action_sheet_createNamespace = Object(create["a" /* createNamespace */])('action-sheet'),
    action_sheet_createComponent = action_sheet_createNamespace[0],
    action_sheet_bem = action_sheet_createNamespace[1];

function ActionSheet(h, props, slots, ctx) {
  var title = props.title,
      cancelText = props.cancelText;

  function onCancel() {
    emit(ctx, 'input', false);
    emit(ctx, 'cancel');
  }

  function Header() {
    if (title) {
      return h("div", {
        "class": [action_sheet_bem('header'), 'van-hairline--bottom']
      }, [title, h(es_icon, {
        "attrs": {
          "name": "close"
        },
        "class": action_sheet_bem('close'),
        "on": {
          "click": onCancel
        }
      })]);
    }
  }

  function Content() {
    if (slots.default) {
      return h("div", {
        "class": action_sheet_bem('content')
      }, [slots.default()]);
    }
  }

  function Option(item, index) {
    var disabled = item.disabled || item.loading;

    function onClickOption(event) {
      event.stopPropagation();

      if (item.disabled || item.loading) {
        return;
      }

      if (item.callback) {
        item.callback(item);
      }

      emit(ctx, 'select', item, index);

      if (props.closeOnClickAction) {
        emit(ctx, 'input', false);
      }
    }

    function OptionContent() {
      if (item.loading) {
        return h(es_loading, {
          "attrs": {
            "size": "20px"
          }
        });
      }

      return [h("span", {
        "class": action_sheet_bem('name')
      }, [item.name]), item.subname && h("span", {
        "class": action_sheet_bem('subname')
      }, [item.subname])];
    }

    return h("div", {
      "class": [action_sheet_bem('item', {
        disabled: disabled
      }), item.className, 'van-hairline--top'],
      "on": {
        "click": onClickOption
      }
    }, [OptionContent()]);
  }

  function CancelText() {
    if (cancelText) {
      return h("div", {
        "class": action_sheet_bem('cancel'),
        "on": {
          "click": onCancel
        }
      }, [cancelText]);
    }
  }

  return h(popup, helper_default()([{
    "class": action_sheet_bem({
      'safe-area-inset-bottom': props.safeAreaInsetBottom
    }),
    "attrs": {
      "position": "bottom",
      "round": props.round,
      "value": props.value,
      "overlay": props.overlay,
      "duration": props.duration,
      "lazyRender": props.lazyRender,
      "lockScroll": props.lockScroll,
      "getContainer": props.getContainer,
      "closeOnClickOverlay": props.closeOnClickOverlay
    }
  }, inherit(ctx, true)]), [Header(), props.actions && props.actions.map(Option), Content(), CancelText()]);
}

ActionSheet.props = _extends({}, PopupMixin.props, {
  title: String,
  round: Boolean,
  actions: Array,
  duration: Number,
  cancelText: String,
  getContainer: [String, Function],
  closeOnClickAction: Boolean,
  safeAreaInsetBottom: Boolean,
  overlay: {
    type: Boolean,
    default: true
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: true
  }
});
/* harmony default export */ var action_sheet = (action_sheet_createComponent(ActionSheet));
// CONCATENATED MODULE: ./node_modules/vant/es/utils/validate/mobile.js
function isMobile(value) {
  value = value.replace(/[^-|\d]/g, '');
  return /^((\+86)|(86))?(1)\d{10}$/.test(value) || /^0[0-9-]{10,13}$/.test(value);
}
// EXTERNAL MODULE: ./node_modules/vant/es/utils/deep-assign.js
var deep_assign = __webpack_require__("1128");

// CONCATENATED MODULE: ./node_modules/vant/es/utils/deep-clone.js

function deepClone(obj) {
  if (Array.isArray(obj)) {
    return obj.map(function (item) {
      return deepClone(item);
    });
  }

  if (typeof obj === 'object') {
    return Object(deep_assign["a" /* deepAssign */])({}, obj);
  }

  return obj;
}
// CONCATENATED MODULE: ./node_modules/vant/es/picker/shared.js
var pickerProps = {
  title: String,
  loading: Boolean,
  showToolbar: Boolean,
  cancelButtonText: String,
  confirmButtonText: String,
  visibleItemCount: {
    type: Number,
    default: 5
  },
  itemHeight: {
    type: Number,
    default: 44
  }
};
// CONCATENATED MODULE: ./node_modules/vant/es/utils/format/number.js
function range(num, min, max) {
  return Math.min(Math.max(num, min), max);
}
// CONCATENATED MODULE: ./node_modules/vant/es/picker/PickerColumn.js





var DEFAULT_DURATION = 200; // 惯性滑动思路:
// 在手指离开屏幕时，如果和上一次 move 时的间隔小于 `MOMENTUM_LIMIT_TIME` 且 move
// 距离大于 `MOMENTUM_LIMIT_DISTANCE` 时，执行惯性滑动，持续 `MOMENTUM_DURATION`

var MOMENTUM_DURATION = 1000;
var MOMENTUM_LIMIT_TIME = 300;
var MOMENTUM_LIMIT_DISTANCE = 15;

var PickerColumn_createNamespace = Object(create["a" /* createNamespace */])('picker-column'),
    PickerColumn_createComponent = PickerColumn_createNamespace[0],
    PickerColumn_bem = PickerColumn_createNamespace[1];

function getElementTranslateY(element) {
  var style = window.getComputedStyle(element);
  var transform = style.transform || style.webkitTransform;
  var translateY = transform.slice(7, transform.length - 1).split(', ')[5];
  return Number(translateY);
}

function isOptionDisabled(option) {
  return Object(utils["c" /* isObj */])(option) && option.disabled;
}

/* harmony default export */ var PickerColumn = (PickerColumn_createComponent({
  mixins: [TouchMixin],
  props: {
    valueKey: String,
    className: String,
    itemHeight: Number,
    defaultIndex: Number,
    visibleItemCount: Number,
    initialOptions: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      offset: 0,
      duration: 0,
      options: deepClone(this.initialOptions),
      currentIndex: this.defaultIndex
    };
  },
  created: function created() {
    if (this.$parent.children) {
      this.$parent.children.push(this);
    }

    this.setIndex(this.currentIndex);
  },
  destroyed: function destroyed() {
    var children = this.$parent.children;

    if (children) {
      children.splice(children.indexOf(this), 1);
    }
  },
  watch: {
    defaultIndex: function defaultIndex() {
      this.setIndex(this.defaultIndex);
    }
  },
  computed: {
    count: function count() {
      return this.options.length;
    }
  },
  methods: {
    onTouchStart: function onTouchStart(event) {
      this.touchStart(event);

      if (this.moving) {
        var translateY = getElementTranslateY(this.$refs.wrapper);
        this.startOffset = Math.min(0, translateY);
      } else {
        this.startOffset = this.offset;
      }

      this.duration = 0;
      this.moving = false;
      this.transitionEndTrigger = null;
      this.touchStartTime = Date.now();
      this.momentumOffset = this.startOffset;
    },
    onTouchMove: function onTouchMove(event) {
      preventDefault(event);
      this.moving = true;
      this.touchMove(event);
      this.offset = range(this.startOffset + this.deltaY, -(this.count * this.itemHeight), this.itemHeight);
      var now = Date.now();

      if (now - this.touchStartTime > MOMENTUM_LIMIT_TIME) {
        this.touchStartTime = now;
        this.momentumOffset = this.offset;
      }
    },
    onTouchEnd: function onTouchEnd() {
      var distance = this.offset - this.momentumOffset;
      var duration = Date.now() - this.touchStartTime;
      var allowMomentum = duration < MOMENTUM_LIMIT_TIME && Math.abs(distance) > MOMENTUM_LIMIT_DISTANCE;

      if (allowMomentum) {
        this.momentum(distance, duration);
        return;
      }

      if (this.offset !== this.startOffset) {
        this.duration = DEFAULT_DURATION;
        var index = this.getIndexByOffset(this.offset);
        this.setIndex(index, true);
      }
    },
    onTransitionEnd: function onTransitionEnd() {
      this.stopMomentum();
    },
    onClickItem: function onClickItem(index) {
      this.duration = DEFAULT_DURATION;
      this.setIndex(index, true);
    },
    adjustIndex: function adjustIndex(index) {
      index = range(index, 0, this.count);

      for (var i = index; i < this.count; i++) {
        if (!isOptionDisabled(this.options[i])) return i;
      }

      for (var _i = index - 1; _i >= 0; _i--) {
        if (!isOptionDisabled(this.options[_i])) return _i;
      }
    },
    getOptionText: function getOptionText(option) {
      return Object(utils["c" /* isObj */])(option) && this.valueKey in option ? option[this.valueKey] : option;
    },
    setIndex: function setIndex(index, userAction) {
      var _this = this;

      index = this.adjustIndex(index) || 0;
      this.offset = -index * this.itemHeight;

      var trigger = function trigger() {
        if (index !== _this.currentIndex) {
          _this.currentIndex = index;

          if (userAction) {
            _this.$emit('change', index);
          }
        }
      }; // 若有触发过 `touchmove` 事件，那应该
      // 在 `transitionend` 后再触发 `change` 事件


      if (this.moving) {
        this.transitionEndTrigger = trigger;
      } else {
        trigger();
      }
    },
    setValue: function setValue(value) {
      var options = this.options;

      for (var i = 0; i < options.length; i++) {
        if (this.getOptionText(options[i]) === value) {
          return this.setIndex(i);
        }
      }
    },
    getValue: function getValue() {
      return this.options[this.currentIndex];
    },
    getIndexByOffset: function getIndexByOffset(offset) {
      return range(Math.round(-offset / this.itemHeight), 0, this.count - 1);
    },
    momentum: function momentum(distance, duration) {
      var speed = Math.abs(distance / duration);
      distance = this.offset + speed / 0.002 * (distance < 0 ? -1 : 1);
      var index = this.getIndexByOffset(distance);
      this.duration = MOMENTUM_DURATION;
      this.setIndex(index, true);
    },
    stopMomentum: function stopMomentum() {
      this.moving = false;
      this.duration = 0;

      if (this.transitionEndTrigger) {
        this.transitionEndTrigger();
        this.transitionEndTrigger = null;
      }
    }
  },
  render: function render() {
    var _this2 = this;

    var h = arguments[0];
    var itemHeight = this.itemHeight,
        visibleItemCount = this.visibleItemCount;
    var baseOffset = itemHeight * (visibleItemCount - 1) / 2;
    var wrapperStyle = {
      transform: "translate3d(0, " + (this.offset + baseOffset) + "px, 0)",
      transitionDuration: this.duration + "ms",
      transitionProperty: this.duration ? 'all' : 'none',
      lineHeight: itemHeight + "px"
    };
    var optionStyle = {
      height: itemHeight + "px"
    };
    return h("div", {
      "class": [PickerColumn_bem(), this.className],
      "on": {
        "touchstart": this.onTouchStart,
        "touchmove": this.onTouchMove,
        "touchend": this.onTouchEnd,
        "touchcancel": this.onTouchEnd
      }
    }, [h("ul", {
      "ref": "wrapper",
      "style": wrapperStyle,
      "class": PickerColumn_bem('wrapper'),
      "on": {
        "transitionend": this.onTransitionEnd
      }
    }, [this.options.map(function (option, index) {
      return h("li", {
        "style": optionStyle,
        "class": ['van-ellipsis', PickerColumn_bem('item', {
          disabled: isOptionDisabled(option),
          selected: index === _this2.currentIndex
        })],
        "domProps": {
          "innerHTML": _this2.getOptionText(option)
        },
        "on": {
          "click": function click() {
            _this2.onClickItem(index);
          }
        }
      });
    })])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/picker/index.js









var picker_createNamespace = Object(create["a" /* createNamespace */])('picker'),
    picker_createComponent = picker_createNamespace[0],
    picker_bem = picker_createNamespace[1],
    t = picker_createNamespace[2];

/* harmony default export */ var es_picker = (picker_createComponent({
  props: _extends({}, pickerProps, {
    defaultIndex: {
      type: Number,
      default: 0
    },
    columns: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    toolbarPosition: {
      type: String,
      default: 'top'
    },
    valueKey: {
      type: String,
      default: 'text'
    }
  }),
  data: function data() {
    return {
      children: []
    };
  },
  computed: {
    simple: function simple() {
      return this.columns.length && !this.columns[0].values;
    }
  },
  watch: {
    columns: function columns() {
      this.setColumns();
    }
  },
  methods: {
    setColumns: function setColumns() {
      var _this = this;

      var columns = this.simple ? [{
        values: this.columns
      }] : this.columns;
      columns.forEach(function (column, index) {
        _this.setColumnValues(index, deepClone(column.values));
      });
    },
    emit: function emit(event) {
      if (this.simple) {
        this.$emit(event, this.getColumnValue(0), this.getColumnIndex(0));
      } else {
        this.$emit(event, this.getValues(), this.getIndexes());
      }
    },
    onChange: function onChange(columnIndex) {
      if (this.simple) {
        this.$emit('change', this, this.getColumnValue(0), this.getColumnIndex(0));
      } else {
        this.$emit('change', this, this.getValues(), columnIndex);
      }
    },
    // get column instance by index
    getColumn: function getColumn(index) {
      return this.children[index];
    },
    // get column value by index
    getColumnValue: function getColumnValue(index) {
      var column = this.getColumn(index);
      return column && column.getValue();
    },
    // set column value by index
    setColumnValue: function setColumnValue(index, value) {
      var column = this.getColumn(index);
      column && column.setValue(value);
    },
    // get column option index by column index
    getColumnIndex: function getColumnIndex(columnIndex) {
      return (this.getColumn(columnIndex) || {}).currentIndex;
    },
    // set column option index by column index
    setColumnIndex: function setColumnIndex(columnIndex, optionIndex) {
      var column = this.getColumn(columnIndex);
      column && column.setIndex(optionIndex);
    },
    // get options of column by index
    getColumnValues: function getColumnValues(index) {
      return (this.children[index] || {}).options;
    },
    // set options of column by index
    setColumnValues: function setColumnValues(index, options) {
      var column = this.children[index];

      if (column && JSON.stringify(column.options) !== JSON.stringify(options)) {
        column.options = options;
        column.setIndex(0);
      }
    },
    // get values of all columns
    getValues: function getValues() {
      return this.children.map(function (child) {
        return child.getValue();
      });
    },
    // set values of all columns
    setValues: function setValues(values) {
      var _this2 = this;

      values.forEach(function (value, index) {
        _this2.setColumnValue(index, value);
      });
    },
    // get indexes of all columns
    getIndexes: function getIndexes() {
      return this.children.map(function (child) {
        return child.currentIndex;
      });
    },
    // set indexes of all columns
    setIndexes: function setIndexes(indexes) {
      var _this3 = this;

      indexes.forEach(function (optionIndex, columnIndex) {
        _this3.setColumnIndex(columnIndex, optionIndex);
      });
    },
    onConfirm: function onConfirm() {
      this.children.map(function (child) {
        return child.stopMomentum();
      });
      this.emit('confirm');
    },
    onCancel: function onCancel() {
      this.emit('cancel');
    }
  },
  render: function render(h) {
    var _this4 = this;

    var itemHeight = this.itemHeight;
    var wrapHeight = itemHeight * this.visibleItemCount;
    var columns = this.simple ? [this.columns] : this.columns;
    var frameStyle = {
      height: itemHeight + "px"
    };
    var columnsStyle = {
      height: wrapHeight + "px"
    };
    var maskStyle = {
      backgroundSize: "100% " + (wrapHeight - itemHeight) / 2 + "px"
    };
    var Toolbar = this.showToolbar && h("div", {
      "class": ['van-hairline--top-bottom', picker_bem('toolbar')]
    }, [this.slots() || [h("div", {
      "attrs": {
        "role": "button",
        "tabindex": "0"
      },
      "class": picker_bem('cancel'),
      "on": {
        "click": this.onCancel
      }
    }, [this.cancelButtonText || t('cancel')]), this.slots('title') || this.title && h("div", {
      "class": ['van-ellipsis', picker_bem('title')]
    }, [this.title]), h("div", {
      "attrs": {
        "role": "button",
        "tabindex": "0"
      },
      "class": picker_bem('confirm'),
      "on": {
        "click": this.onConfirm
      }
    }, [this.confirmButtonText || t('confirm')])]]);
    return h("div", {
      "class": picker_bem()
    }, [this.toolbarPosition === 'top' ? Toolbar : h(), this.loading ? h(es_loading, {
      "class": picker_bem('loading'),
      "attrs": {
        "color": BLUE
      }
    }) : h(), h("div", {
      "class": picker_bem('columns'),
      "style": columnsStyle,
      "on": {
        "touchmove": preventDefault
      }
    }, [columns.map(function (item, index) {
      return h(PickerColumn, {
        "attrs": {
          "valueKey": _this4.valueKey,
          "className": item.className,
          "itemHeight": _this4.itemHeight,
          "defaultIndex": item.defaultIndex || _this4.defaultIndex,
          "visibleItemCount": _this4.visibleItemCount,
          "initialOptions": _this4.simple ? item : item.values
        },
        "on": {
          "change": function change() {
            _this4.onChange(index);
          }
        }
      });
    }), h("div", {
      "class": picker_bem('mask'),
      "style": maskStyle
    }), h("div", {
      "class": ['van-hairline--top-bottom', picker_bem('frame')],
      "style": frameStyle
    })]), this.toolbarPosition === 'bottom' ? Toolbar : h()]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/area/index.js





var area_createNamespace = Object(create["a" /* createNamespace */])('area'),
    area_createComponent = area_createNamespace[0],
    area_bem = area_createNamespace[1];

/* harmony default export */ var es_area = (area_createComponent({
  props: _extends({}, pickerProps, {
    value: String,
    areaList: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    columnsNum: {
      type: [Number, String],
      default: 3
    }
  }),
  data: function data() {
    return {
      code: this.value,
      columns: [{
        values: []
      }, {
        values: []
      }, {
        values: []
      }]
    };
  },
  computed: {
    province: function province() {
      return this.areaList.province_list || {};
    },
    city: function city() {
      return this.areaList.city_list || {};
    },
    county: function county() {
      return this.areaList.county_list || {};
    },
    displayColumns: function displayColumns() {
      return this.columns.slice(0, +this.columnsNum);
    }
  },
  watch: {
    value: function value() {
      this.code = this.value;
      this.setValues();
    },
    areaList: {
      deep: true,
      handler: function handler() {
        this.setValues();
      }
    },
    columnsNum: function columnsNum() {
      var _this = this;

      this.$nextTick(function () {
        _this.setValues();
      });
    }
  },
  mounted: function mounted() {
    this.setValues();
  },
  methods: {
    // get list by code
    getList: function getList(type, code) {
      var result = [];

      if (type !== 'province' && !code) {
        return result;
      }

      var list = this[type];
      result = Object.keys(list).map(function (listCode) {
        return {
          code: listCode,
          name: list[listCode]
        };
      });

      if (code) {
        // oversea code
        if (code[0] === '9' && type === 'city') {
          code = '9';
        }

        result = result.filter(function (item) {
          return item.code.indexOf(code) === 0;
        });
      }

      return result;
    },
    // get index by code
    getIndex: function getIndex(type, code) {
      var compareNum = type === 'province' ? 2 : type === 'city' ? 4 : 6;
      var list = this.getList(type, code.slice(0, compareNum - 2)); // oversea code

      if (code[0] === '9' && type === 'province') {
        compareNum = 1;
      }

      code = code.slice(0, compareNum);

      for (var i = 0; i < list.length; i++) {
        if (list[i].code.slice(0, compareNum) === code) {
          return i;
        }
      }

      return 0;
    },
    onChange: function onChange(picker, values, index) {
      this.code = values[index].code;
      this.setValues();
      this.$emit('change', picker, picker.getValues(), index);
    },
    setValues: function setValues() {
      var code = this.code || Object.keys(this.county)[0] || '';
      var picker = this.$refs.picker;
      var province = this.getList('province');
      var city = this.getList('city', code.slice(0, 2));

      if (!picker) {
        return;
      }

      picker.setColumnValues(0, province);
      picker.setColumnValues(1, city);

      if (city.length && code.slice(2, 4) === '00') {
        code = city[0].code;
      }

      picker.setColumnValues(2, this.getList('county', code.slice(0, 4)));
      picker.setIndexes([this.getIndex('province', code), this.getIndex('city', code), this.getIndex('county', code)]);
    },
    getValues: function getValues() {
      return this.$refs.picker ? this.$refs.picker.getValues().filter(function (value) {
        return !!value;
      }) : [];
    },
    getArea: function getArea() {
      var values = this.getValues();
      var area = {
        code: '',
        country: '',
        province: '',
        city: '',
        county: ''
      };

      if (!values.length) {
        return area;
      }

      var names = values.map(function (item) {
        return item.name;
      });
      area.code = values[values.length - 1].code;

      if (area.code[0] === '9') {
        area.country = names[1] || '';
        area.province = names[2] || '';
      } else {
        area.province = names[0] || '';
        area.city = names[1] || '';
        area.county = names[2] || '';
      }

      return area;
    },
    reset: function reset(code) {
      this.code = code || '';
      this.setValues();
    }
  },
  render: function render() {
    var h = arguments[0];

    var on = _extends({}, this.$listeners, {
      change: this.onChange
    });

    return h(es_picker, {
      "ref": "picker",
      "class": area_bem(),
      "attrs": {
        "showToolbar": true,
        "valueKey": "name",
        "title": this.title,
        "loading": this.loading,
        "columns": this.displayColumns,
        "itemHeight": this.itemHeight,
        "visibleItemCount": this.visibleItemCount,
        "cancelButtonText": this.cancelButtonText,
        "confirmButtonText": this.confirmButtonText
      },
      "on": _extends({}, on)
    });
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/cell/shared.js
var cellProps = {
  icon: String,
  size: String,
  center: Boolean,
  isLink: Boolean,
  required: Boolean,
  clickable: Boolean,
  titleStyle: null,
  titleClass: null,
  valueClass: null,
  labelClass: null,
  title: [Number, String],
  value: [Number, String],
  label: [Number, String],
  arrowDirection: String,
  border: {
    type: Boolean,
    default: true
  }
};
// CONCATENATED MODULE: ./node_modules/vant/es/utils/router.js
/**
 * Vue Router support
 */
function route(router, config) {
  var to = config.to,
      url = config.url,
      replace = config.replace;

  if (to && router) {
    router[replace ? 'replace' : 'push'](to);
  } else if (url) {
    replace ? location.replace(url) : location.href = url;
  }
}
function functionalRoute(context) {
  route(context.parent && context.parent.$router, context.props);
}
var routeProps = {
  url: String,
  replace: Boolean,
  to: [String, Object]
};
// CONCATENATED MODULE: ./node_modules/vant/es/cell/index.js






 // Types

var cell_createNamespace = Object(create["a" /* createNamespace */])('cell'),
    cell_createComponent = cell_createNamespace[0],
    cell_bem = cell_createNamespace[1];

function Cell(h, props, slots, ctx) {
  var icon = props.icon,
      size = props.size,
      title = props.title,
      label = props.label,
      value = props.value,
      isLink = props.isLink,
      arrowDirection = props.arrowDirection;
  var showTitle = slots.title || Object(utils["b" /* isDef */])(title);
  var showValue = slots.default || Object(utils["b" /* isDef */])(value);
  var showLabel = slots.label || Object(utils["b" /* isDef */])(label);
  var Label = showLabel && h("div", {
    "class": [cell_bem('label'), props.labelClass]
  }, [slots.label ? slots.label() : label]);
  var Title = showTitle && h("div", {
    "class": [cell_bem('title'), props.titleClass],
    "style": props.titleStyle
  }, [slots.title ? slots.title() : h("span", [title]), Label]);
  var Value = showValue && h("div", {
    "class": [cell_bem('value', {
      alone: !slots.title && !title
    }), props.valueClass]
  }, [slots.default ? slots.default() : h("span", [value])]);
  var LeftIcon = slots.icon ? slots.icon() : icon && h(es_icon, {
    "class": cell_bem('left-icon'),
    "attrs": {
      "name": icon
    }
  });
  var rightIconSlot = slots['right-icon'];
  var RightIcon = rightIconSlot ? rightIconSlot() : isLink && h(es_icon, {
    "class": cell_bem('right-icon'),
    "attrs": {
      "name": arrowDirection ? "arrow-" + arrowDirection : 'arrow'
    }
  });

  function onClick(event) {
    emit(ctx, 'click', event);
    functionalRoute(ctx);
  }

  var classes = {
    center: props.center,
    required: props.required,
    borderless: !props.border,
    clickable: isLink || props.clickable
  };

  if (size) {
    classes[size] = size;
  }

  return h("div", helper_default()([{
    "class": cell_bem(classes),
    "on": {
      "click": onClick
    }
  }, inherit(ctx)]), [LeftIcon, Title, Value, RightIcon, slots.extra && slots.extra()]);
}

Cell.props = _extends({}, cellProps, {}, routeProps);
/* harmony default export */ var cell = (cell_createComponent(Cell));
// CONCATENATED MODULE: ./node_modules/vant/es/utils/validate/system.js

function isAndroid() {
  /* istanbul ignore next */
  return utils["d" /* isServer */] ? false : /android/.test(navigator.userAgent.toLowerCase());
}
function isIOS() {
  /* istanbul ignore next */
  return utils["d" /* isServer */] ? false : /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());
}
// CONCATENATED MODULE: ./node_modules/vant/es/utils/dom/reset-scroll.js
/**
 * Hack for iOS12 page scroll
 * https://developers.weixin.qq.com/community/develop/doc/00044ae90742f8c82fb78fcae56800
 */


var reset_scroll_isIOS = isIOS();
/* istanbul ignore next */

function resetScroll() {
  if (reset_scroll_isIOS) {
    setRootScrollTop(getRootScrollTop());
  }
}
// CONCATENATED MODULE: ./node_modules/vant/es/field/index.js










var field_createNamespace = Object(create["a" /* createNamespace */])('field'),
    field_createComponent = field_createNamespace[0],
    field_bem = field_createNamespace[1];

/* harmony default export */ var field = (field_createComponent({
  inheritAttrs: false,
  props: _extends({}, cellProps, {
    error: Boolean,
    readonly: Boolean,
    autosize: [Boolean, Object],
    leftIcon: String,
    rightIcon: String,
    clearable: Boolean,
    labelClass: null,
    labelWidth: [Number, String],
    labelAlign: String,
    inputAlign: String,
    errorMessage: String,
    errorMessageAlign: String,
    type: {
      type: String,
      default: 'text'
    }
  }),
  data: function data() {
    return {
      focused: false
    };
  },
  watch: {
    value: function value() {
      this.$nextTick(this.adjustSize);
    }
  },
  mounted: function mounted() {
    this.format();
    this.$nextTick(this.adjustSize);
  },
  computed: {
    showClear: function showClear() {
      return this.clearable && this.focused && this.value !== '' && Object(utils["b" /* isDef */])(this.value) && !this.readonly;
    },
    listeners: function listeners() {
      var listeners = _extends({}, this.$listeners, {
        input: this.onInput,
        keypress: this.onKeypress,
        focus: this.onFocus,
        blur: this.onBlur
      });

      delete listeners.click;
      return listeners;
    },
    labelStyle: function labelStyle() {
      var labelWidth = this.labelWidth;

      if (labelWidth) {
        return {
          width: Object(unit["a" /* addUnit */])(labelWidth)
        };
      }
    }
  },
  methods: {
    focus: function focus() {
      if (this.$refs.input) {
        this.$refs.input.focus();
      }
    },
    blur: function blur() {
      if (this.$refs.input) {
        this.$refs.input.blur();
      }
    },
    // native maxlength not work when type = number
    format: function format(target) {
      if (target === void 0) {
        target = this.$refs.input;
      }

      if (!target) {
        return;
      }

      var _target = target,
          value = _target.value;
      var maxlength = this.$attrs.maxlength;

      if (this.type === 'number' && Object(utils["b" /* isDef */])(maxlength) && value.length > maxlength) {
        value = value.slice(0, maxlength);
        target.value = value;
      }

      return value;
    },
    onInput: function onInput(event) {
      // not update v-model when composing
      if (event.target.composing) {
        return;
      }

      this.$emit('input', this.format(event.target));
    },
    onFocus: function onFocus(event) {
      this.focused = true;
      this.$emit('focus', event); // hack for safari

      /* istanbul ignore if */

      if (this.readonly) {
        this.blur();
      }
    },
    onBlur: function onBlur(event) {
      this.focused = false;
      this.$emit('blur', event);
      resetScroll();
    },
    onClick: function onClick(event) {
      this.$emit('click', event);
    },
    onClickLeftIcon: function onClickLeftIcon(event) {
      this.$emit('click-left-icon', event);
    },
    onClickRightIcon: function onClickRightIcon(event) {
      this.$emit('click-right-icon', event);
    },
    onClear: function onClear(event) {
      preventDefault(event);
      this.$emit('input', '');
      this.$emit('clear', event);
    },
    onKeypress: function onKeypress(event) {
      if (this.type === 'number') {
        var keyCode = event.keyCode;
        var allowPoint = String(this.value).indexOf('.') === -1;
        var isValidKey = keyCode >= 48 && keyCode <= 57 || keyCode === 46 && allowPoint || keyCode === 45;

        if (!isValidKey) {
          preventDefault(event);
        }
      } // trigger blur after click keyboard search button

      /* istanbul ignore next */


      if (this.type === 'search' && event.keyCode === 13) {
        this.blur();
      }

      this.$emit('keypress', event);
    },
    adjustSize: function adjustSize() {
      var input = this.$refs.input;

      if (!(this.type === 'textarea' && this.autosize) || !input) {
        return;
      }

      input.style.height = 'auto';
      var height = input.scrollHeight;

      if (Object(utils["c" /* isObj */])(this.autosize)) {
        var _this$autosize = this.autosize,
            maxHeight = _this$autosize.maxHeight,
            minHeight = _this$autosize.minHeight;

        if (maxHeight) {
          height = Math.min(height, maxHeight);
        }

        if (minHeight) {
          height = Math.max(height, minHeight);
        }
      }

      if (height) {
        input.style.height = height + 'px';
      }
    },
    renderInput: function renderInput() {
      var h = this.$createElement;
      var inputSlot = this.slots('input');

      if (inputSlot) {
        return h("div", {
          "class": field_bem('control', this.inputAlign)
        }, [inputSlot]);
      }

      var inputProps = {
        ref: 'input',
        class: field_bem('control', this.inputAlign),
        domProps: {
          value: this.value
        },
        attrs: _extends({}, this.$attrs, {
          readonly: this.readonly
        }),
        on: this.listeners,
        // add model directive to skip IME composition
        directives: [{
          name: 'model',
          value: this.value
        }]
      };

      if (this.type === 'textarea') {
        return h("textarea", helper_default()([{}, inputProps]));
      }

      return h("input", helper_default()([{
        "attrs": {
          "type": this.type
        }
      }, inputProps]));
    },
    renderLeftIcon: function renderLeftIcon() {
      var h = this.$createElement;
      var showLeftIcon = this.slots('left-icon') || this.leftIcon;

      if (showLeftIcon) {
        return h("div", {
          "class": field_bem('left-icon'),
          "on": {
            "click": this.onClickLeftIcon
          }
        }, [this.slots('left-icon') || h(es_icon, {
          "attrs": {
            "name": this.leftIcon
          }
        })]);
      }
    },
    renderRightIcon: function renderRightIcon() {
      var h = this.$createElement;
      var slots = this.slots;
      var showRightIcon = slots('right-icon') || this.rightIcon;

      if (showRightIcon) {
        return h("div", {
          "class": field_bem('right-icon'),
          "on": {
            "click": this.onClickRightIcon
          }
        }, [slots('right-icon') || h(es_icon, {
          "attrs": {
            "name": this.rightIcon
          }
        })]);
      }
    }
  },
  render: function render() {
    var _bem;

    var h = arguments[0];
    var slots = this.slots,
        labelAlign = this.labelAlign;
    var scopedSlots = {
      icon: this.renderLeftIcon
    };

    if (slots('label')) {
      scopedSlots.title = function () {
        return slots('label');
      };
    }

    return h(cell, {
      "attrs": {
        "icon": this.leftIcon,
        "size": this.size,
        "title": this.label,
        "center": this.center,
        "border": this.border,
        "isLink": this.isLink,
        "required": this.required,
        "clickable": this.clickable,
        "titleStyle": this.labelStyle,
        "titleClass": [field_bem('label', labelAlign), this.labelClass],
        "arrowDirection": this.arrowDirection
      },
      "class": field_bem((_bem = {
        error: this.error,
        disabled: this.$attrs.disabled
      }, _bem["label-" + labelAlign] = labelAlign, _bem['min-height'] = this.type === 'textarea' && !this.autosize, _bem)),
      "scopedSlots": scopedSlots,
      "on": {
        "click": this.onClick
      }
    }, [h("div", {
      "class": field_bem('body')
    }, [this.renderInput(), this.showClear && h(es_icon, {
      "attrs": {
        "name": "clear"
      },
      "class": field_bem('clear'),
      "on": {
        "touchstart": this.onClear
      }
    }), this.renderRightIcon(), slots('button') && h("div", {
      "class": field_bem('button')
    }, [slots('button')])]), this.errorMessage && h("div", {
      "class": field_bem('error-message', this.errorMessageAlign)
    }, [this.errorMessage])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/toast/Toast.js





var Toast_createNamespace = Object(create["a" /* createNamespace */])('toast'),
    Toast_createComponent = Toast_createNamespace[0],
    Toast_bem = Toast_createNamespace[1];

/* harmony default export */ var Toast = (Toast_createComponent({
  mixins: [PopupMixin],
  props: {
    icon: String,
    className: null,
    iconPrefix: String,
    loadingType: String,
    forbidClick: Boolean,
    message: [Number, String],
    type: {
      type: String,
      default: 'text'
    },
    position: {
      type: String,
      default: 'middle'
    },
    lockScroll: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      clickable: false
    };
  },
  mounted: function mounted() {
    this.toggleClickable();
  },
  destroyed: function destroyed() {
    this.toggleClickable();
  },
  watch: {
    value: function value() {
      this.toggleClickable();
    },
    forbidClick: function forbidClick() {
      this.toggleClickable();
    }
  },
  methods: {
    toggleClickable: function toggleClickable() {
      var clickable = this.value && this.forbidClick;

      if (this.clickable !== clickable) {
        this.clickable = clickable;
        var action = clickable ? 'add' : 'remove';
        document.body.classList[action]('van-toast--unclickable');
      }
    },

    /* istanbul ignore next */
    onAfterEnter: function onAfterEnter() {
      this.$emit('opened');

      if (this.onOpened) {
        this.onOpened();
      }
    },
    onAfterLeave: function onAfterLeave() {
      this.$emit('closed');
    }
  },
  render: function render() {
    var h = arguments[0];
    var type = this.type,
        icon = this.icon,
        message = this.message,
        iconPrefix = this.iconPrefix,
        loadingType = this.loadingType;
    var hasIcon = icon || type === 'success' || type === 'fail';

    function ToastIcon() {
      if (hasIcon) {
        return h(es_icon, {
          "class": Toast_bem('icon'),
          "attrs": {
            "classPrefix": iconPrefix,
            "name": icon || type
          }
        });
      }

      if (type === 'loading') {
        return h(es_loading, {
          "class": Toast_bem('loading'),
          "attrs": {
            "color": "white",
            "type": loadingType
          }
        });
      }
    }

    function Message() {
      if (!Object(utils["b" /* isDef */])(message) || message === '') {
        return;
      }

      if (type === 'html') {
        return h("div", {
          "class": Toast_bem('text'),
          "domProps": {
            "innerHTML": message
          }
        });
      }

      return h("div", {
        "class": Toast_bem('text')
      }, [message]);
    }

    return h("transition", {
      "attrs": {
        "name": "van-fade"
      },
      "on": {
        "afterEnter": this.onAfterEnter,
        "afterLeave": this.onAfterLeave
      }
    }, [h("div", {
      "directives": [{
        name: "show",
        value: this.value
      }],
      "class": [Toast_bem([this.position, {
        text: !hasIcon && type !== 'loading'
      }]), this.className]
    }, [ToastIcon(), Message()])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/toast/index.js




var defaultOptions = {
  icon: '',
  type: 'text',
  mask: false,
  value: true,
  message: '',
  className: '',
  onClose: null,
  onOpened: null,
  duration: 3000,
  iconPrefix: undefined,
  position: 'middle',
  forbidClick: false,
  loadingType: undefined,
  getContainer: 'body',
  overlayStyle: null
};
var queue = [];
var multiple = false;

var currentOptions = _extends({}, defaultOptions);

function parseOptions(message) {
  if (Object(utils["c" /* isObj */])(message)) {
    return message;
  }

  return {
    message: message
  };
}

function createInstance() {
  /* istanbul ignore if */
  if (utils["d" /* isServer */]) {
    return {};
  }

  if (!queue.length || multiple) {
    var toast = new (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend(Toast))({
      el: document.createElement('div')
    });
    queue.push(toast);
  }

  return queue[queue.length - 1];
} // transform toast options to popup props


function transformOptions(options) {
  options = _extends({}, options);
  options.overlay = options.mask;
  delete options.mask;
  delete options.duration;
  return options;
}

function toast_Toast(options) {
  if (options === void 0) {
    options = {};
  }

  var toast = createInstance(); // should add z-index if previous toast has not disappeared

  if (toast.value) {
    toast.updateZIndex();
  }

  options = _extends({}, currentOptions, {}, parseOptions(options), {
    clear: function clear() {
      toast.value = false;

      if (options.onClose) {
        options.onClose();
      }

      if (multiple && !utils["d" /* isServer */]) {
        toast.$on('closed', function () {
          clearTimeout(toast.timer);
          queue = queue.filter(function (item) {
            return item !== toast;
          });
          var parent = toast.$el.parentNode;

          if (parent) {
            parent.removeChild(toast.$el);
          }

          toast.$destroy();
        });
      }
    }
  });

  _extends(toast, transformOptions(options));

  clearTimeout(toast.timer);

  if (options.duration > 0) {
    toast.timer = setTimeout(function () {
      toast.clear();
    }, options.duration);
  }

  return toast;
}

var toast_createMethod = function createMethod(type) {
  return function (options) {
    return toast_Toast(_extends({
      type: type
    }, parseOptions(options)));
  };
};

['loading', 'success', 'fail'].forEach(function (method) {
  toast_Toast[method] = toast_createMethod(method);
});

toast_Toast.clear = function (all) {
  if (queue.length) {
    if (all) {
      queue.forEach(function (toast) {
        toast.clear();
      });
      queue = [];
    } else if (!multiple) {
      queue[0].clear();
    } else {
      queue.shift().clear();
    }
  }
};

toast_Toast.setDefaultOptions = function (options) {
  _extends(currentOptions, options);
};

toast_Toast.resetDefaultOptions = function () {
  currentOptions = _extends({}, defaultOptions);
};

toast_Toast.allowMultiple = function (value) {
  if (value === void 0) {
    value = true;
  }

  multiple = value;
};

toast_Toast.install = function () {
  external_commonjs_vue_commonjs2_vue_root_Vue_default.a.use(Toast);
};

external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$toast = toast_Toast;
/* harmony default export */ var es_toast = (toast_Toast);
// CONCATENATED MODULE: ./node_modules/vant/es/button/index.js






 // Types

var button_createNamespace = Object(create["a" /* createNamespace */])('button'),
    button_createComponent = button_createNamespace[0],
    button_bem = button_createNamespace[1];

function Button(h, props, slots, ctx) {
  var tag = props.tag,
      icon = props.icon,
      type = props.type,
      disabled = props.disabled,
      loading = props.loading,
      hairline = props.hairline,
      loadingText = props.loadingText;

  function onClick(event) {
    if (!loading && !disabled) {
      emit(ctx, 'click', event);
      functionalRoute(ctx);
    }
  }

  function onTouchstart(event) {
    emit(ctx, 'touchstart', event);
  }

  var classes = [button_bem([type, props.size, {
    disabled: disabled,
    hairline: hairline,
    block: props.block,
    plain: props.plain,
    round: props.round,
    square: props.square
  }]), {
    'van-hairline--surround': hairline
  }];

  function Content() {
    var content = [];

    if (loading) {
      content.push(h(es_loading, {
        "class": button_bem('loading'),
        "attrs": {
          "size": props.loadingSize,
          "type": props.loadingType,
          "color": type === 'default' ? undefined : ''
        }
      }));
    } else if (icon) {
      content.push(h(es_icon, {
        "attrs": {
          "name": icon
        },
        "class": button_bem('icon')
      }));
    }

    var text;

    if (loading) {
      text = loadingText;
    } else {
      text = slots.default ? slots.default() : props.text;
    }

    if (text) {
      content.push(h("span", {
        "class": button_bem('text')
      }, [text]));
    }

    return content;
  }

  return h(tag, helper_default()([{
    "class": classes,
    "attrs": {
      "type": props.nativeType,
      "disabled": disabled
    },
    "on": {
      "click": onClick,
      "touchstart": onTouchstart
    }
  }, inherit(ctx)]), [Content()]);
}

Button.props = _extends({}, routeProps, {
  text: String,
  icon: String,
  block: Boolean,
  plain: Boolean,
  round: Boolean,
  square: Boolean,
  loading: Boolean,
  hairline: Boolean,
  disabled: Boolean,
  nativeType: String,
  loadingText: String,
  loadingType: String,
  tag: {
    type: String,
    default: 'button'
  },
  type: {
    type: String,
    default: 'default'
  },
  size: {
    type: String,
    default: 'normal'
  },
  loadingSize: {
    type: String,
    default: '20px'
  }
});
/* harmony default export */ var es_button = (button_createComponent(Button));
// CONCATENATED MODULE: ./node_modules/vant/es/mixins/bind-event.js
/**
 * Bind event when mounted or activated
 */

function BindEventMixin(handler) {
  function bind() {
    if (!this.binded) {
      handler.call(this, event_on, true);
      this.binded = true;
    }
  }

  function unbind() {
    if (this.binded) {
      handler.call(this, off, false);
      this.binded = false;
    }
  }

  return {
    mounted: bind,
    activated: bind,
    deactivated: unbind,
    beforeDestroy: unbind
  };
}
// CONCATENATED MODULE: ./node_modules/vant/es/mixins/close-on-popstate.js



var CloseOnPopstateMixin = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
  mixins: [BindEventMixin(function (bind, isBind) {
    this.handlePopstate(isBind && this.closeOnPopstate);
  })],
  props: {
    closeOnPopstate: Boolean
  },
  data: function data() {
    return {
      bindStatus: false
    };
  },
  watch: {
    closeOnPopstate: function closeOnPopstate(val) {
      this.handlePopstate(val);
    }
  },
  methods: {
    handlePopstate: function handlePopstate(bind) {
      /* istanbul ignore if */
      if (this.$isServer) {
        return;
      }

      if (this.bindStatus !== bind) {
        this.bindStatus = bind;
        var action = bind ? event_on : off;
        action(window, 'popstate', this.close);
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vant/es/dialog/Dialog.js





var Dialog_createNamespace = Object(create["a" /* createNamespace */])('dialog'),
    Dialog_createComponent = Dialog_createNamespace[0],
    Dialog_bem = Dialog_createNamespace[1],
    Dialog_t = Dialog_createNamespace[2];

/* harmony default export */ var Dialog = (Dialog_createComponent({
  mixins: [PopupMixin, CloseOnPopstateMixin],
  props: {
    title: String,
    message: String,
    className: null,
    callback: Function,
    beforeClose: Function,
    messageAlign: String,
    cancelButtonText: String,
    cancelButtonColor: String,
    confirmButtonText: String,
    confirmButtonColor: String,
    showCancelButton: Boolean,
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      loading: {
        confirm: false,
        cancel: false
      }
    };
  },
  methods: {
    onClickOverlay: function onClickOverlay() {
      this.handleAction('overlay');
    },
    handleAction: function handleAction(action) {
      var _this = this;

      this.$emit(action);

      if (this.beforeClose) {
        this.loading[action] = true;
        this.beforeClose(action, function (state) {
          if (state !== false) {
            _this.onClose(action);
          }

          _this.loading[action] = false;
        });
      } else {
        this.onClose(action);
      }
    },
    onClose: function onClose(action) {
      this.close();

      if (this.callback) {
        this.callback(action);
      }
    }
  },
  render: function render() {
    var _bem,
        _this2 = this;

    var h = arguments[0];

    if (!this.shouldRender) {
      return;
    }

    var message = this.message,
        messageAlign = this.messageAlign;
    var messageSlot = this.slots();
    var title = this.slots('title') || this.title;
    var Title = title && h("div", {
      "class": Dialog_bem('header', {
        isolated: !message && !messageSlot
      })
    }, [title]);
    var Content = (messageSlot || message) && h("div", {
      "class": Dialog_bem('content')
    }, [messageSlot || h("div", {
      "domProps": {
        "innerHTML": message
      },
      "class": Dialog_bem('message', (_bem = {
        'has-title': title
      }, _bem[messageAlign] = messageAlign, _bem))
    })]);
    var hasButtons = this.showCancelButton && this.showConfirmButton;
    var ButtonGroup = h("div", {
      "class": ['van-hairline--top', Dialog_bem('footer', {
        buttons: hasButtons
      })]
    }, [this.showCancelButton && h(es_button, {
      "attrs": {
        "size": "large",
        "loading": this.loading.cancel,
        "text": this.cancelButtonText || Dialog_t('cancel')
      },
      "class": Dialog_bem('cancel'),
      "style": {
        color: this.cancelButtonColor
      },
      "on": {
        "click": function click() {
          _this2.handleAction('cancel');
        }
      }
    }), this.showConfirmButton && h(es_button, {
      "attrs": {
        "size": "large",
        "loading": this.loading.confirm,
        "text": this.confirmButtonText || Dialog_t('confirm')
      },
      "class": [Dialog_bem('confirm'), {
        'van-hairline--left': hasButtons
      }],
      "style": {
        color: this.confirmButtonColor
      },
      "on": {
        "click": function click() {
          _this2.handleAction('confirm');
        }
      }
    })]);
    return h("transition", {
      "attrs": {
        "name": "van-dialog-bounce"
      }
    }, [h("div", {
      "directives": [{
        name: "show",
        value: this.value
      }],
      "attrs": {
        "role": "dialog",
        "aria-labelledby": this.title || message
      },
      "class": [Dialog_bem(), this.className]
    }, [Title, Content, ButtonGroup])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/dialog/index.js




var dialog_instance;

function isInDocument(element) {
  return document.body.contains(element);
}

function dialog_initInstance() {
  if (dialog_instance) {
    dialog_instance.$destroy();
  }

  dialog_instance = new (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend(Dialog))({
    el: document.createElement('div'),
    // avoid missing animation when first rendered
    propsData: {
      lazyRender: false
    }
  });
  dialog_instance.$on('input', function (value) {
    dialog_instance.value = value;
  });
}

function dialog_Dialog(options) {
  /* istanbul ignore if */
  if (utils["d" /* isServer */]) {
    return Promise.resolve();
  }

  return new Promise(function (resolve, reject) {
    if (!dialog_instance || !isInDocument(dialog_instance.$el)) {
      dialog_initInstance();
    }

    _extends(dialog_instance, dialog_Dialog.currentOptions, options, {
      resolve: resolve,
      reject: reject
    });
  });
}

dialog_Dialog.defaultOptions = {
  value: true,
  title: '',
  message: '',
  overlay: true,
  className: '',
  lockScroll: true,
  beforeClose: null,
  messageAlign: '',
  getContainer: 'body',
  cancelButtonText: '',
  cancelButtonColor: null,
  confirmButtonText: '',
  confirmButtonColor: null,
  showConfirmButton: true,
  showCancelButton: false,
  closeOnPopstate: false,
  closeOnClickOverlay: false,
  callback: function callback(action) {
    dialog_instance[action === 'confirm' ? 'resolve' : 'reject'](action);
  }
};
dialog_Dialog.alert = dialog_Dialog;

dialog_Dialog.confirm = function (options) {
  return dialog_Dialog(_extends({
    showCancelButton: true
  }, options));
};

dialog_Dialog.close = function () {
  if (dialog_instance) {
    dialog_instance.value = false;
  }
};

dialog_Dialog.setDefaultOptions = function (options) {
  _extends(dialog_Dialog.currentOptions, options);
};

dialog_Dialog.resetDefaultOptions = function () {
  dialog_Dialog.currentOptions = _extends({}, dialog_Dialog.defaultOptions);
};

dialog_Dialog.resetDefaultOptions();

dialog_Dialog.install = function () {
  external_commonjs_vue_commonjs2_vue_root_Vue_default.a.use(Dialog);
};

dialog_Dialog.Component = Dialog;
external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$dialog = dialog_Dialog;
/* harmony default export */ var dialog = (dialog_Dialog);
// CONCATENATED MODULE: ./node_modules/vant/es/address-edit/Detail.js






var Detail_createNamespace = Object(create["a" /* createNamespace */])('address-edit-detail'),
    Detail_createComponent = Detail_createNamespace[0],
    Detail_bem = Detail_createNamespace[1],
    Detail_t = Detail_createNamespace[2];

var android = isAndroid();
/* harmony default export */ var Detail = (Detail_createComponent({
  props: {
    value: String,
    error: Boolean,
    focused: Boolean,
    detailRows: Number,
    searchResult: Array,
    detailMaxlength: Number,
    showSearchResult: Boolean
  },
  methods: {
    onSelect: function onSelect(express) {
      this.$emit('select-search', express);
      this.$emit('input', ((express.address || '') + " " + (express.name || '')).trim());
    },
    onFinish: function onFinish() {
      this.$refs.field.blur();
    },
    renderFinish: function renderFinish() {
      var h = this.$createElement;
      var show = this.value && this.focused && android;

      if (show) {
        return h("div", {
          "class": Detail_bem('finish'),
          "on": {
            "click": this.onFinish
          }
        }, [Detail_t('complete')]);
      }
    },
    renderSearchResult: function renderSearchResult() {
      var _this = this;

      var h = this.$createElement;
      var searchResult = this.searchResult;
      var show = this.focused && searchResult && this.showSearchResult;

      if (show) {
        return searchResult.map(function (express) {
          return h(cell, {
            "key": express.name + express.address,
            "attrs": {
              "title": express.name,
              "label": express.address,
              "icon": "location-o",
              "clickable": true
            },
            "on": {
              "click": function click() {
                _this.onSelect(express);
              }
            }
          });
        });
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    return h(cell, {
      "class": Detail_bem()
    }, [h(field, {
      "attrs": {
        "autosize": true,
        "rows": this.detailRows,
        "clearable": !android,
        "type": "textarea",
        "value": this.value,
        "error": this.error,
        "label": Detail_t('label'),
        "maxlength": this.detailMaxlength,
        "placeholder": Detail_t('placeholder')
      },
      "ref": "field",
      "scopedSlots": {
        icon: this.renderFinish
      },
      "on": _extends({}, this.$listeners)
    }), this.renderSearchResult()]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/switch/shared.js
/**
 * Common Switch Props
 */
var switchProps = {
  value: null,
  loading: Boolean,
  disabled: Boolean,
  activeColor: String,
  inactiveColor: String,
  activeValue: {
    type: null,
    default: true
  },
  inactiveValue: {
    type: null,
    default: false
  },
  size: {
    type: String,
    default: '30px'
  }
};
// CONCATENATED MODULE: ./node_modules/vant/es/switch/index.js





 // Types

var switch_createNamespace = Object(create["a" /* createNamespace */])('switch'),
    switch_createComponent = switch_createNamespace[0],
    switch_bem = switch_createNamespace[1];

function Switch(h, props, slots, ctx) {
  var size = props.size,
      value = props.value,
      loading = props.loading,
      disabled = props.disabled,
      activeColor = props.activeColor,
      activeValue = props.activeValue,
      inactiveColor = props.inactiveColor,
      inactiveValue = props.inactiveValue;
  var checked = value === activeValue;
  var switchStyle = {
    fontSize: size,
    backgroundColor: checked ? activeColor : inactiveColor
  };
  var loadingColor = checked ? activeColor || BLUE : inactiveColor || GRAY_DARK;

  function onClick() {
    if (!disabled && !loading) {
      var newValue = checked ? inactiveValue : activeValue;
      emit(ctx, 'input', newValue);
      emit(ctx, 'change', newValue);
    }
  }

  return h("div", helper_default()([{
    "class": switch_bem({
      on: checked,
      disabled: disabled
    }),
    "attrs": {
      "role": "switch",
      "aria-checked": String(checked)
    },
    "style": switchStyle,
    "on": {
      "click": onClick
    }
  }, inherit(ctx)]), [h("div", {
    "class": switch_bem('node')
  }, [loading && h(es_loading, {
    "class": switch_bem('loading'),
    "attrs": {
      "color": loadingColor
    }
  })])]);
}

Switch.props = switchProps;
/* harmony default export */ var es_switch = (switch_createComponent(Switch));
// CONCATENATED MODULE: ./node_modules/vant/es/switch-cell/index.js






 // Types

var switch_cell_createNamespace = Object(create["a" /* createNamespace */])('switch-cell'),
    switch_cell_createComponent = switch_cell_createNamespace[0],
    switch_cell_bem = switch_cell_createNamespace[1];

function SwitchCell(h, props, slots, ctx) {
  return h(cell, helper_default()([{
    "attrs": {
      "center": true,
      "size": props.cellSize,
      "title": props.title,
      "border": props.border
    },
    "class": switch_cell_bem([props.cellSize])
  }, inherit(ctx)]), [h(es_switch, {
    "props": _extends({}, props),
    "on": _extends({}, ctx.listeners)
  })]);
}

SwitchCell.props = _extends({}, switchProps, {
  title: String,
  cellSize: String,
  border: {
    type: Boolean,
    default: true
  },
  size: {
    type: String,
    default: '24px'
  }
});
/* harmony default export */ var switch_cell = (switch_cell_createComponent(SwitchCell));
// CONCATENATED MODULE: ./node_modules/vant/es/address-edit/index.js












var address_edit_createNamespace = Object(create["a" /* createNamespace */])('address-edit'),
    address_edit_createComponent = address_edit_createNamespace[0],
    address_edit_bem = address_edit_createNamespace[1],
    address_edit_t = address_edit_createNamespace[2];

var defaultData = {
  name: '',
  tel: '',
  country: '',
  province: '',
  city: '',
  county: '',
  areaCode: '',
  postalCode: '',
  addressDetail: '',
  isDefault: false
};
/* harmony default export */ var address_edit = (address_edit_createComponent({
  props: {
    areaList: Object,
    isSaving: Boolean,
    isDeleting: Boolean,
    validator: Function,
    showDelete: Boolean,
    showPostal: Boolean,
    searchResult: Array,
    showSetDefault: Boolean,
    showSearchResult: Boolean,
    saveButtonText: String,
    deleteButtonText: String,
    showArea: {
      type: Boolean,
      default: true
    },
    showDetail: {
      type: Boolean,
      default: true
    },
    detailRows: {
      type: Number,
      default: 1
    },
    detailMaxlength: {
      type: Number,
      default: 200
    },
    addressInfo: {
      type: Object,
      default: function _default() {
        return _extends({}, defaultData);
      }
    },
    telValidator: {
      type: Function,
      default: isMobile
    }
  },
  data: function data() {
    return {
      data: {},
      showAreaPopup: false,
      detailFocused: false,
      errorInfo: {
        tel: false,
        name: false,
        postalCode: false,
        addressDetail: false
      }
    };
  },
  computed: {
    areaListLoaded: function areaListLoaded() {
      return Object(utils["c" /* isObj */])(this.areaList) && Object.keys(this.areaList).length;
    },
    areaText: function areaText() {
      var _this$data = this.data,
          country = _this$data.country,
          province = _this$data.province,
          city = _this$data.city,
          county = _this$data.county,
          areaCode = _this$data.areaCode;

      if (areaCode) {
        var arr = [country, province, city, county];

        if (province && province === city) {
          arr.splice(1, 1);
        }

        return arr.filter(function (text) {
          return text;
        }).join('/');
      }

      return '';
    }
  },
  watch: {
    addressInfo: {
      handler: function handler(val) {
        this.data = _extends({}, defaultData, {}, val);
        this.setAreaCode(val.areaCode);
      },
      deep: true,
      immediate: true
    },
    areaList: function areaList() {
      this.setAreaCode(this.data.areaCode);
    }
  },
  methods: {
    onFocus: function onFocus(key) {
      this.errorInfo[key] = false;
      this.detailFocused = key === 'addressDetail';
      this.$emit('focus', key);
    },
    onChangeDetail: function onChangeDetail(val) {
      this.data.addressDetail = val;
      this.$emit('change-detail', val);
    },
    onAreaConfirm: function onAreaConfirm(values) {
      this.showAreaPopup = false;
      this.assignAreaValues();
      this.$emit('change-area', values);
    },
    assignAreaValues: function assignAreaValues() {
      var area = this.$refs.area;

      if (area) {
        var detail = area.getArea();
        detail.areaCode = detail.code;
        delete detail.code;

        _extends(this.data, detail);
      }
    },
    onSave: function onSave() {
      var _this = this;

      var items = ['name', 'tel', 'areaCode', 'addressDetail'];

      if (this.showPostal) {
        items.push('postalCode');
      }

      var isValid = items.every(function (item) {
        var msg = _this.getErrorMessage(item);

        if (msg) {
          _this.errorInfo[item] = true;
          es_toast(msg);
        }

        return !msg;
      });

      if (isValid && !this.isSaving) {
        this.$emit('save', this.data);
      }
    },
    getErrorMessage: function getErrorMessage(key) {
      var value = String(this.data[key] || '').trim();

      if (this.validator) {
        var message = this.validator(key, value);

        if (message) {
          return message;
        }
      }

      switch (key) {
        case 'name':
          return value ? '' : address_edit_t('nameEmpty');

        case 'tel':
          return this.telValidator(value) ? '' : address_edit_t('telInvalid');

        case 'areaCode':
          return value ? '' : address_edit_t('areaEmpty');

        case 'addressDetail':
          return value ? '' : address_edit_t('addressEmpty');

        case 'postalCode':
          return value && !/^\d{6}$/.test(value) ? address_edit_t('postalEmpty') : '';
      }
    },
    onDelete: function onDelete() {
      var _this2 = this;

      dialog.confirm({
        title: address_edit_t('confirmDelete')
      }).then(function () {
        _this2.$emit('delete', _this2.data);
      }).catch(function () {
        _this2.$emit('cancel-delete', _this2.data);
      });
    },
    // get values of area component
    getArea: function getArea() {
      return this.$refs.area ? this.$refs.area.getValues() : [];
    },
    // set area code to area component
    setAreaCode: function setAreaCode(code) {
      this.data.areaCode = code || '';

      if (code) {
        this.$nextTick(this.assignAreaValues);
      }
    },
    setAddressDetail: function setAddressDetail(value) {
      this.data.addressDetail = value;
    },
    onDetailBlur: function onDetailBlur() {
      var _this3 = this;

      // await for click search event
      setTimeout(function () {
        _this3.detailFocused = false;
      });
    }
  },
  render: function render() {
    var _this4 = this;

    var h = arguments[0];
    var data = this.data,
        errorInfo = this.errorInfo,
        searchResult = this.searchResult;

    var onFocus = function onFocus(name) {
      return function () {
        return _this4.onFocus(name);
      };
    }; // hide bottom field when use search && detail get focused


    var hideBottomFields = searchResult && searchResult.length && this.detailFocused;
    return h("div", {
      "class": address_edit_bem()
    }, [h(field, {
      "attrs": {
        "clearable": true,
        "label": address_edit_t('name'),
        "placeholder": address_edit_t('namePlaceholder'),
        "error": errorInfo.name
      },
      "on": {
        "focus": onFocus('name')
      },
      "model": {
        value: data.name,
        callback: function callback($$v) {
          data.name = $$v;
        }
      }
    }), h(field, {
      "attrs": {
        "clearable": true,
        "type": "tel",
        "label": address_edit_t('tel'),
        "placeholder": address_edit_t('telPlaceholder'),
        "error": errorInfo.tel
      },
      "on": {
        "focus": onFocus('tel')
      },
      "model": {
        value: data.tel,
        callback: function callback($$v) {
          data.tel = $$v;
        }
      }
    }), h(field, {
      "directives": [{
        name: "show",
        value: this.showArea
      }],
      "attrs": {
        "readonly": true,
        "label": address_edit_t('area'),
        "placeholder": address_edit_t('areaPlaceholder'),
        "value": this.areaText
      },
      "on": {
        "click": function click() {
          _this4.showAreaPopup = true;
        }
      }
    }), h(Detail, {
      "directives": [{
        name: "show",
        value: this.showDetail
      }],
      "attrs": {
        "focused": this.detailFocused,
        "value": data.addressDetail,
        "error": errorInfo.addressDetail,
        "detailRows": this.detailRows,
        "detailMaxlength": this.detailMaxlength,
        "searchResult": this.searchResult,
        "showSearchResult": this.showSearchResult
      },
      "on": {
        "focus": onFocus('addressDetail'),
        "blur": this.onDetailBlur,
        "input": this.onChangeDetail,
        "select-search": function selectSearch(event) {
          _this4.$emit('select-search', event);
        }
      }
    }), this.showPostal && h(field, {
      "directives": [{
        name: "show",
        value: !hideBottomFields
      }],
      "attrs": {
        "type": "tel",
        "maxlength": "6",
        "label": address_edit_t('postal'),
        "placeholder": address_edit_t('postal'),
        "error": errorInfo.postalCode
      },
      "on": {
        "focus": onFocus('postalCode')
      },
      "model": {
        value: data.postalCode,
        callback: function callback($$v) {
          data.postalCode = $$v;
        }
      }
    }), this.slots(), this.showSetDefault && h(switch_cell, {
      "directives": [{
        name: "show",
        value: !hideBottomFields
      }],
      "attrs": {
        "title": address_edit_t('defaultAddress')
      },
      "on": {
        "change": function change(event) {
          _this4.$emit('change-default', event);
        }
      },
      "model": {
        value: data.isDefault,
        callback: function callback($$v) {
          data.isDefault = $$v;
        }
      }
    }), h("div", {
      "directives": [{
        name: "show",
        value: !hideBottomFields
      }],
      "class": address_edit_bem('buttons')
    }, [h(es_button, {
      "attrs": {
        "block": true,
        "loading": this.isSaving,
        "type": "danger",
        "text": this.saveButtonText || address_edit_t('save')
      },
      "on": {
        "click": this.onSave
      }
    }), this.showDelete && h(es_button, {
      "attrs": {
        "block": true,
        "loading": this.isDeleting,
        "text": this.deleteButtonText || address_edit_t('delete')
      },
      "on": {
        "click": this.onDelete
      }
    })]), h(popup, {
      "attrs": {
        "position": "bottom",
        "lazyRender": false,
        "getContainer": "body"
      },
      "model": {
        value: _this4.showAreaPopup,
        callback: function callback($$v) {
          _this4.showAreaPopup = $$v;
        }
      }
    }, [h(es_area, {
      "ref": "area",
      "attrs": {
        "loading": !this.areaListLoaded,
        "value": data.areaCode,
        "areaList": this.areaList
      },
      "on": {
        "confirm": this.onAreaConfirm,
        "cancel": function cancel() {
          _this4.showAreaPopup = false;
        }
      }
    })])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/mixins/relation.js


function flattenVNodes(vnodes) {
  var result = [];

  function traverse(vnodes) {
    vnodes.forEach(function (vnode) {
      result.push(vnode);

      if (vnode.children) {
        traverse(vnode.children);
      }
    });
  }

  traverse(vnodes);
  return result;
}

function ChildrenMixin(_parent, options) {
  var _inject, _computed;

  if (options === void 0) {
    options = {};
  }

  var indexKey = options.indexKey || 'index';
  return external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
    inject: (_inject = {}, _inject[_parent] = {
      default: null
    }, _inject),
    computed: (_computed = {
      parent: function parent() {
        return this[_parent];
      }
    }, _computed[indexKey] = function () {
      this.bindRelation();
      return this.parent.children.indexOf(this);
    }, _computed),
    mounted: function mounted() {
      this.bindRelation();
    },
    beforeDestroy: function beforeDestroy() {
      var _this = this;

      if (this.parent) {
        this.parent.children = this.parent.children.filter(function (item) {
          return item !== _this;
        });
      }
    },
    methods: {
      bindRelation: function bindRelation() {
        if (!this.parent || this.parent.children.indexOf(this) !== -1) {
          return;
        }

        var children = [].concat(this.parent.children, [this]);
        var vnodes = flattenVNodes(this.parent.slots());
        children.sort(function (a, b) {
          return vnodes.indexOf(a.$vnode) - vnodes.indexOf(b.$vnode);
        });
        this.parent.children = children;
      }
    }
  });
}
function ParentMixin(parent) {
  return {
    provide: function provide() {
      var _ref;

      return _ref = {}, _ref[parent] = this, _ref;
    },
    data: function data() {
      return {
        children: []
      };
    }
  };
}
// CONCATENATED MODULE: ./node_modules/vant/es/radio-group/index.js



var radio_group_createNamespace = Object(create["a" /* createNamespace */])('radio-group'),
    radio_group_createComponent = radio_group_createNamespace[0],
    radio_group_bem = radio_group_createNamespace[1];

/* harmony default export */ var radio_group = (radio_group_createComponent({
  mixins: [ParentMixin('vanRadio')],
  props: {
    value: null,
    disabled: Boolean
  },
  watch: {
    value: function value(_value) {
      this.$emit('change', _value);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": radio_group_bem(),
      "attrs": {
        "role": "radiogroup"
      }
    }, [this.slots()]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/mixins/checkbox.js
/**
 * Common part of Checkbox & Radio
 */



var checkbox_CheckboxMixin = function CheckboxMixin(_ref) {
  var parent = _ref.parent,
      bem = _ref.bem,
      role = _ref.role;
  return {
    mixins: [ChildrenMixin(parent)],
    props: {
      name: null,
      value: null,
      disabled: Boolean,
      iconSize: [Number, String],
      checkedColor: String,
      labelPosition: String,
      labelDisabled: Boolean,
      shape: {
        type: String,
        default: 'round'
      }
    },
    computed: {
      isDisabled: function isDisabled() {
        return this.parent && this.parent.disabled || this.disabled;
      },
      iconStyle: function iconStyle() {
        var checkedColor = this.checkedColor;

        if (checkedColor && this.checked && !this.isDisabled) {
          return {
            borderColor: checkedColor,
            backgroundColor: checkedColor
          };
        }
      },
      tabindex: function tabindex() {
        if (this.isDisabled || role === 'radio' && !this.checked) {
          return -1;
        }

        return 0;
      }
    },
    methods: {
      onClick: function onClick(event) {
        var label = this.$refs.label;
        var target = event.target;
        var labelClicked = label && (label === target || label.contains(target));

        if (!this.disabled && !(labelClicked && this.labelDisabled)) {
          this.toggle();
        }

        this.$emit('click', event);
      }
    },
    render: function render() {
      var h = arguments[0];
      var slots = this.slots,
          checked = this.checked;
      var CheckIcon = slots('icon', {
        checked: checked
      }) || h(es_icon, {
        "attrs": {
          "name": "success"
        },
        "style": this.iconStyle
      });
      var Label = slots() && h("span", {
        "ref": "label",
        "class": bem('label', [this.labelPosition, {
          disabled: this.isDisabled
        }])
      }, [slots()]);
      var Children = [h("div", {
        "class": bem('icon', [this.shape, {
          disabled: this.isDisabled,
          checked: checked
        }]),
        "style": {
          fontSize: Object(unit["a" /* addUnit */])(this.iconSize)
        }
      }, [CheckIcon])];

      if (this.labelPosition === 'left') {
        Children.unshift(Label);
      } else {
        Children.push(Label);
      }

      return h("div", {
        "attrs": {
          "role": role,
          "tabindex": this.tabindex,
          "aria-checked": String(this.checked)
        },
        "class": bem(),
        "on": {
          "click": this.onClick
        }
      }, [Children]);
    }
  };
};
// CONCATENATED MODULE: ./node_modules/vant/es/radio/index.js



var radio_createNamespace = Object(create["a" /* createNamespace */])('radio'),
    radio_createComponent = radio_createNamespace[0],
    radio_bem = radio_createNamespace[1];

/* harmony default export */ var es_radio = (radio_createComponent({
  mixins: [checkbox_CheckboxMixin({
    bem: radio_bem,
    role: 'radio',
    parent: 'vanRadio'
  })],
  computed: {
    currentValue: {
      get: function get() {
        return this.parent ? this.parent.value : this.value;
      },
      set: function set(val) {
        (this.parent || this).$emit('input', val);
      }
    },
    checked: function checked() {
      return this.currentValue === this.name;
    }
  },
  methods: {
    toggle: function toggle() {
      this.currentValue = this.name;
    }
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/address-list/Item.js






 // Types

var Item_createNamespace = Object(create["a" /* createNamespace */])('address-item'),
    Item_createComponent = Item_createNamespace[0],
    Item_bem = Item_createNamespace[1];

function AddressItem(h, props, slots, ctx) {
  var disabled = props.disabled,
      switchable = props.switchable;

  function onClick() {
    if (switchable) {
      emit(ctx, 'select');
    }

    emit(ctx, 'click');
  }

  var renderRightIcon = function renderRightIcon() {
    return h(es_icon, {
      "attrs": {
        "name": "edit"
      },
      "class": Item_bem('edit'),
      "on": {
        "click": function click(event) {
          event.stopPropagation();
          emit(ctx, 'edit');
          emit(ctx, 'click');
        }
      }
    });
  };

  var renderContent = function renderContent() {
    var data = props.data;
    var Info = [h("div", {
      "class": Item_bem('name')
    }, [data.name + "\uFF0C" + data.tel]), h("div", {
      "class": Item_bem('address')
    }, [data.address])];
    return switchable && !disabled ? h(es_radio, {
      "attrs": {
        "name": data.id,
        "iconSize": 16,
        "checkedColor": RED
      }
    }, [Info]) : Info;
  };

  return h(cell, helper_default()([{
    "class": Item_bem({
      disabled: disabled
    }),
    "attrs": {
      "valueClass": Item_bem('value'),
      "clickable": switchable && !disabled
    },
    "scopedSlots": {
      default: renderContent,
      'right-icon': renderRightIcon
    },
    "on": {
      "click": onClick
    }
  }, inherit(ctx)]));
}

AddressItem.props = {
  data: Object,
  disabled: Boolean,
  switchable: Boolean
};
/* harmony default export */ var Item = (Item_createComponent(AddressItem));
// CONCATENATED MODULE: ./node_modules/vant/es/address-list/index.js





 // Types

var address_list_createNamespace = Object(create["a" /* createNamespace */])('address-list'),
    address_list_createComponent = address_list_createNamespace[0],
    address_list_bem = address_list_createNamespace[1],
    address_list_t = address_list_createNamespace[2];

function AddressList(h, props, slots, ctx) {
  function renderList(list, disabled) {
    if (!list) {
      return;
    }

    return list.map(function (item, index) {
      return h(Item, {
        "attrs": {
          "data": item,
          "disabled": disabled,
          "switchable": props.switchable
        },
        "key": item.id,
        "on": {
          "select": function select() {
            emit(ctx, disabled ? 'select-disabled' : 'select', item, index);

            if (!disabled) {
              emit(ctx, 'input', item.id);
            }
          },
          "edit": function edit() {
            emit(ctx, disabled ? 'edit-disabled' : 'edit', item, index);
          },
          "click": function click() {
            emit(ctx, 'click-item', item, index);
          }
        }
      });
    });
  }

  var List = renderList(props.list);
  var DisabledList = renderList(props.disabledList, true);
  return h("div", helper_default()([{
    "class": address_list_bem()
  }, inherit(ctx)]), [slots.top && slots.top(), h(radio_group, {
    "attrs": {
      "value": props.value
    },
    "on": {
      "input": function input(event) {
        emit(ctx, 'input', event);
      }
    }
  }, [List]), props.disabledText && h("div", {
    "class": address_list_bem('disabled-text')
  }, [props.disabledText]), DisabledList, slots.default && slots.default(), h(es_button, {
    "attrs": {
      "square": true,
      "size": "large",
      "type": "danger",
      "text": props.addButtonText || address_list_t('add')
    },
    "class": address_list_bem('add'),
    "on": {
      "click": function click() {
        emit(ctx, 'add');
      }
    }
  })]);
}

AddressList.props = {
  list: Array,
  disabledList: Array,
  disabledText: String,
  addButtonText: String,
  value: [Number, String],
  switchable: {
    type: Boolean,
    default: true
  }
};
/* harmony default export */ var address_list = (address_list_createComponent(AddressList));
// CONCATENATED MODULE: ./node_modules/vant/es/tag/index.js


 // Types

var tag_createNamespace = Object(create["a" /* createNamespace */])('tag'),
    tag_createComponent = tag_createNamespace[0],
    tag_bem = tag_createNamespace[1];

function Tag(h, props, slots, ctx) {
  var _style;

  var type = props.type,
      mark = props.mark,
      plain = props.plain,
      color = props.color,
      round = props.round,
      size = props.size;
  var key = plain ? 'color' : 'backgroundColor';
  var style = (_style = {}, _style[key] = color, _style);

  if (props.textColor) {
    style.color = props.textColor;
  }

  var classes = {
    mark: mark,
    plain: plain,
    round: round
  };

  if (size) {
    classes[size] = size;
  }

  return h("span", helper_default()([{
    "style": style,
    "class": [tag_bem([classes, type]), {
      'van-hairline--surround': plain
    }]
  }, inherit(ctx, true)]), [slots.default && slots.default()]);
}

Tag.props = {
  size: String,
  mark: Boolean,
  color: String,
  plain: Boolean,
  round: Boolean,
  textColor: String,
  type: {
    type: String,
    default: 'default'
  }
};
/* harmony default export */ var es_tag = (tag_createComponent(Tag));
// CONCATENATED MODULE: ./node_modules/vant/es/card/index.js




 // Types

var card_createNamespace = Object(create["a" /* createNamespace */])('card'),
    card_createComponent = card_createNamespace[0],
    card_bem = card_createNamespace[1];

function Card(h, props, slots, ctx) {
  var thumb = props.thumb;
  var showNum = slots.num || Object(utils["b" /* isDef */])(props.num);
  var showPrice = slots.price || Object(utils["b" /* isDef */])(props.price);
  var showOriginPrice = slots['origin-price'] || Object(utils["b" /* isDef */])(props.originPrice);
  var showBottom = showNum || showPrice || showOriginPrice;

  function onThumbClick(event) {
    emit(ctx, 'click-thumb', event);
  }

  function ThumbTag() {
    if (slots.tag || props.tag) {
      return h("div", {
        "class": card_bem('tag')
      }, [slots.tag ? slots.tag() : h(es_tag, {
        "attrs": {
          "mark": true,
          "type": "danger"
        }
      }, [props.tag])]);
    }
  }

  function Thumb() {
    if (slots.thumb || thumb) {
      return h("a", {
        "attrs": {
          "href": props.thumbLink
        },
        "class": card_bem('thumb'),
        "on": {
          "click": onThumbClick
        }
      }, [slots.thumb ? slots.thumb() : h(es_image, {
        "attrs": {
          "src": thumb,
          "width": "100%",
          "height": "100%",
          "fit": "contain",
          "lazy-load": props.lazyLoad
        }
      }), ThumbTag()]);
    }
  }

  function Title() {
    if (slots.title) {
      return slots.title();
    }

    if (props.title) {
      return h("div", {
        "class": card_bem('title')
      }, [props.title]);
    }
  }

  function Desc() {
    if (slots.desc) {
      return slots.desc();
    }

    if (props.desc) {
      return h("div", {
        "class": [card_bem('desc'), 'van-ellipsis']
      }, [props.desc]);
    }
  }

  function Price() {
    if (showPrice) {
      return h("div", {
        "class": card_bem('price')
      }, [slots.price ? slots.price() : props.currency + " " + props.price]);
    }
  }

  function OriginPrice() {
    if (showOriginPrice) {
      var slot = slots['origin-price'];
      return h("div", {
        "class": card_bem('origin-price')
      }, [slot ? slot() : props.currency + " " + props.originPrice]);
    }
  }

  function Num() {
    if (showNum) {
      return h("div", {
        "class": card_bem('num')
      }, [slots.num ? slots.num() : "x " + props.num]);
    }
  }

  function Footer() {
    if (slots.footer) {
      return h("div", {
        "class": card_bem('footer')
      }, [slots.footer()]);
    }
  }

  return h("div", helper_default()([{
    "class": card_bem()
  }, inherit(ctx, true)]), [h("div", {
    "class": card_bem('header')
  }, [Thumb(), h("div", {
    "class": card_bem('content', {
      centered: props.centered
    })
  }, [Title(), Desc(), slots.tags && slots.tags(), showBottom && h("div", {
    "class": "van-card__bottom"
  }, [Price(), OriginPrice(), Num(), slots.bottom && slots.bottom()])])]), Footer()]);
}

Card.props = {
  tag: String,
  desc: String,
  thumb: String,
  title: String,
  centered: Boolean,
  lazyLoad: Boolean,
  thumbLink: String,
  num: [Number, String],
  price: [Number, String],
  originPrice: [Number, String],
  currency: {
    type: String,
    default: '¥'
  }
};
/* harmony default export */ var card = (card_createComponent(Card));
// CONCATENATED MODULE: ./node_modules/vant/es/cell-group/index.js


 // Types

var cell_group_createNamespace = Object(create["a" /* createNamespace */])('cell-group'),
    cell_group_createComponent = cell_group_createNamespace[0],
    cell_group_bem = cell_group_createNamespace[1];

function CellGroup(h, props, slots, ctx) {
  var Group = h("div", helper_default()([{
    "class": [cell_group_bem(), {
      'van-hairline--top-bottom': props.border
    }]
  }, inherit(ctx, true)]), [slots.default && slots.default()]);

  if (props.title) {
    return h("div", [h("div", {
      "class": cell_group_bem('title')
    }, [props.title]), Group]);
  }

  return Group;
}

CellGroup.props = {
  title: String,
  border: {
    type: Boolean,
    default: true
  }
};
/* harmony default export */ var cell_group = (cell_group_createComponent(CellGroup));
// CONCATENATED MODULE: ./node_modules/vant/es/checkbox/index.js



var checkbox_createNamespace = Object(create["a" /* createNamespace */])('checkbox'),
    checkbox_createComponent = checkbox_createNamespace[0],
    checkbox_bem = checkbox_createNamespace[1];

/* harmony default export */ var es_checkbox = (checkbox_createComponent({
  mixins: [checkbox_CheckboxMixin({
    bem: checkbox_bem,
    role: 'checkbox',
    parent: 'vanCheckbox'
  })],
  computed: {
    checked: {
      get: function get() {
        return this.parent ? this.parent.value.indexOf(this.name) !== -1 : this.value;
      },
      set: function set(val) {
        if (this.parent) {
          this.setParentValue(val);
        } else {
          this.$emit('input', val);
        }
      }
    }
  },
  watch: {
    value: function value(val) {
      this.$emit('change', val);
    }
  },
  methods: {
    toggle: function toggle() {
      var _this = this;

      var checked = !this.checked; // When toggle method is called multiple times at the same time,
      // only the last call is valid.
      // This is a hack for usage inside Cell.

      clearTimeout(this.toggleTask);
      this.toggleTask = setTimeout(function () {
        _this.checked = checked;
      });
    },
    setParentValue: function setParentValue(val) {
      var parent = this.parent;
      var value = parent.value.slice();

      if (val) {
        if (parent.max && value.length >= parent.max) {
          return;
        }
        /* istanbul ignore else */


        if (value.indexOf(this.name) === -1) {
          value.push(this.name);
          parent.$emit('input', value);
        }
      } else {
        var index = value.indexOf(this.name);
        /* istanbul ignore else */

        if (index !== -1) {
          value.splice(index, 1);
          parent.$emit('input', value);
        }
      }
    }
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/checkbox-group/index.js



var checkbox_group_createNamespace = Object(create["a" /* createNamespace */])('checkbox-group'),
    checkbox_group_createComponent = checkbox_group_createNamespace[0],
    checkbox_group_bem = checkbox_group_createNamespace[1];

/* harmony default export */ var checkbox_group = (checkbox_group_createComponent({
  mixins: [ParentMixin('vanCheckbox')],
  props: {
    max: Number,
    disabled: Boolean,
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  watch: {
    value: function value(val) {
      this.$emit('change', val);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": checkbox_group_bem()
    }, [this.slots()]);
  }
}));
// EXTERNAL MODULE: ./node_modules/vant/es/utils/dom/raf.js
var raf = __webpack_require__("4598");

// CONCATENATED MODULE: ./node_modules/vant/es/circle/index.js




var circle_createNamespace = Object(create["a" /* createNamespace */])('circle'),
    circle_createComponent = circle_createNamespace[0],
    circle_bem = circle_createNamespace[1];

var PERIMETER = 3140;
var PATH = 'M 530 530 m -500, 0 a 500, 500 0 1, 1 1000, 0 a 500, 500 0 1, 1 -1000, 0';

function circle_format(rate) {
  return Math.min(Math.max(rate, 0), 100);
}

/* harmony default export */ var circle = (circle_createComponent({
  props: {
    text: String,
    value: {
      type: Number,
      default: 0
    },
    speed: {
      type: Number,
      default: 0
    },
    size: {
      type: String,
      default: '100px'
    },
    fill: {
      type: String,
      default: 'none'
    },
    rate: {
      type: Number,
      default: 100
    },
    layerColor: {
      type: String,
      default: WHITE
    },
    color: {
      type: String,
      default: BLUE
    },
    strokeWidth: {
      type: Number,
      default: 40
    },
    clockwise: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    style: function style() {
      return {
        width: this.size,
        height: this.size
      };
    },
    layerStyle: function layerStyle() {
      var offset = PERIMETER * (100 - this.value) / 100;
      offset = this.clockwise ? offset : PERIMETER * 2 - offset;
      return {
        stroke: "" + this.color,
        strokeDashoffset: offset + "px",
        strokeWidth: this.strokeWidth + 1 + "px"
      };
    },
    hoverStyle: function hoverStyle() {
      return {
        fill: "" + this.fill,
        stroke: "" + this.layerColor,
        strokeWidth: this.strokeWidth + "px"
      };
    }
  },
  watch: {
    rate: {
      handler: function handler() {
        this.startTime = Date.now();
        this.startRate = this.value;
        this.endRate = circle_format(this.rate);
        this.increase = this.endRate > this.startRate;
        this.duration = Math.abs((this.startRate - this.endRate) * 1000 / this.speed);

        if (this.speed) {
          Object(raf["a" /* cancelRaf */])(this.rafId);
          this.rafId = Object(raf["c" /* raf */])(this.animate);
        } else {
          this.$emit('input', this.endRate);
        }
      },
      immediate: true
    }
  },
  methods: {
    animate: function animate() {
      var now = Date.now();
      var progress = Math.min((now - this.startTime) / this.duration, 1);
      var rate = progress * (this.endRate - this.startRate) + this.startRate;
      this.$emit('input', circle_format(parseFloat(rate.toFixed(1))));

      if (this.increase ? rate < this.endRate : rate > this.endRate) {
        this.rafId = Object(raf["c" /* raf */])(this.animate);
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": circle_bem(),
      "style": this.style
    }, [h("svg", {
      "attrs": {
        "viewBox": "0 0 1060 1060"
      }
    }, [h("path", {
      "class": circle_bem('hover'),
      "style": this.hoverStyle,
      "attrs": {
        "d": PATH
      }
    }), h("path", {
      "class": circle_bem('layer'),
      "style": this.layerStyle,
      "attrs": {
        "d": PATH
      }
    })]), this.slots() || this.text && h("div", {
      "class": circle_bem('text')
    }, [this.text])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/col/index.js


var col_createNamespace = Object(create["a" /* createNamespace */])('col'),
    col_createComponent = col_createNamespace[0],
    col_bem = col_createNamespace[1];

/* harmony default export */ var col = (col_createComponent({
  props: {
    span: [Number, String],
    offset: [Number, String],
    tag: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    gutter: function gutter() {
      return this.$parent && Number(this.$parent.gutter) || 0;
    },
    style: function style() {
      var padding = this.gutter / 2 + "px";
      return this.gutter ? {
        paddingLeft: padding,
        paddingRight: padding
      } : {};
    }
  },
  render: function render() {
    var _bem;

    var h = arguments[0];
    var span = this.span,
        offset = this.offset;
    return h(this.tag, {
      "class": col_bem((_bem = {}, _bem[span] = span, _bem["offset-" + offset] = offset, _bem)),
      "style": this.style
    }, [this.slots()]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/collapse/index.js



var collapse_createNamespace = Object(create["a" /* createNamespace */])('collapse'),
    collapse_createComponent = collapse_createNamespace[0],
    collapse_bem = collapse_createNamespace[1];

/* harmony default export */ var collapse = (collapse_createComponent({
  mixins: [ParentMixin('vanCollapse')],
  props: {
    accordion: Boolean,
    value: [String, Number, Array],
    border: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    switch: function _switch(name, expanded) {
      if (!this.accordion) {
        name = expanded ? this.value.concat(name) : this.value.filter(function (activeName) {
          return activeName !== name;
        });
      }

      this.$emit('change', name);
      this.$emit('input', name);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": [collapse_bem(), {
        'van-hairline--top-bottom': this.border
      }]
    }, [this.slots()]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/collapse-item/index.js







var collapse_item_createNamespace = Object(create["a" /* createNamespace */])('collapse-item'),
    collapse_item_createComponent = collapse_item_createNamespace[0],
    collapse_item_bem = collapse_item_createNamespace[1];

var CELL_SLOTS = ['title', 'icon', 'right-icon'];
/* harmony default export */ var collapse_item = (collapse_item_createComponent({
  mixins: [ChildrenMixin('vanCollapse')],
  props: _extends({}, cellProps, {
    name: [Number, String],
    disabled: Boolean,
    isLink: {
      type: Boolean,
      default: true
    }
  }),
  data: function data() {
    return {
      show: null,
      inited: null
    };
  },
  computed: {
    currentName: function currentName() {
      return Object(utils["b" /* isDef */])(this.name) ? this.name : this.index;
    },
    expanded: function expanded() {
      var _this = this;

      if (!this.parent) {
        return null;
      }

      var value = this.parent.value;
      return this.parent.accordion ? value === this.currentName : value.some(function (name) {
        return name === _this.currentName;
      });
    }
  },
  created: function created() {
    this.show = this.expanded;
    this.inited = this.expanded;
  },
  watch: {
    expanded: function expanded(_expanded, prev) {
      var _this2 = this;

      if (prev === null) {
        return;
      }

      if (_expanded) {
        this.show = true;
        this.inited = true;
      } // Use raf: flick when opened in safari
      // Use nextTick: closing animation failed when set `user-select: none`


      var nextTick = _expanded ? this.$nextTick : raf["c" /* raf */];
      nextTick(function () {
        var _this2$$refs = _this2.$refs,
            content = _this2$$refs.content,
            wrapper = _this2$$refs.wrapper;

        if (!content || !wrapper) {
          return;
        }

        var offsetHeight = content.offsetHeight;

        if (offsetHeight) {
          var contentHeight = offsetHeight + "px";
          wrapper.style.height = _expanded ? 0 : contentHeight; // use double raf to ensure animation can start in mobile safari

          Object(raf["b" /* doubleRaf */])(function () {
            wrapper.style.height = _expanded ? contentHeight : 0;
          });
        } else {
          _this2.onTransitionEnd();
        }
      });
    }
  },
  methods: {
    onClick: function onClick() {
      if (this.disabled) {
        return;
      }

      var parent = this.parent;
      var name = parent.accordion && this.currentName === parent.value ? '' : this.currentName;
      this.parent.switch(name, !this.expanded);
    },
    onTransitionEnd: function onTransitionEnd() {
      if (!this.expanded) {
        this.show = false;
      } else {
        this.$refs.wrapper.style.height = '';
      }
    }
  },
  render: function render() {
    var _this3 = this;

    var h = arguments[0];
    var disabled = this.disabled,
        expanded = this.expanded;
    var titleSlots = CELL_SLOTS.reduce(function (slots, name) {
      if (_this3.slots(name)) {
        slots[name] = function () {
          return _this3.slots(name);
        };
      }

      return slots;
    }, {});

    if (this.slots('value')) {
      titleSlots.default = function () {
        return _this3.slots('value');
      };
    }

    var Title = h(cell, {
      "attrs": {
        "role": "button",
        "tabindex": disabled ? -1 : 0,
        "aria-expanded": String(expanded)
      },
      "class": collapse_item_bem('title', {
        disabled: disabled,
        expanded: expanded
      }),
      "on": {
        "click": this.onClick
      },
      "scopedSlots": titleSlots,
      "props": _extends({}, this.$props)
    });
    var Content = this.inited && h("div", {
      "directives": [{
        name: "show",
        value: this.show
      }],
      "ref": "wrapper",
      "class": collapse_item_bem('wrapper'),
      "on": {
        "transitionend": this.onTransitionEnd
      }
    }, [h("div", {
      "ref": "content",
      "class": collapse_item_bem('content')
    }, [this.slots()])]);
    return h("div", {
      "class": [collapse_item_bem(), {
        'van-hairline--top': this.index
      }]
    }, [Title, Content]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/contact-card/index.js



 // Types

var contact_card_createNamespace = Object(create["a" /* createNamespace */])('contact-card'),
    contact_card_createComponent = contact_card_createNamespace[0],
    contact_card_bem = contact_card_createNamespace[1],
    contact_card_t = contact_card_createNamespace[2];

function ContactCard(h, props, slots, ctx) {
  var type = props.type,
      editable = props.editable;

  function onClick(event) {
    if (editable) {
      emit(ctx, 'click', event);
    }
  }

  return h(cell, helper_default()([{
    "attrs": {
      "center": true,
      "border": false,
      "isLink": editable,
      "valueClass": contact_card_bem('value'),
      "icon": type === 'edit' ? 'contact' : 'add-square'
    },
    "class": contact_card_bem([type]),
    "on": {
      "click": onClick
    }
  }, inherit(ctx)]), [type === 'add' ? props.addText || contact_card_t('addText') : [h("div", [contact_card_t('name') + "\uFF1A" + props.name]), h("div", [contact_card_t('tel') + "\uFF1A" + props.tel])]]);
}

ContactCard.props = {
  tel: String,
  name: String,
  addText: String,
  editable: {
    type: Boolean,
    default: true
  },
  type: {
    type: String,
    default: 'add'
  }
};
/* harmony default export */ var contact_card = (contact_card_createComponent(ContactCard));
// CONCATENATED MODULE: ./node_modules/vant/es/contact-edit/index.js








var contact_edit_createNamespace = Object(create["a" /* createNamespace */])('contact-edit'),
    contact_edit_createComponent = contact_edit_createNamespace[0],
    contact_edit_bem = contact_edit_createNamespace[1],
    contact_edit_t = contact_edit_createNamespace[2];

var defaultContact = {
  tel: '',
  name: ''
};
/* harmony default export */ var contact_edit = (contact_edit_createComponent({
  props: {
    isEdit: Boolean,
    isSaving: Boolean,
    isDeleting: Boolean,
    contactInfo: {
      type: Object,
      default: function _default() {
        return _extends({}, defaultContact);
      }
    },
    telValidator: {
      type: Function,
      default: isMobile
    }
  },
  data: function data() {
    return {
      data: _extends({}, defaultContact, {}, this.contactInfo),
      errorInfo: {
        name: false,
        tel: false
      }
    };
  },
  watch: {
    contactInfo: function contactInfo(val) {
      this.data = _extends({}, defaultContact, {}, val);
    }
  },
  methods: {
    onFocus: function onFocus(key) {
      this.errorInfo[key] = false;
    },
    getErrorMessageByKey: function getErrorMessageByKey(key) {
      var value = this.data[key].trim();

      switch (key) {
        case 'name':
          return value ? '' : contact_edit_t('nameEmpty');

        case 'tel':
          return this.telValidator(value) ? '' : contact_edit_t('telInvalid');
      }
    },
    onSave: function onSave() {
      var _this = this;

      var isValid = ['name', 'tel'].every(function (item) {
        var msg = _this.getErrorMessageByKey(item);

        if (msg) {
          _this.errorInfo[item] = true;
          es_toast(msg);
        }

        return !msg;
      });

      if (isValid && !this.isSaving) {
        this.$emit('save', this.data);
      }
    },
    onDelete: function onDelete() {
      var _this2 = this;

      dialog.confirm({
        message: contact_edit_t('confirmDelete')
      }).then(function () {
        _this2.$emit('delete', _this2.data);
      });
    }
  },
  render: function render() {
    var _this3 = this;

    var h = arguments[0];
    var data = this.data,
        errorInfo = this.errorInfo;

    var onFocus = function onFocus(name) {
      return function () {
        return _this3.onFocus(name);
      };
    };

    return h("div", {
      "class": contact_edit_bem()
    }, [h(field, {
      "attrs": {
        "clearable": true,
        "maxlength": "30",
        "label": contact_edit_t('name'),
        "placeholder": contact_edit_t('nameEmpty'),
        "error": errorInfo.name
      },
      "on": {
        "focus": onFocus('name')
      },
      "model": {
        value: data.name,
        callback: function callback($$v) {
          data.name = $$v;
        }
      }
    }), h(field, {
      "attrs": {
        "clearable": true,
        "type": "tel",
        "label": contact_edit_t('tel'),
        "placeholder": contact_edit_t('telEmpty'),
        "error": errorInfo.tel
      },
      "on": {
        "focus": onFocus('tel')
      },
      "model": {
        value: data.tel,
        callback: function callback($$v) {
          data.tel = $$v;
        }
      }
    }), h("div", {
      "class": contact_edit_bem('buttons')
    }, [h(es_button, {
      "attrs": {
        "block": true,
        "type": "danger",
        "text": contact_edit_t('save'),
        "loading": this.isSaving
      },
      "on": {
        "click": this.onSave
      }
    }), this.isEdit && h(es_button, {
      "attrs": {
        "block": true,
        "text": contact_edit_t('delete'),
        "loading": this.isDeleting
      },
      "on": {
        "click": this.onDelete
      }
    })])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/contact-list/index.js








 // Types

var contact_list_createNamespace = Object(create["a" /* createNamespace */])('contact-list'),
    contact_list_createComponent = contact_list_createNamespace[0],
    contact_list_bem = contact_list_createNamespace[1],
    contact_list_t = contact_list_createNamespace[2];

function ContactList(h, props, slots, ctx) {
  var List = props.list && props.list.map(function (item, index) {
    function onClick() {
      emit(ctx, 'input', item.id);
      emit(ctx, 'select', item, index);
    }

    function Content() {
      return h(es_radio, {
        "attrs": {
          "name": item.id,
          "iconSize": 16,
          "checkedColor": RED
        },
        "on": {
          "click": onClick
        }
      }, [h("div", {
        "class": contact_list_bem('name')
      }, [item.name + "\uFF0C" + item.tel])]);
    }

    function RightIcon() {
      return h(es_icon, {
        "attrs": {
          "name": "edit"
        },
        "class": contact_list_bem('edit'),
        "on": {
          "click": function click(event) {
            event.stopPropagation();
            emit(ctx, 'edit', item, index);
          }
        }
      });
    }

    return h(cell, {
      "key": item.id,
      "attrs": {
        "isLink": true,
        "valueClass": contact_list_bem('item-value')
      },
      "class": contact_list_bem('item'),
      "scopedSlots": {
        default: Content,
        'right-icon': RightIcon
      },
      "on": {
        "click": onClick
      }
    });
  });
  return h("div", helper_default()([{
    "class": contact_list_bem()
  }, inherit(ctx)]), [h(radio_group, {
    "attrs": {
      "value": props.value
    },
    "class": contact_list_bem('group')
  }, [List]), h(es_button, {
    "attrs": {
      "square": true,
      "size": "large",
      "type": "danger",
      "text": props.addText || contact_list_t('addText')
    },
    "class": contact_list_bem('add'),
    "on": {
      "click": function click() {
        emit(ctx, 'add');
      }
    }
  })]);
}

ContactList.props = {
  value: null,
  list: Array,
  addText: String
};
/* harmony default export */ var contact_list = (contact_list_createComponent(ContactList));
// EXTERNAL MODULE: ./node_modules/vant/es/utils/format/string.js
var string = __webpack_require__("68ed");

// CONCATENATED MODULE: ./node_modules/vant/es/count-down/utils.js

var SECOND = 1000;
var MINUTE = 60 * SECOND;
var HOUR = 60 * MINUTE;
var DAY = 24 * HOUR;
function parseTimeData(time) {
  var days = Math.floor(time / DAY);
  var hours = Math.floor(time % DAY / HOUR);
  var minutes = Math.floor(time % HOUR / MINUTE);
  var seconds = Math.floor(time % MINUTE / SECOND);
  var milliseconds = Math.floor(time % SECOND);
  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    milliseconds: milliseconds
  };
}
function parseFormat(format, timeData) {
  var days = timeData.days;
  var hours = timeData.hours,
      minutes = timeData.minutes,
      seconds = timeData.seconds,
      milliseconds = timeData.milliseconds;

  if (format.indexOf('DD') === -1) {
    hours += days * 24;
  } else {
    format = format.replace('DD', Object(string["b" /* padZero */])(days));
  }

  if (format.indexOf('HH') === -1) {
    minutes += hours * 60;
  } else {
    format = format.replace('HH', Object(string["b" /* padZero */])(hours));
  }

  if (format.indexOf('mm') === -1) {
    seconds += minutes * 60;
  } else {
    format = format.replace('mm', Object(string["b" /* padZero */])(minutes));
  }

  if (format.indexOf('ss') === -1) {
    milliseconds += seconds * 1000;
  } else {
    format = format.replace('ss', Object(string["b" /* padZero */])(seconds));
  }

  return format.replace('SSS', Object(string["b" /* padZero */])(milliseconds, 3));
}
function isSameSecond(time1, time2) {
  return Math.floor(time1 / 1000) === Math.floor(time2 / 1000);
}
// CONCATENATED MODULE: ./node_modules/vant/es/count-down/index.js




var count_down_createNamespace = Object(create["a" /* createNamespace */])('count-down'),
    count_down_createComponent = count_down_createNamespace[0],
    count_down_bem = count_down_createNamespace[1];

/* harmony default export */ var count_down = (count_down_createComponent({
  props: {
    millisecond: Boolean,
    time: {
      type: Number,
      default: 0
    },
    format: {
      type: String,
      default: 'HH:mm:ss'
    },
    autoStart: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      remain: 0
    };
  },
  computed: {
    timeData: function timeData() {
      return parseTimeData(this.remain);
    },
    formattedTime: function formattedTime() {
      return parseFormat(this.format, this.timeData);
    }
  },
  watch: {
    time: {
      immediate: true,
      handler: function handler() {
        this.reset();
      }
    }
  },
  methods: {
    start: function start() {
      if (this.counting) {
        return;
      }

      this.counting = true;
      this.endTime = Date.now() + this.remain;
      this.tick();
    },
    pause: function pause() {
      this.counting = false;
      Object(raf["a" /* cancelRaf */])(this.rafId);
    },
    reset: function reset() {
      this.pause();
      this.remain = this.time;

      if (this.autoStart) {
        this.start();
      }
    },
    tick: function tick() {
      if (this.millisecond) {
        this.microTick();
      } else {
        this.macroTick();
      }
    },
    microTick: function microTick() {
      var _this = this;

      this.rafId = Object(raf["c" /* raf */])(function () {
        _this.setRemain(_this.getRemain());

        if (_this.remain !== 0) {
          _this.microTick();
        }
      });
    },
    macroTick: function macroTick() {
      var _this2 = this;

      this.rafId = Object(raf["c" /* raf */])(function () {
        var remain = _this2.getRemain();

        if (!isSameSecond(remain, _this2.remain) || remain === 0) {
          _this2.setRemain(remain);
        }

        if (_this2.remain !== 0) {
          _this2.macroTick();
        }
      });
    },
    getRemain: function getRemain() {
      return Math.max(this.endTime - Date.now(), 0);
    },
    setRemain: function setRemain(remain) {
      this.remain = remain;

      if (remain === 0) {
        this.pause();
        this.$emit('finish');
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": count_down_bem()
    }, [this.slots('default', this.timeData) || this.formattedTime]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/coupon/index.js





var coupon_createNamespace = Object(create["a" /* createNamespace */])('coupon'),
    coupon_createComponent = coupon_createNamespace[0],
    coupon_bem = coupon_createNamespace[1],
    coupon_t = coupon_createNamespace[2];

function getDate(timeStamp) {
  var date = new Date(timeStamp * 1000);
  return date.getFullYear() + "." + Object(string["b" /* padZero */])(date.getMonth() + 1) + "." + Object(string["b" /* padZero */])(date.getDate());
}

function formatDiscount(discount) {
  return (discount / 10).toFixed(discount % 10 === 0 ? 0 : 1);
}

function formatAmount(amount) {
  return (amount / 100).toFixed(amount % 100 === 0 ? 0 : amount % 10 === 0 ? 1 : 2);
}

/* harmony default export */ var es_coupon = (coupon_createComponent({
  props: {
    coupon: Object,
    chosen: Boolean,
    disabled: Boolean,
    currency: {
      type: String,
      default: '¥'
    }
  },
  computed: {
    validPeriod: function validPeriod() {
      var _this$coupon = this.coupon,
          startAt = _this$coupon.startAt,
          endAt = _this$coupon.endAt;
      return coupon_t('valid') + "\uFF1A" + getDate(startAt) + " - " + getDate(endAt);
    },
    faceAmount: function faceAmount() {
      var coupon = this.coupon;

      if (coupon.valueDesc) {
        return coupon.valueDesc + "<span>" + (coupon.unitDesc || '') + "</span>";
      }

      if (coupon.denominations) {
        return "<span>" + this.currency + "</span> " + formatAmount(this.coupon.denominations);
      }

      if (coupon.discount) {
        return coupon_t('discount', formatDiscount(this.coupon.discount));
      }

      return '';
    },
    conditionMessage: function conditionMessage() {
      var condition = formatAmount(this.coupon.originCondition);
      return condition === '0' ? coupon_t('unlimited') : coupon_t('condition', condition);
    }
  },
  render: function render() {
    var h = arguments[0];
    var coupon = this.coupon,
        disabled = this.disabled;
    var description = disabled && coupon.reason || coupon.description;
    return h("div", {
      "class": coupon_bem({
        disabled: disabled
      })
    }, [h("div", {
      "class": coupon_bem('content')
    }, [h("div", {
      "class": coupon_bem('head')
    }, [h("h2", {
      "class": coupon_bem('amount'),
      "domProps": {
        "innerHTML": this.faceAmount
      }
    }), h("p", [this.coupon.condition || this.conditionMessage])]), h("div", {
      "class": coupon_bem('body')
    }, [h("h2", {
      "class": coupon_bem('name')
    }, [coupon.name]), h("p", [this.validPeriod]), this.chosen && h(es_checkbox, {
      "attrs": {
        "value": true,
        "checked-color": RED
      },
      "class": coupon_bem('corner')
    })])]), description && h("p", {
      "class": coupon_bem('description')
    }, [description])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/coupon-cell/index.js



 // Types

var coupon_cell_createNamespace = Object(create["a" /* createNamespace */])('coupon-cell'),
    coupon_cell_createComponent = coupon_cell_createNamespace[0],
    coupon_cell_bem = coupon_cell_createNamespace[1],
    coupon_cell_t = coupon_cell_createNamespace[2];

function coupon_cell_formatValue(props) {
  var coupons = props.coupons,
      chosenCoupon = props.chosenCoupon,
      currency = props.currency;
  var coupon = coupons[chosenCoupon];

  if (coupon) {
    var value = coupon.denominations || coupon.value;
    return "-" + currency + (value / 100).toFixed(2);
  }

  return coupons.length === 0 ? coupon_cell_t('tips') : coupon_cell_t('count', coupons.length);
}

function CouponCell(h, props, slots, ctx) {
  var valueClass = props.coupons[props.chosenCoupon] ? 'van-coupon-cell--selected' : '';
  var value = coupon_cell_formatValue(props);
  return h(cell, helper_default()([{
    "class": coupon_cell_bem(),
    "attrs": {
      "value": value,
      "title": props.title || coupon_cell_t('title'),
      "border": props.border,
      "isLink": props.editable,
      "valueClass": valueClass
    }
  }, inherit(ctx, true)]));
}

CouponCell.model = {
  prop: 'chosenCoupon'
};
CouponCell.props = {
  title: String,
  coupons: {
    type: Array,
    default: function _default() {
      return [];
    }
  },
  currency: {
    type: String,
    default: '¥'
  },
  border: {
    type: Boolean,
    default: true
  },
  editable: {
    type: Boolean,
    default: true
  },
  chosenCoupon: {
    type: Number,
    default: -1
  }
};
/* harmony default export */ var coupon_cell = (coupon_cell_createComponent(CouponCell));
// CONCATENATED MODULE: ./node_modules/vant/es/tab/index.js
/* eslint-disable object-shorthand */



var tab_createNamespace = Object(create["a" /* createNamespace */])('tab'),
    tab_createComponent = tab_createNamespace[0],
    tab_bem = tab_createNamespace[1];

/* harmony default export */ var tab = (tab_createComponent({
  mixins: [ChildrenMixin('vanTabs')],
  props: {
    name: [Number, String],
    title: String,
    disabled: Boolean
  },
  data: function data() {
    return {
      inited: false
    };
  },
  computed: {
    computedName: function computedName() {
      return this.name || this.index;
    },
    isActive: function isActive() {
      return this.computedName === this.parent.currentName;
    }
  },
  watch: {
    'parent.currentIndex': function parentCurrentIndex() {
      this.inited = this.inited || this.isActive;
    },
    title: function title() {
      this.parent.setLine();
    }
  },
  mounted: function mounted() {
    if (this.slots('title')) {
      this.parent.renderTitle(this.$refs.title, this.index);
    }
  },
  render: function render(h) {
    var slots = this.slots,
        isActive = this.isActive;
    var shouldRender = this.inited || !this.parent.lazyRender;
    var Content = [shouldRender ? slots() : h()];

    if (slots('title')) {
      Content.push(h("div", {
        "ref": "title"
      }, [slots('title')]));
    }

    if (this.parent.animated) {
      return h("div", {
        "attrs": {
          "role": "tabpanel",
          "aria-hidden": !isActive
        },
        "class": tab_bem('pane-wrapper', {
          inactive: !isActive
        })
      }, [h("div", {
        "class": tab_bem('pane')
      }, [Content])]);
    }

    return h("div", {
      "directives": [{
        name: "show",
        value: isActive
      }],
      "attrs": {
        "role": "tabpanel"
      },
      "class": tab_bem('pane')
    }, [Content]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/tabs/utils.js

function scrollLeftTo(el, to, duration) {
  var count = 0;
  var from = el.scrollLeft;
  var frames = duration === 0 ? 1 : Math.round(duration * 1000 / 16);

  function animate() {
    el.scrollLeft += (to - from) / frames;

    if (++count < frames) {
      Object(raf["c" /* raf */])(animate);
    }
  }

  animate();
}
// CONCATENATED MODULE: ./node_modules/vant/es/utils/dom/style.js
function isHidden(element) {
  return window.getComputedStyle(element).display === 'none' || element.offsetParent === null;
}
// CONCATENATED MODULE: ./node_modules/vant/es/tabs/Title.js

var Title_bem = Object(create["a" /* createNamespace */])('tab')[1];
/* harmony default export */ var tabs_Title = ({
  props: {
    type: String,
    color: String,
    title: String,
    isActive: Boolean,
    ellipsis: Boolean,
    disabled: Boolean,
    scrollable: Boolean,
    activeColor: String,
    inactiveColor: String,
    swipeThreshold: Number
  },
  computed: {
    style: function style() {
      var style = {};
      var color = this.color,
          isActive = this.isActive;
      var isCard = this.type === 'card'; // card theme color

      if (color && isCard) {
        style.borderColor = color;

        if (!this.disabled) {
          if (isActive) {
            style.backgroundColor = color;
          } else {
            style.color = color;
          }
        }
      }

      var titleColor = isActive ? this.activeColor : this.inactiveColor;

      if (titleColor) {
        style.color = titleColor;
      }

      if (this.scrollable && this.ellipsis) {
        style.flexBasis = 88 / this.swipeThreshold + "%";
      }

      return style;
    }
  },
  methods: {
    onClick: function onClick() {
      this.$emit('click');
    },
    renderTitle: function renderTitle(el) {
      var title = this.$refs.title;
      title.innerHTML = '';
      title.appendChild(el);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "attrs": {
        "role": "tab",
        "aria-selected": this.isActive
      },
      "class": Title_bem({
        active: this.isActive,
        disabled: this.disabled,
        complete: !this.ellipsis
      }),
      "style": this.style,
      "on": {
        "click": this.onClick
      }
    }, [h("span", {
      "ref": "title",
      "class": {
        'van-ellipsis': this.ellipsis
      }
    }, [this.title])]);
  }
});
// CONCATENATED MODULE: ./node_modules/vant/es/tabs/Content.js




var Content_createNamespace = Object(create["a" /* createNamespace */])('tabs'),
    Content_createComponent = Content_createNamespace[0],
    Content_bem = Content_createNamespace[1];

var MIN_SWIPE_DISTANCE = 50;
/* harmony default export */ var tabs_Content = (Content_createComponent({
  mixins: [TouchMixin],
  props: {
    count: Number,
    duration: Number,
    animated: Boolean,
    swipeable: Boolean,
    currentIndex: Number
  },
  computed: {
    style: function style() {
      if (this.animated) {
        return {
          transform: "translate3d(" + -1 * this.currentIndex * 100 + "%, 0, 0)",
          transitionDuration: this.duration + "s"
        };
      }
    },
    listeners: function listeners() {
      if (this.swipeable) {
        return {
          touchstart: this.touchStart,
          touchmove: this.touchMove,
          touchend: this.onTouchEnd,
          touchcancel: this.onTouchEnd
        };
      }
    }
  },
  methods: {
    // watch swipe touch end
    onTouchEnd: function onTouchEnd() {
      var direction = this.direction,
          deltaX = this.deltaX,
          currentIndex = this.currentIndex;
      /* istanbul ignore else */

      if (direction === 'horizontal' && this.offsetX >= MIN_SWIPE_DISTANCE) {
        /* istanbul ignore else */
        if (deltaX > 0 && currentIndex !== 0) {
          this.$emit('change', currentIndex - 1);
        } else if (deltaX < 0 && currentIndex !== this.count - 1) {
          this.$emit('change', currentIndex + 1);
        }
      }
    },
    renderChildren: function renderChildren() {
      var h = this.$createElement;

      if (this.animated) {
        return h("div", {
          "class": Content_bem('track'),
          "style": this.style
        }, [this.slots()]);
      }

      return this.slots();
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": Content_bem('content', {
        animated: this.animated
      }),
      "on": _extends({}, this.listeners)
    }, [this.renderChildren()]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/sticky/index.js




var sticky_createNamespace = Object(create["a" /* createNamespace */])('sticky'),
    sticky_createComponent = sticky_createNamespace[0],
    sticky_bem = sticky_createNamespace[1];

/* harmony default export */ var sticky = (sticky_createComponent({
  mixins: [BindEventMixin(function (bind) {
    if (!this.scroller) {
      this.scroller = getScrollEventTarget(this.$el);
    }

    bind(this.scroller, 'scroll', this.onScroll, true);
    this.onScroll();
  })],
  props: {
    zIndex: Number,
    container: null,
    offsetTop: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      fixed: false,
      height: 0,
      transform: 0
    };
  },
  computed: {
    style: function style() {
      if (!this.fixed) {
        return;
      }

      var style = {};

      if (Object(utils["b" /* isDef */])(this.zIndex)) {
        style.zIndex = this.zIndex;
      }

      if (this.offsetTop && this.fixed) {
        style.top = this.offsetTop + "px";
      }

      if (this.transform) {
        style.transform = "translate3d(0, " + this.transform + "px, 0)";
      }

      return style;
    }
  },
  methods: {
    onScroll: function onScroll() {
      var _this = this;

      this.height = this.$el.offsetHeight;
      var container = this.container,
          offsetTop = this.offsetTop;
      var scrollTop = getScrollTop(this.scroller);
      var topToPageTop = getElementTop(this.$el);

      var emitScrollEvent = function emitScrollEvent() {
        _this.$emit('scroll', {
          scrollTop: scrollTop,
          isFixed: _this.fixed
        });
      }; // The sticky component should be kept inside the container element


      if (container) {
        var bottomToPageTop = topToPageTop + container.offsetHeight;

        if (scrollTop + offsetTop + this.height > bottomToPageTop) {
          var distanceToBottom = this.height + scrollTop - bottomToPageTop;

          if (distanceToBottom < this.height) {
            this.fixed = true;
            this.transform = -(distanceToBottom + offsetTop);
          } else {
            this.fixed = false;
          }

          emitScrollEvent();
          return;
        }
      }

      if (scrollTop + offsetTop > topToPageTop) {
        this.fixed = true;
        this.transform = 0;
      } else {
        this.fixed = false;
      }

      emitScrollEvent();
    }
  },
  render: function render() {
    var h = arguments[0];
    var fixed = this.fixed;
    var style = {
      height: fixed ? this.height + "px" : null
    };
    return h("div", {
      "style": style
    }, [h("div", {
      "class": sticky_bem({
        fixed: fixed
      }),
      "style": this.style
    }, [this.slots()])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/tabs/index.js










var tabs_createNamespace = Object(create["a" /* createNamespace */])('tabs'),
    tabs_createComponent = tabs_createNamespace[0],
    tabs_bem = tabs_createNamespace[1];

/* harmony default export */ var tabs = (tabs_createComponent({
  mixins: [ParentMixin('vanTabs'), BindEventMixin(function (bind) {
    bind(window, 'resize', this.setLine, true);
  })],
  model: {
    prop: 'active'
  },
  props: {
    color: String,
    sticky: Boolean,
    animated: Boolean,
    swipeable: Boolean,
    background: String,
    lineWidth: [Number, String],
    lineHeight: [Number, String],
    titleActiveColor: String,
    titleInactiveColor: String,
    type: {
      type: String,
      default: 'line'
    },
    active: {
      type: [Number, String],
      default: 0
    },
    border: {
      type: Boolean,
      default: true
    },
    ellipsis: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 0.3
    },
    offsetTop: {
      type: Number,
      default: 0
    },
    lazyRender: {
      type: Boolean,
      default: true
    },
    swipeThreshold: {
      type: Number,
      default: 4
    }
  },
  data: function data() {
    return {
      position: '',
      currentIndex: null,
      lineStyle: {
        backgroundColor: this.color
      }
    };
  },
  computed: {
    // whether the nav is scrollable
    scrollable: function scrollable() {
      return this.children.length > this.swipeThreshold || !this.ellipsis;
    },
    navStyle: function navStyle() {
      return {
        borderColor: this.color,
        background: this.background
      };
    },
    currentName: function currentName() {
      var activeTab = this.children[this.currentIndex];

      if (activeTab) {
        return activeTab.computedName;
      }
    }
  },
  watch: {
    active: function active(name) {
      if (name !== this.currentName) {
        this.setCurrentIndexByName(name);
      }
    },
    color: function color() {
      this.setLine();
    },
    children: function children() {
      this.setCurrentIndexByName(this.currentName || this.active);
      this.scrollIntoView();
      this.setLine();
    },
    currentIndex: function currentIndex() {
      this.scrollIntoView();
      this.setLine(); // scroll to correct position

      if (this.stickyFixed) {
        setRootScrollTop(Math.ceil(getElementTop(this.$el) - this.offsetTop));
      }
    }
  },
  mounted: function mounted() {
    this.onShow();
  },
  activated: function activated() {
    this.onShow();
    this.setLine();
  },
  methods: {
    onShow: function onShow() {
      var _this = this;

      this.$nextTick(function () {
        _this.inited = true;

        _this.scrollIntoView(true);
      });
    },
    // update nav bar style
    setLine: function setLine() {
      var _this2 = this;

      var shouldAnimate = this.inited;
      this.$nextTick(function () {
        var titles = _this2.$refs.titles;

        if (!titles || !titles[_this2.currentIndex] || _this2.type !== 'line' || isHidden(_this2.$el)) {
          return;
        }

        var title = titles[_this2.currentIndex].$el;
        var lineWidth = _this2.lineWidth,
            lineHeight = _this2.lineHeight;
        var width = Object(utils["b" /* isDef */])(lineWidth) ? lineWidth : title.offsetWidth / 2;
        var left = title.offsetLeft + title.offsetWidth / 2;
        var lineStyle = {
          width: Object(unit["a" /* addUnit */])(width),
          backgroundColor: _this2.color,
          transform: "translateX(" + left + "px) translateX(-50%)"
        };

        if (shouldAnimate) {
          lineStyle.transitionDuration = _this2.duration + "s";
        }

        if (Object(utils["b" /* isDef */])(lineHeight)) {
          var height = Object(unit["a" /* addUnit */])(lineHeight);
          lineStyle.height = height;
          lineStyle.borderRadius = height;
        }

        _this2.lineStyle = lineStyle;
      });
    },
    // correct the index of active tab
    setCurrentIndexByName: function setCurrentIndexByName(name) {
      var matched = this.children.filter(function (tab) {
        return tab.computedName === name;
      });
      var defaultIndex = (this.children[0] || {}).index || 0;
      this.setCurrentIndex(matched.length ? matched[0].index : defaultIndex);
    },
    setCurrentIndex: function setCurrentIndex(currentIndex) {
      currentIndex = this.findAvailableTab(currentIndex);

      if (Object(utils["b" /* isDef */])(currentIndex) && currentIndex !== this.currentIndex) {
        var shouldEmitChange = this.currentIndex !== null;
        this.currentIndex = currentIndex;
        this.$emit('input', this.currentName);

        if (shouldEmitChange) {
          this.$emit('change', this.currentName, this.children[currentIndex].title);
        }
      }
    },
    findAvailableTab: function findAvailableTab(index) {
      var diff = index < this.currentIndex ? -1 : 1;

      while (index >= 0 && index < this.children.length) {
        if (!this.children[index].disabled) {
          return index;
        }

        index += diff;
      }
    },
    // emit event when clicked
    onClick: function onClick(index) {
      var _this$children$index = this.children[index],
          title = _this$children$index.title,
          disabled = _this$children$index.disabled,
          computedName = _this$children$index.computedName;

      if (disabled) {
        this.$emit('disabled', computedName, title);
      } else {
        this.setCurrentIndex(index);
        this.$emit('click', computedName, title);
      }
    },
    // scroll active tab into view
    scrollIntoView: function scrollIntoView(immediate) {
      var titles = this.$refs.titles;

      if (!this.scrollable || !titles || !titles[this.currentIndex]) {
        return;
      }

      var nav = this.$refs.nav;
      var title = titles[this.currentIndex].$el;
      var to = title.offsetLeft - (nav.offsetWidth - title.offsetWidth) / 2;
      scrollLeftTo(nav, to, immediate ? 0 : this.duration);
    },
    // render title slot of child tab
    renderTitle: function renderTitle(el, index) {
      var _this3 = this;

      this.$nextTick(function () {
        _this3.$refs.titles[index].renderTitle(el);
      });
    },
    onScroll: function onScroll(params) {
      this.stickyFixed = params.isFixed;
      this.$emit('scroll', params);
    }
  },
  render: function render() {
    var _this4 = this;

    var h = arguments[0];
    var type = this.type,
        ellipsis = this.ellipsis,
        animated = this.animated,
        scrollable = this.scrollable;
    var Nav = this.children.map(function (item, index) {
      return h(tabs_Title, {
        "ref": "titles",
        "refInFor": true,
        "attrs": {
          "type": type,
          "title": item.title,
          "color": _this4.color,
          "isActive": index === _this4.currentIndex,
          "ellipsis": ellipsis,
          "disabled": item.disabled,
          "scrollable": scrollable,
          "activeColor": _this4.titleActiveColor,
          "inactiveColor": _this4.titleInactiveColor,
          "swipeThreshold": _this4.swipeThreshold
        },
        "on": {
          "click": function click() {
            _this4.onClick(index);
          }
        }
      });
    });
    var Wrap = h("div", {
      "ref": "wrap",
      "class": [tabs_bem('wrap', {
        scrollable: scrollable
      }), {
        'van-hairline--top-bottom': type === 'line' && this.border
      }]
    }, [h("div", {
      "ref": "nav",
      "attrs": {
        "role": "tablist"
      },
      "class": tabs_bem('nav', [type]),
      "style": this.navStyle
    }, [this.slots('nav-left'), Nav, type === 'line' && h("div", {
      "class": tabs_bem('line'),
      "style": this.lineStyle
    }), this.slots('nav-right')])]);
    return h("div", {
      "class": tabs_bem([type])
    }, [this.sticky ? h(sticky, {
      "attrs": {
        "container": this.$el,
        "offsetTop": this.offsetTop
      },
      "on": {
        "scroll": this.onScroll
      }
    }, [Wrap]) : Wrap, h(tabs_Content, {
      "attrs": {
        "count": this.children.length,
        "animated": animated,
        "duration": this.duration,
        "swipeable": this.swipeable,
        "currentIndex": this.currentIndex
      },
      "on": {
        "change": this.setCurrentIndex
      }
    }, [this.slots()])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/coupon-list/index.js







var coupon_list_createNamespace = Object(create["a" /* createNamespace */])('coupon-list'),
    coupon_list_createComponent = coupon_list_createNamespace[0],
    coupon_list_bem = coupon_list_createNamespace[1],
    coupon_list_t = coupon_list_createNamespace[2];

var EMPTY_IMAGE = 'https://img.yzcdn.cn/vant/coupon-empty.png';
/* harmony default export */ var coupon_list = (coupon_list_createComponent({
  model: {
    prop: 'code'
  },
  props: {
    code: String,
    closeButtonText: String,
    inputPlaceholder: String,
    enabledTitle: String,
    disabledTitle: String,
    exchangeButtonText: String,
    exchangeButtonLoading: Boolean,
    exchangeButtonDisabled: Boolean,
    exchangeMinLength: {
      type: Number,
      default: 1
    },
    chosenCoupon: {
      type: Number,
      default: -1
    },
    coupons: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    disabledCoupons: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    displayedCouponIndex: {
      type: Number,
      default: -1
    },
    showExchangeBar: {
      type: Boolean,
      default: true
    },
    showCloseButton: {
      type: Boolean,
      default: true
    },
    currency: {
      type: String,
      default: '¥'
    },
    emptyImage: {
      type: String,
      default: EMPTY_IMAGE
    }
  },
  data: function data() {
    return {
      tab: 0,
      winHeight: window.innerHeight,
      currentCode: this.code || ''
    };
  },
  computed: {
    buttonDisabled: function buttonDisabled() {
      return !this.exchangeButtonLoading && (this.exchangeButtonDisabled || !this.currentCode || this.currentCode.length < this.exchangeMinLength);
    },
    listStyle: function listStyle() {
      return {
        height: this.winHeight - (this.showExchangeBar ? 140 : 94) + 'px'
      };
    }
  },
  watch: {
    code: function code(_code) {
      this.currentCode = _code;
    },
    currentCode: function currentCode(code) {
      this.$emit('input', code);
    },
    displayedCouponIndex: function displayedCouponIndex(val) {
      this.scrollToShowCoupon(val);
    }
  },
  mounted: function mounted() {
    this.scrollToShowCoupon(this.displayedCouponIndex);
  },
  methods: {
    onClickExchangeButton: function onClickExchangeButton() {
      this.$emit('exchange', this.currentCode); // auto clear currentCode when not use vModel

      if (!this.code) {
        this.currentCode = '';
      }
    },
    // scroll to show specific coupon
    scrollToShowCoupon: function scrollToShowCoupon(index) {
      var _this = this;

      if (index === -1) {
        return;
      }

      this.$nextTick(function () {
        var _this$$refs = _this.$refs,
            card = _this$$refs.card,
            list = _this$$refs.list;
        /* istanbul ignore next */

        if (list && card && card[index]) {
          list.scrollTop = card[index].$el.offsetTop - 100;
        }
      });
    },
    renderEmpty: function renderEmpty() {
      var h = this.$createElement;
      return h("div", {
        "class": coupon_list_bem('empty')
      }, [h("img", {
        "attrs": {
          "src": this.emptyImage
        }
      }), h("p", [coupon_list_t('empty')])]);
    },
    renderExchangeButton: function renderExchangeButton() {
      var h = this.$createElement;
      return h(es_button, {
        "attrs": {
          "size": "small",
          "type": "danger",
          "text": this.exchangeButtonText || coupon_list_t('exchange'),
          "loading": this.exchangeButtonLoading,
          "disabled": this.buttonDisabled
        },
        "class": coupon_list_bem('exchange'),
        "on": {
          "click": this.onClickExchangeButton
        }
      });
    }
  },
  render: function render() {
    var _this2 = this;

    var h = arguments[0];
    var coupons = this.coupons,
        disabledCoupons = this.disabledCoupons;
    var title = (this.enabledTitle || coupon_list_t('enable')) + " (" + coupons.length + ")";
    var disabledTitle = (this.disabledTitle || coupon_list_t('disabled')) + " (" + disabledCoupons.length + ")";
    var ExchangeBar = this.showExchangeBar && h(field, {
      "attrs": {
        "clearable": true,
        "border": false,
        "placeholder": this.inputPlaceholder || coupon_list_t('placeholder'),
        "maxlength": "20"
      },
      "class": coupon_list_bem('field'),
      "scopedSlots": {
        button: this.renderExchangeButton
      },
      "model": {
        value: _this2.currentCode,
        callback: function callback($$v) {
          _this2.currentCode = $$v;
        }
      }
    });

    var onChange = function onChange(index) {
      return function () {
        return _this2.$emit('change', index);
      };
    };

    var CouponTab = h(tab, {
      "attrs": {
        "title": title
      }
    }, [h("div", {
      "class": coupon_list_bem('list'),
      "style": this.listStyle
    }, [coupons.map(function (coupon, index) {
      return h(es_coupon, {
        "ref": "card",
        "key": coupon.id,
        "attrs": {
          "coupon": coupon,
          "currency": _this2.currency,
          "chosen": index === _this2.chosenCoupon
        },
        "nativeOn": {
          "click": onChange(index)
        }
      });
    }), !coupons.length && this.renderEmpty()])]);
    var DisabledCouponTab = h(tab, {
      "attrs": {
        "title": disabledTitle
      }
    }, [h("div", {
      "class": coupon_list_bem('list'),
      "style": this.listStyle
    }, [disabledCoupons.map(function (coupon) {
      return h(es_coupon, {
        "attrs": {
          "disabled": true,
          "coupon": coupon,
          "currency": _this2.currency
        },
        "key": coupon.id
      });
    }), !disabledCoupons.length && this.renderEmpty()])]);
    return h("div", {
      "class": coupon_list_bem()
    }, [ExchangeBar, h(tabs, {
      "class": coupon_list_bem('tab'),
      "attrs": {
        "line-width": 120
      },
      "model": {
        value: _this2.tab,
        callback: function callback($$v) {
          _this2.tab = $$v;
        }
      }
    }, [CouponTab, DisabledCouponTab]), h(es_button, {
      "directives": [{
        name: "show",
        value: this.showCloseButton
      }],
      "attrs": {
        "size": "large",
        "text": this.closeButtonText || coupon_list_t('close')
      },
      "class": coupon_list_bem('close'),
      "on": {
        "click": onChange(-1)
      }
    })]);
  }
}));
// EXTERNAL MODULE: ./node_modules/vant/es/utils/validate/number.js
var number = __webpack_require__("90c6");

// CONCATENATED MODULE: ./node_modules/vant/es/datetime-picker/utils.js

function times(n, iteratee) {
  var index = -1;
  var result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}
function getTrueValue(value) {
  if (!value) {
    return;
  }

  while (Object(number["a" /* isNaN */])(parseInt(value, 10))) {
    value = value.slice(1);
  }

  return parseInt(value, 10);
}
function getMonthEndDay(year, month) {
  return 32 - new Date(year, month - 1, 32).getDate();
}
// CONCATENATED MODULE: ./node_modules/vant/es/datetime-picker/shared.js





var sharedProps = _extends({}, pickerProps, {
  value: null,
  filter: Function,
  showToolbar: {
    type: Boolean,
    default: true
  },
  formatter: {
    type: Function,
    default: function _default(type, value) {
      return value;
    }
  }
});
var TimePickerMixin = {
  data: function data() {
    return {
      innerValue: this.formatValue(this.value)
    };
  },
  computed: {
    originColumns: function originColumns() {
      var _this = this;

      return this.ranges.map(function (_ref) {
        var type = _ref.type,
            rangeArr = _ref.range;
        var values = times(rangeArr[1] - rangeArr[0] + 1, function (index) {
          var value = Object(string["b" /* padZero */])(rangeArr[0] + index);
          return value;
        });

        if (_this.filter) {
          values = _this.filter(type, values);
        }

        return {
          type: type,
          values: values
        };
      });
    },
    columns: function columns() {
      var _this2 = this;

      return this.originColumns.map(function (column) {
        return {
          values: column.values.map(function (value) {
            return _this2.formatter(column.type, value);
          })
        };
      });
    }
  },
  watch: {
    innerValue: function innerValue(val) {
      this.$emit('input', val);
    },
    columns: function columns() {
      this.updateColumnValue(this.innerValue);
    }
  },
  mounted: function mounted() {
    this.updateColumnValue(this.innerValue);
  },
  methods: {
    onConfirm: function onConfirm() {
      this.$emit('confirm', this.innerValue);
    },
    onCancel: function onCancel() {
      this.$emit('cancel');
    }
  },
  render: function render() {
    var _this3 = this;

    var h = arguments[0];
    var props = {};
    Object.keys(pickerProps).forEach(function (key) {
      props[key] = _this3[key];
    });
    return h(es_picker, {
      "ref": "picker",
      "attrs": {
        "columns": this.columns
      },
      "on": {
        "change": this.onChange,
        "confirm": this.onConfirm,
        "cancel": this.onCancel
      },
      "props": _extends({}, props)
    });
  }
};
// CONCATENATED MODULE: ./node_modules/vant/es/datetime-picker/TimePicker.js






var TimePicker_createNamespace = Object(create["a" /* createNamespace */])('time-picker'),
    TimePicker_createComponent = TimePicker_createNamespace[0];

/* harmony default export */ var TimePicker = (TimePicker_createComponent({
  mixins: [TimePickerMixin],
  props: _extends({}, sharedProps, {
    minHour: {
      type: Number,
      default: 0
    },
    maxHour: {
      type: Number,
      default: 23
    },
    minMinute: {
      type: Number,
      default: 0
    },
    maxMinute: {
      type: Number,
      default: 59
    }
  }),
  computed: {
    ranges: function ranges() {
      return [{
        type: 'hour',
        range: [this.minHour, this.maxHour]
      }, {
        type: 'minute',
        range: [this.minMinute, this.maxMinute]
      }];
    }
  },
  watch: {
    value: function value(val) {
      val = this.formatValue(val);

      if (val !== this.innerValue) {
        this.innerValue = val;
        this.updateColumnValue(val);
      }
    }
  },
  methods: {
    formatValue: function formatValue(value) {
      if (!value) {
        value = Object(string["b" /* padZero */])(this.minHour) + ":" + Object(string["b" /* padZero */])(this.minMinute);
      }

      var _value$split = value.split(':'),
          hour = _value$split[0],
          minute = _value$split[1];

      hour = Object(string["b" /* padZero */])(range(hour, this.minHour, this.maxHour));
      minute = Object(string["b" /* padZero */])(range(minute, this.minMinute, this.maxMinute));
      return hour + ":" + minute;
    },
    onChange: function onChange(picker) {
      var _this = this;

      var indexes = picker.getIndexes();
      var hour = this.originColumns[0].values[indexes[0]];
      var minute = this.originColumns[1].values[indexes[1]];
      var value = hour + ":" + minute;
      this.innerValue = this.formatValue(value);
      this.$nextTick(function () {
        _this.$nextTick(function () {
          _this.$emit('change', picker);
        });
      });
    },
    updateColumnValue: function updateColumnValue(value) {
      var _this2 = this;

      var formatter = this.formatter;
      var pair = value.split(':');
      var values = [formatter('hour', pair[0]), formatter('minute', pair[1])];
      this.$nextTick(function () {
        _this2.$refs.picker.setValues(values);
      });
    }
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/utils/validate/date.js

function isDate(date) {
  return Object.prototype.toString.call(date) === '[object Date]' && !Object(number["a" /* isNaN */])(date.getTime());
}
// CONCATENATED MODULE: ./node_modules/vant/es/datetime-picker/DatePicker.js






var currentYear = new Date().getFullYear();

var DatePicker_createNamespace = Object(create["a" /* createNamespace */])('date-picker'),
    DatePicker_createComponent = DatePicker_createNamespace[0];

/* harmony default export */ var DatePicker = (DatePicker_createComponent({
  mixins: [TimePickerMixin],
  props: _extends({}, sharedProps, {
    type: {
      type: String,
      default: 'datetime'
    },
    minDate: {
      type: Date,
      default: function _default() {
        return new Date(currentYear - 10, 0, 1);
      },
      validator: isDate
    },
    maxDate: {
      type: Date,
      default: function _default() {
        return new Date(currentYear + 10, 11, 31);
      },
      validator: isDate
    }
  }),
  watch: {
    value: function value(val) {
      val = this.formatValue(val);

      if (val.valueOf() !== this.innerValue.valueOf()) {
        this.innerValue = val;
      }
    }
  },
  computed: {
    ranges: function ranges() {
      var _this$getBoundary = this.getBoundary('max', this.innerValue),
          maxYear = _this$getBoundary.maxYear,
          maxDate = _this$getBoundary.maxDate,
          maxMonth = _this$getBoundary.maxMonth,
          maxHour = _this$getBoundary.maxHour,
          maxMinute = _this$getBoundary.maxMinute;

      var _this$getBoundary2 = this.getBoundary('min', this.innerValue),
          minYear = _this$getBoundary2.minYear,
          minDate = _this$getBoundary2.minDate,
          minMonth = _this$getBoundary2.minMonth,
          minHour = _this$getBoundary2.minHour,
          minMinute = _this$getBoundary2.minMinute;

      var result = [{
        type: 'year',
        range: [minYear, maxYear]
      }, {
        type: 'month',
        range: [minMonth, maxMonth]
      }, {
        type: 'day',
        range: [minDate, maxDate]
      }, {
        type: 'hour',
        range: [minHour, maxHour]
      }, {
        type: 'minute',
        range: [minMinute, maxMinute]
      }];
      if (this.type === 'date') result.splice(3, 2);
      if (this.type === 'year-month') result.splice(2, 3);
      return result;
    }
  },
  methods: {
    formatValue: function formatValue(value) {
      if (!isDate(value)) {
        value = this.minDate;
      }

      value = Math.max(value, this.minDate.getTime());
      value = Math.min(value, this.maxDate.getTime());
      return new Date(value);
    },
    getBoundary: function getBoundary(type, value) {
      var _ref;

      var boundary = this[type + "Date"];
      var year = boundary.getFullYear();
      var month = 1;
      var date = 1;
      var hour = 0;
      var minute = 0;

      if (type === 'max') {
        month = 12;
        date = getMonthEndDay(value.getFullYear(), value.getMonth() + 1);
        hour = 23;
        minute = 59;
      }

      if (value.getFullYear() === year) {
        month = boundary.getMonth() + 1;

        if (value.getMonth() + 1 === month) {
          date = boundary.getDate();

          if (value.getDate() === date) {
            hour = boundary.getHours();

            if (value.getHours() === hour) {
              minute = boundary.getMinutes();
            }
          }
        }
      }

      return _ref = {}, _ref[type + "Year"] = year, _ref[type + "Month"] = month, _ref[type + "Date"] = date, _ref[type + "Hour"] = hour, _ref[type + "Minute"] = minute, _ref;
    },
    onChange: function onChange(picker) {
      var _this = this;

      var values = picker.getValues();
      var year = getTrueValue(values[0]);
      var month = getTrueValue(values[1]);
      var maxDate = getMonthEndDay(year, month);
      var date = getTrueValue(values[2]);

      if (this.type === 'year-month') {
        date = 1;
      }

      date = date > maxDate ? maxDate : date;
      var hour = 0;
      var minute = 0;

      if (this.type === 'datetime') {
        hour = getTrueValue(values[3]);
        minute = getTrueValue(values[4]);
      }

      var value = new Date(year, month - 1, date, hour, minute);
      this.innerValue = this.formatValue(value);
      this.$nextTick(function () {
        _this.$nextTick(function () {
          _this.$emit('change', picker);
        });
      });
    },
    updateColumnValue: function updateColumnValue(value) {
      var _this2 = this;

      var formatter = this.formatter;
      var values = [formatter('year', "" + value.getFullYear()), formatter('month', Object(string["b" /* padZero */])(value.getMonth() + 1)), formatter('day', Object(string["b" /* padZero */])(value.getDate()))];

      if (this.type === 'datetime') {
        values.push(formatter('hour', Object(string["b" /* padZero */])(value.getHours())), formatter('minute', Object(string["b" /* padZero */])(value.getMinutes())));
      }

      if (this.type === 'year-month') {
        values = values.slice(0, 2);
      }

      this.$nextTick(function () {
        _this2.$refs.picker.setValues(values);
      });
    }
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/datetime-picker/index.js





var datetime_picker_createNamespace = Object(create["a" /* createNamespace */])('datetime-picker'),
    datetime_picker_createComponent = datetime_picker_createNamespace[0],
    datetime_picker_bem = datetime_picker_createNamespace[1];

/* harmony default export */ var datetime_picker = (datetime_picker_createComponent({
  props: _extends({}, TimePicker.props, {}, DatePicker.props),
  render: function render() {
    var h = arguments[0];
    var Component = this.type === 'time' ? TimePicker : DatePicker;
    return h(Component, {
      "class": datetime_picker_bem(),
      "props": _extends({}, this.$props),
      "on": _extends({}, this.$listeners)
    });
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/divider/index.js


 // Types

var divider_createNamespace = Object(create["a" /* createNamespace */])('divider'),
    divider_createComponent = divider_createNamespace[0],
    divider_bem = divider_createNamespace[1];

function Divider(h, props, slots, ctx) {
  var _bem;

  return h("div", helper_default()([{
    "style": {
      borderColor: props.borderColor
    },
    "class": divider_bem((_bem = {
      dashed: props.dashed,
      hairline: props.hairline
    }, _bem["content-" + props.contentPosition] = slots.default, _bem))
  }, inherit(ctx, true)]), [slots.default && slots.default()]);
}

Divider.props = {
  dashed: Boolean,
  hairline: {
    type: Boolean,
    default: true
  },
  contentPosition: {
    type: String,
    default: 'center'
  }
};
/* harmony default export */ var divider = (divider_createComponent(Divider));
// CONCATENATED MODULE: ./node_modules/vant/es/dropdown-item/index.js






var dropdown_item_createNamespace = Object(create["a" /* createNamespace */])('dropdown-item'),
    dropdown_item_createComponent = dropdown_item_createNamespace[0],
    dropdown_item_bem = dropdown_item_createNamespace[1];

/* harmony default export */ var dropdown_item = (dropdown_item_createComponent({
  mixins: [ChildrenMixin('vanDropdownMenu')],
  props: {
    value: null,
    title: String,
    disabled: Boolean,
    titleClass: String,
    options: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      transition: true,
      showPopup: false,
      showWrapper: false
    };
  },
  computed: {
    displayTitle: function displayTitle() {
      var _this = this;

      if (this.title) {
        return this.title;
      }

      var match = this.options.filter(function (option) {
        return option.value === _this.value;
      });
      return match.length ? match[0].text : '';
    }
  },
  methods: {
    toggle: function toggle(show, options) {
      if (show === void 0) {
        show = !this.showPopup;
      }

      if (options === void 0) {
        options = {};
      }

      if (show === this.showPopup) {
        return;
      }

      this.transition = !options.immediate;
      this.showPopup = show;

      if (show) {
        this.parent.updateOffset();
        this.showWrapper = true;
      }
    }
  },
  beforeCreate: function beforeCreate() {
    var _this2 = this;

    var createEmitter = function createEmitter(eventName) {
      return function () {
        return _this2.$emit(eventName);
      };
    };

    this.onOpen = createEmitter('open');
    this.onClose = createEmitter('close');
    this.onOpened = createEmitter('opened');
  },
  render: function render() {
    var _this3 = this;

    var h = arguments[0];
    var _this$parent = this.parent,
        zIndex = _this$parent.zIndex,
        offset = _this$parent.offset,
        overlay = _this$parent.overlay,
        duration = _this$parent.duration,
        direction = _this$parent.direction,
        activeColor = _this$parent.activeColor,
        closeOnClickOverlay = _this$parent.closeOnClickOverlay;
    var Options = this.options.map(function (option) {
      var active = option.value === _this3.value;
      return h(cell, {
        "attrs": {
          "clickable": true,
          "icon": option.icon,
          "title": option.text
        },
        "key": option.value,
        "style": {
          color: active ? activeColor : ''
        },
        "on": {
          "click": function click() {
            _this3.showPopup = false;

            if (option.value !== _this3.value) {
              _this3.$emit('input', option.value);

              _this3.$emit('change', option.value);
            }
          }
        }
      }, [active && h(es_icon, {
        "class": dropdown_item_bem('icon'),
        "attrs": {
          "color": activeColor,
          "name": "success"
        }
      })]);
    });
    var style = {
      zIndex: zIndex
    };

    if (direction === 'down') {
      style.top = offset + "px";
    } else {
      style.bottom = offset + "px";
    }

    return h("div", {
      "directives": [{
        name: "show",
        value: this.showWrapper
      }],
      "style": style,
      "class": dropdown_item_bem([direction])
    }, [h(popup, {
      "attrs": {
        "overlay": overlay,
        "position": direction === 'down' ? 'top' : 'bottom',
        "duration": this.transition ? duration : 0,
        "closeOnClickOverlay": closeOnClickOverlay,
        "overlayStyle": {
          position: 'absolute'
        }
      },
      "class": dropdown_item_bem('content'),
      "on": {
        "open": this.onOpen,
        "close": this.onClose,
        "opened": this.onOpened,
        "closed": function closed() {
          _this3.showWrapper = false;

          _this3.$emit('closed');
        }
      },
      "model": {
        value: _this3.showPopup,
        callback: function callback($$v) {
          _this3.showPopup = $$v;
        }
      }
    }, [Options, this.slots('default')])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/mixins/click-outside.js
/**
 * Listen to click outside event
 */


var click_outside_ClickOutsideMixin = function ClickOutsideMixin(config) {
  return external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
    props: {
      closeOnClickOutside: {
        type: Boolean,
        default: true
      }
    },
    data: function data() {
      var _this = this;

      var clickOutsideHandler = function clickOutsideHandler(event) {
        if (_this.closeOnClickOutside && !_this.$el.contains(event.target)) {
          _this[config.method]();
        }
      };

      return {
        clickOutsideHandler: clickOutsideHandler
      };
    },
    mounted: function mounted() {
      event_on(document, config.event, this.clickOutsideHandler);
    },
    beforeDestroy: function beforeDestroy() {
      off(document, config.event, this.clickOutsideHandler);
    }
  });
};
// CONCATENATED MODULE: ./node_modules/vant/es/dropdown-menu/index.js





var dropdown_menu_createNamespace = Object(create["a" /* createNamespace */])('dropdown-menu'),
    dropdown_menu_createComponent = dropdown_menu_createNamespace[0],
    dropdown_menu_bem = dropdown_menu_createNamespace[1];

/* harmony default export */ var dropdown_menu = (dropdown_menu_createComponent({
  mixins: [ParentMixin('vanDropdownMenu'), click_outside_ClickOutsideMixin({
    event: 'click',
    method: 'onClickOutside'
  })],
  props: {
    overlay: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 10
    },
    duration: {
      type: Number,
      default: 0.2
    },
    direction: {
      type: String,
      default: 'down'
    },
    activeColor: {
      type: String,
      default: BLUE
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      offset: 0
    };
  },
  methods: {
    updateOffset: function updateOffset() {
      var menu = this.$refs.menu;
      var rect = menu.getBoundingClientRect();

      if (this.direction === 'down') {
        this.offset = rect.bottom;
      } else {
        this.offset = window.innerHeight - rect.top;
      }
    },
    toggleItem: function toggleItem(active) {
      this.children.forEach(function (item, index) {
        if (index === active) {
          item.toggle();
        } else if (item.showPopup) {
          item.toggle(false, {
            immediate: true
          });
        }
      });
    },
    onClickOutside: function onClickOutside() {
      this.children.forEach(function (item) {
        item.toggle(false);
      });
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    var Titles = this.children.map(function (item, index) {
      return h("div", {
        "attrs": {
          "role": "button",
          "tabindex": item.disabled ? -1 : 0
        },
        "class": dropdown_menu_bem('item', {
          disabled: item.disabled
        }),
        "on": {
          "click": function click() {
            if (!item.disabled) {
              _this.toggleItem(index);
            }
          }
        }
      }, [h("span", {
        "class": [dropdown_menu_bem('title', {
          down: item.showPopup === (_this.direction === 'down')
        }), item.titleClass],
        "style": {
          color: item.showPopup ? _this.activeColor : ''
        }
      }, [h("div", {
        "class": "van-ellipsis"
      }, [item.displayTitle])])]);
    });
    return h("div", {
      "ref": "menu",
      "class": [dropdown_menu_bem(), 'van-hairline--top-bottom']
    }, [Titles, this.slots('default')]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/goods-action/index.js



var goods_action_createNamespace = Object(create["a" /* createNamespace */])('goods-action'),
    goods_action_createComponent = goods_action_createNamespace[0],
    goods_action_bem = goods_action_createNamespace[1];

/* harmony default export */ var goods_action = (goods_action_createComponent({
  mixins: [ParentMixin('vanGoodsAction')],
  props: {
    safeAreaInsetBottom: Boolean
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": goods_action_bem({
        'safe-area-inset-bottom': this.safeAreaInsetBottom
      })
    }, [this.slots()]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/goods-action-button/index.js






var goods_action_button_createNamespace = Object(create["a" /* createNamespace */])('goods-action-button'),
    goods_action_button_createComponent = goods_action_button_createNamespace[0],
    goods_action_button_bem = goods_action_button_createNamespace[1];

/* harmony default export */ var goods_action_button = (goods_action_button_createComponent({
  mixins: [ChildrenMixin('vanGoodsAction')],
  props: _extends({}, routeProps, {
    type: String,
    text: String,
    loading: Boolean,
    disabled: Boolean
  }),
  computed: {
    isFirst: function isFirst() {
      var prev = this.parent && this.parent.children[this.index - 1];
      return !prev || prev.$options.name !== this.$options.name;
    },
    isLast: function isLast() {
      var next = this.parent && this.parent.children[this.index + 1];
      return !next || next.$options.name !== this.$options.name;
    }
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
      route(this.$router, this);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h(es_button, {
      "class": goods_action_button_bem([{
        first: this.isFirst,
        last: this.isLast
      }, this.type]),
      "attrs": {
        "square": true,
        "size": "large",
        "type": this.type,
        "loading": this.loading,
        "disabled": this.disabled
      },
      "on": {
        "click": this.onClick
      }
    }, [this.slots() || this.text]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/goods-action-icon/index.js






var goods_action_icon_createNamespace = Object(create["a" /* createNamespace */])('goods-action-icon'),
    goods_action_icon_createComponent = goods_action_icon_createNamespace[0],
    goods_action_icon_bem = goods_action_icon_createNamespace[1];

/* harmony default export */ var goods_action_icon = (goods_action_icon_createComponent({
  mixins: [ChildrenMixin('vanGoodsAction')],
  props: _extends({}, routeProps, {
    text: String,
    icon: String,
    info: [Number, String],
    iconClass: null
  }),
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
      route(this.$router, this);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "attrs": {
        "role": "button",
        "tabindex": "0"
      },
      "class": goods_action_icon_bem(),
      "on": {
        "click": this.onClick
      }
    }, [this.slots('icon') ? h("div", {
      "class": goods_action_icon_bem('icon')
    }, [this.slots('icon')]) : h(es_icon, {
      "class": [goods_action_icon_bem('icon'), this.iconClass],
      "attrs": {
        "tag": "div",
        "info": this.info,
        "name": this.icon
      }
    }), this.slots() || this.text]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/grid/index.js



var grid_createNamespace = Object(create["a" /* createNamespace */])('grid'),
    grid_createComponent = grid_createNamespace[0],
    grid_bem = grid_createNamespace[1];

/* harmony default export */ var grid = (grid_createComponent({
  mixins: [ParentMixin('vanGrid')],
  props: {
    square: Boolean,
    gutter: [Number, String],
    clickable: Boolean,
    columnNum: {
      type: Number,
      default: 4
    },
    center: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    style: function style() {
      var gutter = this.gutter;

      if (gutter) {
        return {
          paddingLeft: Object(unit["a" /* addUnit */])(gutter)
        };
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "style": this.style,
      "class": [grid_bem(), {
        'van-hairline--top': this.border && !this.gutter
      }]
    }, [this.slots()]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/grid-item/index.js






var grid_item_createNamespace = Object(create["a" /* createNamespace */])('grid-item'),
    grid_item_createComponent = grid_item_createNamespace[0],
    grid_item_bem = grid_item_createNamespace[1];

/* harmony default export */ var grid_item = (grid_item_createComponent({
  mixins: [ChildrenMixin('vanGrid')],
  props: _extends({}, routeProps, {
    icon: String,
    text: String
  }),
  computed: {
    style: function style() {
      var _this$parent = this.parent,
          square = _this$parent.square,
          gutter = _this$parent.gutter,
          columnNum = _this$parent.columnNum;
      var percent = 100 / columnNum + "%";
      var style = {
        flexBasis: percent
      };

      if (square) {
        style.paddingTop = percent;
      } else if (gutter) {
        var gutterValue = Object(unit["a" /* addUnit */])(gutter);
        style.paddingRight = gutterValue;

        if (this.index >= columnNum) {
          style.marginTop = gutterValue;
        }
      }

      return style;
    },
    contentStyle: function contentStyle() {
      var _this$parent2 = this.parent,
          square = _this$parent2.square,
          gutter = _this$parent2.gutter;

      if (square && gutter) {
        var gutterValue = Object(unit["a" /* addUnit */])(gutter);
        return {
          right: gutterValue,
          bottom: gutterValue,
          height: 'auto'
        };
      }
    }
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
      route(this.$router, this);
    },
    renderContent: function renderContent() {
      var h = this.$createElement;
      var slot = this.slots();

      if (slot) {
        return slot;
      }

      return [this.slots('icon') || this.icon && h(es_icon, {
        "attrs": {
          "name": this.icon
        },
        "class": grid_item_bem('icon')
      }), this.slots('text') || this.text && h("span", {
        "class": grid_item_bem('text')
      }, [this.text])];
    }
  },
  render: function render() {
    var h = arguments[0];
    var _this$parent3 = this.parent,
        center = _this$parent3.center,
        border = _this$parent3.border,
        square = _this$parent3.square,
        gutter = _this$parent3.gutter,
        clickable = _this$parent3.clickable;
    return h("div", {
      "class": [grid_item_bem({
        square: square
      })],
      "style": this.style,
      "on": {
        "click": this.onClick
      }
    }, [h("div", {
      "style": this.contentStyle,
      "class": [grid_item_bem('content', {
        center: center,
        square: square,
        clickable: clickable,
        surround: border && gutter
      }), {
        'van-hairline': border
      }]
    }, [this.renderContent()])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/swipe/index.js







var swipe_createNamespace = Object(create["a" /* createNamespace */])('swipe'),
    swipe_createComponent = swipe_createNamespace[0],
    swipe_bem = swipe_createNamespace[1];

/* harmony default export */ var swipe = (swipe_createComponent({
  mixins: [TouchMixin, BindEventMixin(function (bind, isBind) {
    bind(window, 'resize', this.onResize, true);

    if (isBind) {
      this.initialize();
    } else {
      this.clear();
    }
  })],
  props: {
    width: Number,
    height: Number,
    autoplay: Number,
    vertical: Boolean,
    indicatorColor: String,
    loop: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 500
    },
    touchable: {
      type: Boolean,
      default: true
    },
    initialSwipe: {
      type: Number,
      default: 0
    },
    showIndicators: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      computedWidth: 0,
      computedHeight: 0,
      offset: 0,
      active: 0,
      deltaX: 0,
      deltaY: 0,
      swipes: [],
      swiping: false
    };
  },
  watch: {
    swipes: function swipes() {
      this.initialize();
    },
    initialSwipe: function initialSwipe() {
      this.initialize();
    },
    autoplay: function autoplay(_autoplay) {
      if (!_autoplay) {
        this.clear();
      } else {
        this.autoPlay();
      }
    }
  },
  computed: {
    count: function count() {
      return this.swipes.length;
    },
    delta: function delta() {
      return this.vertical ? this.deltaY : this.deltaX;
    },
    size: function size() {
      return this[this.vertical ? 'computedHeight' : 'computedWidth'];
    },
    trackSize: function trackSize() {
      return this.count * this.size;
    },
    activeIndicator: function activeIndicator() {
      return (this.active + this.count) % this.count;
    },
    isCorrectDirection: function isCorrectDirection() {
      var expect = this.vertical ? 'vertical' : 'horizontal';
      return this.direction === expect;
    },
    trackStyle: function trackStyle() {
      var _ref;

      var mainAxis = this.vertical ? 'height' : 'width';
      var crossAxis = this.vertical ? 'width' : 'height';
      return _ref = {}, _ref[mainAxis] = this.trackSize + "px", _ref[crossAxis] = this[crossAxis] ? this[crossAxis] + "px" : '', _ref.transitionDuration = (this.swiping ? 0 : this.duration) + "ms", _ref.transform = "translate" + (this.vertical ? 'Y' : 'X') + "(" + this.offset + "px)", _ref;
    },
    indicatorStyle: function indicatorStyle() {
      return {
        backgroundColor: this.indicatorColor
      };
    },
    minOffset: function minOffset() {
      var rect = this.$el.getBoundingClientRect();
      return (this.vertical ? rect.height : rect.width) - this.size * this.count;
    }
  },
  methods: {
    // initialize swipe position
    initialize: function initialize(active) {
      if (active === void 0) {
        active = this.initialSwipe;
      }

      clearTimeout(this.timer);

      if (this.$el) {
        var rect = this.$el.getBoundingClientRect();
        this.computedWidth = this.width || rect.width;
        this.computedHeight = this.height || rect.height;
      }

      this.swiping = true;
      this.active = active;
      this.offset = this.count > 1 ? -this.size * this.active : 0;
      this.swipes.forEach(function (swipe) {
        swipe.offset = 0;
      });
      this.autoPlay();
    },
    onResize: function onResize() {
      this.initialize(this.activeIndicator);
    },
    onTouchStart: function onTouchStart(event) {
      if (!this.touchable) return;
      this.clear();
      this.swiping = true;
      this.touchStart(event);
      this.correctPosition();
    },
    onTouchMove: function onTouchMove(event) {
      if (!this.touchable || !this.swiping) return;
      this.touchMove(event);

      if (this.isCorrectDirection) {
        preventDefault(event, true);
        this.move({
          offset: this.delta
        });
      }
    },
    onTouchEnd: function onTouchEnd() {
      if (!this.touchable || !this.swiping) return;

      if (this.delta && this.isCorrectDirection) {
        var offset = this.vertical ? this.offsetY : this.offsetX;
        this.move({
          pace: offset > 0 ? this.delta > 0 ? -1 : 1 : 0,
          emitChange: true
        });
      }

      this.swiping = false;
      this.autoPlay();
    },
    getTargetActive: function getTargetActive(pace) {
      var active = this.active,
          count = this.count;

      if (pace) {
        if (this.loop) {
          return range(active + pace, -1, count);
        }

        return range(active + pace, 0, count - 1);
      }

      return active;
    },
    getTargetOffset: function getTargetOffset(targetActive, offset) {
      var currentPosition = targetActive * this.size;

      if (!this.loop) {
        currentPosition = Math.min(currentPosition, -this.minOffset);
      }

      var targetOffset = Math.round(offset - currentPosition);

      if (!this.loop) {
        targetOffset = range(targetOffset, this.minOffset, 0);
      }

      return targetOffset;
    },
    move: function move(_ref2) {
      var _ref2$pace = _ref2.pace,
          pace = _ref2$pace === void 0 ? 0 : _ref2$pace,
          _ref2$offset = _ref2.offset,
          offset = _ref2$offset === void 0 ? 0 : _ref2$offset,
          emitChange = _ref2.emitChange;
      var loop = this.loop,
          count = this.count,
          active = this.active,
          swipes = this.swipes,
          trackSize = this.trackSize,
          minOffset = this.minOffset;

      if (count <= 1) {
        return;
      }

      var targetActive = this.getTargetActive(pace);
      var targetOffset = this.getTargetOffset(targetActive, offset); // auto move first and last swipe in loop mode

      if (loop) {
        if (swipes[0]) {
          var outRightBound = targetOffset < minOffset;
          swipes[0].offset = outRightBound ? trackSize : 0;
        }

        if (swipes[count - 1]) {
          var outLeftBound = targetOffset > 0;
          swipes[count - 1].offset = outLeftBound ? -trackSize : 0;
        }
      }

      this.active = targetActive;
      this.offset = targetOffset;

      if (emitChange && targetActive !== active) {
        this.$emit('change', this.activeIndicator);
      }
    },
    swipeTo: function swipeTo(index, options) {
      var _this = this;

      if (options === void 0) {
        options = {};
      }

      this.swiping = true;
      this.resetTouchStatus();
      this.correctPosition();
      Object(raf["b" /* doubleRaf */])(function () {
        _this.move({
          pace: index % _this.count - _this.active,
          emitChange: true
        });

        if (options.immediate) {
          Object(raf["b" /* doubleRaf */])(function () {
            _this.swiping = false;
          });
        } else {
          _this.swiping = false;
        }
      });
    },
    correctPosition: function correctPosition() {
      if (this.active <= -1) {
        this.move({
          pace: this.count
        });
      }

      if (this.active >= this.count) {
        this.move({
          pace: -this.count
        });
      }
    },
    clear: function clear() {
      clearTimeout(this.timer);
    },
    autoPlay: function autoPlay() {
      var _this2 = this;

      var autoplay = this.autoplay;

      if (autoplay && this.count > 1) {
        this.clear();
        this.timer = setTimeout(function () {
          _this2.swiping = true;

          _this2.resetTouchStatus();

          _this2.correctPosition();

          Object(raf["b" /* doubleRaf */])(function () {
            _this2.swiping = false;

            _this2.move({
              pace: 1,
              emitChange: true
            });

            _this2.autoPlay();
          });
        }, autoplay);
      }
    },
    renderIndicator: function renderIndicator() {
      var _this3 = this;

      var h = this.$createElement;
      var count = this.count,
          activeIndicator = this.activeIndicator;
      var slot = this.slots('indicator');

      if (slot) {
        return slot;
      }

      if (this.showIndicators && count > 1) {
        return h("div", {
          "class": swipe_bem('indicators', {
            vertical: this.vertical
          })
        }, [Array.apply(void 0, Array(count)).map(function (empty, index) {
          return h("i", {
            "class": swipe_bem('indicator', {
              active: index === activeIndicator
            }),
            "style": index === activeIndicator ? _this3.indicatorStyle : null
          });
        })]);
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": swipe_bem()
    }, [h("div", {
      "ref": "track",
      "style": this.trackStyle,
      "class": swipe_bem('track'),
      "on": {
        "touchstart": this.onTouchStart,
        "touchmove": this.onTouchMove,
        "touchend": this.onTouchEnd,
        "touchcancel": this.onTouchEnd
      }
    }, [this.slots()]), this.renderIndicator()]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/swipe-item/index.js



var swipe_item_createNamespace = Object(create["a" /* createNamespace */])('swipe-item'),
    swipe_item_createComponent = swipe_item_createNamespace[0],
    swipe_item_bem = swipe_item_createNamespace[1];

/* harmony default export */ var swipe_item = (swipe_item_createComponent({
  data: function data() {
    return {
      offset: 0
    };
  },
  beforeCreate: function beforeCreate() {
    this.$parent.swipes.push(this);
  },
  destroyed: function destroyed() {
    this.$parent.swipes.splice(this.$parent.swipes.indexOf(this), 1);
  },
  render: function render() {
    var h = arguments[0];
    var _this$$parent = this.$parent,
        vertical = _this$$parent.vertical,
        computedWidth = _this$$parent.computedWidth,
        computedHeight = _this$$parent.computedHeight;
    var style = {
      width: computedWidth + 'px',
      height: vertical ? computedHeight + 'px' : '100%',
      transform: "translate" + (vertical ? 'Y' : 'X') + "(" + this.offset + "px)"
    };
    return h("div", {
      "class": swipe_item_bem(),
      "style": style,
      "on": _extends({}, this.$listeners)
    }, [this.slots()]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/image-preview/ImagePreview.js











var ImagePreview_createNamespace = Object(create["a" /* createNamespace */])('image-preview'),
    ImagePreview_createComponent = ImagePreview_createNamespace[0],
    ImagePreview_bem = ImagePreview_createNamespace[1];

function getDistance(touches) {
  return Math.sqrt(Math.abs((touches[0].clientX - touches[1].clientX) * (touches[0].clientY - touches[1].clientY)));
}

/* harmony default export */ var image_preview_ImagePreview = (ImagePreview_createComponent({
  mixins: [PopupMixin, TouchMixin, CloseOnPopstateMixin],
  props: {
    className: null,
    lazyLoad: Boolean,
    asyncClose: Boolean,
    showIndicators: Boolean,
    images: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    loop: {
      type: Boolean,
      default: true
    },
    swipeDuration: {
      type: Number,
      default: 500
    },
    overlay: {
      type: Boolean,
      default: true
    },
    showIndex: {
      type: Boolean,
      default: true
    },
    startPosition: {
      type: Number,
      default: 0
    },
    minZoom: {
      type: Number,
      default: 1 / 3
    },
    maxZoom: {
      type: Number,
      default: 3
    },
    overlayClass: {
      type: String,
      default: ImagePreview_bem('overlay')
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    this.bindStatus = false;
    return {
      scale: 1,
      moveX: 0,
      moveY: 0,
      moving: false,
      zooming: false,
      active: 0,
      doubleClickTimer: null
    };
  },
  computed: {
    imageStyle: function imageStyle() {
      var scale = this.scale;
      var style = {
        transition: this.zooming || this.moving ? '' : '.3s all'
      };

      if (scale !== 1) {
        style.transform = "scale3d(" + scale + ", " + scale + ", 1) translate(" + this.moveX / scale + "px, " + this.moveY / scale + "px)";
      }

      return style;
    }
  },
  watch: {
    value: function value() {
      this.active = this.startPosition;
    },
    startPosition: function startPosition(active) {
      this.active = active;
    }
  },
  methods: {
    onWrapperTouchStart: function onWrapperTouchStart() {
      this.touchStartTime = new Date();
    },
    onWrapperTouchEnd: function onWrapperTouchEnd(event) {
      var _this = this;

      preventDefault(event);
      var deltaTime = new Date() - this.touchStartTime;

      var _ref = this.$refs.swipe || {},
          _ref$offsetX = _ref.offsetX,
          offsetX = _ref$offsetX === void 0 ? 0 : _ref$offsetX,
          _ref$offsetY = _ref.offsetY,
          offsetY = _ref$offsetY === void 0 ? 0 : _ref$offsetY; // prevent long tap to close component


      if (deltaTime < 300 && offsetX < 10 && offsetY < 10) {
        if (!this.doubleClickTimer) {
          this.doubleClickTimer = setTimeout(function () {
            var index = _this.active;

            _this.resetScale();

            _this.$emit('close', {
              index: index,
              url: _this.images[index]
            });

            if (!_this.asyncClose) {
              _this.$emit('input', false);
            }

            _this.doubleClickTimer = null;
          }, 300);
        } else {
          clearTimeout(this.doubleClickTimer);
          this.doubleClickTimer = null;
          this.toggleScale();
        }
      }
    },
    startMove: function startMove(event) {
      var image = event.currentTarget;
      var rect = image.getBoundingClientRect();
      var winWidth = window.innerWidth;
      var winHeight = window.innerHeight;
      this.touchStart(event);
      this.moving = true;
      this.startMoveX = this.moveX;
      this.startMoveY = this.moveY;
      this.maxMoveX = Math.max(0, (rect.width - winWidth) / 2);
      this.maxMoveY = Math.max(0, (rect.height - winHeight) / 2);
    },
    startZoom: function startZoom(event) {
      this.moving = false;
      this.zooming = true;
      this.startScale = this.scale;
      this.startDistance = getDistance(event.touches);
    },
    onImageTouchStart: function onImageTouchStart(event) {
      var touches = event.touches;

      var _ref2 = this.$refs.swipe || {},
          _ref2$offsetX = _ref2.offsetX,
          offsetX = _ref2$offsetX === void 0 ? 0 : _ref2$offsetX;

      if (touches.length === 1 && this.scale !== 1) {
        this.startMove(event);
      }
      /* istanbul ignore else */
      else if (touches.length === 2 && !offsetX) {
          this.startZoom(event);
        }
    },
    onImageTouchMove: function onImageTouchMove(event) {
      var touches = event.touches;

      if (this.moving || this.zooming) {
        preventDefault(event, true);
      }

      if (this.moving) {
        this.touchMove(event);
        var moveX = this.deltaX + this.startMoveX;
        var moveY = this.deltaY + this.startMoveY;
        this.moveX = range(moveX, -this.maxMoveX, this.maxMoveX);
        this.moveY = range(moveY, -this.maxMoveY, this.maxMoveY);
      }

      if (this.zooming && touches.length === 2) {
        var distance = getDistance(touches);
        var scale = this.startScale * distance / this.startDistance;
        this.scale = range(scale, this.minZoom, this.maxZoom);
      }
    },
    onImageTouchEnd: function onImageTouchEnd(event) {
      /* istanbul ignore else */
      if (this.moving || this.zooming) {
        var stopPropagation = true;

        if (this.moving && this.startMoveX === this.moveX && this.startMoveY === this.moveY) {
          stopPropagation = false;
        }

        if (!event.touches.length) {
          this.moving = false;
          this.zooming = false;
          this.startMoveX = 0;
          this.startMoveY = 0;
          this.startScale = 1;

          if (this.scale < 1) {
            this.resetScale();
          }
        }

        if (stopPropagation) {
          preventDefault(event, true);
        }
      }
    },
    onSwipeChange: function onSwipeChange(active) {
      this.resetScale();
      this.active = active;
      this.$emit('change', active);
    },
    resetScale: function resetScale() {
      this.scale = 1;
      this.moveX = 0;
      this.moveY = 0;
    },
    toggleScale: function toggleScale() {
      var scale = this.scale > 1 ? 1 : 2;
      this.scale = scale;
      this.moveX = 0;
      this.moveY = 0;
    }
  },
  render: function render() {
    var _this2 = this;

    var h = arguments[0];

    if (!this.value) {
      return;
    }

    var active = this.active,
        images = this.images;
    var Index = this.showIndex && h("div", {
      "class": ImagePreview_bem('index')
    }, [this.slots('index') || active + 1 + "/" + images.length]);
    var Images = h(swipe, {
      "ref": "swipe",
      "attrs": {
        "loop": this.loop,
        "duration": this.swipeDuration,
        "indicatorColor": "white",
        "initialSwipe": this.startPosition,
        "showIndicators": this.showIndicators
      },
      "on": {
        "change": this.onSwipeChange
      }
    }, [images.map(function (image, index) {
      var props = {
        class: ImagePreview_bem('image'),
        style: index === active ? _this2.imageStyle : null,
        on: {
          touchstart: _this2.onImageTouchStart,
          touchmove: _this2.onImageTouchMove,
          touchend: _this2.onImageTouchEnd,
          touchcancel: _this2.onImageTouchEnd
        }
      };
      return h(swipe_item, [_this2.lazyLoad ? h("img", helper_default()([{
        "directives": [{
          name: "lazy",
          value: image
        }]
      }, props])) : h("img", helper_default()([{
        "attrs": {
          "src": image
        }
      }, props]))]);
    })]);
    return h("transition", {
      "attrs": {
        "name": "van-fade"
      }
    }, [h("div", {
      "class": [ImagePreview_bem(), this.className],
      "on": {
        "touchstart": this.onWrapperTouchStart,
        "touchMove": preventDefault,
        "touchend": this.onWrapperTouchEnd,
        "touchcancel": this.onWrapperTouchEnd
      }
    }, [Images, Index])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/image-preview/index.js




var image_preview_instance;
var image_preview_defaultConfig = {
  images: [],
  loop: true,
  swipeDuration: 500,
  value: true,
  minZoom: 1 / 3,
  maxZoom: 3,
  className: '',
  onClose: null,
  onChange: null,
  lazyLoad: false,
  showIndex: true,
  asyncClose: false,
  startPosition: 0,
  showIndicators: false,
  closeOnPopstate: false
};

var image_preview_initInstance = function initInstance() {
  image_preview_instance = new (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend(image_preview_ImagePreview))({
    el: document.createElement('div')
  });
  document.body.appendChild(image_preview_instance.$el);
  image_preview_instance.$on('change', function (index) {
    if (image_preview_instance.onChange) {
      image_preview_instance.onChange(index);
    }
  });
};

var es_image_preview_ImagePreview = function ImagePreview(images, startPosition) {
  if (startPosition === void 0) {
    startPosition = 0;
  }

  /* istanbul ignore if */
  if (utils["d" /* isServer */]) {
    return;
  }

  if (!image_preview_instance) {
    image_preview_initInstance();
  }

  var options = Array.isArray(images) ? {
    images: images,
    startPosition: startPosition
  } : images;

  _extends(image_preview_instance, image_preview_defaultConfig, options);

  image_preview_instance.$once('input', function (show) {
    image_preview_instance.value = show;
  });

  if (options.onClose) {
    image_preview_instance.$once('close', options.onClose);
  }

  return image_preview_instance;
};

es_image_preview_ImagePreview.install = function () {
  external_commonjs_vue_commonjs2_vue_root_Vue_default.a.use(image_preview_ImagePreview);
};

/* harmony default export */ var image_preview = (es_image_preview_ImagePreview);
// CONCATENATED MODULE: ./node_modules/vant/es/index-anchor/index.js



var index_anchor_createNamespace = Object(create["a" /* createNamespace */])('index-anchor'),
    index_anchor_createComponent = index_anchor_createNamespace[0],
    index_anchor_bem = index_anchor_createNamespace[1];

/* harmony default export */ var index_anchor = (index_anchor_createComponent({
  mixins: [ChildrenMixin('vanIndexBar', {
    indexKey: 'childrenIndex'
  })],
  props: {
    index: [Number, String]
  },
  data: function data() {
    return {
      top: 0,
      active: false
    };
  },
  computed: {
    sticky: function sticky() {
      return this.active && this.parent.sticky;
    },
    anchorStyle: function anchorStyle() {
      if (this.sticky) {
        return {
          transform: "translate3d(0, " + this.top + "px, 0)",
          color: this.parent.highlightColor,
          zIndex: "" + this.parent.zIndex
        };
      }
    }
  },
  mounted: function mounted() {
    this.height = this.$el.offsetHeight;
  },
  methods: {
    scrollIntoView: function scrollIntoView() {
      this.$el.scrollIntoView();
    }
  },
  render: function render() {
    var h = arguments[0];
    var sticky = this.sticky;
    return h("div", {
      "style": {
        height: sticky ? this.height + "px" : null
      }
    }, [h("div", {
      "style": this.anchorStyle,
      "class": [index_anchor_bem({
        sticky: sticky
      }), {
        'van-hairline--bottom': sticky
      }]
    }, [this.slots('default') || this.index])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/index-bar/index.js







var index_bar_createNamespace = Object(create["a" /* createNamespace */])('index-bar'),
    index_bar_createComponent = index_bar_createNamespace[0],
    index_bar_bem = index_bar_createNamespace[1];

/* harmony default export */ var index_bar = (index_bar_createComponent({
  mixins: [TouchMixin, ParentMixin('vanIndexBar'), BindEventMixin(function (bind) {
    if (!this.scroller) {
      this.scroller = getScrollEventTarget(this.$el);
    }

    bind(this.scroller, 'scroll', this.onScroll);
  })],
  props: {
    sticky: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 1
    },
    highlightColor: {
      type: String,
      default: GREEN
    },
    stickyOffsetTop: {
      type: Number,
      default: 0
    },
    indexList: {
      type: Array,
      default: function _default() {
        var indexList = [];
        var charCodeOfA = 'A'.charCodeAt(0);

        for (var i = 0; i < 26; i++) {
          indexList.push(String.fromCharCode(charCodeOfA + i));
        }

        return indexList;
      }
    }
  },
  data: function data() {
    return {
      activeAnchorIndex: null
    };
  },
  computed: {
    highlightStyle: function highlightStyle() {
      var highlightColor = this.highlightColor;

      if (highlightColor) {
        /* istanbul ignore else */
        return {
          color: highlightColor
        };
      }
    }
  },
  watch: {
    indexList: function indexList() {
      this.$nextTick(this.onScroll);
    }
  },
  methods: {
    onScroll: function onScroll() {
      var _this = this;

      var scrollTop;

      if (this.scroller === window || this.scroller === document.body) {
        scrollTop = getScrollTop(this.scroller);
      } else {
        // see: https://github.com/youzan/vant/issues/3774
        scrollTop = 0;
      }

      var rects = this.children.map(function (item) {
        return {
          height: item.height,
          top: getElementTop(item.$el)
        };
      });
      var active = this.getActiveAnchorIndex(scrollTop, rects);
      this.activeAnchorIndex = this.indexList[active];

      if (this.sticky) {
        this.children.forEach(function (item, index) {
          if (index === active) {
            item.active = true;
            item.top = Math.max(_this.stickyOffsetTop, rects[index].top - scrollTop);
          } else if (index === active - 1) {
            var activeItemTop = rects[active].top - scrollTop;
            item.active = activeItemTop > 0;
            item.top = activeItemTop - item.height;
          } else {
            item.active = false;
          }
        });
      }
    },
    getActiveAnchorIndex: function getActiveAnchorIndex(scrollTop, rects) {
      for (var i = this.children.length - 1; i >= 0; i--) {
        var prevHeight = i > 0 ? rects[i - 1].height : 0;

        if (scrollTop + prevHeight + this.stickyOffsetTop >= rects[i].top) {
          return i;
        }
      }

      return -1;
    },
    onClick: function onClick(event) {
      this.scrollToElement(event.target);
    },
    onTouchMove: function onTouchMove(event) {
      this.touchMove(event);

      if (this.direction === 'vertical') {
        /* istanbul ignore else */
        if (event.cancelable) {
          event.preventDefault();
        }

        var _event$touches$ = event.touches[0],
            clientX = _event$touches$.clientX,
            clientY = _event$touches$.clientY;
        var target = document.elementFromPoint(clientX, clientY);

        if (target) {
          var index = target.dataset.index;
          /* istanbul ignore else */

          if (this.touchActiveIndex !== index) {
            this.touchActiveIndex = index;
            this.scrollToElement(target);
          }
        }
      }
    },
    scrollToElement: function scrollToElement(element) {
      var index = element.dataset.index;

      if (!index) {
        return;
      }

      var match = this.children.filter(function (item) {
        return String(item.index) === index;
      });

      if (match[0]) {
        match[0].scrollIntoView();

        if (this.stickyOffsetTop) {
          setRootScrollTop(getRootScrollTop() - this.stickyOffsetTop);
        }

        this.$emit('select', match[0].index);
      }
    },
    onTouchEnd: function onTouchEnd() {
      this.active = null;
    }
  },
  render: function render() {
    var _this2 = this;

    var h = arguments[0];
    var Indexes = this.indexList.map(function (index) {
      var active = index === _this2.activeAnchorIndex;
      return h("span", {
        "class": index_bar_bem('index', {
          active: active
        }),
        "style": active ? _this2.highlightStyle : null,
        "attrs": {
          "data-index": index
        }
      }, [index]);
    });
    return h("div", {
      "class": index_bar_bem()
    }, [h("div", {
      "class": index_bar_bem('sidebar'),
      "style": {
        zIndex: this.zIndex
      },
      "on": {
        "click": this.onClick,
        "touchstart": this.touchStart,
        "touchmove": this.onTouchMove,
        "touchend": this.onTouchEnd,
        "touchcancel": this.onTouchEnd
      }
    }, [Indexes]), this.slots('default')]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/list/index.js






var list_createNamespace = Object(create["a" /* createNamespace */])('list'),
    list_createComponent = list_createNamespace[0],
    list_bem = list_createNamespace[1],
    list_t = list_createNamespace[2];

/* harmony default export */ var es_list = (list_createComponent({
  mixins: [BindEventMixin(function (bind) {
    if (!this.scroller) {
      this.scroller = getScrollEventTarget(this.$el);
    }

    bind(this.scroller, 'scroll', this.check);
  })],
  model: {
    prop: 'loading'
  },
  props: {
    error: Boolean,
    loading: Boolean,
    finished: Boolean,
    errorText: String,
    loadingText: String,
    finishedText: String,
    immediateCheck: {
      type: Boolean,
      default: true
    },
    offset: {
      type: Number,
      default: 300
    },
    direction: {
      type: String,
      default: 'down'
    }
  },
  mounted: function mounted() {
    if (this.immediateCheck) {
      this.$nextTick(this.check);
    }
  },
  watch: {
    loading: function loading() {
      this.$nextTick(this.check);
    },
    finished: function finished() {
      this.$nextTick(this.check);
    }
  },
  methods: {
    check: function check() {
      if (this.loading || this.finished || this.error) {
        return;
      }

      var el = this.$el,
          scroller = this.scroller,
          offset = this.offset,
          direction = this.direction;
      var scrollerRect;

      if (scroller.getBoundingClientRect) {
        scrollerRect = scroller.getBoundingClientRect();
      } else {
        scrollerRect = {
          top: 0,
          bottom: scroller.innerHeight
        };
      }

      var scrollerHeight = scrollerRect.bottom - scrollerRect.top;
      /* istanbul ignore next */

      if (!scrollerHeight || isHidden(el)) {
        return false;
      }

      var isReachEdge = false;
      var placeholderRect = this.$refs.placeholder.getBoundingClientRect();

      if (direction === 'up') {
        isReachEdge = placeholderRect.top - scrollerRect.top <= offset;
      } else {
        isReachEdge = placeholderRect.bottom - scrollerRect.bottom <= offset;
      }

      if (isReachEdge) {
        this.$emit('input', true);
        this.$emit('load');
      }
    },
    clickErrorText: function clickErrorText() {
      this.$emit('update:error', false);
      this.$nextTick(this.check);
    }
  },
  render: function render() {
    var h = arguments[0];
    var Placeholder = h("div", {
      "ref": "placeholder",
      "class": list_bem('placeholder')
    });
    return h("div", {
      "class": list_bem(),
      "attrs": {
        "role": "feed",
        "aria-busy": this.loading
      }
    }, [this.direction === 'down' ? this.slots() : Placeholder, this.loading && h("div", {
      "class": list_bem('loading'),
      "key": "loading"
    }, [this.slots('loading') || h(es_loading, {
      "attrs": {
        "size": "16"
      }
    }, [this.loadingText || list_t('loading')])]), this.finished && this.finishedText && h("div", {
      "class": list_bem('finished-text')
    }, [this.finishedText]), this.error && this.errorText && h("div", {
      "on": {
        "click": this.clickErrorText
      },
      "class": list_bem('error-text')
    }, [this.errorText]), this.direction === 'up' ? this.slots() : Placeholder]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/nav-bar/index.js



 // Types

var nav_bar_createNamespace = Object(create["a" /* createNamespace */])('nav-bar'),
    nav_bar_createComponent = nav_bar_createNamespace[0],
    nav_bar_bem = nav_bar_createNamespace[1];

function NavBar(h, props, slots, ctx) {
  return h("div", helper_default()([{
    "class": [nav_bar_bem({
      fixed: props.fixed
    }), {
      'van-hairline--bottom': props.border
    }],
    "style": {
      zIndex: props.zIndex
    }
  }, inherit(ctx)]), [h("div", {
    "class": nav_bar_bem('left'),
    "on": {
      "click": ctx.listeners['click-left'] || utils["e" /* noop */]
    }
  }, [slots.left ? slots.left() : [props.leftArrow && h(es_icon, {
    "class": nav_bar_bem('arrow'),
    "attrs": {
      "name": "arrow-left"
    }
  }), props.leftText && h("span", {
    "class": nav_bar_bem('text')
  }, [props.leftText])]]), h("div", {
    "class": [nav_bar_bem('title'), 'van-ellipsis']
  }, [slots.title ? slots.title() : props.title]), h("div", {
    "class": nav_bar_bem('right'),
    "on": {
      "click": ctx.listeners['click-right'] || utils["e" /* noop */]
    }
  }, [slots.right ? slots.right() : props.rightText && h("span", {
    "class": nav_bar_bem('text')
  }, [props.rightText])])]);
}

NavBar.props = {
  title: String,
  fixed: Boolean,
  leftText: String,
  rightText: String,
  leftArrow: Boolean,
  border: {
    type: Boolean,
    default: true
  },
  zIndex: {
    type: Number,
    default: 1
  }
};
/* harmony default export */ var nav_bar = (nav_bar_createComponent(NavBar));
// CONCATENATED MODULE: ./node_modules/vant/es/notice-bar/index.js



var notice_bar_createNamespace = Object(create["a" /* createNamespace */])('notice-bar'),
    notice_bar_createComponent = notice_bar_createNamespace[0],
    notice_bar_bem = notice_bar_createNamespace[1];

/* harmony default export */ var notice_bar = (notice_bar_createComponent({
  props: {
    text: String,
    mode: String,
    color: String,
    leftIcon: String,
    wrapable: Boolean,
    background: String,
    delay: {
      type: [Number, String],
      default: 1
    },
    scrollable: {
      type: Boolean,
      default: true
    },
    speed: {
      type: Number,
      default: 50
    }
  },
  data: function data() {
    return {
      wrapWidth: 0,
      firstRound: true,
      duration: 0,
      offsetWidth: 0,
      showNoticeBar: true,
      animationClass: ''
    };
  },
  watch: {
    text: {
      handler: function handler() {
        var _this = this;

        this.$nextTick(function () {
          var _this$$refs = _this.$refs,
              wrap = _this$$refs.wrap,
              content = _this$$refs.content;

          if (!wrap || !content) {
            return;
          }

          var wrapWidth = wrap.getBoundingClientRect().width;
          var offsetWidth = content.getBoundingClientRect().width;

          if (_this.scrollable && offsetWidth > wrapWidth) {
            _this.wrapWidth = wrapWidth;
            _this.offsetWidth = offsetWidth;
            _this.duration = offsetWidth / _this.speed;
            _this.animationClass = notice_bar_bem('play');
          }
        });
      },
      immediate: true
    }
  },
  methods: {
    onClickIcon: function onClickIcon(event) {
      if (this.mode === 'closeable') {
        this.showNoticeBar = false;
        this.$emit('close', event);
      }
    },
    onAnimationEnd: function onAnimationEnd() {
      var _this2 = this;

      this.firstRound = false;
      this.$nextTick(function () {
        _this2.duration = (_this2.offsetWidth + _this2.wrapWidth) / _this2.speed;
        _this2.animationClass = notice_bar_bem('play--infinite');
      });
    }
  },
  render: function render() {
    var _this3 = this;

    var h = arguments[0];
    var slots = this.slots,
        mode = this.mode,
        leftIcon = this.leftIcon,
        onClickIcon = this.onClickIcon;
    var barStyle = {
      color: this.color,
      background: this.background
    };
    var contentStyle = {
      paddingLeft: this.firstRound ? 0 : this.wrapWidth + 'px',
      animationDelay: (this.firstRound ? this.delay : 0) + 's',
      animationDuration: this.duration + 's'
    };

    function LeftIcon() {
      var slot = slots('left-icon');

      if (slot) {
        return slot;
      }

      if (leftIcon) {
        return h(es_icon, {
          "class": notice_bar_bem('left-icon'),
          "attrs": {
            "name": leftIcon
          }
        });
      }
    }

    function RightIcon() {
      var slot = slots('right-icon');

      if (slot) {
        return slot;
      }

      var iconName = mode === 'closeable' ? 'cross' : mode === 'link' ? 'arrow' : '';

      if (iconName) {
        return h(es_icon, {
          "class": notice_bar_bem('right-icon'),
          "attrs": {
            "name": iconName
          },
          "on": {
            "click": onClickIcon
          }
        });
      }
    }

    return h("div", {
      "attrs": {
        "role": "alert"
      },
      "directives": [{
        name: "show",
        value: this.showNoticeBar
      }],
      "class": notice_bar_bem({
        wrapable: this.wrapable
      }),
      "style": barStyle,
      "on": {
        "click": function click(event) {
          _this3.$emit('click', event);
        }
      }
    }, [LeftIcon(), h("div", {
      "ref": "wrap",
      "class": notice_bar_bem('wrap'),
      "attrs": {
        "role": "marquee"
      }
    }, [h("div", {
      "ref": "content",
      "class": [notice_bar_bem('content'), this.animationClass, {
        'van-ellipsis': !this.scrollable && !this.wrapable
      }],
      "style": contentStyle,
      "on": {
        "animationend": this.onAnimationEnd,
        "webkitAnimationEnd": this.onAnimationEnd
      }
    }, [this.slots() || this.text])]), RightIcon()]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/notify/Notify.js






 // Types

var Notify_createNamespace = Object(create["a" /* createNamespace */])('notify'),
    Notify_createComponent = Notify_createNamespace[0],
    Notify_bem = Notify_createNamespace[1];

function Notify(h, props, slots, ctx) {
  var style = {
    color: props.color,
    background: props.background
  };
  return h(popup, helper_default()([{
    "attrs": {
      "value": props.value,
      "position": "top",
      "overlay": false,
      "lockScroll": false
    },
    "style": style,
    "class": [Notify_bem(), props.className]
  }, inherit(ctx, true)]), [props.message]);
}

Notify.props = _extends({}, PopupMixin.props, {
  className: null,
  message: [Number, String],
  getContainer: [String, Function],
  color: {
    type: String,
    default: WHITE
  },
  background: {
    type: String,
    default: RED
  },
  duration: {
    type: Number,
    default: 3000
  }
});
/* harmony default export */ var notify_Notify = (Notify_createComponent(Notify));
// CONCATENATED MODULE: ./node_modules/vant/es/notify/index.js






var timer;
var notify_instance;

function notify_parseOptions(message) {
  return Object(utils["c" /* isObj */])(message) ? message : {
    message: message
  };
}

function es_notify_Notify(options) {
  /* istanbul ignore if */
  if (utils["d" /* isServer */]) {
    return;
  }

  if (!notify_instance) {
    notify_instance = mount(notify_Notify, {
      on: {
        click: function click(event) {
          if (notify_instance.onClick) {
            notify_instance.onClick(event);
          }
        },
        close: function close() {
          if (notify_instance.onClose) {
            notify_instance.onClose();
          }
        },
        opened: function opened() {
          if (notify_instance.onOpened) {
            notify_instance.onOpened();
          }
        }
      }
    });
  }

  options = _extends({}, es_notify_Notify.currentOptions, {}, notify_parseOptions(options));

  _extends(notify_instance, options);

  clearTimeout(timer);

  if (options.duration && options.duration > 0) {
    timer = setTimeout(es_notify_Notify.clear, options.duration);
  }

  return notify_instance;
}

function notify_defaultOptions() {
  return {
    value: true,
    message: '',
    color: WHITE,
    background: RED,
    duration: 3000,
    className: '',
    onClose: null,
    onClick: null,
    onOpened: null
  };
}

es_notify_Notify.clear = function () {
  if (notify_instance) {
    notify_instance.value = false;
  }
};

es_notify_Notify.currentOptions = notify_defaultOptions();

es_notify_Notify.setDefaultOptions = function (options) {
  _extends(es_notify_Notify.currentOptions, options);
};

es_notify_Notify.resetDefaultOptions = function () {
  es_notify_Notify.currentOptions = notify_defaultOptions();
};

es_notify_Notify.install = function () {
  external_commonjs_vue_commonjs2_vue_root_Vue_default.a.use(notify_Notify);
};

external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$notify = es_notify_Notify;
/* harmony default export */ var notify = (es_notify_Notify);
// CONCATENATED MODULE: ./node_modules/vant/es/number-keyboard/Key.js


var Key_createNamespace = Object(create["a" /* createNamespace */])('key'),
    Key_createComponent = Key_createNamespace[0],
    Key_bem = Key_createNamespace[1];

/* harmony default export */ var Key = (Key_createComponent({
  props: {
    type: String,
    text: [Number, String],
    theme: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      active: false
    };
  },
  computed: {
    className: function className() {
      var classNames = this.theme.slice(0);

      if (this.active) {
        classNames.push('active');
      }

      if (this.type) {
        classNames.push(this.type);
      }

      return Key_bem(classNames);
    }
  },
  methods: {
    onFocus: function onFocus() {
      this.active = true;
    },
    onBlur: function onBlur() {
      this.active = false;
    },
    onClick: function onClick() {
      this.$emit('press', this.text, this.type);
    }
  },
  render: function render() {
    var h = arguments[0];
    var onBlur = this.onBlur;
    return h("i", {
      "attrs": {
        "role": "button",
        "tabindex": "0"
      },
      "class": ['van-hairline', this.className],
      "on": {
        "click": this.onClick,
        "touchstart": this.onFocus,
        "touchmove": onBlur,
        "touchend": onBlur,
        "touchcancel": onBlur
      }
    }, [this.slots('default') || this.text]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/number-keyboard/index.js





var number_keyboard_createNamespace = Object(create["a" /* createNamespace */])('number-keyboard'),
    number_keyboard_createComponent = number_keyboard_createNamespace[0],
    number_keyboard_bem = number_keyboard_createNamespace[1],
    number_keyboard_t = number_keyboard_createNamespace[2];

var CLOSE_KEY_THEME = ['blue', 'big'];
var DELETE_KEY_THEME = ['delete', 'big', 'gray'];
/* harmony default export */ var number_keyboard = (number_keyboard_createComponent({
  mixins: [BindEventMixin(function (bind) {
    if (this.hideOnClickOutside) {
      bind(document.body, 'touchstart', this.onBlur);
    }
  })],
  model: {
    event: 'update:value'
  },
  props: {
    show: Boolean,
    title: String,
    closeButtonText: String,
    deleteButtonText: String,
    safeAreaInsetBottom: Boolean,
    theme: {
      type: String,
      default: 'default'
    },
    value: {
      type: String,
      default: ''
    },
    extraKey: {
      type: String,
      default: ''
    },
    maxlength: {
      type: [Number, String],
      default: Number.MAX_VALUE
    },
    zIndex: {
      type: Number,
      default: 100
    },
    transition: {
      type: Boolean,
      default: true
    },
    showDeleteKey: {
      type: Boolean,
      default: true
    },
    hideOnClickOutside: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    show: function show() {
      if (!this.transition) {
        this.$emit(this.show ? 'show' : 'hide');
      }
    }
  },
  computed: {
    keys: function keys() {
      var keys = [];

      for (var i = 1; i <= 9; i++) {
        keys.push({
          text: i
        });
      }

      switch (this.theme) {
        case 'default':
          keys.push({
            text: this.extraKey,
            theme: ['gray']
          }, {
            text: 0
          }, {
            text: this.deleteText,
            theme: ['gray'],
            type: 'delete'
          });
          break;

        case 'custom':
          keys.push({
            text: 0,
            theme: ['middle']
          }, {
            text: this.extraKey
          });
          break;
      }

      return keys;
    },
    deleteText: function deleteText() {
      return this.deleteButtonText || number_keyboard_t('delete');
    }
  },
  methods: {
    onBlur: function onBlur() {
      this.$emit('blur');
    },
    onClose: function onClose() {
      this.$emit('close');
      this.onBlur();
    },
    onAnimationEnd: function onAnimationEnd() {
      this.$emit(this.show ? 'show' : 'hide');
    },
    onPress: function onPress(text, type) {
      if (text === '') {
        return;
      }

      var value = this.value;

      if (type === 'delete') {
        this.$emit('delete');
        this.$emit('update:value', value.slice(0, value.length - 1));
      } else if (type === 'close') {
        this.onClose();
      } else if (value.length < this.maxlength) {
        this.$emit('input', text);
        this.$emit('update:value', value + text);
      }
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    var title = this.title,
        theme = this.theme,
        onPress = this.onPress,
        closeButtonText = this.closeButtonText;
    var titleLeftSlot = this.slots('title-left');
    var showTitleClose = closeButtonText && theme === 'default';
    var showTitle = title || showTitleClose || titleLeftSlot;
    var Title = showTitle && h("div", {
      "class": [number_keyboard_bem('title'), 'van-hairline--top']
    }, [titleLeftSlot && h("span", {
      "class": number_keyboard_bem('title-left')
    }, [titleLeftSlot]), title && h("span", [title]), showTitleClose && h("span", {
      "attrs": {
        "role": "button",
        "tabindex": "0"
      },
      "class": number_keyboard_bem('close'),
      "on": {
        "click": this.onClose
      }
    }, [closeButtonText])]);
    var Keys = this.keys.map(function (key) {
      return h(Key, {
        "key": key.text,
        "attrs": {
          "text": key.text,
          "type": key.type,
          "theme": key.theme
        },
        "on": {
          "press": onPress
        }
      }, [key.type === 'delete' && _this.slots('delete')]);
    });
    var Sidebar = theme === 'custom' && h("div", {
      "class": number_keyboard_bem('sidebar')
    }, [h(Key, {
      "attrs": {
        "text": this.deleteText,
        "type": "delete",
        "theme": DELETE_KEY_THEME
      },
      "on": {
        "press": onPress
      }
    }, [this.slots('delete')]), h(Key, {
      "attrs": {
        "text": closeButtonText,
        "type": "close",
        "theme": CLOSE_KEY_THEME
      },
      "on": {
        "press": onPress
      }
    })]);
    return h("transition", {
      "attrs": {
        "name": this.transition ? 'van-slide-up' : ''
      }
    }, [h("div", {
      "directives": [{
        name: "show",
        value: this.show
      }],
      "style": {
        zIndex: this.zIndex
      },
      "class": number_keyboard_bem([theme, {
        'safe-area-inset-bottom': this.safeAreaInsetBottom
      }]),
      "on": {
        "touchstart": event_stopPropagation,
        "animationend": this.onAnimationEnd,
        "webkitAnimationEnd": this.onAnimationEnd
      }
    }, [Title, h("div", {
      "class": number_keyboard_bem('body')
    }, [Keys]), Sidebar])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/pagination/index.js


var pagination_createNamespace = Object(create["a" /* createNamespace */])('pagination'),
    pagination_createComponent = pagination_createNamespace[0],
    pagination_bem = pagination_createNamespace[1],
    pagination_t = pagination_createNamespace[2];

function makePage(number, text, active) {
  return {
    number: number,
    text: text,
    active: active
  };
}

/* harmony default export */ var pagination = (pagination_createComponent({
  props: {
    prevText: String,
    nextText: String,
    forceEllipses: Boolean,
    value: {
      type: Number,
      default: 0
    },
    pageCount: {
      type: Number,
      default: 0
    },
    totalItems: {
      type: Number,
      default: 0
    },
    mode: {
      type: String,
      default: 'multi'
    },
    itemsPerPage: {
      type: Number,
      default: 10
    },
    showPageSize: {
      type: Number,
      default: 5
    }
  },
  computed: {
    count: function count() {
      var count = this.pageCount || Math.ceil(this.totalItems / this.itemsPerPage);
      return Math.max(1, count);
    },
    pages: function pages() {
      var pages = [];
      var pageCount = this.count;

      if (this.mode !== 'multi') {
        return pages;
      } // Default page limits


      var startPage = 1;
      var endPage = pageCount;
      var isMaxSized = this.showPageSize !== undefined && this.showPageSize < pageCount; // recompute if showPageSize

      if (isMaxSized) {
        // Current page is displayed in the middle of the visible ones
        startPage = Math.max(this.value - Math.floor(this.showPageSize / 2), 1);
        endPage = startPage + this.showPageSize - 1; // Adjust if limit is exceeded

        if (endPage > pageCount) {
          endPage = pageCount;
          startPage = endPage - this.showPageSize + 1;
        }
      } // Add page number links


      for (var number = startPage; number <= endPage; number++) {
        var page = makePage(number, number, number === this.value);
        pages.push(page);
      } // Add links to move between page sets


      if (isMaxSized && this.showPageSize > 0 && this.forceEllipses) {
        if (startPage > 1) {
          var previousPageSet = makePage(startPage - 1, '...', false);
          pages.unshift(previousPageSet);
        }

        if (endPage < pageCount) {
          var nextPageSet = makePage(endPage + 1, '...', false);
          pages.push(nextPageSet);
        }
      }

      return pages;
    }
  },
  watch: {
    value: {
      handler: function handler(page) {
        this.select(page || this.value);
      },
      immediate: true
    }
  },
  methods: {
    select: function select(page, emitChange) {
      page = Math.min(this.count, Math.max(1, page));

      if (this.value !== page) {
        this.$emit('input', page);

        if (emitChange) {
          this.$emit('change', page);
        }
      }
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    var value = this.value;
    var simple = this.mode !== 'multi';

    var onSelect = function onSelect(value) {
      return function () {
        _this.select(value, true);
      };
    };

    return h("ul", {
      "class": pagination_bem({
        simple: simple
      })
    }, [h("li", {
      "class": [pagination_bem('item', {
        disabled: value === 1
      }), pagination_bem('prev'), 'van-hairline'],
      "on": {
        "click": onSelect(value - 1)
      }
    }, [this.prevText || pagination_t('prev')]), this.pages.map(function (page) {
      return h("li", {
        "class": [pagination_bem('item', {
          active: page.active
        }), pagination_bem('page'), 'van-hairline'],
        "on": {
          "click": onSelect(page.number)
        }
      }, [page.text]);
    }), simple && h("li", {
      "class": pagination_bem('page-desc')
    }, [this.slots('pageDesc') || value + "/" + this.count]), h("li", {
      "class": [pagination_bem('item', {
        disabled: value === this.count
      }), pagination_bem('next'), 'van-hairline'],
      "on": {
        "click": onSelect(value + 1)
      }
    }, [this.nextText || pagination_t('next')])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/panel/index.js




 // Types

var panel_createNamespace = Object(create["a" /* createNamespace */])('panel'),
    panel_createComponent = panel_createNamespace[0],
    panel_bem = panel_createNamespace[1];

function Panel(h, props, slots, ctx) {
  var Content = function Content() {
    return [slots.header ? slots.header() : h(cell, {
      "attrs": {
        "icon": props.icon,
        "label": props.desc,
        "title": props.title,
        "value": props.status,
        "valueClass": panel_bem('header-value')
      },
      "class": panel_bem('header')
    }), h("div", {
      "class": panel_bem('content')
    }, [slots.default && slots.default()]), slots.footer && h("div", {
      "class": [panel_bem('footer'), 'van-hairline--top']
    }, [slots.footer()])];
  };

  return h(cell_group, helper_default()([{
    "class": panel_bem(),
    "scopedSlots": {
      default: Content
    }
  }, inherit(ctx, true)]));
}

Panel.props = {
  icon: String,
  desc: String,
  title: String,
  status: String
};
/* harmony default export */ var panel = (panel_createComponent(Panel));
// CONCATENATED MODULE: ./node_modules/vant/es/password-input/index.js


 // Types

var password_input_createNamespace = Object(create["a" /* createNamespace */])('password-input'),
    password_input_createComponent = password_input_createNamespace[0],
    password_input_bem = password_input_createNamespace[1];

function PasswordInput(h, props, slots, ctx) {
  var info = props.errorInfo || props.info;
  var Points = [];

  for (var i = 0; i < props.length; i++) {
    var _char = props.value[i];
    var showBorder = i !== 0 && !props.gutter;
    var style = void 0;

    if (i !== 0 && props.gutter) {
      style = {
        marginLeft: Object(unit["a" /* addUnit */])(props.gutter)
      };
    }

    Points.push(h("li", {
      "class": {
        'van-hairline--left': showBorder
      },
      "style": style
    }, [props.mask ? h("i", {
      "style": {
        visibility: _char ? 'visible' : 'hidden'
      }
    }) : _char]));
  }

  return h("div", {
    "class": password_input_bem()
  }, [h("ul", helper_default()([{
    "class": [password_input_bem('security'), {
      'van-hairline--surround': !props.gutter
    }],
    "on": {
      "touchstart": function touchstart(event) {
        event.stopPropagation();
        emit(ctx, 'focus', event);
      }
    }
  }, inherit(ctx, true)]), [Points]), info && h("div", {
    "class": password_input_bem(props.errorInfo ? 'error-info' : 'info')
  }, [info])]);
}

PasswordInput.props = {
  info: String,
  gutter: [Number, String],
  errorInfo: String,
  mask: {
    type: Boolean,
    default: true
  },
  value: {
    type: String,
    default: ''
  },
  length: {
    type: Number,
    default: 6
  }
};
/* harmony default export */ var password_input = (password_input_createComponent(PasswordInput));
// CONCATENATED MODULE: ./node_modules/vant/es/progress/index.js



var progress_createNamespace = Object(create["a" /* createNamespace */])('progress'),
    progress_createComponent = progress_createNamespace[0],
    progress_bem = progress_createNamespace[1];

/* harmony default export */ var es_progress = (progress_createComponent({
  props: {
    inactive: Boolean,
    pivotText: String,
    pivotColor: String,
    percentage: {
      type: Number,
      required: true,
      validator: function validator(value) {
        return value >= 0 && value <= 100;
      }
    },
    showPivot: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: BLUE
    },
    textColor: {
      type: String,
      default: WHITE
    }
  },
  data: function data() {
    return {
      pivotWidth: 0,
      progressWidth: 0
    };
  },
  mounted: function mounted() {
    this.getWidth();
  },
  watch: {
    showPivot: function showPivot() {
      this.getWidth();
    },
    pivotText: function pivotText() {
      this.getWidth();
    }
  },
  methods: {
    getWidth: function getWidth() {
      var _this = this;

      this.$nextTick(function () {
        _this.progressWidth = _this.$el.offsetWidth;
        _this.pivotWidth = _this.$refs.pivot ? _this.$refs.pivot.offsetWidth : 0;
      });
    }
  },
  render: function render() {
    var h = arguments[0];
    var pivotText = this.pivotText,
        percentage = this.percentage;
    var text = Object(utils["b" /* isDef */])(pivotText) ? pivotText : percentage + '%';
    var showPivot = this.showPivot && text;
    var background = this.inactive ? '#cacaca' : this.color;
    var pivotStyle = {
      color: this.textColor,
      background: this.pivotColor || background
    };
    var portionStyle = {
      background: background,
      width: (this.progressWidth - this.pivotWidth) * percentage / 100 + 'px'
    };
    return h("div", {
      "class": progress_bem()
    }, [h("span", {
      "class": progress_bem('portion', {
        'with-pivot': showPivot
      }),
      "style": portionStyle
    }, [showPivot && h("span", {
      "ref": "pivot",
      "style": pivotStyle,
      "class": progress_bem('pivot')
    }, [text])])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/pull-refresh/index.js






var pull_refresh_createNamespace = Object(create["a" /* createNamespace */])('pull-refresh'),
    pull_refresh_createComponent = pull_refresh_createNamespace[0],
    pull_refresh_bem = pull_refresh_createNamespace[1],
    pull_refresh_t = pull_refresh_createNamespace[2];

var TEXT_STATUS = ['pulling', 'loosing', 'success'];
/* harmony default export */ var pull_refresh = (pull_refresh_createComponent({
  mixins: [TouchMixin],
  props: {
    disabled: Boolean,
    successText: String,
    pullingText: String,
    loosingText: String,
    loadingText: String,
    value: {
      type: Boolean,
      required: true
    },
    successDuration: {
      type: Number,
      default: 500
    },
    animationDuration: {
      type: Number,
      default: 300
    },
    headHeight: {
      type: Number,
      default: 50
    }
  },
  data: function data() {
    return {
      status: 'normal',
      distance: 0,
      duration: 0
    };
  },
  computed: {
    untouchable: function untouchable() {
      return this.status === 'loading' || this.status === 'success' || this.disabled;
    }
  },
  watch: {
    value: function value(loading) {
      var _this = this;

      this.duration = this.animationDuration;

      if (!loading && this.successText) {
        this.status = 'success';
        setTimeout(function () {
          _this.setStatus(0);
        }, this.successDuration);
      } else {
        this.setStatus(loading ? this.headHeight : 0, loading);
      }
    }
  },
  mounted: function mounted() {
    this.scrollEl = getScrollEventTarget(this.$el);
  },
  methods: {
    onTouchStart: function onTouchStart(event) {
      if (!this.untouchable && this.getCeiling()) {
        this.duration = 0;
        this.touchStart(event);
      }
    },
    onTouchMove: function onTouchMove(event) {
      if (this.untouchable) {
        return;
      }

      this.touchMove(event);

      if (!this.ceiling && this.getCeiling()) {
        this.duration = 0;
        this.startY = event.touches[0].clientY;
        this.deltaY = 0;
      }

      if (this.ceiling && this.deltaY >= 0) {
        if (this.direction === 'vertical') {
          this.setStatus(this.ease(this.deltaY));
          preventDefault(event);
        }
      }
    },
    onTouchEnd: function onTouchEnd() {
      var _this2 = this;

      if (!this.untouchable && this.ceiling && this.deltaY) {
        this.duration = this.animationDuration;

        if (this.status === 'loosing') {
          this.setStatus(this.headHeight, true);
          this.$emit('input', true); // ensure value change can be watched

          this.$nextTick(function () {
            _this2.$emit('refresh');
          });
        } else {
          this.setStatus(0);
        }
      }
    },
    getCeiling: function getCeiling() {
      this.ceiling = getScrollTop(this.scrollEl) === 0;
      return this.ceiling;
    },
    ease: function ease(distance) {
      var headHeight = this.headHeight;
      return Math.round(distance < headHeight ? distance : distance < headHeight * 2 ? headHeight + (distance - headHeight) / 2 : headHeight * 1.5 + (distance - headHeight * 2) / 4);
    },
    setStatus: function setStatus(distance, isLoading) {
      this.distance = distance;
      var status = isLoading ? 'loading' : distance === 0 ? 'normal' : distance < this.headHeight ? 'pulling' : 'loosing';

      if (status !== this.status) {
        this.status = status;
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    var status = this.status,
        distance = this.distance;
    var text = this[status + "Text"] || pull_refresh_t(status);
    var style = {
      transition: this.duration + "ms",
      transform: this.distance ? "translate3d(0," + this.distance + "px, 0)" : ''
    };
    var Status = this.slots(status, {
      distance: distance
    }) || [TEXT_STATUS.indexOf(status) !== -1 && h("div", {
      "class": pull_refresh_bem('text')
    }, [text]), status === 'loading' && h(es_loading, {
      "attrs": {
        "size": "16"
      }
    }, [text])];
    return h("div", {
      "class": pull_refresh_bem()
    }, [h("div", {
      "class": pull_refresh_bem('track'),
      "style": style,
      "on": {
        "touchstart": this.onTouchStart,
        "touchmove": this.onTouchMove,
        "touchend": this.onTouchEnd,
        "touchcancel": this.onTouchEnd
      }
    }, [h("div", {
      "class": pull_refresh_bem('head')
    }, [Status]), this.slots()])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/rate/index.js


/* eslint-disable prefer-spread */



 // Types

var rate_createNamespace = Object(create["a" /* createNamespace */])('rate'),
    rate_createComponent = rate_createNamespace[0],
    rate_bem = rate_createNamespace[1];

function getRateStatus(value, index, allowHalf) {
  if (value >= index) {
    return 'full';
  }

  if (value + 0.5 >= index && allowHalf) {
    return 'half';
  }

  return 'void';
}

function Rate(h, props, slots, ctx) {
  var icon = props.icon,
      color = props.color,
      count = props.count,
      voidIcon = props.voidIcon,
      readonly = props.readonly,
      disabled = props.disabled,
      voidColor = props.voidColor,
      disabledColor = props.disabledColor;
  var list = [];

  for (var i = 1; i <= count; i++) {
    list.push(getRateStatus(props.value, i, props.allowHalf));
  }

  function onSelect(index) {
    if (!disabled && !readonly) {
      emit(ctx, 'input', index);
      emit(ctx, 'change', index);
    }
  }

  function onTouchMove(event) {
    if (readonly || disabled || !document.elementFromPoint) {
      return;
    }

    preventDefault(event);
    var _event$touches$ = event.touches[0],
        clientX = _event$touches$.clientX,
        clientY = _event$touches$.clientY;
    var target = document.elementFromPoint(clientX, clientY);

    if (target && target.dataset) {
      var score = target.dataset.score;
      /* istanbul ignore else */

      if (score) {
        onSelect(+score);
      }
    }
  }

  var gutter = Object(unit["a" /* addUnit */])(props.gutter);

  function renderStar(status, index) {
    var isFull = status === 'full';
    var isVoid = status === 'void';
    var score = index + 1;
    var size = Object(unit["a" /* addUnit */])(props.size);
    var style;

    if (gutter && score !== count) {
      style = {
        paddingRight: gutter
      };
    }

    return h("div", {
      "key": index,
      "attrs": {
        "role": "radio",
        "tabindex": "0",
        "aria-setsize": count,
        "aria-posinset": score,
        "aria-checked": String(!isVoid)
      },
      "style": style,
      "class": rate_bem('item')
    }, [h(es_icon, {
      "attrs": {
        "size": size,
        "name": isFull ? icon : voidIcon,
        "data-score": score,
        "color": disabled ? disabledColor : isFull ? color : voidColor
      },
      "class": rate_bem('icon'),
      "on": {
        "click": function click() {
          onSelect(score);
        }
      }
    }), props.allowHalf && h(es_icon, {
      "attrs": {
        "size": size,
        "name": isVoid ? voidIcon : icon,
        "data-score": score - 0.5,
        "color": disabled ? disabledColor : isVoid ? voidColor : color
      },
      "class": rate_bem('icon', 'half'),
      "on": {
        "click": function click() {
          onSelect(score - 0.5);
        }
      }
    })]);
  }

  return h("div", helper_default()([{
    "class": rate_bem(),
    "attrs": {
      "tabindex": "0",
      "role": "radiogroup"
    }
  }, inherit(ctx), {
    "on": {
      "touchmove": onTouchMove
    }
  }]), [list.map(function (status, index) {
    return renderStar(status, index);
  })]);
}

Rate.props = {
  size: [Number, String],
  gutter: [Number, String],
  readonly: Boolean,
  disabled: Boolean,
  allowHalf: Boolean,
  value: {
    type: Number,
    default: 0
  },
  icon: {
    type: String,
    default: 'star'
  },
  voidIcon: {
    type: String,
    default: 'star-o'
  },
  color: {
    type: String,
    default: '#ffd21e'
  },
  voidColor: {
    type: String,
    default: '#c7c7c7'
  },
  disabledColor: {
    type: String,
    default: '#bdbdbd'
  },
  count: {
    type: Number,
    default: 5
  }
};
/* harmony default export */ var es_rate = (rate_createComponent(Rate));
// CONCATENATED MODULE: ./node_modules/vant/es/row/index.js


var row_createNamespace = Object(create["a" /* createNamespace */])('row'),
    row_createComponent = row_createNamespace[0],
    row_bem = row_createNamespace[1];

/* harmony default export */ var row = (row_createComponent({
  props: {
    type: String,
    align: String,
    justify: String,
    tag: {
      type: String,
      default: 'div'
    },
    gutter: {
      type: [Number, String],
      default: 0
    }
  },
  render: function render() {
    var _bem;

    var h = arguments[0];
    var align = this.align,
        justify = this.justify;
    var flex = this.type === 'flex';
    var margin = "-" + Number(this.gutter) / 2 + "px";
    var style = this.gutter ? {
      marginLeft: margin,
      marginRight: margin
    } : {};
    return h(this.tag, {
      "style": style,
      "class": row_bem((_bem = {
        flex: flex
      }, _bem["align-" + align] = flex && align, _bem["justify-" + justify] = flex && justify, _bem))
    }, [this.slots()]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/search/index.js






 // Types

var search_createNamespace = Object(create["a" /* createNamespace */])('search'),
    search_createComponent = search_createNamespace[0],
    search_bem = search_createNamespace[1],
    search_t = search_createNamespace[2];

function Search(h, props, slots, ctx) {
  function Label() {
    if (slots.label || props.label) {
      return h("div", {
        "class": search_bem('label')
      }, [slots.label ? slots.label() : props.label]);
    }
  }

  function Action() {
    if (!props.showAction) {
      return;
    }

    function onCancel() {
      emit(ctx, 'input', '');
      emit(ctx, 'cancel');
    }

    return h("div", {
      "class": search_bem('action')
    }, [slots.action ? slots.action() : h("div", {
      "on": {
        "click": onCancel
      }
    }, [search_t('cancel')])]);
  }

  var fieldData = {
    attrs: ctx.data.attrs,
    on: _extends({}, ctx.listeners, {
      input: function input(value) {
        emit(ctx, 'input', value);
      },
      keypress: function keypress(event) {
        // press enter
        if (event.keyCode === 13) {
          preventDefault(event);
          emit(ctx, 'search', props.value);
        }

        emit(ctx, 'keypress', event);
      }
    })
  };
  var inheritData = inherit(ctx);
  delete inheritData.attrs;
  return h("div", helper_default()([{
    "class": search_bem({
      'show-action': props.showAction
    }),
    "style": {
      background: props.background
    }
  }, inheritData]), [h("div", {
    "class": search_bem('content', props.shape)
  }, [Label(), h(field, helper_default()([{
    "attrs": {
      "type": "search",
      "border": false,
      "value": props.value,
      "leftIcon": props.leftIcon,
      "rightIcon": props.rightIcon,
      "clearable": props.clearable
    },
    "scopedSlots": {
      'left-icon': slots['left-icon'],
      'right-icon': slots['right-icon']
    }
  }, fieldData]))]), Action()]);
}

Search.props = {
  value: String,
  label: String,
  rightIcon: String,
  showAction: Boolean,
  shape: {
    type: String,
    default: 'square'
  },
  clearable: {
    type: Boolean,
    default: true
  },
  background: {
    type: String,
    default: '#fff'
  },
  leftIcon: {
    type: String,
    default: 'search'
  }
};
/* harmony default export */ var search = (search_createComponent(Search));
// CONCATENATED MODULE: ./node_modules/vant/es/sidebar/index.js



var sidebar_createNamespace = Object(create["a" /* createNamespace */])('sidebar'),
    sidebar_createComponent = sidebar_createNamespace[0],
    sidebar_bem = sidebar_createNamespace[1];

/* harmony default export */ var sidebar = (sidebar_createComponent({
  mixins: [ParentMixin('vanSidebar')],
  model: {
    prop: 'activeKey'
  },
  props: {
    activeKey: {
      type: [Number, String],
      default: 0
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": [sidebar_bem(), 'van-hairline--top-bottom']
    }, [this.slots()]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/sidebar-item/index.js






var sidebar_item_createNamespace = Object(create["a" /* createNamespace */])('sidebar-item'),
    sidebar_item_createComponent = sidebar_item_createNamespace[0],
    sidebar_item_bem = sidebar_item_createNamespace[1];

/* harmony default export */ var sidebar_item = (sidebar_item_createComponent({
  mixins: [ChildrenMixin('vanSidebar')],
  props: _extends({}, routeProps, {
    info: [Number, String],
    title: String
  }),
  computed: {
    select: function select() {
      return this.index === +this.parent.activeKey;
    }
  },
  methods: {
    onClick: function onClick() {
      this.$emit('click', this.index);
      this.parent.$emit('input', this.index);
      this.parent.$emit('change', this.index);
      route(this.$router, this);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("a", {
      "class": [sidebar_item_bem({
        select: this.select
      }), 'van-hairline'],
      "on": {
        "click": this.onClick
      }
    }, [h("div", {
      "class": sidebar_item_bem('text')
    }, [this.title, h(es_info, {
      "attrs": {
        "info": this.info
      },
      "class": sidebar_item_bem('info')
    })])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/skeleton/index.js


 // Types

var skeleton_createNamespace = Object(create["a" /* createNamespace */])('skeleton'),
    skeleton_createComponent = skeleton_createNamespace[0],
    skeleton_bem = skeleton_createNamespace[1];

var DEFAULT_ROW_WIDTH = '100%';
var DEFAULT_LAST_ROW_WIDTH = '60%';

function Skeleton(h, props, slots, ctx) {
  if (!props.loading) {
    return slots.default && slots.default();
  }

  function Title() {
    if (props.title) {
      return h("h3", {
        "class": skeleton_bem('title'),
        "style": {
          width: Object(unit["a" /* addUnit */])(props.titleWidth)
        }
      });
    }
  }

  function Rows() {
    var Rows = [];
    var rowWidth = props.rowWidth;

    function getRowWidth(index) {
      if (rowWidth === DEFAULT_ROW_WIDTH && index === props.row - 1) {
        return DEFAULT_LAST_ROW_WIDTH;
      }

      if (Array.isArray(rowWidth)) {
        return rowWidth[index];
      }

      return rowWidth;
    }

    for (var i = 0; i < props.row; i++) {
      Rows.push(h("div", {
        "class": skeleton_bem('row'),
        "style": {
          width: Object(unit["a" /* addUnit */])(getRowWidth(i))
        }
      }));
    }

    return Rows;
  }

  function Avatar() {
    if (props.avatar) {
      var size = Object(unit["a" /* addUnit */])(props.avatarSize);
      return h("div", {
        "class": skeleton_bem('avatar', props.avatarShape),
        "style": {
          width: size,
          height: size
        }
      });
    }
  }

  return h("div", helper_default()([{
    "class": skeleton_bem({
      animate: props.animate
    })
  }, inherit(ctx)]), [Avatar(), h("div", {
    "class": skeleton_bem('content')
  }, [Title(), Rows()])]);
}

Skeleton.props = {
  title: Boolean,
  avatar: Boolean,
  row: {
    type: Number,
    default: 0
  },
  loading: {
    type: Boolean,
    default: true
  },
  animate: {
    type: Boolean,
    default: true
  },
  avatarSize: {
    type: String,
    default: '32px'
  },
  avatarShape: {
    type: String,
    default: 'round'
  },
  titleWidth: {
    type: [Number, String],
    default: '40%'
  },
  rowWidth: {
    type: [Number, String, Array],
    default: DEFAULT_ROW_WIDTH
  }
};
/* harmony default export */ var skeleton = (skeleton_createComponent(Skeleton));
// CONCATENATED MODULE: ./node_modules/vant/es/sku/components/SkuHeader.js



 // Types

var SkuHeader_createNamespace = Object(create["a" /* createNamespace */])('sku-header'),
    SkuHeader_createComponent = SkuHeader_createNamespace[0],
    SkuHeader_bem = SkuHeader_createNamespace[1];

function getSkuImg(sku, selectedSku) {
  var id = selectedSku.s1;

  if (id) {
    // skuImg 挂载在 skuTree 中 s1 上
    var treeItem = sku.tree.filter(function (item) {
      return item.k_s === 's1';
    })[0] || {};

    if (treeItem.v) {
      var matchedSku = treeItem.v.filter(function (skuValue) {
        return skuValue.id === id;
      })[0];

      if (matchedSku) {
        return matchedSku.imgUrl || matchedSku.img_url;
      }
    }
  }
}

function SkuHeader(h, props, slots, ctx) {
  var sku = props.sku,
      goods = props.goods,
      skuEventBus = props.skuEventBus,
      selectedSku = props.selectedSku;
  var goodsImg = getSkuImg(sku, selectedSku) || goods.picture;

  var previewImage = function previewImage() {
    skuEventBus.$emit('sku:previewImage', goodsImg);
  };

  return h("div", helper_default()([{
    "class": [SkuHeader_bem(), 'van-hairline--bottom']
  }, inherit(ctx)]), [h("div", {
    "class": SkuHeader_bem('img-wrap'),
    "on": {
      "click": previewImage
    }
  }, [h("img", {
    "attrs": {
      "src": goodsImg
    }
  })]), h("div", {
    "class": SkuHeader_bem('goods-info')
  }, [slots.default && slots.default(), h(es_icon, {
    "attrs": {
      "name": "clear"
    },
    "class": "van-sku__close-icon",
    "on": {
      "click": function click() {
        skuEventBus.$emit('sku:close');
      }
    }
  })])]);
}

SkuHeader.props = {
  sku: Object,
  goods: Object,
  skuEventBus: Object,
  selectedSku: Object
};
/* harmony default export */ var components_SkuHeader = (SkuHeader_createComponent(SkuHeader));
// CONCATENATED MODULE: ./node_modules/vant/es/sku/components/SkuHeaderItem.js


 // Types

var SkuHeaderItem_createNamespace = Object(create["a" /* createNamespace */])('sku-header-item'),
    SkuHeaderItem_createComponent = SkuHeaderItem_createNamespace[0],
    SkuHeaderItem_bem = SkuHeaderItem_createNamespace[1];

function SkuHeaderItem_SkuHeader(h, props, slots, ctx) {
  return h("div", helper_default()([{
    "class": SkuHeaderItem_bem()
  }, inherit(ctx)]), [slots.default && slots.default()]);
}

/* harmony default export */ var SkuHeaderItem = (SkuHeaderItem_createComponent(SkuHeaderItem_SkuHeader));
// CONCATENATED MODULE: ./node_modules/vant/es/sku/components/SkuRow.js


 // Types

var SkuRow_createNamespace = Object(create["a" /* createNamespace */])('sku-row'),
    SkuRow_createComponent = SkuRow_createNamespace[0],
    SkuRow_bem = SkuRow_createNamespace[1];

function SkuRow(h, props, slots, ctx) {
  return h("div", helper_default()([{
    "class": [SkuRow_bem(), 'van-hairline--bottom']
  }, inherit(ctx)]), [h("div", {
    "class": SkuRow_bem('title')
  }, [props.skuRow.k]), slots.default && slots.default()]);
}

SkuRow.props = {
  skuRow: Object
};
/* harmony default export */ var components_SkuRow = (SkuRow_createComponent(SkuRow));
// CONCATENATED MODULE: ./node_modules/vant/es/sku/constants.js
var LIMIT_TYPE = {
  QUOTA_LIMIT: 0,
  STOCK_LIMIT: 1
};
var UNSELECTED_SKU_VALUE_ID = '';
/* harmony default export */ var constants = ({
  LIMIT_TYPE: LIMIT_TYPE,
  UNSELECTED_SKU_VALUE_ID: UNSELECTED_SKU_VALUE_ID
});
// CONCATENATED MODULE: ./node_modules/vant/es/sku/utils/skuHelper.js


/*
  normalize sku tree

  [
    {
      count: 2,
      k: "品种", // 规格名称 skuKeyName
      k_id: "1200", // skuKeyId
      k_s: "s1" // skuKeyStr
      v: [ // skuValues
        { // skuValue
          id: "1201", // skuValueId
          name: "萌" // 具体的规格值 skuValueName
        }, {
          id: "973",
          name: "帅"
        }
      ]
    },
    ...
  ]
                |
                v
  {
    s1: [{
      id: "1201",
      name: "萌"
    }, {
      id: "973",
      name: "帅"
    }],
    ...
  }
 */

var normalizeSkuTree = function normalizeSkuTree(skuTree) {
  var normalizedTree = {};
  skuTree.forEach(function (treeItem) {
    normalizedTree[treeItem.k_s] = treeItem.v;
  });
  return normalizedTree;
}; // 判断是否所有的sku都已经选中

var skuHelper_isAllSelected = function isAllSelected(skuTree, selectedSku) {
  // 筛选selectedSku对象中key值不为空的值
  var selected = Object.keys(selectedSku).filter(function (skuKeyStr) {
    return selectedSku[skuKeyStr] !== UNSELECTED_SKU_VALUE_ID;
  });
  return skuTree.length === selected.length;
}; // 根据已选择的 sku 获取 skuComb

var getSkuComb = function getSkuComb(skuList, selectedSku) {
  var skuComb = skuList.filter(function (item) {
    return Object.keys(selectedSku).every(function (skuKeyStr) {
      return String(item[skuKeyStr]) === String(selectedSku[skuKeyStr]);
    });
  });
  return skuComb[0];
}; // 获取已选择的sku名称

var skuHelper_getSelectedSkuValues = function getSelectedSkuValues(skuTree, selectedSku) {
  var normalizedTree = normalizeSkuTree(skuTree);
  return Object.keys(selectedSku).reduce(function (selectedValues, skuKeyStr) {
    var skuValues = normalizedTree[skuKeyStr];
    var skuValueId = selectedSku[skuKeyStr];

    if (skuValueId !== UNSELECTED_SKU_VALUE_ID) {
      var skuValue = skuValues.filter(function (value) {
        return value.id === skuValueId;
      })[0];
      skuValue && selectedValues.push(skuValue);
    }

    return selectedValues;
  }, []);
}; // 判断sku是否可选

var skuHelper_isSkuChoosable = function isSkuChoosable(skuList, selectedSku, skuToChoose) {
  var _extends2;

  var key = skuToChoose.key,
      valueId = skuToChoose.valueId; // 先假设sku已选中，拼入已选中sku对象中

  var matchedSku = _extends({}, selectedSku, (_extends2 = {}, _extends2[key] = valueId, _extends2)); // 再判断剩余sku是否全部不可选，若不可选则当前sku不可选中


  var skusToCheck = Object.keys(matchedSku).filter(function (skuKey) {
    return matchedSku[skuKey] !== UNSELECTED_SKU_VALUE_ID;
  });
  var filteredSku = skuList.filter(function (sku) {
    return skusToCheck.every(function (skuKey) {
      return String(matchedSku[skuKey]) === String(sku[skuKey]);
    });
  });
  var stock = filteredSku.reduce(function (total, sku) {
    total += sku.stock_num;
    return total;
  }, 0);
  return stock > 0;
};
/* harmony default export */ var skuHelper = ({
  normalizeSkuTree: normalizeSkuTree,
  getSkuComb: getSkuComb,
  getSelectedSkuValues: skuHelper_getSelectedSkuValues,
  isAllSelected: skuHelper_isAllSelected,
  isSkuChoosable: skuHelper_isSkuChoosable
});
// CONCATENATED MODULE: ./node_modules/vant/es/sku/components/SkuRowItem.js




var SkuRowItem_createNamespace = Object(create["a" /* createNamespace */])('sku-row-item'),
    SkuRowItem_createComponent = SkuRowItem_createNamespace[0];

/* harmony default export */ var SkuRowItem = (SkuRowItem_createComponent({
  props: {
    skuValue: Object,
    skuKeyStr: String,
    skuEventBus: Object,
    selectedSku: Object,
    skuList: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  computed: {
    choosable: function choosable() {
      return skuHelper_isSkuChoosable(this.skuList, this.selectedSku, {
        key: this.skuKeyStr,
        valueId: this.skuValue.id
      });
    }
  },
  methods: {
    onSelect: function onSelect() {
      if (this.choosable) {
        this.skuEventBus.$emit('sku:select', _extends({}, this.skuValue, {
          skuKeyStr: this.skuKeyStr
        }));
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    var choosed = this.skuValue.id === this.selectedSku[this.skuKeyStr];
    var imgUrl = this.skuValue.imgUrl || this.skuValue.img_url;
    return h("span", {
      "class": ['van-sku-row__item', {
        'van-sku-row__item--active': choosed,
        'van-sku-row__item--disabled': !this.choosable
      }],
      "on": {
        "click": this.onSelect
      }
    }, [imgUrl && h("img", {
      "class": "van-sku-row__item-img",
      "attrs": {
        "src": imgUrl
      }
    }), h("span", {
      "class": "van-sku-row__item-name"
    }, [this.skuValue.name])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/stepper/index.js





var stepper_createNamespace = Object(create["a" /* createNamespace */])('stepper'),
    stepper_createComponent = stepper_createNamespace[0],
    stepper_bem = stepper_createNamespace[1];

var LONG_PRESS_START_TIME = 600;
var LONG_PRESS_INTERVAL = 200;
/* harmony default export */ var stepper = (stepper_createComponent({
  props: {
    value: null,
    integer: Boolean,
    disabled: Boolean,
    inputWidth: [Number, String],
    buttonSize: [Number, String],
    asyncChange: Boolean,
    disableInput: Boolean,
    min: {
      type: [Number, String],
      default: 1
    },
    max: {
      type: [Number, String],
      default: Infinity
    },
    step: {
      type: [Number, String],
      default: 1
    },
    defaultValue: {
      type: [Number, String],
      default: 1
    }
  },
  data: function data() {
    var value = this.range(Object(utils["b" /* isDef */])(this.value) ? this.value : this.defaultValue);

    if (value !== +this.value) {
      this.$emit('input', value);
    }

    return {
      currentValue: value
    };
  },
  computed: {
    minusDisabled: function minusDisabled() {
      return this.disabled || this.currentValue <= this.min;
    },
    plusDisabled: function plusDisabled() {
      return this.disabled || this.currentValue >= this.max;
    },
    inputStyle: function inputStyle() {
      var style = {};

      if (this.inputWidth) {
        style.width = Object(unit["a" /* addUnit */])(this.inputWidth);
      }

      if (this.buttonSize) {
        style.height = Object(unit["a" /* addUnit */])(this.buttonSize);
      }

      return style;
    },
    buttonStyle: function buttonStyle() {
      var style = {};

      if (this.buttonSize) {
        var size = Object(unit["a" /* addUnit */])(this.buttonSize);
        style.width = size;
        style.height = size;
      }

      return style;
    }
  },
  watch: {
    value: function value(val) {
      if (val !== this.currentValue) {
        this.currentValue = this.format(val);
      }
    },
    currentValue: function currentValue(val) {
      this.$emit('input', val);
      this.$emit('change', val);
    }
  },
  methods: {
    // filter illegal characters
    format: function format(value) {
      value = String(value).replace(/[^0-9.-]/g, '');
      return value === '' ? 0 : this.integer ? Math.floor(value) : +value;
    },
    // limit value range
    range: function range(value) {
      return Math.max(Math.min(this.max, this.format(value)), this.min);
    },
    onInput: function onInput(event) {
      var value = event.target.value;
      var formatted = this.format(value);

      if (this.asyncChange) {
        event.target.value = this.currentValue;
        this.$emit('input', formatted);
        this.$emit('change', formatted);
      } else {
        if (+value !== formatted) {
          event.target.value = formatted;
        }

        this.currentValue = formatted;
      }
    },
    onChange: function onChange() {
      var type = this.type;

      if (this[type + "Disabled"]) {
        this.$emit('overlimit', type);
        return;
      }

      var diff = type === 'minus' ? -this.step : +this.step;
      var value = Math.round((this.currentValue + diff) * 100) / 100;

      if (this.asyncChange) {
        this.$emit('input', value);
        this.$emit('change', value);
      } else {
        this.currentValue = this.range(value);
      }

      this.$emit(type);
    },
    onFocus: function onFocus(event) {
      this.$emit('focus', event);
    },
    onBlur: function onBlur(event) {
      this.currentValue = this.range(this.currentValue);
      this.$emit('blur', event); // fix edge case when input is empty and min is 0

      if (this.currentValue === 0) {
        event.target.value = this.currentValue;
      }

      resetScroll();
    },
    longPressStep: function longPressStep() {
      var _this = this;

      this.longPressTimer = setTimeout(function () {
        _this.onChange(_this.type);

        _this.longPressStep(_this.type);
      }, LONG_PRESS_INTERVAL);
    },
    onTouchStart: function onTouchStart() {
      var _this2 = this;

      clearTimeout(this.longPressTimer);
      this.isLongPress = false;
      this.longPressTimer = setTimeout(function () {
        _this2.isLongPress = true;

        _this2.onChange();

        _this2.longPressStep();
      }, LONG_PRESS_START_TIME);
    },
    onTouchEnd: function onTouchEnd(event) {
      clearTimeout(this.longPressTimer);

      if (this.isLongPress) {
        event.preventDefault();
      }
    }
  },
  render: function render() {
    var _this3 = this;

    var h = arguments[0];

    var createListeners = function createListeners(type) {
      return {
        on: {
          click: function click() {
            _this3.type = type;

            _this3.onChange();
          },
          touchstart: function touchstart() {
            _this3.type = type;

            _this3.onTouchStart(type);
          },
          touchend: _this3.onTouchEnd,
          touchcancel: _this3.onTouchEnd
        }
      };
    };

    return h("div", {
      "class": stepper_bem()
    }, [h("button", helper_default()([{
      "style": this.buttonStyle,
      "class": stepper_bem('minus', {
        disabled: this.minusDisabled
      })
    }, createListeners('minus')])), h("input", {
      "attrs": {
        "type": "number",
        "role": "spinbutton",
        "aria-valuemax": this.max,
        "aria-valuemin": this.min,
        "aria-valuenow": this.currentValue,
        "disabled": this.disabled || this.disableInput
      },
      "class": stepper_bem('input'),
      "domProps": {
        "value": this.currentValue
      },
      "style": this.inputStyle,
      "on": {
        "input": this.onInput,
        "focus": this.onFocus,
        "blur": this.onBlur
      }
    }), h("button", helper_default()([{
      "style": this.buttonStyle,
      "class": stepper_bem('plus', {
        disabled: this.plusDisabled
      })
    }, createListeners('plus')]))]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/sku/components/SkuStepper.js




var SkuStepper_createNamespace = Object(create["a" /* createNamespace */])('sku-stepper'),
    SkuStepper_createComponent = SkuStepper_createNamespace[0];

var QUOTA_LIMIT = LIMIT_TYPE.QUOTA_LIMIT,
    STOCK_LIMIT = LIMIT_TYPE.STOCK_LIMIT;
/* harmony default export */ var SkuStepper = (SkuStepper_createComponent({
  props: {
    stock: Number,
    skuEventBus: Object,
    skuStockNum: Number,
    selectedNum: Number,
    stepperTitle: String,
    disableStepperInput: Boolean,
    customStepperConfig: Object,
    quota: {
      type: Number,
      default: 0
    },
    quotaUsed: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      currentNum: this.selectedNum,
      // 购买限制类型: 限购/库存
      limitType: STOCK_LIMIT
    };
  },
  watch: {
    currentNum: function currentNum(num) {
      this.skuEventBus.$emit('sku:numChange', num);
    },
    stepperLimit: function stepperLimit(limit) {
      if (limit < this.currentNum) {
        this.currentNum = limit;
      }
    }
  },
  computed: {
    stepperLimit: function stepperLimit() {
      var quotaLimit = this.quota - this.quotaUsed;
      var limit; // 无限购时直接取库存，有限购时取限购数和库存数中小的那个

      if (this.quota > 0 && quotaLimit <= this.stock) {
        // 修正负的limit
        limit = quotaLimit < 0 ? 0 : quotaLimit;
        this.limitType = QUOTA_LIMIT;
      } else {
        limit = this.stock;
        this.limitType = STOCK_LIMIT;
      }

      return limit;
    }
  },
  methods: {
    setCurrentNum: function setCurrentNum(num) {
      this.currentNum = num;
    },
    onOverLimit: function onOverLimit(action) {
      this.skuEventBus.$emit('sku:overLimit', {
        action: action,
        limitType: this.limitType,
        quota: this.quota,
        quotaUsed: this.quotaUsed
      });
    },
    onChange: function onChange(currentValue) {
      var handleStepperChange = this.customStepperConfig.handleStepperChange;
      handleStepperChange && handleStepperChange(currentValue);
      this.$emit('change', currentValue);
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    return h("div", {
      "class": "van-sku-stepper-stock"
    }, [h("div", {
      "class": "van-sku-stepper-container"
    }, [h("div", {
      "class": "van-sku__stepper-title"
    }, [this.stepperTitle || '购买数量']), h(stepper, {
      "class": "van-sku__stepper",
      "attrs": {
        "max": this.stepperLimit,
        "disableInput": this.disableStepperInput
      },
      "on": {
        "overlimit": this.onOverLimit,
        "change": this.onChange
      },
      "model": {
        value: _this.currentNum,
        callback: function callback($$v) {
          _this.currentNum = $$v;
        }
      }
    })])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/utils/validate/email.js
/* eslint-disable */
function isEmail(value) {
  var reg = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
  return reg.test(value);
}
// CONCATENATED MODULE: ./node_modules/vant/es/uploader/utils.js
function toArray(item) {
  if (Array.isArray(item)) {
    return item;
  }

  return [item];
}
function utils_readFile(file, resultType) {
  return new Promise(function (resolve) {
    var reader = new FileReader();

    reader.onload = function (event) {
      resolve(event.target.result);
    };

    if (resultType === 'dataUrl') {
      reader.readAsDataURL(file);
    } else if (resultType === 'text') {
      reader.readAsText(file);
    }
  });
}
function isOversize(files, maxSize) {
  return toArray(files).some(function (file) {
    return file.size > maxSize;
  });
}
var IMAGE_EXT = ['jpeg', 'jpg', 'gif', 'png', 'svg'];
function isImageUrl(url) {
  return IMAGE_EXT.some(function (ext) {
    return url.indexOf("." + ext) !== -1;
  });
}
function isImageFile(item) {
  if (item.file && item.file.type) {
    return item.file.type.indexOf('image') === 0;
  }

  if (item.url) {
    return isImageUrl(item.url);
  }

  if (item.content) {
    return item.content.indexOf('data:image') === 0;
  }

  return false;
}
// CONCATENATED MODULE: ./node_modules/vant/es/uploader/index.js







var uploader_createNamespace = Object(create["a" /* createNamespace */])('uploader'),
    uploader_createComponent = uploader_createNamespace[0],
    uploader_bem = uploader_createNamespace[1];

/* harmony default export */ var uploader = (uploader_createComponent({
  inheritAttrs: false,
  model: {
    prop: 'fileList'
  },
  props: {
    disabled: Boolean,
    uploadText: String,
    afterRead: Function,
    beforeRead: Function,
    previewSize: [Number, String],
    name: {
      type: [Number, String],
      default: ''
    },
    accept: {
      type: String,
      default: 'image/*'
    },
    fileList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    maxSize: {
      type: Number,
      default: Number.MAX_VALUE
    },
    maxCount: {
      type: Number,
      default: Number.MAX_VALUE
    },
    previewImage: {
      type: Boolean,
      default: true
    },
    resultType: {
      type: String,
      default: 'dataUrl'
    }
  },
  computed: {
    detail: function detail() {
      return {
        name: this.name
      };
    },
    previewSizeWithUnit: function previewSizeWithUnit() {
      return Object(unit["a" /* addUnit */])(this.previewSize);
    }
  },
  methods: {
    onChange: function onChange(event) {
      var _this = this;

      var files = event.target.files;

      if (this.disabled || !files.length) {
        return;
      }

      files = files.length === 1 ? files[0] : [].slice.call(files);

      if (this.beforeRead) {
        var response = this.beforeRead(files, this.detail);

        if (!response) {
          this.resetInput();
          return;
        }

        if (response.then) {
          response.then(function () {
            _this.readFile(files);
          }).catch(this.resetInput);
          return;
        }
      }

      this.readFile(files);
    },
    readFile: function readFile(files) {
      var _this2 = this;

      var oversize = isOversize(files, this.maxSize);

      if (Array.isArray(files)) {
        var maxCount = this.maxCount - this.fileList.length;

        if (files.length > maxCount) {
          files = files.slice(0, maxCount);
        }

        Promise.all(files.map(function (file) {
          return utils_readFile(file, _this2.resultType);
        })).then(function (contents) {
          var fileList = files.map(function (file, index) {
            return {
              file: file,
              content: contents[index]
            };
          });

          _this2.onAfterRead(fileList, oversize);
        });
      } else {
        utils_readFile(files, this.resultType).then(function (content) {
          _this2.onAfterRead({
            file: files,
            content: content
          }, oversize);
        });
      }
    },
    onAfterRead: function onAfterRead(files, oversize) {
      if (oversize) {
        this.$emit('oversize', files, this.detail);
        return;
      }

      this.resetInput();
      this.$emit('input', [].concat(this.fileList, toArray(files)));

      if (this.afterRead) {
        this.afterRead(files, this.detail);
      }
    },
    onDelete: function onDelete(file, index) {
      var fileList = this.fileList.slice(0);
      fileList.splice(index, 1);
      this.$emit('input', fileList);
      this.$emit('delete', file);
    },
    resetInput: function resetInput() {
      /* istanbul ignore else */
      if (this.$refs.input) {
        this.$refs.input.value = '';
      }
    },
    onPreviewImage: function onPreviewImage(item) {
      var imageFiles = this.fileList.filter(function (item) {
        return isImageFile(item);
      }).map(function (item) {
        return item.content || item.url;
      });
      image_preview({
        images: imageFiles,
        startPosition: imageFiles.indexOf(item.content || item.url)
      });
    },
    renderPreview: function renderPreview() {
      var _this3 = this;

      var h = this.$createElement;

      if (!this.previewImage) {
        return;
      }

      return this.fileList.map(function (item, index) {
        return h("div", {
          "class": uploader_bem('preview')
        }, [isImageFile(item) ? h(es_image, {
          "attrs": {
            "fit": "cover",
            "src": item.content || item.url,
            "width": _this3.previewSize,
            "height": _this3.previewSize
          },
          "class": uploader_bem('preview-image'),
          "on": {
            "click": function click() {
              _this3.onPreviewImage(item);
            }
          }
        }) : h("div", {
          "class": uploader_bem('file'),
          "style": {
            width: _this3.previewSizeWithUnit,
            height: _this3.previewSizeWithUnit
          }
        }, [h(es_icon, {
          "class": uploader_bem('file-icon'),
          "attrs": {
            "name": "description"
          }
        }), h("div", {
          "class": [uploader_bem('file-name'), 'van-ellipsis']
        }, [item.file ? item.file.name : item.url])]), h(es_icon, {
          "attrs": {
            "name": "delete"
          },
          "class": uploader_bem('preview-delete'),
          "on": {
            "click": function click() {
              _this3.onDelete(item, index);
            }
          }
        })]);
      });
    },
    renderUpload: function renderUpload() {
      var h = this.$createElement;

      if (this.fileList.length >= this.maxCount) {
        return;
      }

      var slot = this.slots();
      var Input = h("input", {
        "attrs": _extends({}, this.$attrs, {
          "type": "file",
          "accept": this.accept,
          "disabled": this.disabled
        }),
        "ref": "input",
        "class": uploader_bem('input'),
        "on": {
          "change": this.onChange
        }
      });

      if (slot) {
        return h("div", {
          "class": uploader_bem('input-wrapper')
        }, [slot, Input]);
      }

      var style;

      if (this.previewSize) {
        var size = this.previewSizeWithUnit;
        style = {
          width: size,
          height: size
        };
      }

      return h("div", {
        "class": uploader_bem('upload'),
        "style": style
      }, [h(es_icon, {
        "attrs": {
          "name": "plus"
        },
        "class": uploader_bem('upload-icon')
      }), this.uploadText && h("span", {
        "class": uploader_bem('upload-text')
      }, [this.uploadText]), Input]);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": uploader_bem()
    }, [h("div", {
      "class": uploader_bem('wrapper')
    }, [this.renderPreview(), this.renderUpload()])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/sku/components/SkuImgUploader.js





var SkuImgUploader_createNamespace = Object(create["a" /* createNamespace */])('sku-img-uploader'),
    SkuImgUploader_createComponent = SkuImgUploader_createNamespace[0],
    SkuImgUploader_bem = SkuImgUploader_createNamespace[1];

/* harmony default export */ var SkuImgUploader = (SkuImgUploader_createComponent({
  props: {
    value: String,
    uploadImg: Function,
    maxSize: {
      type: Number,
      default: 6
    }
  },
  data: function data() {
    return {
      // 正在上传的图片 base64
      paddingImg: '',
      uploadFail: false
    };
  },
  methods: {
    afterReadFile: function afterReadFile(file) {
      var _this = this;

      // 上传文件
      this.paddingImg = file.content;
      this.uploadFail = false;
      this.uploadImg(file.file, file.content).then(function (img) {
        _this.$emit('input', img);

        _this.$nextTick(function () {
          _this.paddingImg = '';
        });
      }).catch(function () {
        _this.uploadFail = true;
      });
    },
    onOversize: function onOversize() {
      this.$toast("\u6700\u5927\u53EF\u4E0A\u4F20\u56FE\u7247\u4E3A" + this.maxSize + "MB\uFF0C\u8BF7\u5C1D\u8BD5\u538B\u7F29\u56FE\u7247\u5C3A\u5BF8");
    },
    renderUploader: function renderUploader(content, disabled) {
      if (disabled === void 0) {
        disabled = false;
      }

      var h = this.$createElement;
      return h(uploader, {
        "class": SkuImgUploader_bem('uploader'),
        "attrs": {
          "disabled": disabled,
          "afterRead": this.afterReadFile,
          "maxSize": this.maxSize * 1024 * 1024
        },
        "on": {
          "oversize": this.onOversize
        }
      }, [h("div", {
        "class": SkuImgUploader_bem('img')
      }, [content])]);
    },
    renderMask: function renderMask() {
      var h = this.$createElement;
      return h("div", {
        "class": SkuImgUploader_bem('mask')
      }, [this.uploadFail ? [h(es_icon, {
        "attrs": {
          "name": "warning-o",
          "size": "20px"
        }
      }), h("div", {
        "class": SkuImgUploader_bem('warn-text')
      }, ["\u4E0A\u4F20\u5931\u8D25", h("br"), "\u91CD\u65B0\u4E0A\u4F20"])] : h(es_loading, {
        "attrs": {
          "type": "spinner",
          "size": "20px",
          "color": "white"
        }
      })]);
    }
  },
  render: function render() {
    var _this2 = this;

    var h = arguments[0];
    return h("div", {
      "class": SkuImgUploader_bem()
    }, [this.value && this.renderUploader([h("img", {
      "attrs": {
        "src": this.value
      }
    }), h(es_icon, {
      "attrs": {
        "name": "clear"
      },
      "class": SkuImgUploader_bem('delete'),
      "on": {
        "click": function click() {
          _this2.$emit('input', '');
        }
      }
    })], true), this.paddingImg && this.renderUploader([h("img", {
      "attrs": {
        "src": this.paddingImg
      }
    }), this.renderMask()], !this.uploadFail), !this.value && !this.paddingImg && this.renderUploader(h("div", {
      "class": SkuImgUploader_bem('trigger')
    }, [h(es_icon, {
      "attrs": {
        "name": "photograph",
        "size": "22px"
      }
    })]))]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/sku/components/SkuMessages.js








var SkuMessages_createNamespace = Object(create["a" /* createNamespace */])('sku-messages'),
    SkuMessages_createComponent = SkuMessages_createNamespace[0],
    SkuMessages_bem = SkuMessages_createNamespace[1];

var PLACEHOLDER = {
  id_no: '输入身份证号码',
  text: '输入文本',
  tel: '输入数字',
  email: '输入邮箱',
  date: '点击选择日期',
  time: '点击选择时间',
  textarea: '点击填写段落文本',
  mobile: '输入手机号码'
};
/* harmony default export */ var SkuMessages = (SkuMessages_createComponent({
  props: {
    messages: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    messageConfig: Object,
    goodsId: [Number, String]
  },
  data: function data() {
    return {
      messageValues: this.resetMessageValues(this.messages)
    };
  },
  watch: {
    messages: function messages(val) {
      this.messageValues = this.resetMessageValues(val);
    }
  },
  methods: {
    resetMessageValues: function resetMessageValues(messages) {
      return (messages || []).map(function () {
        return {
          value: ''
        };
      });
    },
    getType: function getType(message) {
      if (+message.multiple === 1) {
        return 'textarea';
      }

      if (message.type === 'id_no') {
        return 'text';
      }

      return message.datetime > 0 ? 'datetime-local' : message.type;
    },
    getMessages: function getMessages() {
      var _this = this;

      var messages = {};
      this.messageValues.forEach(function (item, index) {
        var value = item.value;

        if (_this.messages[index].datetime > 0) {
          value = value.replace(/T/g, ' ');
        }

        messages["message_" + index] = value;
      });
      return messages;
    },
    getCartMessages: function getCartMessages() {
      var _this2 = this;

      var messages = {};
      this.messageValues.forEach(function (item, index) {
        var value = item.value;
        var message = _this2.messages[index];

        if (message.datetime > 0) {
          value = value.replace(/T/g, ' ');
        }

        messages[message.name] = value;
      });
      return messages;
    },
    getPlaceholder: function getPlaceholder(message) {
      var type = +message.multiple === 1 ? 'textarea' : message.type;
      var map = this.messageConfig.placeholderMap || {};
      return message.placeholder || map[type] || PLACEHOLDER[type];
    },
    validateMessages: function validateMessages() {
      var values = this.messageValues;

      for (var i = 0; i < values.length; i++) {
        var value = values[i].value;
        var message = this.messages[i];

        if (value === '') {
          // 必填字段的校验
          if (String(message.required) === '1') {
            // eslint-disable-line
            var textType = message.type === 'image' ? '请上传' : '请填写';
            return textType + message.name;
          }
        } else {
          if (message.type === 'tel' && !Object(number["b" /* isNumber */])(value)) {
            return '请填写正确的数字格式留言';
          }

          if (message.type === 'mobile' && !/^\d{6,20}$/.test(value)) {
            return '手机号长度为6-20位数字';
          }

          if (message.type === 'email' && !isEmail(value)) {
            return '请填写正确的邮箱';
          }

          if (message.type === 'id_no' && (value.length < 15 || value.length > 18)) {
            return '请填写正确的身份证号码';
          }
        }
      }
    }
  },
  render: function render() {
    var _this3 = this;

    var h = arguments[0];
    return h(cell_group, {
      "class": SkuMessages_bem()
    }, [this.messages.map(function (message, index) {
      return message.type === 'image' ? h(cell, {
        "class": SkuMessages_bem('image-cell'),
        "attrs": {
          "value-class": SkuMessages_bem('image-cell-value'),
          "label": "仅限一张",
          "title": message.name,
          "required": String(message.required) === '1'
        },
        "key": _this3.goodsId + "-" + index
      }, [h(SkuImgUploader, {
        "attrs": {
          "uploadImg": _this3.messageConfig.uploadImg,
          "maxSize": _this3.messageConfig.uploadMaxSize
        },
        "model": {
          value: _this3.messageValues[index].value,
          callback: function callback($$v) {
            _this3.messageValues[index].value = $$v;
          }
        }
      })]) : h(field, {
        "attrs": {
          "maxlength": "200",
          "label": message.name,
          "required": String(message.required) === '1',
          "placeholder": _this3.getPlaceholder(message),
          "type": _this3.getType(message)
        },
        "key": _this3.goodsId + "-" + index,
        "model": {
          value: _this3.messageValues[index].value,
          callback: function callback($$v) {
            _this3.messageValues[index].value = $$v;
          }
        }
      });
    })]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/sku/components/SkuActions.js



 // Types

var SkuActions_createNamespace = Object(create["a" /* createNamespace */])('sku-actions'),
    SkuActions_createComponent = SkuActions_createNamespace[0],
    SkuActions_bem = SkuActions_createNamespace[1];

function SkuActions(h, props, slots, ctx) {
  var createEmitter = function createEmitter(name) {
    return function () {
      props.skuEventBus.$emit(name);
    };
  };

  return h("div", helper_default()([{
    "class": SkuActions_bem()
  }, inherit(ctx)]), [props.showAddCartBtn && h(es_button, {
    "attrs": {
      "size": "large",
      "type": "warning",
      "text": props.addCartText || '加入购物车'
    },
    "on": {
      "click": createEmitter('sku:addCart')
    }
  }), h(es_button, {
    "attrs": {
      "size": "large",
      "type": "danger",
      "text": props.buyText || '立即购买'
    },
    "on": {
      "click": createEmitter('sku:buy')
    }
  })]);
}

SkuActions.props = {
  buyText: String,
  addCartText: String,
  skuEventBus: Object,
  showAddCartBtn: Boolean
};
/* harmony default export */ var components_SkuActions = (SkuActions_createComponent(SkuActions));
// CONCATENATED MODULE: ./node_modules/vant/es/sku/Sku.js


/* eslint-disable camelcase */















var Sku_createNamespace = Object(create["a" /* createNamespace */])('sku'),
    Sku_createComponent = Sku_createNamespace[0];

var Sku_QUOTA_LIMIT = LIMIT_TYPE.QUOTA_LIMIT;
/* harmony default export */ var Sku = (Sku_createComponent({
  props: {
    sku: Object,
    priceTag: String,
    goods: Object,
    value: Boolean,
    buyText: String,
    goodsId: [Number, String],
    hideStock: Boolean,
    addCartText: String,
    stepperTitle: String,
    getContainer: Function,
    hideQuotaText: Boolean,
    hideSelectedText: Boolean,
    resetStepperOnHide: Boolean,
    customSkuValidator: Function,
    closeOnClickOverlay: Boolean,
    disableStepperInput: Boolean,
    resetSelectedSkuOnHide: Boolean,
    quota: {
      type: Number,
      default: 0
    },
    quotaUsed: {
      type: Number,
      default: 0
    },
    initialSku: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    showSoldoutSku: {
      type: Boolean,
      default: true
    },
    showAddCartBtn: {
      type: Boolean,
      default: true
    },
    bodyOffsetTop: {
      type: Number,
      default: 200
    },
    messageConfig: {
      type: Object,
      default: function _default() {
        return {
          placeholderMap: {},
          uploadImg: function uploadImg() {
            return Promise.resolve();
          },
          uploadMaxSize: 5
        };
      }
    },
    customStepperConfig: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      selectedSku: {},
      selectedNum: 1,
      show: this.value
    };
  },
  watch: {
    show: function show(val) {
      this.$emit('input', val);

      if (!val) {
        this.$emit('sku-close', {
          selectedSkuValues: this.selectedSkuValues,
          selectedNum: this.selectedNum,
          selectedSkuComb: this.selectedSkuComb
        });

        if (this.resetStepperOnHide) {
          this.resetStepper();
        }

        if (this.resetSelectedSkuOnHide) {
          this.resetSelectedSku(this.skuTree);
        }
      }
    },
    value: function value(val) {
      this.show = val;
    },
    skuTree: function skuTree(val) {
      this.resetSelectedSku(val);
    }
  },
  computed: {
    skuGroupClass: function skuGroupClass() {
      return ['van-sku-group-container', {
        'van-sku-group-container--hide-soldout': !this.showSoldoutSku
      }];
    },
    bodyStyle: function bodyStyle() {
      if (this.$isServer) {
        return;
      } // header高度82px, sku actions高度50px，如果改动了样式自己传下bodyOffsetTop调整下


      var maxHeight = window.innerHeight - this.bodyOffsetTop;
      return {
        maxHeight: maxHeight + 'px'
      };
    },
    isSkuCombSelected: function isSkuCombSelected() {
      return skuHelper_isAllSelected(this.sku.tree, this.selectedSku);
    },
    isSkuEmpty: function isSkuEmpty() {
      return Object.keys(this.sku).length === 0;
    },
    hasSku: function hasSku() {
      return !this.sku.none_sku;
    },
    selectedSkuComb: function selectedSkuComb() {
      if (!this.hasSku) {
        return {
          id: this.sku.collection_id,
          price: Math.round(this.sku.price * 100),
          stock_num: this.sku.stock_num
        };
      }

      if (this.isSkuCombSelected) {
        return getSkuComb(this.sku.list, this.selectedSku);
      }

      return null;
    },
    selectedSkuValues: function selectedSkuValues() {
      return skuHelper_getSelectedSkuValues(this.skuTree, this.selectedSku);
    },
    price: function price() {
      if (this.selectedSkuComb) {
        return (this.selectedSkuComb.price / 100).toFixed(2);
      } // sku.price是一个格式化好的价格区间


      return this.sku.price;
    },
    originPrice: function originPrice() {
      if (this.selectedSkuComb && this.selectedSkuComb.origin_price) {
        return (this.selectedSkuComb.origin_price / 100).toFixed(2);
      }

      return this.sku.origin_price;
    },
    skuTree: function skuTree() {
      return this.sku.tree || [];
    },
    imageList: function imageList() {
      var imageList = [this.goods.picture];

      if (this.skuTree.length > 0) {
        var treeItem = this.skuTree.filter(function (item) {
          return item.k_s === 's1';
        })[0] || {};

        if (!treeItem.v) {
          return imageList;
        }

        treeItem.v.forEach(function (vItem) {
          var img = vItem.imgUrl || vItem.img_url;

          if (img) {
            imageList.push(img);
          }
        });
      }

      return imageList;
    },
    stock: function stock() {
      var stockNum = this.customStepperConfig.stockNum;

      if (stockNum !== undefined) {
        return stockNum;
      }

      if (this.selectedSkuComb) {
        return this.selectedSkuComb.stock_num;
      }

      return this.sku.stock_num;
    },
    stockText: function stockText() {
      var stockFormatter = this.customStepperConfig.stockFormatter;
      if (stockFormatter) return stockFormatter(this.stock);
      return "\u5269\u4F59 " + this.stock + "\u4EF6";
    },
    quotaText: function quotaText() {
      var _this$customStepperCo = this.customStepperConfig,
          quotaText = _this$customStepperCo.quotaText,
          hideQuotaText = _this$customStepperCo.hideQuotaText;
      if (hideQuotaText) return '';
      var text = '';

      if (quotaText) {
        text = quotaText;
      } else if (this.quota > 0) {
        text = "\u6BCF\u4EBA\u9650\u8D2D" + this.quota + "\u4EF6";
      }

      return text;
    },
    selectedText: function selectedText() {
      var _this = this;

      if (this.selectedSkuComb) {
        return "\u5DF2\u9009 " + this.selectedSkuValues.map(function (item) {
          return item.name;
        }).join('；');
      }

      var unselected = this.skuTree.filter(function (item) {
        return _this.selectedSku[item.k_s] === UNSELECTED_SKU_VALUE_ID;
      }).map(function (item) {
        return item.k;
      }).join('；');
      return "\u9009\u62E9 " + unselected;
    }
  },
  created: function created() {
    var skuEventBus = new external_commonjs_vue_commonjs2_vue_root_Vue_default.a();
    this.skuEventBus = skuEventBus;
    skuEventBus.$on('sku:close', this.onClose);
    skuEventBus.$on('sku:select', this.onSelect);
    skuEventBus.$on('sku:numChange', this.onNumChange);
    skuEventBus.$on('sku:previewImage', this.onPreviewImage);
    skuEventBus.$on('sku:overLimit', this.onOverLimit);
    skuEventBus.$on('sku:addCart', this.onAddCart);
    skuEventBus.$on('sku:buy', this.onBuy);
    this.resetStepper();
    this.resetSelectedSku(this.skuTree); // 组件初始化后的钩子，抛出skuEventBus

    this.$emit('after-sku-create', skuEventBus);
  },
  methods: {
    resetStepper: function resetStepper() {
      var skuStepper = this.$refs.skuStepper;
      var selectedNum = this.initialSku.selectedNum;
      var num = Object(utils["b" /* isDef */])(selectedNum) ? selectedNum : 1;

      if (skuStepper) {
        skuStepper.setCurrentNum(num);
      } else {
        this.selectedNum = num;
      }
    },
    resetSelectedSku: function resetSelectedSku(skuTree) {
      var _this2 = this;

      this.selectedSku = {}; // 重置 selectedSku

      skuTree.forEach(function (item) {
        _this2.selectedSku[item.k_s] = _this2.initialSku[item.k_s] || UNSELECTED_SKU_VALUE_ID;
      }); // 只有一个 sku 规格值时默认选中

      skuTree.forEach(function (item) {
        var key = item.k_s;
        var valueId = item.v[0].id;

        if (item.v.length === 1 && skuHelper_isSkuChoosable(_this2.sku.list, _this2.selectedSku, {
          key: key,
          valueId: valueId
        })) {
          _this2.selectedSku[key] = valueId;
        }
      });
    },
    getSkuMessages: function getSkuMessages() {
      return this.$refs.skuMessages ? this.$refs.skuMessages.getMessages() : {};
    },
    getSkuCartMessages: function getSkuCartMessages() {
      return this.$refs.skuMessages ? this.$refs.skuMessages.getCartMessages() : {};
    },
    validateSkuMessages: function validateSkuMessages() {
      return this.$refs.skuMessages ? this.$refs.skuMessages.validateMessages() : '';
    },
    validateSku: function validateSku() {
      if (this.selectedNum === 0) {
        return '商品已经无法购买啦';
      }

      if (this.isSkuCombSelected) {
        return this.validateSkuMessages();
      } // 自定义sku校验


      if (this.customSkuValidator) {
        var err = this.customSkuValidator(this);
        if (err) return err;
      }

      return '请先选择商品规格';
    },
    onClose: function onClose() {
      this.show = false;
    },
    onSelect: function onSelect(skuValue) {
      var _extends2, _extends3;

      // 点击已选中的sku时则取消选中
      this.selectedSku = this.selectedSku[skuValue.skuKeyStr] === skuValue.id ? _extends({}, this.selectedSku, (_extends2 = {}, _extends2[skuValue.skuKeyStr] = UNSELECTED_SKU_VALUE_ID, _extends2)) : _extends({}, this.selectedSku, (_extends3 = {}, _extends3[skuValue.skuKeyStr] = skuValue.id, _extends3));
      this.$emit('sku-selected', {
        skuValue: skuValue,
        selectedSku: this.selectedSku,
        selectedSkuComb: this.selectedSkuComb
      });
    },
    onNumChange: function onNumChange(num) {
      this.selectedNum = num;
    },
    onPreviewImage: function onPreviewImage(indexImage) {
      var _this3 = this;

      var index = this.imageList.findIndex(function (image) {
        return image === indexImage;
      });
      var params = {
        index: index,
        imageList: this.imageList,
        indexImage: indexImage
      };
      this.$emit('open-preview', params);
      image_preview({
        images: this.imageList,
        startPosition: index,
        onClose: function onClose() {
          _this3.$emit('close-preview', params);
        }
      });
    },
    onOverLimit: function onOverLimit(data) {
      var action = data.action,
          limitType = data.limitType,
          quota = data.quota,
          quotaUsed = data.quotaUsed;
      var handleOverLimit = this.customStepperConfig.handleOverLimit;

      if (handleOverLimit) {
        handleOverLimit(data);
        return;
      }

      if (action === 'minus') {
        es_toast('至少选择一件');
      } else if (action === 'plus') {
        if (limitType === Sku_QUOTA_LIMIT) {
          var msg = "\u9650\u8D2D" + quota + "\u4EF6";
          if (quotaUsed > 0) msg += "\uFF0C" + ("\u4F60\u5DF2\u8D2D\u4E70" + quotaUsed + "\u4EF6");
          es_toast(msg);
        } else {
          es_toast('库存不足');
        }
      }
    },
    onAddCart: function onAddCart() {
      this.onBuyOrAddCart('add-cart');
    },
    onBuy: function onBuy() {
      this.onBuyOrAddCart('buy-clicked');
    },
    onBuyOrAddCart: function onBuyOrAddCart(type) {
      var error = this.validateSku();

      if (error) {
        es_toast(error);
      } else {
        this.$emit(type, this.getSkuData());
      }
    },
    getSkuData: function getSkuData() {
      return {
        goodsId: this.goodsId,
        selectedNum: this.selectedNum,
        selectedSkuComb: this.selectedSkuComb,
        messages: this.getSkuMessages(),
        cartMessages: this.getSkuCartMessages()
      };
    }
  },
  render: function render() {
    var _this4 = this;

    var h = arguments[0];

    if (this.isSkuEmpty) {
      return;
    }

    var sku = this.sku,
        goods = this.goods,
        price = this.price,
        originPrice = this.originPrice,
        skuEventBus = this.skuEventBus,
        selectedSku = this.selectedSku,
        selectedNum = this.selectedNum,
        stepperTitle = this.stepperTitle,
        hideQuotaText = this.hideQuotaText,
        selectedSkuComb = this.selectedSkuComb;
    var slotsProps = {
      price: price,
      originPrice: originPrice,
      selectedNum: selectedNum,
      skuEventBus: skuEventBus,
      selectedSku: selectedSku,
      selectedSkuComb: selectedSkuComb
    };

    var slots = function slots(name) {
      return _this4.slots(name, slotsProps);
    };

    var Header = slots('sku-header') || h(components_SkuHeader, {
      "attrs": {
        "sku": sku,
        "goods": goods,
        "skuEventBus": skuEventBus,
        "selectedSku": selectedSku
      }
    }, [slots('sku-header-price') || h("div", {
      "class": "van-sku__goods-price"
    }, [h("span", {
      "class": "van-sku__price-symbol"
    }, ["\uFFE5"]), h("span", {
      "class": "van-sku__price-num"
    }, [price]), this.priceTag && h("span", {
      "class": "van-sku__price-tag"
    }, [this.priceTag])]), slots('sku-header-origin-price') || originPrice && h(SkuHeaderItem, ["\u539F\u4EF7 \uFFE5", originPrice]), !this.hideStock && h(SkuHeaderItem, [h("span", {
      "class": "van-sku__stock"
    }, [this.stockText]), !hideQuotaText && this.quotaText && h("span", {
      "class": "van-sku__quota"
    }, ["(", this.quotaText, ")"])]), this.hasSku && !this.hideSelectedText && h(SkuHeaderItem, [this.selectedText]), slots('sku-header-extra')]);
    var Group = slots('sku-group') || this.hasSku && h("div", {
      "class": this.skuGroupClass
    }, [this.skuTree.map(function (skuTreeItem) {
      return h(components_SkuRow, {
        "attrs": {
          "skuRow": skuTreeItem
        }
      }, [skuTreeItem.v.map(function (skuValue) {
        return h(SkuRowItem, {
          "attrs": {
            "skuList": sku.list,
            "skuValue": skuValue,
            "selectedSku": selectedSku,
            "skuEventBus": skuEventBus,
            "skuKeyStr": skuTreeItem.k_s
          }
        });
      })]);
    })]);
    var Stepper = slots('sku-stepper') || h(SkuStepper, {
      "ref": "skuStepper",
      "attrs": {
        "stock": this.stock,
        "quota": this.quota,
        "quotaUsed": this.quotaUsed,
        "skuEventBus": skuEventBus,
        "selectedNum": selectedNum,
        "selectedSku": selectedSku,
        "stepperTitle": stepperTitle,
        "skuStockNum": sku.stock_num,
        "disableStepperInput": this.disableStepperInput,
        "customStepperConfig": this.customStepperConfig
      },
      "on": {
        "change": function change(event) {
          _this4.$emit('stepper-change', event);
        }
      }
    });
    var Messages = slots('sku-messages') || h(SkuMessages, {
      "ref": "skuMessages",
      "attrs": {
        "goodsId": this.goodsId,
        "messageConfig": this.messageConfig,
        "messages": sku.messages
      }
    });
    var Actions = slots('sku-actions') || h(components_SkuActions, {
      "attrs": {
        "buyText": this.buyText,
        "skuEventBus": skuEventBus,
        "addCartText": this.addCartText,
        "showAddCartBtn": this.showAddCartBtn
      }
    });
    return h(popup, {
      "attrs": {
        "position": "bottom",
        "getContainer": this.getContainer,
        "closeOnClickOverlay": this.closeOnClickOverlay,
        "round": true
      },
      "class": "van-sku-container",
      "model": {
        value: _this4.show,
        callback: function callback($$v) {
          _this4.show = $$v;
        }
      }
    }, [Header, h("div", {
      "class": "van-sku-body",
      "style": this.bodyStyle
    }, [slots('sku-body-top'), Group, slots('extra-sku-group'), Stepper, Messages]), Actions]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/sku/index.js










Sku.SkuActions = components_SkuActions;
Sku.SkuHeader = components_SkuHeader;
Sku.SkuHeaderItem = SkuHeaderItem;
Sku.SkuMessages = SkuMessages;
Sku.SkuStepper = SkuStepper;
Sku.SkuRow = components_SkuRow;
Sku.SkuRowItem = SkuRowItem;
Sku.skuHelper = skuHelper;
Sku.skuConstants = constants;
/* harmony default export */ var es_sku = (Sku);
// CONCATENATED MODULE: ./node_modules/vant/es/slider/index.js




var slider_createNamespace = Object(create["a" /* createNamespace */])('slider'),
    slider_createComponent = slider_createNamespace[0],
    slider_bem = slider_createNamespace[1];

/* harmony default export */ var slider = (slider_createComponent({
  mixins: [TouchMixin],
  props: {
    disabled: Boolean,
    vertical: Boolean,
    activeColor: String,
    inactiveColor: String,
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    value: {
      type: Number,
      default: 0
    },
    barHeight: {
      type: [Number, String],
      default: 2
    }
  },
  computed: {
    range: function range() {
      return this.max - this.min;
    }
  },
  methods: {
    onTouchStart: function onTouchStart(event) {
      if (this.disabled) {
        return;
      }

      this.touchStart(event);
      this.startValue = this.format(this.value);
      this.dragStatus = 'start';
    },
    onTouchMove: function onTouchMove(event) {
      if (this.disabled) {
        return;
      }

      if (this.dragStatus === 'start') {
        this.$emit('drag-start');
      }

      preventDefault(event, true);
      this.touchMove(event);
      this.dragStatus = 'draging';
      var rect = this.$el.getBoundingClientRect();
      var delta = this.vertical ? this.deltaY : this.deltaX;
      var total = this.vertical ? rect.height : rect.width;
      var diff = delta / total * this.range;
      this.newValue = this.startValue + diff;
      this.updateValue(this.newValue);
    },
    onTouchEnd: function onTouchEnd() {
      if (this.disabled) {
        return;
      }

      if (this.dragStatus === 'draging') {
        this.updateValue(this.newValue, true);
        this.$emit('drag-end');
      }

      this.dragStatus = '';
    },
    onClick: function onClick(event) {
      event.stopPropagation();
      if (this.disabled) return;
      var rect = this.$el.getBoundingClientRect();
      var delta = this.vertical ? event.clientY - rect.top : event.clientX - rect.left;
      var total = this.vertical ? rect.height : rect.width;
      var value = delta / total * this.range + this.min;
      this.updateValue(value, true);
    },
    updateValue: function updateValue(value, end) {
      value = this.format(value);
      this.$emit('input', value);

      if (end) {
        this.$emit('change', value);
      }
    },
    format: function format(value) {
      return Math.round(Math.max(this.min, Math.min(value, this.max)) / this.step) * this.step;
    }
  },
  render: function render() {
    var _barStyle;

    var h = arguments[0];
    var vertical = this.vertical;
    var style = {
      background: this.inactiveColor
    };
    var mainAxis = vertical ? 'height' : 'width';
    var crossAxis = vertical ? 'width' : 'height';
    var barStyle = (_barStyle = {}, _barStyle[mainAxis] = (this.value - this.min) * 100 / this.range + "%", _barStyle[crossAxis] = Object(unit["a" /* addUnit */])(this.barHeight), _barStyle.background = this.activeColor, _barStyle);
    return h("div", {
      "style": style,
      "class": slider_bem({
        disabled: this.disabled,
        vertical: vertical
      }),
      "on": {
        "click": this.onClick
      }
    }, [h("div", {
      "class": slider_bem('bar'),
      "style": barStyle
    }, [h("div", {
      "attrs": {
        "role": "slider",
        "tabindex": this.disabled ? -1 : 0,
        "aria-valuemin": this.min,
        "aria-valuenow": this.value,
        "aria-valuemax": this.max,
        "aria-orientation": this.vertical ? 'vertical' : 'horizontal'
      },
      "class": slider_bem('button-wrapper'),
      "on": {
        "touchstart": this.onTouchStart,
        "touchmove": this.onTouchMove,
        "touchend": this.onTouchEnd,
        "touchcancel": this.onTouchEnd
      }
    }, [this.slots('button') || h("div", {
      "class": slider_bem('button')
    })])])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/step/index.js



var step_createNamespace = Object(create["a" /* createNamespace */])('step'),
    step_createComponent = step_createNamespace[0],
    step_bem = step_createNamespace[1];

/* harmony default export */ var step = (step_createComponent({
  beforeCreate: function beforeCreate() {
    var steps = this.$parent.steps;
    var index = this.$parent.slots().indexOf(this.$vnode);
    steps.splice(index === -1 ? steps.length : index, 0, this);
  },
  beforeDestroy: function beforeDestroy() {
    var index = this.$parent.steps.indexOf(this);

    if (index > -1) {
      this.$parent.steps.splice(index, 1);
    }
  },
  computed: {
    status: function status() {
      var index = this.$parent.steps.indexOf(this);
      var active = this.$parent.active;

      if (index < active) {
        return 'finish';
      }

      if (index === active) {
        return 'process';
      }
    }
  },
  render: function render() {
    var _ref;

    var h = arguments[0];
    var slots = this.slots,
        status = this.status;
    var _this$$parent = this.$parent,
        activeIcon = _this$$parent.activeIcon,
        activeColor = _this$$parent.activeColor,
        inactiveIcon = _this$$parent.inactiveIcon,
        direction = _this$$parent.direction;
    var titleStyle = status === 'process' && {
      color: activeColor
    };

    function Circle() {
      if (status === 'process') {
        return slots('active-icon') || h(es_icon, {
          "class": step_bem('icon'),
          "attrs": {
            "name": activeIcon,
            "color": activeColor
          }
        });
      }

      var inactiveIconSlot = slots('inactive-icon');

      if (inactiveIcon || inactiveIconSlot) {
        return inactiveIconSlot || h(es_icon, {
          "class": step_bem('icon'),
          "attrs": {
            "name": inactiveIcon
          }
        });
      }

      return h("i", {
        "class": step_bem('circle')
      });
    }

    return h("div", {
      "class": ['van-hairline', step_bem([direction, (_ref = {}, _ref[status] = status, _ref)])]
    }, [h("div", {
      "class": step_bem('title'),
      "style": titleStyle
    }, [this.slots()]), h("div", {
      "class": step_bem('circle-container')
    }, [Circle()]), h("div", {
      "class": step_bem('line')
    })]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/steps/index.js



var steps_createNamespace = Object(create["a" /* createNamespace */])('steps'),
    steps_createComponent = steps_createNamespace[0],
    steps_bem = steps_createNamespace[1];

/* harmony default export */ var steps = (steps_createComponent({
  props: {
    inactiveIcon: String,
    active: {
      type: Number,
      default: 0
    },
    direction: {
      type: String,
      default: 'horizontal'
    },
    activeColor: {
      type: String,
      default: GREEN
    },
    activeIcon: {
      type: String,
      default: 'checked'
    }
  },
  data: function data() {
    return {
      steps: []
    };
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": steps_bem([this.direction])
    }, [h("div", {
      "class": steps_bem('items')
    }, [this.slots()])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/submit-bar/index.js




 // Types

var submit_bar_createNamespace = Object(create["a" /* createNamespace */])('submit-bar'),
    submit_bar_createComponent = submit_bar_createNamespace[0],
    submit_bar_bem = submit_bar_createNamespace[1],
    submit_bar_t = submit_bar_createNamespace[2];

function SubmitBar(h, props, slots, ctx) {
  var tip = props.tip,
      price = props.price,
      tipIcon = props.tipIcon;

  function Text() {
    if (typeof price === 'number') {
      var priceText = props.currency + " " + (price / 100).toFixed(props.decimalLength);
      return h("div", {
        "class": submit_bar_bem('text')
      }, [h("span", [props.label || submit_bar_t('label')]), h("span", {
        "class": submit_bar_bem('price')
      }, [priceText]), props.suffixLabel && h("span", {
        "class": submit_bar_bem('suffix-label')
      }, [props.suffixLabel])]);
    }
  }

  function Tip() {
    if (slots.tip || tip) {
      return h("div", {
        "class": submit_bar_bem('tip')
      }, [tipIcon && h(es_icon, {
        "class": submit_bar_bem('tip-icon'),
        "attrs": {
          "name": tipIcon
        }
      }), tip && h("span", {
        "class": submit_bar_bem('tip-text')
      }, [tip]), slots.tip && slots.tip()]);
    }
  }

  return h("div", helper_default()([{
    "class": submit_bar_bem({
      'safe-area-inset-bottom': props.safeAreaInsetBottom
    })
  }, inherit(ctx)]), [slots.top && slots.top(), Tip(), h("div", {
    "class": submit_bar_bem('bar')
  }, [slots.default && slots.default(), Text(), h(es_button, {
    "attrs": {
      "square": true,
      "size": "large",
      "type": props.buttonType,
      "loading": props.loading,
      "disabled": props.disabled,
      "text": props.loading ? '' : props.buttonText
    },
    "class": submit_bar_bem('button'),
    "on": {
      "click": function click() {
        emit(ctx, 'submit');
      }
    }
  })])]);
}

SubmitBar.props = {
  tip: String,
  label: String,
  price: Number,
  tipIcon: String,
  loading: Boolean,
  disabled: Boolean,
  buttonText: String,
  suffixLabel: String,
  safeAreaInsetBottom: Boolean,
  decimalLength: {
    type: Number,
    default: 2
  },
  currency: {
    type: String,
    default: '¥'
  },
  buttonType: {
    type: String,
    default: 'danger'
  }
};
/* harmony default export */ var submit_bar = (submit_bar_createComponent(SubmitBar));
// CONCATENATED MODULE: ./node_modules/vant/es/swipe-cell/index.js






var swipe_cell_createNamespace = Object(create["a" /* createNamespace */])('swipe-cell'),
    swipe_cell_createComponent = swipe_cell_createNamespace[0],
    swipe_cell_bem = swipe_cell_createNamespace[1];

var THRESHOLD = 0.15;
/* harmony default export */ var swipe_cell = (swipe_cell_createComponent({
  mixins: [TouchMixin, click_outside_ClickOutsideMixin({
    event: 'touchstart',
    method: 'onClick'
  })],
  props: {
    onClose: Function,
    disabled: Boolean,
    leftWidth: Number,
    rightWidth: Number,
    stopPropagation: Boolean,
    name: {
      type: [Number, String],
      default: ''
    }
  },
  data: function data() {
    return {
      offset: 0,
      dragging: false
    };
  },
  computed: {
    computedLeftWidth: function computedLeftWidth() {
      return this.leftWidth || this.getWidthByRef('left');
    },
    computedRightWidth: function computedRightWidth() {
      return this.rightWidth || this.getWidthByRef('right');
    }
  },
  methods: {
    getWidthByRef: function getWidthByRef(ref) {
      if (this.$refs[ref]) {
        var rect = this.$refs[ref].getBoundingClientRect();
        return rect.width;
      }

      return 0;
    },
    open: function open(position) {
      var offset = position === 'left' ? this.computedLeftWidth : -this.computedRightWidth;
      this.swipeMove(offset);
      this.resetSwipeStatus();
    },
    close: function close() {
      this.offset = 0;
    },
    resetSwipeStatus: function resetSwipeStatus() {
      this.swiping = false;
      this.opened = true;
    },
    swipeMove: function swipeMove(offset) {
      if (offset === void 0) {
        offset = 0;
      }

      this.offset = range(offset, -this.computedRightWidth, this.computedLeftWidth);

      if (this.offset) {
        this.swiping = true;
      } else {
        this.opened = false;
      }
    },
    swipeLeaveTransition: function swipeLeaveTransition(direction) {
      var offset = this.offset,
          computedLeftWidth = this.computedLeftWidth,
          computedRightWidth = this.computedRightWidth;
      var threshold = this.opened ? 1 - THRESHOLD : THRESHOLD; // right

      if (direction === 'right' && -offset > computedRightWidth * threshold && computedRightWidth > 0) {
        this.open('right'); // left
      } else if (direction === 'left' && offset > computedLeftWidth * threshold && computedLeftWidth > 0) {
        this.open('left'); // reset
      } else {
        this.swipeMove(0);
      }
    },
    startDrag: function startDrag(event) {
      if (this.disabled) {
        return;
      }

      this.dragging = true;
      this.startOffset = this.offset;
      this.touchStart(event);
    },
    onDrag: function onDrag(event) {
      if (this.disabled) {
        return;
      }

      this.touchMove(event);

      if (this.direction === 'horizontal') {
        var shouldPrevent = !this.opened || this.deltaX * this.startOffset < 0;

        if (shouldPrevent) {
          preventDefault(event, this.stopPropagation);
        }

        this.swipeMove(this.deltaX + this.startOffset);
      }
    },
    endDrag: function endDrag() {
      if (this.disabled) {
        return;
      }

      this.dragging = false;

      if (this.swiping) {
        this.swipeLeaveTransition(this.offset > 0 ? 'left' : 'right');
      }
    },
    onClick: function onClick(position) {
      if (position === void 0) {
        position = 'outside';
      }

      this.$emit('click', position);

      if (!this.offset) {
        return;
      }

      if (this.onClose) {
        this.onClose(position, this, {
          name: this.name
        });
      } else {
        this.swipeMove(0);
      }
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];

    var onClick = function onClick(position, stop) {
      return function (event) {
        if (stop) {
          event.stopPropagation();
        }

        _this.onClick(position);
      };
    };

    var wrapperStyle = {
      transform: "translate3d(" + this.offset + "px, 0, 0)",
      transition: this.dragging ? 'none' : '.6s cubic-bezier(0.18, 0.89, 0.32, 1)'
    };
    return h("div", {
      "class": swipe_cell_bem(),
      "on": {
        "click": onClick('cell'),
        "touchstart": this.startDrag,
        "touchmove": this.onDrag,
        "touchend": this.endDrag,
        "touchcancel": this.endDrag
      }
    }, [h("div", {
      "class": swipe_cell_bem('wrapper'),
      "style": wrapperStyle,
      "on": {
        "transitionend": function transitionend() {
          _this.swiping = false;
        }
      }
    }, [this.slots('left') && h("div", {
      "ref": "left",
      "class": swipe_cell_bem('left'),
      "on": {
        "click": onClick('left', true)
      }
    }, [this.slots('left')]), this.slots(), this.slots('right') && h("div", {
      "ref": "right",
      "class": swipe_cell_bem('right'),
      "on": {
        "click": onClick('right', true)
      }
    }, [this.slots('right')])])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/tabbar/index.js



var tabbar_createNamespace = Object(create["a" /* createNamespace */])('tabbar'),
    tabbar_createComponent = tabbar_createNamespace[0],
    tabbar_bem = tabbar_createNamespace[1];

/* harmony default export */ var tabbar = (tabbar_createComponent({
  mixins: [ParentMixin('vanTabbar')],
  props: {
    route: Boolean,
    activeColor: String,
    inactiveColor: String,
    safeAreaInsetBottom: Boolean,
    value: {
      type: [Number, String],
      default: 0
    },
    border: {
      type: Boolean,
      default: true
    },
    fixed: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 1
    }
  },
  watch: {
    children: function children() {
      this.setActiveItem();
    },
    value: function value() {
      this.setActiveItem();
    }
  },
  methods: {
    setActiveItem: function setActiveItem() {
      var _this = this;

      this.children.forEach(function (item, index) {
        item.active = (item.name || index) === _this.value;
      });
    },
    onChange: function onChange(active) {
      if (active !== this.value) {
        this.$emit('input', active);
        this.$emit('change', active);
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "style": {
        zIndex: this.zIndex
      },
      "class": [{
        'van-hairline--top-bottom': this.border
      }, tabbar_bem({
        fixed: this.fixed,
        'safe-area-inset-bottom': this.safeAreaInsetBottom
      })]
    }, [this.slots()]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/tabbar-item/index.js







var tabbar_item_createNamespace = Object(create["a" /* createNamespace */])('tabbar-item'),
    tabbar_item_createComponent = tabbar_item_createNamespace[0],
    tabbar_item_bem = tabbar_item_createNamespace[1];

/* harmony default export */ var tabbar_item = (tabbar_item_createComponent({
  mixins: [ChildrenMixin('vanTabbar')],
  props: _extends({}, routeProps, {
    dot: Boolean,
    icon: String,
    name: [Number, String],
    info: [Number, String]
  }),
  data: function data() {
    return {
      active: false
    };
  },
  computed: {
    routeActive: function routeActive() {
      var to = this.to,
          $route = this.$route;

      if (to && $route) {
        var path = Object(utils["c" /* isObj */])(to) ? to.path : to;
        return $route.path === path;
      }
    }
  },
  methods: {
    onClick: function onClick(event) {
      this.parent.onChange(this.name || this.index);
      this.$emit('click', event);
      route(this.$router, this);
    }
  },
  render: function render() {
    var h = arguments[0];
    var icon = this.icon,
        slots = this.slots;
    var active = this.parent.route ? this.routeActive : this.active;
    var color = this.parent[active ? 'activeColor' : 'inactiveColor'];
    return h("div", {
      "class": tabbar_item_bem({
        active: active
      }),
      "style": {
        color: color
      },
      "on": {
        "click": this.onClick
      }
    }, [h("div", {
      "class": tabbar_item_bem('icon', {
        dot: this.dot
      })
    }, [slots('icon', {
      active: active
    }) || icon && h(es_icon, {
      "attrs": {
        "name": icon
      }
    }), h(es_info, {
      "attrs": {
        "info": this.info
      }
    })]), h("div", {
      "class": tabbar_item_bem('text')
    }, [slots('default', {
      active: active
    })])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/tree-select/index.js



 // Types

var tree_select_createNamespace = Object(create["a" /* createNamespace */])('tree-select'),
    tree_select_createComponent = tree_select_createNamespace[0],
    tree_select_bem = tree_select_createNamespace[1];

function TreeSelect(h, props, slots, ctx) {
  var height = props.height,
      items = props.items,
      mainActiveIndex = props.mainActiveIndex,
      activeId = props.activeId;
  var selectedItem = items[mainActiveIndex] || {};
  var subItems = selectedItem.children || [];
  return h("div", helper_default()([{
    "class": tree_select_bem(),
    "style": {
      height: height + "px"
    }
  }, inherit(ctx)]), [h("div", {
    "class": tree_select_bem('nav')
  }, [items.map(function (item, index) {
    return h("div", {
      "key": index,
      "class": ['van-ellipsis', tree_select_bem('nav-item', {
        active: mainActiveIndex === index,
        disabled: item.disabled
      })],
      "on": {
        "click": function click() {
          if (!item.disabled) {
            emit(ctx, 'click-nav', index); // compatible for old usage, should be removed in next major version

            emit(ctx, 'navclick', index);
          }
        }
      }
    }, [item.text]);
  })]), h("div", {
    "class": tree_select_bem('content')
  }, [subItems.map(function (item) {
    return h("div", {
      "key": item.id,
      "class": ['van-ellipsis', tree_select_bem('item', {
        active: activeId === item.id,
        disabled: item.disabled
      })],
      "on": {
        "click": function click() {
          if (!item.disabled) {
            emit(ctx, 'click-item', item); // compatible for old usage, should be removed in next major version

            emit(ctx, 'itemclick', item);
          }
        }
      }
    }, [item.text, activeId === item.id && h(es_icon, {
      "attrs": {
        "name": "checked",
        "size": "16px"
      },
      "class": tree_select_bem('selected')
    })]);
  })])]);
}

TreeSelect.props = {
  items: {
    type: Array,
    default: function _default() {
      return [];
    }
  },
  height: {
    type: Number,
    default: 300
  },
  activeId: {
    type: [Number, String],
    default: 0
  },
  mainActiveIndex: {
    type: Number,
    default: 0
  }
};
/* harmony default export */ var tree_select = (tree_select_createComponent(TreeSelect));
// CONCATENATED MODULE: ./node_modules/vant/es/index.js
/* eslint-disable */
// This file is auto gererated by build/build-entry.js


















































































var version = '2.1.1';
var components = [action_sheet, address_edit, address_list, es_area, es_button, card, cell, cell_group, es_checkbox, checkbox_group, circle, col, collapse, collapse_item, contact_card, contact_edit, contact_list, count_down, es_coupon, coupon_cell, coupon_list, datetime_picker, dialog, divider, dropdown_item, dropdown_menu, field, goods_action, goods_action_button, goods_action_icon, grid, grid_item, es_icon, es_image, image_preview, index_anchor, index_bar, es_info, es_list, es_loading, nav_bar, notice_bar, notify, number_keyboard, es_overlay, pagination, panel, password_input, es_picker, popup, es_progress, pull_refresh, es_radio, radio_group, es_rate, row, search, sidebar, sidebar_item, skeleton, es_sku, slider, step, stepper, steps, sticky, submit_bar, swipe, swipe_cell, swipe_item, es_switch, switch_cell, tab, tabbar, tabbar_item, tabs, es_tag, es_toast, tree_select, uploader];

var install = function install(Vue) {
  components.forEach(function (Component) {
    Vue.use(Component);
  });
};
/* istanbul ignore if */


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}


/* harmony default export */ var es = ({
  install: install,
  version: version
});
// EXTERNAL MODULE: ./node_modules/vant/lib/index.css
var lib = __webpack_require__("157a");

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../@v2-components/v2-mobile-input/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



external_commonjs_vue_commonjs2_vue_root_Vue_default.a.use(es);
/* harmony default export */ var v2_mobile_inputvue_type_script_lang_js_ = ({
  name: "v2-mobile-input",
  mounted: function mounted() {},
  data: function data() {
    return {};
  },
  methods: {},
  computed: {}
});
// CONCATENATED MODULE: ../@v2-components/v2-mobile-input/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var _v2_components_v2_mobile_inputvue_type_script_lang_js_ = (v2_mobile_inputvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ../@v2-components/v2-mobile-input/index.vue





/* normalize component */

var component = normalizeComponent(
  _v2_components_v2_mobile_inputvue_type_script_lang_js_,
  v2_mobile_inputvue_type_template_id_47cdd741_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var v2_mobile_input = (component.exports);
// CONCATENATED MODULE: C:/Users/wubingyu/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (v2_mobile_input);



/***/ }),

/***/ "68ed":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return camelize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return padZero; });
var camelizeRE = /-(\w)/g;
function camelize(str) {
  return str.replace(camelizeRE, function (_, c) {
    return c.toUpperCase();
  });
}
function padZero(num, targetLength) {
  if (targetLength === void 0) {
    targetLength = 2;
  }

  var str = num + '';

  while (str.length < targetLength) {
    str = '0' + str;
  }

  return str;
}

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "90c6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isNaN; });
/* eslint-disable no-self-compare */
function isNumber(value) {
  return /^\d+(\.\d+)?$/.test(value);
}
function isNaN(value) {
  if (Number.isNaN) {
    return Number.isNaN(value);
  }

  return value !== value;
}

/***/ }),

/***/ "98c7":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "a142":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return get; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8bbf");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);



var isServer = vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$isServer;
function noop() {}
function isDef(value) {
  return value !== undefined && value !== null;
}
function isObj(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}
function get(object, path) {
  var keys = path.split('.');
  var result = object;
  keys.forEach(function (key) {
    result = isDef(result[key]) ? result[key] : '';
  });
  return result;
}

/***/ }),

/***/ "aca7":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes van-slide-up-enter{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@keyframes van-slide-up-enter{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@-webkit-keyframes van-slide-up-leave{to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@keyframes van-slide-up-leave{to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@-webkit-keyframes van-slide-down-enter{0%{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes van-slide-down-enter{0%{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@-webkit-keyframes van-slide-down-leave{to{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes van-slide-down-leave{to{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@-webkit-keyframes van-slide-left-enter{0%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes van-slide-left-enter{0%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@-webkit-keyframes van-slide-left-leave{to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes van-slide-left-leave{to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@-webkit-keyframes van-slide-right-enter{0%{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}@keyframes van-slide-right-enter{0%{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}@-webkit-keyframes van-slide-right-leave{to{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}@keyframes van-slide-right-leave{to{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}@-webkit-keyframes van-fade-in{0%{opacity:0}to{opacity:1}}@keyframes van-fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes van-fade-out{0%{opacity:1}to{opacity:0}}@keyframes van-fade-out{0%{opacity:1}to{opacity:0}}@-webkit-keyframes van-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes van-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes van-circular{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-40}to{stroke-dasharray:90,150;stroke-dashoffset:-120}}@keyframes van-circular{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-40}to{stroke-dasharray:90,150;stroke-dashoffset:-120}}@-webkit-keyframes van-notice-bar-play{to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes van-notice-bar-play{to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@-webkit-keyframes van-notice-bar-play-infinite{to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes van-notice-bar-play-infinite{to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@-webkit-keyframes van-skeleton-blink{50%{opacity:.6}}@keyframes van-skeleton-blink{50%{opacity:.6}}html{-webkit-tap-highlight-color:transparent}body{margin:0}a{text-decoration:none}[class*=van-]:focus,a:focus,button:focus,input:focus,textarea:focus{outline:0}ol,ul{margin:0;padding:0;list-style:none}button,input,textarea{color:inherit;font:inherit}.van-ellipsis{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.van-clearfix:after{display:table;clear:both;content:\"\"}[class*=van-hairline]{position:relative}[class*=van-hairline]:after{position:absolute;box-sizing:border-box;content:\" \";pointer-events:none;top:-50%;right:-50%;bottom:-50%;left:-50%;border:0 solid #ebedf0;-webkit-transform:scale(.5);transform:scale(.5)}.van-hairline--top:after{border-top-width:1px}.van-hairline--left:after{border-left-width:1px}.van-hairline--right:after{border-right-width:1px}.van-hairline--bottom:after{border-bottom-width:1px}.van-hairline--top-bottom:after{border-width:1px 0}.van-hairline--surround:after{border-width:1px}.van-fade-enter-active{-webkit-animation:van-fade-in .3s;animation:van-fade-in .3s}.van-fade-leave-active{-webkit-animation:van-fade-out .3s;animation:van-fade-out .3s}.van-slide-up-enter-active{-webkit-animation:van-slide-up-enter .3s ease both;animation:van-slide-up-enter .3s ease both}.van-slide-up-leave-active{-webkit-animation:van-slide-up-leave .3s ease both;animation:van-slide-up-leave .3s ease both}.van-slide-down-enter-active{-webkit-animation:van-slide-down-enter .3s ease both;animation:van-slide-down-enter .3s ease both}.van-slide-down-leave-active{-webkit-animation:van-slide-down-leave .3s ease both;animation:van-slide-down-leave .3s ease both}.van-slide-left-enter-active{-webkit-animation:van-slide-left-enter .3s ease both;animation:van-slide-left-enter .3s ease both}.van-slide-left-leave-active{-webkit-animation:van-slide-left-leave .3s ease both;animation:van-slide-left-leave .3s ease both}.van-slide-right-enter-active{-webkit-animation:van-slide-right-enter .3s ease both;animation:van-slide-right-enter .3s ease both}.van-slide-right-leave-active{-webkit-animation:van-slide-right-leave .3s ease both;animation:van-slide-right-leave .3s ease both}.van-info{position:absolute;top:-8px;right:0;box-sizing:border-box;min-width:16px;padding:0 3px;color:#fff;font-weight:500;font-size:12px;font-family:PingFang SC,Helvetica Neue,Arial,sans-serif;line-height:14px;text-align:center;background-color:#f44;border:1px solid #fff;border-radius:16px;-webkit-transform:translateX(50%);transform:translateX(50%);-webkit-transform-origin:100%;transform-origin:100%}@font-face{font-style:normal;font-weight:400;font-family:vant-icon;src:url(https://img.yzcdn.cn/vant/vant-icon-c2acf5.woff2) format(\"woff2\"),url(https://img.yzcdn.cn/vant/vant-icon-c2acf5.woff) format(\"woff\"),url(https://img.yzcdn.cn/vant/vant-icon-c2acf5.ttf) format(\"truetype\")}.van-icon{position:relative;font:14px/1 vant-icon;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased}.van-icon,.van-icon:before{display:inline-block}.van-icon-add-o:before{content:\"\\F000\"}.van-icon-add-square:before{content:\"\\F001\"}.van-icon-add:before{content:\"\\F002\"}.van-icon-after-sale:before{content:\"\\F003\"}.van-icon-aim:before{content:\"\\F004\"}.van-icon-alipay:before{content:\"\\F005\"}.van-icon-apps-o:before{content:\"\\F006\"}.van-icon-arrow-down:before{content:\"\\F007\"}.van-icon-arrow-left:before{content:\"\\F008\"}.van-icon-arrow-up:before{content:\"\\F009\"}.van-icon-arrow:before{content:\"\\F00A\"}.van-icon-ascending:before{content:\"\\F00B\"}.van-icon-audio:before{content:\"\\F00C\"}.van-icon-award-o:before{content:\"\\F00D\"}.van-icon-award:before{content:\"\\F00E\"}.van-icon-bag-o:before{content:\"\\F00F\"}.van-icon-bag:before{content:\"\\F010\"}.van-icon-balance-list-o:before{content:\"\\F011\"}.van-icon-balance-list:before{content:\"\\F012\"}.van-icon-balance-o:before{content:\"\\F013\"}.van-icon-balance-pay:before{content:\"\\F014\"}.van-icon-bar-chart-o:before{content:\"\\F015\"}.van-icon-bars:before{content:\"\\F016\"}.van-icon-bell:before{content:\"\\F017\"}.van-icon-bill-o:before{content:\"\\F018\"}.van-icon-bill:before{content:\"\\F019\"}.van-icon-birthday-cake-o:before{content:\"\\F01A\"}.van-icon-bookmark-o:before{content:\"\\F01B\"}.van-icon-bookmark:before{content:\"\\F01C\"}.van-icon-browsing-history-o:before{content:\"\\F01D\"}.van-icon-browsing-history:before{content:\"\\F01E\"}.van-icon-brush-o:before{content:\"\\F01F\"}.van-icon-bulb-o:before{content:\"\\F020\"}.van-icon-bullhorn-o:before{content:\"\\F021\"}.van-icon-calender-o:before{content:\"\\F022\"}.van-icon-card:before{content:\"\\F023\"}.van-icon-cart-circle-o:before{content:\"\\F024\"}.van-icon-cart-circle:before{content:\"\\F025\"}.van-icon-cart-o:before{content:\"\\F026\"}.van-icon-cart:before{content:\"\\F027\"}.van-icon-cash-back-record:before{content:\"\\F028\"}.van-icon-cash-on-deliver:before{content:\"\\F029\"}.van-icon-cashier-o:before{content:\"\\F02A\"}.van-icon-certificate:before{content:\"\\F02B\"}.van-icon-chart-trending-o:before{content:\"\\F02C\"}.van-icon-chat-o:before{content:\"\\F02D\"}.van-icon-chat:before{content:\"\\F02E\"}.van-icon-checked:before{content:\"\\F02F\"}.van-icon-circle:before{content:\"\\F030\"}.van-icon-clear:before{content:\"\\F031\"}.van-icon-clock-o:before{content:\"\\F032\"}.van-icon-clock:before{content:\"\\F033\"}.van-icon-close:before{content:\"\\F034\"}.van-icon-closed-eye:before{content:\"\\F035\"}.van-icon-cluster-o:before{content:\"\\F036\"}.van-icon-cluster:before{content:\"\\F037\"}.van-icon-column:before{content:\"\\F038\"}.van-icon-comment-circle-o:before{content:\"\\F039\"}.van-icon-comment-o:before{content:\"\\F03A\"}.van-icon-comment:before{content:\"\\F03B\"}.van-icon-completed:before{content:\"\\F03C\"}.van-icon-contact:before{content:\"\\F03D\"}.van-icon-coupon-o:before{content:\"\\F03E\"}.van-icon-coupon:before{content:\"\\F03F\"}.van-icon-credit-pay:before{content:\"\\F040\"}.van-icon-cross:before{content:\"\\F041\"}.van-icon-debit-pay:before{content:\"\\F042\"}.van-icon-delete:before{content:\"\\F043\"}.van-icon-descending:before{content:\"\\F044\"}.van-icon-description:before{content:\"\\F045\"}.van-icon-desktop-o:before{content:\"\\F046\"}.van-icon-diamond-o:before{content:\"\\F047\"}.van-icon-diamond:before{content:\"\\F048\"}.van-icon-discount:before{content:\"\\F049\"}.van-icon-ecard-pay:before{content:\"\\F04A\"}.van-icon-edit:before{content:\"\\F04B\"}.van-icon-ellipsis:before{content:\"\\F04C\"}.van-icon-empty:before{content:\"\\F04D\"}.van-icon-envelop-o:before{content:\"\\F04E\"}.van-icon-exchange:before{content:\"\\F04F\"}.van-icon-expand-o:before{content:\"\\F050\"}.van-icon-expand:before{content:\"\\F051\"}.van-icon-eye-o:before{content:\"\\F052\"}.van-icon-eye:before{content:\"\\F053\"}.van-icon-fail:before{content:\"\\F054\"}.van-icon-failure:before{content:\"\\F055\"}.van-icon-filter-o:before{content:\"\\F056\"}.van-icon-fire-o:before{content:\"\\F057\"}.van-icon-fire:before{content:\"\\F058\"}.van-icon-flag-o:before{content:\"\\F059\"}.van-icon-flower-o:before{content:\"\\F05A\"}.van-icon-free-postage:before{content:\"\\F05B\"}.van-icon-friends-o:before{content:\"\\F05C\"}.van-icon-friends:before{content:\"\\F05D\"}.van-icon-gem-o:before{content:\"\\F05E\"}.van-icon-gem:before{content:\"\\F05F\"}.van-icon-gift-card-o:before{content:\"\\F060\"}.van-icon-gift-card:before{content:\"\\F061\"}.van-icon-gift-o:before{content:\"\\F062\"}.van-icon-gift:before{content:\"\\F063\"}.van-icon-gold-coin-o:before{content:\"\\F064\"}.van-icon-gold-coin:before{content:\"\\F065\"}.van-icon-goods-collect-o:before{content:\"\\F066\"}.van-icon-goods-collect:before{content:\"\\F067\"}.van-icon-graphic:before{content:\"\\F068\"}.van-icon-home-o:before{content:\"\\F069\"}.van-icon-hot-o:before{content:\"\\F06A\"}.van-icon-hot-sale-o:before{content:\"\\F06B\"}.van-icon-hot-sale:before{content:\"\\F06C\"}.van-icon-hot:before{content:\"\\F06D\"}.van-icon-hotel-o:before{content:\"\\F06E\"}.van-icon-idcard:before{content:\"\\F06F\"}.van-icon-info-o:before{content:\"\\F070\"}.van-icon-info:before{content:\"\\F071\"}.van-icon-invition:before{content:\"\\F072\"}.van-icon-label-o:before{content:\"\\F073\"}.van-icon-label:before{content:\"\\F074\"}.van-icon-like-o:before{content:\"\\F075\"}.van-icon-like:before{content:\"\\F076\"}.van-icon-live:before{content:\"\\F077\"}.van-icon-location-o:before{content:\"\\F078\"}.van-icon-location:before{content:\"\\F079\"}.van-icon-lock:before{content:\"\\F07A\"}.van-icon-logistics:before{content:\"\\F07B\"}.van-icon-manager-o:before{content:\"\\F07C\"}.van-icon-manager:before{content:\"\\F07D\"}.van-icon-map-marked:before{content:\"\\F07E\"}.van-icon-medel-o:before{content:\"\\F07F\"}.van-icon-medel:before{content:\"\\F080\"}.van-icon-more-o:before{content:\"\\F081\"}.van-icon-more:before{content:\"\\F082\"}.van-icon-music-o:before{content:\"\\F083\"}.van-icon-new-arrival-o:before{content:\"\\F084\"}.van-icon-new-arrival:before{content:\"\\F085\"}.van-icon-new-o:before{content:\"\\F086\"}.van-icon-new:before{content:\"\\F087\"}.van-icon-newspaper-o:before{content:\"\\F088\"}.van-icon-notes-o:before{content:\"\\F089\"}.van-icon-orders-o:before{content:\"\\F08A\"}.van-icon-other-pay:before{content:\"\\F08B\"}.van-icon-paid:before{content:\"\\F08C\"}.van-icon-passed:before{content:\"\\F08D\"}.van-icon-pause-circle-o:before{content:\"\\F08E\"}.van-icon-pause-circle:before{content:\"\\F08F\"}.van-icon-pause:before{content:\"\\F090\"}.van-icon-peer-pay:before{content:\"\\F091\"}.van-icon-pending-payment:before{content:\"\\F092\"}.van-icon-phone-circle-o:before{content:\"\\F093\"}.van-icon-phone-o:before{content:\"\\F094\"}.van-icon-phone:before{content:\"\\F095\"}.van-icon-photo-o:before{content:\"\\F096\"}.van-icon-photo:before{content:\"\\F097\"}.van-icon-photograph:before{content:\"\\F098\"}.van-icon-play-circle-o:before{content:\"\\F099\"}.van-icon-play-circle:before{content:\"\\F09A\"}.van-icon-play:before{content:\"\\F09B\"}.van-icon-plus:before{content:\"\\F09C\"}.van-icon-point-gift-o:before{content:\"\\F09D\"}.van-icon-point-gift:before{content:\"\\F09E\"}.van-icon-points:before{content:\"\\F09F\"}.van-icon-printer:before{content:\"\\F0A0\"}.van-icon-qr-invalid:before{content:\"\\F0A1\"}.van-icon-qr:before{content:\"\\F0A2\"}.van-icon-question-o:before{content:\"\\F0A3\"}.van-icon-question:before{content:\"\\F0A4\"}.van-icon-records:before{content:\"\\F0A5\"}.van-icon-refund-o:before{content:\"\\F0A6\"}.van-icon-replay:before{content:\"\\F0A7\"}.van-icon-scan:before{content:\"\\F0A8\"}.van-icon-search:before{content:\"\\F0A9\"}.van-icon-send-gift-o:before{content:\"\\F0AA\"}.van-icon-send-gift:before{content:\"\\F0AB\"}.van-icon-service-o:before{content:\"\\F0AC\"}.van-icon-service:before{content:\"\\F0AD\"}.van-icon-setting-o:before{content:\"\\F0AE\"}.van-icon-setting:before{content:\"\\F0AF\"}.van-icon-share:before{content:\"\\F0B0\"}.van-icon-shop-collect-o:before{content:\"\\F0B1\"}.van-icon-shop-collect:before{content:\"\\F0B2\"}.van-icon-shop-o:before{content:\"\\F0B3\"}.van-icon-shop:before{content:\"\\F0B4\"}.van-icon-shopping-cart-o:before{content:\"\\F0B5\"}.van-icon-shopping-cart:before{content:\"\\F0B6\"}.van-icon-shrink:before{content:\"\\F0B7\"}.van-icon-sign:before{content:\"\\F0B8\"}.van-icon-smile-comment-o:before{content:\"\\F0B9\"}.van-icon-smile-comment:before{content:\"\\F0BA\"}.van-icon-smile-o:before{content:\"\\F0BB\"}.van-icon-star-o:before{content:\"\\F0BC\"}.van-icon-star:before{content:\"\\F0BD\"}.van-icon-stop-circle-o:before{content:\"\\F0BE\"}.van-icon-stop-circle:before{content:\"\\F0BF\"}.van-icon-stop:before{content:\"\\F0C0\"}.van-icon-success:before{content:\"\\F0C1\"}.van-icon-thumb-circle-o:before{content:\"\\F0C2\"}.van-icon-todo-list-o:before{content:\"\\F0C3\"}.van-icon-todo-list:before{content:\"\\F0C4\"}.van-icon-tosend:before{content:\"\\F0C5\"}.van-icon-tv-o:before{content:\"\\F0C6\"}.van-icon-umbrella-circle:before{content:\"\\F0C7\"}.van-icon-underway-o:before{content:\"\\F0C8\"}.van-icon-underway:before{content:\"\\F0C9\"}.van-icon-upgrade:before{content:\"\\F0CA\"}.van-icon-user-circle-o:before{content:\"\\F0CB\"}.van-icon-user-o:before{content:\"\\F0CC\"}.van-icon-video-o:before{content:\"\\F0CD\"}.van-icon-video:before{content:\"\\F0CE\"}.van-icon-vip-card-o:before{content:\"\\F0CF\"}.van-icon-vip-card:before{content:\"\\F0D0\"}.van-icon-volume-o:before{content:\"\\F0D1\"}.van-icon-volume:before{content:\"\\F0D2\"}.van-icon-wap-home:before{content:\"\\F0D3\"}.van-icon-wap-nav:before{content:\"\\F0D4\"}.van-icon-warn-o:before{content:\"\\F0D5\"}.van-icon-warning-o:before{content:\"\\F0D6\"}.van-icon-weapp-nav:before{content:\"\\F0D7\"}.van-icon-wechat:before{content:\"\\F0D8\"}.van-icon-youzan-shield:before{content:\"\\F0D9\"}.van-icon__image{width:1em;height:1em}.van-loading,.van-loading__spinner{position:relative;vertical-align:middle}.van-loading{font-size:0}.van-loading__spinner{display:inline-block;width:30px;max-width:100%;height:30px;max-height:100%;-webkit-animation:van-rotate .8s linear infinite;animation:van-rotate .8s linear infinite}.van-loading__spinner--spinner{-webkit-animation-timing-function:steps(12);animation-timing-function:steps(12)}.van-circle svg,.van-loading__spinner--spinner i{position:absolute;top:0;left:0;width:100%;height:100%}.van-loading__spinner--spinner i:before{display:block;width:2px;height:25%;margin:0 auto;background-color:currentColor;border-radius:40%;content:\" \"}.van-loading__spinner--circular{-webkit-animation-duration:2s;animation-duration:2s}.van-loading__circular{display:block;width:100%;height:100%}.van-loading__circular circle{-webkit-animation:van-circular 1.5s ease-in-out infinite;animation:van-circular 1.5s ease-in-out infinite;stroke:currentColor;stroke-width:3;stroke-linecap:round}.van-loading__text{display:inline-block;margin-left:8px;color:#969799;font-size:14px;vertical-align:middle}.van-loading--vertical{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.van-loading--vertical .van-loading__text{margin:8px 0 0}.van-loading__spinner--spinner i:first-of-type{-webkit-transform:rotate(30deg);transform:rotate(30deg);opacity:1}.van-loading__spinner--spinner i:nth-of-type(2){-webkit-transform:rotate(60deg);transform:rotate(60deg);opacity:.9375}.van-loading__spinner--spinner i:nth-of-type(3){-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:.875}.van-loading__spinner--spinner i:nth-of-type(4){-webkit-transform:rotate(120deg);transform:rotate(120deg);opacity:.8125}.van-loading__spinner--spinner i:nth-of-type(5){-webkit-transform:rotate(150deg);transform:rotate(150deg);opacity:.75}.van-loading__spinner--spinner i:nth-of-type(6){-webkit-transform:rotate(180deg);transform:rotate(180deg);opacity:.6875}.van-loading__spinner--spinner i:nth-of-type(7){-webkit-transform:rotate(210deg);transform:rotate(210deg);opacity:.625}.van-loading__spinner--spinner i:nth-of-type(8){-webkit-transform:rotate(240deg);transform:rotate(240deg);opacity:.5625}.van-loading__spinner--spinner i:nth-of-type(9){-webkit-transform:rotate(270deg);transform:rotate(270deg);opacity:.5}.van-loading__spinner--spinner i:nth-of-type(10){-webkit-transform:rotate(300deg);transform:rotate(300deg);opacity:.4375}.van-loading__spinner--spinner i:nth-of-type(11){-webkit-transform:rotate(330deg);transform:rotate(330deg);opacity:.375}.van-loading__spinner--spinner i:nth-of-type(12){-webkit-transform:rotate(1turn);transform:rotate(1turn);opacity:.3125}.van-button{position:relative;display:inline-block;box-sizing:border-box;height:44px;margin:0;padding:0;font-size:16px;line-height:42px;text-align:center;border-radius:2px;-webkit-appearance:none;-webkit-text-size-adjust:100%}.van-button:before{position:absolute;top:50%;left:50%;width:100%;height:100%;background-color:#000;border:inherit;border-color:#000;border-radius:inherit;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);opacity:0;content:\" \"}.van-button:active:before{opacity:.1}.van-button--disabled:before,.van-button--loading:before{display:none}.van-button--default{color:#323233;background-color:#fff;border:1px solid #ebedf0}.van-button--primary{color:#fff;background-color:#07c160;border:1px solid #07c160}.van-button--info{color:#fff;background-color:#1989fa;border:1px solid #1989fa}.van-button--danger{color:#fff;background-color:#f44;border:1px solid #f44}.van-button--warning{color:#fff;background-color:#ff976a;border:1px solid #ff976a}.van-button--plain{background-color:#fff}.van-button--plain.van-button--primary{color:#07c160}.van-button--plain.van-button--info{color:#1989fa}.van-button--plain.van-button--danger{color:#f44}.van-button--plain.van-button--warning{color:#ff976a}.van-button--large{width:100%;height:50px;line-height:48px}.van-button--normal{padding:0 15px;font-size:14px}.van-button--small{min-width:60px;height:30px;padding:0 8px;font-size:12px;line-height:28px}.van-button__loading{display:inline-block;vertical-align:top}.van-button--mini{display:inline-block;min-width:50px;height:22px;font-size:10px;line-height:20px}.van-button--mini+.van-button--mini{margin-left:5px}.van-button--block{display:block;width:100%}.van-button--disabled{opacity:.5}.van-button--hairline.van-button--round:after,.van-button--round{border-radius:10em}.van-button--hairline.van-button--square:after,.van-button--square{border-radius:0}.van-button__icon{min-width:1em;font-size:1.2em;line-height:inherit;vertical-align:top}.van-button__icon+.van-button__text,.van-button__loading+.van-button__text{display:inline-block;margin-left:5px;vertical-align:top}.van-button--hairline{border-width:0}.van-button--hairline:after{border-color:inherit;border-radius:4px}.van-cell{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;box-sizing:border-box;width:100%;padding:10px 16px;overflow:hidden;color:#323233;font-size:14px;line-height:24px;background-color:#fff}.van-cell:not(:last-child):after{position:absolute;box-sizing:border-box;content:\" \";pointer-events:none;right:0;bottom:0;left:16px;border-bottom:1px solid #ebedf0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.van-cell--borderless:after{display:none}.van-cell__label{margin-top:3px;color:#969799;font-size:12px;line-height:18px}.van-cell__title,.van-cell__value{-webkit-box-flex:1;-webkit-flex:1;flex:1}.van-cell__value{position:relative;overflow:hidden;color:#969799;text-align:right;vertical-align:middle}.van-cell__value--alone{color:#323233;text-align:left}.van-cell__left-icon,.van-cell__right-icon{min-width:1em;height:24px;font-size:16px;line-height:24px}.van-cell__left-icon{margin-right:5px}.van-cell__right-icon{margin-left:5px;color:#969799}.van-cell--clickable:active{background-color:#f2f3f5}.van-cell--required{overflow:visible}.van-cell--required:before{position:absolute;left:8px;color:#f44;font-size:14px;content:\"*\"}.van-cell--center{-webkit-box-align:center;-webkit-align-items:center;align-items:center}.van-cell--large{padding-top:12px;padding-bottom:12px}.van-cell--large .van-cell__title{font-size:16px}.van-cell--large .van-cell__label{font-size:14px}.van-cell-group{background-color:#fff}.van-cell-group__title{padding:16px 16px 8px;color:#969799;font-size:14px;line-height:16px}.van-col{float:left;box-sizing:border-box;min-height:1px}.van-col--1{width:4.16666667%}.van-col--offset-1{margin-left:4.16666667%}.van-col--2{width:8.33333333%}.van-col--offset-2{margin-left:8.33333333%}.van-col--3{width:12.5%}.van-col--offset-3{margin-left:12.5%}.van-col--4{width:16.66666667%}.van-col--offset-4{margin-left:16.66666667%}.van-col--5{width:20.83333333%}.van-col--offset-5{margin-left:20.83333333%}.van-col--6{width:25%}.van-col--offset-6{margin-left:25%}.van-col--7{width:29.16666667%}.van-col--offset-7{margin-left:29.16666667%}.van-col--8{width:33.33333333%}.van-col--offset-8{margin-left:33.33333333%}.van-col--9{width:37.5%}.van-col--offset-9{margin-left:37.5%}.van-col--10{width:41.66666667%}.van-col--offset-10{margin-left:41.66666667%}.van-col--11{width:45.83333333%}.van-col--offset-11{margin-left:45.83333333%}.van-col--12{width:50%}.van-col--offset-12{margin-left:50%}.van-col--13{width:54.16666667%}.van-col--offset-13{margin-left:54.16666667%}.van-col--14{width:58.33333333%}.van-col--offset-14{margin-left:58.33333333%}.van-col--15{width:62.5%}.van-col--offset-15{margin-left:62.5%}.van-col--16{width:66.66666667%}.van-col--offset-16{margin-left:66.66666667%}.van-col--17{width:70.83333333%}.van-col--offset-17{margin-left:70.83333333%}.van-col--18{width:75%}.van-col--offset-18{margin-left:75%}.van-col--19{width:79.16666667%}.van-col--offset-19{margin-left:79.16666667%}.van-col--20{width:83.33333333%}.van-col--offset-20{margin-left:83.33333333%}.van-col--21{width:87.5%}.van-col--offset-21{margin-left:87.5%}.van-col--22{width:91.66666667%}.van-col--offset-22{margin-left:91.66666667%}.van-col--23{width:95.83333333%}.van-col--offset-23{margin-left:95.83333333%}.van-col--24{width:100%}.van-col--offset-24{margin-left:100%}.van-row:after{display:table;clear:both;content:\"\"}.van-row--flex{display:-webkit-box;display:-webkit-flex;display:flex}.van-row--flex:after{display:none}.van-row--justify-center{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.van-row--justify-end{-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.van-row--justify-space-between{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.van-row--justify-space-around{-webkit-justify-content:space-around;justify-content:space-around}.van-row--align-center{-webkit-box-align:center;-webkit-align-items:center;align-items:center}.van-row--align-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.van-grid{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.van-grid-item{position:relative;box-sizing:border-box}.van-grid-item--square{height:0}.van-grid-item__content{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;box-sizing:border-box;height:100%;padding:16px 8px;background-color:#fff}.van-grid-item__content:after{z-index:1;border-width:0 1px 1px 0}.van-grid-item__content--square{position:absolute;top:0;right:0;left:0}.van-grid-item__content--center{-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.van-grid-item__content--surround:after{border-width:1px}.van-grid-item__content--clickable:active{background-color:#f2f3f5}.van-grid-item__icon{font-size:28px}.van-grid-item__text{color:#7d7e80;font-size:12px;word-break:break-all}.van-grid-item__icon+.van-grid-item__text{margin-top:8px}.van-image{position:relative;display:inline-block}.van-image--round{overflow:hidden;border-radius:50%}.van-image__error,.van-image__img,.van-image__loading{display:block;width:100%;height:100%}.van-image__error,.van-image__loading{position:absolute;top:0;left:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#969799;font-size:14px;background-color:#f8f8f8}.van-circle{position:relative;display:inline-block;text-align:center}.van-circle__layer{-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-transform-origin:530px 530px;transform-origin:530px 530px;fill:none;stroke-linecap:round;stroke-dasharray:3140;stroke-dashoffset:3140}.van-circle__text{position:absolute;top:50%;left:0;width:100%;color:#323233;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.van-collapse-item__title .van-cell__right-icon:before{-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-transition:.3s;transition:.3s}.van-collapse-item__title:after{visibility:hidden}.van-collapse-item__title--expanded .van-cell__right-icon:before{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.van-collapse-item__title--expanded:after{visibility:visible}.van-collapse-item__title--disabled,.van-collapse-item__title--disabled .van-cell__right-icon{color:#c8c9cc}.van-collapse-item__title--disabled:active{background-color:#fff}.van-collapse-item__wrapper{overflow:hidden;-webkit-transition:height .3s ease-in-out;transition:height .3s ease-in-out;will-change:height}.van-collapse-item__content{padding:16px;color:#969799;font-size:13px;line-height:1.5;background-color:#fff}.van-count-down,.van-divider{color:#323233;font-size:14px;line-height:20px}.van-divider{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:16px 0;color:#969799;line-height:24px;border-color:#ebedf0;border-style:solid;border-width:0}.van-divider:after,.van-divider:before{display:block;-webkit-box-flex:1;-webkit-flex:1;flex:1;box-sizing:border-box;height:1px;border-color:inherit;border-style:inherit;border-width:1px 0 0}.van-divider:before{content:\"\"}.van-divider--hairline:after,.van-divider--hairline:before{-webkit-transform:scaleY(.5);transform:scaleY(.5)}.van-divider--dashed{border-style:dashed}.van-divider--content-center:before,.van-divider--content-left:before,.van-divider--content-right:before{margin-right:16px}.van-divider--content-center:after,.van-divider--content-left:after,.van-divider--content-right:after{margin-left:16px;content:\"\"}.van-divider--content-left:before,.van-divider--content-right:after{max-width:10%}.van-list__error-text,.van-list__finished-text,.van-list__loading{color:#969799;font-size:12px;line-height:50px;text-align:center}.van-list__placeholder{height:0;pointer-events:none}.van-nav-bar{position:relative;height:46px;line-height:46px;text-align:center;background-color:#fff;-webkit-user-select:none;user-select:none}.van-nav-bar .van-icon{color:#1989fa;vertical-align:middle}.van-nav-bar__arrow{min-width:1em;font-size:16px}.van-nav-bar__arrow+.van-nav-bar__text{margin-left:-20px;padding-left:25px}.van-nav-bar--fixed{position:fixed;top:0;left:0;width:100%}.van-nav-bar__title{max-width:60%;margin:0 auto;color:#323233;font-weight:500;font-size:16px}.van-nav-bar__left,.van-nav-bar__right{position:absolute;bottom:0;font-size:14px}.van-nav-bar__left{left:16px}.van-nav-bar__right{right:16px}.van-nav-bar__text{display:inline-block;margin:0 -16px;padding:0 16px;color:#1989fa;vertical-align:middle}.van-nav-bar__text:active{background-color:#f2f3f5}.van-notice-bar{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:40px;padding:0 16px;color:#ed6a0c;font-size:14px;line-height:24px;background-color:#fffbe8}.van-notice-bar__left-icon,.van-notice-bar__right-icon{min-width:22px;font-size:16px}.van-notice-bar__right-icon{text-align:right}.van-notice-bar__wrap{position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;height:24px;overflow:hidden}.van-notice-bar__content{position:absolute;white-space:nowrap}.van-notice-bar__content.van-ellipsis{max-width:100%}.van-notice-bar__play{-webkit-animation:van-notice-bar-play linear both;animation:van-notice-bar-play linear both}.van-notice-bar__play--infinite{-webkit-animation:van-notice-bar-play-infinite linear infinite both;animation:van-notice-bar-play-infinite linear infinite both}.van-notice-bar--wrapable{height:auto;padding:8px 16px}.van-notice-bar--wrapable .van-notice-bar__wrap{height:auto}.van-notice-bar--wrapable .van-notice-bar__content{position:relative;white-space:normal}.van-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.7)}.van-overflow-hidden{overflow:hidden!important}.van-popup{position:fixed;max-height:100%;overflow-y:auto;background-color:#fff;-webkit-transition:.3s ease-out;transition:.3s ease-out;-webkit-overflow-scrolling:touch}.van-popup--center{top:50%;left:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}.van-popup--center.van-popup--round{border-radius:12px}.van-popup--top{top:0;left:0;width:100%}.van-popup--top.van-popup--round{border-radius:0 0 12px 12px}.van-popup--right{top:50%;right:0;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.van-popup--right.van-popup--round{border-radius:12px 0 0 12px}.van-popup--bottom{bottom:0;left:0;width:100%}.van-popup--bottom.van-popup--round{border-radius:12px 12px 0 0}.van-popup--left{top:50%;left:0;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.van-popup--left.van-popup--round{border-radius:0 12px 12px 0}.van-popup-slide-top-enter,.van-popup-slide-top-leave-active{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}.van-popup-slide-right-enter,.van-popup-slide-right-leave-active{-webkit-transform:translate3d(100%,-50%,0);transform:translate3d(100%,-50%,0)}.van-popup-slide-bottom-enter,.van-popup-slide-bottom-leave-active{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}.van-popup-slide-left-enter,.van-popup-slide-left-leave-active{-webkit-transform:translate3d(-100%,-50%,0);transform:translate3d(-100%,-50%,0)}.van-search,.van-search__content{display:-webkit-box;display:-webkit-flex;display:flex}.van-search{-webkit-box-align:center;-webkit-align-items:center;align-items:center;box-sizing:border-box;padding:10px 12px}.van-search__content{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding-left:8px;background-color:#f7f8fa;border-radius:2px}.van-search__content--round{border-radius:17px}.van-search__label{padding:0 5px;color:#323233;font-size:14px;line-height:34px}.van-search .van-cell{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:5px 8px 5px 0;background-color:transparent}.van-search .van-cell__left-icon{color:#969799}.van-search--show-action{padding-right:0}.van-search input::-webkit-search-cancel-button,.van-search input::-webkit-search-decoration,.van-search input::-webkit-search-results-button,.van-search input::-webkit-search-results-decoration{display:none}.van-search__action{padding:0 8px;color:#323233;font-size:14px;line-height:34px}.van-search__action:active{background-color:#f2f3f5}.van-pagination{display:-webkit-box;display:-webkit-flex;display:flex;font-size:14px;line-height:40px;text-align:center}.van-pagination__item{-webkit-box-flex:1;-webkit-flex:1;flex:1;box-sizing:border-box;min-width:36px;height:40px;color:#1989fa;background-color:#fff;-webkit-user-select:none;user-select:none}.van-pagination__item:active{color:#fff;background-color:#1989fa}.van-pagination__item:after{border-width:1px 0 1px 1px}.van-pagination__item:last-child:after{border-right-width:1px}.van-pagination__item--disabled,.van-pagination__item--disabled:active{color:#7d7e80;background-color:#f8f8f8;opacity:.6}.van-pagination__item--active{color:#fff;background-color:#1989fa}.van-pagination__next,.van-pagination__prev{padding:0 5px}.van-pagination__page{-webkit-box-flex:0;-webkit-flex-grow:0;flex-grow:0}.van-pagination__page-desc{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:40px;color:#7d7e80}.van-pagination--simple .van-pagination__next:after,.van-pagination--simple .van-pagination__prev:after{border-width:1px}.van-panel{background:#fff}.van-panel__header-value{color:#f44}.van-panel__footer{padding:8px 16px}.van-rate{-webkit-user-select:none;user-select:none}.van-rate__item{position:relative;display:inline-block}.van-rate__item:not(:last-child){padding-right:4px}.van-rate__icon{display:block;width:1em;font-size:20px}.van-rate__icon--half{position:absolute;top:0;left:0;width:.5em;overflow:hidden}.van-steps{overflow:hidden;background-color:#fff}.van-steps--horizontal{padding:10px 10px 0}.van-steps--horizontal .van-steps__items{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;margin:0 0 10px;padding-bottom:22px}.van-steps--vertical{padding:0 0 0 32px}.van-step{position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#969799;font-size:14px}.van-step__circle{display:block;width:5px;height:5px;background-color:#969799;border-radius:50%}.van-step__line{position:absolute;background-color:#ebedf0}.van-step--horizontal{float:left}.van-step--horizontal:first-child .van-step__title{margin-left:0;-webkit-transform:none;transform:none}.van-step--horizontal:last-child{position:absolute;right:1px;width:auto}.van-step--horizontal:last-child .van-step__title{margin-left:0;-webkit-transform:none;transform:none}.van-step--horizontal:last-child .van-step__circle-container{right:-9px;left:auto}.van-step--horizontal .van-step__circle-container{position:absolute;top:30px;left:-8px;z-index:1;padding:0 8px;background-color:#fff;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.van-step--horizontal .van-step__title{display:inline-block;margin-left:3px;font-size:12px;-webkit-transform:translateX(-50%);transform:translateX(-50%)}@media (max-width:321px){.van-step--horizontal .van-step__title{font-size:11px}}.van-step--horizontal .van-step__line{top:30px;left:0;width:100%;height:1px}.van-step--horizontal .van-step__icon{display:block;font-size:12px}.van-step--horizontal .van-step--process{color:#323233}.van-step--vertical{display:block;float:none;padding:10px 10px 10px 0;line-height:18px}.van-step--vertical:not(:last-child):after{border-bottom-width:1px}.van-step--vertical:first-child:before{position:absolute;top:0;left:-15px;z-index:1;width:1px;height:20px;background-color:#fff;content:\"\"}.van-step--vertical .van-step__circle-container{position:absolute;top:19px;left:-15px;z-index:2;font-size:12px;line-height:1;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.van-step--vertical .van-step__line{top:16px;left:-15px;width:1px;height:100%}.van-step:last-child .van-step__line{width:0}.van-step--finish{color:#323233}.van-step--finish .van-step__circle,.van-step--finish .van-step__line{background-color:#07c160}.van-sticky--fixed{position:fixed;top:0;right:0;left:0;z-index:99}.van-tag{display:inline-block;padding:.2em .5em;color:#fff;font-size:10px;line-height:normal;border-radius:.2em}.van-tag:after{border-color:currentColor;border-radius:.4em}.van-tag--default{background-color:#969799}.van-tag--default.van-tag--plain{color:#969799}.van-tag--danger{background-color:#f44}.van-tag--danger.van-tag--plain{color:#f44}.van-tag--primary{background-color:#1989fa}.van-tag--primary.van-tag--plain{color:#1989fa}.van-tag--success{background-color:#07c160}.van-tag--success.van-tag--plain{color:#07c160}.van-tag--plain{background-color:#fff}.van-tag--mark{padding-right:.6em;border-radius:0 .8em .8em 0}.van-tag--mark:after{border-radius:0 1.6em 1.6em 0}.van-tag--round{border-radius:.8em}.van-tag--round:after{border-radius:1.6em}.van-tag--medium{font-size:12px}.van-tag--large{font-size:14px}.van-tab__pane,.van-tab__pane-wrapper{-webkit-flex-shrink:0;flex-shrink:0;box-sizing:border-box;width:100%}.van-tab__pane-wrapper--inactive{height:0;overflow:visible}.van-tab{position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;box-sizing:border-box;min-width:0;padding:0 5px;color:#7d7e80;font-size:14px;line-height:44px;text-align:center;cursor:pointer}.van-tab span{display:block}.van-tab--active{color:#323233;font-weight:500}.van-tab--disabled{color:#c8c9cc}.van-tabs{position:relative}.van-tabs__wrap{overflow:hidden}.van-tabs__wrap--page-top{position:fixed}.van-tabs__wrap--content-bottom{top:auto;bottom:0}.van-tabs__wrap--scrollable .van-tab{-webkit-box-flex:0;-webkit-flex:0 0 22%;flex:0 0 22%}.van-tabs__wrap--scrollable .van-tab--complete{-webkit-box-flex:1;-webkit-flex:1 0 auto;flex:1 0 auto}.van-tabs__wrap--scrollable .van-tabs__nav{overflow:hidden;overflow-x:auto;-webkit-overflow-scrolling:touch}.van-tabs__wrap--scrollable .van-tabs__nav::-webkit-scrollbar{display:none}.van-tabs__nav{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;background-color:#fff;-webkit-user-select:none;user-select:none}.van-tabs__nav--line{box-sizing:content-box;height:100%;padding-bottom:15px}.van-tabs__nav--card{box-sizing:border-box;height:30px;margin:0 16px;border:1px solid #f44;border-radius:2px}.van-tabs__nav--card .van-tab{color:#f44;line-height:28px;border-right:1px solid #f44}.van-tabs__nav--card .van-tab:last-child{border-right:none}.van-tabs__nav--card .van-tab.van-tab--active{color:#fff;background-color:#f44}.van-tabs__nav--card .van-tab--disabled{color:#c8c9cc}.van-tabs__line{position:absolute;bottom:15px;left:0;z-index:1;height:3px;background-color:#f44;border-radius:3px}.van-tabs__track{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;width:100%;height:100%;will-change:left}.van-tabs__content--animated{overflow:hidden}.van-tabs--line .van-tabs__wrap{height:44px}.van-tabs--card{padding-top:30px}.van-tabs--card>.van-tabs__wrap{height:30px}.van-tabbar{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;height:50px;background-color:#fff}.van-tabbar--fixed{position:fixed;bottom:0;left:0}.van-tabbar--safe-area-inset-bottom{padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.van-tabbar-item{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#7d7e80;font-size:12px;line-height:1}.van-tabbar-item__icon{position:relative;margin-bottom:5px;font-size:18px}.van-tabbar-item__icon .van-icon{display:block;min-width:1em}.van-tabbar-item__icon--dot:after{position:absolute;top:0;right:-8px;width:8px;height:8px;background-color:#f44;border-radius:100%;content:\" \"}.van-tabbar-item__icon img{display:block;height:18px}.van-tabbar-item--active{color:#1989fa}.van-tabbar-item .van-info{margin-top:2px}.van-image-preview{position:fixed;top:0;left:0;width:100%;height:100%}.van-image-preview__image{position:absolute;top:0;right:0;bottom:0;left:0;max-width:100%;max-height:100%;margin:auto}.van-image-preview__index{position:absolute;top:10px;left:50%;color:#fff;font-size:14px;letter-spacing:2px;-webkit-transform:translate(-50%);transform:translate(-50%)}.van-image-preview__overlay{background-color:rgba(0,0,0,.9)}.van-image-preview .van-swipe{height:100%}.van-progress{position:relative;height:4px;background:#e5e5e5;border-radius:4px}.van-progress__portion{position:absolute;left:0;height:100%;border-radius:inherit}.van-progress__portion--with-pivot{border-top-right-radius:0;border-bottom-right-radius:0}.van-progress__pivot{position:absolute;top:50%;right:0;box-sizing:border-box;min-width:2em;padding:0 5px;font-size:10px;line-height:1.6;text-align:center;word-break:keep-all;background-color:#e5e5e5;border-radius:1em;-webkit-transform:translate(100%,-50%);transform:translate(100%,-50%)}.van-sidebar{width:85px}.van-sidebar-item{display:block;box-sizing:border-box;padding:20px 12px 20px 8px;overflow:hidden;color:#7d7e80;font-size:14px;line-height:1.4;word-break:break-all;background-color:#f8f8f8;border-left:3px solid transparent;-webkit-user-select:none;user-select:none}.van-sidebar-item__text{position:relative}.van-sidebar-item:active{background-color:#f2f3f5}.van-sidebar-item:not(:last-child):after{border-bottom-width:1px}.van-sidebar-item--select{color:#323233;font-weight:500;border-color:#f44;background-color:#fff}.van-sidebar-item--select:after{border-right-width:1px}.van-sidebar-item--select:active{background-color:#fff}.van-sidebar-item .van-info{right:4px}.van-skeleton{display:-webkit-box;display:-webkit-flex;display:flex;padding:0 16px}.van-skeleton__avatar{-webkit-flex-shrink:0;flex-shrink:0;margin-right:16px;background-color:#f2f3f5}.van-skeleton__avatar--round{border-radius:100%}.van-skeleton__content{width:100%}.van-skeleton__avatar+.van-skeleton__content{padding-top:8px}.van-skeleton__row,.van-skeleton__title{height:16px;background-color:#f2f3f5}.van-skeleton__title{margin:0}.van-skeleton__row:not(:first-child){margin-top:12px}.van-skeleton__title+.van-skeleton__row{margin-top:20px}.van-skeleton--animate{-webkit-animation:van-skeleton-blink 1.2s ease-in-out infinite;animation:van-skeleton-blink 1.2s ease-in-out infinite}.van-slider,.van-slider__bar{position:relative;background-color:#e5e5e5;border-radius:999px}.van-slider__bar{background-color:#1989fa;border-radius:inherit}.van-slider__button{width:20px;height:20px;background-color:#fff;border-radius:50%;box-shadow:0 1px 2px rgba(0,0,0,.5)}.van-slider__button-wrapper{position:absolute;top:50%;right:0;-webkit-transform:translate3d(50%,-50%,0);transform:translate3d(50%,-50%,0)}.van-slider__button-wrapper:after{position:absolute;top:-50%;left:-50%;width:200%;height:200%;content:\"\"}.van-slider--disabled{opacity:.3}.van-slider--vertical{display:inline-block;height:100%}.van-slider--vertical .van-slider__button-wrapper{top:auto;bottom:0;-webkit-transform:translate3d(50%,50%,0);transform:translate3d(50%,50%,0)}.van-stepper{font-size:0;-webkit-user-select:none;user-select:none}.van-stepper__minus,.van-stepper__plus{position:relative;box-sizing:border-box;width:28px;height:28px;margin:0;padding:5px;color:#323233;vertical-align:middle;background-color:#f2f3f5;border:0}.van-stepper__minus:before,.van-stepper__plus:before{width:13px;height:1px}.van-stepper__minus:after,.van-stepper__plus:after{width:1px;height:13px}.van-stepper__minus:after,.van-stepper__minus:before,.van-stepper__plus:after,.van-stepper__plus:before{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;background-color:currentColor;content:\"\"}.van-stepper__minus:active,.van-stepper__plus:active{background-color:#e8e8e8}.van-stepper__minus--disabled,.van-stepper__plus--disabled{color:#c8c9cc;background-color:#f7f8fa}.van-stepper__minus--disabled:active,.van-stepper__plus--disabled:active{background-color:#f7f8fa}.van-stepper__minus{border-radius:4px 0 0 4px}.van-stepper__minus:after{display:none}.van-stepper__plus{border-radius:0 4px 4px 0}.van-stepper__input{box-sizing:border-box;width:32px;height:28px;margin:0 2px;padding:0;color:#323233;font-size:14px;text-align:center;vertical-align:middle;background-color:#f2f3f5;border:0;border-width:1px 0;border-radius:0;-webkit-appearance:none}.van-stepper__input[disabled]{color:#c8c9cc;background-color:#f2f3f5}.van-stepper input[type=number]::-webkit-inner-spin-button,.van-stepper input[type=number]::-webkit-outer-spin-button{margin:0;-webkit-appearance:none}.van-swipe{position:relative;overflow:hidden;-webkit-user-select:none;user-select:none}.van-swipe__track{height:100%}.van-swipe__indicators{position:absolute;bottom:12px;left:50%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.van-swipe__indicators--vertical{top:50%;bottom:auto;left:12px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.van-swipe__indicators--vertical .van-swipe__indicator:not(:last-child){margin-bottom:6px}.van-swipe__indicator{width:6px;height:6px;background-color:#ebedf0;border-radius:100%;opacity:.3;-webkit-transition:opacity .2s;transition:opacity .2s}.van-swipe__indicator:not(:last-child){margin-right:6px}.van-swipe__indicator--active{background-color:#1989fa;opacity:1}.van-swipe-item{float:left;height:100%}.van-index-anchor{padding:0 16px;color:#323233;font-weight:500;font-size:14px;line-height:32px;background-color:transparent}.van-index-anchor--sticky{position:fixed;top:0;right:0;left:0;background-color:#fff}.van-index-bar__sidebar{position:fixed;top:50%;right:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;text-align:center;-webkit-transform:translateY(-50%);transform:translateY(-50%);-webkit-user-select:none;user-select:none}.van-index-bar__index{padding:0 4px 0 16px;font-weight:500;font-size:10px;line-height:14px}.van-checkbox{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;overflow:hidden;-webkit-user-select:none;user-select:none}.van-checkbox__icon{-webkit-box-flex:0;-webkit-flex:none;flex:none;height:1em;font-size:20px;line-height:1em}.van-checkbox__icon .van-icon{display:block;box-sizing:border-box;width:1.25em;height:1.25em;color:transparent;font-size:.8em;line-height:inherit;text-align:center;border:1px solid #e5e5e5;-webkit-transition:.2s;transition:.2s}.van-checkbox__icon--round .van-icon{border-radius:100%}.van-checkbox__icon--checked .van-icon{color:#fff;background-color:#1989fa;border-color:#1989fa}.van-checkbox__icon--disabled .van-icon{background-color:#ebedf0;border-color:#c8c9cc}.van-checkbox__icon--disabled.van-checkbox__icon--checked .van-icon{color:#c8c9cc}.van-checkbox__label{margin-left:8px;color:#323233;line-height:20px}.van-checkbox__label--left{margin:0 8px 0 0}.van-checkbox__label--disabled,.van-radio__icon--disabled.van-radio__icon--checked .van-icon{color:#c8c9cc}.van-field__label{-webkit-box-flex:0;-webkit-flex:none;flex:none;width:90px}.van-field__label--center{text-align:center}.van-field__label--right{text-align:right}.van-field__body{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.van-field__control{display:block;box-sizing:border-box;width:100%;margin:0;padding:0;color:#323233;text-align:left;background-color:transparent;border:0;resize:none}.van-field__control::-webkit-input-placeholder{color:#969799}.van-field__control::placeholder{color:#969799}.van-field__control:disabled{color:#969799;background-color:transparent;opacity:1}.van-field__control--center{text-align:center}.van-field__control--right{text-align:right}.van-field__control[type=date],.van-field__control[type=datetime-local],.van-field__control[type=time]{min-height:24px}.van-field__button,.van-field__clear,.van-field__icon,.van-field__right-icon{-webkit-flex-shrink:0;flex-shrink:0}.van-field__clear,.van-field__right-icon{margin-right:-8px;padding:0 8px;line-height:inherit}.van-field__clear{color:#c8c9cc;font-size:16px}.van-field__left-icon .van-icon,.van-field__right-icon .van-icon{display:block;min-width:1em;font-size:16px;line-height:inherit}.van-field__left-icon{margin-right:5px}.van-field--disabled .van-field__control,.van-field__right-icon{color:#969799}.van-field__button{padding-left:8px}.van-field__error-message{color:#f44;font-size:12px;text-align:left}.van-field__error-message--center{text-align:center}.van-field__error-message--right{text-align:right}.van-field--error .van-field__control,.van-field--error .van-field__control::-webkit-input-placeholder{color:#f44}.van-field--error .van-field__control,.van-field--error .van-field__control::placeholder{color:#f44}.van-field--min-height .van-field__control{min-height:60px}.van-radio{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;overflow:hidden;-webkit-user-select:none;user-select:none}.van-radio__icon{-webkit-box-flex:0;-webkit-flex:none;flex:none;height:1em;font-size:20px;line-height:1em}.van-radio__icon .van-icon{display:block;box-sizing:border-box;width:1.25em;height:1.25em;color:transparent;font-size:.8em;line-height:inherit;text-align:center;border:1px solid #e5e5e5;-webkit-transition:.2s;transition:.2s}.van-radio__icon--round .van-icon{border-radius:100%}.van-radio__icon--checked .van-icon{color:#fff;background-color:#1989fa;border-color:#1989fa}.van-radio__icon--disabled .van-icon{background-color:#ebedf0;border-color:#c8c9cc}.van-radio__label{margin-left:8px;color:#323233;line-height:20px}.van-radio__label--left{margin:0 8px 0 0}.van-radio__label--disabled{color:#c8c9cc}.van-switch,.van-switch__node{height:1em;background-color:#fff}.van-switch{display:inline-block;box-sizing:content-box;border:1px solid rgba(0,0,0,.1);position:relative;width:2em;border-radius:1em;-webkit-transition:background-color .3s;transition:background-color .3s}.van-switch__node{position:absolute;top:0;left:0;z-index:1;width:1em;border-radius:100%;box-shadow:0 3px 1px 0 rgba(0,0,0,.05),0 2px 2px 0 rgba(0,0,0,.1),0 3px 3px 0 rgba(0,0,0,.05);-webkit-transition:.3s;transition:.3s}.van-switch__loading{top:25%;left:25%;width:50%;height:50%;line-height:1}.van-switch--on{background-color:#1989fa}.van-switch--on .van-switch__node{-webkit-transform:translateX(1em);transform:translateX(1em)}.van-switch--disabled{opacity:.4}.van-uploader{position:relative;display:inline-block}.van-uploader__wrapper{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.van-uploader__input{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;cursor:pointer;opacity:0}.van-uploader__input-wrapper{position:relative}.van-uploader__upload{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;box-sizing:border-box;width:80px;height:80px;margin:0 8px 8px 0;background-color:#fff;border:1px dashed #e5e5e5}.van-uploader__upload-icon{color:#969799;font-size:24px}.van-uploader__upload-text{margin-top:8px;color:#969799;font-size:12px}.van-uploader__preview{position:relative;margin:0 8px 8px 0}.van-uploader__preview-image{display:block;width:80px;height:80px}.van-uploader__preview-delete{position:absolute;right:0;bottom:0;padding:1px;color:#fff;background-color:rgba(0,0,0,.45)}.van-uploader__file{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:80px;height:80px;background-color:#f8f8f8}.van-uploader__file-icon{color:#7d7e80;font-size:20px}.van-uploader__file-name{box-sizing:border-box;width:100%;margin-top:8px;padding:0 5px;color:#7d7e80;font-size:12px;text-align:center}.van-password-input{position:relative;margin:0 16px;-webkit-user-select:none;user-select:none}.van-password-input__error-info,.van-password-input__info{margin-top:16px;font-size:14px;text-align:center}.van-password-input__info{color:#969799}.van-password-input__error-info{color:#f44}.van-password-input__security{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;height:50px}.van-password-input__security:after{border-radius:6px}.van-password-input__security li{position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;height:100%;font-size:20px;line-height:50px;text-align:center;background-color:#fff}.van-password-input__security i{position:absolute;top:50%;left:50%;width:10px;height:10px;margin:-5px 0 0 -5px;background-color:#000;border-radius:100%;visibility:hidden}.van-number-keyboard{position:fixed;bottom:0;left:0;width:100%;background-color:#fff;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-user-select:none;user-select:none}.van-number-keyboard__title{position:relative;height:30px;color:#7d7e80;font-size:14px;line-height:30px;text-align:center}.van-number-keyboard__title-left{position:absolute;left:0}.van-number-keyboard__body{box-sizing:border-box}.van-number-keyboard__close{position:absolute;right:0;padding:0 16px;color:#1989fa;font-size:14px}.van-number-keyboard__close:active{background-color:#f2f3f5}.van-number-keyboard__sidebar{position:absolute;top:0;right:0;width:25%;height:216px}.van-number-keyboard--custom .van-number-keyboard__body{padding-right:25%}.van-number-keyboard--safe-area-inset-bottom{padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.van-key{display:inline-block;width:33.33333333%;height:54px;font-size:24px;font-style:normal;line-height:54px;text-align:center;vertical-align:middle}.van-key:after{border-width:1px 1px 0 0}.van-key--middle{width:66.66666667%}.van-key--big{width:100%;height:108px;line-height:108px}.van-key--blue,.van-key--delete{font-size:16px}.van-key--blue{color:#fff}.van-key--blue,.van-key--blue.van-key--active{background-color:#1989fa}.van-key--blue:after{border-color:#1989fa}.van-key--blue:active{background-color:#0570db}.van-key--gray{background-color:#ebedf0}.van-action-sheet__cancel:active,.van-action-sheet__item:active,.van-key--active{background-color:#f2f3f5}.van-action-sheet{max-height:90%;color:#323233}.van-action-sheet__cancel,.van-action-sheet__item{font-size:16px;line-height:50px;text-align:center;background-color:#fff}.van-action-sheet__item{height:50px}.van-action-sheet__item--disabled{color:#c8c9cc}.van-action-sheet__item--disabled:active{background-color:#fff}.van-action-sheet__subname{margin-left:5px;color:#7d7e80;font-size:12px}.van-action-sheet__cancel:before{display:block;height:8px;background-color:#f8f8f8;content:\" \"}.van-action-sheet__header{font-size:16px;line-height:44px;text-align:center}.van-action-sheet__close{position:absolute;top:0;right:0;padding:0 12px;color:#969799;font-size:18px;line-height:inherit}.van-action-sheet--safe-area-inset-bottom{padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.van-dialog{position:fixed;top:45%;left:50%;width:85%;overflow:hidden;font-size:16px;background-color:#fff;border-radius:4px;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transition:.3s;transition:.3s}.van-dialog__header{padding-top:24px;font-weight:500;line-height:24px;text-align:center}.van-dialog__header--isolated{padding:24px 0}.van-dialog__message{max-height:60vh;padding:24px;overflow-y:auto;font-size:14px;line-height:20px;white-space:pre-wrap;text-align:center;-webkit-overflow-scrolling:touch}.van-dialog__message--has-title{padding-top:12px;color:#7d7e80}.van-dialog__message--left{text-align:left}.van-dialog__message--right{text-align:right}.van-dialog__footer{overflow:hidden;-webkit-user-select:none;user-select:none}.van-dialog__footer--buttons{display:-webkit-box;display:-webkit-flex;display:flex}.van-dialog__footer--buttons .van-button{-webkit-box-flex:1;-webkit-flex:1;flex:1}.van-dialog .van-button{border:0}.van-dialog__confirm,.van-dialog__confirm:active{color:#1989fa}.van-dialog-bounce-enter{-webkit-transform:translate3d(-50%,-50%,0) scale(.7);transform:translate3d(-50%,-50%,0) scale(.7);opacity:0}.van-dialog-bounce-leave-active{-webkit-transform:translate3d(-50%,-50%,0) scale(.9);transform:translate3d(-50%,-50%,0) scale(.9);opacity:0}.van-dropdown-item{position:fixed;right:0;left:0;overflow:hidden}.van-dropdown-item--up{top:0}.van-dropdown-item--down{bottom:0}.van-dropdown-item__content{position:absolute}.van-dropdown-item__icon{display:block;line-height:inherit}.van-dropdown-menu,.van-dropdown-menu__item{display:-webkit-box;display:-webkit-flex;display:flex}.van-dropdown-menu{height:50px;background-color:#fff;-webkit-user-select:none;user-select:none}.van-dropdown-menu__item{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;min-width:0}.van-dropdown-menu__item:active{opacity:.7}.van-dropdown-menu__item--disabled:active{opacity:1}.van-dropdown-menu__item--disabled .van-dropdown-menu__title{color:#969799}.van-dropdown-menu__title{position:relative;box-sizing:border-box;max-width:100%;padding:0 8px;font-size:15px}.van-dropdown-menu__title:after{position:absolute;top:3px;right:-4px;border:3px solid;border-color:transparent transparent currentColor currentColor;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:.8;content:\"\"}.van-dropdown-menu__title--down:after{top:7px;-webkit-transform:rotate(135deg);transform:rotate(135deg)}.van-picker{position:relative;background-color:#fff;-webkit-user-select:none;user-select:none;-webkit-text-size-adjust:100%}.van-picker__toolbar{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:44px;line-height:44px}.van-picker__cancel,.van-picker__confirm{padding:0 16px;color:#1989fa;font-size:14px}.van-picker__cancel:active,.van-picker__confirm:active{background-color:#f2f3f5}.van-picker__title{max-width:50%;font-weight:500;font-size:16px;text-align:center}.van-picker__columns,.van-picker__loading{position:relative;display:-webkit-box;display:-webkit-flex;display:flex}.van-picker__loading{position:absolute;top:0;right:0;bottom:0;left:0;z-index:2;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;background-color:hsla(0,0%,100%,.9)}.van-picker__frame,.van-picker__loading .van-loading{position:absolute;top:50%;left:0;z-index:3;width:100%;-webkit-transform:translateY(-50%);transform:translateY(-50%);pointer-events:none}.van-picker__mask{position:absolute;top:0;left:0;z-index:2;width:100%;height:100%;background-image:-webkit-linear-gradient(top,hsla(0,0%,100%,.9),hsla(0,0%,100%,.4)),-webkit-linear-gradient(bottom,hsla(0,0%,100%,.9),hsla(0,0%,100%,.4));background-image:linear-gradient(180deg,hsla(0,0%,100%,.9),hsla(0,0%,100%,.4)),linear-gradient(0deg,hsla(0,0%,100%,.9),hsla(0,0%,100%,.4));background-repeat:no-repeat;background-position:top,bottom;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:none}.van-picker-column{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden;font-size:16px;text-align:center}.van-picker-column__wrapper{-webkit-transition-timing-function:cubic-bezier(.23,1,.68,1);transition-timing-function:cubic-bezier(.23,1,.68,1)}.van-picker-column__item{padding:0 5px;color:#000}.van-picker-column__item--disabled{opacity:.3}.van-pull-refresh{overflow:hidden;-webkit-user-select:none;user-select:none}.van-pull-refresh__track{position:relative}.van-pull-refresh__head{position:absolute;top:-50px;left:0;width:100%;height:50px;overflow:hidden;color:#969799;font-size:14px;line-height:50px;text-align:center}.van-notify,.van-toast{box-sizing:border-box;padding:8px 16px;font-size:14px;line-height:20px;white-space:pre-wrap;text-align:center}.van-toast{position:fixed;top:50%;left:50%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;box-sizing:content-box;width:90px;max-width:70%;min-height:90px;padding:16px;color:#fff;word-break:break-all;background-color:rgba(50,50,51,.88);border-radius:4px;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}.van-toast--unclickable *{pointer-events:none}.van-toast--text{width:-webkit-fit-content;width:fit-content;min-width:96px;min-height:unset;padding:8px 12px}.van-toast--text .van-toast__text{margin-top:0}.van-toast--top{top:50px}.van-toast--bottom{top:auto;bottom:50px}.van-toast__icon{font-size:40px}.van-toast__loading{padding:5px}.van-toast__text{margin-top:8px}.van-swipe-cell{position:relative;overflow:hidden}.van-swipe-cell__left,.van-swipe-cell__right{position:absolute;top:0;height:100%}.van-swipe-cell__left{left:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.van-swipe-cell__right{right:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.van-switch-cell{padding-top:9px;padding-bottom:9px}.van-switch-cell--large{padding-top:11px;padding-bottom:11px}.van-switch-cell .van-switch{float:right}.van-tree-select{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;font-size:14px;-webkit-user-select:none;user-select:none}.van-tree-select__nav{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow-y:auto;background-color:#fafafa;-webkit-overflow-scrolling:touch}.van-tree-select__nav-item{position:relative;padding:0 8px 0 12px;line-height:44px;border-left:3px solid transparent}.van-tree-select__nav-item--active{font-weight:700;background-color:#fff;border-color:#f44}.van-tree-select__nav-item--disabled{color:#969799}.van-tree-select__content{-webkit-box-flex:2;-webkit-flex:2;flex:2;overflow-y:auto;background-color:#fff;-webkit-overflow-scrolling:touch}.van-tree-select__item{position:relative;padding-left:16px;font-weight:700;line-height:44px}.van-tree-select__item--active{color:#f44}.van-tree-select__item--disabled{color:#c8c9cc}.van-tree-select__selected{position:absolute;top:50%;right:16px;margin-top:-8px}.van-address-edit__buttons{padding:32px 16px}.van-address-edit__buttons .van-button{margin-bottom:12px}.van-address-edit-detail{padding:0}.van-address-edit-detail__finish{color:#1989fa;font-size:12px}.van-address-list{box-sizing:border-box;height:100%;padding-bottom:100px}.van-address-list__add{position:fixed;bottom:0;left:0;z-index:9999}.van-address-list__disabled-text{padding:0 16px;color:#969799;font-size:12px;line-height:30px}.van-address-item{padding:16px}.van-address-item__value{padding-right:32px}.van-address-item__name{margin-bottom:5px;font-weight:500;font-size:14px;line-height:20px}.van-address-item__address{color:#7d7e80;font-size:12px;line-height:16px}.van-address-item--disabled .van-address-item__address,.van-address-item--disabled .van-address-item__name{color:#969799}.van-address-item__edit{position:absolute;top:50%;right:16px;font-size:16px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.van-card{position:relative;box-sizing:border-box;padding:8px 16px;color:#323233;font-size:12px;background-color:#fafafa}.van-card:not(:first-child){margin-top:8px}.van-card__header{display:-webkit-box;display:-webkit-flex;display:flex}.van-card__thumb{position:relative;-webkit-box-flex:0;-webkit-flex:none;flex:none;width:90px;height:90px;margin-right:8px}.van-card__content{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;min-width:0;min-height:90px}.van-card__content--centered{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.van-card__desc,.van-card__title{word-break:break-all}.van-card__title{max-height:32px;font-weight:500;line-height:16px;display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:2;-webkit-box-orient:vertical}.van-card__desc{max-height:20px;color:#7d7e80}.van-card__bottom,.van-card__desc{line-height:20px}.van-card__price{display:inline-block;color:#f44;font-weight:500}.van-card__origin-price{display:inline-block;margin-left:5px;color:#7d7e80;font-size:10px;text-decoration:line-through}.van-card__num{float:right}.van-card__tag{position:absolute;top:2px;left:0}.van-card__footer{-webkit-box-flex:0;-webkit-flex:none;flex:none;text-align:right}.van-card__footer .van-button{margin-left:5px}.van-contact-card{padding:16px}.van-contact-card__value{margin-left:5px;line-height:20px}.van-contact-card--add .van-contact-card__value{line-height:40px}.van-contact-card--add .van-cell__left-icon{color:#1989fa;font-size:40px}.van-contact-card:before{position:absolute;right:0;bottom:0;left:0;height:2px;background:-webkit-repeating-linear-gradient(135deg,#ff6c6c,#ff6c6c 20%,transparent 0,transparent 25%,#1989fa 0,#1989fa 45%,transparent 0,transparent 50%);background:repeating-linear-gradient(-45deg,#ff6c6c,#ff6c6c 20%,transparent 0,transparent 25%,#1989fa 0,#1989fa 45%,transparent 0,transparent 50%);background-size:80px;content:\"\"}.van-contact-list{box-sizing:border-box;height:100%;padding-bottom:50px}.van-contact-list__item{padding:16px}.van-contact-list__item-value{padding-right:32px}.van-contact-list__group{box-sizing:border-box;height:100%;overflow-y:scroll;-webkit-overflow-scrolling:touch}.van-contact-list__name{font-weight:500;font-size:14px;line-height:20px}.van-contact-list__edit{position:absolute;top:50%;right:16px;font-size:16px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.van-contact-list__add{position:fixed;bottom:0;left:0;z-index:9999}.van-contact-edit__buttons{padding:32px 16px}.van-contact-edit .van-cell__title{max-width:65px}.van-contact-edit .van-button{margin-bottom:12px}.van-coupon{margin:0 16px 16px;overflow:hidden;background-color:#fff;border-radius:4px;box-shadow:0 0 4px rgba(0,0,0,.1)}.van-coupon:active{background-color:#f2f3f5}.van-coupon__content{display:-webkit-box;display:-webkit-flex;display:flex;box-sizing:border-box;height:100px;padding:24px 0 0 16px}.van-coupon h2,.van-coupon p{margin:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.van-coupon h2{height:34px;font-weight:500;line-height:34px}.van-coupon p{color:#969799;font-size:12px;line-height:16px}.van-coupon__head{position:relative;min-width:85px;padding-right:8px}.van-coupon__head p{white-space:pre-wrap}.van-coupon__amount{color:#f44;font-size:24px}.van-coupon__amount span{font-size:50%}.van-coupon__amount span:not(:empty){margin-left:2px}.van-coupon__body{position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;border-radius:0 4px 4px 0}.van-coupon__name{font-size:16px}.van-coupon__corner{position:absolute;top:16px;right:16px}.van-coupon__description{padding:8px 16px;background-color:#fafafa;border-top:1px dashed #ebedf0}.van-coupon--disabled:active{background-color:#fff}.van-coupon--disabled .van-coupon-item__content{height:90px}.van-coupon--disabled h2,.van-coupon--disabled p,.van-coupon--disabled span{color:#969799}.van-coupon-cell--selected{color:#323233}.van-coupon-list{position:relative;height:100%;background-color:#f8f8f8}.van-coupon-list__field{padding:8px 16px}.van-coupon-list__exchange{height:32px;line-height:30px}.van-coupon-list__list{box-sizing:border-box;padding:16px 0;overflow-y:auto;-webkit-overflow-scrolling:touch}.van-coupon-list__close{position:absolute;bottom:0;left:0;font-weight:500}.van-coupon-list__empty{padding-top:60px;text-align:center}.van-coupon-list__empty p{margin:16px 0;color:#969799;font-size:14px;line-height:20px}.van-coupon-list__empty img{width:200px;height:200px}.van-goods-action{position:fixed;right:0;bottom:0;left:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#fff}.van-goods-action--safe-area-inset-bottom{padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.van-goods-action-button{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:36px;font-weight:500;font-size:14px;line-height:34px;border:0}.van-goods-action-button--first{margin-left:5px;border-top-left-radius:18px;border-bottom-left-radius:18px}.van-goods-action-button--last{margin-right:5px;border-top-right-radius:18px;border-bottom-right-radius:18px}.van-goods-action-button--warning{background:-webkit-linear-gradient(left,#ffd01e,#ff8917);background:linear-gradient(90deg,#ffd01e,#ff8917)}.van-goods-action-button--danger{background:-webkit-linear-gradient(left,#ff6034,#ee0a24);background:linear-gradient(90deg,#ff6034,#ee0a24)}@media (max-width:321px){.van-goods-action-button{font-size:13px}}.van-goods-action-icon{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;min-width:48px;height:50px;color:#7d7e80;font-size:10px;line-height:1;text-align:center;background-color:#fff}.van-goods-action-icon:active{background-color:#f2f3f5}.van-goods-action-icon__icon{width:1em;margin:0 auto 5px;color:#323233;font-size:18px}.van-submit-bar{position:fixed;bottom:0;left:0;z-index:100;width:100%;background-color:#fff;-webkit-user-select:none;user-select:none}.van-submit-bar__tip{padding:8px 12px;color:#f56723;font-size:12px;line-height:1.5;background-color:#fff7cc}.van-submit-bar__tip-icon{min-width:18px;font-size:12px;vertical-align:middle}.van-submit-bar__tip-text{vertical-align:middle}.van-submit-bar__bar{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;height:50px;font-size:14px}.van-submit-bar__text{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding-right:12px;color:#323233;font-weight:500;text-align:right}.van-submit-bar__text span{display:inline-block}.van-submit-bar__suffix-label{margin-left:5px}.van-submit-bar__price{color:#f44;font-size:18px}.van-submit-bar__price:first-letter{font-size:14px}.van-submit-bar__button{width:110px}.van-submit-bar--safe-area-inset-bottom{padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.van-sku-container{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:stretch;-webkit-align-items:stretch;align-items:stretch;height:80%;max-height:-webkit-max-content;max-height:max-content;overflow-y:visible;font-size:14px;background:#fff}.van-sku-body{-webkit-box-flex:1;-webkit-flex:1 1 auto;flex:1 1 auto;max-height:350px;overflow-y:scroll;-webkit-overflow-scrolling:touch}.van-sku-body::-webkit-scrollbar{display:none}.van-sku-header{margin-left:16px}.van-sku-header__img-wrap{position:relative;float:left;width:96px;height:96px;margin:12px 0;background:#f8f8f8;border-radius:4px}.van-sku-header__img-wrap img{position:absolute;top:0;right:0;bottom:0;left:0;max-width:100%;max-height:100%;margin:auto}.van-sku-header__goods-info{min-height:96px;padding:12px 36px 12px 8px;overflow:hidden}.van-sku-header-item{margin-top:8px;color:#969799;font-size:12px;line-height:16px}.van-sku__price-num,.van-sku__price-symbol{font-size:16px;vertical-align:middle}.van-sku__price-num{font-weight:500;font-size:22px;word-break:break-all}.van-sku__goods-price{color:#f44}.van-sku__price-tag{position:relative;display:inline-block;margin-left:8px;padding:0 5px;overflow:hidden;color:#f44;font-size:12px;line-height:16px;vertical-align:middle;border-radius:8px}.van-sku__price-tag:before{position:absolute;top:0;left:0;width:100%;height:100%;background:currentColor;opacity:.1;content:\"\"}.van-sku__close-icon{position:absolute;top:12px;right:16px;color:#dcdde0;font-size:20px;text-align:center}.van-sku-group-container{margin-left:16px;padding:12px 0 2px}.van-sku-group-container--hide-soldout .van-sku-row__item--disabled{display:none}.van-sku-row{margin:0 3px 12px 0}.van-sku-row:last-child{margin-bottom:0}.van-sku-row__title{padding-bottom:12px}.van-sku-row__item{position:relative;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;min-width:40px;margin:0 12px 12px 0;overflow:hidden;color:#323233;font-size:13px;line-height:16px;vertical-align:middle;border-radius:4px}.van-sku-row__item:before{position:absolute;top:0;left:0;width:100%;height:100%;background:#f7f8fa;content:\"\"}.van-sku-row__item-img{z-index:1;width:24px;height:24px;margin:4px 0 4px 4px;object-fit:cover;border-radius:2px}.van-sku-row__item-name{z-index:1;padding:8px}.van-sku-row__item--active{color:#f44}.van-sku-row__item--active:before{background:currentColor;opacity:.1}.van-sku-row__item--disabled{color:#c8c9cc;background:#f2f3f5}.van-sku-row__item--disabled .van-sku-row__item-img{opacity:.3}.van-sku-stepper-stock{margin-left:16px;padding:12px 0}.van-sku-stepper-container{height:30px;margin-right:20px}.van-sku__stepper{float:right}.van-sku__stepper-title{float:left;line-height:30px}.van-sku__quota,.van-sku__stock{display:inline-block;font-size:12px}.van-sku__stock{margin-right:8px;color:#969799}.van-sku__quota{color:#f44}.van-sku-messages{padding-bottom:8px;background:#f8f8f8}.van-sku-messages__image-cell .van-cell__title{max-width:90px}.van-sku-messages__image-cell .van-cell__value{overflow:visible;text-align:left}.van-sku-img-uploader{display:inline-block}.van-sku-img-uploader__uploader{vertical-align:middle}.van-sku-img-uploader__img{position:relative;float:left;width:64px;height:64px;margin-right:8px;background:#f7f8fa;border-radius:2px}.van-sku-img-uploader__img img{width:100%;height:100%;object-fit:contain}.van-sku-img-uploader__delete{position:absolute;top:-12px;right:-14px;z-index:1;padding:6px;color:rgba(50,50,51,.8);opacity:.8}.van-sku-img-uploader__delete:before{background-color:#fff;border-radius:14px}.van-sku-img-uploader__mask{position:absolute;top:0;left:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:100%;height:100%;color:#fff;background:rgba(50,50,51,.8)}.van-sku-img-uploader__warn-text{margin-top:6px;font-size:12px;line-height:14px}.van-sku-actions,.van-sku-img-uploader__trigger{display:-webkit-box;display:-webkit-flex;display:flex}.van-sku-img-uploader__trigger{-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:100%;height:100%;color:#dcdde0}.van-sku-actions{padding:8px 16px}.van-sku-actions .van-button{height:36px;font-weight:500;font-size:14px;line-height:34px;border:0;border-radius:0}.van-sku-actions .van-button:first-of-type{border-top-left-radius:18px;border-bottom-left-radius:18px}.van-sku-actions .van-button:last-of-type{border-top-right-radius:18px;border-bottom-right-radius:18px}.van-sku-actions .van-button--warning{background:-webkit-linear-gradient(left,#ffd01e,#ff8917);background:linear-gradient(90deg,#ffd01e,#ff8917)}.van-sku-actions .van-button--danger{background:-webkit-linear-gradient(left,#ff6034,#ee0a24);background:linear-gradient(90deg,#ff6034,#ee0a24)}", ""]);

// exports


/***/ }),

/***/ "d282":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vant/es/utils/create/bem.js
/**
 * bem helper
 * b() // 'button'
 * b('text') // 'button__text'
 * b({ disabled }) // 'button button--disabled'
 * b('text', { disabled }) // 'button__text button__text--disabled'
 * b(['disabled', 'primary']) // 'button button--disabled button--primary'
 */
var ELEMENT = '__';
var MODS = '--';

function join(name, el, symbol) {
  return el ? name + symbol + el : name;
}

function bem_prefix(name, mods) {
  if (typeof mods === 'string') {
    return join(name, mods, MODS);
  }

  if (Array.isArray(mods)) {
    return mods.map(function (item) {
      return bem_prefix(name, item);
    });
  }

  var ret = {};

  if (mods) {
    Object.keys(mods).forEach(function (key) {
      ret[name + MODS + key] = mods[key];
    });
  }

  return ret;
}

function createBEM(name) {
  return function (el, mods) {
    if (el && typeof el !== 'string') {
      mods = el;
      el = '';
    }

    el = join(name, el, ELEMENT);
    return mods ? [el, bem_prefix(el, mods)] : el;
  };
}
// EXTERNAL MODULE: ./node_modules/vant/es/utils/format/string.js
var string = __webpack_require__("68ed");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/vant/es/mixins/slots.js
/**
 * Use scopedSlots in Vue 2.6+
 * downgrade to slots in lower version
 */

var SlotsMixin = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
  methods: {
    slots: function slots(name, props) {
      if (name === void 0) {
        name = 'default';
      }

      var $slots = this.$slots,
          $scopedSlots = this.$scopedSlots;
      var scopedSlot = $scopedSlots[name];

      if (scopedSlot) {
        return scopedSlot(props);
      }

      return $slots[name];
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vant/es/utils/create/component.js
/**
 * Create a basic component with common options
 */





function install(Vue) {
  var name = this.name;
  Vue.component(name, this);
  Vue.component(Object(string["a" /* camelize */])("-" + name), this);
} // unify slots & scopedSlots


function unifySlots(context) {
  // use data.scopedSlots in lower Vue version
  var scopedSlots = context.scopedSlots || context.data.scopedSlots || {};
  var slots = context.slots();
  Object.keys(slots).forEach(function (key) {
    if (!scopedSlots[key]) {
      scopedSlots[key] = function () {
        return slots[key];
      };
    }
  });
  return scopedSlots;
} // should be removed after Vue 3

function transformFunctionComponent(pure) {
  return {
    functional: true,
    props: pure.props,
    model: pure.model,
    render: function render(h, context) {
      return pure(h, context.props, unifySlots(context), context);
    }
  };
}

function createComponent(name) {
  return function (sfc) {
    if (typeof sfc === 'function') {
      sfc = transformFunctionComponent(sfc);
    }

    if (!sfc.functional) {
      sfc.mixins = sfc.mixins || [];
      sfc.mixins.push(SlotsMixin);
    }

    sfc.name = name;
    sfc.install = install;
    return sfc;
  };
}
// EXTERNAL MODULE: ./node_modules/vant/es/utils/index.js
var utils = __webpack_require__("a142");

// EXTERNAL MODULE: ./node_modules/vant/es/locale/index.js + 1 modules
var locale = __webpack_require__("3c69");

// CONCATENATED MODULE: ./node_modules/vant/es/utils/create/i18n.js



function createI18N(name) {
  var prefix = Object(string["a" /* camelize */])(name) + '.';
  return function (path) {
    var message = Object(utils["a" /* get */])(locale["a" /* default */].messages(), prefix + path) || Object(utils["a" /* get */])(locale["a" /* default */].messages(), path);

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return typeof message === 'function' ? message.apply(void 0, args) : message;
  };
}
// CONCATENATED MODULE: ./node_modules/vant/es/utils/create/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createNamespace; });



function createNamespace(name) {
  name = 'van-' + name;
  return [createComponent(name), createBEM(name), createI18N(name)];
}

/***/ }),

/***/ "e41f":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ea8e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addUnit; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a142");
/* harmony import */ var _validate_number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("90c6");


function addUnit(value) {
  if (!Object(___WEBPACK_IMPORTED_MODULE_0__[/* isDef */ "b"])(value)) {
    return undefined;
  }

  value = String(value);
  return Object(_validate_number__WEBPACK_IMPORTED_MODULE_1__[/* isNumber */ "b"])(value) ? value + "px" : value;
}

/***/ })

/******/ })["default"];
});