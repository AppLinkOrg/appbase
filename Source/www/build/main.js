webpackJsonp([8],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstApi; });
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






var InstApi = /** @class */ (function () {
    function InstApi(http) {
        this.http = http;
    }
    InstApi.prototype.indexbanner = function (data, showLoadingModal) {
        if (showLoadingModal === void 0) { showLoadingModal = true; }
        var url = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].getApiUrl() + 'inst/indexbanner';
        var headers = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].GetHeader(url, data);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].ParamUrlencoded(data);
        var loading = null;
        if (showLoadingModal) {
            loading = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].GetLoadingModal();
        }
        return this.http.post(url, body, options).toPromise()
            .then(function (res) {
            if (__WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].DataLoadedHandle('inst/indexbanner', data, res)) {
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
            return __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].ErrorHandle('inst/indexbanner', data, err);
        });
    };
    InstApi.prototype.info = function (data, showLoadingModal) {
        if (showLoadingModal === void 0) { showLoadingModal = true; }
        var url = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].getApiUrl() + 'inst/info';
        var headers = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].GetHeader(url, data);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].ParamUrlencoded(data);
        var loading = null;
        if (showLoadingModal) {
            loading = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].GetLoadingModal();
        }
        return this.http.post(url, body, options).toPromise()
            .then(function (res) {
            if (__WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].DataLoadedHandle('inst/info', data, res)) {
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
            return __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].ErrorHandle('inst/info', data, err);
        });
    };
    InstApi.prototype.resources = function (data, showLoadingModal) {
        if (showLoadingModal === void 0) { showLoadingModal = true; }
        var url = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].getApiUrl() + 'inst/resources';
        var headers = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].GetHeader(url, data);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].ParamUrlencoded(data);
        var loading = null;
        if (showLoadingModal) {
            loading = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].GetLoadingModal();
        }
        return this.http.post(url, body, options).toPromise()
            .then(function (res) {
            if (__WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].DataLoadedHandle('inst/resources', data, res)) {
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
            return __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].ErrorHandle('inst/resources', data, err);
        });
    };
    InstApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], InstApi);
    return InstApi;
}());

//# sourceMappingURL=inst.api.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_config__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_util__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_lang__ = __webpack_require__(259);



var AppBase = /** @class */ (function () {
    function AppBase(navCtrl, modalCtrl, viewCtrl, statusBar, toastCtrl, alertCtrl, navParams) {
        this.statusBar = null;
        this.navCtrl = null;
        this.modalCtrl = null;
        this.viewCtrl = null;
        this.toastCtrl = null;
        this.alertCtrl = null;
        this.navParams = null;
        this.statusBarStyle = "X"; //{DARK}
        this.uploadpath = __WEBPACK_IMPORTED_MODULE_0__api_config__["a" /* ApiConfig */].getUploadPath();
        this.util = __WEBPACK_IMPORTED_MODULE_1__app_util__["a" /* AppUtil */];
        this.Lang = [];
        this.res = [];
        this.InstInfo = { logo: "", memberlogo: "" };
        this.MemberInfo = null;
        this.options = {};
        this.firseonshow = true;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.statusBar = statusBar;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
    }
    AppBase.prototype.setStatusBar = function () {
        //  this.statusBar.styleLightContent();
    };
    AppBase.prototype.ionViewDidLoad = function () {
        __WEBPACK_IMPORTED_MODULE_0__api_config__["a" /* ApiConfig */].SetUnicode(AppBase.UNICODE);
        this.getResources();
        this.getInstInfo();
        this.onMyLoad();
        this.options = this.navParams.data;
    };
    AppBase.prototype.onMyLoad = function () {
    };
    AppBase.prototype.getInstInfo = function () {
        var _this = this;
        AppBase.instapi.info({}, false).then(function (instinfo) {
            _this.InstInfo = instinfo;
            AppBase.myapp.InstInfo = instinfo;
            console.log(instinfo);
        });
    };
    AppBase.prototype.getResources = function () {
        var _this = this;
        AppBase.instapi.resources({}, false).then(function (res) {
            _this.res = res;
            AppBase.myapp.res = res;
        });
    };
    AppBase.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.setStatusBar();
        this.Lang = __WEBPACK_IMPORTED_MODULE_2__app_lang__["a" /* AppLang */].getLang();
        AppBase.myapp.Lang = __WEBPACK_IMPORTED_MODULE_2__app_lang__["a" /* AppLang */].getLang();
        var token = window.localStorage.getItem("token");
        //alert(token);
        if (token == null) {
            AppBase.myapp.MemberInfo = null;
            this.onMyShow();
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0__api_config__["a" /* ApiConfig */].SetToken(token);
            AppBase.memberapi.info({}).then(function (memberinfo) {
                if (memberinfo == null || memberinfo.mobile == undefined || memberinfo.mobile == "") {
                    memberinfo = null;
                }
                _this.MemberInfo = memberinfo;
                AppBase.myapp.MemberInfo = memberinfo;
                _this.onMyShow();
            });
        }
        this.firseonshow = false;
    };
    AppBase.prototype.onMyShow = function () {
    };
    AppBase.prototype.onPullRefresh = function (ref) {
        this.onMyShow();
        ref.complete();
    };
    AppBase.prototype.doRefresh = function (ref) {
        var _this = this;
        setTimeout(function () {
            _this.onPullRefresh(ref);
            ref.complete();
        }, 2000);
    };
    AppBase.prototype.back = function () {
        this.navCtrl.pop();
    };
    AppBase.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    AppBase.prototype.return = function (data) {
        this.viewCtrl.dismiss(data);
    };
    AppBase.prototype.nagivate = function (pagename, param) {
        this.navCtrl.push(pagename, param);
    };
    AppBase.prototype.modal = function (pageobj, param, callback) {
        if (callback === void 0) { callback = null; }
        var modal = this.modalCtrl.create(pageobj, param);
        modal.onDidDismiss(function (data, role) {
            if (callback != null) {
                ///alert(data);
                callback(data);
            }
        });
        modal.present();
    };
    AppBase.prototype.content = function (title, key) {
        this.modal("ContentPage", { title: title, key: key });
    };
    AppBase.prototype.decode = function (val) {
        return __WEBPACK_IMPORTED_MODULE_1__app_util__["a" /* AppUtil */].HtmlDecode(val);
    };
    AppBase.prototype.contentToLine = function (str) {
        if (str == null) {
            return "";
        }
        return str.split("\n");
    };
    AppBase.prototype.tel = function (tel) {
        window.location.href = "tel:" + tel;
    };
    AppBase.prototype.toast = function (msg) {
        if (msg == "") {
            return;
        }
        var toast = this.toastCtrl.create({
            message: msg,
            duration: ((msg / 3) + 1) * 1000
        });
        toast.present();
    };
    AppBase.prototype.info = function (msg) {
        var alert = this.alertCtrl.create({
            title: this.Lang["tips"],
            subTitle: msg,
            buttons: [this.Lang['iknow']]
        });
        alert.present();
    };
    AppBase.prototype.confirm = function (msg, confirmcallback) {
        var alert = this.alertCtrl.create({
            title: this.Lang["tips"],
            subTitle: msg,
            buttons: [{
                    text: this.Lang["cancel"],
                    handler: function () {
                        console.log('Disagree clicked');
                        confirmcallback(false);
                    }
                }, {
                    text: this.Lang["ok"],
                    handler: function () {
                        confirmcallback(true);
                    }
                }]
        });
        alert.present();
    };
    AppBase.prototype.checkLogin = function (callback) {
        if (this.MemberInfo == null) {
            var modal = this.modalCtrl.create("LoginPage");
            modal.onDidDismiss(function (islogin) {
                if (islogin == "Y") {
                    callback();
                }
            });
            modal.present();
        }
        else {
            callback();
        }
    };
    AppBase.prototype.hasLogin = function () {
        return this.MemberInfo != null;
    };
    AppBase.prototype.store = function (name, key) {
        if (key === void 0) { key = null; }
        if (key == null) {
            return window.localStorage.getItem(name);
        }
        else {
            window.localStorage.setItem(name, key);
            return "";
        }
    };
    AppBase.myapp = null;
    AppBase.instapi = null;
    AppBase.memberapi = null;
    AppBase.UNICODE = "test";
    return AppBase;
}());

