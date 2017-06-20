import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheet, ActionSheetController, Config, IonicPage, } from 'ionic-angular';

/**
 * Generated class for the Numero page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-numero',
  templateUrl: 'numero.html',
})
export class Numero {

  constructor(public navCtrl: NavController,
   public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
     public config: Config,
     ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad NumeroPage');
  }

    openContact() {
    let mode = this.config.get('mode');

    let actionSheet = this.actionSheetCtrl.create({
      title: 'Contact ' + "Numéro d'urgence",
      buttons: [
        {
          text: `Appel ( 112 )`,
          icon: mode !== 'ios' ? 'call' : null,
          handler: () => {
            window.open('tel:' + '112');
          }
        }
      ]
    });

    actionSheet.present();
  }

      openPolice() {
    let mode = this.config.get('mode');

    let actionSheet = this.actionSheetCtrl.create({
      title: 'Contact ' + "Police",
      buttons: [
        {
          text: `Appel ( 17 )`,
          icon: mode !== 'ios' ? 'call' : null,
          handler: () => {
            window.open('tel:' + 17);
          }
        }
      ]
    });

    actionSheet.present();
  }

}
