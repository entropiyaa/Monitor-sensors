import { NgModule } from "@angular/core";
import {MatCardModule} from "@angular/material/card";
import {TitleComponent} from "./components/title.component";


@NgModule({
  declarations: [
    TitleComponent
  ],
  imports: [
    MatCardModule
  ],
  providers: [],
  exports: [TitleComponent]
})
export class TitleModule {}