//# sourceMappingURL=app.base.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberApi; });
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






var MemberApi = /** @class */ (function () {
    function MemberApi(http) {
        this.http = http;
    }
    MemberApi.prototype.checkcanreg = function (data, showLoadingModal) {
        if (showLoadingModal === void 0) { showLoadingModal = true; }
        var url = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].getApiUrl() + 'member/checkcanreg';
        var headers = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].GetHeader(url, data);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].ParamUrlencoded(data);
        var loading = null;
        if (showLoadingModal) {
            loading = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].GetLoadingModal();
        }
        return this.http.post(url, body, options).toPromise()
            .then(function (res) {
            if (__WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].DataLoadedHandle('member/checkcanreg', data, res)) {
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
            return __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].ErrorHandle('member/checkcanreg', data, err);
        });
    };
    MemberApi.prototype.getuserinfo = function (data, showLoadingModal) {
        if (showLoadingModal === void 0) { showLoadingModal = true; }
        var url = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].getApiUrl() + 'member/getuserinfo';
        var headers = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].GetHeader(url, data);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].ParamUrlencoded(data);
        var loading = null;
        if (showLoadingModal) {
            loading = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].GetLoadingModal();
        }
        return this.http.post(url, body, options).toPromise()
            .then(function (res) {
            if (__WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].DataLoadedHandle('member/getuserinfo', data, res)) {
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
            return __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].ErrorHandle('member/getuserinfo', data, err);
        });
    };
    MemberApi.prototype.info = function (data, showLoadingModal) {
        if (showLoadingModal === void 0) { showLoadingModal = true; }
        var url = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].getApiUrl() + 'member/info';
        var headers = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].GetHeader(url, data);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].ParamUrlencoded(data);
        var loading = null;
        if (showLoadingModal) {
            loading = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].GetLoadingModal();
        }
        return this.http.post(url, body, options).toPromise()
            .then(function (res) {
            if (__WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].DataLoadedHandle('member/info', data, res)) {
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
            return __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].ErrorHandle('member/info', data, err);
        });
    };
    MemberApi.prototype.login = function (data, showLoadingModal) {
        if (showLoadingModal === void 0) { showLoadingModal = true; }
        var url = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].getApiUrl() + 'member/login';
        var headers = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].GetHeader(url, data);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].ParamUrlencoded(data);
        var loading = null;
        if (showLoadingModal) {
            loading = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].GetLoadingModal();
        }
        return this.http.post(url, body, options).toPromise()
            .then(function (res) {
            if (__WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].DataLoadedHandle('member/login', data, res)) {
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
            return __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].ErrorHandle('member/login', data, err);
        });
    };
    MemberApi.prototype.register = function (data, showLoadingModal) {
        if (showLoadingModal === void 0) { showLoadingModal = true; }
        var url = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].getApiUrl() + 'member/register';
        var headers = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].GetHeader(url, data);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].ParamUrlencoded(data);
        var loading = null;
        if (showLoadingModal) {
            loading = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].GetLoadingModal();
        }
        return this.http.post(url, body, options).toPromise()
            .then(function (res) {
            if (__WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].DataLoadedHandle('member/register', data, res)) {
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
            return __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].ErrorHandle('member/register', data, err);
        });
    };
    MemberApi.prototype.resetpassword = function (data, showLoadingModal) {
        if (showLoadingModal === void 0) { showLoadingModal = true; }
        var url = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].getApiUrl() + 'member/resetpassword';
        var headers = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].GetHeader(url, data);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].ParamUrlencoded(data);
        var loading = null;
        if (showLoadingModal) {
            loading = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].GetLoadingModal();
        }
        return this.http.post(url, body, options).toPromise()
            .then(function (res) {
            if (__WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].DataLoadedHandle('member/resetpassword', data, res)) {
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
            return __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].ErrorHandle('member/resetpassword', data, err);
        });
    };
    MemberApi.prototype.setvalue = function (data, showLoadingModal) {
        if (showLoadingModal === void 0) { showLoadingModal = true; }
        var url = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].getApiUrl() + 'member/setvalue';
        var headers = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].GetHeader(url, data);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].ParamUrlencoded(data);
        var loading = null;
        if (showLoadingModal) {
            loading = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].GetLoadingModal();
        }
        return this.http.post(url, body, options).toPromise()
            .then(function (res) {
            if (__WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].DataLoadedHandle('member/setvalue', data, res)) {
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
            return __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].ErrorHandle('member/setvalue', data, err);
        });
    };
    MemberApi.prototype.update = function (data, showLoadingModal) {
        if (showLoadingModal === void 0) { showLoadingModal = true; }
        var url = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].getApiUrl() + 'member/update';
        var headers = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].GetHeader(url, data);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].ParamUrlencoded(data);
        var loading = null;
        if (showLoadingModal) {
            loading = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].GetLoadingModal();
        }
        return this.http.post(url, body, options).toPromise()
            .then(function (res) {
            if (__WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].DataLoadedHandle('member/update', data, res)) {
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
            return __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].ErrorHandle('member/update', data, err);
        });
    };
    MemberApi.prototype.updatelocation = function (data, showLoadingModal) {
        if (showLoadingModal === void 0) { showLoadingModal = true; }
        var url = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].getApiUrl() + 'member/updatelocation';
        var headers = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].GetHeader(url, data);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].ParamUrlencoded(data);
        var loading = null;
        if (showLoadingModal) {
            loading = __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].GetLoadingModal();
        }
        return this.http.post(url, body, options).toPromise()
            .then(function (res) {
            if (__WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].DataLoadedHandle('member/updatelocation', data, res)) {
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
            return __WEBPACK_IMPORTED_MODULE_2__app_api_config__["a" /* ApiConfig */].ErrorHandle('member/updatelocation', data, err);
        });
    };
    MemberApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], MemberApi);
    return MemberApi;
}());

