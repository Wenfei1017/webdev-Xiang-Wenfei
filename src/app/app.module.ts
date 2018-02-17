// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
//
//
// import { AppComponent } from './app.component';
// import { LoginComponent } from './view/user/views/user/login/login.component';
// import {FormsModule} from '@angular/forms';
// import {routing} from './app.routing';
// import { RegisterComponent } from './view/user/views/user/register/register.component';
// import { ProfileComponent } from './view/user/views/user/profile/profile.component';
// import { WebsiteListComponent } from './views/website/website-list/website-list.component';
// import { WebsiteNewComponent } from './views/website/website-new/website-new.component';
// import { WebsiteEditComponent } from './views/website/website-edit/website-edit.component';
// import { PageListComponent } from './views/page/page-list/page-list.component';
// import { PageNewComponent } from './views/page/page-new/page-new.component';
// import { PageEditComponent } from './views/page/page-edit/page-edit.component';
// import { WebsiteListComponent } from './views/website/website-list/website-list.component';
// import { WebsiteNewComponent } from './views/website/website-new/website-new.component';
// import { WebsiteEditComponent } from './views/website/website-edit/website-edit.component';
//
//
// @NgModule({
//   declarations: [
//     AppComponent,
//     LoginComponent,
//     RegisterComponent,
//     ProfileComponent,
//     WebsiteListComponent,
//     WebsiteNewComponent,
//     WebsiteEditComponent,
//     PageListComponent,
//     PageNewComponent,
//     PageEditComponent,
//     WebsiteListComponent,
//     WebsiteNewComponent,
//     WebsiteEditComponent,
//   ],
//   imports: [
//     BrowserModule,
//     routing,
//     FormsModule
//   ],
//   providers: [userService],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing} from './app.routing';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// user components
import { LoginComponent } from './views/user/login/login.component';
import { RegisterComponent } from './views/user/register/register.component';
import { ProfileComponent } from './views/user/profile/profile.component';

// website components
import { WebsiteListComponent } from './views/website/website-list/website-list.component';
import { WebsiteEditComponent } from './views/website/website-edit/website-edit.component';
import { WebsiteNewComponent } from './views/website/website-new/website-new.component';

// page components
import { PageEditComponent } from './views/page/page-edit/page-edit.component';
import { PageListComponent } from './views/page/page-list/page-list.component';
import { PageNewComponent } from './views/page/page-new/page-new.component';

// widget components
import { WidgetChooserComponent } from './views/widget/widget-chooser/widget-chooser.component';
import { WidgetEditComponent } from './views/widget/widget-edit/widget-edit.component';
import { WidgetListComponent } from './views/widget/widget-list/widget-list.component';
import { WidgetHeaderComponent } from './views/widget/widget-edit/widget-header/widget-header.component';
import { WidgetImageComponent } from './views/widget/widget-edit/widget-image/widget-image.component';
import { WidgetYoutubeComponent } from './views/widget/widget-edit/widget-youtube/widget-youtube.component';

// client side services
import {UserService} from './services/user.service.client';
import {WebsiteService} from './services/website.service.client';
import {PageService} from './services/page.service.client';
import {WidgetService} from './services/widget.service.client';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    WebsiteListComponent,
    WebsiteEditComponent,
    WebsiteNewComponent,
    WidgetChooserComponent,
    WidgetEditComponent,
    WidgetListComponent,
    WidgetHeaderComponent,
    WidgetImageComponent,
    WidgetYoutubeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [UserService, WebsiteService, PageService, WidgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
