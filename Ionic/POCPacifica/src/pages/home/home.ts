import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController, App, FabContainer, ItemSliding, List, ModalController, LoadingController } from 'ionic-angular';

/**
 * Generated class for the Home page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

import { Declaration } from '../declaration/declaration';
import { Contratdecla } from '../contratdecla/contratdecla';
import { Accident } from '../accident/accident';
import { Map } from '../map/map';
import { Numero } from '../numero/numero';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class Home {

  dayIndex = 0;
  queryText = '';
  segment = 'all';
  excludeTracks: any = [];
  shownSessions: any = [];
  groupss: any = [];
  confDate: string;

  constructor(
    public alertCtrl: AlertController,
    public app: App,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public alerCtrl: AlertController,
  ) {}

  ionViewDidLoad() {
    this.app.setTitle('Schedule');

  }



    goToSessionMAP() {

    let confirm = this.alerCtrl.create({
      message: 'En cas de bris de glace sur votre véhicule (pare-brise ou phares avant) nous vous proposons notre réseau de spécialistes du vitrage. Celui-ci vous fait bénéficier des avantages suivants :  <br /> - aucne démarche supplémentaire pour déclarer votre sinistre, <br /> - aucune avance de frais <br /> Dans le cadre de votre contrat, en cas de dommage garanti, vous avez la falculté de choisir le réparateur professionnel auquel vous souhaitez recourir  ',
      buttons: [
        {
          text: 'Annuler',
          handler: () => {
            console.log('Disagree clicked');

          }
        },
        {
          text: 'OK',
          handler: () => {
            console.log('Agree clicked');
            this.navCtrl.push(Map);
          }
        }
      ]
    });
    confirm.present()
    // go to the session detail page
    // and pass in the session data
    
  }

      goToDeclaration() {
    // go to the session detail page
    // and pass in the session data
    this.navCtrl.push(Contratdecla);
  }

      goToAccident() {
    // go to the session detail page
    // and pass in the session data
    this.navCtrl.push(Accident);
  }

      goToNumeroUtile() {
    // go to the session detail page
    // and pass in the session data
    this.navCtrl.push(Numero);
  }



  openSocial(network: string, fab: FabContainer) {
    let loading = this.loadingCtrl.create({
      content: `Posting to ${network}`,
      duration: (Math.random() * 1000) + 500
    });
    loading.onWillDismiss(() => {
      fab.close();
    });
    loading.present();
  }
}
