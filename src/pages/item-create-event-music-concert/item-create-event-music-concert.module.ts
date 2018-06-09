import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';

import { ItemCreateEventMusicConcertPage } from './item-create-event-music-concert';

@NgModule({
  declarations: [
    ItemCreateEventMusicConcertPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemCreateEventMusicConcertPage),
    TranslateModule.forChild()    
  ],
})
export class ItemCreateEventMusicConcertPageModule {}
