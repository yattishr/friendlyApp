import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers';
import { MainPage } from '../';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  // email: string = "test@friendlyapp.com";
  // password: string = "12345678";

  email: string = "demo@friendlyapp.com";
  password: string = "12345678";

  // email: string = "yattishr@hotmail.com";
  // password: string = "12345678";


  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  // account: { email: string, password: string } = {
  //   email: 'test@example.com',
  //   password: 'test'
  // };

  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }

  login() {
    firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((user) => {
      console.log(user)
      this.navCtrl.setRoot(MainPage);
      this.toastCtrl.create({
        message: "Welcome to friend.Ly " + user.user.displayName + "!",
        duration: 3000
      }).present();      
    }).catch((err) => {
      console.log(err)
      this.toastCtrl.create({
        message: err.message,
        duration: 3000      
      }).present();      
    })
  }  


  // Attempt to login in through our User service
  // doLogin() {
  //   this.user.login(this.account).subscribe((resp) => {
  //     this.navCtrl.push(MainPage);
  //   }, (err) => {
  //     this.navCtrl.push(MainPage);
  //     // Unable to log in
  //     let toast = this.toastCtrl.create({
  //       message: this.loginErrorString,
  //       duration: 3000,
  //       position: 'top'
  //     });
  //     toast.present();
  //   });
  // }

  gotoSignup() {
    this.navCtrl.push('SignupPage');
    console.log("Signup page button clicked...");
  }

}
