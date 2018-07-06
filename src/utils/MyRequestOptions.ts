/*
 *
 * Created by cridequegerWorkBase at 2018/6/19
 *
 */

// import {HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {BaseRequestOptions} from "@angular/http";

/*let httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};*/

@Injectable()

export class MyRequestOptions extends BaseRequestOptions{
  constructor () {
    super();
    this.headers.append('Content-Type','application/json');
    this.headers.append('Authorization','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZGFpIiwiaWF0IjoxNTI5Mzc3MTAwLCJleHAiOjE1MjkzODA3MDB9.uAD1sEjlAT6d_QbuqRzE-Q6yxFaFkjDjKAhc0DCb_LE');
  }

  setToken (token: string) {
    this.headers.append('Authorization',token);
  }
}
