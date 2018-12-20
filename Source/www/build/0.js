webpackJsonp([0],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyCodePageModule", function() { return VerifyCodePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verify_code__ = __webpack_require__(297);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VerifyCodePageModule = /** @class */ (function () {
    function VerifyCodePageModule() {
    }
    VerifyCodePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__verify_code__["a" /* VerifyCodePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__verify_code__["a" /* VerifyCodePage */]),
            ],
        })
    ], VerifyCodePageModule);
    return VerifyCodePageModule;
}());

//# sourceMappingURL=verify-code.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyCodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_base__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_aliyun_api__ = __webpack_require__(298);
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
 * Generated class for the VerifyCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VerifyCodePage = /** @class */ (function (_super) {
    __extends(VerifyCodePage, _super);
    function VerifyCodePage(navCtrl, modalCtrl, alertCtrl, statusBar, viewCtrl, toastCtrl, navParam, aliyunApi) {
        var _this = _super.call(this, navCtrl, modalCtrl, viewCtrl, statusBar, toastCtrl, alertCtrl, navParam) || this;
        _this.navCtrl = navCtrl;
        _this.modalCtrl = modalCtrl;
        _this.alertCtrl = alertCtrl;
        _this.statusBar = statusBar;
        _this.viewCtrl = viewCtrl;
        _this.toastCtrl = toastCtrl;
        _this.navParam = navParam;
        _this.aliyunApi = aliyunApi;
        _this.mobile = "";
        _this.type = "";
        _this.c1 = "";
        _this.c2 = "";
        _this.c3 = "";
        _this.c4 = "";
        _this.resendSecond = 60;
        _this.reminder = 0;
        _this.timer = null;
        return _this;
    }
    VerifyCodePage.prototype.onMyLoad = function () {
        var _this = this;
        this.mobile = this.navParam.get("mobile");
        this.type = this.navParam.get("type");
        //this.mobile="13751082562";
        //this.type="register";
        this.sendCode();
        this.timer = setInterval(function () {
            if (_this.reminder > 0) {
                _this.reminder--;
            }
        }, 1000);
    };
    VerifyCodePage.prototype.sendCode = function () {
        var _this = this;
        this.aliyunApi.sendverifycode({ mobile: this.mobile, type: this.type }, false)
            .then(function (ret) {
            if (ret.code == 0) {
                _this.reminder = _this.resendSecond;
                _this.c1 = "";
                _this.c2 = "";
                _this.c3 = "";
                _this.c4 = "";
                _this.setFocus(1);
                _this.toast(_this.Lang["verifycodesent"]);
            }
            else {
                _this.toast(_this.Lang["verifycodesendfail"]);
            }
        });
    };
    VerifyCodePage.prototype.onMyShow = function () {
    };
    VerifyCodePage.prototype.verify = function () {
        var _this = this;
        var verifycode = this.c1 + this.c2 + this.c3 + this.c4;
        this.aliyunApi.verifycode({ mobile: this.mobile, verifycode: verifycode, type: this.type })
            .then(function (ret) {
            _this.c1 = "";
            _this.c2 = "";
            _this.c3 = "";
            _this.c4 = "";
            if (ret.code == 0) {
                _this.return({ verifyed: "Y" });
            }
            else {
                _this.toast(_this.Lang["verifycodeincorrect"]);
            }
        });
    };
    VerifyCodePage.prototype.setFocus = function (num) {
        // if(num==1){
        //   this.inputc1.setFocus();
        // }
        // if(num==2){
        //   this.inputc2.setFocus();
        // }
        // if(num==3){
        //   this.inputc3.setFocus();
        // }
        // if(num==4){
        //   this.inputc4.setFocus();
        // }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('ic1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], VerifyCodePage.prototype, "inputc1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('ic2'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], VerifyCodePage.prototype, "inputc2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('ic3'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], VerifyCodePage.prototype, "inputc3", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('ic4'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], VerifyCodePage.prototype, "inputc4", void 0);
    VerifyCodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-verify-code',template:/*ion-inline-start:"/Users/steve/Documents/GitHub/CDiaper/Source/src/pages/verify-code/verify-code.html"*/'<!--\n  Generated template for the VerifyCodePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n\n  <ion-toolbar  color="primary">\n      <ion-title>{{Lang["mobileverify"]}}</ion-title>\n      <ion-buttons start>\n        <button ion-button (click)="close()">\n          <ion-icon name="ios-arrow-back" ></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="h6 txt-gray">\n    {{Lang["youmobile"]}} : {{mobile}}\n    <br />\n    {{Lang["receiveandinput"]}}\n  </div>\n  <div class="margin-top-40">\n    <div class="flex-row text-center">\n      <div class="flex-1">\n\n      </div>\n      <div class="padding-bottom margin-right" [class.noinput]="c1==\'\'" [class.inputed]="c1!=\'\'"  >\n        <ion-input type="text" class="code h2" #ic1 [(ngModel)]="c1"  maxlength="1" (keyup)="setFocus(2)"  ></ion-input>\n      </div>\n      <div class="padding-bottom margin-right-5" [class.noinput]="c2==\'\'" [class.inputed]="c2!=\'\'" >\n        <ion-input type="text" class="code h2"  #ic2 [(ngModel)]="c2"   maxlength="1" (keyup)="setFocus(3)"   ></ion-input>\n      </div>\n      <div class="padding-bottom margin-left-5" [class.noinput]="c3==\'\'" [class.inputed]="c3!=\'\'" >\n        <ion-input type="text" class="code h2"  #ic3 [(ngModel)]="c3"   maxlength="1"  (keyup)="setFocus(4)" ></ion-input>\n      </div>\n      <div class="padding-bottom  margin-left" [class.noinput]="c4==\'\'" [class.inputed]="c4!=\'\'" >\n        <ion-input type="text" class="code h2"  #ic4 [(ngModel)]="c4"   maxlength="1" (keyup)="verify()" ></ion-input>\n      </div>\n      <div class="flex-1">\n        \n      </div>\n    </div>\n    <div class="flex-row text-center">\n      <div class="flex-1">\n        \n      </div>\n      <div class="margin-top resend text-right">\n          <button ion-button clear  color="secondary" class="h5" *ngIf="reminder>0">{{reminder}}{{Lang["secondresend"]}}</button>\n          <button ion-button clear  color="primary" class="h5" *ngIf="reminder<=0" (click)="sendCode()">{{Lang["resend"]}}</button>\n      </div>\n      <div class="flex-1">\n        \n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/steve/Documents/GitHub/CDiaper/Source/src/pages/verify-code/verify-code.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_aliyun_api__["a" /* AliyunApi */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_aliyun_api__["a" /* AliyunApi */]])
    ], VerifyCodePage);
    return VerifyCodePage;
}(__WEBPACK_IMPORTED_MODULE_2__app_app_base__["a" /* AppBase */]));

