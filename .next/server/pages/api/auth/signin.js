module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/auth/signin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\n\nif (false) {} else {\n  if (!global.prisma) {\n    global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__[\"PrismaClient\"]();\n  }\n\n  prisma = global.prisma;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (prisma);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvcHJpc21hLmpzP2M1NjUiXSwibmFtZXMiOlsicHJpc21hIiwiZ2xvYmFsIiwiUHJpc21hQ2xpZW50Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLElBQUlBLE1BQUo7O0FBRUEsV0FBMkMsRUFBM0MsTUFFTztBQUNMLE1BQUksQ0FBQ0MsTUFBTSxDQUFDRCxNQUFaLEVBQW9CO0FBQ2xCQyxVQUFNLENBQUNELE1BQVAsR0FBZ0IsSUFBSUUsMkRBQUosRUFBaEI7QUFDRDs7QUFDREYsUUFBTSxHQUFHQyxNQUFNLENBQUNELE1BQWhCO0FBQ0Q7O0FBRWNBLHFFQUFmIiwiZmlsZSI6Ii4vbGliL3ByaXNtYS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcblxubGV0IHByaXNtYTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xufSBlbHNlIHtcbiAgaWYgKCFnbG9iYWwucHJpc21hKSB7XG4gICAgZ2xvYmFsLnByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbiAgfVxuICBwcmlzbWEgPSBnbG9iYWwucHJpc21hO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwcmlzbWE7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/prisma.js\n");

/***/ }),

