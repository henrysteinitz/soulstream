webpackHotUpdate_N_E("pages/index",{

/***/ "./components/queue.js":
/*!*****************************!*\
  !*** ./components/queue.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Queue; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-draggable */ \"./node_modules/react-draggable/build/cjs/cjs.js\");\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/henrysteinitz/Desktop/soulstream/components/queue.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar Queue = /*#__PURE__*/function (_Component) {\n  Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Queue, _Component);\n\n  var _super = _createSuper(Queue);\n\n  function Queue() {\n    var _this;\n\n    Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, Queue);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"addToQueue\", function (id) {\n      return function () {\n        if (id) {\n          _this.props.addToQueue(id);\n\n          _this.props.stopTrackDragging();\n        }\n      };\n    });\n\n    return _this;\n  }\n\n  Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Queue, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var _this$props = this.props,\n          tracks = _this$props.tracks,\n          dragTrackId = _this$props.dragTrackId;\n      console.log(tracks);\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"queue\",\n        children: [dragTrackId && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"queue-dropzone\",\n          ref: function ref(input) {\n            _this2.queueDropzone = input;\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"queue-dropzone-text\",\n            children: \"Add track to queue\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 24,\n            columnNumber: 7\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 6\n        }, this), tracks.map(function (track, i) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_draggable__WEBPACK_IMPORTED_MODULE_9___default.a, {\n            axis: \"y\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"queue-track\",\n              onClick: playQueueTrackByIndex,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"queue-track-art-container\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                  className: \"queue-track-art\",\n                  src: track.artUrl\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 37,\n                  columnNumber: 10\n                }, _this2)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 36,\n                columnNumber: 9\n              }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"inline\",\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: \"queue-track-title\",\n                  children: track.title\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 40,\n                  columnNumber: 10\n                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: \"queue-track-artist\",\n                  children: track.artists && track.artists.length > 0 && track.artists[0].artist.name\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 43,\n                  columnNumber: 10\n                }, _this2)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 39,\n                columnNumber: 9\n              }, _this2)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 35,\n              columnNumber: 8\n            }, _this2)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 7\n          }, _this2);\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 4\n      }, this);\n    }\n  }]);\n\n  return Queue;\n}(react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9xdWV1ZS5qcz9lMzdmIl0sIm5hbWVzIjpbIlF1ZXVlIiwiaWQiLCJwcm9wcyIsImFkZFRvUXVldWUiLCJzdG9wVHJhY2tEcmFnZ2luZyIsInRyYWNrcyIsImRyYWdUcmFja0lkIiwiY29uc29sZSIsImxvZyIsImlucHV0IiwicXVldWVEcm9wem9uZSIsIm1hcCIsInRyYWNrIiwiaSIsInBsYXlRdWV1ZVRyYWNrQnlJbmRleCIsImFydFVybCIsInRpdGxlIiwiYXJ0aXN0cyIsImxlbmd0aCIsImFydGlzdCIsIm5hbWUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7Ozs7NlRBRVAsVUFBQ0MsRUFBRDtBQUFBLGFBQVEsWUFBTTtBQUMxQixZQUFJQSxFQUFKLEVBQVE7QUFDUCxnQkFBS0MsS0FBTCxDQUFXQyxVQUFYLENBQXNCRixFQUF0Qjs7QUFDQSxnQkFBS0MsS0FBTCxDQUFXRSxpQkFBWDtBQUNBO0FBQ0QsT0FMWTtBQUFBLEs7Ozs7Ozs7NkJBT0o7QUFBQTs7QUFBQSx3QkFDd0IsS0FBS0YsS0FEN0I7QUFBQSxVQUNBRyxNQURBLGVBQ0FBLE1BREE7QUFBQSxVQUNRQyxXQURSLGVBQ1FBLFdBRFI7QUFFUkMsYUFBTyxDQUFDQyxHQUFSLENBQVlILE1BQVo7QUFDQSwwQkFDQztBQUFLLGlCQUFTLEVBQUMsT0FBZjtBQUFBLG1CQUVFQyxXQUFXLGlCQUNYO0FBQ0MsbUJBQVMsRUFBQyxnQkFEWDtBQUVDLGFBQUcsRUFBRSxhQUFDRyxLQUFELEVBQVc7QUFBQyxrQkFBSSxDQUFDQyxhQUFMLEdBQXFCRCxLQUFyQjtBQUEyQixXQUY3QztBQUFBLGlDQUlDO0FBQUsscUJBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEYsRUFhRUosTUFBTSxDQUFDTSxHQUFQLENBQVcsVUFBQ0MsS0FBRCxFQUFRQyxDQUFSO0FBQUEsOEJBQ1YscUVBQUMsc0RBQUQ7QUFDQyxnQkFBSSxFQUFDLEdBRE47QUFBQSxtQ0FJQztBQUFLLHVCQUFTLEVBQUMsYUFBZjtBQUE2QixxQkFBTyxFQUFFQyxxQkFBdEM7QUFBQSxzQ0FDQztBQUFLLHlCQUFTLEVBQUMsMkJBQWY7QUFBQSx1Q0FDQztBQUFLLDJCQUFTLEVBQUMsaUJBQWY7QUFBaUMscUJBQUcsRUFBRUYsS0FBSyxDQUFDRztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERCxlQUlDO0FBQUsseUJBQVMsRUFBQyxRQUFmO0FBQUEsd0NBQ0M7QUFBSywyQkFBUyxFQUFDLG1CQUFmO0FBQUEsNEJBQ0VILEtBQUssQ0FBQ0k7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURELGVBSUM7QUFBSywyQkFBUyxFQUFDLG9CQUFmO0FBQUEsNEJBQ0VKLEtBQUssQ0FBQ0ssT0FBTixJQUFpQkwsS0FBSyxDQUFDSyxPQUFOLENBQWNDLE1BQWQsR0FBdUIsQ0FBeEMsSUFBNkNOLEtBQUssQ0FBQ0ssT0FBTixDQUFjLENBQWQsRUFBaUJFLE1BQWpCLENBQXdCQztBQUR2RTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURVO0FBQUEsU0FBWCxDQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUREO0FBcUNBOzs7O0VBakRpQ0MsK0MiLCJmaWxlIjoiLi9jb21wb25lbnRzL3F1ZXVlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJ3JlYWN0LWRyYWdnYWJsZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVldWUgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGFkZFRvUXVldWUgPSAoaWQpID0+ICgpID0+IHtcblx0XHRpZiAoaWQpIHtcblx0XHRcdHRoaXMucHJvcHMuYWRkVG9RdWV1ZShpZClcblx0XHRcdHRoaXMucHJvcHMuc3RvcFRyYWNrRHJhZ2dpbmcoKVxuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IHRyYWNrcywgZHJhZ1RyYWNrSWQgfSA9IHRoaXMucHJvcHNcblx0XHRjb25zb2xlLmxvZyh0cmFja3MpXG5cdFx0cmV0dXJuICAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInF1ZXVlXCI+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRkcmFnVHJhY2tJZCAmJiBcblx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJxdWV1ZS1kcm9wem9uZVwiXG5cdFx0XHRcdFx0XHRyZWY9eyhpbnB1dCkgPT4ge3RoaXMucXVldWVEcm9wem9uZSA9IGlucHV0fX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInF1ZXVlLWRyb3B6b25lLXRleHRcIj5cblx0XHRcdFx0XHRcdEFkZCB0cmFjayB0byBxdWV1ZVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdH1cblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRyYWNrcy5tYXAoKHRyYWNrLCBpKSA9PiAoXG5cdFx0XHRcdFx0XHQ8RHJhZ2dhYmxlXG5cdFx0XHRcdFx0XHRcdGF4aXM9XCJ5XCJcblxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInF1ZXVlLXRyYWNrXCIgb25DbGljaz17cGxheVF1ZXVlVHJhY2tCeUluZGV4fT5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInF1ZXVlLXRyYWNrLWFydC1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwicXVldWUtdHJhY2stYXJ0XCIgc3JjPXt0cmFjay5hcnRVcmx9Lz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlubGluZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJxdWV1ZS10cmFjay10aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7dHJhY2sudGl0bGV9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicXVldWUtdHJhY2stYXJ0aXN0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHt0cmFjay5hcnRpc3RzICYmIHRyYWNrLmFydGlzdHMubGVuZ3RoID4gMCAmJiB0cmFjay5hcnRpc3RzWzBdLmFydGlzdC5uYW1lfVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9EcmFnZ2FibGU+XG5cdFx0XHRcdFx0KSlcblx0XHRcdFx0fVxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/queue.js\n");

/***/ })

})