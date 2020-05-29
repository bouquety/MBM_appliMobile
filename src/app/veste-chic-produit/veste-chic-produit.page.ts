import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-veste-chic-produit',
  templateUrl: './veste-chic-produit.page.html',
  styleUrls: ['./veste-chic-produit.page.scss'],
})
export class VesteChicProduitPage implements OnInit {

  constructor(private location: Location, public alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }
  goBack(){
    this.location.back();
  }
  goCart(){
    this.router.navigateByUrl('/panier');
  }
  goPanier(){
    this.location.go('/panier')
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'Votre produit à été ajouter au panier ! ',
      buttons: ['OK']
    });

    await alert.present();
  }

}
