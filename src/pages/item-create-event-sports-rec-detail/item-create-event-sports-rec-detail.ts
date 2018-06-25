import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ItemCreateEventSportsRecDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-create-event-sports-rec-detail',
  templateUrl: 'item-create-event-sports-rec-detail.html',
})
export class ItemCreateEventSportsRecDetailPage {

  constructor(public navCtrl: NavController, public _navParams: NavParams, public viewCtrl: ViewController) {
    console.log("this is my parameter: ", _navParams.get('dataParam'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemCreateEventSportsRecDetailPage');
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
