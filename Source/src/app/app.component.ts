import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ModalController, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AppBase } from './app.base';
import { InstApi } from '../providers/inst.api';
import { MemberApi } from '../providers/member.api';
import { ApiConfig } from './api.config';

@Component({
  templateUrl: 'app.html',
  providers:[AlertController ]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  public uploadpath: string = ApiConfig.getUploadPath();
  public Lang = [];
  public res = [];
  public InstInfo = { logo: "", memberlogo: "" };
  public MemberInfo = null;


  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen
    ,public alertCtrl:AlertController, public modalCtrl: ModalController
    , public instapi: InstApi, public memberapi: MemberApi) {


    // used for an example of ngFor and navigation


    AppBase.instapi = instapi;
    AppBase.memberapi = memberapi;
    AppBase.myapp = this;


    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });


    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];


  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  openModal(pagename, data = {}) {
    var modal = this.modalCtrl.create(pagename, data);
    modal.present();
  }

  openSetting() {
    this.openModal("SettingPage");
  }

  checkLogin(callback) {
    if (this.MemberInfo == null) {
      var modal = this.modalCtrl.create("LoginPage");
      modal.onDidDismiss((islogin) => {
        if (islogin == "Y") {
          callback();
        }
      });
      modal.present();
    } else {
      callback();
    }
  }

  exitapp(){
    const alert = this.alertCtrl.create({
      title: this.Lang["tips"],
      subTitle: this.Lang["confirmexitapp"],
      buttons: [{
        text: this.Lang["cancel"],
        handler: () => {
          console.log('Disagree clicked');

        }
      },{
        text: this.Lang["ok"],
        handler: () => {
          this.platform.exitApp();
        }
      }]
    });
    alert.present();
  }

}
