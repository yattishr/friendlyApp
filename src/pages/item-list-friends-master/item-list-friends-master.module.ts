import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemListFriendsMasterPage } from './item-list-friends-master';

@NgModule({
  declarations: [
    ItemListFriendsMasterPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemListFriendsMasterPage),
  ],
})
export class ItemListFriendsMasterPageModule {}
