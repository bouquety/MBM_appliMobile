import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil-chic',
  templateUrl: './accueil-chic.page.html',
  styleUrls: ['./accueil-chic.page.scss'],
})
export class AccueilChicPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    segmentChanged(ev: any) {
      console.log('Segment changed', ev);
    }
  
}
