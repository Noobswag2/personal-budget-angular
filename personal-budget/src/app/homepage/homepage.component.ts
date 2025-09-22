import { Component, AfterViewInit } from '@angular/core';
// v2.9.4 import:
import * as Chart from 'chart.js';

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements AfterViewInit {

  private chart: any;

  ngAfterViewInit(): void {
    // ensure the canvas exists
    const canvas = document.getElementById('myChart') as HTMLCanvasElement | null;
    if (!canvas) {
      console.error('Canvas #myChart not found');
      return;
    }
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('2D context not available');
      return;
    }

    // destroy any previous instance (hot reload safety)
    if (this.chart) { this.chart.destroy(); }

    // 🔒 STATIC TEST DATA — you should SEE a pie even without the API
    const data = {
      labels: ['Eat out', 'Rent', 'Grocery'],
      datasets: [
        {
          data: [25, 275, 110],
          backgroundColor: ['#ffcd56', '#ff6384', '#36a2eb']
        }
      ]
    };

    this.chart = new (Chart as any)(ctx, {
      type: 'pie',
      data,
      options: {}
    });

    console.log('Chart created:', this.chart);
  }
}
