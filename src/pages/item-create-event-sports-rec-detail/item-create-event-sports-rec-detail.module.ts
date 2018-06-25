import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';

import { ItemCreateEventSportsRecDetailPage } from './item-create-event-sports-rec-detail';

@NgModule({
  declarations: [
    ItemCreateEventSportsRecDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemCreateEventSportsRecDetailPage),
    TranslateModule.forChild()
  ],
  exports: [
    ItemCreateEventSportsRecDetailPage
  ]
})
export class ItemCreateEventSportsRecDetailPageModule {}
