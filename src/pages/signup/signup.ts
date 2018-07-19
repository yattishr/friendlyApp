import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, AlertController } from 'ionic-angular';

import { User } from '../../providers';
import { MainPage } from '../';

import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  // account: { name: string, email: string, password: string } = {
  //   name: 'Test Human',
  //   email: 'test@example.com',
  //   password: 'test'
  // };

  name: string = "";
  email: string = "";
  password: string = "";
  birthday: Date;


  // Our translated text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public alertCtrl: AlertController) {

    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    })
  }

  signup() {
    console.log(this.name, this.email, this.password);
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
    .then((data) => {
      console.log(data);
      let newUser: firebase.User = data.user;
          newUser.updateProfile({
          displayName: this.name,
          photoURL: ""
          }).then((res) => {
            console.log("Profile updated successfully.")
            console.log(res)
            this.alertCtrl.create({
              title: "Account Created",
              message: "Your account has been created successfully.",
              buttons: [
                {
                  text: "OK",
                  handler: () => {
                    this.navCtrl.push(MainPage);
                  }
                }
              ]
            }).present();            

          }).catch((err) => {
            console.log(err)
          })
      }).catch((err) => {
        console.log(err);
        this.toastCtrl.create({
          message: err.message,
          duration: 3000      
        }).present();        
      }
    )
  }



  // doSignup() {
  //   // Attempt to login in through our User service
  //   this.user.signup(this.account).subscribe((resp) => {
  //     this.navCtrl.push(MainPage);
  //   }, (err) => {

  //     this.navCtrl.push(MainPage);

  //     // Unable to sign up
  //     let toast = this.toastCtrl.create({
  //       message: this.signupErrorString,
  //       duration: 3000,
  //       position: 'top'
  //     });
  //     toast.present();
  //   });
  // }

  goBack()  {
    this.navCtrl.push('LoginPage');
  }  


}
