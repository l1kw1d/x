webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Programs/Winamp.tsx":
/*!****************************************!*\
  !*** ./components/Programs/Winamp.tsx ***!
  \****************************************/
/*! exports provided: default, loaderOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loaderOptions\", function() { return loaderOptions; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Programs_Winamp_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/Programs/Winamp.module.scss */ \"./styles/Programs/Winamp.module.scss\");\n/* harmony import */ var _styles_Programs_Winamp_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Programs_Winamp_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/elements */ \"./utils/elements.ts\");\n/* harmony import */ var _utils_winamp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/winamp */ \"./utils/winamp.ts\");\n/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/events */ \"./utils/events.ts\");\n/* harmony import */ var react_rnd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-rnd */ \"./node_modules/react-rnd/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/dustin/Downloads/x/components/Programs/Winamp.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nvar defaultDimensions = {\n  height: 232,\n  width: 275\n};\n\nvar getWebamp = function getWebamp() {\n  return document.getElementById('webamp');\n};\n\nvar Winamp = function Winamp(_ref) {\n  _s();\n\n  var onBlur = _ref.onBlur,\n      onClose = _ref.onClose,\n      onMinimize = _ref.onMinimize,\n      onFocus = _ref.onFocus,\n      onDrag = _ref.onDrag,\n      zIndex = _ref.zIndex,\n      _ref$file = _ref.file;\n  _ref$file = _ref$file === void 0 ? {} : _ref$file;\n  var _ref$file$url = _ref$file.url,\n      url = _ref$file$url === void 0 ? '' : _ref$file$url,\n      _ref$file$name = _ref$file.name,\n      name = _ref$file$name === void 0 ? '' : _ref$file$name,\n      testName = _ref.name;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useState\"])(),\n      webampLib = _useState[0],\n      setWebampLib = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useState\"])(false),\n      closing = _useState2[0],\n      setClosing = _useState2[1];\n\n  var elementRef = Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useRef\"])(null);\n  var dragContainerRef = Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useRef\"])(null);\n\n  var loadWebamp = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n      var _yield$import, WebampConstructor, webamp, _ref3, containerElement;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.t.bind(null, /*! webamp */ \"./node_modules/webamp/built/webamp.bundle.js\", 7));\n\n            case 2:\n              _yield$import = _context.sent;\n              WebampConstructor = _yield$import[\"default\"];\n              webamp = new WebampConstructor(_utils_winamp__WEBPACK_IMPORTED_MODULE_6__[\"webampOptions\"]);\n              _ref3 = elementRef, containerElement = _ref3.current;\n              webamp.onWillClose(function () {\n                return setClosing(true);\n              });\n              if (onMinimize) webamp.onMinimize(onMinimize);\n              Object(_utils_winamp__WEBPACK_IMPORTED_MODULE_6__[\"closeEqualizer\"])(webamp);\n              _context.next = 11;\n              return webamp.renderWhenReady(containerElement);\n\n            case 11:\n              Object(_utils_elements__WEBPACK_IMPORTED_MODULE_5__[\"appendElement\"])(containerElement, getWebamp());\n              Object(_utils_elements__WEBPACK_IMPORTED_MODULE_5__[\"focusResizableElementRef\"])(dragContainerRef);\n              Object(_utils_winamp__WEBPACK_IMPORTED_MODULE_6__[\"loadTrackOrSkin\"])(webamp, url, name);\n              return _context.abrupt(\"return\", webamp);\n\n            case 15:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function loadWebamp() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useEffect\"])(function () {\n    var tryDispose = function tryDispose() {\n      try {\n        webampLib === null || webampLib === void 0 ? void 0 : webampLib.dispose();\n      } catch (_exception) {\n        /* eslint no-empty: off */\n      }\n    };\n\n    loadWebamp().then(function (loadedWebamp) {\n      setWebampLib(loadedWebamp);\n    });\n    return tryDispose;\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useEffect\"])(function () {\n    if (closing) {\n      setClosing(false);\n      onClose();\n    }\n  }, [closing, onClose]); // useEffect(() => {\n  //   console.log('appUrl', appUrl);\n  //   if (appUrl && webampLib) {\n  //     loadTrackOrSkin(webampLib, appUrl, basename(appUrl));\n  //   }\n  // }, [appUrl, webampLib]);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(react_rnd__WEBPACK_IMPORTED_MODULE_8__[\"Rnd\"], {\n    className: _styles_Programs_Winamp_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.winamp,\n    cancel: _utils_winamp__WEBPACK_IMPORTED_MODULE_6__[\"touchControls\"],\n    dragHandleClassName: \"draggable\",\n    enableResizing: false,\n    enableUserSelectHack: false,\n    onBlur: onBlur,\n    onDrag: _utils_events__WEBPACK_IMPORTED_MODULE_7__[\"onTouchEventsOnly\"],\n    onDragStart: _utils_elements__WEBPACK_IMPORTED_MODULE_5__[\"focusOnDrag\"],\n    onDragStop: onDrag,\n    onFocus: onFocus,\n    style: {\n      zIndex: zIndex\n    },\n    ref: dragContainerRef,\n    tabIndex: -1,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"article\", {\n      ref: elementRef\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 93,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Winamp, \"1EYgzKWTOcIunHjKpWARI60uakI=\");\n\n_c = Winamp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Winamp);\nvar loaderOptions = _objectSpread({\n  windowed: false\n}, defaultDimensions);\n\nvar _c;\n\n$RefreshReg$(_c, \"Winamp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9ncmFtcy9XaW5hbXAudHN4Pzk4NmUiXSwibmFtZXMiOlsiZGVmYXVsdERpbWVuc2lvbnMiLCJoZWlnaHQiLCJ3aWR0aCIsImdldFdlYmFtcCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJXaW5hbXAiLCJvbkJsdXIiLCJvbkNsb3NlIiwib25NaW5pbWl6ZSIsIm9uRm9jdXMiLCJvbkRyYWciLCJ6SW5kZXgiLCJmaWxlIiwidXJsIiwibmFtZSIsInRlc3ROYW1lIiwidXNlU3RhdGUiLCJ3ZWJhbXBMaWIiLCJzZXRXZWJhbXBMaWIiLCJjbG9zaW5nIiwic2V0Q2xvc2luZyIsImVsZW1lbnRSZWYiLCJ1c2VSZWYiLCJkcmFnQ29udGFpbmVyUmVmIiwibG9hZFdlYmFtcCIsIldlYmFtcENvbnN0cnVjdG9yIiwid2ViYW1wIiwid2ViYW1wT3B0aW9ucyIsImNvbnRhaW5lckVsZW1lbnQiLCJjdXJyZW50Iiwib25XaWxsQ2xvc2UiLCJjbG9zZUVxdWFsaXplciIsInJlbmRlcldoZW5SZWFkeSIsImFwcGVuZEVsZW1lbnQiLCJmb2N1c1Jlc2l6YWJsZUVsZW1lbnRSZWYiLCJsb2FkVHJhY2tPclNraW4iLCJ1c2VFZmZlY3QiLCJ0cnlEaXNwb3NlIiwiZGlzcG9zZSIsIl9leGNlcHRpb24iLCJ0aGVuIiwibG9hZGVkV2ViYW1wIiwic3R5bGVzIiwid2luYW1wIiwidG91Y2hDb250cm9scyIsIm9uVG91Y2hFdmVudHNPbmx5IiwiZm9jdXNPbkRyYWciLCJsb2FkZXJPcHRpb25zIiwid2luZG93ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFNQTtBQU1BO0FBTUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsaUJBQWlCLEdBQUc7QUFDeEJDLFFBQU0sRUFBRSxHQURnQjtBQUV4QkMsT0FBSyxFQUFFO0FBRmlCLENBQTFCOztBQUtBLElBQU1DLFNBQVMsR0FBRyxT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QUFFbUMsMEVBQU0sQ0FBQ0MsTUFEcEI7QUFFRSxVQUFNLEVBQUVDLDJEQUZWO0FBR0UsdUJBQW1CLEVBQUMsV0FIdEI7QUFJRSxrQkFBYyxFQUFFLEtBSmxCO0FBS0Usd0JBQW9CLEVBQUUsS0FMeEI7QUFNRSxVQUFNLEVBQUV0QyxNQU5WO0FBT0UsVUFBTSxFQUFFdUMsK0RBUFY7QUFRRSxlQUFXLEVBQUVDLDJEQVJmO0FBU0UsY0FBVSxFQUFFcEMsTUFUZDtBQVVFLFdBQU8sRUFBRUQsT0FWWDtBQVdFLFNBQUssRUFBRTtBQUFFRSxZQUFNLEVBQU5BO0FBQUYsS0FYVDtBQVlFLE9BQUcsRUFBRVksZ0JBWlA7QUFhRSxZQUFRLEVBQUUsQ0FBQyxDQWJiO0FBQUEsMkJBZUU7QUFBUyxTQUFHLEVBQUVGO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW1CRCxDQWpGRDs7R0FBTWhCLE07O0tBQUFBLE07QUFtRlNBLHFFQUFmO0FBRU8sSUFBTTBDLGFBQWE7QUFDeEJDLFVBQVEsRUFBRTtBQURjLEdBRXJCakQsaUJBRnFCLENBQW5CIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qcm9ncmFtcy9XaW5hbXAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9Qcm9ncmFtcy9XaW5hbXAubW9kdWxlLnNjc3MnO1xuXG5pbXBvcnQgdHlwZSBXZWJhbXAgZnJvbSAnd2ViYW1wJztcbmltcG9ydCB0eXBlIHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnQC90eXBlcy91dGlscy9wcm9ncmFtcyc7XG5pbXBvcnQgdHlwZSB7IFdlYmFtcFN0b3JlIH0gZnJvbSAnQC90eXBlcy9jb21wb25lbnRzL1Byb2dyYW1zL3dpbmFtcCc7XG5cbmltcG9ydCB7XG4gIGFwcGVuZEVsZW1lbnQsXG4gIGZvY3VzT25EcmFnLFxuICBmb2N1c1Jlc2l6YWJsZUVsZW1lbnRSZWZcbn0gZnJvbSAnQC91dGlscy9lbGVtZW50cyc7XG5pbXBvcnQgeyBiYXNlbmFtZSB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IHtcbiAgY2xvc2VFcXVhbGl6ZXIsXG4gIGxvYWRUcmFja09yU2tpbixcbiAgdG91Y2hDb250cm9scyxcbiAgd2ViYW1wT3B0aW9uc1xufSBmcm9tICdAL3V0aWxzL3dpbmFtcCc7XG5pbXBvcnQgeyBvblRvdWNoRXZlbnRzT25seSB9IGZyb20gJ0AvdXRpbHMvZXZlbnRzJztcbmltcG9ydCB7IFJuZCB9IGZyb20gJ3JlYWN0LXJuZCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGRlZmF1bHREaW1lbnNpb25zID0ge1xuICBoZWlnaHQ6IDIzMixcbiAgd2lkdGg6IDI3NVxufTtcblxuY29uc3QgZ2V0V2ViYW1wID0gKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYmFtcCcpIGFzIEhUTUxEaXZFbGVtZW50O1xuXG5jb25zdCBXaW5hbXA6IFJlYWN0LkZDPEFwcENvbXBvbmVudD4gPSAoe1xuICBvbkJsdXIsXG4gIG9uQ2xvc2UsXG4gIG9uTWluaW1pemUsXG4gIG9uRm9jdXMsXG4gIG9uRHJhZyxcbiAgekluZGV4LFxuICBmaWxlOiB7IHVybCA9ICcnLCBuYW1lID0gJycgfSA9IHt9LFxuICBuYW1lOiB0ZXN0TmFtZVxufSkgPT4ge1xuICBjb25zdCBbd2ViYW1wTGliLCBzZXRXZWJhbXBMaWJdID0gdXNlU3RhdGU8V2ViYW1wICYgV2ViYW1wU3RvcmU+KCk7XG4gIGNvbnN0IFtjbG9zaW5nLCBzZXRDbG9zaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgZWxlbWVudFJlZiA9IHVzZVJlZjxIVE1MRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGRyYWdDb250YWluZXJSZWYgPSB1c2VSZWY8Um5kPihudWxsKTtcbiAgY29uc3QgbG9hZFdlYmFtcCA9IGFzeW5jICgpOiBQcm9taXNlPFdlYmFtcCAmIFdlYmFtcFN0b3JlPiA9PiB7XG4gICAgY29uc3QgeyBkZWZhdWx0OiBXZWJhbXBDb25zdHJ1Y3RvciB9ID0gYXdhaXQgaW1wb3J0KCd3ZWJhbXAnKTtcbiAgICBjb25zdCB3ZWJhbXAgPSBuZXcgV2ViYW1wQ29uc3RydWN0b3Iod2ViYW1wT3B0aW9ucykgYXMgV2ViYW1wICYgV2ViYW1wU3RvcmU7XG4gICAgY29uc3QgeyBjdXJyZW50OiBjb250YWluZXJFbGVtZW50IH0gPSBlbGVtZW50UmVmIGFzIHtcbiAgICAgIGN1cnJlbnQ6IEhUTUxFbGVtZW50O1xuICAgIH07XG5cbiAgICB3ZWJhbXAub25XaWxsQ2xvc2UoKCkgPT4gc2V0Q2xvc2luZyh0cnVlKSk7XG4gICAgaWYgKG9uTWluaW1pemUpIHdlYmFtcC5vbk1pbmltaXplKG9uTWluaW1pemUpO1xuICAgIGNsb3NlRXF1YWxpemVyKHdlYmFtcCk7XG4gICAgYXdhaXQgd2ViYW1wLnJlbmRlcldoZW5SZWFkeShjb250YWluZXJFbGVtZW50KTtcbiAgICBhcHBlbmRFbGVtZW50KGNvbnRhaW5lckVsZW1lbnQsIGdldFdlYmFtcCgpKTtcbiAgICBmb2N1c1Jlc2l6YWJsZUVsZW1lbnRSZWYoZHJhZ0NvbnRhaW5lclJlZik7XG4gICAgbG9hZFRyYWNrT3JTa2luKHdlYmFtcCwgdXJsLCBuYW1lKTtcblxuICAgIHJldHVybiB3ZWJhbXA7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0cnlEaXNwb3NlID0gKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgd2ViYW1wTGliPy5kaXNwb3NlKCk7XG4gICAgICB9IGNhdGNoIChfZXhjZXB0aW9uKSB7XG4gICAgICAgIC8qIGVzbGludCBuby1lbXB0eTogb2ZmICovXG4gICAgICB9XG4gICAgfTtcblxuICAgIGxvYWRXZWJhbXAoKS50aGVuKChsb2FkZWRXZWJhbXApID0+IHtcbiAgICAgIHNldFdlYmFtcExpYihsb2FkZWRXZWJhbXApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRyeURpc3Bvc2U7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjbG9zaW5nKSB7XG4gICAgICBzZXRDbG9zaW5nKGZhbHNlKTtcbiAgICAgIG9uQ2xvc2UoKTtcbiAgICB9XG4gIH0sIFtjbG9zaW5nLCBvbkNsb3NlXSk7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBjb25zb2xlLmxvZygnYXBwVXJsJywgYXBwVXJsKTtcbiAgLy8gICBpZiAoYXBwVXJsICYmIHdlYmFtcExpYikge1xuICAvLyAgICAgbG9hZFRyYWNrT3JTa2luKHdlYmFtcExpYiwgYXBwVXJsLCBiYXNlbmFtZShhcHBVcmwpKTtcbiAgLy8gICB9XG4gIC8vIH0sIFthcHBVcmwsIHdlYmFtcExpYl0pO1xuXG4gIHJldHVybiAoXG4gICAgPFJuZFxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMud2luYW1wfVxuICAgICAgY2FuY2VsPXt0b3VjaENvbnRyb2xzfVxuICAgICAgZHJhZ0hhbmRsZUNsYXNzTmFtZT1cImRyYWdnYWJsZVwiXG4gICAgICBlbmFibGVSZXNpemluZz17ZmFsc2V9XG4gICAgICBlbmFibGVVc2VyU2VsZWN0SGFjaz17ZmFsc2V9XG4gICAgICBvbkJsdXI9e29uQmx1cn1cbiAgICAgIG9uRHJhZz17b25Ub3VjaEV2ZW50c09ubHl9XG4gICAgICBvbkRyYWdTdGFydD17Zm9jdXNPbkRyYWd9XG4gICAgICBvbkRyYWdTdG9wPXtvbkRyYWd9XG4gICAgICBvbkZvY3VzPXtvbkZvY3VzfVxuICAgICAgc3R5bGU9e3sgekluZGV4IH19XG4gICAgICByZWY9e2RyYWdDb250YWluZXJSZWZ9XG4gICAgICB0YWJJbmRleD17LTF9XG4gICAgPlxuICAgICAgPGFydGljbGUgcmVmPXtlbGVtZW50UmVmfSAvPlxuICAgIDwvUm5kPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV2luYW1wO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyT3B0aW9ucyA9IHtcbiAgd2luZG93ZWQ6IGZhbHNlLFxuICAuLi5kZWZhdWx0RGltZW5zaW9uc1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Programs/Winamp.tsx\n");

/***/ })

})