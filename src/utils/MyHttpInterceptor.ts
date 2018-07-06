/*
 *
 * Created by cridequegerWorkBase at 2018/6/21
 *
 */

import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import {Observable} from "rxjs/Observable";



export class MyHttpInterceptor implements HttpInterceptor {
  constructor(_storage: Storage) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to add the new header
    let headers = req.headers.set('Content-Type', 'application/json');

    const clonedRequest = req.clone({headers: headers});

    // Pass the cloned request instead of the original request to the next handle
    return next.handle(clonedRequest);
  }


}
