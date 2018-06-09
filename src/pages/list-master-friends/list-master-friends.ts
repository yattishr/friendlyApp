import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the ListMasterFriendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-master-friends',
  templateUrl: 'list-master-friends.html',
})
export class ListMasterFriendsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListMasterFriendsPage');
  }

  /* Add new Group Item*/
  addItem() {
    let addModal = this.modalCtrl.create('ItemListFriendsMasterPage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }
  /* Add new Group Item*/


}
