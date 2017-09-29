/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom_server__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_helmet__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__client_src_Html__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__client_src_App__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets__ = __webpack_require__(10);









const app = __WEBPACK_IMPORTED_MODULE_0_express___default()();

app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.static(__WEBPACK_IMPORTED_MODULE_1_path___default.a.resolve(__dirname, '../client/build'), { index: false }));

app.use((req, res) => {
  res.status(200);
  const content = __WEBPACK_IMPORTED_MODULE_3_react_dom_server___default.a.renderToStaticMarkup(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__client_src_App__["a" /* default */], null));
  const helmet = __WEBPACK_IMPORTED_MODULE_4_react_helmet___default.a.renderStatic();
  const html = __WEBPACK_IMPORTED_MODULE_3_react_dom_server___default.a.renderToStaticMarkup(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__client_src_Html__["a" /* default */], { content: content, helmet: helmet, assets: __WEBPACK_IMPORTED_MODULE_7__assets__["a" /* default */] }));
  res.send(`<!doctype html>${html}`);
  res.end();
});

const port = 8888;

app.set('port', port);

app.listen(app.get('port'), () => {
  console.log(`Server started on ${port} port`);
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


const Html = ({ content, helmet, assets }) => {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "html",
    { lang: "en" },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "head",
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { charSet: "utf-8" }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no"
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { name: "theme-color", content: "#000000" }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", { rel: "manifest", href: "../manifest.json" }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", { rel: "shortcut icon", href: "../favicon.ico" }),
      helmet.meta.toComponent(),
      helmet.title.toComponent(),
      assets.css && assets.css.map((c, idx) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", { key: idx, href: c, rel: "stylesheet" }))
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "body",
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "noscript",
        null,
        "You need to enable JavaScript to run this app."
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { id: "root", dangerouslySetInnerHTML: { __html: content } })
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Html);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logo_svg__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logo_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__logo_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App_css__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__App_css__);





class App extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'App' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_helmet___default.a,
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'title',
          null,
          'My Title'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', {
          name: 'description',
          content: 'The React with Server Side Rendering'
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'header',
        { className: 'App-header' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __WEBPACK_IMPORTED_MODULE_2__logo_svg___default.a, className: 'App-logo', alt: 'logo' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          { className: 'App-title' },
          'Welcome to React'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { className: 'App-intro' },
        'To get started, edit ',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'code',
          null,
          'src/App.js'
        ),
        ' and save to reload.'
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo.5d5d9eef.svg";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/App.642d0b47.css";

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fs__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fs__);


const indexHtml = __WEBPACK_IMPORTED_MODULE_0_fs___default.a.readFileSync('client/build/index.html', {
  encoding: 'utf-8'
});

const extract = (pattern, string) => {
  const matches = [];
  const re = new RegExp(pattern, 'g');
  let match = re.exec(string);
  while (match !== null) {
    matches.push(match[1]);
    match = re.exec(string);
  }
  return matches;
};

/* harmony default export */ __webpack_exports__["a"] = ({
  css: extract('<link href="(.+?)" rel="stylesheet">', indexHtml),
  js: extract('<script type="text/javascript" src="(.+?)"></script>', indexHtml)
});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ })
/******/ ]);