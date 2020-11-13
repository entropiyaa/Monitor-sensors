import { NgModule } from "@angular/core";
import {UsersComponent} from "./components/users.component";
import {MatTableModule} from "@angular/material/table";
import {CommonModule} from "@angular/common";
import {TitleModule} from "../../modules/title/title.module";


@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    TitleModule
  ],
  providers: [],
  exports: [UsersComponent]
})
export class UsersModule {}
