var Toast;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 248:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(994);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(476);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/**\r\n *\r\n * Login Content\r\n *\r\n */\r\n\r\n.site-content {\r\n    /*margin-bottom: 3em;*/\r\n}\r\n\r\n@keyframes animate-breathing {\r\n    0% {\r\n        top:  9%;\r\n    }\r\n\r\n    50% {\r\n        top:  9.75%;\r\n    }\r\n\r\n    100% {\r\n        top:  9%;\r\n    }\r\n }\r\n\r\n @keyframes animate-tilting {\r\n    0% {\r\n        transform: rotateY(0deg) translateX(-50%) translateY(5px);\r\n        transform-origin: center;\r\n    }\r\n\r\n    /*25% {\r\n        transform: rotateY(1deg) translateX(-50%) translateY(5px);\r\n        transform-origin: center;\r\n    }*/\r\n\r\n    50% {\r\n        transform: rotateY(10deg) translateX(-50%) translateY(3px);\r\n        transform-origin: center;\r\n    }\r\n\r\n   /* 75% {\r\n        transform: rotateY(-1deg) translateX(-50%) translateY(5px);\r\n        transform-origin: center;\r\n    }*/\r\n\r\n    100% {\r\n        transform: rotateY(0deg) translateX(-50%) translateY(5px);\r\n        transform-origin: center;\r\n    }\r\n }\r\n\r\n.breathing {\r\n    animation: animate-breathing 3000ms;\r\n    animation-timing-function: cubic-bezier(0.36, 0, 0.66, -0.56);\r\n    animation-iteration-count: infinite;\r\n}\r\n\r\n.tilting {\r\n    animation: animate-tilting 3000ms;\r\n    /*animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);*/\r\n    animation-iteration-count: infinite;\r\n}\r\n\r\n.logo-container {\r\n    position: relative;\r\n    display: flex;\r\n    /* align-items: center; */\r\n    /* justify-content: center; */\r\n    height: 250px;\r\n    /* max-width: 300px; */\r\n    /* padding: 30px; */\r\n    /* margin-bottom: 2em; */\r\n}\r\n\r\n.logo-container img {\r\n    position: absolute;\r\n    top:  9%;\r\n    left: 50%;\r\n    -webkit-transform: translateX(-50%);\r\n       -moz-transform: translateX(-50%);\r\n        -ms-transform: translateX(-50%);\r\n         -o-transform: translateX(-50%);\r\n            transform: translateX(-50%);\r\n        width: 350px;\r\n    /*height: inherit;*/\r\n    /*width: inherit;*/\r\n\r\n}", "",{"version":3,"sources":["webpack://./../css/login.css"],"names":[],"mappings":"AAAA;;;;EAIE;;AAEF;IACI,sBAAsB;AAC1B;;AAEA;IACI;QACI,QAAQ;IACZ;;IAEA;QACI,WAAW;IACf;;IAEA;QACI,QAAQ;IACZ;CACH;;CAEA;IACG;QACI,yDAAyD;QACzD,wBAAwB;IAC5B;;IAEA;;;MAGE;;IAEF;QACI,0DAA0D;QAC1D,wBAAwB;IAC5B;;GAED;;;MAGG;;IAEF;QACI,yDAAyD;QACzD,wBAAwB;IAC5B;CACH;;AAED;IACI,mCAAmC;IACnC,6DAA6D;IAC7D,mCAAmC;AACvC;;AAEA;IACI,iCAAiC;IACjC,6DAA6D;IAC7D,mCAAmC;AACvC;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,yBAAyB;IACzB,6BAA6B;IAC7B,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,mCAAmC;OAChC,gCAAgC;QAC/B,+BAA+B;SAC9B,8BAA8B;YAC3B,2BAA2B;QAC/B,YAAY;IAChB,mBAAmB;IACnB,kBAAkB;;AAEtB","sourcesContent":["/**\r\n *\r\n * Login Content\r\n *\r\n */\r\n\r\n.site-content {\r\n    /*margin-bottom: 3em;*/\r\n}\r\n\r\n@keyframes animate-breathing {\r\n    0% {\r\n        top:  9%;\r\n    }\r\n\r\n    50% {\r\n        top:  9.75%;\r\n    }\r\n\r\n    100% {\r\n        top:  9%;\r\n    }\r\n }\r\n\r\n @keyframes animate-tilting {\r\n    0% {\r\n        transform: rotateY(0deg) translateX(-50%) translateY(5px);\r\n        transform-origin: center;\r\n    }\r\n\r\n    /*25% {\r\n        transform: rotateY(1deg) translateX(-50%) translateY(5px);\r\n        transform-origin: center;\r\n    }*/\r\n\r\n    50% {\r\n        transform: rotateY(10deg) translateX(-50%) translateY(3px);\r\n        transform-origin: center;\r\n    }\r\n\r\n   /* 75% {\r\n        transform: rotateY(-1deg) translateX(-50%) translateY(5px);\r\n        transform-origin: center;\r\n    }*/\r\n\r\n    100% {\r\n        transform: rotateY(0deg) translateX(-50%) translateY(5px);\r\n        transform-origin: center;\r\n    }\r\n }\r\n\r\n.breathing {\r\n    animation: animate-breathing 3000ms;\r\n    animation-timing-function: cubic-bezier(0.36, 0, 0.66, -0.56);\r\n    animation-iteration-count: infinite;\r\n}\r\n\r\n.tilting {\r\n    animation: animate-tilting 3000ms;\r\n    /*animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);*/\r\n    animation-iteration-count: infinite;\r\n}\r\n\r\n.logo-container {\r\n    position: relative;\r\n    display: flex;\r\n    /* align-items: center; */\r\n    /* justify-content: center; */\r\n    height: 250px;\r\n    /* max-width: 300px; */\r\n    /* padding: 30px; */\r\n    /* margin-bottom: 2em; */\r\n}\r\n\r\n.logo-container img {\r\n    position: absolute;\r\n    top:  9%;\r\n    left: 50%;\r\n    -webkit-transform: translateX(-50%);\r\n       -moz-transform: translateX(-50%);\r\n        -ms-transform: translateX(-50%);\r\n         -o-transform: translateX(-50%);\r\n            transform: translateX(-50%);\r\n        width: 350px;\r\n    /*height: inherit;*/\r\n    /*width: inherit;*/\r\n\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 924:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(994);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(476);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* BEGIN:: TOAST NOTIFICATIONS */\r\n\r\n.pop-notifications {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: auto;\r\n    min-height: 90px;\r\n    max-height: 50vh;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: -1;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    overflow: hidden;\r\n}\r\n\r\n.pop-notifications.show {\r\n    z-index: 120;\r\n}\r\n\r\n.pop-notifications .toast {\r\n    width: 90%;\r\n    max-width: 500px;\r\n    min-width: 280px;\r\n    height: 0;\r\n    margin-top: -10vh;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 10px;\r\n    box-sizing: border-box;\r\n    color: #fff;\r\n    opacity: 0;\r\n    overflow: hidden;\r\n    transition: height 0.3s linear, margin-top 0.3s linear, opacity 0.3s linear;\r\n}\r\n\r\n.pop-notifications .toast.toast-info {\r\n    background: rgba(0,0,0,0.5);\r\n}\r\n\r\n.pop-notifications .toast.toast-error {\r\n    background: rgba(224, 0, 40, 0.8);\r\n}\r\n\r\n.pop-notifications.show .toast {\r\n    height: auto;\r\n    padding: 20px;\r\n    margin-top: 14px;\r\n    opacity: 1;\r\n}\r\n\r\n.pop-notifications.show .toast p {\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\n.pop-notifications.show .toast p ul {\r\n    list-style-type: none;\r\n    display: flex;\r\n    width: 100%;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.pop-notifications.show .toast p ul li {\r\n    font-size: 1em;\r\n}\r\n\r\n.pop-notifications.show .toast p ul li:not(:last-child) {\r\n    margin-bottom: 5px;\r\n}\r\n\r\n@media only screen and (min-width: 761px) {\r\n    .pop-notifications.show .toast p ul li {\r\n        font-size: 1.3em;\r\n    }\r\n    .pop-notifications.show .toast p ul li:not(:last-child) {\r\n        margin-bottom: 10px;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./../css/toast-notification.css"],"names":[],"mappings":"AAAA,gCAAgC;;AAEhC;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,gBAAgB;IAChB,MAAM;IACN,OAAO;IACP,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,gBAAgB;AACpB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,UAAU;IACV,gBAAgB;IAChB,gBAAgB;IAChB,SAAS;IACT,iBAAiB;IACjB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;IACnB,sBAAsB;IACtB,WAAW;IACX,UAAU;IACV,gBAAgB;IAChB,2EAA2E;AAC/E;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,UAAU;AACd;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,qBAAqB;IACrB,aAAa;IACb,WAAW;IACX,uBAAuB;IACvB,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI;QACI,gBAAgB;IACpB;IACA;QACI,mBAAmB;IACvB;AACJ","sourcesContent":["/* BEGIN:: TOAST NOTIFICATIONS */\r\n\r\n.pop-notifications {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: auto;\r\n    min-height: 90px;\r\n    max-height: 50vh;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: -1;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    overflow: hidden;\r\n}\r\n\r\n.pop-notifications.show {\r\n    z-index: 120;\r\n}\r\n\r\n.pop-notifications .toast {\r\n    width: 90%;\r\n    max-width: 500px;\r\n    min-width: 280px;\r\n    height: 0;\r\n    margin-top: -10vh;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 10px;\r\n    box-sizing: border-box;\r\n    color: #fff;\r\n    opacity: 0;\r\n    overflow: hidden;\r\n    transition: height 0.3s linear, margin-top 0.3s linear, opacity 0.3s linear;\r\n}\r\n\r\n.pop-notifications .toast.toast-info {\r\n    background: rgba(0,0,0,0.5);\r\n}\r\n\r\n.pop-notifications .toast.toast-error {\r\n    background: rgba(224, 0, 40, 0.8);\r\n}\r\n\r\n.pop-notifications.show .toast {\r\n    height: auto;\r\n    padding: 20px;\r\n    margin-top: 14px;\r\n    opacity: 1;\r\n}\r\n\r\n.pop-notifications.show .toast p {\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\n.pop-notifications.show .toast p ul {\r\n    list-style-type: none;\r\n    display: flex;\r\n    width: 100%;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.pop-notifications.show .toast p ul li {\r\n    font-size: 1em;\r\n}\r\n\r\n.pop-notifications.show .toast p ul li:not(:last-child) {\r\n    margin-bottom: 5px;\r\n}\r\n\r\n@media only screen and (min-width: 761px) {\r\n    .pop-notifications.show .toast p ul li {\r\n        font-size: 1.3em;\r\n    }\r\n    .pop-notifications.show .toast p ul li:not(:last-child) {\r\n        margin-bottom: 10px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 476:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 994:
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ 892:
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 311:
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ 60:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ 192:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 760:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ 865:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ 609:
/***/ ((module) => {

module.exports = jQuery;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(892);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ../node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(760);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ../node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(311);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(192);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ../node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(60);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ../node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(865);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ../node_modules/css-loader/dist/cjs.js!../css/login.css
var login = __webpack_require__(248);
;// CONCATENATED MODULE: ../css/login.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(login/* default */.Z, options);




       /* harmony default export */ const css_login = (login/* default */.Z && login/* default.locals */.Z.locals ? login/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ../node_modules/css-loader/dist/cjs.js!../css/toast-notification.css
var toast_notification = __webpack_require__(924);
;// CONCATENATED MODULE: ../css/toast-notification.css

      
      
      
      
      
      
      
      
      

var toast_notification_options = {};

toast_notification_options.styleTagTransform = (styleTagTransform_default());
toast_notification_options.setAttributes = (setAttributesWithoutAttributes_default());

      toast_notification_options.insert = insertBySelector_default().bind(null, "head");
    
toast_notification_options.domAPI = (styleDomAPI_default());
toast_notification_options.insertStyleElement = (insertStyleElement_default());

var toast_notification_update = injectStylesIntoStyleTag_default()(toast_notification/* default */.Z, toast_notification_options);




       /* harmony default export */ const css_toast_notification = (toast_notification/* default */.Z && toast_notification/* default.locals */.Z.locals ? toast_notification/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./Toast.js
/* provided dependency */ var $ = __webpack_require__(609);


;

class Toast {
    static utils () {
        const utils = {
            //init: () => 

            goTo: (url) => {
                window.location = url;
            },

            goBack: () => {
                window.history.back();
            },

            getQS: (key) => {
                let r = '',
                    s = unescape(window.location.search);

                if (s != '') {
                    s = s.substr(1);
                    let p = s.split('&');

                    for (let i = 0; i < p.length; i++) {
                        let val = p[i].split('=');

                        if (val[0] == key) {
                            r = val[1];
                            break;
                        }
                    }
                }

                return r;
            },

            getLabel: (param) => {
                let r = '';

                try {
                    r = labels[param.group][param.key];
                } catch (err) {
                    //do nothing
                }

                return r;
            },

            getSetting: (param) => {
                let r = false;

                try {
                    r = siteSetting[param.group][param.key];
                } catch (err) {
                    //do nothing
                }

                return r;
            },

            getGame: (gameCode) => {
                let r;

                try {
                    r = gameSetting.game.filter(function(game) {
                        return game.code == gameCode;
                    })[0];
                } catch (err) {
                    //do nothing
                }

                return r;
            },

            showToast: (param) => {
                let handle = $("#popNotifications"),
                    css = '';

                //reset
                handle.removeClass("show")
                handle.find(".toast").removeClass(css);

                switch (param.type) {
                    case "error":
                        css = 'toast-error';
                        break;
                    case "info":
                    default:
                        css = 'toast-info';
                        break;
                }

                handle.find("p").html(param.msg);

                handle.addClass("show");

                handle.find(".toast").addClass(css);

                setTimeout(function() {
                    handle.removeClass("show")
                    handle.find(".toast").removeClass(css);
                }, 5 * 1000);
            },

            getNumGrp: (param) => {
                let r = "";

                try {

                    if (param.gameCode in gameSetting.numberGrp) {

                        $.each(gameSetting.numberGrp[param.gameCode], function(idx, item) {
                            let k = Object.keys(item)[0],
                                v = item[k],
                                min = Number(v.split("-")[0]),
                                max = Number(v.split("-")[1]);

                            if (Number(param.num) >= min && Number(param.num) <= max) {
                                r = k;
                                return false;
                            }

                        });

                    }

                } catch (err) {
                    //do nothing
                }

                // var a = { a1: 'hello' };
                // Object.keys(a)[0];
                // var key = Object.keys(a)[0];
                // a[key]; // yields "hello"

                //utils.getNumGrp({gameCode: gameData.code, num: num});

                // "120210607153851": [
                //     { "blue1": "1-11" },
                //     { "red": "12-23" },
                //     { "yellow": "24-35" },
                //     { "blue2": "36-45" }
                // ]

                return r;
            }
        }

        return utils
    }

    static api () {
    	const api = {
            post: function(url, dto, success, error) {
                $.ajax({
                    type: "post",
                    dataType: "json",
                    url: url,
                    //headers: { 'token': token },
                    data: (dto == null) ? '' : 'data=' + JSON.stringify(dto),
                    timeout: 10000,
                    success: function(d) {
                        success(d);
                    },
                    error: function(r, s, e) {
                        if (s === "timeout") {
                            console.log("TIMEOUT ERROR");
                        } else {
                            if (r != undefined && r.status != undefined) {
                                success(r.responseJSON);
                                // if (r.responseJSON && r.responseJSON.code) {
                                //     if (u.processReturnCode(r.responseJSON)) {
                                //         error(r.responseJSON.code);
                                //     }                            
                                // }
                                // else {
                                //     error('HTTP' + r.status);
                                // }
                            } else {
                                error(e);
                            }
                        }
                    },
                    complete: function(r, s) {
                        console.log("SUBMIT COMPLETE");
                    }
                });
            },
        }
        return api
    }

}




// }
// }
;// CONCATENATED MODULE: ./Login.js


;


let input_password = document.querySelector('[name="password"]');
let btn_eye = document.getElementById('btnEye');
btn_eye.addEventListener('click', () => {
    let eye = btn_eye.querySelector('.fa');
    let span = btn_eye.querySelector('span');
    if (eye.classList.contains('fa-eye-slash') == true) {
        input_password.setAttribute('type', 'text');
        eye.classList.remove('fa-eye-slash');
        eye.classList.add('fa-eye');
    } else {
        input_password.setAttribute('type', 'password');
        eye.classList.add('fa-eye-slash');
        eye.classList.remove('fa-eye');
    }
});

// console.log({ utils })
// utils.showToast({
//     type: "error",
//     msg: "ERROR CODE " + res.status_code + ": " + res.message
// });


})();

Toast = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=login.bundle.js.map