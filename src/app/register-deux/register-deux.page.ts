import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register-deux',
  templateUrl: './register-deux.page.html',
  styleUrls: ['./register-deux.page.scss'],
})
export class RegisterDeuxPage implements OnInit {

  constructor( private location: Location) { }

  ngOnInit() {
  }
  goBack(){
    this.location.back();
  }
}
