import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routing} from './app.routing';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { QuillEditorModule } from 'ngx-quill-editor';

// client side services
import {UserService} from './services/user.service.client';
import {WebsiteService} from './services/website.service.client';
import {PageService} from './services/page.service.client';
import {WidgetService} from './services/widget.service.client';

// user components
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';

// website components
import { WebsiteListComponent } from './components/website/website-list/website-list.component';
import { WebsiteEditComponent } from './components/website/website-edit/website-edit.component';
import { WebsiteNewComponent } from './components/website/website-new/website-new.component';

// page components
import { PageEditComponent } from './components/page/page-edit/page-edit.component';
import { PageListComponent } from './components/page/page-list/page-list.component';
import { PageNewComponent } from './components/page/page-new/page-new.component';

// widget components
import { WidgetChooserComponent } from './components/widget/widget-chooser/widget-chooser.component';
import { WidgetEditComponent } from './components/widget/widget-edit/widget-edit.component';
import { WidgetListComponent } from './components/widget/widget-list/widget-list.component';
import { WidgetHeaderComponent } from './components/widget/widget-edit/widget-header/widget-header.component';
import { WidgetImageComponent } from './components/widget/widget-edit/widget-image/widget-image.component';
import { WidgetYoutubeComponent } from './components/widget/widget-edit/widget-youtube/widget-youtube.component';
import { WidgetHtmlComponent } from './components/widget/widget-edit/widget-html/widget-html.component';
import { WidgetTextComponent } from './components/widget/widget-edit/widget-text/widget-text.component';

import { SortableDirective } from '../../assignment/directives/sortable.directive';
import { FlickrImageSearchComponent } from './components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component';
import { OrderByPipe } from './components/widget/widget-list/order-by-pipe.pipe';
// import { SafePipe } from '../../assignment/pipes/safe-url/safe-url.pipe';
import { FlickrService } from '../app/services/flickr.service.client';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    PageListComponent,
    PageNewComponent,
    PageEditComponent,
    WebsiteListComponent,
    WebsiteEditComponent,
    WebsiteNewComponent,
    WidgetChooserComponent,
    WidgetEditComponent,
    WidgetListComponent,
    WidgetHeaderComponent,
    WidgetImageComponent,
    WidgetYoutubeComponent,
    WidgetTextComponent,
    WidgetHtmlComponent,
    SortableDirective,
    FlickrImageSearchComponent,
    // QuillEditorModule,
    // SafePipe
    OrderByPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // Http,
    HttpModule,
    Routing,
    QuillEditorModule,
    // SafePipe
  ],
  providers: [UserService, WebsiteService, PageService, WidgetService, FlickrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
