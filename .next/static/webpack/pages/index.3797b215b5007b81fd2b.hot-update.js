webpackHotUpdate_N_E("pages/index",{

/***/ "./lib/helipad/helipad.js":
/*!********************************!*\
  !*** ./lib/helipad/helipad.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Helipad; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/henrysteinitz/Desktop/soulstream/lib/helipad/helipad.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar Helipad = /*#__PURE__*/function (_Component) {\n  Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Helipad, _Component);\n\n  var _super = _createSuper(Helipad);\n\n  function Helipad() {\n    var _this;\n\n    Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, Helipad);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"state\", {\n      hovering: false,\n      file: null,\n      helicopter: null,\n      modalIn: false\n    });\n\n    Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"handleDrop\", function (e) {\n      e.preventDefault();\n      _this.props.stopPropagation && e.stopPropagation();\n\n      if (_this.props.onDrop) {\n        // TODO handle err.\n        _this.props.onDrop(e.dataTransfer.files[0]);\n\n        return;\n      } // TODO: Add support for multiple tracks / folders\n      // TODO: Add error handling\n\n\n      if (e.dataTransfer.files.length === 0) {\n        console.log(\"No supplied file\");\n        return;\n      } else if (e.dataTransfer.files.length > 1) {\n        console.log(\"Multiple file handling not yet implemented\");\n        return;\n      }\n\n      _this.setState({\n        hovering: false,\n        modalIn: true,\n        file: e.dataTransfer.files[0]\n      });\n    });\n\n    Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"handleDragEnter\", function (e) {\n      e.preventDefault();\n      _this.props.stopPropagation && e.stopPropagation();\n\n      _this.setState({\n        hovering: true\n      });\n    });\n\n    Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"handleDragExit\", function (e) {\n      e.preventDefault();\n      _this.props.stopPropagation && e.stopPropagation();\n\n      _this.setState({\n        hovering: false\n      });\n    });\n\n    Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"handleDragOver\", function (e) {\n      e.preventDefault();\n    });\n\n    Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"handleClick\", function () {});\n\n    Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"flyOut\", function () {\n      return _this.setState({\n        modalIn: false\n      });\n    });\n\n    return _this;\n  }\n\n  Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Helipad, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          children = _this$props.children,\n          className = _this$props.className,\n          modal = _this$props.modal,\n          onDrop = _this$props.onDrop,\n          onClick = _this$props.onClick,\n          clickable = _this$props.clickable;\n      var _this$state = this.state,\n          hovering = _this$state.hovering,\n          file = _this$state.file,\n          modalIn = _this$state.modalIn;\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()('helipad', className, {\n          hovering: hovering\n        }),\n        onDragEnter: this.hanleDragEnter,\n        onDragExit: this.handleDragExit,\n        onDragOver: this.handleDragOver,\n        onDrop: this.handleDrop,\n        onClick: onClick,\n        children: [clicakable && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"file\",\n          className: \"helipad\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 20\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: classnames__WEBPACK_IMPORTED_MODULE_9___default()('helicopter-shade', {\n            \"in\": modalIn\n          }),\n          onClick: onClick ? function () {} : this.flyOut\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 5\n        }, this), modal && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: classnames__WEBPACK_IMPORTED_MODULE_9___default()('helicopter', {\n            \"in\": modalIn\n          }),\n          children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.cloneElement(modal, {\n            exit: this.flyOut,\n            file: file\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 6\n        }, this), children]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 4\n      }, this);\n    }\n  }]);\n\n  return Helipad;\n}(react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2hlbGlwYWQvaGVsaXBhZC5qcz82YjhlIl0sIm5hbWVzIjpbIkhlbGlwYWQiLCJob3ZlcmluZyIsImZpbGUiLCJoZWxpY29wdGVyIiwibW9kYWxJbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwic3RvcFByb3BhZ2F0aW9uIiwib25Ecm9wIiwiZGF0YVRyYW5zZmVyIiwiZmlsZXMiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsIm1vZGFsIiwib25DbGljayIsImNsaWNrYWJsZSIsInN0YXRlIiwiY2xhc3NuYW1lcyIsImhhbmxlRHJhZ0VudGVyIiwiaGFuZGxlRHJhZ0V4aXQiLCJoYW5kbGVEcmFnT3ZlciIsImhhbmRsZURyb3AiLCJjbGljYWthYmxlIiwiZmx5T3V0IiwiUmVhY3QiLCJjbG9uZUVsZW1lbnQiLCJleGl0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7O0lBRXFCQSxPOzs7Ozs7Ozs7Ozs7Ozs7O3dUQVFaO0FBQ1BDLGNBQVEsRUFBRSxLQURIO0FBRVBDLFVBQUksRUFBRSxJQUZDO0FBR1BDLGdCQUFVLEVBQUUsSUFITDtBQUlQQyxhQUFPLEVBQUU7QUFKRixLOzs2VEFPSyxVQUFDQyxDQUFELEVBQU87QUFDbkJBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBLFlBQUtDLEtBQUwsQ0FBV0MsZUFBWCxJQUE4QkgsQ0FBQyxDQUFDRyxlQUFGLEVBQTlCOztBQUVBLFVBQUksTUFBS0QsS0FBTCxDQUFXRSxNQUFmLEVBQXVCO0FBQ3RCO0FBQ0EsY0FBS0YsS0FBTCxDQUFXRSxNQUFYLENBQWtCSixDQUFDLENBQUNLLFlBQUYsQ0FBZUMsS0FBZixDQUFxQixDQUFyQixDQUFsQjs7QUFDQTtBQUNBLE9BUmtCLENBVW5CO0FBQ0E7OztBQUNBLFVBQUlOLENBQUMsQ0FBQ0ssWUFB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LFdBQTFCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWRixFQWNHYyxRQWRIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUREO0FBa0JBOzs7O0VBMUZtQ2dCLCtDIiwiZmlsZSI6Ii4vbGliL2hlbGlwYWQvaGVsaXBhZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVsaXBhZCBleHRlbmRzIENvbXBvbmVudCB7XG5cdC8qXG5cdFByb3BzOlxuXHRcdGNoaWxkcmVuXG5cdFx0Y2xhc3NOYW1lXG5cdFx0cHJvcGFnYXRlXG5cdCovXG5cblx0c3RhdGUgPSB7XG5cdFx0aG92ZXJpbmc6IGZhbHNlLFxuXHRcdGZpbGU6IG51bGwsXG5cdFx0aGVsaWNvcHRlcjogbnVsbCxcblx0XHRtb2RhbEluOiBmYWxzZVxuXHR9XG5cblx0aGFuZGxlRHJvcCA9IChlKSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHRoaXMucHJvcHMuc3RvcFByb3BhZ2F0aW9uICYmIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRpZiAodGhpcy5wcm9wcy5vbkRyb3ApIHtcblx0XHRcdC8vIFRPRE8gaGFuZGxlIGVyci5cblx0XHRcdHRoaXMucHJvcHMub25Ecm9wKGUuZGF0YVRyYW5zZmVyLmZpbGVzWzBdKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBUT0RPOiBBZGQgc3VwcG9ydCBmb3IgbXVsdGlwbGUgdHJhY2tzIC8gZm9sZGVyc1xuXHRcdC8vIFRPRE86IEFkZCBlcnJvciBoYW5kbGluZ1xuXHRcdGlmIChlLmRhdGFUcmFuc2Zlci5maWxlcy5sZW5ndGggPT09IDApIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiTm8gc3VwcGxpZWQgZmlsZVwiKTtcblx0XHRcdHJldHVybjtcblx0XHR9IGVsc2UgaWYgKGUuZGF0YVRyYW5zZmVyLmZpbGVzLmxlbmd0aCA+IDEpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiTXVsdGlwbGUgZmlsZSBoYW5kbGluZyBub3QgeWV0IGltcGxlbWVudGVkXCIpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0aG92ZXJpbmc6IGZhbHNlLFxuXHRcdFx0bW9kYWxJbjogdHJ1ZSxcblx0XHRcdGZpbGU6IGUuZGF0YVRyYW5zZmVyLmZpbGVzWzBdXG5cdFx0fSk7XG5cdH1cblxuXHRoYW5kbGVEcmFnRW50ZXIgPSAoZSkgPT4ge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR0aGlzLnByb3BzLnN0b3BQcm9wYWdhdGlvbiAmJiBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRob3ZlcmluZzogdHJ1ZVxuXHRcdH0pO1xuXHR9XG5cblx0aGFuZGxlRHJhZ0V4aXQgPSAoZSkgPT4ge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR0aGlzLnByb3BzLnN0b3BQcm9wYWdhdGlvbiAmJiBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRob3ZlcmluZzogZmFsc2Vcblx0XHR9KTtcblx0fVxuXG5cdGhhbmRsZURyYWdPdmVyID0gKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdH1cblxuXHRoYW5kbGVDbGljayA9ICgpID0+IHt9XG5cblx0Zmx5T3V0ID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG1vZGFsSW46IGZhbHNlIH0pXG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgbW9kYWwsIG9uRHJvcCwgb25DbGljaywgY2xpY2thYmxlIH0gPSB0aGlzLnByb3BzXG5cdFx0Y29uc3QgeyBob3ZlcmluZywgZmlsZSwgbW9kYWxJbiB9ID0gdGhpcy5zdGF0ZVxuXG5cdFx0cmV0dXJuICggXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnaGVsaXBhZCcsIGNsYXNzTmFtZSwgeyBob3ZlcmluZyB9KX1cblx0XHRcdFx0XHRvbkRyYWdFbnRlcj17dGhpcy5oYW5sZURyYWdFbnRlcn1cblx0XHRcdFx0XHRvbkRyYWdFeGl0PXt0aGlzLmhhbmRsZURyYWdFeGl0fVxuXHRcdFx0XHRcdG9uRHJhZ092ZXI9e3RoaXMuaGFuZGxlRHJhZ092ZXJ9XG5cdFx0XHRcdFx0b25Ecm9wPXt0aGlzLmhhbmRsZURyb3B9XG5cdFx0XHRcdFx0b25DbGljaz17b25DbGlja30+XG5cdFx0XHRcdHtjbGljYWthYmxlICYmIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGNsYXNzTmFtZT1cImhlbGlwYWRcIiAvPn1cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ2hlbGljb3B0ZXItc2hhZGUnLCB7IGluOiBtb2RhbEluIH0pfSBvbkNsaWNrPXtvbkNsaWNrID8gKCkgPT4ge30gOiB0aGlzLmZseU91dH0gLz5cblx0XHRcdFx0eyBcblx0XHRcdFx0XHRtb2RhbCAmJlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdoZWxpY29wdGVyJywgeyBpbjogbW9kYWxJbiB9KX0+XG5cdFx0XHRcdFx0XHR7IFJlYWN0LmNsb25lRWxlbWVudChtb2RhbCwgeyBleGl0OiB0aGlzLmZseU91dCwgZmlsZSB9KSB9XG5cdFx0XHRcdFx0PC9kaXY+ICBcblx0XHRcdFx0fVx0XG5cdFx0XHRcdHsgY2hpbGRyZW4gfVx0XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn0gXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/helipad/helipad.js\n");

/***/ })

})