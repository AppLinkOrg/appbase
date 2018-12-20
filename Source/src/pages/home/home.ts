import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, ModalController, ViewController, ToastController, Slides,NavParams, AlertController, Alert } from 'ionic-angular';
import { AppBase } from "../../app/app.base";
import { StatusBar } from '@ionic-native/status-bar';
import { InstApi } from '../../providers/inst.api';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[InstApi]
})
export class HomePage extends AppBase {
  @ViewChild("menu_slider") slides: Slides;
  @ViewChild("menu0_slider") slides_menu0: Slides;
  @ViewChild("menu1_slider") slides_menu1: Slides;
  @ViewChild("menu2_slider") slides_menu2: Slides;

  menu = 1;
  menu0 = 0;
  menu1 = 1;
  menu2 = 0;

  indexbanner=[];
  babylist=[];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController
    , public statusBar: StatusBar, public viewCtrl: ViewController, public toastCtrl: ToastController,public alertCtrl:AlertController,public navParam:NavParams
    , public instapi:InstApi
  ) {
    super(navCtrl, modalCtrl, viewCtrl, statusBar, toastCtrl,alertCtrl,navParam);
    this.menu = 1;
    this.menu1 = 1;
  }
  onMyLoad() {

    console.log("modal ctrl");
    console.log(this.modalCtrl);

    this.modalCtrl = this.modalCtrl;
    this.navCtrl = this.navCtrl;
    this.statusBar = this.statusBar;
    


  }
  onMyShow() {
    this.instapi.indexbanner({},false).then((indexbanner)=>{

      this.indexbanner=indexbanner;

    });
    //this.changeTab(1,{});
    if (this.firseonshow) {
      this.menuChange(this.menu);
      this.menu1Change(this.menu1);
    }
    //this.modal("MobileLoginPage",{},()=>{})
  }
  onPullRefresh() {
    this.onMyLoad();
  }
  menuChange(m) {
    this.menu = m;

    this.slides.lockSwipes(false);
    this.slides.slideTo(this.menu);
    this.slides.lockSwipes(true);
  }
  menu0Change(m) {
    this.menu0 = m;
    this.slides_menu0.lockSwipes(false);
    this.slides_menu0.slideTo(this.menu0);
    this.slides_menu0.lockSwipes(true);
  }
  menu1Change(m) {
    this.menu1 = m;
    this.slides_menu1.lockSwipes(false);
    this.slides_menu1.slideTo(this.menu1);
    this.slides_menu1.lockSwipes(true);
  }
  menu2Change(m) {
    this.menu2 = m;
    this.slides_menu2.lockSwipes(false);
    this.slides_menu2.slideTo(this.menu2);
    this.slides_menu2.lockSwipes(true);
  }
  
  swipe(e, menu, menu1) {
    console.log(e.direction);
    var num = 0;
    if (e.direction == 2) {
      num++;
    } else if (e.direction == 4) {
      num--;
    }
    if (menu == 0) {
      if (menu1 + num > 0) {
        menu++;
      } else if (menu1 + num < 0) {
        //menu--;
      } else {
        menu1 = menu1 + num;
      }
      this.menuChange(menu);
      this.menu0Change(menu1);
      return;
    }
    if (menu == 1) {
      if (menu1 + num > 2) {
        menu++;
      } else if (menu1 + num < 0) {
        menu--;
      } else {
        menu1 = menu1 + num;
      }
      this.menuChange(menu);
      this.menu1Change(menu1);
      return;
    }
    if (menu == 2) {
      if (menu1 + num > 1) {
        //menu++;
      } else if (menu1 + num < 0) {
        menu--;
      } else {
        menu1 = menu1 + num;
      }
      this.menuChange(menu);
      this.menu2Change(menu1);
      return;
    }

    
  }

  addBaby(){
    this.checkLogin(()=>{
      var modal=this.modalCtrl.create("AddKidPage");
      modal.present();
    });
  }

  
}
