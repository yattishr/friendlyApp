import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public params: NavParams, public viewCtrl: ViewController) {
        params.get('dataParam');
        console.log('Data value', params.get('dataParam'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemCreateEventDrinksDiningDetailPage');
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  /**
   * The user is done and wants to create the item, so return it
   * back to the presenter.
   */
  done() {
    // if (!this.form.valid) { return; }
    // this.viewCtrl.dismiss(this.form.value);
    console.log("Done button clicked...");
  }


}
