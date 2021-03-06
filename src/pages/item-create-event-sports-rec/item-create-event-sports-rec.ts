import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from 'ionic-angular';

/**
 * Generated class for the ItemCreateEventSportsRecPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-create-event-sports-rec',
  templateUrl: 'item-create-event-sports-rec.html',
})
export class ItemCreateEventSportsRecPage {

  isReadyToSave: boolean;

  item: any;

  form: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, formBuilder: FormBuilder, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemCreateEventSportsRecPage');
  }


  /* Launch Sports and Rec Detail page. */
  // goTo(dataParam) {
  //   let addModal = this.modalCtrl.create('ItemCreateEventSportsRecDetailPage', { dataParam });
  //   addModal.present();
  // }
  /* Launch Sports and Rec Detail page. */

  /* Launch Drinks and Dining Detail page. */
  goTo(dataParam) {
    this.navCtrl.push('ItemCreateEventSportsRecDetailPage', { dataParam });
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
