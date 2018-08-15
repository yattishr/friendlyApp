import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';
import { DataServiceProvider } from '../../providers/data-service/data-service';
// import { ItemCreateBookingPage } from '../item-create-booking/item-create-booking';

/**
 * Generated class for the ItemScanQrCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-scan-qr-code',
  templateUrl: 'item-scan-qr-code.html',
})
export class ItemScanQrCodePage {
  products: any[] = [];
  selectedProduct: any;
  productFound:boolean = false;  

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              private barcodeScanner: BarcodeScanner,
              private toast: Toast,
              public dataService: DataServiceProvider) {
              this.dataService.getProducts()
                .subscribe((response)=> {
                    this.products = response
                    console.log(this.products);
              });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemScanQrCodePage');
  }

  /* QR Scan Function */
  scan() {
    this.selectedProduct = {};
    this.barcodeScanner.scan().then((barcodeData) => {
      this.selectedProduct = this.products.find(product => product.plu === barcodeData.text);
      if(this.selectedProduct !== undefined) {
        this.productFound = true;
        console.log(this.selectedProduct);
      } else {
        this.selectedProduct = {};
        this.productFound = false;
        this.toast.show('Product not found', '5000', 'center').subscribe(
          toast => {
            console.log(toast);
          }
        );
      }
    }, (err) => {
      this.toast.show(err, '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );
    });
  }
  /* QR Scan Function */

  // load the booking page.
  makeBooking(dataParam) {
    this.navCtrl.push('ItemCreateBookingPage', { dataParam });
  }
  // load the booking page.
  

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

}
