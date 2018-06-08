import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemListFriendsMasterPage } from './item-list-friends-master';

@NgModule({
  declarations: [
    ItemListFriendsMasterPage
  ],
  imports: [
    IonicPageModule.forChild(ItemListFriendsMasterPage),
    TranslateModule.forChild()
  ],
})
export class ItemListFriendsMasterPageModule {}
