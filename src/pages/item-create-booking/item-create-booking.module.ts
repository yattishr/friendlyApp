import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { ItemCreateBookingPage } from './item-create-booking';

@NgModule({
  declarations: [
    ItemCreateBookingPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemCreateBookingPage),
    TranslateModule.forChild()    
  ],
})
export class ItemCreateBookingPageModule {}
