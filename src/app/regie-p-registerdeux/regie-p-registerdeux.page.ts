import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-regie-p-registerdeux',
  templateUrl: './regie-p-registerdeux.page.html',
  styleUrls: ['./regie-p-registerdeux.page.scss'],
})
export class RegiePRegisterdeuxPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  goBack(){
    this.location.back();
  }
}
