(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/accessories/accessories.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/accessories/accessories.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img src=\"../../assets/images/coming-soon2.jpeg\">");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<toolbar></toolbar>\n<div class=\"placeHolder\"></div>\n<router-outlet></router-outlet>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/appointment-page/appointment-page.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/appointment-page/appointment-page.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <form></form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/appointment-page/form/form.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/appointment-page/form/form.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <iframe\n    id=\"JotFormIFrame-83596360595167\"\n    title=\"Online Appointment Request \"\n    onload=\"window.parent.scrollTo(0,0)\"\n    allowtransparency=\"true\"\n    allowfullscreen=\"true\"\n    allow=\"geolocation; microphone; camera\"\n    src=\"https://form.jotform.com/summer4414/online-appointment-request-\"\n    frameborder=\"0\"\n    style=\"\n    min-width: 100%;\n    height:539px;\n    border:none;\"\n    scrolling=\"no\"\n  >\n  </iframe>\n  <script type=\"text/javascript\">\n    var ifr = document.getElementById(\"JotFormIFrame-83596360595167\");\n    if(window.location.href && window.location.href.indexOf(\"?\") > -1) {\n      var get = window.location.href.substr(window.location.href.indexOf(\"?\") + 1);\n      if(ifr && get.length > 0) {\n        var src = ifr.src;\n        src = src.indexOf(\"?\") > -1 ? src + \"&\" + get : src  + \"?\" + get;\n        ifr.src = src;\n      }\n    }\n    window.handleIFrameMessage = function(e) {\n      if (typeof e.data === 'object') { return; }\n      var args = e.data.split(\":\");\n      if (args.length > 2) { iframe = document.getElementById(\"JotFormIFrame-\" + args[(args.length - 1)]); } else { iframe = document.getElementById(\"JotFormIFrame\"); }\n      if (!iframe) { return; }\n      switch (args[0]) {\n        case \"scrollIntoView\":\n          iframe.scrollIntoView();\n          break;\n        case \"setHeight\":\n          iframe.style.height = args[1] + \"px\";\n          break;\n        case \"collapseErrorPage\":\n          if (iframe.clientHeight > window.innerHeight) {\n            iframe.style.height = window.innerHeight + \"px\";\n          }\n          break;\n        case \"reloadPage\":\n          window.location.reload();\n          break;\n        case \"loadScript\":\n          var src = args[1];\n          if (args.length > 3) {\n              src = args[1] + ':' + args[2];\n          }\n          var script = document.createElement('script');\n          script.src = src;\n          script.type = 'text/javascript';\n          document.body.appendChild(script);\n          break;\n        case \"exitFullscreen\":\n          if      (window.document.exitFullscreen)        window.document.exitFullscreen();\n          else if (window.document.mozCancelFullScreen)   window.document.mozCancelFullScreen();\n          else if (window.document.mozCancelFullscreen)   window.document.mozCancelFullScreen();\n          else if (window.document.webkitExitFullscreen)  window.document.webkitExitFullscreen();\n          else if (window.document.msExitFullscreen)      window.document.msExitFullscreen();\n          break;\n      }\n      var isJotForm = (e.origin.indexOf(\"jotform\") > -1) ? true : false;\n      if(isJotForm && \"contentWindow\" in iframe && \"postMessage\" in iframe.contentWindow) {\n        var urls = {\"docurl\":encodeURIComponent(document.URL),\"referrer\":encodeURIComponent(document.referrer)};\n        iframe.contentWindow.postMessage(JSON.stringify({\"type\":\"urls\",\"value\":urls}), \"*\");\n      }\n    };\n    if (window.addEventListener) {\n      window.addEventListener(\"message\", handleIFrameMessage, false);\n    } else if (window.attachEvent) {\n      window.attachEvent(\"onmessage\", handleIFrameMessage);\n    }\n    </script>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/about-us/about-us.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blog/about-us/about-us.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <h1>{{ title }} </h1>\n    <h5>{{ header }}</h5>\n</div>\n<h1>{{ about }}</h1>\n<h4 @fade>What we do</h4>\n<p>Here at Doctor iOS we repair your phone screens at a very affordable price to help you save money. Get low-cost\n    phone repair right at your door step because we even come to you.</p>\n<h4 @fade>Why we do it</h4>\n<p>We strive to save you money. Expenses for a new cell phone often is over $500, while an iPhone screen replacement \n    or other common cell phone repairs cost more than $300 on average. Don't break your phone screen then break the bank!</p>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/blog.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blog/blog.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <carousel></carousel>\n    <about-us></about-us>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/carousel/carousel.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blog/carousel/carousel.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<iframe [src]=\"images[selectedImageIndex]\" \n        scrolling=\"no\" \n        frameborder=\"0\" \n        allowTransparency=\"true\"\n        allow=\"encrypted-media\">\n</iframe>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/social-media-links/social-media-links.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blog/social-media-links/social-media-links.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <a href=\"https://www.facebook.com/doctoriOS.repair/\">\n    <img src=\"https://www.stlukeseye.com/wp-content/uploads/2018/03/like-us-on-facebook.jpg\">\n</a> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/cell-phone-image/cell-phone-image.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/cell-phone-image/cell-phone-image.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1> {{ title }}</h1>\n<img [src]=\"imagesSource[selectedImageIndex]\">");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/countdown-timer/countdown-timer.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/countdown-timer/countdown-timer.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <h2>{{ title }} </h2>\n    <h3>{{ timer }}</h3>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <promo></promo>\n    <countdown-timer></countdown-timer>\n    <cell-phone-image></cell-phone-image>\n    <quick-links></quick-links>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/promo/promo.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/promo/promo.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <h2 @fade>{{title}}</h2>\n    <img src=\"../../../assets/images/flyer.jpg\">\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/quick-links/quick-links.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/quick-links/quick-links.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"quick-links-grid-container\">\n    <div>\n        <div class=\"grid-item\"> <a [routerLink]=\"['/services']\">{{ Services }}</a></div>\n        <div class=\"grid-item\"> <a [routerLink]=\"['/book']\"> {{ Book }} </a></div>\n    </div>\n    <div>\n        <div class=\"grid-item\"> <a [routerLink]=\"['/accessories']\">{{ Accessories }}</a></div>\n        <div class=\"grid-item\"> <a [routerLink]=\"['/blog']\">{{ Blog }}</a></div>\n    </div>\n</div>\n\n<div>\n    <h1> St.Louis<br> & <br>East Saint Louis Area</h1>\n    <h1>{{ Phone }}</h1>\n    <h1>{{ Hours }}</h1>\n    <h1>{{ Weekdays }}</h1>\n    <h1>{{ Closed }}</h1>\n    <iframe\n        src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199412.4868559348!2d-90.38389084380192!3d38.6530165071809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8b4a9faed8ef9%3A0xbe39eaca22bbe05b!2sSt.+Louis%2C+MO!5e0!3m2!1sen!2sus!4v1547169660021\"\n        frameborder=\"0\" style=\"border:0; width: 100%; height: 500px;\" allowfullscreen=\"\">\n    </iframe>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/book-now/book-now.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/book-now/book-now.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img src=\"http://www.cellphonerepairguyz.com/blog/wp-content/uploads/2018/01/Cell-Phone-Repair-Guyz-2.jpg\"\n    id=\"book-now-image\">\n\n<a [routerLink]=\"['/book']\"><button mat-raised-button>{{ book }}</button></a>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/cell-phone-patients/cell-phone-patients.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/cell-phone-patients/cell-phone-patients.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 @fade>{{ title }}\n    <i class=\"fas fa-briefcase-medical\"></i>\n</h1>\n\n<div *ngFor=\"let phone of phones\">\n    <ul class=\"accordion\">\n        <li [ngStyle]=\"{ 'background-image': phone.src }\">\n            <div class=\"heading\"> {{phone.phoneName}} </div>\n            <div class=\"description\">\n                <h2> {{phone.phoneName}} </h2>\n                <p> {{phone.repairPrice}} </p>\n                <h4> {{phone.oldRepairPrice}} </h4>\n            </div>\n        </li>\n    </ul>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/services.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/services.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<book-now></book-now>\n<cell-phone-patients></cell-phone-patients>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/toolbar/toolbar.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/toolbar/toolbar.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar>\n  <img src=\"../../assets/images/logo.png\" alt=\"doctorios\">\n  <span class=\"spacer\"></span>\n  <div class=\"links\">\n    <a [routerLink]=\"['/home']\">Home</a>\n    <a [routerLink]=\"['/services']\">Services</a>\n    <a [routerLink]=\"['/book']\"><span>Book</span></a>\n    <a [routerLink]=\"['/blog']\">Blog</a>\n  </div>\n  <mat-icon (click)=\"showMenu = !showMenu\">menu</mat-icon>\n</mat-toolbar>\n\n<div *ngIf=\"showMenu\" class=\"menu\">\n  <a [routerLink]=\"['/home']\">Home</a>\n  <a [routerLink]=\"['/services']\">Services</a>\n  <a [routerLink]=\"['/book']\"><span>Book</span></a>\n  <a [routerLink]=\"['/blog']\">Blog</a>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/accessories/accessories.component.css":
/*!*******************************************************!*\
  !*** ./src/app/accessories/accessories.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjZXNzb3JpZXMvYWNjZXNzb3JpZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2FjY2Vzc29yaWVzL2FjY2Vzc29yaWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/accessories/accessories.component.ts":
/*!******************************************************!*\
  !*** ./src/app/accessories/accessories.component.ts ***!
  \******************************************************/