//# sourceMappingURL=member.api.js.map

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-kid/add-kid.module": [
		281,
		7
	],
	"../pages/content/content.module": [
		283,
		1
	],
	"../pages/forget-password/forget-password.module": [
		282,
		6
	],
	"../pages/login/login.module": [
		284,
		5
	],
	"../pages/mobile-login/mobile-login.module": [
		285,
		4
	],
	"../pages/register/register.module": [
		286,
		3
	],
	"../pages/setting/setting.module": [
		287,
		2
	],
	"../pages/verify-code/verify-code.module": [
		288,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_base__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_inst_api__ = __webpack_require__(102);
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





var HomePage = /** @class */ (function (_super) {
    __extends(HomePage, _super);
    function HomePage(navCtrl, modalCtrl, statusBar, viewCtrl, toastCtrl, alertCtrl, navParam, instapi) {
        var _this = _super.call(this, navCtrl, modalCtrl, viewCtrl, statusBar, toastCtrl, alertCtrl, navParam) || this;
        _this.navCtrl = navCtrl;
        _this.modalCtrl = modalCtrl;
        _this.statusBar = statusBar;
        _this.viewCtrl = viewCtrl;
        _this.toastCtrl = toastCtrl;
        _this.alertCtrl = alertCtrl;
        _this.navParam = navParam;
        _this.instapi = instapi;
        _this.menu = 1;
        _this.menu0 = 0;
        _this.menu1 = 1;
        _this.menu2 = 0;
        _this.indexbanner = [];
        _this.babylist = [];
        _this.menu = 1;
        _this.menu1 = 1;
        return _this;
    }
    HomePage.prototype.onMyLoad = function () {
        console.log("modal ctrl");
        console.log(this.modalCtrl);
        this.modalCtrl = this.modalCtrl;
        this.navCtrl = this.navCtrl;
        this.statusBar = this.statusBar;
    };
    HomePage.prototype.onMyShow = function () {
        var _this = this;
        this.instapi.indexbanner({}, false).then(function (indexbanner) {
            _this.indexbanner = indexbanner;
        });
        //this.changeTab(1,{});
        if (this.firseonshow) {
            this.menuChange(this.menu);
            this.menu1Change(this.menu1);
        }
        //this.modal("MobileLoginPage",{},()=>{})
    };
    HomePage.prototype.onPullRefresh = function () {
        this.onMyLoad();
    };
    HomePage.prototype.menuChange = function (m) {
        this.menu = m;
        this.slides.lockSwipes(false);
        this.slides.slideTo(this.menu);
        this.slides.lockSwipes(true);
    };
    HomePage.prototype.menu0Change = function (m) {
        this.menu0 = m;
        this.slides_menu0.lockSwipes(false);
        this.slides_menu0.slideTo(this.menu0);
        this.slides_menu0.lockSwipes(true);
    };
    HomePage.prototype.menu1Change = function (m) {
        this.menu1 = m;
        this.slides_menu1.lockSwipes(false);
        this.slides_menu1.slideTo(this.menu1);
        this.slides_menu1.lockSwipes(true);
    };
    HomePage.prototype.menu2Change = function (m) {
        this.menu2 = m;
        this.slides_menu2.lockSwipes(false);
        this.slides_menu2.slideTo(this.menu2);
        this.slides_menu2.lockSwipes(true);
    };
    HomePage.prototype.swipe = function (e, menu, menu1) {
        console.log(e.direction);
        var num = 0;
        if (e.direction == 2) {
            num++;
        }
        else if (e.direction == 4) {
            num--;
        }
        if (menu == 0) {
            if (menu1 + num > 0) {
                menu++;
            }
            else if (menu1 + num < 0) {
                //menu--;
            }
            else {
                menu1 = menu1 + num;
            }
            this.menuChange(menu);
            this.menu0Change(menu1);
            return;
        }
        if (menu == 1) {
            if (menu1 + num > 2) {
                menu++;
            }
            else if (menu1 + num < 0) {
                menu--;
            }
            else {
                menu1 = menu1 + num;
            }
            this.menuChange(menu);
            this.menu1Change(menu1);
            return;
        }
        if (menu == 2) {
            if (menu1 + num > 1) {
                //menu++;
            }
            else if (menu1 + num < 0) {
                menu--;
            }
            else {
                menu1 = menu1 + num;
            }
            this.menuChange(menu);
            this.menu2Change(menu1);
            return;
        }
    };
    HomePage.prototype.addBaby = function () {
        var _this = this;
        this.checkLogin(function () {
            var modal = _this.modalCtrl.create("AddKidPage");
            modal.present();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("menu_slider"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */])
    ], HomePage.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("menu0_slider"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */])
    ], HomePage.prototype, "slides_menu0", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("menu1_slider"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */])
    ], HomePage.prototype, "slides_menu1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("menu2_slider"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */])
    ], HomePage.prototype, "slides_menu2", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/steve/Documents/GitHub/CDiaper/Source/src/pages/home/home.html"*/'<ion-header>\n  <div class="padding-20 bg-primary ">\n    <div>\n      <div class="flex-row flex-center">\n        <div>\n          <i class="material-icons txt-white h2" menuToggle>list</i>\n        </div>\n        <div class="flex-1">\n          <div class="flex-row flex-center">\n            <div class="flex-1 text-right margin-right-10">\n              <i class="material-icons h1" (click)="menuChange(0)" [class.txt-white]="menu==0" [class.txt-light-white]="menu!=0"\n                [class.h2]="menu!=0">swap_vert</i>\n            </div>\n            <div>\n              <i class="material-icons h1" (click)="menuChange(1)" [class.txt-white]="menu==1" [class.txt-light-white]="menu!=1"\n                [class.h2]="menu!=1">home</i>\n            </div>\n            <div class="flex-1 margin-left-10">\n              <i class="material-icons h1" (click)="menuChange(2)" [class.txt-white]="menu==2" [class.txt-light-white]="menu!=2"\n                [class.h2]="menu!=2">date_range</i>\n            </div>\n          </div>\n        </div>\n        <div>\n          <i class="material-icons txt-white h2">search</i>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-header>\n\n<ion-content>\n\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="下拉加载最新信息" refreshingSpinner="circles"\n      refreshingText="刷新中">\n    </ion-refresher-content>\n  </ion-refresher>\n\n\n  <div class="body">\n    <ion-slides #menu_slider>\n      <ion-slide class="body">\n        <ion-slides #menu0_slider>\n          <ion-slide class="body">\n            <ion-scroll scrollY="true" class="fullheight">\n              <div class="body" (swipe)="swipe($event,0,0)">\n                <div class="padding">\n                  aa\n                </div>\n              </div>\n              <div style="height:50px;"></div>\n            </ion-scroll>\n          </ion-slide>\n        </ion-slides>\n      </ion-slide>\n      <ion-slide class="body">\n        <div class="bg-primary flex-row">\n          <div class="flex-row flex-1">\n            <div class="flex-1"></div>\n            <div class="padding-20 txt-white no_active" [class.sub_active]="menu1==0" (click)="menu1Change(0)">{{Lang["recommend"]}}</div>\n            <div class="flex-1"></div>\n          </div>\n          <div class="flex-row flex-1">\n            <div class="flex-1"></div>\n            <div class="padding-20 txt-white no_active" [class.sub_active]="menu1==1" (click)="menu1Change(1)">{{Lang["general"]}}</div>\n            <div class="flex-1"></div>\n          </div>\n          <div class="flex-row flex-1">\n            <div class="flex-1"></div>\n            <div class="padding-20 txt-white no_active" [class.sub_active]="menu1==2" (click)="menu1Change(2)">{{Lang["focuson"]}}</div>\n            <div class="flex-1"></div>\n          </div>\n        </div>\n        <ion-slides #menu1_slider>\n          <ion-slide class="body">\n            <div class="body" (swipe)="swipe($event,1,0)">\n\n            </div>\n          </ion-slide>\n          <ion-slide class="body">\n            <ion-scroll scrollY="true" class="fullheight">\n              <div class="bg-primary bgafterbanner"></div>\n              <div>\n                <div class="padding">\n                  <ion-slides class="adv_banner">\n                    <ion-slide *ngFor="let item of indexbanner">\n                      <img src="{{uploadpath}}indexbanner/{{item.img}}" />\n                    </ion-slide>\n                  </ion-slides>\n                </div>\n                <div (swipe)="swipe($event,1,1)">\n                  <div class="padding">\n                    <div class="flex-row flex-center text-center">\n                      <div class="flex-1 ">\n                        <div>\n                          <img class="icon-50 radius-50 bg-primary shadow" src="{{uploadpath}}resource/{{res.icon1}}" />\n                        </div>\n                        <div class="h6 margin-top">预留1</div>\n                      </div>\n                      <div class="flex-1">\n\n                        <div>\n                          <img class="icon-50 radius-50 bg-primary shadow" src="{{uploadpath}}resource/{{res.icon2}}" />\n                        </div>\n                        <div class="h6 margin-top">预留2</div>\n                      </div>\n                      <div class="flex-1">\n\n                        <div>\n                          <img class="icon-50 radius-50 bg-primary shadow" src="{{uploadpath}}resource/{{res.icon3}}" />\n                        </div>\n                        <div class="h6 margin-top">预留3</div>\n                      </div>\n                      <div class="flex-1">\n\n                        <div>\n                          <img class="icon-50 radius-50 bg-primary shadow" src="{{uploadpath}}resource/{{res.icon4}}" />\n                        </div>\n                        <div class="h6 margin-top">预留4</div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class="hr" ></div>\n                <div *ngIf="babylist.length==0" class="padding">\n                    <div class="text-center margin-top">\n                        <div (click)="addBaby()">\n                            <img class="icon-50" src="{{uploadpath}}resource/{{res.babyface}}" />\n                        </div>\n                        <div class="txt-primary h4 margin-top" (click)="addBaby()">\n                            {{Lang["addkidfirst"]}}\n                        </div>\n                    </div>\n                </div>\n                <div class="hr" ></div>\n              </div>\n              <div style="height:50px;"></div>\n            </ion-scroll>\n          </ion-slide>\n          <ion-slide class="body">\n            <ion-scroll scrollY="true" class="fullheight">\n              <div class="body padding-20" (swipe)="swipe($event,1,2)">\n                a\n              </div>\n              <div style="height:50px;"></div>\n            </ion-scroll>\n          </ion-slide>\n        </ion-slides>\n      </ion-slide>\n      <ion-slide class="body">\n        <div class="bg-primary flex-row">\n          <div class="flex-row flex-1">\n            <div class="flex-1"></div>\n            <div class="padding-20 txt-white no_active" [class.sub_active]="menu2==0" (click)="menu2Change(0)">待办事务</div>\n            <div class="flex-1"></div>\n          </div>\n          <div class="flex-row flex-1">\n            <div class="flex-1"></div>\n            <div class="padding-20 txt-white no_active" [class.sub_active]="menu2==1" (click)="menu2Change(1)">进行中</div>\n            <div class="flex-1"></div>\n          </div>\n        </div>\n        <ion-slides #menu2_slider>\n          <ion-slide class="body">\n            <ion-scroll scrollY="true" class="fullheight">\n              <div class="body" (swipe)="swipe($event,2,0)">\n                a\n\n                <div style="height:50px;"></div>\n\n              </div>\n            </ion-scroll>\n          </ion-slide>\n          <ion-slide class="body">\n            <ion-scroll scrollY="true" class="fullheight">\n              <div class="body" (swipe)="swipe($event,2,1)">\n                a\n                <div style="height:50px;"></div>\n\n              </div>\n            </ion-scroll>\n          </ion-slide>\n        </ion-slides>\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n\n\n  <!--menuToggle\n    \n    <div class="body">\n\n        <ion-slides direction="vertical">\n            <ion-slide class="padding body" style="padding-top:0px;">\n                <div class="sliderbody">\n                    <div class="h3">\n                        罗湖区\n                    </div>\n                    <div class="h4">\n                        {{dashboard.city}}\n                    </div>\n                    <div class="h5">\n                        温度：{{dashboard.wendu}}&#176;C\n                    </div>\n                    <div class="h5">\n                        湿度：{{dashboard.shidu}}\n                    </div>\n                    <div class="inbottom">\n                        <div class="h6">环保综合指数：</div>\n                        <div class="zhishu">68</div>\n                    </div>\n                </div>\n            </ion-slide>\n            <ion-slide class="padding body">\n                <div class="padding bg sliderbody">\n                    <div class="h3 ">数据数字化</div>\n                    <div class="margin-top-10 border-bottom-bold "></div>\n                    <div class="sliderbody margin-top-10">\n                        <div class="sliderbody_map" #home_map id="home_map"></div>\n                    </div>\n                </div>\n            </ion-slide>\n            <ion-slide class="padding body">\n                <div class="padding bg sliderbody">\n                    <div class="h3 ">综合概况</div>\n                    <div class="margin-top-10 border-bottom-bold "></div>\n                    <div class="flex-row">\n                        <div class="flex-2 h5">街道</div>\n                        <div class="flex-1 h5">环保指数</div>\n                        <div class="flex-1 h5">油烟指数</div>\n                        <div class="flex-1 h5">检测数量</div>\n                    </div>\n                    <div class="margin-top-10 border-bottom "></div>\n                    <div class="flex-row" *ngFor="let item of dashboard.streets;let i=index;">\n                        <div class="flex-2 h5">{{i+1}}. {{item.areaname}}</div>\n                        <div class="flex-1 h5">{{item.avg_index}}</div>\n                        <div class="flex-1 h5">{{item.avg_index}}</div>\n                        <div class="flex-1 h5">{{item.object_count}}</div>\n                    </div>\n                </div>\n            </ion-slide>\n        </ion-slides>\n    </div>\n-->\n</ion-content>\n'/*ion-inline-end:"/Users/steve/Documents/GitHub/CDiaper/Source/src/pages/home/home.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_inst_api__["a" /* InstApi */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_inst_api__["a" /* InstApi */]])
    ], HomePage);
    return HomePage;
}(__WEBPACK_IMPORTED_MODULE_2__app_app_base__["a" /* AppBase */]));

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, modalCtrl, statusBar, viewCtrl, toastCtrl, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.statusBar = statusBar;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/steve/Documents/GitHub/CDiaper/Source/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/steve/Documents/GitHub/CDiaper/Source/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_inst_api__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_member_api__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_components_module__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {
                    backButtonText: "",
                    iconMode: "ios",
                    modalEnter: "modal-slide-in",
                    modalLeave: "modal-slide-out",
                    tabsPlacement: "bottom",
                    pageTransition: "ios",
                    backButtonIcon: "ios-arrow-back",
                    statusbarPadding: false
                }, {
                    links: [
                        { loadChildren: '../pages/add-kid/add-kid.module#AddKidPageModule', name: 'AddKidPage', segment: 'add-kid', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forget-password/forget-password.module#ForgetPasswordPageModule', name: 'ForgetPasswordPage', segment: 'forget-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/content/content.module#ContentPageModule', name: 'ContentPage', segment: 'content', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mobile-login/mobile-login.module#MobileLoginPageModule', name: 'MobileLoginPage', segment: 'mobile-login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/verify-code/verify-code.module#VerifyCodePageModule', name: 'VerifyCodePage', segment: 'verify-code', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__providers_inst_api__["a" /* InstApi */],
                __WEBPACK_IMPORTED_MODULE_10__providers_member_api__["a" /* MemberApi */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11__components_components_module__["a" /* ComponentsModule */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppUtil; });
var AppUtil = /** @class */ (function () {
    function AppUtil() {
    }
    AppUtil.HtmlDecode = function (str) {
        if (str == null) {
            return "";
        }
        var s = "";
        if (str.length == 0)
            return "";
        s = str.replace(/&amp;/g, "&");
        s = s.replace(/&lt;/g, "<");
        s = s.replace(/&gt;/g, ">");
        s = s.replace(/&nbsp;/g, " ");
        s = s.replace(/&#39;/g, "\'");
        s = s.replace(/&quot;/g, "\"");
        //s = s.replace(new RegExp("</p>", "gm"), "</p><br />");
        var reg = new RegExp("\"/alucard263096/aze/upload/", "g"); //创建正则RegExp对象   
        s = s.replace(reg, "\"http://cmsdev.app-link.org/alucard263096/aze/upload/");
        return s;
    };
    AppUtil.Toast = function (toastCtrl, msg) {
        var toast = toastCtrl.create({
            message: msg
        });
        toast.present();
    };
    AppUtil.FormatDateTime = function (val) {
        return val.getFullYear() + "-" + (val.getMonth() + 1) + "-" + val.getDate() +
            " " + val.getHours() + ":" + val.getMinutes() + ":" + val.getSeconds();
    };
    AppUtil.IsMobileNo = function (str) {
        console.log(str);
        if (str == null || str == undefined || str.length != 11) {
            return false;
        }
        var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        return myreg.test(str);
    };
    AppUtil.FormatPercent = function (val) {
        val = val * 100.0;
        return val.toFixed(2) + '%';
    };
    AppUtil.FormatPrice = function (val) {
        val = val * 1.0;
        return val.toFixed(2);
    };
    AppUtil.FormatNumber = function (val, digits) {
        val = val * 1.0;
        return val.toFixed(digits);
    };
    AppUtil.FormatDate = function (val) {
        return val.substr(0, 10);
    };
    AppUtil.MiddleToast = function (toastCtrl, msg) {
        var toast = toastCtrl.create({
            message: msg,
            duration: 2000,
            position: 'middle'
        });
        toast.present();
    };
    AppUtil.isMicroMessager = false; //是否是在微信内置浏览器打开.
    AppUtil.isLessThenAndroid5 = false; //<= android 4.4
    AppUtil.isIOS = false; //是否是在Iphone设备, 不论是微信打开,还是APP.
    AppUtil.osVersion = '';
    return AppUtil;
}());

//# sourceMappingURL=app.util.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppLang; });
var AppLang = /** @class */ (function () {
    function AppLang() {
    }
    AppLang.getLang = function () {
        var Lang = [];
        Lang["recommend"] = "推荐";
        Lang["general"] = "综合";
        Lang["focuson"] = "关注";
        Lang["addkidfirst"] = "请先添加宝宝";
        Lang["otherlogintype"] = "其他登录方式";
        Lang["mobilelogin"] = "手机登录";
        Lang["register"] = "注册";
        Lang["login"] = "登录";
        Lang["registermobiletips"] = "+86 请输入手机号码";
        Lang["registerpasswordtips"] = "设置登录密码，不少于6位";
        Lang["nextstep"] = "下一步";
        Lang["mobileverify"] = "手机号验证";
        Lang["verifycodesendfail"] = "手机号验证码发送失败，请联系管理员";
        Lang["pleasesetname"] = "请设置你的昵称";
        Lang["pleasesetmobile"] = "请输入手机号";
        Lang["pleasesetpassword"] = "请输入不少于6位的密码";
        Lang["youmobile"] = "你的手机号";
        Lang["receiveandinput"] = "你会收到一条带有验证码的短信，轻输入验证码";
        Lang["verifycodesent"] = "验证码已经发送，请注意查收";
        Lang["verifycodeincorrect"] = "验证码错误，请重新输入";
        Lang["secondresend"] = "秒后重发";
        Lang["resend"] = "重新发送";
        Lang["tips"] = "提示";
        Lang["iknow"] = "我知道了";
        Lang["mobilehasbeenregistered"] = "手机号已经被注册";
        Lang["mobilehasnotbeenregistered"] = "手机号还没有注册";
        Lang["registernametips"] = "请输入昵称";
        Lang["userorpwsincorrect"] = "手机号不存在或者密码错误，请重试";
        Lang["forgetpassword"] = "忘记密码？";
        Lang["notlogin"] = "尚未登录";
        Lang["menu_home"] = "首页";
        Lang["menu_list"] = "测试列表";
        Lang["menu_setting"] = "设置";
        Lang["menu_shutdown"] = "退出";
        Lang["confirmexitapp"] = "是否确认退出？";
        Lang["ok"] = "确认";
        Lang["cancel"] = "取消";
        Lang["aboutus"] = "关于我们";
        Lang["userguideline"] = "新手指南";
        Lang["helpandfeedback"] = "帮助与反馈";
        Lang["about"] = "关于";
        Lang["changeaccount"] = "切换账户";
        Lang["suretologout"] = "是否确认退出";
        return Lang;
    };
    return AppLang;
}());

//# sourceMappingURL=app.lang.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_base__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_inst_api__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_member_api__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__api_config__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, alertCtrl, modalCtrl, instapi, memberapi) {
        // used for an example of ngFor and navigation
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.instapi = instapi;
        this.memberapi = memberapi;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.uploadpath = __WEBPACK_IMPORTED_MODULE_9__api_config__["a" /* ApiConfig */].getUploadPath();
        this.Lang = [];
        this.res = [];
        this.InstInfo = { logo: "", memberlogo: "" };
        this.MemberInfo = null;
        __WEBPACK_IMPORTED_MODULE_6__app_base__["a" /* AppBase */].instapi = instapi;
        __WEBPACK_IMPORTED_MODULE_6__app_base__["a" /* AppBase */].memberapi = memberapi;
        __WEBPACK_IMPORTED_MODULE_6__app_base__["a" /* AppBase */].myapp = this;
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] }
        ];
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.openModal = function (pagename, data) {
        if (data === void 0) { data = {}; }
        var modal = this.modalCtrl.create(pagename, data);
        modal.present();
    };
    MyApp.prototype.openSetting = function () {
        this.openModal("SettingPage");
    };
    MyApp.prototype.checkLogin = function (callback) {
        if (this.MemberInfo == null) {
            var modal = this.modalCtrl.create("LoginPage");
            modal.onDidDismiss(function (islogin) {
                if (islogin == "Y") {
                    callback();
                }
            });
            modal.present();
        }
        else {
            callback();
        }
    };
    MyApp.prototype.exitapp = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: this.Lang["tips"],
            subTitle: this.Lang["confirmexitapp"],
            buttons: [{
                    text: this.Lang["cancel"],
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                }, {
                    text: this.Lang["ok"],
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }]
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/steve/Documents/GitHub/CDiaper/Source/src/app/app.html"*/'<ion-menu [content]="content" class="membermenulist">\n  <ion-content>\n    <div class="black-block topbg" [style.background-image]="\'url(\'+uploadpath+\'resource/\'+res.membertopbg+\')\'">\n      <div style="padding-top:80px">\n        <div class="padding">\n          <div>\n            <img class="icon-50 radius-50" [src]=\'MemberInfo==null||MemberInfo.photo==""?uploadpath+"inst/"+InstInfo.memberlogo:uploadpath+"member/"+MemberInfo.photo\' />\n          </div>\n          <div class="txt-white margin-top h5" >{{MemberInfo==null?Lang["notlogin"]:MemberInfo.name}}</div>\n        </div>\n      </div>\n    </div>\n    <div class="gray-block padding-top">\n      <div class="white-block padding no-padding-right" >\n        <div class="padding" menuClose (click)="openPage(pages[0])">\n\n          <div class=" flex-row flex-center">\n            <div>\n              <img src="{{uploadpath}}resource/{{res.menu_home}}" class="icon-20" />\n            </div>\n            <div class="margin-left flex-1">\n              {{Lang["menu_home"]}}\n            </div>\n          </div>\n        </div>\n        <div class="padding"  menuClose (click)="openPage(pages[1])">\n          <div class=" flex-row flex-center">\n            <div>\n              <img src="{{uploadpath}}resource/{{res.menu_list}}" class="icon-20" />\n            </div>\n            <div class="margin-left flex-1">\n              {{Lang["menu_list"]}}\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n    <div class="fixedbottommenu  border-top" >\n      <div class="padding">\n        <div class="flex-row flex-center">\n          <div (click)="openSetting()">\n            <img class="icon-20" src="{{uploadpath}}resource/{{res.menu_setting}}" />\n          </div>\n          <div class="h5 margin-left" (click)="openSetting()">\n            {{Lang["menu_setting"]}}\n          </div>\n          <div class="flex-1"></div>\n          <div (click)="exitapp()">\n            <img class="icon-20" src="{{uploadpath}}resource/{{res.menu_shutdown}}" />\n          </div>\n          <div class="h5 margin-left" (click)="exitapp()">\n            {{Lang["menu_shutdown"]}}\n          </div>\n        </div>\n      </div>\n    </div>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/steve/Documents/GitHub/CDiaper/Source/src/app/app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_inst_api__["a" /* InstApi */], __WEBPACK_IMPORTED_MODULE_8__providers_member_api__["a" /* MemberApi */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_content_menu_content__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__member_photo_member_photo__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__menu_content_menu_content__["a" /* MenuContentComponent */],
                __WEBPACK_IMPORTED_MODULE_2__member_photo_member_photo__["a" /* MemberPhotoComponent */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__menu_content_menu_content__["a" /* MenuContentComponent */],
                __WEBPACK_IMPORTED_MODULE_2__member_photo_member_photo__["a" /* MemberPhotoComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the MenuContentComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MenuContentComponent = /** @class */ (function () {
    function MenuContentComponent() {
        console.log('Hello MenuContentComponent Component');
        this.text = 'Hello World';
    }
    MenuContentComponent.prototype.test = function () {
    };
    MenuContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'menu-content',template:/*ion-inline-start:"/Users/steve/Documents/GitHub/CDiaper/Source/src/components/menu-content/menu-content.html"*/'<!-- Generated template for the MenuContentComponent component -->\n<div menuClose (click)="test()">\n  {{text}}\n</div>\n'/*ion-inline-end:"/Users/steve/Documents/GitHub/CDiaper/Source/src/components/menu-content/menu-content.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], MenuContentComponent);
    return MenuContentComponent;
}());

//# sourceMappingURL=menu-content.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberPhotoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the MemberPhotoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MemberPhotoComponent = /** @class */ (function () {
    function MemberPhotoComponent() {
        this.MemberInfo = null;
    }
    MemberPhotoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'member-photo',template:/*ion-inline-start:"/Users/steve/Documents/GitHub/CDiaper/Source/src/components/member-photo/member-photo.html"*/'<!-- Generated template for the MemberPhotoComponent component -->\n<div>\n  {{text}}\n</div>\n'/*ion-inline-end:"/Users/steve/Documents/GitHub/CDiaper/Source/src/components/member-photo/member-photo.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], MemberPhotoComponent);
    return MemberPhotoComponent;
}());

//# sourceMappingURL=member-photo.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);


var ApiConfig = /** @class */ (function () {
    function ApiConfig() {
    }
    ApiConfig.getApiUrl = function () {
        return "https://cmsdev.app-link.org/alucard263096/cdiaper/api/";
    };
    ApiConfig.getUploadPath = function () {
        return "https://alioss.app-link.org/alucard263096/cdiaper/";
    };
    ApiConfig.getFileUploadAPI = function () {
        return "https://cmsdev.app-link.org/alucard263096/cdiaper/fileupload";
    };
    ApiConfig.ParamUrlencoded = function (json) {
        var arr = new Array();
        for (var i in json) {
            arr.push(i + "=" + encodeURIComponent(json[i]));
        }
        return arr.join("&");
    };
    ApiConfig.GetHeader = function (url, postparam) {
        var sign = "";
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Sign': sign,
            'Token': ApiConfig.TOKEN,
            'UNICODE': ApiConfig.UNICODE
        });
        return headers;
    };
    ApiConfig.SetToken = function (token) {
        ApiConfig.TOKEN = token;
    };
    ApiConfig.SetUnicode = function (Unicode) {
        ApiConfig.UNICODE = Unicode;
    };
    ApiConfig.MD5 = function (str) {
        return md5.hex_md5(str);
    };
    ApiConfig.SetLoadingCtrl = function (loadCtrl) {
        ApiConfig.LoadingCtrl = loadCtrl;
    };
    ApiConfig.GetLoadingModal = function () {
        var ctrl = ApiConfig.LoadingCtrl;
        if (ctrl != null && ApiConfig.loading == null) {
            ApiConfig.loadingQueueCount = 0;
            ApiConfig.loading = ctrl.create({
                spinner: 'ios',
                //cssClass: 'myloading',
                duration: 10000
            });
            ApiConfig.loading.present();
        }
        ApiConfig.loadingQueueCount++;
        return null;
    };
    ApiConfig.DimissLoadingModal = function () {
        try {
            ApiConfig.loadingQueueCount--;
            if (ApiConfig.loading != null && ApiConfig.loadingQueueCount == 0) {
                ApiConfig.loading.dismiss();
                ApiConfig.loading = null;
                ApiConfig.loadingQueueCount = 0;
            }
        }
        catch (e) {
        }
    };
    ApiConfig.ForceDimissLoadingModal = function () {
        try {
            if (ApiConfig.loading != null) {
                ApiConfig.loading.dismiss();
                ApiConfig.loading = null;
                ApiConfig.loadingQueueCount = 0;
            }
        }
        catch (e) {
        }
    };
    ApiConfig.DataLoadedHandle = function (url, post, data) {
        try {
            data = data.json();
            if (data != null)
                if (data.code != null) {
                    if (data.code == "404" || data.code == "401" || data.code == "500") {
                        console.error(data.return.debuggenSign);
                        console.error(data.return.genSign);
                        return false;
                    }
                }
            return true;
        }
        catch (e) {
            return false;
        }
    };
    ApiConfig.ErrorHandle = function (url, post, error) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(error.json().error || 'Server Error').toPromise();
    };
    ApiConfig.TOKEN = null;
    ApiConfig.RID = null;
    ApiConfig.UNICODE = null;
    ApiConfig.MDSalt = "";
    ApiConfig.LoadingCtrl = null;
    ApiConfig.loading = null;
    ApiConfig.loadingQueueCount = 0;
    return ApiConfig;
}());

var md5 = /** @class */ (function () {
    function md5() {
    }
    /*
     * These are the public statics you'll usually want to call
     * They take string arguments and return either hex or base-64 encoded strings
     */
    md5.hex_md5 = function (s) { return md5.binl2hex(md5.core_md5(md5.str2binl(s), s.length * md5.chrsz)); };
    md5.b64_md5 = function (s) { return md5.binl2b64(md5.core_md5(md5.str2binl(s), s.length * md5.chrsz)); };
    md5.str_md5 = function (s) { return md5.binl2str(md5.core_md5(md5.str2binl(s), s.length * md5.chrsz)); };
    md5.hex_hmac_md5 = function (key, data) { return md5.binl2hex(md5.core_hmac_md5(key, data)); };
    md5.b64_hmac_md5 = function (key, data) { return md5.binl2b64(md5.core_hmac_md5(key, data)); };
    md5.str_hmac_md5 = function (key, data) { return md5.binl2str(md5.core_hmac_md5(key, data)); };
    /*
     * Perform a simple self-test to see if the VM is working
     */
    md5.md5_vm_test = function () {
        return md5.hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72";
    };
    /*
     * Calculate the MD5 of an array of little-endian words, and a bit length
     */
    md5.core_md5 = function (x, len) {
        /* append padding */
        x[len >> 5] |= 0x80 << ((len) % 32);
        x[(((len + 64) >>> 9) << 4) + 14] = len;
        var a = 1732584193;
        var b = -271733879;
        var c = -1732584194;
        var d = 271733878;
        for (var i = 0; i < x.length; i += 16) {
            var olda = a;
            var oldb = b;
            var oldc = c;
            var oldd = d;
            a = md5.md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
            d = md5.md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
            c = md5.md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
            b = md5.md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
            a = md5.md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
            d = md5.md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
            c = md5.md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
            b = md5.md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
            a = md5.md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
            d = md5.md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
            c = md5.md5_ff(c, d, a, b, x[i + 10], 17, -42063);
            b = md5.md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
            a = md5.md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
            d = md5.md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
            c = md5.md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
            b = md5.md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
            a = md5.md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
            d = md5.md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
            c = md5.md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
            b = md5.md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
            a = md5.md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
            d = md5.md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
            c = md5.md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
            b = md5.md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
            a = md5.md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
            d = md5.md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
            c = md5.md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
            b = md5.md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
            a = md5.md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
            d = md5.md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
            c = md5.md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
            b = md5.md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
            a = md5.md5_hh(a, b, c, d, x[i + 5], 4, -378558);
            d = md5.md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
            c = md5.md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
            b = md5.md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
            a = md5.md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
            d = md5.md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
            c = md5.md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
            b = md5.md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
            a = md5.md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
            d = md5.md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
            c = md5.md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
            b = md5.md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
            a = md5.md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
            d = md5.md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
            c = md5.md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
            b = md5.md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
            a = md5.md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
            d = md5.md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
            c = md5.md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
            b = md5.md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
            a = md5.md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
            d = md5.md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
            c = md5.md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
            b = md5.md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
            a = md5.md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
            d = md5.md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
            c = md5.md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
            b = md5.md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
            a = md5.md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
            d = md5.md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
            c = md5.md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
            b = md5.md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
            a = md5.safe_add(a, olda);
            b = md5.safe_add(b, oldb);
            c = md5.safe_add(c, oldc);
            d = md5.safe_add(d, oldd);
        }
        return Array(a, b, c, d);
    };
    /*
     * These public statics implement the four basic operations the algorithm uses.
     */
    md5.md5_cmn = function (q, a, b, x, s, t) {
        return md5.safe_add(md5.bit_rol(md5.safe_add(md5.safe_add(a, q), md5.safe_add(x, t)), s), b);
    };
    md5.md5_ff = function (a, b, c, d, x, s, t) {
        return md5.md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
    };
    md5.md5_gg = function (a, b, c, d, x, s, t) {
        return md5.md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
    };
    md5.md5_hh = function (a, b, c, d, x, s, t) {
        return md5.md5_cmn(b ^ c ^ d, a, b, x, s, t);
    };
    md5.md5_ii = function (a, b, c, d, x, s, t) {
        return md5.md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
    };
    /*
     * Calculate the HMAC-MD5, of a key and some data
     */
    md5.core_hmac_md5 = function (key, data) {
        var bkey = md5.str2binl(key);
        if (bkey.length > 16)
            bkey = md5.core_md5(bkey, key.length * md5.chrsz);
        var ipad = Array(16), opad = Array(16);
        for (var i = 0; i < 16; i++) {
            ipad[i] = bkey[i] ^ 0x36363636;
            opad[i] = bkey[i] ^ 0x5C5C5C5C;
        }
        var hash = md5.core_md5(ipad.concat(md5.str2binl(data)), 512 + data.length * md5.chrsz);
        return md5.core_md5(opad.concat(hash), 512 + 128);
    };
    /*
     * Add integers, wrapping at 2^32. This uses 16-bit operations internally
     * to work around bugs in some JS interpreters.
     */
    md5.safe_add = function (x, y) {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF);
        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xFFFF);
    };
    /*
     * Bitwise rotate a 32-bit number to the left.
     */
    md5.bit_rol = function (num, cnt) {
        return (num << cnt) | (num >>> (32 - cnt));
    };
    /*
     * Convert a string to an array of little-endian words
     * If chrsz is ASCII, characters >255 have their hi-byte silently ignored.
     */
    md5.str2binl = function (str) {
        var bin = Array();
        var mask = (1 << md5.chrsz) - 1;
        for (var i = 0; i < str.length * md5.chrsz; i += md5.chrsz)
            bin[i >> 5] |= (str.charCodeAt(i / md5.chrsz) & mask) << (i % 32);
        return bin;
    };
    /*
     * Convert an array of little-endian words to a string
     */
    md5.binl2str = function (bin) {
        var str = "";
        var mask = (1 << md5.chrsz) - 1;
        for (var i = 0; i < bin.length * 32; i += md5.chrsz)
            str += String.fromCharCode((bin[i >> 5] >>> (i % 32)) & mask);
        return str;
    };
    /*
     * Convert an array of little-endian words to a hex string.
     */
    md5.binl2hex = function (binarray) {
        var hex_tab = md5.hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
        var str = "";
        for (var i = 0; i < binarray.length * 4; i++) {
            str += hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8 + 4)) & 0xF) +
                hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8)) & 0xF);
        }
        return str;
    };
    /*
     * Convert an array of little-endian words to a base-64 string
     */
    md5.binl2b64 = function (binarray) {
        var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var str = "";
        for (var i = 0; i < binarray.length * 4; i += 3) {
            var triplet = (((binarray[i >> 2] >> 8 * (i % 4)) & 0xFF) << 16)
                | (((binarray[i + 1 >> 2] >> 8 * ((i + 1) % 4)) & 0xFF) << 8)
                | ((binarray[i + 2 >> 2] >> 8 * ((i + 2) % 4)) & 0xFF);
            for (var j = 0; j < 4; j++) {
                if (i * 8 + j * 6 > binarray.length * 32)
                    str += md5.b64pad;
                else
                    str += tab.charAt((triplet >> 6 * (3 - j)) & 0x3F);
            }
        }
        return str;
    };
    /*
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.1 Copyright (C) Paul Johnston 1999 - 2002.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
    /*
     * Configurable variables. You may need to tweak these to be compatible with
     * the server-side, but the defaults work in most cases.
     */
    md5.hexcase = 0; /* hex output format. 0 - lowercase; 1 - uppercase        */
    md5.b64pad = ""; /* base-64 pad character. "=" for strict RFC compliance   */
    md5.chrsz = 8; /* bits per input character. 8 - ASCII; 16 - Unicode      */
    return md5;
}());
//# sourceMappingURL=api.config.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map