import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-regie-p-sportwear',
  templateUrl: './regie-p-sportwear.page.html',
  styleUrls: ['./regie-p-sportwear.page.scss'],
})
export class RegiePSportwearPage implements OnInit {
  @ViewChild("barCanvas", {static: true}) barCanvas;
  @ViewChild("barCanvasdos", {static: true}) barCanvasdos;


  private barChart: Chart;
  private doughnutChart: Chart;

  constructor(private location: Location) { }

  ngOnInit() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: "doughnut",
      data: {
        labels: ["M", "S", "L", "XL"],
        datasets: [
          {
            label: "Vente",
            data: [3, 6, 3, 5],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)"
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)"
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

    this.doughnutChart = new Chart(this.barCanvasdos.nativeElement, {
      type: "doughnut",
      data: {
        labels: ["M", "S", "L", "XL"],
        datasets: [
          {
            label: "Vente",
            data: [12, 19, 3, 5],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)"
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)"
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
