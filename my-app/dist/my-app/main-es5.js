function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/accessories/accessories.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/accessories/accessories.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccessoriesAccessoriesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>accessories works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/accessories/coming-soon/coming-soon.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/accessories/coming-soon/coming-soon.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccessoriesComingSoonComingSoonComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>coming-soon works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<toolbar></toolbar>\n<div class=\"placeHolder\"></div>\n<router-outlet></router-outlet>\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/appointment-page/appointment-page.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/appointment-page/appointment-page.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppointmentPageAppointmentPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form></form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/appointment-page/form/form.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/appointment-page/form/form.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppointmentPageFormFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<iframe id=\"JotFormIFrame-83596360595167\" title=\"Online Appointment Request \" onload=\"window.parent.scrollTo(0,0)\"\n    allowtransparency=\"true\" allowfullscreen=\"true\" allow=\"geolocation; microphone; camera\"\n    src=\"https://form.jotform.com/summer4414/online-appointment-request-\" frameborder=\"0\" style=\"\n    min-width: 100%;\n    height:539px;\n    border:none;\" scrolling=\"no\">\n</iframe>\n<script type=\"text/javascript\">\n    var ifr = document.getElementById(\"JotFormIFrame-83596360595167\");\n    if (window.location.href && window.location.href.indexOf(\"?\") > -1) {\n        var get = window.location.href.substr(window.location.href.indexOf(\"?\") + 1);\n        if (ifr && get.length > 0) {\n            var src = ifr.src;\n            src = src.indexOf(\"?\") > -1 ? src + \"&\" + get : src + \"?\" + get;\n            ifr.src = src;\n        }\n    }\n    window.handleIFrameMessage = function (e) {\n        if (typeof e.data === 'object') { return; }\n        var args = e.data.split(\":\");\n        if (args.length > 2) { iframe = document.getElementById(\"JotFormIFrame-\" + args[(args.length - 1)]); } else { iframe = document.getElementById(\"JotFormIFrame\"); }\n        if (!iframe) { return; }\n        switch (args[0]) {\n            case \"scrollIntoView\":\n                iframe.scrollIntoView();\n                break;\n            case \"setHeight\":\n                iframe.style.height = args[1] + \"px\";\n                break;\n            case \"collapseErrorPage\":\n                if (iframe.clientHeight > window.innerHeight) {\n                    iframe.style.height = window.innerHeight + \"px\";\n                }\n                break;\n            case \"reloadPage\":\n                window.location.reload();\n                break;\n            case \"loadScript\":\n                var src = args[1];\n                if (args.length > 3) {\n                    src = args[1] + ':' + args[2];\n                }\n                var script = document.createElement('script');\n                script.src = src;\n                script.type = 'text/javascript';\n                document.body.appendChild(script);\n                break;\n            case \"exitFullscreen\":\n                if (window.document.exitFullscreen) window.document.exitFullscreen();\n                else if (window.document.mozCancelFullScreen) window.document.mozCancelFullScreen();\n                else if (window.document.mozCancelFullscreen) window.document.mozCancelFullScreen();\n                else if (window.document.webkitExitFullscreen) window.document.webkitExitFullscreen();\n                else if (window.document.msExitFullscreen) window.document.msExitFullscreen();\n                break;\n        }\n        var isJotForm = (e.origin.indexOf(\"jotform\") > -1) ? true : false;\n        if (isJotForm && \"contentWindow\" in iframe && \"postMessage\" in iframe.contentWindow) {\n            var urls = { \"docurl\": encodeURIComponent(document.URL), \"referrer\": encodeURIComponent(document.referrer) };\n            iframe.contentWindow.postMessage(JSON.stringify({ \"type\": \"urls\", \"value\": urls }), \"*\");\n        }\n    };\n    if (window.addEventListener) {\n        window.addEventListener(\"message\", handleIFrameMessage, false);\n    } else if (window.attachEvent) {\n        window.attachEvent(\"onmessage\", handleIFrameMessage);\n    }\n</script>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/about-us/about-us.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blog/about-us/about-us.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBlogAboutUsAboutUsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n    <h1>{{ title }} </h1>\n    <h5>{{ header }}</h5>\n</div>\n<h1>{{ about }}</h1>\n<h4>What we do</h4>\n<p>Here at Doctor iOS we repair your phone screens at a very affordable price to help you save money. Get low-cost\n    phone repair right at your door step because we even come to you.</p>\n<h4>Why we do it</h4>\n<p>Don't break your phone screen then break the bank! We strive to save you money. Expenses for a new cell phone often is over $500,\n    while an iPhone screen replacement or other common cell phone repairs cost more than $100 on average.</p>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/blog.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blog/blog.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBlogBlogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<carousel></carousel>\n<about-us></about-us>\n<modify-delete-form></modify-delete-form>\n<social-media-links></social-media-links>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/carousel/carousel.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blog/carousel/carousel.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBlogCarouselCarouselComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<iframe [src]=\"images[selectedImageIndex]\" \n        scrolling=\"no\" \n        frameborder=\"0\" \n        allowTransparency=\"true\"\n        allow=\"encrypted-media\">\n</iframe>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/modify-delete-form/modify-delete-form.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blog/modify-delete-form/modify-delete-form.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBlogModifyDeleteFormModifyDeleteFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n    <iframe\n    id=\"JotFormIFrame-83597646428170\"\n    title=\"Guest Blog Posting Form\"\n    onload=\"window.parent.scrollTo(0,0)\"\n    allowtransparency=\"true\"\n    allowfullscreen=\"true\"\n    allow=\"geolocation; microphone; camera\"\n    src=\"https://form.jotform.com/83597646428170\"\n    frameborder=\"0\"\n    style=\"\n    min-width: 100%;\n    height:1039px;\n    border:none;\"\n    scrolling=\"no\"\n  >\n  </iframe>\n  <script type=\"text/javascript\">\n    var ifr = document.getElementById(\"JotFormIFrame-83597646428170\");\n    if(window.location.href && window.location.href.indexOf(\"?\") > -1) {\n      var get = window.location.href.substr(window.location.href.indexOf(\"?\") + 1);\n      if(ifr && get.length > 0) {\n        var src = ifr.src;\n        src = src.indexOf(\"?\") > -1 ? src + \"&\" + get : src  + \"?\" + get;\n        ifr.src = src;\n      }\n    }\n    window.handleIFrameMessage = function(e) {\n      if (typeof e.data === 'object') { return; }\n      var args = e.data.split(\":\");\n      if (args.length > 2) { iframe = document.getElementById(\"JotFormIFrame-\" + args[(args.length - 1)]); } else { iframe = document.getElementById(\"JotFormIFrame\"); }\n      if (!iframe) { return; }\n      switch (args[0]) {\n        case \"scrollIntoView\":\n          iframe.scrollIntoView();\n          break;\n        case \"setHeight\":\n          iframe.style.height = args[1] + \"px\";\n          break;\n        case \"collapseErrorPage\":\n          if (iframe.clientHeight > window.innerHeight) {\n            iframe.style.height = window.innerHeight + \"px\";\n          }\n          break;\n        case \"reloadPage\":\n          window.location.reload();\n          break;\n        case \"loadScript\":\n          var src = args[1];\n          if (args.length > 3) {\n              src = args[1] + ':' + args[2];\n          }\n          var script = document.createElement('script');\n          script.src = src;\n          script.type = 'text/javascript';\n          document.body.appendChild(script);\n          break;\n        case \"exitFullscreen\":\n          if      (window.document.exitFullscreen)        window.document.exitFullscreen();\n          else if (window.document.mozCancelFullScreen)   window.document.mozCancelFullScreen();\n          else if (window.document.mozCancelFullscreen)   window.document.mozCancelFullScreen();\n          else if (window.document.webkitExitFullscreen)  window.document.webkitExitFullscreen();\n          else if (window.document.msExitFullscreen)      window.document.msExitFullscreen();\n          break;\n      }\n      var isJotForm = (e.origin.indexOf(\"jotform\") > -1) ? true : false;\n      if(isJotForm && \"contentWindow\" in iframe && \"postMessage\" in iframe.contentWindow) {\n        var urls = {\"docurl\":encodeURIComponent(document.URL),\"referrer\":encodeURIComponent(document.referrer)};\n        iframe.contentWindow.postMessage(JSON.stringify({\"type\":\"urls\",\"value\":urls}), \"*\");\n      }\n    };\n    if (window.addEventListener) {\n      window.addEventListener(\"message\", handleIFrameMessage, false);\n    } else if (window.attachEvent) {\n      window.attachEvent(\"onmessage\", handleIFrameMessage);\n    }\n    </script>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/social-media-links/social-media-links.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blog/social-media-links/social-media-links.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBlogSocialMediaLinksSocialMediaLinksComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<a href=\"https://www.facebook.com/doctoriOS.repair/\">\n    <img src=\"https://www.stlukeseye.com/wp-content/uploads/2018/03/like-us-on-facebook.jpg\">\n</a>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/cell-phone-image/cell-phone-image.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/cell-phone-image/cell-phone-image.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeCellPhoneImageCellPhoneImageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1> {{ title }}</h1>\n<img src=\"../../assets/images/phone-repair.jpg\" class=\"logo\">";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/countdown-timer/countdown-timer.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/countdown-timer/countdown-timer.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeCountdownTimerCountdownTimerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2>{{ title }} </h2>\n        <h3>{{timer}}</h3>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<promo></promo>\n<countdown-timer></countdown-timer>\n<cell-phone-image></cell-phone-image>\n<quick-links></quick-links>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/promo/promo.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/promo/promo.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePromoPromoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "    <div class=\"home\">\n        <h2 id=\"deal\">Deal of the month</h2>\n        <img src=\"../../assets/images/christmas-flyer.jpg\">\n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/quick-links/quick-links.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/quick-links/quick-links.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeQuickLinksQuickLinksComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"quick-links-grid-container\">\n    <div>\n        <div class=\"grid-item\"> <a [routerLink]=\"['/services']\">SERVICES</a></div>\n        <div class=\"grid-item\"> <a [routerLink]=\"['/book']\">BOOK</a></div>\n    </div>\n    <div>\n        <div class=\"grid-item\"> <a [routerLink]=\"['/accesories']\">ACCESSORIES</a></div>\n        <div class=\"grid-item\"> <a [routerLink]=\"['/blog']\">BLOG</a></div>\n    </div>\n</div>\n\n<div>\n    <h1> St.Louis<br> & <br>East Saint Louis Area</h1>\n    <h2> <i class=\"fas fa-phone-alt\"></i>{{ phone }}</h2>\n    <h1>{{ Hours }}</h1>\n    <h2>{{ weekdays }}</h2>\n    <h2>{{ Closed }}</h2>\n    <iframe\n        src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199412.4868559348!2d-90.38389084380192!3d38.6530165071809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8b4a9faed8ef9%3A0xbe39eaca22bbe05b!2sSt.+Louis%2C+MO!5e0!3m2!1sen!2sus!4v1547169660021\"\n        frameborder=\"0\" style=\"border:0; width: 100%; height: 500px;\" allowfullscreen=\"\">\n    </iframe>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/services/book-now/book-now.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/book-now/book-now.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppServicesBookNowBookNowComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<img src=\"http://www.cellphonerepairguyz.com/blog/wp-content/uploads/2018/01/Cell-Phone-Repair-Guyz-2.jpg\"\n    id=\"book-now-image\">\n\n<a [routerLink]=\"['/book']\"><button mat-raised-button>{{ book }}</button></a>\n<h1>{{ title }} <i class=\"fas fa-briefcase-medical\"></i></h1>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/services/cell-phone-patients/cell-phone-patients.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/cell-phone-patients/cell-phone-patients.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppServicesCellPhonePatientsCellPhonePatientsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n    <h1>{{ title }} </h1>\n</div>\n<div>\n    <ul class=\"accordion\">\n        <li class=\"ip8\">\n            <div class=\"heading\">iPhone 8+</div>\n            <div class=\"description\">\n                <h2>iPhone 8+</h2>\n                <p>Repair Price - US $75.00</p>\n                <h4>Repair Price - US $90.00</h4>\n            </div>\n        </li>\n    </ul>\n</div>\n\n<div>\n    <ul class=\"accordion\">\n        <li class=\"ip8small\">\n            <div class=\"heading\">iPhone 8</div>\n            <div class=\"description\">\n                <h2>iPhone 8</h2>\n                <p>Repair Price - US $70.00</p>\n                <h4>Repair Price - US $85.00</h4>\n            </div>\n        </li>\n    </ul>\n</div>\n<div>\n    <ul class=\"accordion\">\n        <li class=\"ip7\">\n            <div class=\"heading\">iPhone 7+</div>\n            <div class=\"description\">\n                <h2>iPhone 7+</h2>\n                <p>Repair Price - US $75.00</p>\n                <h4>Repair Price - US $90.00</h4>\n            </div>\n        </li>\n    </ul>\n</div>\n<div>\n    <ul class=\"accordion\">\n        <li class=\"ip7small\">\n            <div class=\"heading\">iPhone 7</div>\n            <div class=\"description\">\n                <h2>iPhone 7</h2>\n                <p>Repair Price - US $70.00</p>\n                <h4>Repair Price - US $85.00</h4>\n            </div>\n        </li>\n    </ul>\n</div>\n<div>\n    <ul class=\"accordion\">\n        <li class=\"ip6sPlus\">\n            <div class=\"heading\">iPhone 6s+</div>\n            <div class=\"description\">\n                <h2>iPhone 6s+</h2>\n                <p>Repair Price - US $65.00</p>\n                <h4>Repair Price - US $80.00</h4>\n            </div>\n        </li>\n    </ul>\n</div>\n<div>\n    <ul class=\"accordion\">\n        <li class=\"ip6s\">\n            <div class=\"heading\">iPhone 6s</div>\n            <div class=\"description\">\n                <h2>iPhone 6s</h2>\n                <p>Repair Price - US $60.00</p>\n                <h4>Repair Price - US $75.00</h4>\n            </div>\n        </li>\n    </ul>\n</div>\n<div>\n    <ul class=\"accordion\">\n        <li class=\"ip6Plus\">\n            <div class=\"heading\">iPhone 6+</div>\n            <div class=\"description\">\n                <h2>iPhone 6+</h2>\n                <p>Repair Price - US $65.00</p>\n                <h4>Repair Price - US $80.00</h4>\n            </div>\n        </li>\n    </ul>\n</div>\n<div>\n    <ul class=\"accordion\">\n        <li class=\"ip6\">\n            <div class=\"heading\">iPhone 6</div>\n            <div class=\"description\">\n                <h2>iPhone 6</h2>\n                <p>Repair Price - US $55.00</p>\n                <h4>Repair Price - US $70.00</h4>\n            </div>\n        </li>\n    </ul>\n</div>\n<div>\n    <ul class=\"accordion\">\n        <li class=\"ipSe\">\n            <div class=\"heading\">iPhone SE</div>\n            <div class=\"description\">\n                <h2>iPhone SE</h2>\n                <p>Repair Price - US $50.00</p>\n                <h4>Repair Price - US $65.00</h4>\n            </div>\n        </li>\n    </ul>\n</div>\n<div>\n    <ul class=\"accordion\">\n        <li class=\"ipX\">\n            <div class=\"heading\">iPhone X</div>\n            <div class=\"description\">\n                <h2>iPhone X</h2>\n                <p>Repair Price - US $140.00</p>\n                <h4>Repair Price - US $165.00</h4>\n            </div>\n        </li>\n    </ul>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/services/services.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/services.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppServicesServicesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<book-now></book-now>\n<cell-phone-patients></cell-phone-patients>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/toolbar/toolbar.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/toolbar/toolbar.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppToolbarToolbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar>\n  <img src=\"../../assets/images/logo.png\" alt=\"doctorios\">\n  <span class=\"spacer\"></span>\n  <div class=\"links\">\n    <a [routerLink]=\"['/home']\">Home</a>\n    <a [routerLink]=\"['/services']\">Services</a>\n    <a [routerLink]=\"['/book']\"><span>Book</span></a>\n    <a [routerLink]=\"['/blog']\">Blog</a>\n  </div>\n  <mat-icon (click)=\"showMenu = !showMenu\">menu</mat-icon>\n</mat-toolbar>\n\n<div *ngIf=\"showMenu\" class=\"menu\">\n  <a [routerLink]=\"['/home']\">Home</a>\n  <a [routerLink]=\"['/services']\">Services</a>\n  <a [routerLink]=\"['/book']\"><span>Book</span></a>\n  <a [routerLink]=\"['/blog']\">Blog</a>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
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
    /***/

  },

  /***/
  "./src/app/accessories/accessories.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/accessories/accessories.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAccessoriesAccessoriesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY2Vzc29yaWVzL2FjY2Vzc29yaWVzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/accessories/accessories.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/accessories/accessories.component.ts ***!
    \******************************************************/

  /*! exports provided: AccessoriesComponent */

  /***/
  function srcAppAccessoriesAccessoriesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccessoriesComponent", function () {
      return AccessoriesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AccessoriesComponent =
    /*#__PURE__*/
    function () {
      function AccessoriesComponent() {
        _classCallCheck(this, AccessoriesComponent);
      }

      _createClass(AccessoriesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AccessoriesComponent;
    }();

    AccessoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-accessories',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./accessories.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/accessories/accessories.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./accessories.component.css */
      "./src/app/accessories/accessories.component.css")).default]
    })], AccessoriesComponent);
    /***/
  },

  /***/
  "./src/app/accessories/coming-soon/coming-soon.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/accessories/coming-soon/coming-soon.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAccessoriesComingSoonComingSoonComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY2Vzc29yaWVzL2NvbWluZy1zb29uL2NvbWluZy1zb29uLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/accessories/coming-soon/coming-soon.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/accessories/coming-soon/coming-soon.component.ts ***!
    \******************************************************************/

  /*! exports provided: ComingSoonComponent */

  /***/
  function srcAppAccessoriesComingSoonComingSoonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComingSoonComponent", function () {
      return ComingSoonComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ComingSoonComponent =
    /*#__PURE__*/
    function () {
      function ComingSoonComponent() {
        _classCallCheck(this, ComingSoonComponent);
      }

      _createClass(ComingSoonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ComingSoonComponent;
    }();

    ComingSoonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-coming-soon',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./coming-soon.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/accessories/coming-soon/coming-soon.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./coming-soon.component.css */
      "./src/app/accessories/coming-soon/coming-soon.component.css")).default]
    })], ComingSoonComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./blog/blog.component */
    "./src/app/blog/blog.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _appointment_page_appointment_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./appointment-page/appointment-page.component */
    "./src/app/appointment-page/appointment-page.component.ts");
    /* harmony import */


    var _services_services_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/services.component */
    "./src/app/services/services.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }, {
      path: 'blog',
      component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__["BlogComponent"]
    }, {
      path: 'book',
      component: _appointment_page_appointment_page_component__WEBPACK_IMPORTED_MODULE_5__["AppointmentPageComponent"]
    }, {
      path: 'services',
      component: _services_services_component__WEBPACK_IMPORTED_MODULE_6__["ServicesComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".placeHolder {\n  height: 6rem;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wbGFjZUhvbGRlciB7XG4gIGhlaWdodDogNnJlbTtcbn1cblxuXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Doctor iOS';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./toolbar/toolbar.component */
    "./src/app/toolbar/toolbar.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _appointment_page_appointment_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./appointment-page/appointment-page.component */
    "./src/app/appointment-page/appointment-page.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _home_countdown_timer_countdown_timer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./home/countdown-timer/countdown-timer.component */
    "./src/app/home/countdown-timer/countdown-timer.component.ts");
    /* harmony import */


    var _home_cell_phone_image_cell_phone_image_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./home/cell-phone-image/cell-phone-image.component */
    "./src/app/home/cell-phone-image/cell-phone-image.component.ts");
    /* harmony import */


    var _home_quick_links_quick_links_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./home/quick-links/quick-links.component */
    "./src/app/home/quick-links/quick-links.component.ts");
    /* harmony import */


    var _home_promo_promo_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./home/promo/promo.component */
    "./src/app/home/promo/promo.component.ts");
    /* harmony import */


    var _blog_blog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./blog/blog.component */
    "./src/app/blog/blog.component.ts");
    /* harmony import */


    var _blog_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./blog/carousel/carousel.component */
    "./src/app/blog/carousel/carousel.component.ts");
    /* harmony import */


    var _blog_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./blog/about-us/about-us.component */
    "./src/app/blog/about-us/about-us.component.ts");
    /* harmony import */


    var _blog_modify_delete_form_modify_delete_form_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./blog/modify-delete-form/modify-delete-form.component */
    "./src/app/blog/modify-delete-form/modify-delete-form.component.ts");
    /* harmony import */


    var _blog_social_media_links_social_media_links_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./blog/social-media-links/social-media-links.component */
    "./src/app/blog/social-media-links/social-media-links.component.ts");
    /* harmony import */


    var _appointment_page_form_form_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./appointment-page/form/form.component */
    "./src/app/appointment-page/form/form.component.ts");
    /* harmony import */


    var _services_services_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./services/services.component */
    "./src/app/services/services.component.ts");
    /* harmony import */


    var _services_book_now_book_now_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./services/book-now/book-now.component */
    "./src/app/services/book-now/book-now.component.ts");
    /* harmony import */


    var _services_cell_phone_patients_cell_phone_patients_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./services/cell-phone-patients/cell-phone-patients.component */
    "./src/app/services/cell-phone-patients/cell-phone-patients.component.ts");
    /* harmony import */


    var _accessories_accessories_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./accessories/accessories.component */
    "./src/app/accessories/accessories.component.ts");
    /* harmony import */


    var _accessories_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./accessories/coming-soon/coming-soon.component */
    "./src/app/accessories/coming-soon/coming-soon.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_6__["ToolbarComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"], _home_countdown_timer_countdown_timer_component__WEBPACK_IMPORTED_MODULE_13__["CountdownTimerComponent"], _home_cell_phone_image_cell_phone_image_component__WEBPACK_IMPORTED_MODULE_14__["CellPhoneImageComponent"], _home_quick_links_quick_links_component__WEBPACK_IMPORTED_MODULE_15__["QuickLinksComponent"], _home_promo_promo_component__WEBPACK_IMPORTED_MODULE_16__["PromoComponent"], _blog_blog_component__WEBPACK_IMPORTED_MODULE_17__["BlogComponent"], _blog_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_18__["CarouselComponent"], _blog_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_19__["AboutUsComponent"], _blog_modify_delete_form_modify_delete_form_component__WEBPACK_IMPORTED_MODULE_20__["ModifyDeleteFormComponent"], _blog_social_media_links_social_media_links_component__WEBPACK_IMPORTED_MODULE_21__["SocialMediaLinksComponent"], _home_promo_promo_component__WEBPACK_IMPORTED_MODULE_16__["PromoComponent"], _appointment_page_appointment_page_component__WEBPACK_IMPORTED_MODULE_10__["AppointmentPageComponent"], _appointment_page_form_form_component__WEBPACK_IMPORTED_MODULE_22__["FormComponent"], _services_services_component__WEBPACK_IMPORTED_MODULE_23__["ServicesComponent"], _services_book_now_book_now_component__WEBPACK_IMPORTED_MODULE_24__["BookNowComponent"], _services_cell_phone_patients_cell_phone_patients_component__WEBPACK_IMPORTED_MODULE_25__["CellPhonePatientsComponent"], _accessories_accessories_component__WEBPACK_IMPORTED_MODULE_26__["AccessoriesComponent"], _accessories_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_27__["ComingSoonComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/appointment-page/appointment-page.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/appointment-page/appointment-page.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppointmentPageAppointmentPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcG9pbnRtZW50LXBhZ2UvYXBwb2ludG1lbnQtcGFnZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/appointment-page/appointment-page.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/appointment-page/appointment-page.component.ts ***!
    \****************************************************************/

  /*! exports provided: AppointmentPageComponent */

  /***/
  function srcAppAppointmentPageAppointmentPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppointmentPageComponent", function () {
      return AppointmentPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppointmentPageComponent = function AppointmentPageComponent() {
      _classCallCheck(this, AppointmentPageComponent);
    };

    AppointmentPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'appointment-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./appointment-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/appointment-page/appointment-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./appointment-page.component.css */
      "./src/app/appointment-page/appointment-page.component.css")).default]
    })], AppointmentPageComponent);
    /***/
  },

  /***/
  "./src/app/appointment-page/form/form.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/appointment-page/form/form.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppointmentPageFormFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcG9pbnRtZW50LXBhZ2UvZm9ybS9mb3JtLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/appointment-page/form/form.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/appointment-page/form/form.component.ts ***!
    \*********************************************************/

  /*! exports provided: FormComponent */

  /***/
  function srcAppAppointmentPageFormFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormComponent", function () {
      return FormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FormComponent = function FormComponent() {
      _classCallCheck(this, FormComponent);
    };

    FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/appointment-page/form/form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./form.component.css */
      "./src/app/appointment-page/form/form.component.css")).default]
    })], FormComponent);
    /***/
  },

  /***/
  "./src/app/blog/about-us/about-us.component.css":
  /*!******************************************************!*\
    !*** ./src/app/blog/about-us/about-us.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBlogAboutUsAboutUsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "div {\n    background-image: url(https://i.pinimg.com/originals/47/c8/89/47c88962c0c13003dc6e38216869e5f8.jpg);\n    background-repeat: no-repeat;\n    background-position: 100%;\n    background-position: center;\n    background-size: cover;\n    height: 100%;\n}\n\nh5,h1 {\n    padding-left: 1rem;\n    padding-right: 1rem;\n}\n\np {\n    font-weight: 300;\n    line-height: 1.4;\n    margin-bottom: 1rem;\n}\n\nh1, h5 {\n    text-align: center;\n    padding-top: 6rem;\n    color: #2256ce;\n    font-size: 2rem;\n    font-weight: 400;\n}\n\nh5 {\n    font-size: 1.3rem;\n    padding-top: 23rem;\n}\n\nh4{\n    color: #2256ce;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9hYm91dC11cy9hYm91dC11cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUdBQW1HO0lBQ25HLDRCQUE0QjtJQUM1Qix5QkFBeUI7SUFDekIsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYmxvZy9hYm91dC11cy9hYm91dC11cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pLnBpbmltZy5jb20vb3JpZ2luYWxzLzQ3L2M4Lzg5LzQ3Yzg4OTYyYzBjMTMwMDNkYzZlMzgyMTY4NjllNWY4LmpwZyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuaDUsaDEge1xuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xufVxucCB7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbmgxLCBoNSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiA2cmVtO1xuICAgIGNvbG9yOiAjMjI1NmNlO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuaDUge1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIHBhZGRpbmctdG9wOiAyM3JlbTtcbn1cbmg0e1xuICAgIGNvbG9yOiAjMjI1NmNlO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/blog/about-us/about-us.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/blog/about-us/about-us.component.ts ***!
    \*****************************************************/

  /*! exports provided: AboutUsComponent */

  /***/
  function srcAppBlogAboutUsAboutUsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function () {
      return AboutUsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AboutUsComponent = function AboutUsComponent() {
      _classCallCheck(this, AboutUsComponent);

      this.title = 'LET US INTRODUCE OURSELVES';
      this.header = '#1 Afforable Phone Repair Service';
      this.about = 'About Us';
    };

    AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'about-us',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about-us.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/about-us/about-us.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about-us.component.css */
      "./src/app/blog/about-us/about-us.component.css")).default]
    })], AboutUsComponent);
    /***/
  },

  /***/
  "./src/app/blog/blog.component.css":
  /*!*****************************************!*\
    !*** ./src/app/blog/blog.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppBlogBlogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYmxvZy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/blog/blog.component.ts":
  /*!****************************************!*\
    !*** ./src/app/blog/blog.component.ts ***!
    \****************************************/

  /*! exports provided: BlogComponent */

  /***/
  function srcAppBlogBlogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogComponent", function () {
      return BlogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BlogComponent = function BlogComponent() {
      _classCallCheck(this, BlogComponent);
    };

    BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'blog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./blog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/blog.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./blog.component.css */
      "./src/app/blog/blog.component.css")).default]
    })], BlogComponent);
    /***/
  },

  /***/
  "./src/app/blog/carousel/carousel.component.css":
  /*!******************************************************!*\
    !*** ./src/app/blog/carousel/carousel.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBlogCarouselCarouselComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "iframe {\n    height: -webkit-max-content;\n    height: -moz-max-content;\n    height: max-content;\n    width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkIsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvYmxvZy9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaWZyYW1lIHtcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/blog/carousel/carousel.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/blog/carousel/carousel.component.ts ***!
    \*****************************************************/

  /*! exports provided: CarouselComponent */

  /***/
  function srcAppBlogCarouselCarouselComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarouselComponent", function () {
      return CarouselComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var CarouselComponent =
    /*#__PURE__*/
    function () {
      function CarouselComponent(sanitizer) {
        _classCallCheck(this, CarouselComponent);

        this.sanitizer = sanitizer;
        this.imageSources = ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D775879029512636%26id%3D100012716381038&width=500', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FBDubb2x%2Fposts%2F2264839380494406&width=500', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fyae.jones.9%2Fposts%2F2143381925767441&width=500', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FBigNisha%2Fposts%2F2505836309464590&width=500', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fbrianna.everage%2Fposts%2F10158761789294698&width=500', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fteontae.winters%2Fposts%2F2180003512064768&width=500'];
        this.selectedImageIndex = 0;
      }

      _createClass(CarouselComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.images = this.imageSources.map(function (link) {
            return _this.sanitizer.bypassSecurityTrustResourceUrl(link);
          });
          setInterval(function () {
            _this.onNext();
          }, 2500);
        }
      }, {
        key: "onNext",
        value: function onNext() {
          if (this.selectedImageIndex + 1 >= this.images.length) {
            this.selectedImageIndex = 0;
          } else {
            this.selectedImageIndex++;
          }
        }
      }, {
        key: "onPrevious",
        value: function onPrevious() {
          if (this.selectedImageIndex === 0) {
            this.selectedImageIndex = this.images.length - 1;
          } else {
            this.selectedImageIndex--;
          }
        }
      }]);

      return CarouselComponent;
    }();

    CarouselComponent.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
      }];
    };

    CarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'carousel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./carousel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/carousel/carousel.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./carousel.component.css */
      "./src/app/blog/carousel/carousel.component.css")).default]
    })], CarouselComponent);
    /***/
  },

  /***/
  "./src/app/blog/modify-delete-form/modify-delete-form.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/blog/modify-delete-form/modify-delete-form.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBlogModifyDeleteFormModifyDeleteFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  background-color: black;\n}\n \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9tb2RpZnktZGVsZXRlLWZvcm0vbW9kaWZ5LWRlbGV0ZS1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9ibG9nL21vZGlmeS1kZWxldGUtZm9ybS9tb2RpZnktZGVsZXRlLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG4gIl19 */";
    /***/
  },

  /***/
  "./src/app/blog/modify-delete-form/modify-delete-form.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/blog/modify-delete-form/modify-delete-form.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ModifyDeleteFormComponent */

  /***/
  function srcAppBlogModifyDeleteFormModifyDeleteFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModifyDeleteFormComponent", function () {
      return ModifyDeleteFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ModifyDeleteFormComponent = function ModifyDeleteFormComponent() {
      _classCallCheck(this, ModifyDeleteFormComponent);
    };

    ModifyDeleteFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'modify-delete-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./modify-delete-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/modify-delete-form/modify-delete-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./modify-delete-form.component.css */
      "./src/app/blog/modify-delete-form/modify-delete-form.component.css")).default]
    })], ModifyDeleteFormComponent);
    /***/
  },

  /***/
  "./src/app/blog/social-media-links/social-media-links.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/blog/social-media-links/social-media-links.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBlogSocialMediaLinksSocialMediaLinksComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "img {\n    width: 100%;\n    height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9zb2NpYWwtbWVkaWEtbGlua3Mvc29jaWFsLW1lZGlhLWxpbmtzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvc29jaWFsLW1lZGlhLWxpbmtzL3NvY2lhbC1tZWRpYS1saW5rcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/blog/social-media-links/social-media-links.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/blog/social-media-links/social-media-links.component.ts ***!
    \*************************************************************************/

  /*! exports provided: SocialMediaLinksComponent */

  /***/
  function srcAppBlogSocialMediaLinksSocialMediaLinksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocialMediaLinksComponent", function () {
      return SocialMediaLinksComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SocialMediaLinksComponent = function SocialMediaLinksComponent() {
      _classCallCheck(this, SocialMediaLinksComponent);
    };

    SocialMediaLinksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'social-media-links',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./social-media-links.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/social-media-links/social-media-links.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./social-media-links.component.css */
      "./src/app/blog/social-media-links/social-media-links.component.css")).default]
    })], SocialMediaLinksComponent);
    /***/
  },

  /***/
  "./src/app/home/cell-phone-image/cell-phone-image.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/home/cell-phone-image/cell-phone-image.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeCellPhoneImageCellPhoneImageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".logo {\n    width: 100%;\n    height: auto;\n}\n\nh1 {\n    background: rgb(4, 116, 192);\n    background: -webkit-gradient(linear, left top, right top, color-stop(32%, rgba(4, 116, 192, 1)), color-stop(43%, rgba(17, 118, 196, 1)), color-stop(66%, rgba(236, 192, 39, 1)));\n    background: linear-gradient(90deg, rgba(4, 116, 192, 1) 32%, rgba(17, 118, 196, 1) 43%, rgba(236, 192, 39, 1) 66%);\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jZWxsLXBob25lLWltYWdlL2NlbGwtcGhvbmUtaW1hZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGdMQUFrSDtJQUFsSCxrSEFBa0g7SUFDbEgsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9jZWxsLXBob25lLWltYWdlL2NlbGwtcGhvbmUtaW1hZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbmgxIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNCwgMTE2LCAxOTIpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSg0LCAxMTYsIDE5MiwgMSkgMzIlLCByZ2JhKDE3LCAxMTgsIDE5NiwgMSkgNDMlLCByZ2JhKDIzNiwgMTkyLCAzOSwgMSkgNjYlKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home/cell-phone-image/cell-phone-image.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/home/cell-phone-image/cell-phone-image.component.ts ***!
    \*********************************************************************/

  /*! exports provided: CellPhoneImageComponent */

  /***/
  function srcAppHomeCellPhoneImageCellPhoneImageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CellPhoneImageComponent", function () {
      return CellPhoneImageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CellPhoneImageComponent = function CellPhoneImageComponent() {
      _classCallCheck(this, CellPhoneImageComponent);

      this.title = 'St.Louis Phone Repair';
    };

    CellPhoneImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'cell-phone-image',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cell-phone-image.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/cell-phone-image/cell-phone-image.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cell-phone-image.component.css */
      "./src/app/home/cell-phone-image/cell-phone-image.component.css")).default]
    })], CellPhoneImageComponent);
    /***/
  },

  /***/
  "./src/app/home/countdown-timer/countdown-timer.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/home/countdown-timer/countdown-timer.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeCountdownTimerCountdownTimerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h2 {\n    text-align: center;\n    font-family: 'Nanum Brush Script', cursive;\n    font-size: 1.5rem;\n}\nh3 {\n    text-align: center;\n    height: 6rem;\n    font-size: 2.5rem;\n    font-family: 'Nanum Brush Script', cursive;\n    margin: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb3VudGRvd24tdGltZXIvY291bnRkb3duLXRpbWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsMENBQTBDO0lBQzFDLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsMENBQTBDO0lBQzFDLFNBQVM7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY291bnRkb3duLXRpbWVyL2NvdW50ZG93bi10aW1lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ05hbnVtIEJydXNoIFNjcmlwdCcsIGN1cnNpdmU7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5oMyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogNnJlbTtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICBmb250LWZhbWlseTogJ05hbnVtIEJydXNoIFNjcmlwdCcsIGN1cnNpdmU7XG4gICAgbWFyZ2luOiAwO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/home/countdown-timer/countdown-timer.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/home/countdown-timer/countdown-timer.component.ts ***!
    \*******************************************************************/

  /*! exports provided: CountdownTimerComponent */

  /***/
  function srcAppHomeCountdownTimerCountdownTimerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountdownTimerComponent", function () {
      return CountdownTimerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CountdownTimerComponent =
    /*#__PURE__*/
    function () {
      function CountdownTimerComponent() {
        _classCallCheck(this, CountdownTimerComponent);

        this.countDown = new Date('March 29, 2020 06:00:25').getTime();
        this.timer = '';
        this.title = 'Hurry! Sale Ends:';
      }

      _createClass(CountdownTimerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          setInterval(function () {
            //gets today's date
            var now = new Date().getTime(); //the date we are counting to minus today's live time

            var distance = _this2.countDown - now; // Time calculations for days, hours, minutes and seconds

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
            var seconds = Math.floor(distance % (1000 * 60) / 1000);
            _this2.timer = "".concat(days, "days ").concat(hours, "hours ").concat(minutes, "minutes ").concat(seconds, "seconds");
          }, 1000);
        }
      }]);

      return CountdownTimerComponent;
    }();

    CountdownTimerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'countdown-timer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./countdown-timer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/countdown-timer/countdown-timer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./countdown-timer.component.css */
      "./src/app/home/countdown-timer/countdown-timer.component.css")).default]
    })], CountdownTimerComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/home/promo/promo.component.css":
  /*!************************************************!*\
    !*** ./src/app/home/promo/promo.component.css ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePromoPromoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n    margin: auto;\n    display: -webkit-box;\n    display: flex;\n}\n\n.home {\n    padding: 20px;\n}\n\n#deal {\n    margin-top: 5rem;\n    text-align: center;\n}\n\nimg {\n    width: 100%;\n    height: auto;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wcm9tby9wcm9tby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLG9CQUFhO0lBQWIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUdBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL3Byb21vL3Byb21vLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5ob21lIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG4jZGVhbCB7XG4gICAgbWFyZ2luLXRvcDogNXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cblxuIl19 */";
    /***/
  },

  /***/
  "./src/app/home/promo/promo.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/home/promo/promo.component.ts ***!
    \***********************************************/

  /*! exports provided: PromoComponent */

  /***/
  function srcAppHomePromoPromoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PromoComponent", function () {
      return PromoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PromoComponent = function PromoComponent() {
      _classCallCheck(this, PromoComponent);

      this.title = 'Deal Of The Month';
    };

    PromoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'promo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./promo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/promo/promo.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./promo.component.css */
      "./src/app/home/promo/promo.component.css")).default]
    })], PromoComponent);
    /***/
  },

  /***/
  "./src/app/home/quick-links/quick-links.component.css":
  /*!************************************************************!*\
    !*** ./src/app/home/quick-links/quick-links.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeQuickLinksQuickLinksComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".quick-links-grid-container {\n    display: grid;\n    grid-template-columns: auto auto;\n    width: 100%;\n}\n.grid-item {\n    background-color: black;\n    border: 5px solid #fff;\n    padding: 20px;\n    text-align: center;\n}\na {\n    color: #fff;\n    text-decoration: none;\n    text-align: center;\n\n}\nh1, h2 {\n    text-align: center;\n    color: #333;\n    font-weight: 100;\n    font-size: 1.2rem;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9xdWljay1saW5rcy9xdWljay1saW5rcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxXQUFXO0FBQ2Y7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtJQUNyQixrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9ob21lL3F1aWNrLWxpbmtzL3F1aWNrLWxpbmtzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucXVpY2stbGlua3MtZ3JpZC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uZ3JpZC1pdGVtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjZmZmO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuYSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxufVxuaDEsIGgyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuIl19 */";
    /***/
  },

  /***/
  "./src/app/home/quick-links/quick-links.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/home/quick-links/quick-links.component.ts ***!
    \***********************************************************/

  /*! exports provided: QuickLinksComponent */

  /***/
  function srcAppHomeQuickLinksQuickLinksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuickLinksComponent", function () {
      return QuickLinksComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var QuickLinksComponent = function QuickLinksComponent() {
      _classCallCheck(this, QuickLinksComponent);

      this.Hours = 'Hours';
      this.weekdays = 'Monday - Saturday 9:00 AM - 6:30 PM';
      this.phone = '(314).669.4292';
      this.Closed = 'Sunday : Closed';
    };

    QuickLinksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'quick-links',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./quick-links.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/quick-links/quick-links.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./quick-links.component.css */
      "./src/app/home/quick-links/quick-links.component.css")).default]
    })], QuickLinksComponent);
    /***/
  },

  /***/
  "./src/app/services/book-now/book-now.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/services/book-now/book-now.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppServicesBookNowBookNowComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#book-now-image {\n    width: 100%;\n    opacity: 0.6;\n}\nbutton {\n    bottom: 4rem;\n    left: 1rem;\n}\n.top-right {\n    position: absolute;\n    top: 9rem;\n    font-size: 1.3rem;\n    font-weight: 500;\n}\nh1{\n    text-align: center;\n    margin: 0;\n    font-size: 2.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZXMvYm9vay1ub3cvYm9vay1ub3cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvc2VydmljZXMvYm9vay1ub3cvYm9vay1ub3cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNib29rLW5vdy1pbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3BhY2l0eTogMC42O1xufVxuYnV0dG9uIHtcbiAgICBib3R0b206IDRyZW07XG4gICAgbGVmdDogMXJlbTtcbn1cbi50b3AtcmlnaHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDlyZW07XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbmgxe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/services/book-now/book-now.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/services/book-now/book-now.component.ts ***!
    \*********************************************************/

  /*! exports provided: BookNowComponent */

  /***/
  function srcAppServicesBookNowBookNowComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookNowComponent", function () {
      return BookNowComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BookNowComponent = function BookNowComponent() {
      _classCallCheck(this, BookNowComponent);

      this.title = 'Cell Phone Patients';
      this.book = 'Book Now';
    };

    BookNowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'book-now',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./book-now.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/services/book-now/book-now.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./book-now.component.css */
      "./src/app/services/book-now/book-now.component.css")).default]
    })], BookNowComponent);
    /***/
  },

  /***/
  "./src/app/services/cell-phone-patients/cell-phone-patients.component.css":
  /*!********************************************************************************!*\
    !*** ./src/app/services/cell-phone-patients/cell-phone-patients.component.css ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppServicesCellPhonePatientsCellPhonePatientsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h1 {\n    text-align: center;\n    font-size: 1.5rem;\n    color: red;\n}\nul.accordion {\n    float: left;\n    list-style: none;\n    font-family: Camria, serif;\n    font-size: 16px;\n    font-style: italic;\n    line-height: 1.5em;\n    margin: 0;\n    padding: 0;\n}\nul.accordion li {\n    height: 556px;\n    border-right: 2px solid #fff;\n    border-bottom: 2px solid #fff;\n    background-color: #fff;\n    background-repeat: no-repeat;\n    background-position: center;\n    position: relative;\n    overflow: hidden;\n    cursor: pointer;\n    box-shadow: 1px 3px 15px #555;\n}\nli {\n    width: 90px;\n    -webkit-transition: width 3s;\n    transition: width 3s;\n}\n.heading {\n    background-color: #fff;\n    padding: 10px;\n    margin-top: 60px;\n    opacity: 0.9;\n    text-transform: uppercase;\n    font-style: normal;\n    font-weight: bold;\n    letter-spacing: 1px;\n    font-size: 14px;\n    color: #444;\n    text-align: center;\n    text-shadow: -1px -1px 1px #ccc;\n}\nli > div:last-of-type {\n    opacity: 0;\n    -webkit-transition: opacity 300ms;\n    transition: opacity 300ms;\n}\nli > div:first-of-type {\n    opacity: 1;\n    -webkit-transition: opacity 300ms;\n    transition: opacity 300ms;\n}\nli:hover > div:last-of-type {\n    opacity: 1;\n}\nli:hover > div:first-of-type {\n    opacity: 0;\n}\nli:hover {\n    width: 400px;\n    -webkit-transition: width 3s;\n    transition: width 3s;\n}\n.description {\n    position: absolute;\n    width: 480px;\n    height: 180px;\n    bottom: 0px;\n    left: 0px;\n    background: rgba(255, 255, 255, 0.8);\n}\nh2 {\n    text-transform: uppercase;\n    font-style: normal;\n    font-weight: bold;\n    letter-spacing: 1px;\n    font-size: 45px;\n    color: rgb(10, 8, 8);\n    text-align: left;\n    margin: 11px 0px 15px 20px;\n    text-shadow: -1px -1px 1px #ccc;\n}\nh4 {\n  text-decoration: line-through;\n}\np {\n    line-height: 14px;\n    margin: 10px 22px;\n    font-family: 'Rakkas';\n    font-size: 22px;\n    font-style: initial;\n    font-weight: bold;\n    text-transform: none;\n    letter-spacing: normal;\n    line-height: 1.6em;\n}\nul.accordion li .description a {\n    position: absolute;\n    bottom: 5px;\n    left: 20px;\n    text-transform: uppercase;\n    font-style: normal;\n    font-size: 11px;\n    text-decoration: none;\n    color: #888;\n}\nul.accordion li .description a:hover {\n    color: #333;\n    text-decoration: underline;\n}\nul.accordion li.ip8 {\n    background-image: url(https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone8/plus/iphone8-plus-gold-select-2018?wid=513&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1522347727972);\n}\nul.accordion li.ip8small {\n    background-image: url(https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone8/plus/iphone8-plus-spgray-select-2018?wid=513&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1522347735544);\n}\nul.accordion li.ip7 {\n    background-image: url(https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/plus/iphone7-plus-silver-select-2016?wid=513&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1472430173129);\n}\nul.accordion li.ip7small {\n    background-image: url(https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/plus/iphone7-plus-gold-select-2016?wid=513&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1472430108712);\n}\nul.accordion li.ip6sPlus {\n    background-image: url(https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/plus/iphone7-plus-rosegold-select-2016?wid=513&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1472430147951);\n}\nul.accordion li.ip6s {\n    background-image: url(https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/plus/iphone7-plus-black-select-2016?wid=513&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1472430090682);\n}\nul.accordion li.ip6Plus {\n    background-image: url(https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/plus/iphone7-plus-silver-select-2016?wid=513&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1472430173129);\n}\nul.accordion li.ip6 {\n    background-image: url(https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/plus/iphone7-plus-gold-select-2016?wid=513&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1472430108712);\n}\nul.accordion li.ipSe {\n    background-image: url(https://images-na.ssl-images-amazon.com/images/I/61nFOTQPzEL._SX569_.jpg);\n}\nul.accordion li.ipX {\n    background-image: url(https://images-na.ssl-images-amazon.com/images/I/618ZI2Xyw%2BL._SY445_.jpg);\n}\n@media screen and (max-width: 500px) {\n\n    ul.accordion {\n        list-style: none;\n        width: 100%;\n        right: 11px;\n        font-family: Cambria, serif;\n        font-size: 16px;\n        font-style: italic;\n        line-height: 1.5em;\n        display: grid;\n        top: 32%;\n    }\n    ul.accordion li {\n        float: right;\n        height: 556px;\n        border-right: 2px solid #fff;\n        border-bottom: 2px solid #fff;\n        background-color: #fff;\n        background-repeat: no-repeat;\n        background-position: center center;\n        position: relative;\n        overflow: hidden;\n        cursor: pointer;\n        box-shadow: 1px 3px 15px #555;\n    }\n\n    li {\n        width: 90px;\n        -webkit-transition: width 3s;\n        transition: width 3s;\n    }\n    \n    \n    .heading {\n        background-color: #fff;\n        padding: 10px;\n        margin-top: 60px;\n        opacity: 0.9;\n        text-transform: uppercase;\n        font-style: normal;\n        font-weight: bold;\n        letter-spacing: 1px;\n        font-size: 14px;\n        color: #444;\n        text-align: center;\n        text-shadow: -1px -1px 1px #ccc;\n    }\n\n    li > div:last-of-type {\n        opacity: 0;\n        -webkit-transition: opacity 300ms;\n        transition: opacity 300ms;\n    }\n    \n    li > div:first-of-type {\n        opacity: 1;\n        -webkit-transition: opacity 300ms;\n        transition: opacity 300ms;\n    }\n    \n    li:hover > div:last-of-type {\n        opacity: 1;\n    }\n    \n    li:hover > div:first-of-type {\n        opacity: 0;\n    }\n    \n    li:hover {\n        width: 400px;\n        -webkit-transition: width 3s;\n        transition: width 3s;\n    }\n\n    .description {\n        position: absolute;\n        width: 480px;\n        height: 180px;\n        bottom: 0px;\n        left: 0px;\n        background: rgba(255, 255, 255, 0.8);\n    }\n\n    h2 {\n        text-transform: uppercase;\n        font-style: normal;\n        font-weight: bold;\n        letter-spacing: 1px;\n        font-size: 45px;\n        color: rgb(10, 8, 8);\n        text-align: left;\n        margin: 11px 0px 15px 20px;\n        text-shadow: -1px -1px 1px #ccc;\n    }\n    \n    p {\n        line-height: 14px;\n        margin: 10px 22px;\n        font-family: 'Rakkas';\n        font-size: 22px;\n        font-style: initial;\n        font-weight: bold;\n        text-transform: none;\n        letter-spacing: normal;\n        line-height: 1.6em;\n    }\n    ul.accordion li .description a {\n        position: absolute;\n        bottom: 5px;\n        left: 20px;\n        text-transform: uppercase;\n        font-style: normal;\n        font-size: 11px;\n        text-decoration: none;\n        color: #888;\n    }\n    ul.accordion li .description a:hover {\n        color: #333;\n        text-decoration: underline;\n    }\n    ul.accordion li.ip8 {\n        background-image: url(https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone8/plus/iphone8-plus-gold-select-2018?wid=513&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1522347727972);\n    }\n    ul.accordion li.ip8small {\n        background-image: url(https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone8/plus/iphone8-plus-spgray-select-2018?wid=513&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1522347735544);\n    }\n    ul.accordion li.ip7 {\n        background-image: url(https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/plus/iphone7-plus-silver-select-2016?wid=513&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1472430173129);\n    }\n    ul.accordion li.ip7small {\n        background-image: url(https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/plus/iphone7-plus-gold-select-2016?wid=513&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1472430108712);\n    }\n    ul.accordion li.ip6sPlus {\n        background-image: url(https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/plus/iphone7-plus-rosegold-select-2016?wid=513&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1472430147951);\n    }\n    ul.accordion li.ip6s {\n        background-image: url(https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/plus/iphone7-plus-black-select-2016?wid=513&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1472430090682);\n    }\n    ul.accordion li.ip6Plus {\n        background-image: url(https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/plus/iphone7-plus-silver-select-2016?wid=513&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1472430173129);\n    }\n    ul.accordion li.ip6 {\n        background-image: url(https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/plus/iphone7-plus-gold-select-2016?wid=513&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1472430108712);\n    }\n    ul.accordion li.ipSe {\n        background-image: url(https://images-na.ssl-images-amazon.com/images/I/61nFOTQPzEL._SX569_.jpg);\n    }\n    ul.accordion li.ipX {\n        background-image: url(https://images-na.ssl-images-amazon.com/images/I/618ZI2Xyw%2BL._SY445_.jpg);\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZXMvY2VsbC1waG9uZS1wYXRpZW50cy9jZWxsLXBob25lLXBhdGllbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQiwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7QUFDZDtBQUVBO0lBQ0ksYUFBYTtJQUNiLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0Isc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBR2YsNkJBQTZCO0FBQ2pDO0FBRUE7SUFDSSxXQUFXO0lBQ1gsNEJBQW9CO0lBQXBCLG9CQUFvQjtBQUN4QjtBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQiwrQkFBK0I7QUFDbkM7QUFFQTtJQUNJLFVBQVU7SUFDVixpQ0FBeUI7SUFBekIseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUNBQXlCO0lBQXpCLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksVUFBVTtBQUNkO0FBRUE7SUFDSSxVQUFVO0FBQ2Q7QUFFQTtJQUNJLFlBQVk7SUFDWiw0QkFBb0I7SUFBcEIsb0JBQW9CO0FBQ3hCO0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixXQUFXO0lBQ1gsU0FBUztJQUNULG9DQUFvQztBQUN4QztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQiwrQkFBK0I7QUFDbkM7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixXQUFXO0FBQ2Y7QUFFQTtJQUNJLFdBQVc7SUFDWCwwQkFBMEI7QUFDOUI7QUFFQTtJQUNJLDhPQUE4TztBQUNsUDtBQUVBO0lBQ0ksZ1BBQWdQO0FBQ3BQO0FBRUE7SUFDSSxnUEFBZ1A7QUFDcFA7QUFFQTtJQUNJLDhPQUE4TztBQUNsUDtBQUVBO0lBQ0ksa1BBQWtQO0FBQ3RQO0FBRUE7SUFDSSwrT0FBK087QUFDblA7QUFFQTtJQUNJLGdQQUFnUDtBQUNwUDtBQUVBO0lBQ0ksOE9BQThPO0FBQ2xQO0FBRUE7SUFDSSwrRkFBK0Y7QUFDbkc7QUFFQTtJQUNJLGlHQUFpRztBQUNyRztBQUVBOztJQUVJO1FBQ0ksZ0JBQWdCO1FBQ2hCLFdBQVc7UUFDWCxXQUFXO1FBQ1gsMkJBQTJCO1FBQzNCLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixRQUFRO0lBQ1o7SUFDQTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2IsNEJBQTRCO1FBQzVCLDZCQUE2QjtRQUM3QixzQkFBc0I7UUFDdEIsNEJBQTRCO1FBQzVCLGtDQUFrQztRQUNsQyxrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFHZiw2QkFBNkI7SUFDakM7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsNEJBQW9CO1FBQXBCLG9CQUFvQjtJQUN4Qjs7O0lBR0E7UUFDSSxzQkFBc0I7UUFDdEIsYUFBYTtRQUNiLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1oseUJBQXlCO1FBQ3pCLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLCtCQUErQjtJQUNuQzs7SUFFQTtRQUNJLFVBQVU7UUFDVixpQ0FBeUI7UUFBekIseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLGlDQUF5QjtRQUF6Qix5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxZQUFZO1FBQ1osNEJBQW9CO1FBQXBCLG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osYUFBYTtRQUNiLFdBQVc7UUFDWCxTQUFTO1FBQ1Qsb0NBQW9DO0lBQ3hDOztJQUVBO1FBQ0kseUJBQXlCO1FBQ3pCLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixvQkFBb0I7UUFDcEIsZ0JBQWdCO1FBQ2hCLDBCQUEwQjtRQUMxQiwrQkFBK0I7SUFDbkM7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLHFCQUFxQjtRQUNyQixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLGlCQUFpQjtRQUNqQixvQkFBb0I7UUFDcEIsc0JBQXNCO1FBQ3RCLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxVQUFVO1FBQ1YseUJBQXlCO1FBQ3pCLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YscUJBQXFCO1FBQ3JCLFdBQVc7SUFDZjtJQUNBO1FBQ0ksV0FBVztRQUNYLDBCQUEwQjtJQUM5QjtJQUNBO1FBQ0ksOE9BQThPO0lBQ2xQO0lBQ0E7UUFDSSxnUEFBZ1A7SUFDcFA7SUFDQTtRQUNJLGdQQUFnUDtJQUNwUDtJQUNBO1FBQ0ksOE9BQThPO0lBQ2xQO0lBQ0E7UUFDSSxrUEFBa1A7SUFDdFA7SUFDQTtRQUNJLCtPQUErTztJQUNuUDtJQUNBO1FBQ0ksZ1BBQWdQO0lBQ3BQO0lBQ0E7UUFDSSw4T0FBOE87SUFDbFA7SUFDQTtRQUNJLCtGQUErRjtJQUNuRztJQUNBO1FBQ0ksaUdBQWlHO0lBQ3JHO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9zZXJ2aWNlcy9jZWxsLXBob25lLXBhdGllbnRzL2NlbGwtcGhvbmUtcGF0aWVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgY29sb3I6IHJlZDtcbn1cbnVsLmFjY29yZGlvbiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBmb250LWZhbWlseTogQ2FtcmlhLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxudWwuYWNjb3JkaW9uIGxpIHtcbiAgICBoZWlnaHQ6IDU1NnB4O1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNmZmY7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLW1vei1ib3gtc2hhZG93OiAxcHggM3B4IDE1cHggIzU1NTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAzcHggMTVweCAjNTU1O1xuICAgIGJveC1zaGFkb3c6IDFweCAzcHggMTVweCAjNTU1O1xufVxuXG5saSB7XG4gICAgd2lkdGg6IDkwcHg7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggM3M7XG59XG5cbi5oZWFkaW5nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogNjBweDtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM0NDQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMXB4ICNjY2M7XG59XG5cbmxpID4gZGl2Omxhc3Qtb2YtdHlwZSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zO1xufVxuXG5saSA+IGRpdjpmaXJzdC1vZi10eXBlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXM7XG59XG5cbmxpOmhvdmVyID4gZGl2Omxhc3Qtb2YtdHlwZSB7XG4gICAgb3BhY2l0eTogMTtcbn1cblxubGk6aG92ZXIgPiBkaXY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgb3BhY2l0eTogMDtcbn1cblxubGk6aG92ZXIge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAzcztcbn1cblxuXG4uZGVzY3JpcHRpb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNDgwcHg7XG4gICAgaGVpZ2h0OiAxODBweDtcbiAgICBib3R0b206IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xufVxuXG5oMiB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgY29sb3I6IHJnYigxMCwgOCwgOCk7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW46IDExcHggMHB4IDE1cHggMjBweDtcbiAgICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDFweCAjY2NjO1xufVxuXG5oNCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuXG5wIHtcbiAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICBtYXJnaW46IDEwcHggMjJweDtcbiAgICBmb250LWZhbWlseTogJ1Jha2thcyc7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtc3R5bGU6IGluaXRpYWw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogMS42ZW07XG59XG5cbnVsLmFjY29yZGlvbiBsaSAuZGVzY3JpcHRpb24gYSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogNXB4O1xuICAgIGxlZnQ6IDIwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogIzg4ODtcbn1cblxudWwuYWNjb3JkaW9uIGxpIC5kZXNjcmlwdGlvbiBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzMzMztcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxudWwuYWNjb3JkaW9uIGxpLmlwOCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vc3RvcmUuc3RvcmVpbWFnZXMuY2RuLWFwcGxlLmNvbS80OTgyL2FzLWltYWdlcy5hcHBsZS5jb20vaXMvaW1hZ2UvQXBwbGVJbmMvYW9zL3B1Ymxpc2hlZC9pbWFnZXMvaS9waC9pcGhvbmU4L3BsdXMvaXBob25lOC1wbHVzLWdvbGQtc2VsZWN0LTIwMTg/d2lkPTUxMyZoZWk9NTU2JmZtdD1qcGVnJnFsdD05NSZvcF91c209MC41LDAuNSYudj0xNTIyMzQ3NzI3OTcyKTtcbn1cblxudWwuYWNjb3JkaW9uIGxpLmlwOHNtYWxsIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zdG9yZS5zdG9yZWltYWdlcy5jZG4tYXBwbGUuY29tLzQ5ODEvYXMtaW1hZ2VzLmFwcGxlLmNvbS9pcy9pbWFnZS9BcHBsZUluYy9hb3MvcHVibGlzaGVkL2ltYWdlcy9pL3BoL2lwaG9uZTgvcGx1cy9pcGhvbmU4LXBsdXMtc3BncmF5LXNlbGVjdC0yMDE4P3dpZD01MTMmaGVpPTU1NiZmbXQ9anBlZyZxbHQ9OTUmb3BfdXNtPTAuNSwwLjUmLnY9MTUyMjM0NzczNTU0NCk7XG59XG5cbnVsLmFjY29yZGlvbiBsaS5pcDcge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3N0b3JlLnN0b3JlaW1hZ2VzLmNkbi1hcHBsZS5jb20vNDk4Mi9hcy1pbWFnZXMuYXBwbGUuY29tL2lzL2ltYWdlL0FwcGxlSW5jL2Fvcy9wdWJsaXNoZWQvaW1hZ2VzL2kvcGgvaXBob25lNy9wbHVzL2lwaG9uZTctcGx1cy1zaWx2ZXItc2VsZWN0LTIwMTY/d2lkPTUxMyZoZWk9NTU2JmZtdD1qcGVnJnFsdD05NSZvcF91c209MC41LDAuNSYudj0xNDcyNDMwMTczMTI5KTtcbn1cblxudWwuYWNjb3JkaW9uIGxpLmlwN3NtYWxsIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zdG9yZS5zdG9yZWltYWdlcy5jZG4tYXBwbGUuY29tLzQ5ODIvYXMtaW1hZ2VzLmFwcGxlLmNvbS9pcy9pbWFnZS9BcHBsZUluYy9hb3MvcHVibGlzaGVkL2ltYWdlcy9pL3BoL2lwaG9uZTcvcGx1cy9pcGhvbmU3LXBsdXMtZ29sZC1zZWxlY3QtMjAxNj93aWQ9NTEzJmhlaT01NTYmZm10PWpwZWcmcWx0PTk1Jm9wX3VzbT0wLjUsMC41Ji52PTE0NzI0MzAxMDg3MTIpO1xufVxuXG51bC5hY2NvcmRpb24gbGkuaXA2c1BsdXMge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3N0b3JlLnN0b3JlaW1hZ2VzLmNkbi1hcHBsZS5jb20vNDk4MS9hcy1pbWFnZXMuYXBwbGUuY29tL2lzL2ltYWdlL0FwcGxlSW5jL2Fvcy9wdWJsaXNoZWQvaW1hZ2VzL2kvcGgvaXBob25lNy9wbHVzL2lwaG9uZTctcGx1cy1yb3NlZ29sZC1zZWxlY3QtMjAxNj93aWQ9NTEzJmhlaT01NTYmZm10PWpwZWcmcWx0PTk1Jm9wX3VzbT0wLjUsMC41Ji52PTE0NzI0MzAxNDc5NTEpO1xufVxuXG51bC5hY2NvcmRpb24gbGkuaXA2cyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vc3RvcmUuc3RvcmVpbWFnZXMuY2RuLWFwcGxlLmNvbS80OTgxL2FzLWltYWdlcy5hcHBsZS5jb20vaXMvaW1hZ2UvQXBwbGVJbmMvYW9zL3B1Ymxpc2hlZC9pbWFnZXMvaS9waC9pcGhvbmU3L3BsdXMvaXBob25lNy1wbHVzLWJsYWNrLXNlbGVjdC0yMDE2P3dpZD01MTMmaGVpPTU1NiZmbXQ9anBlZyZxbHQ9OTUmb3BfdXNtPTAuNSwwLjUmLnY9MTQ3MjQzMDA5MDY4Mik7XG59XG5cbnVsLmFjY29yZGlvbiBsaS5pcDZQbHVzIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zdG9yZS5zdG9yZWltYWdlcy5jZG4tYXBwbGUuY29tLzQ5ODIvYXMtaW1hZ2VzLmFwcGxlLmNvbS9pcy9pbWFnZS9BcHBsZUluYy9hb3MvcHVibGlzaGVkL2ltYWdlcy9pL3BoL2lwaG9uZTcvcGx1cy9pcGhvbmU3LXBsdXMtc2lsdmVyLXNlbGVjdC0yMDE2P3dpZD01MTMmaGVpPTU1NiZmbXQ9anBlZyZxbHQ9OTUmb3BfdXNtPTAuNSwwLjUmLnY9MTQ3MjQzMDE3MzEyOSk7XG59XG5cbnVsLmFjY29yZGlvbiBsaS5pcDYge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3N0b3JlLnN0b3JlaW1hZ2VzLmNkbi1hcHBsZS5jb20vNDk4Mi9hcy1pbWFnZXMuYXBwbGUuY29tL2lzL2ltYWdlL0FwcGxlSW5jL2Fvcy9wdWJsaXNoZWQvaW1hZ2VzL2kvcGgvaXBob25lNy9wbHVzL2lwaG9uZTctcGx1cy1nb2xkLXNlbGVjdC0yMDE2P3dpZD01MTMmaGVpPTU1NiZmbXQ9anBlZyZxbHQ9OTUmb3BfdXNtPTAuNSwwLjUmLnY9MTQ3MjQzMDEwODcxMik7XG59XG5cbnVsLmFjY29yZGlvbiBsaS5pcFNlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWFnZXMtbmEuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9JLzYxbkZPVFFQekVMLl9TWDU2OV8uanBnKTtcbn1cblxudWwuYWNjb3JkaW9uIGxpLmlwWCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaW1hZ2VzLW5hLnNzbC1pbWFnZXMtYW1hem9uLmNvbS9pbWFnZXMvSS82MThaSTJYeXclMkJMLl9TWTQ0NV8uanBnKTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcblxuICAgIHVsLmFjY29yZGlvbiB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICByaWdodDogMTFweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIHNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICB0b3A6IDMyJTtcbiAgICB9XG4gICAgdWwuYWNjb3JkaW9uIGxpIHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBoZWlnaHQ6IDU1NnB4O1xuICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjZmZmO1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogMXB4IDNweCAxNXB4ICM1NTU7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDNweCAxNXB4ICM1NTU7XG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAzcHggMTVweCAjNTU1O1xuICAgIH1cblxuICAgIGxpIHtcbiAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDNzO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICAuaGVhZGluZyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gICAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogIzQ0NDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDFweCAjY2NjO1xuICAgIH1cblxuICAgIGxpID4gZGl2Omxhc3Qtb2YtdHlwZSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXM7XG4gICAgfVxuICAgIFxuICAgIGxpID4gZGl2OmZpcnN0LW9mLXR5cGUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zO1xuICAgIH1cbiAgICBcbiAgICBsaTpob3ZlciA+IGRpdjpsYXN0LW9mLXR5cGUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICBcbiAgICBsaTpob3ZlciA+IGRpdjpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgXG4gICAgbGk6aG92ZXIge1xuICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDNzO1xuICAgIH1cblxuICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDQ4MHB4O1xuICAgICAgICBoZWlnaHQ6IDE4MHB4O1xuICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgfVxuXG4gICAgaDIge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgICAgIGNvbG9yOiByZ2IoMTAsIDgsIDgpO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBtYXJnaW46IDExcHggMHB4IDE1cHggMjBweDtcbiAgICAgICAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCAxcHggI2NjYztcbiAgICB9XG4gICAgXG4gICAgcCB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgICAgICBtYXJnaW46IDEwcHggMjJweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSYWtrYXMnO1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IGluaXRpYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNmVtO1xuICAgIH1cbiAgICB1bC5hY2NvcmRpb24gbGkgLmRlc2NyaXB0aW9uIGEge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogNXB4O1xuICAgICAgICBsZWZ0OiAyMHB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogIzg4ODtcbiAgICB9XG4gICAgdWwuYWNjb3JkaW9uIGxpIC5kZXNjcmlwdGlvbiBhOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cbiAgICB1bC5hY2NvcmRpb24gbGkuaXA4IHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vc3RvcmUuc3RvcmVpbWFnZXMuY2RuLWFwcGxlLmNvbS80OTgyL2FzLWltYWdlcy5hcHBsZS5jb20vaXMvaW1hZ2UvQXBwbGVJbmMvYW9zL3B1Ymxpc2hlZC9pbWFnZXMvaS9waC9pcGhvbmU4L3BsdXMvaXBob25lOC1wbHVzLWdvbGQtc2VsZWN0LTIwMTg/d2lkPTUxMyZoZWk9NTU2JmZtdD1qcGVnJnFsdD05NSZvcF91c209MC41LDAuNSYudj0xNTIyMzQ3NzI3OTcyKTtcbiAgICB9XG4gICAgdWwuYWNjb3JkaW9uIGxpLmlwOHNtYWxsIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vc3RvcmUuc3RvcmVpbWFnZXMuY2RuLWFwcGxlLmNvbS80OTgxL2FzLWltYWdlcy5hcHBsZS5jb20vaXMvaW1hZ2UvQXBwbGVJbmMvYW9zL3B1Ymxpc2hlZC9pbWFnZXMvaS9waC9pcGhvbmU4L3BsdXMvaXBob25lOC1wbHVzLXNwZ3JheS1zZWxlY3QtMjAxOD93aWQ9NTEzJmhlaT01NTYmZm10PWpwZWcmcWx0PTk1Jm9wX3VzbT0wLjUsMC41Ji52PTE1MjIzNDc3MzU1NDQpO1xuICAgIH1cbiAgICB1bC5hY2NvcmRpb24gbGkuaXA3IHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vc3RvcmUuc3RvcmVpbWFnZXMuY2RuLWFwcGxlLmNvbS80OTgyL2FzLWltYWdlcy5hcHBsZS5jb20vaXMvaW1hZ2UvQXBwbGVJbmMvYW9zL3B1Ymxpc2hlZC9pbWFnZXMvaS9waC9pcGhvbmU3L3BsdXMvaXBob25lNy1wbHVzLXNpbHZlci1zZWxlY3QtMjAxNj93aWQ9NTEzJmhlaT01NTYmZm10PWpwZWcmcWx0PTk1Jm9wX3VzbT0wLjUsMC41Ji52PTE0NzI0MzAxNzMxMjkpO1xuICAgIH1cbiAgICB1bC5hY2NvcmRpb24gbGkuaXA3c21hbGwge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zdG9yZS5zdG9yZWltYWdlcy5jZG4tYXBwbGUuY29tLzQ5ODIvYXMtaW1hZ2VzLmFwcGxlLmNvbS9pcy9pbWFnZS9BcHBsZUluYy9hb3MvcHVibGlzaGVkL2ltYWdlcy9pL3BoL2lwaG9uZTcvcGx1cy9pcGhvbmU3LXBsdXMtZ29sZC1zZWxlY3QtMjAxNj93aWQ9NTEzJmhlaT01NTYmZm10PWpwZWcmcWx0PTk1Jm9wX3VzbT0wLjUsMC41Ji52PTE0NzI0MzAxMDg3MTIpO1xuICAgIH1cbiAgICB1bC5hY2NvcmRpb24gbGkuaXA2c1BsdXMge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zdG9yZS5zdG9yZWltYWdlcy5jZG4tYXBwbGUuY29tLzQ5ODEvYXMtaW1hZ2VzLmFwcGxlLmNvbS9pcy9pbWFnZS9BcHBsZUluYy9hb3MvcHVibGlzaGVkL2ltYWdlcy9pL3BoL2lwaG9uZTcvcGx1cy9pcGhvbmU3LXBsdXMtcm9zZWdvbGQtc2VsZWN0LTIwMTY/d2lkPTUxMyZoZWk9NTU2JmZtdD1qcGVnJnFsdD05NSZvcF91c209MC41LDAuNSYudj0xNDcyNDMwMTQ3OTUxKTtcbiAgICB9XG4gICAgdWwuYWNjb3JkaW9uIGxpLmlwNnMge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zdG9yZS5zdG9yZWltYWdlcy5jZG4tYXBwbGUuY29tLzQ5ODEvYXMtaW1hZ2VzLmFwcGxlLmNvbS9pcy9pbWFnZS9BcHBsZUluYy9hb3MvcHVibGlzaGVkL2ltYWdlcy9pL3BoL2lwaG9uZTcvcGx1cy9pcGhvbmU3LXBsdXMtYmxhY2stc2VsZWN0LTIwMTY/d2lkPTUxMyZoZWk9NTU2JmZtdD1qcGVnJnFsdD05NSZvcF91c209MC41LDAuNSYudj0xNDcyNDMwMDkwNjgyKTtcbiAgICB9XG4gICAgdWwuYWNjb3JkaW9uIGxpLmlwNlBsdXMge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zdG9yZS5zdG9yZWltYWdlcy5jZG4tYXBwbGUuY29tLzQ5ODIvYXMtaW1hZ2VzLmFwcGxlLmNvbS9pcy9pbWFnZS9BcHBsZUluYy9hb3MvcHVibGlzaGVkL2ltYWdlcy9pL3BoL2lwaG9uZTcvcGx1cy9pcGhvbmU3LXBsdXMtc2lsdmVyLXNlbGVjdC0yMDE2P3dpZD01MTMmaGVpPTU1NiZmbXQ9anBlZyZxbHQ9OTUmb3BfdXNtPTAuNSwwLjUmLnY9MTQ3MjQzMDE3MzEyOSk7XG4gICAgfVxuICAgIHVsLmFjY29yZGlvbiBsaS5pcDYge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zdG9yZS5zdG9yZWltYWdlcy5jZG4tYXBwbGUuY29tLzQ5ODIvYXMtaW1hZ2VzLmFwcGxlLmNvbS9pcy9pbWFnZS9BcHBsZUluYy9hb3MvcHVibGlzaGVkL2ltYWdlcy9pL3BoL2lwaG9uZTcvcGx1cy9pcGhvbmU3LXBsdXMtZ29sZC1zZWxlY3QtMjAxNj93aWQ9NTEzJmhlaT01NTYmZm10PWpwZWcmcWx0PTk1Jm9wX3VzbT0wLjUsMC41Ji52PTE0NzI0MzAxMDg3MTIpO1xuICAgIH1cbiAgICB1bC5hY2NvcmRpb24gbGkuaXBTZSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2ltYWdlcy1uYS5zc2wtaW1hZ2VzLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjFuRk9UUVB6RUwuX1NYNTY5Xy5qcGcpO1xuICAgIH1cbiAgICB1bC5hY2NvcmRpb24gbGkuaXBYIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaW1hZ2VzLW5hLnNzbC1pbWFnZXMtYW1hem9uLmNvbS9pbWFnZXMvSS82MThaSTJYeXclMkJMLl9TWTQ0NV8uanBnKTtcbiAgICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/services/cell-phone-patients/cell-phone-patients.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/services/cell-phone-patients/cell-phone-patients.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: CellPhonePatientsComponent */

  /***/
  function srcAppServicesCellPhonePatientsCellPhonePatientsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CellPhonePatientsComponent", function () {
      return CellPhonePatientsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CellPhonePatientsComponent = function CellPhonePatientsComponent() {
      _classCallCheck(this, CellPhonePatientsComponent);
    };

    CellPhonePatientsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'cell-phone-patients',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cell-phone-patients.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/services/cell-phone-patients/cell-phone-patients.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cell-phone-patients.component.css */
      "./src/app/services/cell-phone-patients/cell-phone-patients.component.css")).default]
    })], CellPhonePatientsComponent);
    /***/
  },

  /***/
  "./src/app/services/services.component.css":
  /*!*************************************************!*\
    !*** ./src/app/services/services.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppServicesServicesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/services/services.component.ts":
  /*!************************************************!*\
    !*** ./src/app/services/services.component.ts ***!
    \************************************************/

  /*! exports provided: ServicesComponent */

  /***/
  function srcAppServicesServicesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicesComponent", function () {
      return ServicesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ServicesComponent =
    /*#__PURE__*/
    function () {
      function ServicesComponent() {
        _classCallCheck(this, ServicesComponent);
      }

      _createClass(ServicesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ServicesComponent;
    }();

    ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'services',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./services.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/services/services.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./services.component.css */
      "./src/app/services/services.component.css")).default]
    })], ServicesComponent);
    /***/
  },

  /***/
  "./src/app/toolbar/toolbar.component.css":
  /*!***********************************************!*\
    !*** ./src/app/toolbar/toolbar.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppToolbarToolbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-toolbar {\n    position: fixed;\n    }\n    \n    .mat-toolbar {\n      height: 6rem;\n      background: rgb(4, 116, 192);\n      background: -webkit-gradient(linear, left top, right top, color-stop(32%, rgba(4, 116, 192, 1)), color-stop(43%, rgba(17, 118, 196, 1)), color-stop(66%, rgba(236, 192, 39, 1)));\n      background: linear-gradient(90deg, rgba(4, 116, 192, 1) 32%, rgba(17, 118, 196, 1) 43%, rgba(236, 192, 39, 1) 66%);\n    }\n    \n    img {\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 17rem;\n      height: 8rem;\n    }\n    \n    .spacer {\n      -webkit-box-flex: 1;\n              flex: 1 1 auto;\n    }\n    \n    .links {\n       display: none;\n     }\n    \n    .menu {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n              flex-direction: column;\n      padding-top: 6rem;\n    }\n    \n    .menu a {\n      color: grey;\n      width: 100%;\n      margin: 0 10px;\n      line-height: 70px;\n      text-decoration: none;\n      border-bottom: 1px solid #EAEAEB;\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-pack: center;\n              justify-content: center;\n    }\n    \n    @media only screen and (min-width: 600px) {\n      .links {\n        display: -webkit-box;\n        display: flex;\n      }\n    \n      .links a {\n        color: grey;\n        margin: 0 1rem;\n        line-height: 70px;\n        text-decoration: none;\n      }\n    \n      .menu, mat-icon {\n        display: none;\n      }\n    }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2Y7O0lBRUE7TUFDRSxZQUFZO01BQ1osNEJBQTRCO01BQzVCLGdMQUFrSDtNQUFsSCxrSEFBa0g7SUFDcEg7O0lBRUE7TUFDRSxlQUFlO01BQ2YsTUFBTTtNQUNOLE9BQU87TUFDUCxZQUFZO01BQ1osWUFBWTtJQUNkOztJQUVBO01BQ0UsbUJBQWM7Y0FBZCxjQUFjO0lBQ2hCOztJQUVBO09BQ0csYUFBYTtLQUNmOztJQUVEO01BQ0Usb0JBQWE7TUFBYixhQUFhO01BQ2IsNEJBQXNCO01BQXRCLDZCQUFzQjtjQUF0QixzQkFBc0I7TUFDdEIsaUJBQWlCO0lBQ25COztJQUVBO01BQ0UsV0FBVztNQUNYLFdBQVc7TUFDWCxjQUFjO01BQ2QsaUJBQWlCO01BQ2pCLHFCQUFxQjtNQUNyQixnQ0FBZ0M7TUFDaEMsb0JBQWE7TUFBYixhQUFhO01BQ2Isd0JBQXVCO2NBQXZCLHVCQUF1QjtJQUN6Qjs7SUFFQTtNQUNFO1FBQ0Usb0JBQWE7UUFBYixhQUFhO01BQ2Y7O01BRUE7UUFDRSxXQUFXO1FBQ1gsY0FBYztRQUNkLGlCQUFpQjtRQUNqQixxQkFBcUI7TUFDdkI7O01BRUE7UUFDRSxhQUFhO01BQ2Y7SUFDRiIsImZpbGUiOiJzcmMvYXBwL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXRvb2xiYXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB9XG4gICAgXG4gICAgLm1hdC10b29sYmFyIHtcbiAgICAgIGhlaWdodDogNnJlbTtcbiAgICAgIGJhY2tncm91bmQ6IHJnYig0LCAxMTYsIDE5Mik7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoNCwgMTE2LCAxOTIsIDEpIDMyJSwgcmdiYSgxNywgMTE4LCAxOTYsIDEpIDQzJSwgcmdiYSgyMzYsIDE5MiwgMzksIDEpIDY2JSk7XG4gICAgfVxuICAgIFxuICAgIGltZyB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgd2lkdGg6IDE3cmVtO1xuICAgICAgaGVpZ2h0OiA4cmVtO1xuICAgIH1cbiAgICBcbiAgICAuc3BhY2VyIHtcbiAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIH1cbiAgICBcbiAgICAubGlua3Mge1xuICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgIH1cbiAgICBcbiAgICAubWVudSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIHBhZGRpbmctdG9wOiA2cmVtO1xuICAgIH1cbiAgICBcbiAgICAubWVudSBhIHtcbiAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW46IDAgMTBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiA3MHB4O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFQUVBRUI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICAgIFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgICAgIC5saW5rcyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB9XG4gICAgXG4gICAgICAubGlua3MgYSB7XG4gICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICBtYXJnaW46IDAgMXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDcwcHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICBcbiAgICAgIC5tZW51LCBtYXQtaWNvbiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/toolbar/toolbar.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/toolbar/toolbar.component.ts ***!
    \**********************************************/

  /*! exports provided: ToolbarComponent */

  /***/
  function srcAppToolbarToolbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function () {
      return ToolbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ToolbarComponent = function ToolbarComponent() {
      _classCallCheck(this, ToolbarComponent);

      this.showMenu = false;
    };

    ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'toolbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./toolbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/toolbar/toolbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./toolbar.component.css */
      "./src/app/toolbar/toolbar.component.css")).default]
    })], ToolbarComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/user/Code/doctorIOS/my-app/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map