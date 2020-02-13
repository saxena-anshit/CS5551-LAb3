import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Register';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './Login';
import { AppRoutingModule } from './app-routing.module';
import { DisplayComponent } from './display/display.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [

];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
