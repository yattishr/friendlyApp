import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { ListMasterInvitesPage } from './list-master-invites';

@NgModule({
  declarations: [
    ListMasterInvitesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListMasterInvitesPage),
    TranslateModule.forChild()
  ],
})
export class ListMasterInvitesPageModule {}
