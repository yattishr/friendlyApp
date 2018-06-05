import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemCreateEventMoviePage } from './item-create-event-movie';

@NgModule({
  declarations: [
    ItemCreateEventMoviePage,
  ],
  imports: [
    IonicPageModule.forChild(ItemCreateEventMoviePage),
  ],
})
export class ItemCreateEventMoviePageModule {}
