import {NgModule} from "@angular/core";
import {LineChartComponent} from "./components/line-chart.component";
import {ChartsModule} from "ng2-charts";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    LineChartComponent
  ],
  imports: [
    ChartsModule,
    CommonModule
  ],
  providers: [],
  exports: [LineChartComponent]
})
export class LineChartModule {}
