import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';


import { MyApp } from './app.component';
import {TabsPageModule} from "../pages/tabs/tabs.module";
import {HomePageModule} from "../pages/home/home.module";
import {ScanQrPageModule} from "../pages/scan-qr/scan-qr.module";
import {MePageModule} from "../pages/me/me.module";
import {LoginPageModule} from "../pages/login/login.module";


import {BarcodeScanner} from '@ionic-native/barcode-scanner';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { Camera } from '@ionic-native/camera';
import {File} from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {MyHttpInterceptor} from "../utils/MyHttpInterceptor";
import {MyHttpClient} from "../utils/MyHttpClient";
import {Http} from "@angular/http";
// import {Http, RequestOptions} from "@angular/http";
// import {MyRequestOptions} from "../utils/MyRequestOptions";



@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    TabsPageModule,
    HomePageModule,
    ScanQrPageModule,
    MePageModule,
    LoginPageModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    Camera,
    File,
    FileTransfer,
    Http,
    MyHttpClient,
    {
      provide: ErrorHandler, useClass: IonicErrorHandler
    },
    /*{
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpInterceptor,
      multi: true,
    }*/
    // {provide: RequestOptions, useClass: MyRequestOptions }

  ]
})
export class AppModule {}
