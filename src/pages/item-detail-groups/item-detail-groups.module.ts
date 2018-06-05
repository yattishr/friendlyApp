import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDetailGroupsPage } from './item-detail-groups';

@NgModule({
  declarations: [
    ItemDetailGroupsPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemDetailGroupsPage),
  ],
})
export class ItemDetailGroupsPageModule {}
