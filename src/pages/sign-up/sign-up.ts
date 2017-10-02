import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { BoutiqueInfoPage } from '../boutique-info/boutique-info';



/**
 * Generated class for the SignUpPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
    @ViewChild('name') name;
    @ViewChild('email') email;
    @ViewChild('phone')phone;
    @ViewChild('password') password;

 
   constructor(public navCtrl: NavController, public navParams: NavParams) {
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');

  }




  DSiginUp(){
      this.navCtrl.push(BoutiqueInfoPage);


    }


    CSiginUp(){
      this.navCtrl.push(TabsPage);

  }

}
