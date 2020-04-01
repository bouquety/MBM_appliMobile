import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register-quatre',
  templateUrl: './register-quatre.page.html',
  styleUrls: ['./register-quatre.page.scss'],
})
export class RegisterQuatrePage implements OnInit {

  constructor( private location: Location) { }

  ngOnInit() {
  }
  goBack(){
    this.location.back();
  }
}
