webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Programs/Winamp.tsx":
/*!****************************************!*\
  !*** ./components/Programs/Winamp.tsx ***!
  \****************************************/
/*! exports provided: default, loaderOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loaderOptions\", function() { return loaderOptions; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Programs_Winamp_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/Programs/Winamp.module.scss */ \"./styles/Programs/Winamp.module.scss\");\n/* harmony import */ var _styles_Programs_Winamp_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Programs_Winamp_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/elements */ \"./utils/elements.ts\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! path */ \"./node_modules/node-libs-browser/node_modules/path-browserify/index.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_winamp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/winamp */ \"./utils/winamp.ts\");\n/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/events */ \"./utils/events.ts\");\n/* harmony import */ var react_rnd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-rnd */ \"./node_modules/react-rnd/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/dustin/Downloads/x/components/Programs/Winamp.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nvar defaultDimensions = {\n  height: 232,\n  width: 275\n};\n\nvar getWebamp = function getWebamp() {\n  return document.getElementById('webamp');\n};\n\nvar Winamp = function Winamp(_ref) {\n  _s();\n\n  var onBlur = _ref.onBlur,\n      onClose = _ref.onClose,\n      onMinimize = _ref.onMinimize,\n      onFocus = _ref.onFocus,\n      onDrag = _ref.onDrag,\n      zIndex = _ref.zIndex,\n      _ref$file = _ref.file;\n  _ref$file = _ref$file === void 0 ? {} : _ref$file;\n  var _ref$file$url = _ref$file.url,\n      url = _ref$file$url === void 0 ? '' : _ref$file$url,\n      _ref$file$name = _ref$file.name,\n      name = _ref$file$name === void 0 ? '' : _ref$file$name,\n      appUrl = _ref.appUrl;\n  console.log('render appUrl', appUrl);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_10__[\"useState\"])(),\n      webampLib = _useState[0],\n      setWebampLib = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_10__[\"useState\"])(false),\n      closing = _useState2[0],\n      setClosing = _useState2[1];\n\n  var elementRef = Object(react__WEBPACK_IMPORTED_MODULE_10__[\"useRef\"])(null);\n  var dragContainerRef = Object(react__WEBPACK_IMPORTED_MODULE_10__[\"useRef\"])(null);\n\n  var loadWebamp = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n      var _yield$import, WebampConstructor, webamp, _ref3, containerElement;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.t.bind(null, /*! webamp */ \"./node_modules/webamp/built/webamp.bundle.js\", 7));\n\n            case 2:\n              _yield$import = _context.sent;\n              WebampConstructor = _yield$import[\"default\"];\n              webamp = new WebampConstructor(_utils_winamp__WEBPACK_IMPORTED_MODULE_7__[\"webampOptions\"]);\n              _ref3 = elementRef, containerElement = _ref3.current;\n              webamp.onWillClose(function () {\n                return setClosing(true);\n              });\n              if (onMinimize) webamp.onMinimize(onMinimize);\n              Object(_utils_winamp__WEBPACK_IMPORTED_MODULE_7__[\"closeEqualizer\"])(webamp);\n              _context.next = 11;\n              return webamp.renderWhenReady(containerElement);\n\n            case 11:\n              Object(_utils_elements__WEBPACK_IMPORTED_MODULE_5__[\"appendElement\"])(containerElement, getWebamp());\n              Object(_utils_elements__WEBPACK_IMPORTED_MODULE_5__[\"focusResizableElementRef\"])(dragContainerRef);\n              Object(_utils_winamp__WEBPACK_IMPORTED_MODULE_7__[\"loadTrackOrSkin\"])(webamp, url, name);\n              return _context.abrupt(\"return\", webamp);\n\n            case 15:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function loadWebamp() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_10__[\"useEffect\"])(function () {\n    var tryDispose = function tryDispose() {\n      try {\n        webampLib === null || webampLib === void 0 ? void 0 : webampLib.dispose();\n      } catch (_exception) {\n        /* eslint no-empty: off */\n      }\n    };\n\n    loadWebamp().then(function (loadedWebamp) {\n      setWebampLib(loadedWebamp);\n    });\n    return tryDispose;\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_10__[\"useEffect\"])(function () {\n    if (closing) {\n      setClosing(false);\n      onClose();\n    }\n  }, [closing, onClose]);\n  Object(react__WEBPACK_IMPORTED_MODULE_10__[\"useEffect\"])(function () {\n    console.log('appUrl', appUrl);\n\n    if (appUrl && webampLib) {\n      Object(_utils_winamp__WEBPACK_IMPORTED_MODULE_7__[\"loadTrackOrSkin\"])(webampLib, appUrl, Object(path__WEBPACK_IMPORTED_MODULE_6__[\"basename\"])(appUrl));\n    }\n  }, [appUrl, webampLib]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(react_rnd__WEBPACK_IMPORTED_MODULE_9__[\"Rnd\"], {\n    className: _styles_Programs_Winamp_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.winamp,\n    cancel: _utils_winamp__WEBPACK_IMPORTED_MODULE_7__[\"touchControls\"],\n    dragHandleClassName: \"draggable\",\n    enableResizing: false,\n    enableUserSelectHack: false,\n    onBlur: onBlur,\n    onDrag: _utils_events__WEBPACK_IMPORTED_MODULE_8__[\"onTouchEventsOnly\"],\n    onDragStart: _utils_elements__WEBPACK_IMPORTED_MODULE_5__[\"focusOnDrag\"],\n    onDragStop: onDrag,\n    onFocus: onFocus,\n    style: {\n      zIndex: zIndex\n    },\n    ref: dragContainerRef,\n    tabIndex: -1,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"article\", {\n      ref: elementRef\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 94,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Winamp, \"Hit44/tHkbRljAqbTWY5+9GteBA=\");\n\n_c = Winamp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Winamp);\nvar loaderOptions = _objectSpread({\n  windowed: false\n}, defaultDimensions);\n\nvar _c;\n\n$RefreshReg$(_c, \"Winamp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9ncmFtcy9XaW5hbXAudHN4Pzk4NmUiXSwibmFtZXMiOlsiZGVmYXVsdERpbWVuc2lvbnMiLCJoZWlnaHQiLCJ3aWR0aCIsImdldFdlYmFtcCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJXaW5hbXAiLCJvbkJsdXIiLCJvbkNsb3NlIiwib25NaW5pbWl6ZSIsIm9uRm9jdXMiLCJvbkRyYWciLCJ6SW5kZXgiLCJmaWxlIiwidXJsIiwibmFtZSIsImFwcFVybCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VTdGF0ZSIsIndlYmFtcExpYiIsInNldFdlYmFtcExpYiIsImNsb3NpbmciLCJzZXRDbG9zaW5nIiwiZWxlbWVudFJlZiIsInVzZVJlZiIsImRyYWdDb250YWluZXJSZWYiLCJsb2FkV2ViYW1wIiwiV2ViYW1wQ29uc3RydWN0b3IiLCJ3ZWJhbXAiLCJ3ZWJhbXBPcHRpb25zIiwiY29udGFpbmVyRWxlbWVudCIsImN1cnJlbnQiLCJvbldpbGxDbG9zZSIsImNsb3NlRXF1YWxpemVyIiwicmVuZGVyV2hlblJlYWR5IiwiYXBwZW5kRWxlbWVudCIsImZvY3VzUmVzaXphYmxlRWxlbWVudFJlZiIsImxvYWRUcmFja09yU2tpbiIsInVzZUVmZmVjdCIsInRyeURpc3Bvc2UiLCJkaXNwb3NlIiwiX2V4Y2VwdGlvbiIsInRoZW4iLCJsb2FkZWRXZWJhbXAiLCJiYXNlbmFtZSIsInN0eWxlcyIsIndpbmFtcCIsInRvdWNoQ29udHJvbHMiLCJvblRvdWNoRXZlbnRzT25seSIsImZvY3VzT25EcmFnIiwibG9hZGVyT3B0aW9ucyIsIndpbmRvd2VkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFNQTtBQUtBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRztBQUN4QkMsUUFBTSxFQUFFLEdBRGdCO0FBRXhCQyxPQUFLLEVBQUU7QUFG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Q0FBVDtBQU9BK0IsMERBQVMsQ0FBQyxZQUFNO0FBQ2R0QixXQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCRixNQUF0Qjs7QUFDQSxRQUFJQSxNQUFNLElBQUlJLFNBQWQsRUFBeUI7QUFDdkJrQiwyRUFBZSxDQUFDbEIsU0FBRCxFQUFZSixNQUFaLEVBQW9CNkIscURBQVEsQ0FBQzdCLE1BQUQsQ0FBNUIsQ0FBZjtBQUNEO0FBQ0YsR0FMUSxFQUtOLENBQUNBLE1BQUQsRUFBU0ksU0FBVCxDQUxNLENBQVQ7QUFPQSxzQkFDRSxxRUFBQyw2Q0FBRDtBQUNFLGFBQVMsRUFBRTBCLDBFQUFNLENBQUNDLE1BRHBCO0FBRUUsVUFBTSxFQUFFQywyREFGVjtBQUdFLHVCQUFtQixFQUFDLFdBSHRCO0FBSUUsa0JBQWMsRUFBRSxLQUpsQjtBQUtFLHdCQUFvQixFQUFFLEtBTHhCO0FBTUUsVUFBTSxFQUFFekMsTUFOVjtBQU9FLFVBQU0sRUFBRTBDLCtEQVBWO0FBUUUsZUFBVyxFQUFFQywyREFSZjtBQVNFLGNBQVUsRUFBRXZDLE1BVGQ7QUFVRSxXQUFPLEVBQUVELE9BVlg7QUFXRSxTQUFLLEVBQUU7QUFBRUUsWUFBTSxFQUFOQTtBQUFGLEtBWFQ7QUFZRSxPQUFHLEVBQUVjLGdCQVpQO0FBYUUsWUFBUSxFQUFFLENBQUMsQ0FiYjtBQUFBLDJCQWVFO0FBQVMsU0FBRyxFQUFFRjtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFtQkQsQ0FsRkQ7O0dBQU1sQixNOztLQUFBQSxNO0FBb0ZTQSxxRUFBZjtBQUVPLElBQU02QyxhQUFhO0FBQ3hCQyxVQUFRLEVBQUU7QUFEYyxHQUVyQnBELGlCQUZxQixDQUFuQiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvZ3JhbXMvV2luYW1wLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvUHJvZ3JhbXMvV2luYW1wLm1vZHVsZS5zY3NzJztcblxuaW1wb3J0IHR5cGUgV2ViYW1wIGZyb20gJ3dlYmFtcCc7XG5pbXBvcnQgdHlwZSB7IEFwcENvbXBvbmVudCB9IGZyb20gJ0AvdHlwZXMvdXRpbHMvcHJvZ3JhbXMnO1xuaW1wb3J0IHR5cGUgeyBXZWJhbXBTdG9yZSB9IGZyb20gJ0AvdHlwZXMvY29tcG9uZW50cy9Qcm9ncmFtcy93aW5hbXAnO1xuXG5pbXBvcnQge1xuICBhcHBlbmRFbGVtZW50LFxuICBmb2N1c09uRHJhZyxcbiAgZm9jdXNSZXNpemFibGVFbGVtZW50UmVmXG59IGZyb20gJ0AvdXRpbHMvZWxlbWVudHMnO1xuaW1wb3J0IHsgYmFzZW5hbWUgfSBmcm9tICdwYXRoJztcbmltcG9ydCB7XG4gIGNsb3NlRXF1YWxpemVyLFxuICBsb2FkVHJhY2tPclNraW4sXG4gIHRvdWNoQ29udHJvbHMsXG4gIHdlYmFtcE9wdGlvbnNcbn0gZnJvbSAnQC91dGlscy93aW5hbXAnO1xuaW1wb3J0IHsgb25Ub3VjaEV2ZW50c09ubHkgfSBmcm9tICdAL3V0aWxzL2V2ZW50cyc7XG5pbXBvcnQgeyBSbmQgfSBmcm9tICdyZWFjdC1ybmQnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBkZWZhdWx0RGltZW5zaW9ucyA9IHtcbiAgaGVpZ2h0OiAyMzIsXG4gIHdpZHRoOiAyNzVcbn07XG5cbmNvbnN0IGdldFdlYmFtcCA9ICgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWJhbXAnKSBhcyBIVE1MRGl2RWxlbWVudDtcblxuY29uc3QgV2luYW1wOiBSZWFjdC5GQzxBcHBDb21wb25lbnQ+ID0gKHtcbiAgb25CbHVyLFxuICBvbkNsb3NlLFxuICBvbk1pbmltaXplLFxuICBvbkZvY3VzLFxuICBvbkRyYWcsXG4gIHpJbmRleCxcbiAgZmlsZTogeyB1cmwgPSAnJywgbmFtZSA9ICcnIH0gPSB7fSxcbiAgYXBwVXJsXG59KSA9PiB7XG4gIGNvbnNvbGUubG9nKCdyZW5kZXIgYXBwVXJsJywgYXBwVXJsKVxuICBjb25zdCBbd2ViYW1wTGliLCBzZXRXZWJhbXBMaWJdID0gdXNlU3RhdGU8V2ViYW1wICYgV2ViYW1wU3RvcmU+KCk7XG4gIGNvbnN0IFtjbG9zaW5nLCBzZXRDbG9zaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgZWxlbWVudFJlZiA9IHVzZVJlZjxIVE1MRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGRyYWdDb250YWluZXJSZWYgPSB1c2VSZWY8Um5kPihudWxsKTtcbiAgY29uc3QgbG9hZFdlYmFtcCA9IGFzeW5jICgpOiBQcm9taXNlPFdlYmFtcCAmIFdlYmFtcFN0b3JlPiA9PiB7XG4gICAgY29uc3QgeyBkZWZhdWx0OiBXZWJhbXBDb25zdHJ1Y3RvciB9ID0gYXdhaXQgaW1wb3J0KCd3ZWJhbXAnKTtcbiAgICBjb25zdCB3ZWJhbXAgPSBuZXcgV2ViYW1wQ29uc3RydWN0b3Iod2ViYW1wT3B0aW9ucykgYXMgV2ViYW1wICYgV2ViYW1wU3RvcmU7XG4gICAgY29uc3QgeyBjdXJyZW50OiBjb250YWluZXJFbGVtZW50IH0gPSBlbGVtZW50UmVmIGFzIHtcbiAgICAgIGN1cnJlbnQ6IEhUTUxFbGVtZW50O1xuICAgIH07XG5cbiAgICB3ZWJhbXAub25XaWxsQ2xvc2UoKCkgPT4gc2V0Q2xvc2luZyh0cnVlKSk7XG4gICAgaWYgKG9uTWluaW1pemUpIHdlYmFtcC5vbk1pbmltaXplKG9uTWluaW1pemUpO1xuICAgIGNsb3NlRXF1YWxpemVyKHdlYmFtcCk7XG4gICAgYXdhaXQgd2ViYW1wLnJlbmRlcldoZW5SZWFkeShjb250YWluZXJFbGVtZW50KTtcbiAgICBhcHBlbmRFbGVtZW50KGNvbnRhaW5lckVsZW1lbnQsIGdldFdlYmFtcCgpKTtcbiAgICBmb2N1c1Jlc2l6YWJsZUVsZW1lbnRSZWYoZHJhZ0NvbnRhaW5lclJlZik7XG4gICAgbG9hZFRyYWNrT3JTa2luKHdlYmFtcCwgdXJsLCBuYW1lKTtcblxuICAgIHJldHVybiB3ZWJhbXA7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0cnlEaXNwb3NlID0gKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgd2ViYW1wTGliPy5kaXNwb3NlKCk7XG4gICAgICB9IGNhdGNoIChfZXhjZXB0aW9uKSB7XG4gICAgICAgIC8qIGVzbGludCBuby1lbXB0eTogb2ZmICovXG4gICAgICB9XG4gICAgfTtcblxuICAgIGxvYWRXZWJhbXAoKS50aGVuKChsb2FkZWRXZWJhbXApID0+IHtcbiAgICAgIHNldFdlYmFtcExpYihsb2FkZWRXZWJhbXApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRyeURpc3Bvc2U7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjbG9zaW5nKSB7XG4gICAgICBzZXRDbG9zaW5nKGZhbHNlKTtcbiAgICAgIG9uQ2xvc2UoKTtcbiAgICB9XG4gIH0sIFtjbG9zaW5nLCBvbkNsb3NlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnYXBwVXJsJywgYXBwVXJsKTtcbiAgICBpZiAoYXBwVXJsICYmIHdlYmFtcExpYikge1xuICAgICAgbG9hZFRyYWNrT3JTa2luKHdlYmFtcExpYiwgYXBwVXJsLCBiYXNlbmFtZShhcHBVcmwpKTtcbiAgICB9XG4gIH0sIFthcHBVcmwsIHdlYmFtcExpYl0pO1xuXG4gIHJldHVybiAoXG4gICAgPFJuZFxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMud2luYW1wfVxuICAgICAgY2FuY2VsPXt0b3VjaENvbnRyb2xzfVxuICAgICAgZHJhZ0hhbmRsZUNsYXNzTmFtZT1cImRyYWdnYWJsZVwiXG4gICAgICBlbmFibGVSZXNpemluZz17ZmFsc2V9XG4gICAgICBlbmFibGVVc2VyU2VsZWN0SGFjaz17ZmFsc2V9XG4gICAgICBvbkJsdXI9e29uQmx1cn1cbiAgICAgIG9uRHJhZz17b25Ub3VjaEV2ZW50c09ubHl9XG4gICAgICBvbkRyYWdTdGFydD17Zm9jdXNPbkRyYWd9XG4gICAgICBvbkRyYWdTdG9wPXtvbkRyYWd9XG4gICAgICBvbkZvY3VzPXtvbkZvY3VzfVxuICAgICAgc3R5bGU9e3sgekluZGV4IH19XG4gICAgICByZWY9e2RyYWdDb250YWluZXJSZWZ9XG4gICAgICB0YWJJbmRleD17LTF9XG4gICAgPlxuICAgICAgPGFydGljbGUgcmVmPXtlbGVtZW50UmVmfSAvPlxuICAgIDwvUm5kPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV2luYW1wO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyT3B0aW9ucyA9IHtcbiAgd2luZG93ZWQ6IGZhbHNlLFxuICAuLi5kZWZhdWx0RGltZW5zaW9uc1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Programs/Winamp.tsx\n");

/***/ })

})