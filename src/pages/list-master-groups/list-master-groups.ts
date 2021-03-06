import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers';

/**
 * Generated class for the ListMasterGroupsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-master-groups',
  templateUrl: 'list-master-groups.html',
})
export class ListMasterGroupsPage {
  currentItems: Item[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public items: Items) {
    this.currentItems = this.items.query();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListMasterGroupsPage');
  }

  /* Add new Group Item*/
  addItem() {
    let addModal = this.modalCtrl.create('ItemCreateGroupPage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }
  /* Add new Group Item*/


  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.items.delete(item);
  }

}
