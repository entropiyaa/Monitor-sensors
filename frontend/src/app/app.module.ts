import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderModule} from "./modules/header/header.module";
import {LoginModule} from "./pages/login/login.module";
import {RegistrationModule} from "./pages/registration/registration.module";
import {ProfileModule} from "./pages/profile/profile.module";
import {UsersModule} from "./pages/users/users.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {UserService} from "./services/user.service";
import {APIInterceptor} from "./interceptors/api-interceptor";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthService} from "./services/auth.service";
import {ChartsModule} from "ng2-charts";
import {LineChartComponent} from "./modules/charts/components/line-chart.component";
import {LineChartModule} from "./modules/charts/line-chart.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    LoginModule,
    RegistrationModule,
    ProfileModule,
    UsersModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LineChartModule
  ],
  providers: [UserService, APIInterceptor, {
    provide: HTTP_INTERCEPTORS,
    useClass: APIInterceptor,
    multi: true
  },
    AuthService,
    {
      provide: APP_INITIALIZER,
      useFactory: (authService: AuthService) => () => authService.getCurrentUserFromServer(),
      deps: [AuthService],
      multi: true
    }],
  exports: [
    LineChartComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
