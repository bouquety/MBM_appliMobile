import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-veste-chic-produit',
  templateUrl: './veste-chic-produit.page.html',
  styleUrls: ['./veste-chic-produit.page.scss'],
})
export class VesteChicProduitPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  goBack(){
    this.location.back();
  }
}