/*! exports provided: AccessoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessoriesComponent", function() { return AccessoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AccessoriesComponent = class AccessoriesComponent {
};
AccessoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-accessories',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./accessories.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/accessories/accessories.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./accessories.component.css */ "./src/app/accessories/accessories.component.css")).default]
    })
], AccessoriesComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _appointment_page_appointment_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./appointment-page/appointment-page.component */ "./src/app/appointment-page/appointment-page.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _accessories_accessories_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./accessories/accessories.component */ "./src/app/accessories/accessories.component.ts");








const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'blog', component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__["BlogComponent"] },
    { path: 'book', component: _appointment_page_appointment_page_component__WEBPACK_IMPORTED_MODULE_5__["AppointmentPageComponent"] },
    { path: 'services', component: _services_services_component__WEBPACK_IMPORTED_MODULE_6__["ServicesComponent"] },
    { path: 'accessories', component: _accessories_accessories_component__WEBPACK_IMPORTED_MODULE_7__["AccessoriesComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".placeHolder {\n  height: 6rem;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wbGFjZUhvbGRlciB7XG4gIGhlaWdodDogNnJlbTtcbn1cblxuXG4iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Doctor iOS';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/toolbar/toolbar.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _appointment_page_appointment_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./appointment-page/appointment-page.component */ "./src/app/appointment-page/appointment-page.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_countdown_timer_countdown_timer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/countdown-timer/countdown-timer.component */ "./src/app/home/countdown-timer/countdown-timer.component.ts");
/* harmony import */ var _home_cell_phone_image_cell_phone_image_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/cell-phone-image/cell-phone-image.component */ "./src/app/home/cell-phone-image/cell-phone-image.component.ts");
/* harmony import */ var _home_quick_links_quick_links_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/quick-links/quick-links.component */ "./src/app/home/quick-links/quick-links.component.ts");
/* harmony import */ var _home_promo_promo_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/promo/promo.component */ "./src/app/home/promo/promo.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _blog_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./blog/carousel/carousel.component */ "./src/app/blog/carousel/carousel.component.ts");
/* harmony import */ var _blog_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./blog/about-us/about-us.component */ "./src/app/blog/about-us/about-us.component.ts");
/* harmony import */ var _blog_social_media_links_social_media_links_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./blog/social-media-links/social-media-links.component */ "./src/app/blog/social-media-links/social-media-links.component.ts");
/* harmony import */ var _appointment_page_form_form_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./appointment-page/form/form.component */ "./src/app/appointment-page/form/form.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _services_book_now_book_now_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/book-now/book-now.component */ "./src/app/services/book-now/book-now.component.ts");
/* harmony import */ var _services_cell_phone_patients_cell_phone_patients_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/cell-phone-patients/cell-phone-patients.component */ "./src/app/services/cell-phone-patients/cell-phone-patients.component.ts");
/* harmony import */ var _accessories_accessories_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./accessories/accessories.component */ "./src/app/accessories/accessories.component.ts");


























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_6__["ToolbarComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
            _home_countdown_timer_countdown_timer_component__WEBPACK_IMPORTED_MODULE_13__["CountdownTimerComponent"],
            _home_cell_phone_image_cell_phone_image_component__WEBPACK_IMPORTED_MODULE_14__["CellPhoneImageComponent"],
            _home_quick_links_quick_links_component__WEBPACK_IMPORTED_MODULE_15__["QuickLinksComponent"],
            _home_promo_promo_component__WEBPACK_IMPORTED_MODULE_16__["PromoComponent"],
            _blog_blog_component__WEBPACK_IMPORTED_MODULE_17__["BlogComponent"],
            _blog_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_18__["CarouselComponent"],
            _blog_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_19__["AboutUsComponent"],
            _blog_social_media_links_social_media_links_component__WEBPACK_IMPORTED_MODULE_20__["SocialMediaLinksComponent"],
            _home_promo_promo_component__WEBPACK_IMPORTED_MODULE_16__["PromoComponent"],
            _appointment_page_appointment_page_component__WEBPACK_IMPORTED_MODULE_10__["AppointmentPageComponent"],
            _appointment_page_form_form_component__WEBPACK_IMPORTED_MODULE_21__["FormComponent"],
            _services_services_component__WEBPACK_IMPORTED_MODULE_22__["ServicesComponent"],
            _services_book_now_book_now_component__WEBPACK_IMPORTED_MODULE_23__["BookNowComponent"],
            _services_cell_phone_patients_cell_phone_patients_component__WEBPACK_IMPORTED_MODULE_24__["CellPhonePatientsComponent"],
            _accessories_accessories_component__WEBPACK_IMPORTED_MODULE_25__["AccessoriesComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/appointment-page/appointment-page.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/appointment-page/appointment-page.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media screen and (min-width: 1200px) {\n    div {\n        padding: 0rem 10rem;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwb2ludG1lbnQtcGFnZS9hcHBvaW50bWVudC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLG1CQUFtQjtJQUN2QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXBwb2ludG1lbnQtcGFnZS9hcHBvaW50bWVudC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgICBkaXYge1xuICAgICAgICBwYWRkaW5nOiAwcmVtIDEwcmVtO1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/appointment-page/appointment-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/appointment-page/appointment-page.component.ts ***!
  \****************************************************************/
/*! exports provided: AppointmentPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentPageComponent", function() { return AppointmentPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppointmentPageComponent = class AppointmentPageComponent {
};
AppointmentPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'appointment-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./appointment-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/appointment-page/appointment-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./appointment-page.component.css */ "./src/app/appointment-page/appointment-page.component.css")).default]
    })
], AppointmentPageComponent);



