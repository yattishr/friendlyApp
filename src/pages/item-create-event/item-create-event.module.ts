import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemCreateEventPage } from './item-create-event';

@NgModule({
  declarations: [
    ItemCreateEventPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemCreateEventPage),
  ],
})
export class ItemCreateEventPageModule {}
