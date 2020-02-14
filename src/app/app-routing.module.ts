import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './Login';
import {RegisterComponent} from './Register';
import {DisplayComponent} from './display/display.component';

const appR: Routes = [
  { path: '', redirectTo: '/display', pathMatch: 'full'},
  { path: 'Login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'display', component: DisplayComponent }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appR),
    CommonModule
  ]
})
export class AppRoutingModule { }
