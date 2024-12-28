(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["subpkg/detailNews/detailNews"],{

/***/ 145:
/*!*******************************************************************************************!*\
  !*** D:/XBuilder/uni-welcome-service/main.js?{"page":"subpkg%2FdetailNews%2FdetailNews"} ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _detailNews = _interopRequireDefault(__webpack_require__(/*! ./subpkg/detailNews/detailNews.vue */ 146));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_detailNews.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 146:
/*!************************************************************************!*\
  !*** D:/XBuilder/uni-welcome-service/subpkg/detailNews/detailNews.vue ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detailNews_vue_vue_type_template_id_38507d3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detailNews.vue?vue&type=template&id=38507d3a& */ 147);
/* harmony import */ var _detailNews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detailNews.vue?vue&type=script&lang=js& */ 149);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _detailNews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _detailNews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _detailNews_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detailNews.vue?vue&type=style&index=0&lang=css& */ 151);
/* harmony import */ var _LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../LenovoSoftstore/HBuilderX.4.0.2024012711-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _detailNews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _detailNews_vue_vue_type_template_id_38507d3a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _detailNews_vue_vue_type_template_id_38507d3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _detailNews_vue_vue_type_template_id_38507d3a___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "subpkg/detailNews/detailNews.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 147:
/*!*******************************************************************************************************!*\
  !*** D:/XBuilder/uni-welcome-service/subpkg/detailNews/detailNews.vue?vue&type=template&id=38507d3a& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detailNews_vue_vue_type_template_id_38507d3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../LenovoSoftstore/HBuilderX.4.0.2024012711-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../LenovoSoftstore/HBuilderX.4.0.2024012711-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../LenovoSoftstore/HBuilderX.4.0.2024012711-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../LenovoSoftstore/HBuilderX.4.0.2024012711-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../LenovoSoftstore/HBuilderX.4.0.2024012711-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../LenovoSoftstore/HBuilderX.4.0.2024012711-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detailNews.vue?vue&type=template&id=38507d3a& */ 148);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detailNews_vue_vue_type_template_id_38507d3a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detailNews_vue_vue_type_template_id_38507d3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detailNews_vue_vue_type_template_id_38507d3a___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detailNews_vue_vue_type_template_id_38507d3a___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 148:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/XBuilder/uni-welcome-service/subpkg/detailNews/detailNews.vue?vue&type=template&id=38507d3a& ***!
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
  var g0 = _vm.newsData.attachments && _vm.newsData.attachments.length
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 149:
/*!*************************************************************************************************!*\
  !*** D:/XBuilder/uni-welcome-service/subpkg/detailNews/detailNews.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detailNews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../LenovoSoftstore/HBuilderX.4.0.2024012711-alpha/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../LenovoSoftstore/HBuilderX.4.0.2024012711-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../LenovoSoftstore/HBuilderX.4.0.2024012711-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../LenovoSoftstore/HBuilderX.4.0.2024012711-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../LenovoSoftstore/HBuilderX.4.0.2024012711-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detailNews.vue?vue&type=script&lang=js& */ 150);
