import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListMasterGroupsPage } from './list-master-groups';

@NgModule({
  declarations: [
    ListMasterGroupsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListMasterGroupsPage),
  ],
})
export class ListMasterGroupsPageModule {}
