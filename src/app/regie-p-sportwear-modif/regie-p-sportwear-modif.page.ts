import { Component, OnInit,ViewChild  } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-regie-p-sportwear-modif',
  templateUrl: './regie-p-sportwear-modif.page.html',
  styleUrls: ['./regie-p-sportwear-modif.page.scss'],
})
export class RegiePSportwearModifPage implements OnInit {
  
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
