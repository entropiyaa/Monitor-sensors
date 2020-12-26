import { NgModule } from "@angular/core";
import {ProfileComponent} from "./components/profile.component";
import {TitleModule} from "../../modules/title/title.module";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {MatCardModule} from "@angular/material/card";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatSelectModule} from "@angular/material/select";
import {MatListModule} from "@angular/material/list";
import {ExaminationsModule} from "../../modules/examinations/examinations.module";


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    TitleModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    BrowserModule,
    MatCardModule,
    FormsModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatListModule,
    ExaminationsModule,
  ],
  providers: [],
  exports: [ProfileComponent]
})
export class ProfileModule {}
