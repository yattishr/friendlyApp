import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';

import { ItemCreateEventSportsRecPage } from './item-create-event-sports-rec';

@NgModule({
  declarations: [
    ItemCreateEventSportsRecPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemCreateEventSportsRecPage),
    TranslateModule.forChild()    
  ],
})
export class ItemCreateEventSportsRecPageModule {}
