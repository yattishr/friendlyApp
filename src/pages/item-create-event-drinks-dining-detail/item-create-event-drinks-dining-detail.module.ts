import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';

import { ItemCreateEventDrinksDiningDetailPage } from './item-create-event-drinks-dining-detail';

@NgModule({
  declarations: [
    ItemCreateEventDrinksDiningDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemCreateEventDrinksDiningDetailPage),
    TranslateModule.forChild()    
  ],
})
export class ItemCreateEventDrinksDiningDetailPageModule {}
