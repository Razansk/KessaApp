import { Component } from '@angular/core';
import {Products} from '../../providers/products';
import { NavController, ModalController, AlertController, LoadingController } from 'ionic-angular';
import { Auth } from '../../providers/auth';
import { LoginPage } from '../login/login'

@Component({
  selector: 'page-new-arrivals',
  templateUrl: 'new-arrivals.html'
})
export class NewArrivalsPage {

  products: any;
  loading: any;
 
  constructor(public navCtrl: NavController, public productsService: Products, public modalCtrl: ModalController,
    public alertCtrl: AlertController, public authService: Auth, public loadingCtrl: LoadingController) {
 
  }
 
  ionViewDidLoad(){
 
    this.productsService.getProducts().then((data) => {
          this.products = data;
    }, (err) => {
        console.log("not allowed");
    });
 
  }

}
