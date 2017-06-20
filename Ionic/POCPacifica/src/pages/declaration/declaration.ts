import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Declaok } from '../declaok/declaok';
import { Declako } from '../declako/declako';
import { LoadingController } from 'ionic-angular';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Camera} from 'ionic-native';
import {DomSanitizer} from '@angular/platform-browser';
import { AlertController, App, FabContainer, ItemSliding, List, ModalController } from 'ionic-angular';

/**
 * Generated class for the Declaration page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-declaration',
  templateUrl: 'declaration.html',
})
export class Declaration {

 public path:String;
  public displayPhotoMenu:boolean;

  cameraData: string;
  photoTaken: boolean;
  cameraUrl: string;
  photoSelected: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, public loadingCtrl: LoadingController, private _DomSanitizationService: DomSanitizer, public alertCtrl: AlertController) {
      this.photoTaken = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeclarationPage');
  }

  /**
  *  Call API Declaration
  */
    addDeclaration() {
    console.log('Click add');

       let opt: RequestOptions
   let myHeaders: Headers = new Headers
   myHeaders.append('Authorization', 'Bearer demo1-token');
   myHeaders.append('Content-type', 'application/json')
   
   opt = new RequestOptions({
     headers: myHeaders
    })   
   
   this.http.post("http://authentnet.pacifica.credit-agricole.fr/frontal-authent/api/declaration",opt).subscribe (data => {
     console.log("Got Data");
     console.log(data);
         let loader = this.loadingCtrl.create({
      content: "Envoi...",
      duration: 3000
    });
    loader.present();
    
      if (loader.dismiss()) {
        this.navCtrl.push(Declaok);
      }
     
     
   
  }, error => {
    console.log("Error with Data");
    this.navCtrl.push(Declako);
  });

    }

  /**
  *  Open the camera device
  */
  public addPhoto():void{
console.log('Adding picture ');
    let options = {
      sourceType:Camera.PictureSourceType.CAMERA,
      destinationType:Camera.DestinationType.NATIVE_URI,
      correctOrientation:true,
      saveToPhotoAlbum:true
    };

    Camera.getPicture(options).then((path) => {
      this.path = path;
      console.log(path);
      this.displayPhotoMenu = true;
    });
  }

    selectFromGallery() {
    var options = {
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: Camera.DestinationType.FILE_URI
    };
    Camera.getPicture(options).then((imageData) => {
      this.cameraUrl = imageData;
      this.photoSelected = true;
      this.photoTaken = false;
    }, (err) => {
                let confirm = this.alertCtrl.create({
      message: 'Votre appareil ne peut pas accéder au paramètre photo / caméra',
      buttons: [
        {
          text: 'OK',
          handler: () => {
          }
        }
      ]
    });
    confirm.present()
    });
  }

  openCamera() {
    var options = {
      sourceType: Camera.PictureSourceType.CAMERA,
      destinationType: Camera.DestinationType.DATA_URL
    };
    Camera.getPicture(options).then((imageData) => {
      this.cameraData = 'data:image/jpeg;base64,' + imageData;
      this.photoTaken = true;
      this.photoSelected = false;
    }, (err) => {
          let confirm = this.alertCtrl.create({
      message: 'Votre appareil ne peut pas accéder au paramètre photo / caméra',
      buttons: [
        {
          text: 'OK',
          handler: () => {
          }
        }
      ]
    });
    confirm.present()
    });
  }


}



