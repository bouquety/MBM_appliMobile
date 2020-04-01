import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register-trois',
  templateUrl: './register-trois.page.html',
  styleUrls: ['./register-trois.page.scss'],
})
export class RegisterTroisPage implements OnInit {

  constructor( private location: Location) { }

  ngOnInit() {
  }
  goBack(){
    this.location.back();
  }
}
