import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Declako } from './declako';

@NgModule({
  declarations: [
    Declako,
  ],
  imports: [
    IonicPageModule.forChild(Declako),
  ],
  exports: [
    Declako
  ]
})
export class DeclakoModule {}
