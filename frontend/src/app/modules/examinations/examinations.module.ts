import { NgModule } from "@angular/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {ExaminationsComponent} from "./components/examinations.component";
import {MatTableModule} from "@angular/material/table";


@NgModule({
  declarations: [
    ExaminationsComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    MatTableModule,
  ],
  providers: [],
  exports: [ExaminationsComponent]
})
export class ExaminationsModule {}
