import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent implements OnInit {

  public chartDatasets: Array<any>;
  @Input() public resultsArray: number[] = [];
  @Input() public label: string;
  public chartType: string = 'line';
  public chartLabels: Array<any> = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

    ngOnInit(): void {
      console.log(this.label);
      console.log(this.resultsArray);
     this.chartDatasets = [
        { data: this.resultsArray, label: this.label },
      ];
    }

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}
