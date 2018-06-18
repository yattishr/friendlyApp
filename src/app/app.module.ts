import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Camera } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { Items } from '../mocks/providers/items';
import { Settings, User, Api } from '../providers';
import { MyApp } from './app.component';

import { ListMasterPage } from '../pages/list-master/list-master';
import { ItemDetailPage } from '../pages/item-detail/item-detail';
import { ListMasterGroupsPage } from '../pages/list-master-groups/list-master-groups';
import { ListMasterFriendsPage } from '../pages/list-master-friends/list-master-friends';
import { ListMasterInvitesPage } from '../pages/list-master-invites/list-master-invites';
import { ItemCreateEventDrinksDiningPage } from '../pages/item-create-event-drinks-dining/item-create-event-drinks-dining';
import { ItemCreateEventDrinksDiningDetailPage } from '../pages/item-create-event-drinks-dining-detail/item-create-event-drinks-dining-detail';
import { ListMasterPageModule } from '../pages/list-master/list-master.module';
import { ItemDetailPageModule } from '../pages/item-detail/item-detail.module';
import { ListMasterGroupsPageModule } from '../pages/list-master-groups/list-master-groups.module';
import { ListMasterFriendsPageModule } from '../pages/list-master-friends/list-master-friends.module';
import { ListMasterInvitesPageModule } from '../pages/list-master-invites/list-master-invites.module';
import { ItemCreateEventDrinksDiningPageModule } from '../pages/item-create-event-drinks-dining/item-create-event-drinks-dining.module';
import { ItemCreateEventDrinksDiningDetailPageModule } from '../pages/item-create-event-drinks-dining-detail/item-create-event-drinks-dining-detail.module';

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    ListMasterPageModule,
    ItemDetailPageModule,
    ListMasterGroupsPageModule,
    ListMasterFriendsPageModule,
    ListMasterInvitesPageModule,
    ItemCreateEventDrinksDiningPageModule,
    ItemCreateEventDrinksDiningDetailPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListMasterPage,
    ItemDetailPage,
    ListMasterGroupsPage,
    ListMasterFriendsPage,
    ListMasterInvitesPage,
    ItemCreateEventDrinksDiningPage,
    ItemCreateEventDrinksDiningDetailPage
  ],
  providers: [
    Api,
    Items,
    User,
    Camera,
    SplashScreen,
    StatusBar,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
