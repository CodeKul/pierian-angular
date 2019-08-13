import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @ViewChild('pieChart', { static: true })
  pieChart: ElementRef // not recommended to access native element directly

  constructor() { }

  drawChart = () => {

    const data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Work', 11],
      ['Eat', 2],
      ['Commute', 2],
      ['Watch TV', 1],
      ['Sleep', 5],
      ['Coding', 1]
    ]);

    const options = {
      title: 'My Daily Activities',
      legend: { position: 'top' }
    };

    const chart = new google.visualization.PieChart(this.pieChart.nativeElement);

    chart.draw(data, options);
  }

  ngOnInit() {
    this.pieChart.nativeElement.style.border = '1px solid red'

    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(this.drawChart);
  }

}
