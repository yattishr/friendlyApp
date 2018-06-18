import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ItemCreateEventDrinksDiningDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-create-event-drinks-dining-detail',
  templateUrl: 'item-create-event-drinks-dining-detail.html',
})
export class ItemCreateEventDrinksDiningDetailPage {
  color: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.color = navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemCreateEventDrinksDiningDetailPage');
  }

}
