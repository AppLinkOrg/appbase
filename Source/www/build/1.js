webpackJsonp([1],{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentPageModule", function() { return ContentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__content__ = __webpack_require__(291);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContentPageModule = /** @class */ (function () {
    function ContentPageModule() {
    }
    ContentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__content__["a" /* ContentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__content__["a" /* ContentPage */]),
            ],
        })
    ], ContentPageModule);
    return ContentPageModule;
}());

//# sourceMappingURL=content.module.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_base__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_content_api__ = __webpack_require__(292);
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
 * Generated class for the ContentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContentPage = /** @class */ (function (_super) {
    __extends(ContentPage, _super);
    function ContentPage(navCtrl, modalCtrl, alertCtrl, statusBar, viewCtrl, toastCtrl, navParam, contentapi) {
        var _this = _super.call(this, navCtrl, modalCtrl, viewCtrl, statusBar, toastCtrl, alertCtrl, navParam) || this;
        _this.navCtrl = navCtrl;
        _this.modalCtrl = modalCtrl;
        _this.alertCtrl = alertCtrl;
        _this.statusBar = statusBar;
        _this.viewCtrl = viewCtrl;
        _this.toastCtrl = toastCtrl;
        _this.navParam = navParam;
        _this.contentapi = contentapi;
        _this.title = "";
        _this.key = "";
        _this.cont = "";
        _this.title = navParam.get("title");
        _this.key = navParam.get("key");
        return _this;
    }
    ContentPage.prototype.onMyShow = function () {
        var _this = this;
        this.contentapi.get({ keycode: this.key }).then(function (ret) {
            if (ret != null) {
                _this.cont = _this.util.HtmlDecode(ret.content);
            }
            else {
                _this.cont = "noreturn";
            }
        });
    };
    ContentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-content',template:/*ion-inline-start:"/Users/steve/Documents/GitHub/CDiaper/Source/src/pages/content/content.html"*/'<!--\n  Generated template for the ContentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n\n  \n    <ion-toolbar  color="primary">\n        <ion-title>{{title}}</ion-title>\n        <ion-buttons start>\n          <button ion-button (click)="close()">\n            <ion-icon name="ios-arrow-back" ></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div [innerHTML]=\'cont\'>\n\n  </div>\n  <div *ngIf="cont==\'noreturn\'">请到后台的文本内容管理设置keycode为{{key}}</div>\n</ion-content>\n'/*ion-inline-end:"/Users/steve/Documents/GitHub/CDiaper/Source/src/pages/content/content.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_content_api__["a" /* ContentApi */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_content_api__["a" /* ContentApi */]])
    ], ContentPage);
    return ContentPage;
}(__WEBPACK_IMPORTED_MODULE_3__app_app_base__["a" /* AppBase */]));

//# sourceMappingURL=content.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentApi; });
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






var ContentApi = /** @class */ (function () {
    function ContentApi(http) {
        this.http = http;
    }
    ContentApi.prototype.get = function (data, showLoadingModal) {
        if (showLoadingModal === void 0) { showLoadingModal = true; }
        var url = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].getApiUrl() + 'content/get';
        var headers = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].GetHeader(url, data);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].ParamUrlencoded(data);
        var loading = null;
        if (showLoadingModal) {
            loading = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].GetLoadingModal();
        }
        return this.http.post(url, body, options).toPromise()
            .then(function (res) {
            if (__WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].DataLoadedHandle('content/get', data, res)) {
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
            return __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].ErrorHandle('content/get', data, err);
        });
    };
    ContentApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ContentApi);
    return ContentApi;
}());

//# sourceMappingURL=content.api.js.map

/***/ })

});
//# sourceMappingURL=1.js.map