/***/ }),

/***/ "./src/app/appointment-page/form/form.component.css":
/*!**********************************************************!*\
  !*** ./src/app/appointment-page/form/form.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcG9pbnRtZW50LXBhZ2UvZm9ybS9mb3JtLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/appointment-page/form/form.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/appointment-page/form/form.component.ts ***!
  \*********************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FormComponent = class FormComponent {
};
FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/appointment-page/form/form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form.component.css */ "./src/app/appointment-page/form/form.component.css")).default]
    })
], FormComponent);



/***/ }),

/***/ "./src/app/blog/about-us/about-us.component.css":
/*!******************************************************!*\
  !*** ./src/app/blog/about-us/about-us.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\n    background-image: url(https://i.pinimg.com/originals/47/c8/89/47c88962c0c13003dc6e38216869e5f8.jpg);\n    background-repeat: no-repeat;\n    background-position: 100%;\n    background-position: center;\n    background-size: cover;\n    height: 100%;\n}\n\nh5, h1 {\n    padding-left: 1rem;\n    padding-right: 1rem;\n    text-align: center;\n    color: #2256ce;\n    font-size: 2rem;\n    font-weight: 500;\n}\n\np {\n    font-size: 20px;\n    line-height: 1.5;\n}\n\nh5 {\n    font-size: 1.3rem;\n    padding-top: 23rem;\n}\n\nh4 {\n    color: #2256ce;\n    font-size: 25px;\n    font-weight: 500;\n}\n\n@media screen and (min-width:1200px) {\n    h4,h5 {\n        color: #2256ce;\n        font-size: 2rem;\n    }\n    h1 {\n        text-align: center;\n        color: #2256ce;\n        font-size: 2rem;\n        font-weight: 500;\n    }\n    p {\n        font-size: 22px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9hYm91dC11cy9hYm91dC11cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUdBQW1HO0lBQ25HLDRCQUE0QjtJQUM1Qix5QkFBeUI7SUFDekIsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7UUFDSSxjQUFjO1FBQ2QsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCxlQUFlO1FBQ2YsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9ibG9nL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2kucGluaW1nLmNvbS9vcmlnaW5hbHMvNDcvYzgvODkvNDdjODg5NjJjMGMxMzAwM2RjNmUzODIxNjg2OWU1ZjguanBnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5oNSwgaDEge1xuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzIyNTZjZTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxucCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbmg1IHtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBwYWRkaW5nLXRvcDogMjNyZW07XG59XG5cbmg0IHtcbiAgICBjb2xvcjogIzIyNTZjZTtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMjAwcHgpIHtcbiAgICBoNCxoNSB7XG4gICAgICAgIGNvbG9yOiAjMjI1NmNlO1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgfVxuICAgIGgxIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogIzIyNTZjZTtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/blog/about-us/about-us.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/blog/about-us/about-us.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");



let AboutUsComponent = class AboutUsComponent {
    constructor() {
        this.title = 'LET US INTRODUCE OURSELVES';
        this.header = '#1 Afforable Phone Repair Service';
        this.about = 'About Us';
    }
};
AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'about-us',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-us.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/about-us/about-us.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fade', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        letterSpacing: '10px', opacity: 1,
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(5000)
                ]),
            ]),
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about-us.component.css */ "./src/app/blog/about-us/about-us.component.css")).default]
    })
], AboutUsComponent);



/***/ }),

/***/ "./src/app/blog/blog.component.css":
/*!*****************************************!*\
  !*** ./src/app/blog/blog.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media screen and (min-width: 1200px) {\n    div {\n        padding: 0rem 10rem;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLG1CQUFtQjtJQUN2QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgICBkaXYge1xuICAgICAgICBwYWRkaW5nOiAwcmVtIDEwcmVtO1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BlogComponent = class BlogComponent {
};
BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'blog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./blog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/blog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./blog.component.css */ "./src/app/blog/blog.component.css")).default]
    })
], BlogComponent);



/***/ }),

/***/ "./src/app/blog/carousel/carousel.component.css":
/*!******************************************************!*\
  !*** ./src/app/blog/carousel/carousel.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("iframe {\n    height: -webkit-max-content;\n    height: -moz-max-content;\n    height: max-content;\n    width: 100%;\n}\n\n@media screen and (min-width:1200px) {\n    iframe {\n        height: -webkit-max-content;\n        height: -moz-max-content;\n        height: max-content;\n        width: 100%;\n        padding-left: 14rem;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0k7UUFDSSwyQkFBbUI7UUFBbkIsd0JBQW1CO1FBQW5CLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gsbUJBQW1CO0lBQ3ZCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9ibG9nL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpZnJhbWUge1xuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTIwMHB4KSB7XG4gICAgaWZyYW1lIHtcbiAgICAgICAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTRyZW07XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/blog/carousel/carousel.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/blog/carousel/carousel.component.ts ***!
  \*****************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let CarouselComponent = class CarouselComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.imageSources = [
            "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Falletta.son%2Fposts%2F3179360095426892&width=500",
            "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fkatyzia.butler.73%2Fposts%2F413926759561442&width=500",
            'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FBDubb2x%2Fposts%2F2264839380494406&width=500',
            'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FBigNisha%2Fposts%2F2505836309464590&width=500',
        ];
        this.selectedImageIndex = 0;
    }
    ngOnInit() {
        this.images = this.imageSources.map((link) => this.sanitizer.bypassSecurityTrustResourceUrl(link));
        setInterval(() => {
            this.onNext();
        }, 2500);
    }
    onNext() {
        if (this.selectedImageIndex + 1 >= this.images.length) {
            this.selectedImageIndex = 0;
        }
        else {
            this.selectedImageIndex++;
        }
    }
    onPrevious() {
        if (this.selectedImageIndex === 0) {
            this.selectedImageIndex = this.images.length - 1;
        }
        else {
            this.selectedImageIndex--;
        }
    }
};
CarouselComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
CarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'carousel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./carousel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/carousel/carousel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./carousel.component.css */ "./src/app/blog/carousel/carousel.component.css")).default]
    })
], CarouselComponent);



