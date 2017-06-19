import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Contratdecla } from './contratdecla';

@NgModule({
  declarations: [
    Contratdecla,
  ],
  imports: [
    IonicPageModule.forChild(Contratdecla),
  ],
  exports: [
    Contratdecla
  ]
})
export class ContratdeclaModule {}
