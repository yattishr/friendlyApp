import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';


import { ItemCreateEventDrinksDiningDetailPage } from './item-create-event-drinks-dining-detail';

@NgModule({
  declarations: [
    ItemCreateEventDrinksDiningDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemCreateEventDrinksDiningDetailPage),
    TranslateModule.forChild()
  ],
  exports: [
    ItemCreateEventDrinksDiningDetailPage
  ]
})
export class ItemCreateEventDrinksDiningDetailPageModule {}