/***/ }),

/***/ "./src/app/blog/social-media-links/social-media-links.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/blog/social-media-links/social-media-links.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n    width: 100%;\n    height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9zb2NpYWwtbWVkaWEtbGlua3Mvc29jaWFsLW1lZGlhLWxpbmtzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvc29jaWFsLW1lZGlhLWxpbmtzL3NvY2lhbC1tZWRpYS1saW5rcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/blog/social-media-links/social-media-links.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/blog/social-media-links/social-media-links.component.ts ***!
  \*************************************************************************/
/*! exports provided: SocialMediaLinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialMediaLinksComponent", function() { return SocialMediaLinksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SocialMediaLinksComponent = class SocialMediaLinksComponent {
};
SocialMediaLinksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'social-media-links',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./social-media-links.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/social-media-links/social-media-links.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./social-media-links.component.css */ "./src/app/blog/social-media-links/social-media-links.component.css")).default]
    })
], SocialMediaLinksComponent);



/***/ }),

/***/ "./src/app/home/cell-phone-image/cell-phone-image.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/home/cell-phone-image/cell-phone-image.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n    background: rgb(4, 116, 192);\n    background: -webkit-gradient(linear, left top, right top, color-stop(32%, rgba(4, 116, 192, 1)), color-stop(43%, rgba(17, 118, 196, 1)), color-stop(66%, rgba(236, 192, 39, 1)));\n    background: linear-gradient(90deg, rgba(4, 116, 192, 1) 32%, rgba(17, 118, 196, 1) 43%, rgba(236, 192, 39, 1) 66%);\n    text-align: center;\n    color: #333;\n}\nimg {\n    width: 100%;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jZWxsLXBob25lLWltYWdlL2NlbGwtcGhvbmUtaW1hZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDRCQUE0QjtJQUM1QixnTEFBa0g7SUFBbEgsa0hBQWtIO0lBQ2xILGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY2VsbC1waG9uZS1pbWFnZS9jZWxsLXBob25lLWltYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gICAgYmFja2dyb3VuZDogcmdiKDQsIDExNiwgMTkyKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoNCwgMTE2LCAxOTIsIDEpIDMyJSwgcmdiYSgxNywgMTE4LCAxOTYsIDEpIDQzJSwgcmdiYSgyMzYsIDE5MiwgMzksIDEpIDY2JSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjMzMzO1xufVxuaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuIl19 */");

/***/ }),

/***/ "./src/app/home/cell-phone-image/cell-phone-image.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/home/cell-phone-image/cell-phone-image.component.ts ***!
  \*********************************************************************/
/*! exports provided: CellPhoneImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CellPhoneImageComponent", function() { return CellPhoneImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CellPhoneImageComponent = class CellPhoneImageComponent {
    constructor() {
        this.title = 'St.Louis Phone Repair';
        this.selectedImageIndex = 0;
        this.imagesSource = [
            "../../assets/images/phone-repair.jpg",
            "../../assets/images/phone-repair-img-one.JPG",
            "../../assets/images/phone-repair-img-two.JPG"
        ];
    }
    ngOnInit() {
        this.imagesSource = this.imagesSource;
        setInterval(() => {
            this.onNext();
        }, 2000);
    }
    onNext() {
        if (this.selectedImageIndex + 1 >= this.imagesSource.length) {
            this.selectedImageIndex = 0;
        }
        else {
            this.selectedImageIndex++;
        }
    }
    onPrev() {
        if (this.selectedImageIndex === 0) {
            this.selectedImageIndex = this.imagesSource.length - 1;
        }
        else {
            this.selectedImageIndex--;
        }
    }
};
CellPhoneImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'cell-phone-image',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cell-phone-image.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/cell-phone-image/cell-phone-image.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cell-phone-image.component.css */ "./src/app/home/cell-phone-image/cell-phone-image.component.css")).default]
    })
], CellPhoneImageComponent);



/***/ }),

/***/ "./src/app/home/countdown-timer/countdown-timer.component.css":
/*!********************************************************************!*\
  !*** ./src/app/home/countdown-timer/countdown-timer.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\n    text-align: center;\n    font-family: 'Nanum Brush Script', cursive;\n    font-size: 1.5rem;\n    padding-top: 1rem;\n}\nh3 {\n    text-align: center;\n    font-size: 2.5rem;\n    font-family: 'Nanum Brush Script', cursive;\n    margin: 0;\n}\n@media screen and (min-width:1200px) {\n    h2 {\n        font-size: 2.5rem;\n    }\n    h3 {\n        font-size: 3.5rem;\n    } \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb3VudGRvd24tdGltZXIvY291bnRkb3duLXRpbWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsMENBQTBDO0lBQzFDLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsMENBQTBDO0lBQzFDLFNBQVM7QUFDYjtBQUNBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9jb3VudGRvd24tdGltZXIvY291bnRkb3duLXRpbWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnTmFudW0gQnJ1c2ggU2NyaXB0JywgY3Vyc2l2ZTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbn1cbmgzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgZm9udC1mYW1pbHk6ICdOYW51bSBCcnVzaCBTY3JpcHQnLCBjdXJzaXZlO1xuICAgIG1hcmdpbjogMDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTIwMHB4KSB7XG4gICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICB9XG4gICAgaDMge1xuICAgICAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICB9IFxufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/countdown-timer/countdown-timer.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/home/countdown-timer/countdown-timer.component.ts ***!
  \*******************************************************************/
/*! exports provided: CountdownTimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownTimerComponent", function() { return CountdownTimerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CountdownTimerComponent = class CountdownTimerComponent {
    constructor() {
        this.countDown = new Date('May 31, 2020 12:00:00').getTime();
        this.timer = '';
        this.title = 'Hurry! Sale Ends:';
    }
    ngOnInit() {
        setInterval(() => {
            //gets today's date
            const now = new Date().getTime();
            //the date we are counting to minus today's live time
            const distance = this.countDown - now;
            // Time calculations for days, hours, minutes and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            this.timer = `${days}days ${hours}hours ${minutes}minutes ${seconds}seconds`;
        }, 1000);
    }
};
CountdownTimerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'countdown-timer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./countdown-timer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/countdown-timer/countdown-timer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./countdown-timer.component.css */ "./src/app/home/countdown-timer/countdown-timer.component.css")).default]
    })
], CountdownTimerComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media screen and (min-width: 1200px) {\n    div {\n        padding: 0rem 10rem;\n    }\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLG1CQUFtQjtJQUN2Qjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgZGl2IHtcbiAgICAgICAgcGFkZGluZzogMHJlbSAxMHJlbTtcbiAgICB9XG4gICAgXG59Il19 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/home/promo/promo.component.css":
/*!************************************************!*\
  !*** ./src/app/home/promo/promo.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\n    margin-top: 1rem;\n    font-size: 1.5rem;\n    text-align: center;\n    color: #333;\n}\n\nimg {\n    width: 100%;\n    height: auto;\n    box-shadow: 10px 10px 10px 10px #888888;\n}\n\n@media screen and (min-width: 1200px) {\n    h2 {\n        font-size: 2.8rem;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wcm9tby9wcm9tby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9wcm9tby9wcm9tby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjMzMzO1xufVxuXG5pbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTBweCAxMHB4ICM4ODg4ODg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAyLjhyZW07XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/promo/promo.component.ts":
/*!***********************************************!*\
  !*** ./src/app/home/promo/promo.component.ts ***!
  \***********************************************/
/*! exports provided: PromoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromoComponent", function() { return PromoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");



let PromoComponent = class PromoComponent {
    constructor() {
        this.title = 'Deal Of The Month';
    }
};
PromoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'promo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./promo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/promo/promo.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fade', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ fontSize: 1, opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(2000),
                ]),
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./promo.component.css */ "./src/app/home/promo/promo.component.css")).default]
    })
], PromoComponent);