/***/ "./pages/api/auth/signin.js":
/*!**********************************!*\
  !*** ./pages/api/auth/signin.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_prisma_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/prisma.js */ \"./lib/prisma.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const {\n    email,\n    finalHash,\n    salt\n  } = req.body;\n  console.log(email);\n  const account = await _lib_prisma_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].account.findUnique({\n    where: {\n      email\n    },\n    select: {\n      passwordHash: true\n    }\n  }); // Salt and hash the server's password hash. Double hash is used\n  // so that we never store raw passwords. The second hash is salted.\n\n  const hash = Object(crypto__WEBPACK_IMPORTED_MODULE_0__[\"createHash\"])('sha256');\n  hash.update(salt + account.passwordHash);\n  const serverFinalHash = hash.digest('hex');\n\n  if (serverFinalHash !== finalHash) {\n    res.status(500);\n  }\n\n  const sessionToken = Object(crypto__WEBPACK_IMPORTED_MODULE_0__[\"randomBytes\"])(64).toString('hex');\n  const accountUpdate = await _lib_prisma_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].account.update({\n    where: {\n      email\n    },\n    data: {\n      sessionToken\n    },\n    select: {\n      id: true,\n      sessionToken: true,\n      following: true\n    }\n  });\n  console.log(accountUpdate);\n  res.json(accountUpdate);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC9zaWduaW4uanM/Mzc3NyJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJlbWFpbCIsImZpbmFsSGFzaCIsInNhbHQiLCJib2R5IiwiY29uc29sZSIsImxvZyIsImFjY291bnQiLCJwcmlzbWEiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJzZWxlY3QiLCJwYXNzd29yZEhhc2giLCJoYXNoIiwiY3JlYXRlSGFzaCIsInVwZGF0ZSIsInNlcnZlckZpbmFsSGFzaCIsImRpZ2VzdCIsInN0YXR1cyIsInNlc3Npb25Ub2tlbiIsInJhbmRvbUJ5dGVzIiwidG9TdHJpbmciLCJhY2NvdW50VXBkYXRlIiwiZGF0YSIsImlkIiwiZm9sbG93aW5nIiwianNvbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR2Usc0VBQU9BLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUNqQyxRQUFNO0FBQUVDLFNBQUY7QUFBU0MsYUFBVDtBQUFvQkM7QUFBcEIsTUFBNkJKLEdBQUcsQ0FBQ0ssSUFBdkM7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlMLEtBQVo7QUFDQSxRQUFNTSxPQUFPLEdBQUcsTUFBTUMsc0RBQU0sQ0FBQ0QsT0FBUCxDQUFlRSxVQUFmLENBQTBCO0FBQy9DQyxTQUFLLEVBQUU7QUFBRVQ7QUFBRixLQUR3QztBQUUvQ1UsVUFBTSxFQUFFO0FBQ1BDLGtCQUFZLEVBQUU7QUFEUDtBQUZ1QyxHQUExQixDQUF0QixDQUhpQyxDQVVqQztBQUNBOztBQUNBLFFBQU1DLElBQUksR0FBR0MseURBQVUsQ0FBQyxRQUFELENBQXZCO0FBQ0FELE1BQUksQ0FBQ0UsTUFBTCxDQUFZWixJQUFJLEdBQUdJLE9BQU8sQ0FBQ0ssWUFBM0I7QUFDQSxRQUFNSSxlQUFlLEdBQUdILElBQUksQ0FBQ0ksTUFBTCxDQUFZLEtBQVosQ0FBeEI7O0FBQ0EsTUFBSUQsZUFBZSxLQUFLZCxTQUF4QixFQUFtQztBQUNsQ0YsT0FBRyxDQUFDa0IsTUFBSixDQUFXLEdBQVg7QUFDQTs7QUFFRCxRQUFNQyxZQUFZLEdBQUdDLDBEQUFXLENBQUMsRUFBRCxDQUFYLENBQWdCQyxRQUFoQixDQUF5QixLQUF6QixDQUFyQjtBQUNBLFFBQU1DLGFBQWEsR0FBRyxNQUFNZCxzREFBTSxDQUFDRCxPQUFQLENBQWVRLE1BQWYsQ0FBc0I7QUFDakRMLFNBQUssRUFBRTtBQUFFVDtBQUFGLEtBRDBDO0FBRWpEc0IsUUFBSSxFQUFFO0FBQUVKO0FBQUYsS0FGMkM7QUFHakRSLFVBQU0sRUFBRTtBQUNQYSxRQUFFLEVBQUUsSUFERztBQUVQTCxrQkFBWSxFQUFFLElBRlA7QUFHTE0sZUFBUyxFQUFFO0FBSE47QUFIeUMsR0FBdEIsQ0FBNUI7QUFTQXBCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZZ0IsYUFBWjtBQUNBdEIsS0FBRyxDQUFDMEIsSUFBSixDQUFTSixhQUFUO0FBQ0QsQ0EvQkQiLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC9zaWduaW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVIYXNoLCByYW5kb21CeXRlcyB9IGZyb20gJ2NyeXB0byc7XG5pbXBvcnQgcHJpc21hIGZyb20gJy4uLy4uLy4uL2xpYi9wcmlzbWEuanMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCB7IGVtYWlsLCBmaW5hbEhhc2gsIHNhbHQgfSA9IHJlcS5ib2R5O1xuICBjb25zb2xlLmxvZyhlbWFpbClcbiAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHByaXNtYS5hY2NvdW50LmZpbmRVbmlxdWUoe1xuICBcdHdoZXJlOiB7IGVtYWlsIH0sXG4gIFx0c2VsZWN0OiB7IFxuICBcdFx0cGFzc3dvcmRIYXNoOiB0cnVlIFxuICBcdH1cbiAgfSk7XG5cbiAgLy8gU2FsdCBhbmQgaGFzaCB0aGUgc2VydmVyJ3MgcGFzc3dvcmQgaGFzaC4gRG91YmxlIGhhc2ggaXMgdXNlZFxuICAvLyBzbyB0aGF0IHdlIG5ldmVyIHN0b3JlIHJhdyBwYXNzd29yZHMuIFRoZSBzZWNvbmQgaGFzaCBpcyBzYWx0ZWQuXG4gIGNvbnN0IGhhc2ggPSBjcmVhdGVIYXNoKCdzaGEyNTYnKTtcbiAgaGFzaC51cGRhdGUoc2FsdCArIGFjY291bnQucGFzc3dvcmRIYXNoKTtcbiAgY29uc3Qgc2VydmVyRmluYWxIYXNoID0gaGFzaC5kaWdlc3QoJ2hleCcpXG4gIGlmIChzZXJ2ZXJGaW5hbEhhc2ggIT09IGZpbmFsSGFzaCkge1xuICBcdHJlcy5zdGF0dXMoNTAwKVxuICB9XG5cbiAgY29uc3Qgc2Vzc2lvblRva2VuID0gcmFuZG9tQnl0ZXMoNjQpLnRvU3RyaW5nKCdoZXgnKVxuICBjb25zdCBhY2NvdW50VXBkYXRlID0gYXdhaXQgcHJpc21hLmFjY291bnQudXBkYXRlKHtcbiAgXHR3aGVyZTogeyBlbWFpbCB9LFxuICBcdGRhdGE6IHsgc2Vzc2lvblRva2VuIH0sXG4gIFx0c2VsZWN0OiB7XG4gIFx0XHRpZDogdHJ1ZSxcbiAgXHRcdHNlc3Npb25Ub2tlbjogdHJ1ZSxcbiAgICAgIGZvbGxvd2luZzogdHJ1ZSxcbiAgICAgfVxuICB9KVxuICBjb25zb2xlLmxvZyhhY2NvdW50VXBkYXRlKVxuICByZXMuanNvbihhY2NvdW50VXBkYXRlKTtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/auth/signin.js\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@prisma/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcHJpc21hL2NsaWVudFwiP2UwMDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQHByaXNtYS9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@prisma/client\n");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjcnlwdG9cIj80Yzc2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImNyeXB0by5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNyeXB0b1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///crypto\n");

/***/ })

/******/ });