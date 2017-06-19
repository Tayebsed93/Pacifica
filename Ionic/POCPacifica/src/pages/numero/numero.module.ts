import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Numero } from './numero';

@NgModule({
  declarations: [
    Numero,
  ],
  imports: [
    IonicPageModule.forChild(Numero),
  ],
  exports: [
    Numero
  ]
})
export class NumeroModule {}
