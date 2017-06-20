import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Declaok } from './declaok';

@NgModule({
  declarations: [
    Declaok,
  ],
  imports: [
    IonicPageModule.forChild(Declaok),
  ],
  exports: [
    Declaok
  ]
})
export class DeclaokModule {}
