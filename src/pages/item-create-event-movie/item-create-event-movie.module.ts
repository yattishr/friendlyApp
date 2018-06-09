import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';

import { ItemCreateEventMoviePage } from './item-create-event-movie';

@NgModule({
  declarations: [
    ItemCreateEventMoviePage,
  ],
  imports: [
    IonicPageModule.forChild(ItemCreateEventMoviePage),
    TranslateModule.forChild()
  ],
})
export class ItemCreateEventMoviePageModule {}
