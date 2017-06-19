import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Declaration } from './declaration';

@NgModule({
  declarations: [
    Declaration,
  ],
  imports: [
    IonicPageModule.forChild(Declaration),
  ],
  exports: [
    Declaration
  ]
})
export class DeclarationModule {}
