module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "2b1f");
/******/ })
/************************************************************************/
/******/ ({

/***/ "2b1f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@4.5.19@@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"23bcb3be-vue-loader-template"}!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--13-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_vue-loader@15.10.1@vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/white-board/src/index.vue?vue&type=template&id=77425f7c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._v("这是自己写的组件哦")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./packages/white-board/src/index.vue?vue&type=template&id=77425f7c&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--13-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/white-board/src/index.vue?vue&type=script&lang=js&
/* harmony default export */ var srcvue_type_script_lang_js_ = ({
  name: 'WhiteBoard',
  data() {
    return {};
  },
  created() {}
});
// CONCATENATED MODULE: ./packages/white-board/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var white_board_srcvue_type_script_lang_js_ = (srcvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.10.1@vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

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
  if (moduleIdentifier) {
    // server build
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
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/white-board/src/index.vue





/* normalize component */

var component = normalizeComponent(
  white_board_srcvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var white_board_src = (component.exports);
// CONCATENATED MODULE: ./packages/white-board/index.js
// 导入组件必须声明name


// 为组件添加install方法，用于按需引入
white_board_src.install = function (Vue) {
  Vue.component(white_board_src.name, white_board_src);
};
/* harmony default export */ var white_board = (white_board_src);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"23bcb3be-vue-loader-template"}!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--13-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_vue-loader@15.10.1@vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/Tour/src/index.vue?vue&type=template&id=2860abc6&
var srcvue_type_template_id_2860abc6_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._v("漫游式导航")]);
};
var srcvue_type_template_id_2860abc6_staticRenderFns = [];

// CONCATENATED MODULE: ./packages/Tour/src/index.vue?vue&type=template&id=2860abc6&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--13-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.3.0@babel-loader/lib!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/Tour/src/index.vue?vue&type=script&lang=js&
/* harmony default export */ var Tour_srcvue_type_script_lang_js_ = ({
  name: 'Tour'
});
// CONCATENATED MODULE: ./packages/Tour/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_Tour_srcvue_type_script_lang_js_ = (Tour_srcvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/Tour/src/index.vue





/* normalize component */

var src_component = normalizeComponent(
  packages_Tour_srcvue_type_script_lang_js_,
  srcvue_type_template_id_2860abc6_render,
  srcvue_type_template_id_2860abc6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Tour_src = (src_component.exports);
// CONCATENATED MODULE: ./packages/Tour/index.js


// 为组件添加install方法，用于按需引入
Tour_src.install = function (Vue) {
  Vue.component(Tour_src.name, Tour_src);
};
/* harmony default export */ var Tour = (Tour_src);
// CONCATENATED MODULE: ./src/index.js
// 导入单个文件



// 以数组结构保存组件，便于遍历
const components = [white_board, Tour];

// 定义 install 方法
const install = function (Vue) {
  if (install.installed) return;
  install.installed = true;
  // 遍历并注册全局组件
  components.map(component => {
    Vue.component(component.name, component);
  });
};
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
/* harmony default export */ var src_0 = ({
  // 导出的对象必须具备一个 install 方法
  install,
  // 组件列表
  ...components
});
// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@4.5.19@@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0);



/***/ })

/******/ });