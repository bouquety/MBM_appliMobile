import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regie-p-login',
  templateUrl: './regie-p-login.page.html',
  styleUrls: ['./regie-p-login.page.scss'],
})
export class RegiePLoginPage implements OnInit {

  constructor(private location: Location, private router: Router) { }

  ngOnInit() {
  }
  goBack(){
    this.router.navigateByUrl('/regie-p-home');
  }
}
