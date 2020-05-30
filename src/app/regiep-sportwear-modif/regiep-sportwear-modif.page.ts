import { Component, OnInit,ViewChild  } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-regiep-sportwear-modif',
  templateUrl: './regiep-sportwear-modif.page.html',
  styleUrls: ['./regiep-sportwear-modif.page.scss'],
})
export class RegiepSportwearModifPage implements OnInit {
  
  constructor(private location: Location) { }

  ngOnInit() {
  }
  goBack(){
    this.location.back();
  }
  ionViewDidEnter() {
    this.createBarChart();
  }

  createBarChart() {
  }
}
