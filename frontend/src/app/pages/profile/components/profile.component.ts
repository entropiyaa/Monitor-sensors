import {Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Subscription} from "rxjs";
import {User} from "../../../models/user";
import {UserService} from "../../../services/user.service";
import {AuthService} from "../../../services/auth.service";
import {StorageService} from "../../../services/storage.service";
import {Examination} from "../../../models/examination";
import {ExaminationService} from "../../../services/examination.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ExaminationsComponent} from "../../../modules/examinations/components/examinations.component";
import {SetupSensor} from "../../../models/setupSensor";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];
  public currentUser: User;
  public currentExam: Examination;

  public examinationForm: FormGroup;
  public visibilityNewExamination: boolean = false;
  public visibilityExaminations: boolean = false;
  public visibilityCurrentExam: boolean = false;

  constructor(private storageService: StorageService,
              private userService: UserService,
              private authService: AuthService,
              private fb: FormBuilder,
              private examinationService: ExaminationService,
              private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
  }

  public createForm(): void {
    this.examinationForm = this.fb.group({
      type: [''],
      sensors: [''],
    });
    this.visibilityNewExamination = true;
  }

  public registerExamination(examination: Examination): void {
    this.subscriptions.push(this.examinationService.registerExamination(examination)
      .subscribe(examination => {
        this.setupSensors(examination.id);
        this.visibilityCurrentExam = true;
        this.currentExam = examination;
    }))
  }

  private setupSensors(id: number) {
    const formValues = this.examinationForm.value;
    const setupSensor: SetupSensor = new SetupSensor(id, formValues.sensors);
    this.subscriptions.push(this.examinationService.setupSensors(setupSensor)
      .subscribe(() => {
        this._snackBar.open('Registration completed', '', {duration: 3000});
        this.close();
      }));
  }

  public onSubmit(): void {
    const formValues = this.examinationForm.value;
    const examination: Examination = new Examination(formValues.type, this.currentUser);
    this.registerExamination(examination);
  }

  public startExamination(): void {
    this.subscriptions.push(this.examinationService.startExamination(this.currentExam.id)
      .subscribe(results => {
        console.log(results);
      }));
  }

  public close(): void {
    this.visibilityNewExamination = false;
    this.examinationForm.reset();
  }

  public changeVisibilityExaminations(): void {
    this.visibilityExaminations = !this.visibilityExaminations;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(
      (subscription) => subscription.unsubscribe());
    this.subscriptions = [];
  }
}
