import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register-cinq',
  templateUrl: './register-cinq.page.html',
  styleUrls: ['./register-cinq.page.scss'],
})
export class RegisterCinqPage implements OnInit {

  constructor( private location: Location) { }

  ngOnInit() {
  }
  goBack(){
    this.location.back();
  }
}
