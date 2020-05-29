import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vestes-chic',
  templateUrl: './vestes-chic.page.html',
  styleUrls: ['./vestes-chic.page.scss'],
})
export class VestesChicPage implements OnInit {

  constructor( private location: Location, private router: Router) { }

  ngOnInit() {
  }
  goBack(){
    this.location.back();
  }
  goCart(){
    this.router.navigateByUrl('/panier');
  }
}
