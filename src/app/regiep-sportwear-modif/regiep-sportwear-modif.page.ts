import { Component, OnInit,ViewChild  } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-regiep-sportwear-modif',
  templateUrl: './regiep-sportwear-modif.page.html',
  styleUrls: ['./regiep-sportwear-modif.page.scss'],
})
export class RegiepSportwearModifPage implements OnInit {
  
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
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
        datasets: [{
          label: 'Viewers in millions',
          data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
          backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
}
