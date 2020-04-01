import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pantalons-chic',
  templateUrl: './pantalons-chic.page.html',
  styleUrls: ['./pantalons-chic.page.scss'],
})
export class PantalonsChicPage implements OnInit {

  constructor( private location: Location) { }

  ngOnInit() {
  }
  goBack(){
    this.location.back();
  }
}
