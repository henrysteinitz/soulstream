webpackHotUpdate_N_E("pages/index",{

/***/ "./components/queue.js":
/*!*****************************!*\
  !*** ./components/queue.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Queue; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/henrysteinitz/Desktop/soulstream/components/queue.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar Queue = /*#__PURE__*/function (_Component) {\n  Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Queue, _Component);\n\n  var _super = _createSuper(Queue);\n\n  function Queue() {\n    var _this;\n\n    Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, Queue);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"addToQueue\", function (id) {\n      return function () {\n        id && _this.props.addToQueue(id);\n      };\n    });\n\n    return _this;\n  }\n\n  Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Queue, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var _this$props = this.props,\n          tracks = _this$props.tracks,\n          dragTrackId = _this$props.dragTrackId;\n      console.log(tracks);\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"queue\",\n        children: [dragTrackId && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          onMouseUp: this.addToQueue(dragTrackId),\n          children: \"Add track to queue\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 6\n        }, this), tracks.map(function (track) {\n          /*#__PURE__*/\n          Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: track.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 7\n          }, _this2);\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 4\n      }, this);\n    }\n  }]);\n\n  return Queue;\n}(react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9xdWV1ZS5qcz9lMzdmIl0sIm5hbWVzIjpbIlF1ZXVlIiwiaWQiLCJwcm9wcyIsImFkZFRvUXVldWUiLCJ0cmFja3MiLCJkcmFnVHJhY2tJZCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJ0cmFjayIsInRpdGxlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7Ozs7NlRBRVAsVUFBQ0MsRUFBRDtBQUFBLGFBQVEsWUFBTTtBQUMxQkEsVUFBRSxJQUFJLE1BQUtDLEtBQUwsQ0FBV0MsVUFBWCxDQUFzQkYsRUFBdEIsQ0FBTjtBQUVBLE9BSFk7QUFBQSxLOzs7Ozs7OzZCQUtKO0FBQUE7O0FBQUEsd0JBQ3dCLEtBQUtDLEtBRDdCO0FBQUEsVUFDQUUsTUFEQSxlQUNBQSxNQURBO0FBQUEsVUFDUUMsV0FEUixlQUNRQSxXQURSO0FBRVJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSCxNQUFaO0FBQ0EsMEJBQ0M7QUFBSyxpQkFBUyxFQUFDLE9BQWY7QUFBQSxtQkFFRUMsV0FBVyxpQkFDWDtBQUNDLG1CQUFTLEVBQUUsS0FBS0YsVUFBTCxDQUFnQkUsV0FBaEIsQ0FEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRixFQVVFRCxNQUFNLENBQUNJLEdBQVAsQ0FBVyxVQUFBQyxLQUFLLEVBQUk7QUFDbkI7QUFBQTtBQUFBLHNCQUFNQSxLQUFLLENBQUNDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLFNBRkQsQ0FWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERDtBQWlCQTs7OztFQTNCaUNDLCtDIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9xdWV1ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWV1ZSBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0YWRkVG9RdWV1ZSA9IChpZCkgPT4gKCkgPT4ge1xuXHRcdGlkICYmIHRoaXMucHJvcHMuYWRkVG9RdWV1ZShpZClcblxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgdHJhY2tzLCBkcmFnVHJhY2tJZCB9ID0gdGhpcy5wcm9wc1xuXHRcdGNvbnNvbGUubG9nKHRyYWNrcylcblx0XHRyZXR1cm4gIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicXVldWVcIj5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdGRyYWdUcmFja0lkICYmIFxuXHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdG9uTW91c2VVcD17dGhpcy5hZGRUb1F1ZXVlKGRyYWdUcmFja0lkKX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRBZGQgdHJhY2sgdG8gcXVldWVcblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0fVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dHJhY2tzLm1hcCh0cmFjayA9PiB7XG5cdFx0XHRcdFx0XHQ8ZGl2Pnt0cmFjay50aXRsZX08L2Rpdj5cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/queue.js\n");

/***/ })

})