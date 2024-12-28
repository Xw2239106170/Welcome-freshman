(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["subpkg/SchoolSite/SchoolSite"],{

/***/ 93:
/*!*******************************************************************************************!*\
  !*** D:/XBuilder/uni-welcome-service/main.js?{"page":"subpkg%2FSchoolSite%2FSchoolSite"} ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _SchoolSite = _interopRequireDefault(__webpack_require__(/*! ./subpkg/SchoolSite/SchoolSite.vue */ 94));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_SchoolSite.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 94:
/*!************************************************************************!*\
  !*** D:/XBuilder/uni-welcome-service/subpkg/SchoolSite/SchoolSite.vue ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SchoolSite_vue_vue_type_template_id_22e0164c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SchoolSite.vue?vue&type=template&id=22e0164c& */ 95);
/* harmony import */ var _SchoolSite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SchoolSite.vue?vue&type=script&lang=js& */ 97);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _SchoolSite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _SchoolSite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../LenovoSoftstore/HBuilderX.4.0.2024012711-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs




/* normalize component */

var component = Object(_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SchoolSite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SchoolSite_vue_vue_type_template_id_22e0164c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SchoolSite_vue_vue_type_template_id_22e0164c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _SchoolSite_vue_vue_type_template_id_22e0164c___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "subpkg/SchoolSite/SchoolSite.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 95:
/*!*******************************************************************************************************!*\
  !*** D:/XBuilder/uni-welcome-service/subpkg/SchoolSite/SchoolSite.vue?vue&type=template&id=22e0164c& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_SchoolSite_vue_vue_type_template_id_22e0164c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../LenovoSoftstore/HBuilderX.4.0.2024012711-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../LenovoSoftstore/HBuilderX.4.0.2024012711-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../LenovoSoftstore/HBuilderX.4.0.2024012711-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../LenovoSoftstore/HBuilderX.4.0.2024012711-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../LenovoSoftstore/HBuilderX.4.0.2024012711-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../LenovoSoftstore/HBuilderX.4.0.2024012711-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./SchoolSite.vue?vue&type=template&id=22e0164c& */ 96);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_SchoolSite_vue_vue_type_template_id_22e0164c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_SchoolSite_vue_vue_type_template_id_22e0164c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_SchoolSite_vue_vue_type_template_id_22e0164c___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_SchoolSite_vue_vue_type_template_id_22e0164c___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 96:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/XBuilder/uni-welcome-service/subpkg/SchoolSite/SchoolSite.vue?vue&type=template&id=22e0164c& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 97:
/*!*************************************************************************************************!*\
  !*** D:/XBuilder/uni-welcome-service/subpkg/SchoolSite/SchoolSite.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_SchoolSite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../LenovoSoftstore/HBuilderX.4.0.2024012711-alpha/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../LenovoSoftstore/HBuilderX.4.0.2024012711-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../LenovoSoftstore/HBuilderX.4.0.2024012711-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../LenovoSoftstore/HBuilderX.4.0.2024012711-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../LenovoSoftstore/HBuilderX.4.0.2024012711-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./SchoolSite.vue?vue&type=script&lang=js& */ 98);
/* harmony import */ var _LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_SchoolSite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_SchoolSite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_SchoolSite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_SchoolSite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_SchoolSite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 98:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/XBuilder/uni-welcome-service/subpkg/SchoolSite/SchoolSite.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
var _default = {
  data: function data() {
    return {};
  },
  onLoad: function onLoad(option) {
    console.log(option);
  }
};
exports.default = _default;

/***/ })

},[[93,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/subpkg/SchoolSite/SchoolSite.js.map