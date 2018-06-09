import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';

import { ItemCreateEventDrinksDiningPage } from './item-create-event-drinks-dining';

@NgModule({
  declarations: [
    ItemCreateEventDrinksDiningPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemCreateEventDrinksDiningPage),
    TranslateModule.forChild()
  ],
})
export class ItemCreateEventDrinksDiningPageModule {}
