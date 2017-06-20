import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';

import { LoadingController } from 'ionic-angular';
import { Home } from '../home/home';


/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

 submitted = false;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {

   }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
    let loader = this.loadingCtrl.create({
      content: "Connexion...",

    });
    loader.present();
    
      if (loader.dismiss()) {
        this.navCtrl.push(Home);
      }
    }
  }
}
