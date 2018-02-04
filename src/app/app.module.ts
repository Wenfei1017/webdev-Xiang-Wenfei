import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './view/user/views/user/login/login.component';
import {FormsModule} from '@angular/forms';
import {routing} from './app.routing';
import { RegisterComponent } from './view/user/views/user/register/register.component';
import { ProfileComponent } from './view/user/views/user/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
