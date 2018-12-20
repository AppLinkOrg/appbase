webpackJsonp([4],{

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileLoginPageModule", function() { return MobileLoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mobile_login__ = __webpack_require__(294);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MobileLoginPageModule = /** @class */ (function () {
    function MobileLoginPageModule() {
    }
    MobileLoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mobile_login__["a" /* MobileLoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mobile_login__["a" /* MobileLoginPage */]),
            ],
        })
    ], MobileLoginPageModule);
    return MobileLoginPageModule;
}());

//# sourceMappingURL=mobile-login.module.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobileLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_base__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_member_api__ = __webpack_require__(104);
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
 * Generated class for the MobileLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MobileLoginPage = /** @class */ (function (_super) {
    __extends(MobileLoginPage, _super);
    function MobileLoginPage(navCtrl, modalCtrl, alertCtrl, statusBar, viewCtrl, toastCtrl, navParam, memberapi) {
        var _this = _super.call(this, navCtrl, modalCtrl, viewCtrl, statusBar, toastCtrl, alertCtrl, navParam) || this;
        _this.navCtrl = navCtrl;
        _this.modalCtrl = modalCtrl;
        _this.alertCtrl = alertCtrl;
        _this.statusBar = statusBar;
        _this.viewCtrl = viewCtrl;
        _this.toastCtrl = toastCtrl;
        _this.navParam = navParam;
        _this.memberapi = memberapi;
        _this.mobile = "";
        _this.password = "";
        return _this;
    }
    MobileLoginPage.prototype.onMyShow = function () {
        var mobile = this.store("lastloginmobile");
        if (mobile != null) {
            this.mobile = mobile;
        }
    };
    MobileLoginPage.prototype.login = function () {
        var _this = this;
        this.memberapi.login({ mobile: this.mobile, password: this.password }).then(function (ret) {
            if (ret.code == "0") {
                _this.store("lastloginmobile", _this.mobile);
                _this.store("token", ret.return);
                _this.return({ logined: "Y" });
            }
            else {
                _this.info(_this.Lang["userorpwsincorrect"]);
            }
        });
    };
    MobileLoginPage.prototype.gotoForget = function () {
        this.modal("ForgetPasswordPage", {});
    };
    MobileLoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mobile-login',template:/*ion-inline-start:"/Users/steve/Documents/GitHub/CDiaper/Source/src/pages/mobile-login/mobile-login.html"*/'<!--\n  Generated template for the MobileLoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  \n    <ion-toolbar  color="primary">\n        <ion-title>{{Lang["mobilelogin"]}}</ion-title>\n        <ion-buttons start>\n          <button ion-button (click)="close()">\n            <ion-icon name="ios-arrow-back" ></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-toolbar>\n  </ion-header>\n  \n  \n  <ion-content>\n    <div class="padding-20">\n      <div class="padding">\n        <div class="flex-row flex-center">\n          <div>\n            <img src="{{uploadpath}}resource/{{res.mobile}}" class="icon-20 margin-right" />\n          </div>\n          <div class="flex-1">\n            <input placeholder="{{Lang[\'registermobiletips\']}}" [(ngModel)]="mobile" class="h5 width-100" type="tel"\n              maxlength="11" />\n          </div>\n        </div>\n      </div>\n      <div class="hr">\n  \n      </div>\n      <div class="padding">\n        <div class="flex-row flex-center">\n          <div>\n            <img src="{{uploadpath}}resource/{{res.shuo}}" class="icon-20 margin-right" />\n          </div>\n          <div class="flex-1">\n            <input placeholder="{{Lang[\'registerpasswordtips\']}}" [(ngModel)]="password" type="password" class="h5 width-100" />\n          </div>\n          <div >\n              <button ion-button clear  color="secondary" class="h6" (click)="gotoForget()" >{{Lang["forgetpassword"]}}</button>\n          </div>\n        </div>\n      </div>\n      <div class="hr"></div>\n      <div class="margin-top-20">\n        <button ion-button round block (click)="login()">{{Lang["login"]}}</button>\n      </div>\n    </div>\n  \n  </ion-content>\n'/*ion-inline-end:"/Users/steve/Documents/GitHub/CDiaper/Source/src/pages/mobile-login/mobile-login.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_member_api__["a" /* MemberApi */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_member_api__["a" /* MemberApi */]])
    ], MobileLoginPage);
    return MobileLoginPage;
}(__WEBPACK_IMPORTED_MODULE_2__app_app_base__["a" /* AppBase */]));

//# sourceMappingURL=mobile-login.js.map

/***/ })

});
//# sourceMappingURL=4.js.map