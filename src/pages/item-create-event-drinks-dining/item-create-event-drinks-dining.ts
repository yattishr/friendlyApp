import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from 'ionic-angular';
import { Item } from '../../models/item';
import { Items } from '../../providers';

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

  currentItems: Item[];

  isReadyToSave: boolean;

  item: any;

  form: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, formBuilder: FormBuilder, public modalCtrl: ModalController, public items: Items) {
    this.currentItems = this.items.query();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemCreateEventDrinksDiningPage');
  }

  /* Launch Drinks and Dining Detail page. */
  // goTo(dataParam) {
  //   let addModal = this.modalCtrl.create('ItemCreateEventDrinksDiningDetailPage', { dataParam });
  //   addModal.present();
  // }
  /* Launch Drinks and Dining Detail page. */  

  /* Launch Drinks and Dining Detail page. */
  goTo(dataParam) {
    this.navCtrl.push('ItemCreateEventDrinksDiningDetailPage', { dataParam });
  }
  /* Launch Drinks and Dining Detail page. */  


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



}
