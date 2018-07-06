/*
 *
 * Created by cridequegerWorkBase at 2018/6/14
 *
 */
import {HttpClient, /*HttpHeaders*/} from '@angular/common/http';
// import {User} from "../model/User";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import * as Crypto from 'crypto-js';
// import {MyRequestOptions} from "../utils/MyRequestOptions";
import {MyHttpClient} from "../utils/MyHttpClient";


@Injectable()
export class UserService {
  constructor(private http: MyHttpClient) {
  }

  encode(user): string {
    let pass = Crypto.enc.Utf8.parse(user.password);
    pass = Crypto.enc.Base64.stringify(pass);
    return pass;
  }

  decode(AESPass, key): string {
    // let pass2 = Crypto.enc.Base64.parse('eGlhb2RhaTA3MTI=');
    // pass2 = Crypto.enc.Utf8.stringify(pass2);
    return ''
  }

  getUserInfo(): Observable<any> {
    return this.http.get('http://localhost:3000/app/userInfo')
  }

  login(user: any): Observable<any> {
    let body = {
      name: user.name,
      pass: this.encode(user)
    };
    return this.http.post('http://localhost:3000/app/login', body)
  }

  createAuthorizationHeader () {
    this.http.createAuthorizationHeader();
  }

}
