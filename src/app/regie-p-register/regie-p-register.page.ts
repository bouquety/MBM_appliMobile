import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-regie-p-register',
  templateUrl: './regie-p-register.page.html',
  styleUrls: ['./regie-p-register.page.scss'],
})
export class RegiePRegisterPage implements OnInit {

  constructor( private location: Location) { }

  ngOnInit() {
  }
  goBack(){
    this.location.back();
  }
}
