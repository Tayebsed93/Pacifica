import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Declaration } from '../declaration/declaration';


/**
 * Generated class for the Contratdecla page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-contratdecla',
  templateUrl: 'contratdecla.html',
})
export class Contratdecla {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Contratdecla');
  }

  goToDeclaration() {
    // go to the session detail page
    // and pass in the session data
    this.navCtrl.push(Declaration);
  }

}