/* harmony import */ var _LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detailNews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detailNews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detailNews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detailNews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detailNews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 150:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/XBuilder/uni-welcome-service/subpkg/detailNews/detailNews.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

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
var _default = {
  data: function data() {
    return {
      newsData: {
        id: 1,
        title: '请2024级新生及时填报信息',
        department: '教务处',
        publishTime: '2024-03-17 14:30',
        readCount: 1234,
        coverImage: 'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/8c2ea2d6-2d7d-453f-995b-5094f88df2ab.jpg',
        content: "\n        <div style=\"font-size: 28rpx; line-height: 1.8; color: #333;\">\n          <p>\u5404\u4F4D2024\u7EA7\u65B0\u751F\uFF1A</p>\n          <p>\u4E3A\u505A\u597D\u65B0\u751F\u5165\u5B66\u51C6\u5907\u5DE5\u4F5C\uFF0C\u8BF7\u5927\u5BB6\u5728\u5B8C\u6210\u65B0\u751F\u670D\u52A1\u7F51\u7AD9\u6216\u5F20\u9662APP\u6CE8\u518C\u540E\uFF0C\u53CA\u65F6\u586B\u62A5\u76F8\u5173\u4FE1\u606F\u3002\u73B0\u5C06\u6709\u5173\u4E8B\u9879\u901A\u77E5\u5982\u4E0B\uFF1A</p>\n          <p style=\"font-weight: bold;\">\u4E00\u3001\u586B\u62A5\u65F6\u95F4</p>\n          <p>2024\u5E743\u670818\u65E5-3\u670825\u65E5</p>\n          <p style=\"font-weight: bold;\">\u4E8C\u3001\u586B\u62A5\u65B9\u5F0F</p>\n          <p>1. \u767B\u5F55\u65B0\u751F\u670D\u52A1\u7F51\u7AD9(https://freshman.xbmu.edu.cn)</p>\n          <p>2. \u901A\u8FC7\u5F20\u9662APP\u586B\u62A5</p>\n          <p style=\"font-weight: bold;\">\u4E09\u3001\u586B\u62A5\u5185\u5BB9</p>\n          <p>1. \u57FA\u672C\u4FE1\u606F</p>\n          <p>2. \u5B66\u7C4D\u4FE1\u606F</p>\n          <p>3. \u4F4F\u5BBF\u4FE1\u606F</p>\n          <p>4. \u5176\u4ED6\u9700\u6C42</p>\n          <p style=\"color: #ff4444;\">\u8BF7\u52A1\u5FC5\u8BA4\u771F\u6838\u5BF9\u586B\u62A5\u4FE1\u606F\uFF0C\u786E\u4FDD\u4FE1\u606F\u51C6\u786E\u65E0\u8BEF\u3002</p>\n        </div>\n      ",
        attachments: [{
          name: '2024级新生信息填报说明.pdf',
          size: '2.3MB'
        }, {
          name: '入学须知.doc',
          size: '1.1MB'
        }],
        relatedNews: [{
          id: 2,
          title: '2024级新生入学报到流程'
        }, {
          id: 3,
          title: '关于组织新生开学典礼的通知'
        }, {
          id: 4,
          title: '2024级新生军训相关安排'
        }],
        likes: 256,
        comments: 48
      }
    };
  },
  methods: {
    goBack: function goBack() {
      uni.navigateBack();
    },
    downloadFile: function downloadFile(file) {
      uni.showToast({
        title: '开始下载：' + file.name,
        icon: 'none'
      });
      // 实际下载逻辑
    },
    navigateToNews: function navigateToNews(newsId) {
      uni.navigateTo({
        url: "/pages/news/detail?id=".concat(newsId)
      });
    }
  },
  onLoad: function onLoad(options) {
    // 实际应用中，这里需要根据options.id请求新闻详情数据
    console.log('News ID:', options.id);
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 151:
/*!*********************************************************************************************************!*\
  !*** D:/XBuilder/uni-welcome-service/subpkg/detailNews/detailNews.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detailNews_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../LenovoSoftstore/HBuilderX.4.0.2024012711-alpha/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../LenovoSoftstore/HBuilderX.4.0.2024012711-alpha/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../LenovoSoftstore/HBuilderX.4.0.2024012711-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../LenovoSoftstore/HBuilderX.4.0.2024012711-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../LenovoSoftstore/HBuilderX.4.0.2024012711-alpha/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../LenovoSoftstore/HBuilderX.4.0.2024012711-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../LenovoSoftstore/HBuilderX.4.0.2024012711-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detailNews.vue?vue&type=style&index=0&lang=css& */ 152);
/* harmony import */ var _LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detailNews_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detailNews_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detailNews_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detailNews_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LenovoSoftstore_HBuilderX_4_0_2024012711_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detailNews_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 152:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/XBuilder/uni-welcome-service/subpkg/detailNews/detailNews.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[145,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/subpkg/detailNews/detailNews.js.map