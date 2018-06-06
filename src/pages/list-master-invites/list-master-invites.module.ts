import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListMasterInvitesPage } from './list-master-invites';

@NgModule({
  declarations: [
    ListMasterInvitesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListMasterInvitesPage),
  ],
})
export class ListMasterInvitesPageModule {}
