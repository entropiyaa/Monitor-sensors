import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from "./pages/profile/components/profile.component";
import {RegistrationComponent} from "./pages/registration/components/registration.component";
import {UsersComponent} from "./pages/users/components/users.component";
import {LoginComponent} from "./pages/login/components/login.component";
import {CanActivateService} from "./services/can-activate/can-activate.service";


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent, canActivate: [CanActivateService]},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegistrationComponent},
  { path: 'users', component: UsersComponent, canActivate: [CanActivateService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
