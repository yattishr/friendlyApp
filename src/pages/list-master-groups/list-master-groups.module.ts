import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ListMasterGroupsPage } from './list-master-groups';


@NgModule({
  declarations: [
    ListMasterGroupsPage
  ],
  imports: [
    IonicPageModule.forChild(ListMasterGroupsPage),
    TranslateModule.forChild()
  ],
  exports: [
    ListMasterGroupsPage
  ]
})
export class ListMasterGroupsPageModule {}