/***/ }),

/***/ "./src/app/home/quick-links/quick-links.component.css":
/*!************************************************************!*\
  !*** ./src/app/home/quick-links/quick-links.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".quick-links-grid-container {\n    display: grid;\n    grid-template-columns: auto auto;\n    width: 100%;\n}\n\n.grid-item {\n    background-color: black;\n    border: 5px solid #fff;\n    padding: 20px;\n    text-align: center;\n}\n\na {\n    color: #fff;\n    text-decoration: none;\n    text-align: center;\n\n}\n\nh1 {\n    text-align: center;\n    color: #333;\n    font-weight: 100;\n    font-size: 1.2rem;\n}\n\n@media screen and (min-width:1200px) {\n    h1 {\n        font-size: 2.2rem;\n    }\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9xdWljay1saW5rcy9xdWljay1saW5rcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGtCQUFrQjs7QUFFdEI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9xdWljay1saW5rcy9xdWljay1saW5rcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnF1aWNrLWxpbmtzLWdyaWQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZ3JpZC1pdGVtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjZmZmO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuYSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxufVxuaDEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzMzMztcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMjAwcHgpIHtcbiAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xuICAgIH1cbn1cblxuIl19 */");

/***/ }),

/***/ "./src/app/home/quick-links/quick-links.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/quick-links/quick-links.component.ts ***!
  \***********************************************************/
/*! exports provided: QuickLinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickLinksComponent", function() { return QuickLinksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let QuickLinksComponent = class QuickLinksComponent {
    constructor() {
        this.Hours = 'Hours';
        this.Weekdays = 'Monday - Saturday 9:00 AM - 7:00 PM';
        this.Phone = '(314).669.4292';
        this.Closed = 'Sunday : Closed';
        this.Services = 'SERVICES';
        this.Book = 'BOOK';
        this.Accessories = 'ACCESSORIES';
        this.Blog = "BLOG";
    }
};
QuickLinksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'quick-links',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quick-links.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/quick-links/quick-links.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quick-links.component.css */ "./src/app/home/quick-links/quick-links.component.css")).default]
    })
], QuickLinksComponent);



/***/ }),

/***/ "./src/app/services/book-now/book-now.component.css":
/*!**********************************************************!*\
  !*** ./src/app/services/book-now/book-now.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#book-now-image {\n    width: 100%;\n    opacity: 0.6;\n}\n\nbutton {\n    bottom: 4rem;\n    left: 1rem;\n}\n\n.top-right {\n    position: absolute;\n    top: 9rem;\n    font-size: 1.3rem;\n    font-weight: 500;\n}\n\nh1 {\n    text-align: center;\n    margin: 0;\n    font-size: 1.5rem;\n}\n\n@media screen and (min-width: 1200px) {\n    button {\n        bottom: 8rem;\n        left: 1rem;\n        width: 10rem;\n        height: 4rem;\n        font-size: 1rem;\n    }\n    h1 {\n        text-align: center;\n        margin: 0;\n        font-size: 2.5rem;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZXMvYm9vay1ub3cvYm9vay1ub3cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0k7UUFDSSxZQUFZO1FBQ1osVUFBVTtRQUNWLFlBQVk7UUFDWixZQUFZO1FBQ1osZUFBZTtJQUNuQjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCxpQkFBaUI7SUFDckI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL2Jvb2stbm93L2Jvb2stbm93LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYm9vay1ub3ctaW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG9wYWNpdHk6IDAuNjtcbn1cblxuYnV0dG9uIHtcbiAgICBib3R0b206IDRyZW07XG4gICAgbGVmdDogMXJlbTtcbn1cblxuLnRvcC1yaWdodCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogOXJlbTtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG5oMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgYnV0dG9uIHtcbiAgICAgICAgYm90dG9tOiA4cmVtO1xuICAgICAgICBsZWZ0OiAxcmVtO1xuICAgICAgICB3aWR0aDogMTByZW07XG4gICAgICAgIGhlaWdodDogNHJlbTtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cbiAgICBoMSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/services/book-now/book-now.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/book-now/book-now.component.ts ***!
  \*********************************************************/
/*! exports provided: BookNowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookNowComponent", function() { return BookNowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BookNowComponent = class BookNowComponent {
    constructor() {
        this.title = 'Cell Phone Patients';
        this.book = 'Book Now';
    }
};
BookNowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'book-now',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./book-now.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/book-now/book-now.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./book-now.component.css */ "./src/app/services/book-now/book-now.component.css")).default]
    })
], BookNowComponent);



/***/ }),

