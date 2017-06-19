import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Accident } from './accident';

@NgModule({
  declarations: [
    Accident,
  ],
  imports: [
    IonicPageModule.forChild(Accident),
  ],
  exports: [
    Accident
  ]
})
export class AccidentModule {}
