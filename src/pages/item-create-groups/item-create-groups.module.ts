import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ItemCreateGroupPage } from './item-create-groups';

@NgModule({
  declarations: [
    ItemCreateGroupPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemCreateGroupPage),
    TranslateModule.forChild()
  ],
  exports: [
    ItemCreateGroupPage
  ]
})
export class ItemCreateGroupPageModule { }