//# sourceMappingURL=verify-code.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AliyunApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_api_config__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AliyunApi = /** @class */ (function () {
    function AliyunApi(http) {
        this.http = http;
    }
    AliyunApi.prototype.sendverifycode = function (data, showLoadingModal) {
        if (showLoadingModal === void 0) { showLoadingModal = true; }
        var url = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].getApiUrl() + 'aliyun/sendverifycode';
        var headers = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].GetHeader(url, data);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].ParamUrlencoded(data);
        var loading = null;
        if (showLoadingModal) {
            loading = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].GetLoadingModal();
        }
        return this.http.post(url, body, options).toPromise()
            .then(function (res) {
            if (__WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].DataLoadedHandle('aliyun/sendverifycode', data, res)) {
                if (showLoadingModal) {
                    __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].DimissLoadingModal();
                }
                if (res == null) {
                    return null;
                }
                return res.json();
            }
            else {
                return Promise.reject(res);
            }
        })
            .catch(function (err) {
            if (showLoadingModal) {
                __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].DimissLoadingModal();
            }
            return __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].ErrorHandle('aliyun/sendverifycode', data, err);
        });
    };
    AliyunApi.prototype.verifycode = function (data, showLoadingModal) {
        if (showLoadingModal === void 0) { showLoadingModal = true; }
        var url = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].getApiUrl() + 'aliyun/verifycode';
        var headers = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].GetHeader(url, data);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].ParamUrlencoded(data);
        var loading = null;
        if (showLoadingModal) {
            loading = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].GetLoadingModal();
        }
        return this.http.post(url, body, options).toPromise()
            .then(function (res) {
            if (__WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].DataLoadedHandle('aliyun/verifycode', data, res)) {
                if (showLoadingModal) {
                    __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].DimissLoadingModal();
                }
                if (res == null) {
                    return null;
                }
                return res.json();
            }
            else {
                return Promise.reject(res);
            }
        })
            .catch(function (err) {
            if (showLoadingModal) {
                __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].DimissLoadingModal();
            }
            return __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].ErrorHandle('aliyun/verifycode', data, err);
        });
    };
    AliyunApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AliyunApi);
    return AliyunApi;
}());

//# sourceMappingURL=aliyun.api.js.map

/***/ })

});
//# sourceMappingURL=0.js.map