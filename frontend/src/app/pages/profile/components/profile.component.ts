import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public examinationForm: FormGroup;
  public visibilityNewExamination: boolean = false;
  typesOfSensors: string[] = ['Blood pressure measurements', 'Skin temperature measurements',
    'Skin moisture measurements', 'Measurements of electrical conductivity of the skin', 'Heart rate heart rate measurements'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
  }

  public createForm(): void {
    this.examinationForm = this.fb.group({
      type: [''],
      type2: [''],
    });
    this.visibilityNewExamination = true;
  }

  public close(): void {
    this.visibilityNewExamination = false;
    this.examinationForm.reset();
  }
}
