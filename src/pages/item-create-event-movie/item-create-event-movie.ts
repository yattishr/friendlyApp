import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from 'ionic-angular';
import { Item } from '../../models/item';
import { Items } from '../../providers';

/**
 * Generated class for the ItemCreateEventMoviePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-create-event-movie',
  templateUrl: 'item-create-event-movie.html',
})
export class ItemCreateEventMoviePage {

  currentItems: Item[];

  isReadyToSave: boolean;

  item: any;

  movieEventForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, formBuilder: FormBuilder, public modalCtrl: ModalController, public items: Items) {

    this.currentItems = this.items.query();

    this.movieEventForm = formBuilder.group({
      movieName: ['', Validators.required],
      movieDate: [''],
      movieCinema: [''],
      movieMeetUpTime: [''],
      movieStartTime: ['']
    });

    // Watch the form for changes, and
    this.movieEventForm.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.movieEventForm.valid;
    });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemCreateEventMoviePage');
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
    this.viewCtrl.dismiss(this.movieEventForm.value);
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
    if (!this.movieEventForm.valid) { return; }
    this.viewCtrl.dismiss(this.movieEventForm.value);
  }


}
