/*
 *
 * Created by cridequegerWorkBase at 2018/6/21
 *
 */

import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()

export class MyHttpClient {

  private _HTTP_options: any;

  constructor(private http: HttpClient) {
    this._HTTP_options = {
      headers: new HttpHeaders()
    };
    this._HTTP_options.headers = this._HTTP_options.headers.set('Content-Type', 'application/json');
  }

  createAuthorizationHeader(): void {
    this._HTTP_options.headers = this._HTTP_options.headers.set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZGFpIiwiaWF0IjoxNTI5Mzc3MTAwLCJleHAiOjE1MjkzODA3MDB9.uAD1sEjlAT6d_QbuqRzE-Q6yxFaFkjDjKAhc0DCb_LE');
  }

  get(url) {
    return this.http.get(url, this._HTTP_options);
  }

  post(url, data) {
    return this.http.post(url, data, this._HTTP_options);
  }
}
