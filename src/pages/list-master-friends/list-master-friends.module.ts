import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';

import { ListMasterFriendsPage } from './list-master-friends';

@NgModule({
  declarations: [
    ListMasterFriendsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListMasterFriendsPage),
    TranslateModule.forChild()
  ],
  exports: [
    ListMasterFriendsPage
  ]
})
export class ListMasterFriendsPageModule {}
