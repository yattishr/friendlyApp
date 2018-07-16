import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  myVal: string;
  isReadyToSave: boolean;
  form: FormGroup;

  constructor(public navCtrl: NavController, public params: NavParams, public viewCtrl: ViewController, formBuilder: FormBuilder, public modalCtrl: ModalController) {
    this.myVal = params.get('dataParam');
    console.log('This is MY Data value: ', params.get('dataParam'));

    this.form = formBuilder.group({
      activityVenueName: ['', Validators.required],
      activityDate: [''],
      activityTime: [''],
      activityMeetUpTime: ['']
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemCreateEventSportsRecDetailPage');
  }

  /* Show Group Selection Modal page */
  itemGroupSelect() {
    let addModal = this.modalCtrl.create('ListMasterGroupsModalPage');
    addModal.present();
  }
  /* Show Group Selection Modal page */

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

  createItem() {
    console.log("Creating activity item...");
  }


}
