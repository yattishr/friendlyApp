import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';

import { ItemScanQrCodePage } from './item-scan-qr-code';

@NgModule({
  declarations: [
    ItemScanQrCodePage,
  ],
  imports: [
    IonicPageModule.forChild(ItemScanQrCodePage),
    TranslateModule.forChild()    
  ],
  exports: [
    ItemScanQrCodePage
  ]
})
export class ItemScanQrCodePageModule {}
