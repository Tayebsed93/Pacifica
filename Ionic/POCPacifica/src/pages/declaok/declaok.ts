import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Home } from '../home/home';
/**
 * Generated class for the Declaok page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-declaok',
  templateUrl: 'declaok.html',
})
export class Declaok {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Declaok');
  }

      public returnMenu():void{

      this.navCtrl.push(Home);
  }

}
