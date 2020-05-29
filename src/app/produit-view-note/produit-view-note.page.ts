import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-produit-view-note',
  templateUrl: './produit-view-note.page.html',
  styleUrls: ['./produit-view-note.page.scss'],
})
export class ProduitViewNotePage implements OnInit {

  constructor(private location: Location, public alertController: AlertController, private router: Router) { }
  goBack(){
    this.location.back();
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'Votre produit à été ajouter au panier ! ',
      buttons: ['OK']
    });

    await alert.present();
  }

  goCart(){
    this.router.navigateByUrl('/panier');
  }
  ngOnInit() {
  }

}
