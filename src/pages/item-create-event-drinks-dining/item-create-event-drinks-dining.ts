import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ItemCreateEventDrinksDiningDetailPage } from '../item-create-event-drinks-dining-detail'
// import { ItemCreateEventDrinksDiningDetailPageModule } from '../item-create-event-drinks-dining-detail/item-create-event-drinks-dining-detail'

/**
 * Generated class for the ItemCreateEventDrinksDiningPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-create-event-drinks-dining',
  templateUrl: 'item-create-event-drinks-dining.html',
})
export class ItemCreateEventDrinksDiningPage {

  isReadyToSave: boolean;

  item: any;

  form: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, formBuilder: FormBuilder) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemCreateEventDrinksDiningPage');
  }

  /**
   * The user cancelled, so we dismiss without sending data back.
   */
  cancel() {
    this.viewCtrl.dismiss();
  }

  /**
   * The user is done and wants to create the item, so return it
   * back to the presenter.
   */
  done() {
    if (!this.form.valid) { return; }
    this.viewCtrl.dismiss(this.form.value);
  }

  // goTo(dataParam) {
  //     dataParam = dataParam || ' Selected';
  //
  //     this.navCtrl.push(ItemCreateEventDrinksDiningDetailPage, {
  //       data: dataParam
  //     });
  //   }

  // goTo(color) {
  //     color = color || ' Selected';
  //     this.navCtrl.push(ItemCreateEventDrinksDiningDetailPage, {
  //       data: color
  //     });
  // }




}
