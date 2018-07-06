import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Storage} from '@ionic/storage';

import {UserService} from "../../service/user.service";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [UserService]
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private userService: UserService) {

  }

  public user = {
    name: '',
    password: '',
    token: ''
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  login() {
    if (this.user.name == '' || this.user.password == '') return;

    this.userService.login(this.user).subscribe(req => {
      this.userService.createAuthorizationHeader();
      this.storage.set('user', {
        name: this.user.name,
        token: this.user.token
      })
      .then(() => {
        this.navCtrl.setRoot('TabsPage')
      })
      .catch(err => {
        console.log(err);
      })
    },
err => {
      console.log(err);
    })

  }

}
