import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {createHasError, HasErrorFunction} from "../../../util/has-error";
import {validation} from "../../../util/validation";
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {LoginService} from "../../../services/login.service";
import {Login} from "../../../models/login";
import {User} from "../../../models/user";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];
  public registrationForm: FormGroup;
  public hasError: HasErrorFunction;
  public validation = validation;

  constructor(private loginService: LoginService,
              private userService: UserService,
              private fb: FormBuilder,
              private router: Router,
              private _snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.registrationForm = this.fb.group({
      email: ['', validation.emailValid],
      password: ['', validation.passwordValid],
      passwordConfirmation: ['', [Validators.required]],
      firstName: ['', validation.nameValid],
      lastName: ['', validation.nameValid],
      sex: [''],
      birthday: [''],
    });
    this.hasError = createHasError(this.registrationForm);
    this.registrationForm.get('passwordConfirmation').setValidators(this.passwordConfirmation());
  }

  public onSubmit(): void {
    if(this.registrationForm.valid) {
      this.existEmail();
    }
  }

  private registration(login: Login): void {
    this.subscriptions.push(this.loginService.register(login).subscribe(login => {
      this.clear();
      this._snackBar.open('Registration completed', '', {duration: 3000});
      this.router.navigate(['login']);
    }))
  }

  private passwordConfirmation() {
    const password = this.registrationForm.get('password');
    const passwordConfirmation = this.registrationForm.get('passwordConfirmation');
    return () => {
      if (password.value === passwordConfirmation.value) {
        return null;
      } else {
        return {confirmation: true};
      }
    };
  }

  private existEmail(): void {
    this.subscriptions.push(this.loginService
      .getLoginByEmail(this.registrationForm.value.email).subscribe(login => {
        if(!login) {
          this.createLoginModel();
        } else {
          this.emailErr();
        }
      }));
  }

  private emailErr(): void {
    this._snackBar.open('This email already exists', '', {duration: 4000});
    this.registrationForm.get('email').reset();
  }

  private createLoginModel(): void {
    const formValues = this.registrationForm.value;
    const login: Login = new Login(formValues.email, formValues.password,
      new User(formValues.firstName, formValues.lastName, formValues.sex, formValues.birthday));
    this.registration(login);
  }

  public updatePasswordConfirmation() {
    this.registrationForm.get('passwordConfirmation').updateValueAndValidity();
  }

  private clear(): void {
    this.registrationForm.reset();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(
      (subscription) => subscription.unsubscribe());
    this.subscriptions = [];
  }
}
