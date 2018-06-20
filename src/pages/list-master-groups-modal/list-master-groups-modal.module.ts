import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ListMasterGroupsModalPage } from './list-master-groups-modal';

@NgModule({
  declarations: [
    ListMasterGroupsModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ListMasterGroupsModalPage),
    TranslateModule.forChild()
  ],
  exports: [
    ListMasterGroupsModalPage
  ]
})
export class ListMasterGroupsModalPageModule {}
