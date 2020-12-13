import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {createHasError, HasErrorFunction} from "../../../util/has-error";
import {User} from "../../../models/user";
import {LoginUser} from "../../../models/loginUser";
import {validation} from "../../../util/validation";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {StorageService} from "../../../services/storage.service";
import {LoginService} from "../../../services/login.service";
import {AuthToken} from "../../../models/auth.token";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  public login: LoginUser = {};
  public user: User;
  private subscriptions: Subscription[] = [];

  public loginForm: FormGroup;
  public hasError: HasErrorFunction;
  public validation = validation;


  constructor(public storageService: StorageService,
              private loginService: LoginService,
              private authService: AuthService,
              private fb: FormBuilder,
              private router: Router,
              private _snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.createForm();
    this.getCurrentUser();
  }

  private createForm(): void {
    this.loginForm = this.fb.group({
      email: ['', validation.emailValid],
      password: ['', Validators.required],
    });
    this.hasError = createHasError(this.loginForm);
  }

  public onSubmit(): void {
    if(this.loginForm.valid) {
      this.login.username = this.loginForm.value.email;
      this.login.password = this.loginForm.value.password;
      this.getToken();
    }
  }

  private getToken(): void {
    this.subscriptions.push(this.loginService.generateToken(this.login)
      .subscribe((authToken: AuthToken) => {
        if(authToken) {
          this.storageService.setToken(authToken);
          this.authService.getCurrentUserFromServer().then(data => {
            this.getCurrentUser();
            this.router.navigate(['/profile']);});
        }
      }, (error) => {
        if (error.status === 401) {
          this._snackBar.open('Incorrect data', '', {duration: 3000});
        } else {
          alert(error.message);
        }
        this.clear();
      }))
  }

  private clear(): void {
    this.loginForm.reset();
    this.login = {};
  }

  private getCurrentUser(): void {
    this.user = this.authService.getCurrentUser();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(
      (subscription) => subscription.unsubscribe());
    this.subscriptions = [];
  }
}
