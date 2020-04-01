import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vestes-chic',
  templateUrl: './vestes-chic.page.html',
  styleUrls: ['./vestes-chic.page.scss'],
})
export class VestesChicPage implements OnInit {

  constructor( private location: Location) { }

  ngOnInit() {
  }
  goBack(){
    this.location.back();
  }
}
