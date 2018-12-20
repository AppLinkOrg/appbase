webpackJsonp([5],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_base__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(41);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage(navCtrl, modalCtrl, alertCtrl, statusBar, viewCtrl, toastCtrl, navParam) {
        var _this = _super.call(this, navCtrl, modalCtrl, viewCtrl, statusBar, toastCtrl, alertCtrl, navParam) || this;
        _this.navCtrl = navCtrl;
        _this.modalCtrl = modalCtrl;
        _this.alertCtrl = alertCtrl;
        _this.statusBar = statusBar;
        _this.viewCtrl = viewCtrl;
        _this.toastCtrl = toastCtrl;
        _this.navParam = navParam;
        return _this;
    }
    LoginPage.prototype.onMyShow = function () {
    };
    LoginPage.prototype.gotoRegister = function () {
        var _this = this;
        this.modal("RegisterPage", {}, function (ret) {
            if (ret != undefined) {
                if (ret.reged == "Y") {
                    _this.close();
                }
            }
        });
    };
    LoginPage.prototype.gotoLogin = function () {
        var _this = this;
        this.modal("MobileLoginPage", {}, function (ret) {
            if (ret != undefined) {
                if (ret.logined == "Y") {
                    _this.close();
                }
            }
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/steve/Documents/GitHub/CDiaper/Source/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n  <div class="fixedtop">\n      <div class="padding" >\n      <ion-icon name="ios-close" class="h2 margin-left" (click)="close()"></ion-icon>\n    </div>\n  </div>\n\n  <div class="margin-top-80 text-center" >\n    <img src="{{uploadpath}}inst/{{InstInfo.logo}}" class="width-50" />\n  </div>\n  <div class="padding-20 margin-top"  >\n    <button ion-button round outline block  (click)="gotoLogin()">{{Lang["mobilelogin"]}}</button>\n  </div>\n  <div class="padding-20 no-padding-top " >\n    <button ion-button round outline block (click)="gotoRegister()">{{Lang["register"]}}</button>\n  </div>\n\n  <div class="fixedbottom">\n    <div class="flex-row flex-center">\n      <div class="flex-1"></div>\n      <div class="flex-1">\n        <div class="hr"></div>\n      </div>\n      <div class="flex-1 h6 txt-gray">{{Lang["otherlogintype"]}}</div>\n      <div class="flex-1">\n        <div class="hr"></div>\n      </div>\n      <div class="flex-1"></div>\n    </div>\n    <div class="flex-row flex-center margin-top">\n      <div class="flex-1" ></div>\n      <div class="padding"  >\n        <img src="{{uploadpath}}resource/{{res.wechat}}" class="icon-40" />\n      </div>\n      <div  class="padding"  >\n        <img src="{{uploadpath}}resource/{{res.qq}}" class="icon-40" />\n      </div>\n      <div class="flex-1" ></div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/steve/Documents/GitHub/CDiaper/Source/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}(__WEBPACK_IMPORTED_MODULE_2__app_app_base__["a" /* AppBase */]));

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=5.js.map