import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from 'ionic-angular';
import { Item } from '../../models/item';
import { Items } from '../../providers';
/**
 * Generated class for the ItemCreateEventMusicConcertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-create-event-music-concert',
  templateUrl: 'item-create-event-music-concert.html',
})
export class ItemCreateEventMusicConcertPage {

  currentItems: Item[];
  isReadyToSave: boolean;
  item: any;
  form: FormGroup;
  segment: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, formBuilder: FormBuilder, public modalCtrl: ModalController, public items: Items) {

    this.segment = "ConcertInfo"
    this.currentItems = this.items.query();
    this.form = formBuilder.group({
      concertName: ['', Validators.required],
      concertDate: [''],
      concertStartTime: [''],
      concertVenue: [''],
      concertMeetUpTime: ['']
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemCreateEventMusicConcertPage');
  }


  /* Add new Group Item*/
  itemGroupSelect() {
    let addModal = this.modalCtrl.create('ListMasterGroupsModalPage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }
  /* Add new Group Item */

  /* Open the QR Scan Modal */
  itemQRScan() {
    let addModal = this.modalCtrl.create('ItemScanQrCodePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }
  /* Open the QR Scan Modal */


createItem() {
  console.log("create item function triggered...");
}

scan() {
  console.log("scanning QR code...");
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

}
