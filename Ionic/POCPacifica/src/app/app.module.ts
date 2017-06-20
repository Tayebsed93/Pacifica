import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { Home } from '../pages/home/home';
import { Login } from '../pages/login/login';
import { Map } from '../pages/map/map';
import { Contratdecla } from '../pages/contratdecla/contratdecla';
import { Accident } from '../pages/accident/accident';
import { Numero } from '../pages/numero/numero';
import { Declaok } from '../pages/declaok/declaok';
import { Declako } from '../pages/declako/declako';
import { Declaration } from '../pages/declaration/declaration';



@NgModule({
  declarations: [
    MyApp,
    Home,
    Login,
    Map,
    Contratdecla,
    Accident,
    Numero,
    Declaok,
    Declako,
    Declaration
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    Login,
    Map,
    Contratdecla,
    Accident,
    Numero,
    Declaok,
    Declako,
    Declaration
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
