import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-produit-ajout-note',
  templateUrl: './produit-ajout-note.page.html',
  styleUrls: ['./produit-ajout-note.page.scss'],
})
export class ProduitAjoutNotePage implements OnInit {

  constructor(private location: Location, public alertController: AlertController) { }

  ngOnInit() {
  }
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
}