/***/ "./src/app/services/cell-phone-patients/cell-phone-patients.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/services/cell-phone-patients/cell-phone-patients.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fa-briefcase-medical {\n    color: red;\n}\n\nul.accordion {\n    float: left;\n    list-style: none;\n    font-family: Camria, serif;\n    font-size: 16px;\n    font-style: italic;\n    line-height: 1.5em;\n    margin: 0;\n    padding: 0;\n}\n\nul.accordion li {\n    height: 570px;\n    border-right: 2px solid #fff;\n    border-bottom: 2px solid #fff;\n    background-color: #fff;\n    background-repeat: no-repeat;\n    background-position: center;\n    position: relative;\n    overflow: hidden;\n    cursor: pointer;\n    box-shadow: 1px 3px 15px #555;\n}\n\nli {\n    width: 83px;\n    -webkit-transition: width 3s;\n    transition: width 3s;\n}\n\n.heading {\n    background-color: #fff;\n    padding: 10px;\n    margin-top: 60px;\n    opacity: 0.9;\n    text-transform: uppercase;\n    font-style: normal;\n    font-weight: bold;\n    letter-spacing: 1px;\n    font-size: 14px;\n    color: #444;\n    text-align: center;\n    text-shadow: -1px -1px 1px #ccc;\n}\n\nli>div:last-of-type {\n    opacity: 0;\n    -webkit-transition: opacity 300ms;\n    transition: opacity 300ms;\n}\n\nli>div:first-of-type {\n    opacity: 1;\n    -webkit-transition: opacity 300ms;\n    transition: opacity 300ms;\n}\n\nli:hover>div:last-of-type {\n    opacity: 1;\n}\n\nli:hover>div:first-of-type {\n    opacity: 0;\n}\n\nli:hover {\n    width: 400px;\n    -webkit-transition: width 3s;\n    transition: width 3s;\n}\n\n.description {\n    position: absolute;\n    width: 480px;\n    height: 180px;\n    bottom: 0px;\n    left: 0px;\n    background: rgba(255, 255, 255, 0.8);\n}\n\nh2 {\n    text-transform: uppercase;\n    font-style: normal;\n    font-weight: bold;\n    letter-spacing: 1px;\n    font-size: 45px;\n    color: rgb(10, 8, 8);\n    text-align: left;\n    margin: 11px 0px 15px 20px;\n    text-shadow: -1px -1px 1px #ccc;\n}\n\nh4 {\n    text-decoration: line-through;\n}\n\np {\n    line-height: 14px;\n    margin: 10px 22px;\n    font-family: 'Rakkas';\n    font-size: 22px;\n    font-style: initial;\n    font-weight: bold;\n    text-transform: none;\n    letter-spacing: normal;\n    line-height: 1.6em;\n}\n\nul.accordion li .description a {\n    position: absolute;\n    bottom: 5px;\n    left: 20px;\n    text-transform: uppercase;\n    font-style: normal;\n    font-size: 11px;\n    text-decoration: none;\n    color: #888;\n}\n\nul.accordion li .description a:hover {\n    color: #333;\n    text-decoration: underline;\n}\n\n@media screen and (max-width: 500px) {\n    ul.accordion {\n        list-style: none;\n        width: 100%;\n        right: 11px;\n        font-family: Cambria, serif;\n        font-size: 16px;\n        font-style: italic;\n        line-height: 1.5em;\n        display: grid;\n        top: 32%;\n    }\n    ul.accordion li {\n        float: right;\n        height: 556px;\n        border-right: 2px solid #fff;\n        border-bottom: 2px solid #fff;\n        background-color: #fff;\n        background-repeat: no-repeat;\n        background-position: center center;\n        position: relative;\n        overflow: hidden;\n        cursor: pointer;\n        box-shadow: 1px 3px 15px #555;\n    }\n    li {\n        width: 90px;\n        -webkit-transition: width 3s;\n        transition: width 3s;\n    }\n    .heading {\n        background-color: #fff;\n        padding: 10px;\n        margin-top: 60px;\n        opacity: 0.9;\n        text-transform: uppercase;\n        font-style: normal;\n        font-weight: bold;\n        letter-spacing: 1px;\n        font-size: 14px;\n        color: #444;\n        text-align: center;\n        text-shadow: -1px -1px 1px #ccc;\n    }\n    li>div:last-of-type {\n        opacity: 0;\n        -webkit-transition: opacity 300ms;\n        transition: opacity 300ms;\n    }\n    li>div:first-of-type {\n        opacity: 1;\n        -webkit-transition: opacity 300ms;\n        transition: opacity 300ms;\n    }\n    li:hover>div:last-of-type {\n        opacity: 1;\n    }\n    li:hover>div:first-of-type {\n        opacity: 0;\n    }\n    li:hover {\n        width: 400px;\n        -webkit-transition: width 3s;\n        transition: width 3s;\n    }\n    .description {\n        position: absolute;\n        width: 480px;\n        height: 180px;\n        bottom: 0px;\n        left: 0px;\n        background: rgba(255, 255, 255, 0.8);\n    }\n    h2 {\n        text-transform: uppercase;\n        font-style: normal;\n        font-weight: bold;\n        letter-spacing: 1px;\n        font-size: 45px;\n        color: rgb(10, 8, 8);\n        text-align: left;\n        margin: 11px 0px 15px 20px;\n        text-shadow: -1px -1px 1px #ccc;\n    }\n    p {\n        line-height: 14px;\n        margin: 10px 22px;\n        font-family: 'Rakkas';\n        font-size: 22px;\n        font-style: initial;\n        font-weight: bold;\n        text-transform: none;\n        letter-spacing: normal;\n        line-height: 1.6em;\n    }\n    ul.accordion li .description a {\n        position: absolute;\n        bottom: 5px;\n        left: 20px;\n        text-transform: uppercase;\n        font-style: normal;\n        font-size: 11px;\n        text-decoration: none;\n        color: #888;\n    }\n    ul.accordion li .description a:hover {\n        color: #333;\n        text-decoration: underline;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZXMvY2VsbC1waG9uZS1wYXRpZW50cy9jZWxsLXBob25lLXBhdGllbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0Isc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBR2YsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksV0FBVztJQUNYLDRCQUFvQjtJQUFwQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixpQ0FBeUI7SUFBekIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlDQUF5QjtJQUF6Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osNEJBQW9CO0lBQXBCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLFdBQVc7SUFDWCxTQUFTO0lBQ1Qsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsV0FBVztRQUNYLFdBQVc7UUFDWCwyQkFBMkI7UUFDM0IsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLFFBQVE7SUFDWjtJQUNBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYiw0QkFBNEI7UUFDNUIsNkJBQTZCO1FBQzdCLHNCQUFzQjtRQUN0Qiw0QkFBNEI7UUFDNUIsa0NBQWtDO1FBQ2xDLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsZUFBZTtRQUdmLDZCQUE2QjtJQUNqQztJQUNBO1FBQ0ksV0FBVztRQUNYLDRCQUFvQjtRQUFwQixvQkFBb0I7SUFDeEI7SUFDQTtRQUNJLHNCQUFzQjtRQUN0QixhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLFlBQVk7UUFDWix5QkFBeUI7UUFDekIsa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsK0JBQStCO0lBQ25DO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsaUNBQXlCO1FBQXpCLHlCQUF5QjtJQUM3QjtJQUNBO1FBQ0ksVUFBVTtRQUNWLGlDQUF5QjtRQUF6Qix5QkFBeUI7SUFDN0I7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxZQUFZO1FBQ1osNEJBQW9CO1FBQXBCLG9CQUFvQjtJQUN4QjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixhQUFhO1FBQ2IsV0FBVztRQUNYLFNBQVM7UUFDVCxvQ0FBb0M7SUFDeEM7SUFDQTtRQUNJLHlCQUF5QjtRQUN6QixrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2Ysb0JBQW9CO1FBQ3BCLGdCQUFnQjtRQUNoQiwwQkFBMEI7UUFDMUIsK0JBQStCO0lBQ25DO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLHFCQUFxQjtRQUNyQixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLGlCQUFpQjtRQUNqQixvQkFBb0I7UUFDcEIsc0JBQXNCO1FBQ3RCLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxVQUFVO1FBQ1YseUJBQXlCO1FBQ3pCLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YscUJBQXFCO1FBQ3JCLFdBQVc7SUFDZjtJQUNBO1FBQ0ksV0FBVztRQUNYLDBCQUEwQjtJQUM5QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvc2VydmljZXMvY2VsbC1waG9uZS1wYXRpZW50cy9jZWxsLXBob25lLXBhdGllbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmEtYnJpZWZjYXNlLW1lZGljYWwge1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbnVsLmFjY29yZGlvbiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBmb250LWZhbWlseTogQ2FtcmlhLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxudWwuYWNjb3JkaW9uIGxpIHtcbiAgICBoZWlnaHQ6IDU3MHB4O1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNmZmY7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLW1vei1ib3gtc2hhZG93OiAxcHggM3B4IDE1cHggIzU1NTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAzcHggMTVweCAjNTU1O1xuICAgIGJveC1zaGFkb3c6IDFweCAzcHggMTVweCAjNTU1O1xufVxuXG5saSB7XG4gICAgd2lkdGg6IDgzcHg7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggM3M7XG59XG5cbi5oZWFkaW5nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogNjBweDtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM0NDQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMXB4ICNjY2M7XG59XG5cbmxpPmRpdjpsYXN0LW9mLXR5cGUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcztcbn1cblxubGk+ZGl2OmZpcnN0LW9mLXR5cGUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcztcbn1cblxubGk6aG92ZXI+ZGl2Omxhc3Qtb2YtdHlwZSB7XG4gICAgb3BhY2l0eTogMTtcbn1cblxubGk6aG92ZXI+ZGl2OmZpcnN0LW9mLXR5cGUge1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbmxpOmhvdmVyIHtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggM3M7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA0ODBweDtcbiAgICBoZWlnaHQ6IDE4MHB4O1xuICAgIGJvdHRvbTogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG59XG5cbmgyIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICBjb2xvcjogcmdiKDEwLCA4LCA4KTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbjogMTFweCAwcHggMTVweCAyMHB4O1xuICAgIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMXB4ICNjY2M7XG59XG5cbmg0IHtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxucCB7XG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgbWFyZ2luOiAxMHB4IDIycHg7XG4gICAgZm9udC1mYW1pbHk6ICdSYWtrYXMnO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBmb250LXN0eWxlOiBpbml0aWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDEuNmVtO1xufVxuXG51bC5hY2NvcmRpb24gbGkgLmRlc2NyaXB0aW9uIGEge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDVweDtcbiAgICBsZWZ0OiAyMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICM4ODg7XG59XG5cbnVsLmFjY29yZGlvbiBsaSAuZGVzY3JpcHRpb24gYTpob3ZlciB7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgdWwuYWNjb3JkaW9uIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHJpZ2h0OiAxMXB4O1xuICAgICAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgc2VyaWY7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIHRvcDogMzIlO1xuICAgIH1cbiAgICB1bC5hY2NvcmRpb24gbGkge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIGhlaWdodDogNTU2cHg7XG4gICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNmZmY7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiAxcHggM3B4IDE1cHggIzU1NTtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggM3B4IDE1cHggIzU1NTtcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDNweCAxNXB4ICM1NTU7XG4gICAgfVxuICAgIGxpIHtcbiAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDNzO1xuICAgIH1cbiAgICAuaGVhZGluZyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gICAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogIzQ0NDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDFweCAjY2NjO1xuICAgIH1cbiAgICBsaT5kaXY6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcztcbiAgICB9XG4gICAgbGk+ZGl2OmZpcnN0LW9mLXR5cGUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zO1xuICAgIH1cbiAgICBsaTpob3Zlcj5kaXY6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgbGk6aG92ZXI+ZGl2OmZpcnN0LW9mLXR5cGUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICBsaTpob3ZlciB7XG4gICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggM3M7XG4gICAgfVxuICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDQ4MHB4O1xuICAgICAgICBoZWlnaHQ6IDE4MHB4O1xuICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgfVxuICAgIGgyIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgZm9udC1zaXplOiA0NXB4O1xuICAgICAgICBjb2xvcjogcmdiKDEwLCA4LCA4KTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgbWFyZ2luOiAxMXB4IDBweCAxNXB4IDIwcHg7XG4gICAgICAgIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMXB4ICNjY2M7XG4gICAgfVxuICAgIHAge1xuICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDIycHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUmFra2FzJztcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICBmb250LXN0eWxlOiBpbml0aWFsO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjZlbTtcbiAgICB9XG4gICAgdWwuYWNjb3JkaW9uIGxpIC5kZXNjcmlwdGlvbiBhIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDVweDtcbiAgICAgICAgbGVmdDogMjBweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6ICM4ODg7XG4gICAgfVxuICAgIHVsLmFjY29yZGlvbiBsaSAuZGVzY3JpcHRpb24gYTpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/services/cell-phone-patients/cell-phone-patients.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/services/cell-phone-patients/cell-phone-patients.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CellPhonePatientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CellPhonePatientsComponent", function() { return CellPhonePatientsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");



let CellPhonePatientsComponent = class CellPhonePatientsComponent {
    constructor() {
        this.title = 'Cell Phone Patients';
        this.phones = [
            {
                phoneName: 'iPhone 8+',
                repairPrice: `Repair Price - US $${75.00}`,
                oldRepairPrice: `Repair Price - US $${90.00}`,
                src: 'url(https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone8/plus/iphone8-plus-gold-select-2018?wid=513&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1522347727972)',
            },
            {
                phoneName: 'iPhone 8',
                repairPrice: `Repair Price - US $${70.00}`,
                oldRepairPrice: `Repair Price - US $${85.00}`,
                src: 'url(https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone8/plus/iphone8-plus-spgray-select-2018?wid=513&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1522347735544)',
            },
            {
                phoneName: 'iPhone 7+',
                repairPrice: `Repair Price - US $${75.00}`,
                oldRepairPrice: `Repair Price - US $${90.00}`,
                src: 'url(https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/plus/iphone7-plus-silver-select-2016?wid=513&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1472430173129)'
            },
            {
                phoneName: 'iPhone 7',
                repairPrice: `Repair Price - US $${70.00}`,
                oldRepairPrice: `Repair Price - US $${85.00}`,
                src: 'url(https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/plus/iphone7-plus-gold-select-2016?wid=513&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1472430108712)'
            },
            {
                phoneName: 'iPhone 6s+',
                repairPrice: `Repair Price - US $${65.00}`,
                oldRepairPrice: `Repair Price - US $${80.00}`,
                src: 'url(https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/plus/iphone7-plus-rosegold-select-2016?wid=513&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1472430147951)'
            },
            {
                phoneName: 'iPhone 6s',
                repairPrice: `Repair Price - US $${60.00}`,
                oldRepairPrice: `Repair Price - US $${75.00}`,
                src: 'url(https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/plus/iphone7-plus-black-select-2016?wid=513&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1472430090682)'
            },
            {
                phoneName: 'iPhone 6+',
                repairPrice: `Repair Price - US $${65.00}`,
                oldRepairPrice: `Repair Price - US $${80.00}`,
                src: 'url(https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/plus/iphone7-plus-silver-select-2016?wid=513&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1472430173129)'
            },
            {
                phoneName: 'iPhone 6',
                repairPrice: `Repair Price - US $${55.00}`,
                oldRepairPrice: `Repair Price - US $${70.00}`,
                src: 'url(https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/plus/iphone7-plus-gold-select-2016?wid=513&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1472430108712)'
            },
            {
                phoneName: 'iPhone SE',
                repairPrice: `Repair Price - US $${50.00}`,
                oldRepairPrice: `Repair Price - US $${65.00}`,
                src: 'url(https://images-na.ssl-images-amazon.com/images/I/61nFOTQPzEL._SX569_wid=513&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1472430108712.jpg)'
            },
            {
                phoneName: 'iPhone X, XR, XS',
                repairPrice: `Repair Price - US $${135.00}`,
                oldRepairPrice: `Repair Price - US $${165.00}`,
                src: 'url(https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xr-blue-select-201809?wid=441&hei=529&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1565209264208)',
            },
            {
                phoneName: 'iPhone XS Max',
                repairPrice: `Repair Price - US $${185.00}`,
                oldRepairPrice: `Repair Price - US $${200.00}`,
                src: 'url(https://img.gkbcdn.com/p/2019-11-22/apple-iphone-x-64gb-silver--used--20191122085356800._w500_.jpg)'
            },
        ];
    }
};
CellPhonePatientsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'cell-phone-patients',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cell-phone-patients.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/cell-phone-patients/cell-phone-patients.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fade', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        letterSpacing: '10px', opacity: 1, color: 'red'
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(5000)
                ])
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cell-phone-patients.component.css */ "./src/app/services/cell-phone-patients/cell-phone-patients.component.css")).default]
    })
], CellPhonePatientsComponent);



