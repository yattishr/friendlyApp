import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

import { ListMasterPage } from '../list-master/list-master';
import { ListMasterGroupsPage } from '../list-master-groups/list-master-groups';
import { ListMasterFriendsPage } from '../list-master-friends/list-master-friends';
import { ItemDetailPage } from '../item-detail/item-detail';
import { ListMasterInvitesPage } from '../list-master-invites/list-master-invites';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = ListMasterPage;
  tab2Root: any = ListMasterGroupsPage;
  tab3Root: any = ListMasterFriendsPage;
  tab4Root: any = ListMasterInvitesPage;
  tab5Root: any = ItemDetailPage;
  mySelectedIndex: number;

  tab1Title = " ";
  tab2Title = " ";
  tab3Title = " ";
  tab4Title = " ";
  tab5Title = " ";

  constructor(public navCtrl: NavController, public translateService: TranslateService, navParams: NavParams) {
    translateService.get(['TAB4_TITLE', 'TAB5_TITLE', 'TAB6_TITLE', 'TAB7_TITLE', 'TAB8_TITLE']).subscribe(values => {
      this.tab1Title = values['TAB4_TITLE'];
      this.tab2Title = values['TAB5_TITLE'];
      this.tab3Title = values['TAB6_TITLE'];
      this.tab4Title = values['TAB7_TITLE'];
      this.tab5Title = values['TAB8_TITLE'];
    });
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }
}
