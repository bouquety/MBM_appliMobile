import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-regiep-sportwear',
  templateUrl: './regiep-sportwear.page.html',
  styleUrls: ['./regiep-sportwear.page.scss'],
})
export class RegiepSportwearPage implements OnInit {
  @ViewChild("barCanvas") barCanvas: ElementRef;

  private barChart: Chart;

  constructor(private location: Location) { }

  ngOnInit() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: "doughnut",
      data: {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
          {
            label: "Vente",
            data: [12, 19, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)"
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }

  goBack(){
    this.location.back();
  }
}
