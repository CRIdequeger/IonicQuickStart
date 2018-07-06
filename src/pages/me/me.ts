import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Storage} from "@ionic/storage";
import { App } from "ionic-angular";
import {User} from "../../model/User";

/**
 * Generated class for the MePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-me',
  templateUrl: 'me.html',
  providers: [User]
})
export class MePage implements OnInit{

  constructor(public app: App, public navCtrl: NavController, public me: User, public navParams: NavParams, private storage: Storage) {
  }

  ngOnInit () {
    this.storage.get('user').then( (user: User) => {
      this.me = user;
      console.log(this.me)
    }).catch(e => {
      console.log(e)
    });
  }



  logout(): void {
    this.storage.remove('user').then(() => {
      this.app.getRootNav().setRoot('LoginPage')
    }).catch(e => {
      console.log(e)
    });

  }

}
