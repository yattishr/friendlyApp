import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from 'ionic-angular';
import { Item } from '../../models/item';
import { Items } from '../../providers';

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
  myVal: string;
  isReadyToSave: boolean;
  form: FormGroup;

  constructor(public navCtrl: NavController, public params: NavParams, public viewCtrl: ViewController, formBuilder: FormBuilder, public modalCtrl: ModalController, public items: Items) {
        this.myVal = params.get('dataParam');
        console.log('This is MY Data value: ', params.get('dataParam'));

        this.form = formBuilder.group({
          diningVenueName: ['', Validators.required],
          diningDate: [''],
          diningMeetUpTime: ['']
        });

        // Watch the form for changes, and
        this.form.valueChanges.subscribe((v) => {
          this.isReadyToSave = this.form.valid;
        });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemCreateEventDrinksDiningDetailPage');
  }

  /* Show Group Selection Modal page */
  itemGroupSelect() {
    let addModal = this.modalCtrl.create('ListMasterGroupsModalPage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }
  /* Show Group Selection Modal page */

  createItem() {
    console.log("create item function triggered...");
  }

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
