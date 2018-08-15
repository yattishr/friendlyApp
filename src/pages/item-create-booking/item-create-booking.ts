import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ItemCreateBookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-create-booking',
  templateUrl: 'item-create-booking.html',
})
export class ItemCreateBookingPage {
  myVal: string;
  quantity: any = 2;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myVal = navParams.get('dataParam');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemCreateBookingPage');
  }

}
