import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Subscription} from "rxjs";
import {User} from "../../../models/user";
import {UserService} from "../../../services/user.service";
import {AuthService} from "../../../services/auth.service";
import {StorageService} from "../../../services/storage.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];
  public currentUser: User;

  public examinationForm: FormGroup;
  public visibilityNewExamination: boolean = false;
  typesOfSensors: string[] = ['Blood pressure measurements', 'Skin temperature measurements',
    'Skin moisture measurements', 'Measurements of electrical conductivity of the skin', 'Heart rate heart rate measurements'];

  constructor(private storageService: StorageService,
              private userService: UserService,
              private authService: AuthService,
              private fb: FormBuilder) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
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

  ngOnDestroy() {
    this.subscriptions.forEach(
      (subscription) => subscription.unsubscribe());
    this.subscriptions = [];
  }
}
