import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-chemises-chic',
  templateUrl: './chemises-chic.page.html',
  styleUrls: ['./chemises-chic.page.scss'],
})
export class ChemisesChicPage implements OnInit {

  constructor( private location: Location) { }

  ngOnInit() {
  }
  goBack(){
    this.location.back();
  }
}
