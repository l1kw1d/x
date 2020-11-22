webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/processmanager.ts":
/*!*********************************!*\
  !*** ./utils/processmanager.ts ***!
  \*********************************/
/*! exports provided: processReducer, close, maximize, minimize, open, load, position, restore, size, taskbarElement, title */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"processReducer\", function() { return processReducer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"close\", function() { return close; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"maximize\", function() { return maximize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"minimize\", function() { return minimize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"open\", function() { return open; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"load\", function() { return load; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"position\", function() { return position; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"restore\", function() { return restore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"size\", function() { return size; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"taskbarElement\", function() { return taskbarElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"title\", function() { return title; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _utils_programs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/programs */ \"./utils/programs.ts\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"./node_modules/node-libs-browser/node_modules/path-browserify/index.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_file__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/file */ \"./utils/file.ts\");\n/* harmony import */ var _utils_process__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/process */ \"./utils/process.ts\");\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar addProcess = function addProcess(process, processes) {\n  var previousState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n  return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(processes), [_objectSpread(_objectSpread({}, process), previousState)]);\n};\n\nvar removeProcess = function removeProcess(id, processes) {\n  return processes.filter(function (process) {\n    return process.id !== id;\n  });\n};\n\nvar updateProcess = function updateProcess(id, updates, processes) {\n  return processes.map(function (process) {\n    return process.id === id ? _objectSpread(_objectSpread({}, process), updates) : process;\n  });\n};\n\nvar processReducer = function processReducer(processes, _ref) {\n  var id = _ref.id,\n      process = _ref.process,\n      updates = _ref.updates,\n      previousState = _ref.previousState;\n  if (id && updates) return updateProcess(id, updates, processes);\n  if (process) return addProcess(process, processes, previousState);\n  if (id) return removeProcess(id, processes);\n  return processes;\n};\nvar close = function close(updateProcesses) {\n  return function (id) {\n    return updateProcesses({\n      id: id\n    });\n  };\n};\nvar maximize = function maximize(updateProcesses) {\n  return function (id) {\n    return updateProcesses({\n      updates: {\n        maximized: true\n      },\n      id: id\n    });\n  };\n};\nvar minimize = function minimize(updateProcesses) {\n  return function (id) {\n    return updateProcesses({\n      updates: {\n        minimized: true\n      },\n      id: id\n    });\n  };\n};\nvar open = function open(processes, updateProcesses) {\n  return function (appFile, previousState, launchElement) {\n    var icon = appFile.icon,\n        name = appFile.name,\n        appName = appFile.appName;\n    var existingProcessId = Object(_utils_process__WEBPACK_IMPORTED_MODULE_5__[\"getProcessId\"])(appName || name);\n    console.log('appFile', existingProcessId);\n    console.log('existingProcessId', existingProcessId);\n    if (processes.find(function (_ref2) {\n      var processId = _ref2.id;\n      return processId === existingProcessId;\n    })) // TODO: If was from appName then update process with url and name as filename\n      // - Then I wont need icon for opening files?\n      return existingProcessId;\n    var loader = Object(_utils_programs__WEBPACK_IMPORTED_MODULE_2__[\"appLoader\"])(appFile);\n    console.log('loader', loader);\n\n    if (loader) {\n      var process = new _utils_process__WEBPACK_IMPORTED_MODULE_5__[\"Process\"](_objectSpread({\n        loader: loader,\n        icon: icon,\n        name: name,\n        launchElement: launchElement\n      }, loader.loaderOptions));\n      updateProcesses({\n        process: process,\n        previousState: previousState\n      });\n      return process.id;\n    }\n\n    return '';\n  };\n};\nvar load = function load(processes, updateProcesses) {\n  return function (file, previousState, launchElement) {\n    return new Promise(function (resolve) {\n      var fileReader = new FileReader();\n      fileReader.addEventListener('loadend', function () {\n        var url = URL.createObjectURL(new Blob([new Uint8Array(fileReader.result)]));\n        var ext = Object(path__WEBPACK_IMPORTED_MODULE_3__[\"extname\"])(file.name).toLowerCase();\n        resolve(open(processes, updateProcesses)({\n          icon: Object(_utils_file__WEBPACK_IMPORTED_MODULE_4__[\"getFileIcon\"])('', ext),\n          name: Object(path__WEBPACK_IMPORTED_MODULE_3__[\"basename\"])(file.name, ext),\n          ext: ext,\n          url: url\n        }, previousState, launchElement));\n      });\n      fileReader.readAsArrayBuffer(file);\n    });\n  };\n};\nvar position = function position(updateProcesses) {\n  return function (id) {\n    return function (_event, _ref3) {\n      var x = _ref3.x,\n          y = _ref3.y;\n      return updateProcesses({\n        id: id,\n        updates: {\n          x: x,\n          y: y\n        }\n      });\n    };\n  };\n};\nvar restore = function restore(updateProcesses) {\n  return function (id, key) {\n    return updateProcesses({\n      updates: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, key, false),\n      id: id\n    });\n  };\n};\nvar size = function size(updateProcesses) {\n  return function (id) {\n    return function (_event, _direction, _ref4, _delta, _ref5) {\n      var width = _ref4.offsetWidth,\n          height = _ref4.offsetHeight;\n      var x = _ref5.x,\n          y = _ref5.y;\n      return updateProcesses({\n        id: id,\n        updates: {\n          height: height,\n          width: width,\n          x: x,\n          y: y\n        }\n      });\n    };\n  };\n};\nvar taskbarElement = function taskbarElement(updateProcesses) {\n  return function (id, element) {\n    updateProcesses({\n      updates: {\n        taskbarElement: element\n      },\n      id: id\n    });\n  };\n};\nvar title = function title(updateProcesses) {\n  return function (id) {\n    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n    return updateProcesses({\n      updates: {\n        name: name\n      },\n      id: id\n    });\n  };\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvcHJvY2Vzc21hbmFnZXIudHM/ZDgzNSJdLCJuYW1lcyI6WyJhZGRQcm9jZXNzIiwicHJvY2VzcyIsInByb2Nlc3NlcyIsInByZXZpb3VzU3RhdGUiLCJyZW1vdmVQcm9jZXNzIiwiaWQiLCJmaWx0ZXIiLCJ1cGRhdGVQcm9jZXNzIiwidXBkYXRlcyIsIm1hcCIsInByb2Nlc3NSZWR1Y2VyIiwiY2xvc2UiLCJ1cGRhdGVQcm9jZXNzZXMiLCJtYXhpbWl6ZSIsIm1heGltaXplZCIsIm1pbmltaXplIiwibWluaW1pemVkIiwib3BlbiIsImFwcEZpbGUiLCJsYXVuY2hFbGVtZW50IiwiaWNvbiIsIm5hbWUiLCJhcHBOYW1lIiwiZXhpc3RpbmdQcm9jZXNzSWQiLCJnZXRQcm9jZXNzSWQiLCJjb25zb2xlIiwibG9nIiwiZmluZCIsInByb2Nlc3NJZCIsImxvYWRlciIsImFwcExvYWRlciIsIlByb2Nlc3MiLCJsb2FkZXJPcHRpb25zIiwibG9hZCIsImZpbGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImZpbGVSZWFkZXIiLCJGaWxlUmVhZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInVybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIkJsb2IiLCJVaW50OEFycmF5IiwicmVzdWx0IiwiZXh0IiwiZXh0bmFtZSIsInRvTG93ZXJDYXNlIiwiZ2V0RmlsZUljb24iLCJiYXNlbmFtZSIsInJlYWRBc0FycmF5QnVmZmVyIiwicG9zaXRpb24iLCJfZXZlbnQiLCJ4IiwieSIsInJlc3RvcmUiLCJrZXkiLCJzaXplIiwiX2RpcmVjdGlvbiIsIl9kZWx0YSIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJ0YXNrYmFyRWxlbWVudCIsImVsZW1lbnQiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFV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eUM7QUFBQSxHQUE5QztBQUFBLENBQWQiLCJmaWxlIjoiLi91dGlscy9wcm9jZXNzbWFuYWdlci50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBwRmlsZSB9IGZyb20gJ0AvdHlwZXMvdXRpbHMvcHJvZ3JhbXMnO1xuaW1wb3J0IHR5cGUgeyBEaXNwYXRjaCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIHsgUm5kRHJhZ0NhbGxiYWNrLCBSbmRSZXNpemVDYWxsYmFjayB9IGZyb20gJ3JlYWN0LXJuZCc7XG5pbXBvcnQgdHlwZSB7XG4gIFByb2Nlc3NBY3Rpb24sXG4gIFByb2Nlc3NlcyxcbiAgUHJvY2Vzc1N0YXRlXG59IGZyb20gJ0AvdHlwZXMvdXRpbHMvcHJvY2Vzc21hbmFnZXInO1xuXG5pbXBvcnQgeyBhcHBMb2FkZXIgfSBmcm9tICdAL3V0aWxzL3Byb2dyYW1zJztcbmltcG9ydCB7IGJhc2VuYW1lLCBleHRuYW1lIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBnZXRGaWxlSWNvbiB9IGZyb20gJ0AvdXRpbHMvZmlsZSc7XG5pbXBvcnQgeyBnZXRQcm9jZXNzSWQsIFByb2Nlc3MgfSBmcm9tICdAL3V0aWxzL3Byb2Nlc3MnO1xuXG5jb25zdCBhZGRQcm9jZXNzID0gKFxuICBwcm9jZXNzOiBQcm9jZXNzLFxuICBwcm9jZXNzZXM6IFByb2Nlc3NlcyxcbiAgcHJldmlvdXNTdGF0ZTogUHJvY2Vzc1N0YXRlID0ge31cbik6IFByb2Nlc3NlcyA9PiBbLi4ucHJvY2Vzc2VzLCB7IC4uLnByb2Nlc3MsIC4uLnByZXZpb3VzU3RhdGUgfV07XG5cbmNvbnN0IHJlbW92ZVByb2Nlc3MgPSAoaWQ6IHN0cmluZywgcHJvY2Vzc2VzOiBQcm9jZXNzZXMpOiBQcm9jZXNzZXMgPT5cbiAgcHJvY2Vzc2VzLmZpbHRlcigocHJvY2VzcykgPT4gcHJvY2Vzcy5pZCAhPT0gaWQpO1xuXG5jb25zdCB1cGRhdGVQcm9jZXNzID0gKFxuICBpZDogc3RyaW5nLFxuICB1cGRhdGVzOiBQcm9jZXNzU3RhdGUsXG4gIHByb2Nlc3NlczogUHJvY2Vzc2VzXG4pOiBQcm9jZXNzZXMgPT5cbiAgcHJvY2Vzc2VzLm1hcCgocHJvY2VzcykgPT5cbiAgICBwcm9jZXNzLmlkID09PSBpZCA/IHsgLi4ucHJvY2VzcywgLi4udXBkYXRlcyB9IDogcHJvY2Vzc1xuICApO1xuXG5leHBvcnQgY29uc3QgcHJvY2Vzc1JlZHVjZXIgPSAoXG4gIHByb2Nlc3NlczogUHJvY2Vzc2VzLFxuICB7IGlkLCBwcm9jZXNzLCB1cGRhdGVzLCBwcmV2aW91c1N0YXRlIH06IFByb2Nlc3NBY3Rpb25cbik6IFByb2Nlc3NlcyA9PiB7XG4gIGlmIChpZCAmJiB1cGRhdGVzKSByZXR1cm4gdXBkYXRlUHJvY2VzcyhpZCwgdXBkYXRlcywgcHJvY2Vzc2VzKTtcbiAgaWYgKHByb2Nlc3MpIHJldHVybiBhZGRQcm9jZXNzKHByb2Nlc3MsIHByb2Nlc3NlcywgcHJldmlvdXNTdGF0ZSk7XG4gIGlmIChpZCkgcmV0dXJuIHJlbW92ZVByb2Nlc3MoaWQsIHByb2Nlc3Nlcyk7XG4gIHJldHVybiBwcm9jZXNzZXM7XG59O1xuXG5leHBvcnQgY29uc3QgY2xvc2UgPSAodXBkYXRlUHJvY2Vzc2VzOiBEaXNwYXRjaDxQcm9jZXNzQWN0aW9uPikgPT4gKFxuICBpZDogc3RyaW5nXG4pOiB2b2lkID0+IHVwZGF0ZVByb2Nlc3Nlcyh7IGlkIH0pO1xuXG5leHBvcnQgY29uc3QgbWF4aW1pemUgPSAodXBkYXRlUHJvY2Vzc2VzOiBEaXNwYXRjaDxQcm9jZXNzQWN0aW9uPikgPT4gKFxuICBpZDogc3RyaW5nXG4pOiB2b2lkID0+IHVwZGF0ZVByb2Nlc3Nlcyh7IHVwZGF0ZXM6IHsgbWF4aW1pemVkOiB0cnVlIH0sIGlkIH0pO1xuXG5leHBvcnQgY29uc3QgbWluaW1pemUgPSAodXBkYXRlUHJvY2Vzc2VzOiBEaXNwYXRjaDxQcm9jZXNzQWN0aW9uPikgPT4gKFxuICBpZDogc3RyaW5nXG4pOiB2b2lkID0+IHVwZGF0ZVByb2Nlc3Nlcyh7IHVwZGF0ZXM6IHsgbWluaW1pemVkOiB0cnVlIH0sIGlkIH0pO1xuXG5leHBvcnQgY29uc3Qgb3BlbiA9IChcbiAgcHJvY2Vzc2VzOiBQcm9jZXNzZXMsXG4gIHVwZGF0ZVByb2Nlc3NlczogRGlzcGF0Y2g8UHJvY2Vzc0FjdGlvbj5cbikgPT4gKFxuICBhcHBGaWxlOiBBcHBGaWxlLFxuICBwcmV2aW91c1N0YXRlOiBQcm9jZXNzU3RhdGUsXG4gIGxhdW5jaEVsZW1lbnQ6IEV2ZW50VGFyZ2V0XG4pOiBzdHJpbmcgPT4ge1xuICBjb25zdCB7IGljb24sIG5hbWUsIGFwcE5hbWUgfSA9IGFwcEZpbGU7XG4gIGNvbnN0IGV4aXN0aW5nUHJvY2Vzc0lkID0gZ2V0UHJvY2Vzc0lkKGFwcE5hbWUgfHwgbmFtZSk7XG5cbiAgY29uc29sZS5sb2coJ2FwcEZpbGUnLCBleGlzdGluZ1Byb2Nlc3NJZCk7XG4gIGNvbnNvbGUubG9nKCdleGlzdGluZ1Byb2Nlc3NJZCcsIGV4aXN0aW5nUHJvY2Vzc0lkKTtcblxuICBpZiAocHJvY2Vzc2VzLmZpbmQoKHsgaWQ6IHByb2Nlc3NJZCB9KSA9PiBwcm9jZXNzSWQgPT09IGV4aXN0aW5nUHJvY2Vzc0lkKSlcbiAgICAvLyBUT0RPOiBJZiB3YXMgZnJvbSBhcHBOYW1lIHRoZW4gdXBkYXRlIHByb2Nlc3Mgd2l0aCB1cmwgYW5kIG5hbWUgYXMgZmlsZW5hbWVcbiAgICAvLyAtIFRoZW4gSSB3b250IG5lZWQgaWNvbiBmb3Igb3BlbmluZyBmaWxlcz9cbiAgICByZXR1cm4gZXhpc3RpbmdQcm9jZXNzSWQ7XG5cbiAgY29uc3QgbG9hZGVyID0gYXBwTG9hZGVyKGFwcEZpbGUpO1xuXG4gIGNvbnNvbGUubG9nKCdsb2FkZXInLCBsb2FkZXIpO1xuXG4gIGlmIChsb2FkZXIpIHtcbiAgICBjb25zdCBwcm9jZXNzID0gbmV3IFByb2Nlc3Moe1xuICAgICAgbG9hZGVyLFxuICAgICAgaWNvbixcbiAgICAgIG5hbWUsXG4gICAgICBsYXVuY2hFbGVtZW50LFxuICAgICAgLi4ubG9hZGVyLmxvYWRlck9wdGlvbnNcbiAgICB9KTtcblxuICAgIHVwZGF0ZVByb2Nlc3Nlcyh7IHByb2Nlc3MsIHByZXZpb3VzU3RhdGUgfSk7XG5cbiAgICByZXR1cm4gcHJvY2Vzcy5pZDtcbiAgfVxuXG4gIHJldHVybiAnJztcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkID0gKFxuICBwcm9jZXNzZXM6IFByb2Nlc3NlcyxcbiAgdXBkYXRlUHJvY2Vzc2VzOiBEaXNwYXRjaDxQcm9jZXNzQWN0aW9uPlxuKSA9PiAoXG4gIGZpbGU6IEZpbGUsXG4gIHByZXZpb3VzU3RhdGU6IFByb2Nlc3NTdGF0ZSxcbiAgbGF1bmNoRWxlbWVudDogRXZlbnRUYXJnZXRcbik6IFByb21pc2U8c3RyaW5nPiA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGNvbnN0IGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gICAgZmlsZVJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkZW5kJywgKCkgPT4ge1xuICAgICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChcbiAgICAgICAgbmV3IEJsb2IoW25ldyBVaW50OEFycmF5KGZpbGVSZWFkZXIucmVzdWx0IGFzIEFycmF5QnVmZmVyKV0pXG4gICAgICApO1xuICAgICAgY29uc3QgZXh0ID0gZXh0bmFtZShmaWxlLm5hbWUpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIHJlc29sdmUoXG4gICAgICAgIG9wZW4ocHJvY2Vzc2VzLCB1cGRhdGVQcm9jZXNzZXMpKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGljb246IGdldEZpbGVJY29uKCcnLCBleHQpLFxuICAgICAgICAgICAgbmFtZTogYmFzZW5hbWUoZmlsZS5uYW1lLCBleHQpLFxuICAgICAgICAgICAgZXh0LFxuICAgICAgICAgICAgdXJsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwcmV2aW91c1N0YXRlLFxuICAgICAgICAgIGxhdW5jaEVsZW1lbnRcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIGZpbGVSZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHBvc2l0aW9uID0gKHVwZGF0ZVByb2Nlc3NlczogRGlzcGF0Y2g8UHJvY2Vzc0FjdGlvbj4pID0+IChcbiAgaWQ6IHN0cmluZ1xuKTogUm5kRHJhZ0NhbGxiYWNrID0+IChfZXZlbnQsIHsgeCwgeSB9KTogdm9pZCA9PlxuICB1cGRhdGVQcm9jZXNzZXMoeyBpZCwgdXBkYXRlczogeyB4LCB5IH0gfSk7XG5cbmV4cG9ydCBjb25zdCByZXN0b3JlID0gKHVwZGF0ZVByb2Nlc3NlczogRGlzcGF0Y2g8UHJvY2Vzc0FjdGlvbj4pID0+IChcbiAgaWQ6IHN0cmluZyxcbiAga2V5OiAnbWluaW1pemVkJyB8ICdtYXhpbWl6ZWQnXG4pOiB2b2lkID0+XG4gIHVwZGF0ZVByb2Nlc3Nlcyh7XG4gICAgdXBkYXRlczogeyBba2V5XTogZmFsc2UgfSxcbiAgICBpZFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHNpemUgPSAodXBkYXRlUHJvY2Vzc2VzOiBEaXNwYXRjaDxQcm9jZXNzQWN0aW9uPikgPT4gKFxuICBpZDogc3RyaW5nXG4pOiBSbmRSZXNpemVDYWxsYmFjayA9PiAoXG4gIF9ldmVudCxcbiAgX2RpcmVjdGlvbixcbiAgeyBvZmZzZXRXaWR0aDogd2lkdGgsIG9mZnNldEhlaWdodDogaGVpZ2h0IH0sXG4gIF9kZWx0YSxcbiAgeyB4LCB5IH1cbik6IHZvaWQgPT4gdXBkYXRlUHJvY2Vzc2VzKHsgaWQsIHVwZGF0ZXM6IHsgaGVpZ2h0LCB3aWR0aCwgeCwgeSB9IH0pO1xuXG5leHBvcnQgY29uc3QgdGFza2JhckVsZW1lbnQgPSAodXBkYXRlUHJvY2Vzc2VzOiBEaXNwYXRjaDxQcm9jZXNzQWN0aW9uPikgPT4gKFxuICBpZDogc3RyaW5nLFxuICBlbGVtZW50OiBIVE1MQnV0dG9uRWxlbWVudFxuKTogdm9pZCA9PiB7XG4gIHVwZGF0ZVByb2Nlc3Nlcyh7IHVwZGF0ZXM6IHsgdGFza2JhckVsZW1lbnQ6IGVsZW1lbnQgfSwgaWQgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgdGl0bGUgPSAodXBkYXRlUHJvY2Vzc2VzOiBEaXNwYXRjaDxQcm9jZXNzQWN0aW9uPikgPT4gKFxuICBpZDogc3RyaW5nLFxuICBuYW1lID0gJydcbik6IHZvaWQgPT4gdXBkYXRlUHJvY2Vzc2VzKHsgdXBkYXRlczogeyBuYW1lIH0sIGlkIH0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/processmanager.ts\n");

/***/ })

})