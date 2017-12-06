import { Component } from '@angular/core';
import { NavController , AlertController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ContactPage } from '../contact/contact';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    console.log('hello');
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Salut à toi!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }

  scanAction() : void {
    console.log('Button active');
    this.navCtrl.push(ContactPage);
  }

}
