import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {tap} from "rxjs/operators";
import {HttpResult} from "../model/HttpResult";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PhotoService {

  constructor(
    private http: HttpClient
  ) {}

  uploadPhoto(url: string, photo: any): Observable<HttpResult> {
    /*暂时未能捕获错误*/
    return this.http.post(url, photo, httpOptions).pipe(
      tap((httpResult: HttpResult) => console.log(`结果: ${httpResult.status}.信息: ${httpResult.message}`))
    );
  }
}
