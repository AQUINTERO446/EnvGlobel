(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./src/components/Content.js":
/*!***********************************!*\
  !*** ./src/components/Content.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\n\n\nvar Dashboard = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(5), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, /*! ./Dashboard */ \"./src/components/Dashboard.js\"));\n});\nvar Predictor = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(6), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, /*! ./Predictor */ \"./src/components/Predictor.js\"));\n});\n\nvar Content = function Content() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      position: \"relative\",\n      display: \"flex\",\n      flexDirection: \"row\",\n      width: \"100%\",\n      height: \"100%\",\n      overflow: \"hidden\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Switch\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Suspense, {\n    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"CircularProgress\"], {\n      style: {\n        position: \"absolute\",\n        left: \"50%\",\n        top: \"50%\"\n      }\n    })\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n    exact: true,\n    path: \"/\",\n    component: Dashboard\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n    path: \"/predictor\",\n    component: Predictor\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Content);\n\n//# sourceURL=webpack:///./src/components/Content.js?");

/***/ }),

/***/ "./src/components/ViewWeb.js":
/*!***********************************!*\
  !*** ./src/components/ViewWeb.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Content */ \"./src/components/Content.js\");\n\n\n\n\n\nvar ViewWeb = function ViewWeb(props) {\n  // Hooks\n  var theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"useTheme\"])();\n  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"useHistory\"])(); // // Misc\n\n  var drawerWidth = \"240px\";\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      display: \"flex\",\n      flexDirection: \"row\",\n      width: \"100%\",\n      height: \"100%\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Drawer\"], {\n    variant: \"persistent\",\n    open: true,\n    anchor: \"left\",\n    style: {\n      width: drawerWidth\n    },\n    PaperProps: {\n      square: true,\n      style: {\n        width: drawerWidth,\n        backgroundColor: theme.palette.primary.main,\n        color: \"#FFFFFF\",\n        flexShrink: 0,\n        whiteSpace: \"nowrap\"\n      }\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"List\"], {\n    dense: false,\n    subheader: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListSubheader\"], {\n      color: \"inherit\"\n    }, \"EnvGlobel\")\n  }, props.menuOptions.map(function (element, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], {\n      key: index,\n      button: true,\n      style: {\n        selected: {\n          backgroundColor: \"red\"\n        }\n      },\n      selected: props.selectedOption.name === element.name,\n      onClick: function onClick() {\n        props.setOption(element);\n        history.replace(element.path);\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItemText\"], {\n      primary: element.name\n    }));\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewWeb);\n\n//# sourceURL=webpack:///./src/components/ViewWeb.js?");

/***/ })

}]);