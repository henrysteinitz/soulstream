webpackHotUpdate_N_E("pages/[artist]",{

/***/ "./components/channel.js":
/*!*******************************!*\
  !*** ./components/channel.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Channel; });\n/* harmony import */ var _Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _lib_fetchya_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/fetchya.js */ \"./lib/fetchya.js\");\n/* harmony import */ var _time_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./time.js */ \"./components/time.js\");\n/* harmony import */ var _track_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./track.js */ \"./components/track.js\");\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/henrysteinitz/Desktop/soulstream/components/channel.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\nvar ChannelScreen = /*#__PURE__*/function (_Component) {\n  Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(ChannelScreen, _Component);\n\n  var _super = _createSuper(ChannelScreen);\n\n  function ChannelScreen() {\n    Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, ChannelScreen);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(ChannelScreen, [{\n    key: \"render\",\n    value: function render() {\n      /* pictures may incliude images and video */\n      var pictures = this.props.pictures;\n      return (\n        /*#__PURE__*/\n\n        /* TODO: Support multiple pictures */\n        Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"channel-screen\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"img\", {\n            src: pictures[0]\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 15,\n            columnNumber: 5\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 4\n        }, this)\n      );\n    }\n  }]);\n\n  return ChannelScreen;\n}(react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]);\n\nvar ChannelHeader = /*#__PURE__*/function (_Component2) {\n  Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(ChannelHeader, _Component2);\n\n  var _super2 = _createSuper(ChannelHeader);\n\n  function ChannelHeader() {\n    var _this;\n\n    Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, ChannelHeader);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super2.call.apply(_super2, [this].concat(args));\n\n    Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_this), \"follow\", function () {\n      Object(_lib_fetchya_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])('/api/artist/follow', {\n        artistId: _this.props.artist.id,\n        accountId: _this.props.accountId\n      }, function (res) {\n        _this.props.follow(res);\n      });\n    });\n\n    Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_this), \"unfollow\", function () {\n      Object(_lib_fetchya_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])('/api/artist/unfollow', {\n        artistId: _this.props.artist.id,\n        accountId: _this.props.accountId\n      }, function (res) {\n        _this.props.unfollow(res);\n      });\n    });\n\n    return _this;\n  }\n\n  Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(ChannelHeader, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          artist = _this$props.artist,\n          sessionFollowing = _this$props.sessionFollowing;\n      var userFollowinArtist = sessionFollowing.has(artist.id);\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"channel-upper\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(ChannelScreen, {\n          pictures: [artist.pictureUrl]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 5\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"channel-info\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"channel-name\",\n            children: artist.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 6\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 6\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"channel-location\",\n            children: \"New York, NY\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 6\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 6\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"channel-people\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n              className: \"channel-followers\",\n              children: \"Followers:\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 61,\n              columnNumber: 7\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n              className: \"channel-following\",\n              children: \"Following:\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 64,\n              columnNumber: 7\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 6\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"channel-buttons\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n              className: \"channel-tune-in-button\",\n              children: \"Tune in\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 69,\n              columnNumber: 7\n            }, this), userFollowinArtist ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n              className: \"channel-follow-button\",\n              onClick: this.unfollow,\n              children: \"Unfollow\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 74,\n              columnNumber: 8\n            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n              className: \"channel-follow-button\",\n              onClick: this.follow,\n              children: \"Follow\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 77,\n              columnNumber: 8\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 6\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 5\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 4\n      }, this);\n    }\n  }]);\n\n  return ChannelHeader;\n}(react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]);\n\nvar Channel = /*#__PURE__*/function (_Component3) {\n  Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Channel, _Component3);\n\n  var _super3 = _createSuper(Channel);\n\n  function Channel() {\n    Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, Channel);\n\n    return _super3.apply(this, arguments);\n  }\n\n  Object(_Users_henrysteinitz_Desktop_soulstream_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Channel, [{\n    key: \"ComponentDidMount\",\n    value: function ComponentDidMount() {}\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$props2 = this.props,\n          artist = _this$props2.artist,\n          history = _this$props2.history,\n          play = _this$props2.play,\n          account = _this$props2.account,\n          sessionFollowing = _this$props2.following,\n          follow = _this$props2.follow,\n          unfollow = _this$props2.unfollow;\n      console.log(account);\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"channel-container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(ChannelHeader, {\n          artist: artist,\n          accountId: account.id,\n          sessionFollowing: sessionFollowing,\n          follow: follow,\n          unfollow: unfollow\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 5\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_time_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n          channel: true,\n          history: history,\n          play: play\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 5\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 4\n      }, this);\n    }\n  }]);\n\n  return Channel;\n}(react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGFubmVsLmpzPzhhODYiXSwibmFtZXMiOlsiQ2hhbm5lbFNjcmVlbiIsInBpY3R1cmVzIiwicHJvcHMiLCJDb21wb25lbnQiLCJDaGFubmVsSGVhZGVyIiwiZmV0Y2h5YSIsImFydGlzdElkIiwiYXJ0aXN0IiwiaWQiLCJhY2NvdW50SWQiLCJyZXMiLCJmb2xsb3ciLCJ1bmZvbGxvdyIsInNlc3Npb25Gb2xsb3dpbmciLCJ1c2VyRm9sbG93aW5BcnRpc3QiLCJoYXMiLCJwaWN0dXJlVXJsIiwibmFtZSIsIkNoYW5uZWwiLCJoaXN0b3J5IiwicGxheSIsImFjY291bnQiLCJmb2xsb3dpbmciLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7SUFHTUEsYTs7Ozs7Ozs7Ozs7Ozs2QkFDSTtBQUNSO0FBRFEsVUFFQUMsUUFGQSxHQUVhLEtBQUtDLEtBRmxCLENBRUFELFFBRkE7QUFHUjtBQUFBOztBQUNDO0FBQ0E7QUFBSyxtQkFBUyxFQUFDLGdCQUFmO0FBQUEsaUNBQ0M7QUFBSyxlQUFHLEVBQUVBLFFBQVEsQ0FBQyxDQUFEO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkQ7QUFNQTs7OztFQVYwQkUsK0M7O0lBYXRCQyxhOzs7Ozs7Ozs7Ozs7Ozs7O3lUQUNJLFlBQU07QUFDZEMscUVBQU8sQ0FBQyxvQkFBRCxFQUNQO0FBQ0NDLGdCQUFRLEVBQUUsTUFBS0osS0FBTCxDQUFXSyxNQUFYLENBQWtCQyxFQUQ3QjtBQUVDQyxpQkFBUyxFQUFFLE1BQUtQLEtBQUwsQ0FBV087QUFGdkIsT0FETyxFQUtQLFVBQUNDLEdBQUQsRUFBUztBQUNSLGNBQUtSLEtBQUwsQ0FBV1MsTUFBWCxDQUFrQkQsR0FBbEI7QUFDQSxPQVBNLENBQVA7QUFRQSxLOzsyVEFFVSxZQUFN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TSxFQUFFRixNQUpUO0FBS0Msa0JBQVEsRUFBRUM7QUFMWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELGVBUUMscUVBQUMsaURBQUQ7QUFBTSxpQkFBTyxNQUFiO0FBQWMsaUJBQU8sRUFBRU8sT0FBdkI7QUFBZ0MsY0FBSSxFQUFFQztBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUREO0FBWUE7Ozs7RUF0Qm1DakIsK0MiLCJmaWxlIjoiLi9jb21wb25lbnRzL2NoYW5uZWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBmZXRjaHlhIGZyb20gJy4uL2xpYi9mZXRjaHlhLmpzJ1xuXG5pbXBvcnQgVGltZSBmcm9tICcuL3RpbWUuanMnXG5pbXBvcnQgVHJhY2sgZnJvbSAnLi90cmFjay5qcydcblxuXG5jbGFzcyBDaGFubmVsU2NyZWVuIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuXHRcdC8qIHBpY3R1cmVzIG1heSBpbmNsaXVkZSBpbWFnZXMgYW5kIHZpZGVvICovXG5cdFx0Y29uc3QgeyBwaWN0dXJlcyB9ID0gdGhpcy5wcm9wc1xuXHRcdHJldHVybiAoXG5cdFx0XHQvKiBUT0RPOiBTdXBwb3J0IG11bHRpcGxlIHBpY3R1cmVzICovXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNoYW5uZWwtc2NyZWVuXCI+XG5cdFx0XHRcdDxpbWcgc3JjPXtwaWN0dXJlc1swXX0gLz5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVx0XG59XG5cbmNsYXNzIENoYW5uZWxIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRmb2xsb3cgPSAoKSA9PiB7XG5cdFx0ZmV0Y2h5YSgnL2FwaS9hcnRpc3QvZm9sbG93JywgXG5cdFx0e1xuXHRcdFx0YXJ0aXN0SWQ6IHRoaXMucHJvcHMuYXJ0aXN0LmlkLFxuXHRcdFx0YWNjb3VudElkOiB0aGlzLnByb3BzLmFjY291bnRJZFxuXHRcdH0sIFxuXHRcdChyZXMpID0+IHtcblx0XHRcdHRoaXMucHJvcHMuZm9sbG93KHJlcylcblx0XHR9KVxuXHR9XG5cblx0dW5mb2xsb3cgPSAoKSA9PiB7XG5cdFx0ZmV0Y2h5YSgnL2FwaS9hcnRpc3QvdW5mb2xsb3cnLCBcblx0XHR7XG5cdFx0XHRhcnRpc3RJZDogdGhpcy5wcm9wcy5hcnRpc3QuaWQsXG5cdFx0XHRhY2NvdW50SWQ6IHRoaXMucHJvcHMuYWNjb3VudElkXG5cdFx0fSwgXG5cdFx0KHJlcykgPT4ge1xuXHRcdFx0dGhpcy5wcm9wcy51bmZvbGxvdyhyZXMpXG5cdFx0fSlcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IGFydGlzdCwgc2Vzc2lvbkZvbGxvd2luZyB9ID0gdGhpcy5wcm9wc1xuXHRcdGNvbnN0IHVzZXJGb2xsb3dpbkFydGlzdCA9IHNlc3Npb25Gb2xsb3dpbmcuaGFzKGFydGlzdC5pZClcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNoYW5uZWwtdXBwZXJcIj5cblx0XHRcdFx0PENoYW5uZWxTY3JlZW4gcGljdHVyZXM9e1thcnRpc3QucGljdHVyZVVybF19Lz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjaGFubmVsLWluZm9cIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNoYW5uZWwtbmFtZVwiPlxuXHRcdFx0XHRcdFx0e2FydGlzdC5uYW1lfVxuXHRcdFx0XHRcdDwvZGl2PiBcblx0XHRcdFx0XHQ8YnIvPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2hhbm5lbC1sb2NhdGlvblwiPlxuXHRcdFx0XHRcdFx0TmV3IFlvcmssIE5ZXG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGJyLz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNoYW5uZWwtcGVvcGxlXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNoYW5uZWwtZm9sbG93ZXJzXCI+XG5cdFx0XHRcdFx0XHRcdEZvbGxvd2Vyczpcblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjaGFubmVsLWZvbGxvd2luZ1wiPlxuXHRcdFx0XHRcdFx0XHRGb2xsb3dpbmc6XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNoYW5uZWwtYnV0dG9uc1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjaGFubmVsLXR1bmUtaW4tYnV0dG9uXCI+XG5cdFx0XHRcdFx0XHRcdFR1bmUgaW5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR1c2VyRm9sbG93aW5BcnRpc3QgP1xuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNoYW5uZWwtZm9sbG93LWJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMudW5mb2xsb3d9PlxuXHRcdFx0XHRcdFx0XHRcdFVuZm9sbG93XG5cdFx0XHRcdFx0XHRcdDwvZGl2PiA6XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2hhbm5lbC1mb2xsb3ctYnV0dG9uXCIgb25DbGljaz17dGhpcy5mb2xsb3d9PlxuXHRcdFx0XHRcdFx0XHRcdEZvbGxvd1xuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhbm5lbCBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Q29tcG9uZW50RGlkTW91bnQoKSB7XG5cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IGFydGlzdCwgaGlzdG9yeSwgcGxheSwgYWNjb3VudCwgZm9sbG93aW5nOiBzZXNzaW9uRm9sbG93aW5nLCBmb2xsb3csIHVuZm9sbG93IH0gPSB0aGlzLnByb3BzXG5cblx0XHRjb25zb2xlLmxvZyhhY2NvdW50KVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNoYW5uZWwtY29udGFpbmVyXCI+XG5cdFx0XHRcdDxDaGFubmVsSGVhZGVyIFxuXHRcdFx0XHRcdGFydGlzdD17YXJ0aXN0fSBcblx0XHRcdFx0XHRhY2NvdW50SWQ9e2FjY291bnQuaWR9IFxuXHRcdFx0XHRcdHNlc3Npb25Gb2xsb3dpbmc9e3Nlc3Npb25Gb2xsb3dpbmd9IFxuXHRcdFx0XHRcdGZvbGxvdz17Zm9sbG93fSBcblx0XHRcdFx0XHR1bmZvbGxvdz17dW5mb2xsb3d9IFxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8VGltZSBjaGFubmVsIGhpc3Rvcnk9e2hpc3Rvcnl9IHBsYXk9e3BsYXl9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/channel.js\n");

/***/ })

})