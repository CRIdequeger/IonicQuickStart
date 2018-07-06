import {Component} from '@angular/core';
import {IonicPage, /*NavController, NavParams*/} from 'ionic-angular';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';
import {Camera, CameraOptions} from '@ionic-native/camera';
import {FileTransfer, FileUploadOptions, FileTransferObject} from '@ionic-native/file-transfer';
// import {File} from '@ionic-native/file';
import {UserService} from "../../service/user.service";


/**
 * Generated class for the ScanQrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@IonicPage()
@Component({
  selector: 'page-scan-qr',
  templateUrl: 'scan-qr.html',
  providers: [UserService]
})

export class ScanQrPage {

  constructor(/*public navCtrl: NavController,
              public navParams: NavParams,*/
              private barcodeScanner: BarcodeScanner,
              private camera: Camera,
              private transfer: FileTransfer,
              /*private file: File,*/
              private userService: UserService) {
  }

  public str: string = '待扫描';
  fileTransfer: FileTransferObject = this.transfer.create();
  path: string;
  formStatus: any = {
    show: false
  };
  private options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };

  scan(): void {
    this.barcodeScanner.scan().then(barcodeData => {
      this.str = barcodeData.text;
    }).catch(err => {
      console.log('Error', err);
    });
  }

  photo(): void {
    this.camera.getPicture(this.options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.path = base64Image;
      this.upload();
      console.log(base64Image)
    }, (err) => {
      console.log(err)
    });
  }
  choose(): void {
    this.formShow();
  }

  formShow(): void {
    this.formStatus.show = true;
  }

  formHide(): void {
    this.formStatus.show = false;
  }

  upload(): void {

    let options: FileUploadOptions = {
      fileKey: 'file',
      fileName: 'test.jpg',   //文件名称
      headers: {},
      // 如果要传参数，写这里
      params: {
        maxSize: 5000000,
        modularName: 'CNL',
        allowType: 'jpg;png;pdf;doc;xls;xlsx;docx',
      }
    };

    this.fileTransfer.upload(this.path, 'http://localhost:3000/uploadPhoto', options)
      .then((data) => {
        console.log(data);

      }, (err) => {
        console.log(err);
      });

  }

}
