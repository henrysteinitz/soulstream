webpackHotUpdate_N_E("pages/[artist]",{

/***/ "./components/channel.js":
/*!*******************************!*\
  !*** ./components/channel.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Channel; });\n/* harmony import */ var _Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _lib_fetchya_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/fetchya.js */ \"./lib/fetchya.js\");\n/* harmony import */ var _time_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./time.js */ \"./components/time.js\");\n/* harmony import */ var _track_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./track.js */ \"./components/track.js\");\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/henrysteinitz/Desktop/soulstream/components/channel.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\nvar ChannelScreen = /*#__PURE__*/function (_Component) {\n  Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(ChannelScreen, _Component);\n\n  var _super = _createSuper(ChannelScreen);\n\n  function ChannelScreen() {\n    Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, ChannelScreen);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(ChannelScreen, [{\n    key: \"render\",\n    value: function render() {\n      /* pictures may incliude images and video */\n      var pictures = this.props.pictures;\n      return (\n        /*#__PURE__*/\n\n        /* TODO: Support multiple pictures */\n        Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"channel-screen\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"img\", {\n            src: pictures[0]\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 15,\n            columnNumber: 5\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 4\n        }, this)\n      );\n    }\n  }]);\n\n  return ChannelScreen;\n}(react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]);\n\nvar ChannelHeader = /*#__PURE__*/function (_Component2) {\n  Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(ChannelHeader, _Component2);\n\n  var _super2 = _createSuper(ChannelHeader);\n\n  function ChannelHeader() {\n    var _this;\n\n    Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, ChannelHeader);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super2.call.apply(_super2, [this].concat(args));\n\n    Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_this), \"follow\", function () {\n      Object(_lib_fetchya_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])('/api/artist/follow', {\n        artistId: _this.props.artist.id,\n        accountId: _this.props.accountId\n      }, function (res) {\n        console.log(res);\n      });\n    });\n\n    return _this;\n  }\n\n  Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(ChannelHeader, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          artist = _this$props.artist,\n          sessionFollowing = _this$props.sessionFollowing;\n      var userFollowinArtist = sessionFollowing.has(artist.id);\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"channel-upper\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(ChannelScreen, {\n          pictures: [artist.pictureUrl]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 5\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"channel-info\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"channel-name\",\n            children: artist.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 6\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 6\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"channel-location\",\n            children: \"New York, NY\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 6\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 6\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"channel-people\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n              className: \"channel-followers\",\n              children: \"Followers:\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 7\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n              className: \"channel-following\",\n              children: \"Following:\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 7\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 6\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"channel-buttons\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n              className: \"channel-tune-in-button\",\n              children: \"Tune in\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 57,\n              columnNumber: 7\n            }, this), userFollowinArtist ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n              className: \"channel-follow-button\",\n              onClick: this.unfollow,\n              children: \"Unfollow\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 8\n            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n              className: \"channel-follow-button\",\n              onClick: this.follow,\n              children: \"Follow\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 65,\n              columnNumber: 8\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 6\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 5\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 4\n      }, this);\n    }\n  }]);\n\n  return ChannelHeader;\n}(react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]);\n\nvar Channel = /*#__PURE__*/function (_Component3) {\n  Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Channel, _Component3);\n\n  var _super3 = _createSuper(Channel);\n\n  function Channel() {\n    Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, Channel);\n\n    return _super3.apply(this, arguments);\n  }\n\n  Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Channel, [{\n    key: \"ComponentDidMount\",\n    value: function ComponentDidMount() {}\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$props2 = this.props,\n          artist = _this$props2.artist,\n          history = _this$props2.history,\n          play = _this$props2.play,\n          account = _this$props2.account,\n          sessionFollowing = _this$props2.following;\n      console.log(history);\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"channel-container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(ChannelHeader, {\n          artist: artist,\n          accountId: account.accountId,\n          sessionFollowing: sessionFollowing\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 5\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_time_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n          channel: true,\n          history: history,\n          play: play\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 5\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 4\n      }, this);\n    }\n  }]);\n\n  return Channel;\n}(react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGFubmVsLmpzPzhhODYiXSwibmFtZXMiOlsiQ2hhbm5lbFNjcmVlbiIsInBpY3R1cmVzIiwicHJvcHMiLCJDb21wb25lbnQiLCJDaGFubmVsSGVhZGVyIiwiZmV0Y2h5YSIsImFydGlzdElkIiwiYXJ0aXN0IiwiaWQiLCJhY2NvdW50SWQiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwic2Vzc2lvbkZvbGxvd2luZyIsInVzZXJGb2xsb3dpbkFydGlzdCIsImhhcyIsInBpY3R1cmVVcmwiLCJuYW1lIiwidW5mb2xsb3ciLCJmb2xsb3ciLCJDaGFubmVsIiwiaGlzdG9yeSIsInBsYXkiLCJhY2NvdW50IiwiZm9sbG93aW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7SUFHTUEsYTs7Ozs7Ozs7Ozs7Ozs2QkFDSTtBQUNSO0FBRFEsVUFFQUMsUUFGQSxHQUVhLEtBQUtDLEtBRmxCLENBRUFELFFBRkE7QUFHUjtBQUFBOztBQUNDO0FBQ0E7QUFBSyxtQkFBUyxFQUFDLGdCQUFmO0FBQUEsaUNBQ0M7QUFBSyxlQUFHLEVBQUVBLFFBQVEsQ0FBQyxDQUFEO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkQ7QUFNQTs7OztFQVYwQkUsK0M7O0lBYXRCQyxhOzs7Ozs7Ozs7Ozs7Ozs7O3lUQUNJLFlBQU07QUFDZEMscUVBQU8sQ0FBQyxvQkFBRCxFQUNQO0FBQ0NDLGdCQUFRLEVBQUUsTUFBS0osS0FBTCxDQUFXSyxNQUFYLENBQWtCQyxFQUQ3QjtBQUVDQyxpQkFBUyxFQUFFLE1BQUtQLEtBQUwsQ0FBV087QUFGdkIsT0FETyxFQUtQLFVBQUNDLEdBQUQsRUFBUztBQUNSQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBLE9BUE0sQ0FBUDtBQVFBLEs7Ozs7Ozs7NkJBRVE7QUFBQSx3QkFDNkIsS0FBS1IsS0FEbEM7QUFBQSxVQUNBSyxNQURBLGVBQ0FBLE1BREE7QUFBQSxVQUNRTSxnQkFEUixlQUNRQSxnQkFEUjtBQUVSLFVBQU1DLGtCQUFrQixHQUFHRCxnQkFBZ0IsQ0FBQ0UsR0FBakIsQ0FBcUJSLE1BQU0sQ0FBQ0MsRUFBNUIsQ0FBM0I7QUFDQSwwQkFDQztBQUFLLGlCQUFTLEVBQUMsZUFBZjtBQUFBLGdDQUNDLHFFQUFDLGFBQUQ7QUFBZSxrQkFBUSxFQUFFLENBQUNELE1BQU0sQ0FBQ1MsVUFBUjtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELGVBRUM7QUFBSyxtQkFBUyxFQUFDLGNBQWY7QUFBQSxrQ0FDQztBQUFLLHFCQUFTLEVBQUMsY0FBZjtBQUFBLHNCQUNFVCxNQUFNLENBQUNVO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERCxlQUlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkQsZUFLQztBQUFLLHFCQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEQsZUFRQztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVJELGVBU0M7QUFBSyxxQkFBUyxFQUFDLGdCQUFmO0FBQUEsb0NBQ0M7QUFBSyx1QkFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURELGVBSUM7QUFBSyx1QkFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFURCxlQWlCQztBQUFLLHFCQUFTLEVBQUMsaUJBQWY7QUFBQSxvQ0FDQztBQUFLLHVCQUFTLEVBQUMsd0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREQsRUFLRUgsa0JBQWtCLGdCQUNsQjtBQUFLLHVCQUFTLEVBQUMsdUJBQWY7QUFBdUMscUJBQU8sRUFBRSxLQUFLSSxRQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFEa0IsZ0JBSWxCO0FBQUssdUJBQVMsRUFBQyx1QkFBZjtBQUF1QyxxQkFBTyxFQUFFLEtBQUtDLE1BQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFqQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUREO0FBcUNBOzs7O0VBcEQwQmhCLCtDOztJQXVEUGlCLE87Ozs7Ozs7Ozs7Ozs7d0NBRUEsQ0FFbkI7Ozs2QkFFUTtBQUFBLHlCQUNnRSxLQUFLbEIsS0FEckU7QUFBQSxVQUNBSyxNQURBLGdCQUNBQSxNQURBO0FBQUEsVUFDUWMsT0FEUixnQkFDUUEsT0FEUjtBQUFBLFVBQ2lCQyxJQURqQixnQkFDaUJBLElBRGpCO0FBQUEsVUFDdUJDLE9BRHZCLGdCQUN1QkEsT0FEdkI7QUFBQSxVQUMyQ1YsZ0JBRDNDLGdCQUNnQ1csU0FEaEM7QUFHUmIsYUFBTyxDQUFDQyxHQUFSLENBQVlTLE9BQVo7QUFDQSwwQkFDQztBQUFLLGlCQUFTLEVBQUMsbUJBQWY7QUFBQSxnQ0FDQyxxRUFBQyxhQUFEO0FBQWUsZ0JBQU0sRUFBRWQsTUFBdkI7QUFBK0IsbUJBQVMsRUFBRWdCLE9BQU8sQ0FBQ2QsU0FBbEQ7QUFBNkQsMEJBQWdCLEVBQUVJO0FBQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsZUFFQyxxRUFBQyxpREFBRDtBQUFNLGlCQUFPLE1BQWI7QUFBYyxpQkFBTyxFQUFFUSxPQUF2QjtBQUFnQyxjQUFJLEVBQUVDO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQ7QUFNQTs7OztFQWhCbUNuQiwrQyIsImZpbGUiOiIuL2NvbXBvbmVudHMvY2hhbm5lbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGZldGNoeWEgZnJvbSAnLi4vbGliL2ZldGNoeWEuanMnXG5cbmltcG9ydCBUaW1lIGZyb20gJy4vdGltZS5qcydcbmltcG9ydCBUcmFjayBmcm9tICcuL3RyYWNrLmpzJ1xuXG5cbmNsYXNzIENoYW5uZWxTY3JlZW4gZXh0ZW5kcyBDb21wb25lbnQge1xuXHRyZW5kZXIoKSB7XG5cdFx0LyogcGljdHVyZXMgbWF5IGluY2xpdWRlIGltYWdlcyBhbmQgdmlkZW8gKi9cblx0XHRjb25zdCB7IHBpY3R1cmVzIH0gPSB0aGlzLnByb3BzXG5cdFx0cmV0dXJuIChcblx0XHRcdC8qIFRPRE86IFN1cHBvcnQgbXVsdGlwbGUgcGljdHVyZXMgKi9cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2hhbm5lbC1zY3JlZW5cIj5cblx0XHRcdFx0PGltZyBzcmM9e3BpY3R1cmVzWzBdfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XHRcbn1cblxuY2xhc3MgQ2hhbm5lbEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG5cdGZvbGxvdyA9ICgpID0+IHtcblx0XHRmZXRjaHlhKCcvYXBpL2FydGlzdC9mb2xsb3cnLCBcblx0XHR7XG5cdFx0XHRhcnRpc3RJZDogdGhpcy5wcm9wcy5hcnRpc3QuaWQsXG5cdFx0XHRhY2NvdW50SWQ6IHRoaXMucHJvcHMuYWNjb3VudElkXG5cdFx0fSwgXG5cdFx0KHJlcykgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2cocmVzKVxuXHRcdH0pXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgeyBhcnRpc3QsIHNlc3Npb25Gb2xsb3dpbmcgfSA9IHRoaXMucHJvcHNcblx0XHRjb25zdCB1c2VyRm9sbG93aW5BcnRpc3QgPSBzZXNzaW9uRm9sbG93aW5nLmhhcyhhcnRpc3QuaWQpXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2hhbm5lbC11cHBlclwiPlxuXHRcdFx0XHQ8Q2hhbm5lbFNjcmVlbiBwaWN0dXJlcz17W2FydGlzdC5waWN0dXJlVXJsXX0vPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNoYW5uZWwtaW5mb1wiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2hhbm5lbC1uYW1lXCI+XG5cdFx0XHRcdFx0XHR7YXJ0aXN0Lm5hbWV9XG5cdFx0XHRcdFx0PC9kaXY+IFxuXHRcdFx0XHRcdDxici8+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjaGFubmVsLWxvY2F0aW9uXCI+XG5cdFx0XHRcdFx0XHROZXcgWW9yaywgTllcblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8YnIvPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2hhbm5lbC1wZW9wbGVcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2hhbm5lbC1mb2xsb3dlcnNcIj5cblx0XHRcdFx0XHRcdFx0Rm9sbG93ZXJzOlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNoYW5uZWwtZm9sbG93aW5nXCI+XG5cdFx0XHRcdFx0XHRcdEZvbGxvd2luZzpcblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2hhbm5lbC1idXR0b25zXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNoYW5uZWwtdHVuZS1pbi1idXR0b25cIj5cblx0XHRcdFx0XHRcdFx0VHVuZSBpblxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHVzZXJGb2xsb3dpbkFydGlzdCA/XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2hhbm5lbC1mb2xsb3ctYnV0dG9uXCIgb25DbGljaz17dGhpcy51bmZvbGxvd30+XG5cdFx0XHRcdFx0XHRcdFx0VW5mb2xsb3dcblx0XHRcdFx0XHRcdFx0PC9kaXY+IDpcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjaGFubmVsLWZvbGxvdy1idXR0b25cIiBvbkNsaWNrPXt0aGlzLmZvbGxvd30+XG5cdFx0XHRcdFx0XHRcdFx0Rm9sbG93XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFubmVsIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRDb21wb25lbnREaWRNb3VudCgpIHtcblxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgYXJ0aXN0LCBoaXN0b3J5LCBwbGF5LCBhY2NvdW50LCBmb2xsb3dpbmc6IHNlc3Npb25Gb2xsb3dpbmcgfSA9IHRoaXMucHJvcHNcblxuXHRcdGNvbnNvbGUubG9nKGhpc3RvcnkpXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2hhbm5lbC1jb250YWluZXJcIj5cblx0XHRcdFx0PENoYW5uZWxIZWFkZXIgYXJ0aXN0PXthcnRpc3R9IGFjY291bnRJZD17YWNjb3VudC5hY2NvdW50SWR9IHNlc3Npb25Gb2xsb3dpbmc9e3Nlc3Npb25Gb2xsb3dpbmd9IC8+XG5cdFx0XHRcdDxUaW1lIGNoYW5uZWwgaGlzdG9yeT17aGlzdG9yeX0gcGxheT17cGxheX0gLz5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/channel.js\n");

/***/ })

})