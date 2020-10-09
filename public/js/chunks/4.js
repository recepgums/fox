(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/@babel/runtime/core-js/object/define-property.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/core-js/object/define-property.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/core-js/library/fn/object/define-property.js");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/content/post/DataViewSidebar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/content/post/DataViewSidebar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/@babel/runtime/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/core-js/json/stringify */ "./node_modules/@babel/runtime/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! quill/dist/quill.core.css */ "./node_modules/quill/dist/quill.core.css");
/* harmony import */ var quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! quill/dist/quill.snow.css */ "./node_modules/quill/dist/quill.snow.css");
/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! quill/dist/quill.bubble.css */ "./node_modules/quill/dist/quill.bubble.css");
/* harmony import */ var quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_post_modulePostList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/store/post/modulePostList */ "./resources/js/src/store/post/modulePostList.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-quill-editor */ "./node_modules/vue-quill-editor/dist/vue-quill-editor.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vue_quill_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_8__);



function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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







/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    isSidebarActive: {
      type: Boolean,
      required: true
    },
    data: {
      type: Object,
      default: function _default() {}
    }
  },
  watch: {
    isSidebarActive: function isSidebarActive(val) {
      if (!val) return;

      if (this.data.newData) {
        this.initValues();
        this.$validator.reset();
      } else {
        var _JSON$parse = JSON.parse(_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(this.data.data)),
            id = _JSON$parse.id,
            title = _JSON$parse.title,
            content = _JSON$parse.content,
            status = _JSON$parse.status,
            category = _JSON$parse.category,
            thumbnail = _JSON$parse.thumbnail,
            seo_title = _JSON$parse.seo_title,
            seo_description = _JSON$parse.seo_description; // console.log('active:', JSON.parse(JSON.stringify(this.data.data)))


        this.id = id;
        this.title = title;
        this.content = content;
        this.seo_title = seo_title;
        this.seo_description = seo_description;
        this.status = status;
        this.thumbnail = thumbnail;
        this.category_id = Number(_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(category.id));
        /* this.tags = JSON.parse(this.data.data.options).tags*/
        //this.initValues()
      } // Object.entries(this.data).length === 0 ? this.initValues() : { this.id, this.title, this.category_id, this.dataOrder_status, this.dataUsage_amount } = JSON.parse(JSON.stringify(this.data))

    }
  },
  data: function data() {
    var _ref;

    return _ref = {
      type: 'post',

      /*tags: [],*/
      isMounted: false,
      thumbnail: null,
      video: null,
      id: null,
      title: '',
      content: '',
      seo_title: '',
      seo_description: '',
      status: '',
      category_id: ''
    }, _defineProperty(_ref, "title", ''), _defineProperty(_ref, "status", ''), _defineProperty(_ref, "category", ''), _defineProperty(_ref, "categories", []), _defineProperty(_ref, "status_choices", [{
      text: 'Aktif',
      value: 1
    }, {
      text: 'DeAktif',
      value: 0
    }]), _defineProperty(_ref, "settings", {
      // perfectscrollbar settings
      maxScrollbarLength: 60,
      wheelSpeed: .60
    }), _defineProperty(_ref, "editorOption", {// Some Quill options...
    }), _ref;
  },
  computed: {
    isSidebarActiveLocal: {
      get: function get() {
        return this.isSidebarActive;
      },
      set: function set(val) {
        if (!val) {
          this.$emit('closeSidebar');
          this.$validator.reset();
          this.initValues();
        }
      },
      categories: function categories() {
        return this.$store.state.post.categories;
      }
    },
    isFormValid: function isFormValid() {
      return !this.errors.any() && this.title && this.content;
    }
  },
  created: function created() {
    if (!_store_post_modulePostList__WEBPACK_IMPORTED_MODULE_6__["default"].isRegistered) {
      this.$store.registerModule('blogPosts', _store_post_modulePostList__WEBPACK_IMPORTED_MODULE_6__["default"]);
      _store_post_modulePostList__WEBPACK_IMPORTED_MODULE_6__["default"].isRegistered = true;
    }

    this.$store.dispatch('blogPosts/fetchItems');
  },
  mounted: function mounted() {
    this.isMounted = true;
  },
  methods: {
    getPopularityColorTitle: function getPopularityColorTitle(num) {
      if (num > 71) return 'dark';
      if (num >= 60 && num <= 71) return 'success';
      if (num < 60) return 'primary';
      return 'primary';
    },
    getPopularityColorDescription: function getPopularityColorDescription(num) {
      if (num > 160) return 'dark';
      if (num >= 145 && num <= 170) return 'success';
      if (num < 145) return 'primary';
      return 'primary';
    },
    initValues: function initValues() {
      if (this.data.id) return;
      this.id = null;
      this.title = 'Yazı Başlığı';
      this.seo_title = 'SEO Başlığı';
      this.seo_description = 'SEO Açıklaması';
      this.content = 'İçerik';
      this.thumbnail = '';
      this.video = '';
      this.status = 1;
      this.category_id = 2;
    },
    submitData: function submitData() {
      var _this = this;

      this.$validator.validateAll().then(function (result) {
        if (result) {
          var obj = {
            id: _this.id,
            title: _this.title,
            category_id: _this.category_id,
            content: _this.content,
            seo_title: _this.seo_title,
            seo_description: _this.seo_description,

            /* options: {tags:this.tags},*/
            thumbnail: _this.thumbnail,
            status: _this.status,
            type: _this.type
          };

          if (_this.id !== null && _this.id >= 0) {
            _this.$store.dispatch('post/updateItem', obj).then(function (response) {
              _this.$vs.notify({
                title: 'Başarılı',
                text: "".concat(response.data.title, " || Adl\u0131 i\xE7erik Ba\u015Far\u0131yla D\xFCzenlendi"),
                iconPack: 'feather',
                icon: 'icon-success',
                color: 'success'
              });
            }).catch(function (error) {
              _this.$vs.notify({
                title: 'Hata',
                text: 'İçerik Düzenlenemedi.',
                iconPack: 'feather',
                icon: 'icon-alert-circle',
                color: 'danger'
              });
            });
          } else {
            delete obj.id;

            _this.$store.dispatch('post/addItem', obj).then(function (response) {
              _this.$vs.notify({
                title: 'Başarılı',
                text: "".concat(response.data.title, " || Adl\u0131 i\xE7erik Eklendi"),
                iconPack: 'feather',
                icon: 'icon-success',
                color: 'success'
              });
            }).catch(function (error) {
              _this.$vs.notify({
                title: 'Hata',
                text: "\u0130\xE7erik Eklenemedi.".concat(error),
                iconPack: 'feather',
                icon: 'icon-alert-circle',
                color: 'danger'
              });
            });
          }

          _this.$emit('closeSidebar');

          _this.initValues();
        }
      });
    },
    update_avatar: function update_avatar(input) {
      var _this2 = this;

      if (input.target.files && input.target.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
          _this2.thumbnail = e.target.result;
          console.log('thumbnailURL', e.target.result);
        };

        reader.readAsDataURL(input.target.files[0]);
      }
    }
  },
  components: {
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default.a,
    quillEditor: vue_quill_editor__WEBPACK_IMPORTED_MODULE_7__["quillEditor"],
    'v-select': vue_select__WEBPACK_IMPORTED_MODULE_8___default.a
  }
});

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/content/post/DataViewSidebar.vue?vue&type=style&index=0&id=3ea493a9&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/content/post/DataViewSidebar.vue?vue&type=style&index=0&id=3ea493a9&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add-new-data-sidebar[data-v-3ea493a9]  .vs-sidebar--background {\n  z-index: 52010;\n}\n.add-new-data-sidebar .vs-sidebar[data-v-3ea493a9] {\n  max-width: 1240px !important;\n}\n.add-new-data-sidebar[data-v-3ea493a9]  .vs-sidebar {\n  z-index: 52010;\n  width: 1240px !important;\n  max-width: 90vw;\n}\n[dir] .add-new-data-sidebar[data-v-3ea493a9]  .vs-sidebar .img-upload {\n  margin-top: 2rem;\n}\n[dir] .add-new-data-sidebar[data-v-3ea493a9]  .vs-sidebar .img-upload .con-img-upload {\n  padding: 0;\n}\n.add-new-data-sidebar[data-v-3ea493a9]  .vs-sidebar .img-upload .con-input-upload {\n  width: 100%;\n}\n[dir] .add-new-data-sidebar[data-v-3ea493a9]  .vs-sidebar .img-upload .con-input-upload {\n  margin: 0;\n}\n.scroll-area--data-list-add-new[data-v-3ea493a9] {\n  height: calc(var(--vh, 1vh) * 100 - 16px - 45px - 82px);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/content/post/DataViewSidebar.vue?vue&type=style&index=0&id=3ea493a9&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/content/post/DataViewSidebar.vue?vue&type=style&index=0&id=3ea493a9&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DataViewSidebar.vue?vue&type=style&index=0&id=3ea493a9&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/content/post/DataViewSidebar.vue?vue&type=style&index=0&id=3ea493a9&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/content/post/DataViewSidebar.vue?vue&type=template&id=3ea493a9&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin/content/post/DataViewSidebar.vue?vue&type=template&id=3ea493a9&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vs-sidebar",
    {
      staticClass: "add-new-data-sidebar items-no-padding",
      attrs: {
        "click-not-close": "",
        "position-right": "",
        parent: "body",
        "default-index": "1",
        color: "primary",
        spacer: ""
      },
      model: {
        value: _vm.isSidebarActiveLocal,
        callback: function($$v) {
          _vm.isSidebarActiveLocal = $$v
        },
        expression: "isSidebarActiveLocal"
      }
    },
    [
      _c(
        "div",
        { staticClass: "mt-6 flex items-center justify-between px-6" },
        [
          _c("h4", [
            _vm._v(
              _vm._s(
                Object.entries(this.data).length === 0
                  ? _vm.$t("addPost")
                  : _vm.$t("updatePost")
              )
            )
          ]),
          _vm._v(" "),
          _c("feather-icon", {
            staticClass: "cursor-pointer",
            attrs: { icon: "XIcon" },
            on: {
              click: function($event) {
                $event.stopPropagation()
                _vm.isSidebarActiveLocal = false
              }
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("vs-divider", { staticClass: "mb-0" }),
      _vm._v(" "),
      _c(
        "VuePerfectScrollbar",
        {
          key: _vm.$vs.rtl,
          staticClass: "scroll-area--data-list-add-new",
          attrs: { settings: _vm.settings }
        },
        [
          _c("div", { staticClass: "p-6" }, [
            _c("div", { staticClass: "vx-row match-height" }, [
              _c(
                "div",
                { staticClass: "vx-col w-full md:w-11/12 mb-base" },
                [
                  _c(
                    "vx-card",
                    [
                      _c(
                        "vs-tabs",
                        [
                          _c(
                            "vs-tab",
                            { attrs: { label: _vm.$t("textArea") } },
                            [
                              _c(
                                "div",
                                { staticClass: "mt-3" },
                                [
                                  _c("vs-input", {
                                    directives: [
                                      {
                                        name: "validate",
                                        rawName: "v-validate",
                                        value: "required",
                                        expression: "'required'"
                                      }
                                    ],
                                    staticClass: "mt-5 w-full",
                                    attrs: {
                                      label: _vm.$t("postName"),
                                      name: "title"
                                    },
                                    model: {
                                      value: _vm.title,
                                      callback: function($$v) {
                                        _vm.title = $$v
                                      },
                                      expression: "title"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: _vm.errors.has("title"),
                                          expression: "errors.has('title')"
                                        }
                                      ],
                                      staticClass: "text-danger text-sm"
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.errors.first("title")
                                            ? "Başlık Gerekli"
                                            : ""
                                        )
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "flex flex-wrap items-center mb-20 mt-20 h-full"
                                    },
                                    [
                                      _c("span", [
                                        _vm._v(_vm._s(_vm.$t("postContent")))
                                      ]),
                                      _vm._v(" "),
                                      _c("quill-editor", {
                                        attrs: {
                                          options: _vm.editorOption,
                                          label: _vm.$t("postContent"),
                                          name: "content"
                                        },
                                        model: {
                                          value: _vm.content,
                                          callback: function($$v) {
                                            _vm.content = $$v
                                          },
                                          expression: "content"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value: _vm.errors.has("content"),
                                              expression:
                                                "errors.has('content')"
                                            }
                                          ],
                                          staticClass: "text-danger text-sm"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.errors.first("content")
                                                ? "İçerik Gerekli"
                                                : ""
                                            )
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "vs-select",
                                    {
                                      staticClass: "mt-5 w-full",
                                      attrs: {
                                        label: _vm.$t("category"),
                                        name: "category_id"
                                      },
                                      model: {
                                        value: _vm.category_id,
                                        callback: function($$v) {
                                          _vm.category_id = $$v
                                        },
                                        expression: "category_id"
                                      }
                                    },
                                    [
                                      _vm._l(_vm.data.categories, function(
                                        category
                                      ) {
                                        return _c("vs-select-item", {
                                          key: category.id,
                                          attrs: {
                                            value: category.id,
                                            text: category.title
                                          }
                                        })
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value: _vm.errors.has(
                                                "category_id"
                                              ),
                                              expression:
                                                "errors.has('category_id')"
                                            }
                                          ],
                                          staticClass: "text-danger text-sm"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.errors.first("category_id")
                                                ? "Kategori Gerekli"
                                                : ""
                                            )
                                          )
                                        ]
                                      )
                                    ],
                                    2
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "vs-select",
                                    {
                                      staticClass: "mt-5 w-full",
                                      attrs: {
                                        label: _vm.$t("status"),
                                        name: "status"
                                      },
                                      model: {
                                        value: _vm.status,
                                        callback: function($$v) {
                                          _vm.status = $$v
                                        },
                                        expression: "status"
                                      }
                                    },
                                    [
                                      _vm._l(_vm.status_choices, function(
                                        status
                                      ) {
                                        return _c("vs-select-item", {
                                          key: status.value,
                                          attrs: {
                                            value: status.value,
                                            text: status.text
                                          }
                                        })
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value: _vm.errors.has("status"),
                                              expression: "errors.has('status')"
                                            }
                                          ],
                                          staticClass: "text-danger text-sm"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.errors.first("status")
                                                ? "Durum Gerekli"
                                                : ""
                                            )
                                          )
                                        ]
                                      )
                                    ],
                                    2
                                  )
                                ],
                                1
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-tab",
                            { attrs: { label: _vm.$t("thumbnailArea") } },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "vx-col w-full sm:w-10/12 lg:w-2/5 mb-base"
                                },
                                [
                                  _c("vx-card", [
                                    _c(
                                      "div",
                                      {
                                        attrs: { slot: "no-body" },
                                        slot: "no-body"
                                      },
                                      [
                                        _c("img", {
                                          staticClass:
                                            "responsive card-img-top",
                                          attrs: {
                                            src: _vm.thumbnail,
                                            alt: "Resim Yükle"
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "flex justify-between flex-wrap"
                                      },
                                      [
                                        _c("input", {
                                          ref: "updateImgInput",
                                          staticClass: "hidden",
                                          attrs: {
                                            type: "file",
                                            accept: "thumbnail/*"
                                          },
                                          on: { change: _vm.update_avatar }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "vs-button",
                                          {
                                            staticClass: "mr-4 sm:mb-0 mb-2",
                                            on: {
                                              click: function($event) {
                                                return _vm.$refs.updateImgInput.click()
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.$t("thumbnailUpload")
                                                  ? "Resim Gerekli"
                                                  : ""
                                              )
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  ])
                                ],
                                1
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-tab",
                            { attrs: { label: _vm.$t("SeoArea") } },
                            [
                              _c(
                                "div",
                                { staticClass: "mt-3" },
                                [
                                  _c("vs-input", {
                                    directives: [
                                      {
                                        name: "validate",
                                        rawName: "v-validate",
                                        value: "required",
                                        expression: "'required'"
                                      }
                                    ],
                                    staticClass: "mt-5 w-full",
                                    attrs: {
                                      label: _vm.$t("seoTitle"),
                                      name: "seo_title"
                                    },
                                    model: {
                                      value: _vm.seo_title,
                                      callback: function($$v) {
                                        _vm.seo_title = $$v
                                      },
                                      expression: "seo_title"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: _vm.errors.has("seo_title"),
                                          expression: "errors.has('seo_title')"
                                        }
                                      ],
                                      staticClass: "text-danger text-sm"
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.errors.first("seo_title")
                                            ? "Seo Başlığı Gerekli ve max 71 karakter"
                                            : ""
                                        )
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("vs-progress", {
                                    staticClass: "shadow-md",
                                    attrs: {
                                      percent: Number(_vm.seo_title.length),
                                      color: _vm.getPopularityColorTitle(
                                        Number(_vm.seo_title.length)
                                      )
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("vs-input", {
                                    directives: [
                                      {
                                        name: "validate",
                                        rawName: "v-validate",
                                        value: "required",
                                        expression: "'required'"
                                      }
                                    ],
                                    staticClass: "mt-5 w-full",
                                    attrs: {
                                      label: _vm.$t("seoDescription"),
                                      name: "seo_description"
                                    },
                                    model: {
                                      value: _vm.seo_description,
                                      callback: function($$v) {
                                        _vm.seo_description = $$v
                                      },
                                      expression: "seo_description"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: _vm.errors.has(
                                            "seo_description"
                                          ),
                                          expression:
                                            "errors.has('seo_description')"
                                        }
                                      ],
                                      staticClass: "text-danger text-sm"
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.errors.first("seo_description")
                                            ? "Seo Açıklaması Gerekli ve max 160 karakter"
                                            : ""
                                        )
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("vs-progress", {
                                    staticClass: "shadow-md",
                                    attrs: {
                                      percent: Number(
                                        _vm.seo_description.length
                                      ),
                                      color: _vm.getPopularityColorDescription(
                                        Number(_vm.seo_description.length)
                                      )
                                    }
                                  })
                                ],
                                1
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "flex flex-wrap items-center p-6",
                attrs: { slot: "footer" },
                slot: "footer"
              },
              [
                _c(
                  "vs-button",
                  {
                    staticClass: "mr-6",
                    attrs: { disabled: !_vm.isFormValid },
                    on: { click: _vm.submitData }
                  },
                  [_vm._v(_vm._s(_vm.$t("save")))]
                ),
                _vm._v(" "),
                _c(
                  "vs-button",
                  {
                    attrs: { type: "border", color: "danger" },
                    on: {
                      click: function($event) {
                        _vm.isSidebarActiveLocal = false
                      }
                    }
                  },
                  [_vm._v(_vm._s(_vm.$t("cancel")))]
                )
              ],
              1
            )
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/admin/content/post/DataViewSidebar.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/content/post/DataViewSidebar.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DataViewSidebar_vue_vue_type_template_id_3ea493a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataViewSidebar.vue?vue&type=template&id=3ea493a9&scoped=true& */ "./resources/js/src/views/pages/admin/content/post/DataViewSidebar.vue?vue&type=template&id=3ea493a9&scoped=true&");
/* harmony import */ var _DataViewSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataViewSidebar.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/admin/content/post/DataViewSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DataViewSidebar_vue_vue_type_style_index_0_id_3ea493a9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataViewSidebar.vue?vue&type=style&index=0&id=3ea493a9&lang=scss&scoped=true& */ "./resources/js/src/views/pages/admin/content/post/DataViewSidebar.vue?vue&type=style&index=0&id=3ea493a9&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DataViewSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DataViewSidebar_vue_vue_type_template_id_3ea493a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DataViewSidebar_vue_vue_type_template_id_3ea493a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3ea493a9",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/admin/content/post/DataViewSidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/admin/content/post/DataViewSidebar.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/content/post/DataViewSidebar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataViewSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DataViewSidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/content/post/DataViewSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataViewSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/admin/content/post/DataViewSidebar.vue?vue&type=style&index=0&id=3ea493a9&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/content/post/DataViewSidebar.vue?vue&type=style&index=0&id=3ea493a9&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DataViewSidebar_vue_vue_type_style_index_0_id_3ea493a9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DataViewSidebar.vue?vue&type=style&index=0&id=3ea493a9&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/content/post/DataViewSidebar.vue?vue&type=style&index=0&id=3ea493a9&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DataViewSidebar_vue_vue_type_style_index_0_id_3ea493a9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DataViewSidebar_vue_vue_type_style_index_0_id_3ea493a9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DataViewSidebar_vue_vue_type_style_index_0_id_3ea493a9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DataViewSidebar_vue_vue_type_style_index_0_id_3ea493a9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DataViewSidebar_vue_vue_type_style_index_0_id_3ea493a9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/admin/content/post/DataViewSidebar.vue?vue&type=template&id=3ea493a9&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin/content/post/DataViewSidebar.vue?vue&type=template&id=3ea493a9&scoped=true& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataViewSidebar_vue_vue_type_template_id_3ea493a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DataViewSidebar.vue?vue&type=template&id=3ea493a9&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin/content/post/DataViewSidebar.vue?vue&type=template&id=3ea493a9&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataViewSidebar_vue_vue_type_template_id_3ea493a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataViewSidebar_vue_vue_type_template_id_3ea493a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);