/***/ }),

/***/ "./src/app/services/services.component.css":
/*!*************************************************!*\
  !*** ./src/app/services/services.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/services/services.component.ts":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ServicesComponent = class ServicesComponent {
    constructor() { }
    ngOnInit() {
    }
};
ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'services',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./services.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/services.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./services.component.css */ "./src/app/services/services.component.css")).default]
    })
], ServicesComponent);



/***/ }),

/***/ "./src/app/toolbar/toolbar.component.css":
/*!***********************************************!*\
  !*** ./src/app/toolbar/toolbar.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-toolbar {\n    position: fixed;\n    }\n    \n    .mat-toolbar {\n      height: 6rem;\n      background: rgb(4, 116, 192);\n      background: -webkit-gradient(linear, left top, right top, color-stop(32%, rgba(4, 116, 192, 1)), color-stop(43%, rgba(17, 118, 196, 1)), color-stop(66%, rgba(236, 192, 39, 1)));\n      background: linear-gradient(90deg, rgba(4, 116, 192, 1) 32%, rgba(17, 118, 196, 1) 43%, rgba(236, 192, 39, 1) 66%);\n    }\n    \n    img {\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 17rem;\n      height: 8rem;\n    }\n    \n    .spacer {\n      -webkit-box-flex: 1;\n              flex: 1 1 auto;\n    }\n    \n    .links {\n       display: none;\n     }\n    \n    .menu {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n              flex-direction: column;\n      padding-top: 6rem;\n    }\n    \n    .menu a {\n      color: grey;\n      width: 100%;\n      margin: 0 10px;\n      line-height: 70px;\n      text-decoration: none;\n      border-bottom: 1px solid #EAEAEB;\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-pack: center;\n              justify-content: center;\n    }\n    \n    @media only screen and (min-width: 600px) {\n      .links {\n        display: -webkit-box;\n        display: flex;\n      }\n    \n      .links a {\n        color: grey;\n        margin: 0 1rem;\n        line-height: 70px;\n        text-decoration: none;\n      }\n    \n      .menu, mat-icon {\n        display: none;\n      }\n    }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2Y7O0lBRUE7TUFDRSxZQUFZO01BQ1osNEJBQTRCO01BQzVCLGdMQUFrSDtNQUFsSCxrSEFBa0g7SUFDcEg7O0lBRUE7TUFDRSxlQUFlO01BQ2YsTUFBTTtNQUNOLE9BQU87TUFDUCxZQUFZO01BQ1osWUFBWTtJQUNkOztJQUVBO01BQ0UsbUJBQWM7Y0FBZCxjQUFjO0lBQ2hCOztJQUVBO09BQ0csYUFBYTtLQUNmOztJQUVEO01BQ0Usb0JBQWE7TUFBYixhQUFhO01BQ2IsNEJBQXNCO01BQXRCLDZCQUFzQjtjQUF0QixzQkFBc0I7TUFDdEIsaUJBQWlCO0lBQ25COztJQUVBO01BQ0UsV0FBVztNQUNYLFdBQVc7TUFDWCxjQUFjO01BQ2QsaUJBQWlCO01BQ2pCLHFCQUFxQjtNQUNyQixnQ0FBZ0M7TUFDaEMsb0JBQWE7TUFBYixhQUFhO01BQ2Isd0JBQXVCO2NBQXZCLHVCQUF1QjtJQUN6Qjs7SUFFQTtNQUNFO1FBQ0Usb0JBQWE7UUFBYixhQUFhO01BQ2Y7O01BRUE7UUFDRSxXQUFXO1FBQ1gsY0FBYztRQUNkLGlCQUFpQjtRQUNqQixxQkFBcUI7TUFDdkI7O01BRUE7UUFDRSxhQUFhO01BQ2Y7SUFDRiIsImZpbGUiOiJzcmMvYXBwL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXRvb2xiYXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB9XG4gICAgXG4gICAgLm1hdC10b29sYmFyIHtcbiAgICAgIGhlaWdodDogNnJlbTtcbiAgICAgIGJhY2tncm91bmQ6IHJnYig0LCAxMTYsIDE5Mik7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoNCwgMTE2LCAxOTIsIDEpIDMyJSwgcmdiYSgxNywgMTE4LCAxOTYsIDEpIDQzJSwgcmdiYSgyMzYsIDE5MiwgMzksIDEpIDY2JSk7XG4gICAgfVxuICAgIFxuICAgIGltZyB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgd2lkdGg6IDE3cmVtO1xuICAgICAgaGVpZ2h0OiA4cmVtO1xuICAgIH1cbiAgICBcbiAgICAuc3BhY2VyIHtcbiAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIH1cbiAgICBcbiAgICAubGlua3Mge1xuICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgIH1cbiAgICBcbiAgICAubWVudSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIHBhZGRpbmctdG9wOiA2cmVtO1xuICAgIH1cbiAgICBcbiAgICAubWVudSBhIHtcbiAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW46IDAgMTBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiA3MHB4O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFQUVBRUI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICAgIFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgICAgIC5saW5rcyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB9XG4gICAgXG4gICAgICAubGlua3MgYSB7XG4gICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICBtYXJnaW46IDAgMXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDcwcHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICBcbiAgICAgIC5tZW51LCBtYXQtaWNvbiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuIl19 */");

/***/ }),

/***/ "./src/app/toolbar/toolbar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/toolbar/toolbar.component.ts ***!
  \**********************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ToolbarComponent = class ToolbarComponent {
    constructor() {
        this.showMenu = false;
    }
};
ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'toolbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./toolbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/toolbar/toolbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./toolbar.component.css */ "./src/app/toolbar/toolbar.component.css")).default]
    })
], ToolbarComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/user/Code/doctorIOS/my-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map