import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Platform, LoadingController } from 'ionic-angular';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';

import { Item } from '../../models/item';
import { Items } from '../../providers';

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
    currentItems: Item[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public modalCtrl: ModalController, 
              public items: Items, 
              private contacts: Contacts,
              private plt: Platform,
              private loadingCrtl: LoadingController) {
    this.currentItems = this.items.query();

    this.plt.ready().then((readySource) => {
      console.log('Platform ready from', readySource);
      // Platform now ready, execute any required native code
      this.initContacts();
    });
  }


  initContacts() {
    let contact: Contact;
    // this.contacts = []; // initialize the posts array to blank.    

    // If you want to open the native contacts screen and select the contacts from there use pickContact()

    this.contacts.pickContact()
    .then((response: Contact) => { 
      console.log(response)
      let loading = this.loadingCrtl.create({
        content: "Loading Contacts..."
      });
      loading.present();            
    });    
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

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.items.delete(item);
  }


}
