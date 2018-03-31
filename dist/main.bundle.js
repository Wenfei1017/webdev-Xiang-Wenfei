webpackJsonp(["main"],{

/***/ "../../../../../assignment/directives/sortable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SortableDirective = /** @class */ (function () {
    function SortableDirective(el) {
        this.el = el;
        this.newIndexes = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */](); // this will emit an event for the parent component or the directive calling component
    }
    // Lifecycle hook that is called after a component's view has been fully initialized
    SortableDirective.prototype.ngAfterViewInit = function () {
        this.appSortable(this);
    };
    SortableDirective.prototype.appSortable = function (refe) {
        jQuery(this.el.nativeElement).sortable({
            axis: 'y',
            start: function (event, ui) {
                console.log('Old position: ' + ui.item.index());
                refe.initialIndex = ui.item.index();
            },
            stop: function (event, ui) {
                console.log('New position: ' + ui.item.index());
                refe.newIndexes.emit({
                    startIndex: refe.initialIndex,
                    endIndex: ui.item.index()
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], SortableDirective.prototype, "newIndexes", void 0);
    SortableDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appSortable]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], SortableDirective);
    return SortableDirective;
}());



/***/ }),

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--<div class=\"container-fluid\">-->\n<!--<a routerLink=\"/login\">Login</a>-->\n<!--<a routerLink=\"/register\">Register</a>-->\n<!--<a routerLink=\"/user/:userId\">Profile</a>-->\n\n  <!--</ul>-->\n<!--<router-outlet></router-outlet>-->\n<!--</div>-->\n\n<!--<ul id=\"sortable\">-->\n  <!--<li>One</li>-->\n  <!--<li>Two</li>-->\n  <!--<li>Three</li>-->\n  <!--<li>Four</li>-->\n  <!--<li>Five</li>-->\n<!--</ul>-->\n\n<div class=\"container-fluid\">\n  <!--<a routerLink=\"/login\">Login</a>-->\n  <!--<a routerLink=\"/register\">Register</a>-->\n  <!--<a routerLink=\"/user/:userId\">Profile</a>-->\n  <!--<ul>-->\n\n    <!--<li class=\"list-group-item cl-list-item-borderless\" style=\"display:inline\">-->\n      <!--<a routerLink=\"/login\">Login</a>-->\n    <!--</li>-->\n\n    <!--<li class=\"list-group-item cl-list-item-borderless\" style=\"display:inline\">-->\n      <!--<a routerLink=\"/register\">Register</a>-->\n    <!--</li>-->\n\n    <!--<li class=\"list-group-item cl-list-item-borderless\" style=\"display:inline\">-->\n      <!--<a routerLink=\"/user/{{userId}}\">Profile</a>-->\n    <!--</li>-->\n  <!--</ul>-->\n\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_quill_editor__ = __webpack_require__("../../../../ngx-quill-editor/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_widget_widget_edit_widget_text_widget_text_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__assignment_directives_sortable_directive__ = __webpack_require__("../../../../../assignment/directives/sortable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_widget_widget_list_order_by_pipe_pipe__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/order-by-pipe.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__app_services_flickr_service_client__ = __webpack_require__("../../../../../src/app/services/flickr.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// client side services




// user components



// website components



// page components



// widget components











// import { SafePipe } from '../../assignment/pipes/safe-url/safe-url.pipe';

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_user_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_user_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_user_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_page_page_list_page_list_component__["a" /* PageListComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_page_page_new_page_new_component__["a" /* PageNewComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_widget_widget_edit_widget_text_widget_text_component__["a" /* WidgetTextComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */],
                __WEBPACK_IMPORTED_MODULE_28__assignment_directives_sortable_directive__["a" /* SortableDirective */],
                __WEBPACK_IMPORTED_MODULE_29__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__["a" /* FlickrImageSearchComponent */],
                // QuillEditorModule,
                // SafePipe
                __WEBPACK_IMPORTED_MODULE_30__components_widget_widget_list_order_by_pipe_pipe__["a" /* OrderByPipe */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                // Http,
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing__["a" /* Routing */],
                __WEBPACK_IMPORTED_MODULE_6_ngx_quill_editor__["a" /* QuillEditorModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_8__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_9__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_10__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_31__app_services_flickr_service_client__["a" /* FlickrService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");














var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__components_user_login_login_component__["a" /* LoginComponent */] },
    // { path: 'default', component: LoginComponent},
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_1__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_2__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'user/:userId', component: __WEBPACK_IMPORTED_MODULE_2__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'user/:userId/website', component: __WEBPACK_IMPORTED_MODULE_3__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */] },
    { path: 'user/:userId/website/new', component: __WEBPACK_IMPORTED_MODULE_5__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */] },
    { path: 'user/:userId/website/:websiteId', component: __WEBPACK_IMPORTED_MODULE_6__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */] },
    { path: 'user/:userId/website/:websiteId/page', component: __WEBPACK_IMPORTED_MODULE_7__components_page_page_list_page_list_component__["a" /* PageListComponent */] },
    { path: 'user/:userId/website/:websiteId/page/new', component: __WEBPACK_IMPORTED_MODULE_8__components_page_page_new_page_new_component__["a" /* PageNewComponent */] },
    { path: 'user/:userId/website/:websiteId/page/:pageId', component: __WEBPACK_IMPORTED_MODULE_9__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */] },
    { path: 'user/:userId/website/:websiteId/page/:pageId/widget', component: __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */] },
    { path: 'user/:userId/website/:websiteId/page/:pageId/widget/new', component: __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */] },
    { path: 'user/:userId/website/:websiteId/page/:pageId/widget/:widgetId', component: __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid/flickr', component: __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__["a" /* FlickrImageSearchComponent */] }
];
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);


/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"..\" class=\"cl-text-black cl-icon-padding\">\n          <span class=\"glyphicon glyphicon-chevron-left\">\n          </span>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a (click)=\"updatePage()\" routerLink=\"..\" class=\"cl-icon-padding cl-text-black\">\n          <span class=\"glyphicon glyphicon-ok\">\n          </span>\n      </a>\n    </div>\n    <a class=\"navbar-brand cl-text-white cl-text-bold\" routerLink=\".\">\n      Edit Page\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"page-name\">Name</label>\n      <input [(ngModel)]=\"page.name\" type=\"text\" class=\"form-control\" id=\"page-name\" placeholder=\"Page Name\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"page-title\">Description</label>\n      <input [(ngModel)]=\"page.description\" type=\"text\" class=\"form-control\" id=\"page-title\" placeholder=\"Page Title\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  </form>\n  <a class=\"btn btn-danger  btn-block\" (click)=\"deletePage()\">Delete</a>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n      <a routerLink=\"/user/{{uid}}\" class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PageEditComponent = /** @class */ (function () {
    function PageEditComponent(pageService, userservice, websiteService, activatedRoute, router) {
        this.pageService = pageService;
        this.userservice = userservice;
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.page = { _id: '', name: '', websiteId: '', description: '' };
        this.pages = [];
    }
    // updatePage() {
    //   this.pageService .updatePage(this.page._id, this.page).subscribe(
    //     (page: Page) => {
    //       this.page = page;
    //       let url: any = '/user/' + this.uid + '/website/' + this.wid + '/page';
    //       this.router.navigate([url]);
    //     },
    //     (error: any) => {
    //       console.log(error);
    //     }
    //   );
    // }
    // 用这个方法捕捉不到pageId，返回的时候找不到原页面
    PageEditComponent.prototype.updatePage = function () {
        var _this = this;
        this.pageService.updatePage(this.page._id, this.page).subscribe(function (page) {
            _this.page = page;
            _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
            console.log(_this.page);
        });
    };
    PageEditComponent.prototype.deletePage = function () {
        var _this = this;
        console.log(this.page._id);
        this.pageService.deletePage(this.page._id).subscribe(function () {
            _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
        });
    };
    // ngOnInit() {
    //   this.activatedRoute.params.subscribe(
    //     (params: any) => {
    //       this.uid = params['userId'];
    //       this.pid = params['pageId'];
    //       // this.wid = params['websiteId'];
    //       // this.pid = params['pid'];
    //     }
    //   );
    //   this.page = this.pageService.findPageById(this.pid);
    //   console.log(this.page);
    // }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.pageService.findPageById(params['pageId']).subscribe(function (page) {
                _this.page = page;
            });
        });
    };
    PageEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-edit',
            template: __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], PageEditComponent);
    return PageEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/{{uid}}/website\" class=\"cl-text-black cl-icon-padding\">\n          <span class=\"glyphicon glyphicon-chevron-left\">\n          </span>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/new\" class=\"cl-icon-padding cl-text-black\">\n          <span class=\"glyphicon glyphicon-plus\">\n          </span>\n      </a>\n    </div>\n    <a class=\"navbar-brand cl-text-white cl-text-bold\" routerLink=\".\">\n      Pages\n    </a>\n  </div>\n</nav>\n\n<div class=\"container-fluid cl-container-padding\">\n  <!--<div class=\"row extra-padding\">-->\n\n    <!--<ul class=\"list-group cl-list-group-borderless\" *ngFor=\"let page of pages\">-->\n      <!--<li class=\"list-group-item cl-list-item-borderless\">-->\n        <!--<a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{page._id}}\"><span class=\"glyphicon glyphicon-cog pull-right\"></span></a>-->\n        <!--<a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{page._id}}/widget\">{{page.name}}</a>-->\n      <!--</li>-->\n    <!--</ul>-->\n  <!--</div>-->\n\n  <div class=\"row extra-padding\" *ngFor=\"let page of pages\">\n    <a class=\"extra-left-padding\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{page._id}}/widget\">{{page.name}}</a>\n    <a class=\"pull-right\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{page._id}}\">\n      <i class=\"glyphicon glyphicon-cog text-primary extra-right-padding\"></i>\n    </a>\n  </div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n      <a routerLink=\"/user/{{uid}}\" class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PageListComponent = /** @class */ (function () {
    function PageListComponent(pageService, userService, websiteService, activatedRoute) {
        this.pageService = pageService;
        this.userService = userService;
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        // page: Page;
        this.pages = [];
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.websiteService.findWebsiteById(params['websiteId']).subscribe(function (website) {
                console.log('page list userid= ' + params['userId']);
                console.log('website user =' + website._user);
                if (website._user === params['userId']) {
                    console.log('pagelist come here');
                    _this.wid = params['websiteId'];
                    _this.uid = params['userId'];
                    _this.pageService.findPageByWebsiteId(_this.wid).subscribe(function (pages) {
                        _this.pages = pages;
                        console.log('pages length' + pages.length);
                    }, function (error) {
                        console.log(error);
                    });
                }
                else {
                    console.log('User ID does not match.');
                }
            }, function (error) {
                console.log(error);
            });
        });
    };
    PageListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-list',
            template: __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], PageListComponent);
    return PageListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page\" class=\"cl-text-black cl-icon-padding\">\n          <span class=\"glyphicon glyphicon-chevron-left\">\n          </span>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <!--<a (click)=\"createWebsite()\" routerLink=\"/user/{{uid}}/website/{{website._id}}/page\" class=\"cl-icon-padding cl-text-black\">-->\n      <a (click)=\"createPage(newPage)\" class=\"cl-icon-padding cl-text-black\">\n          <span class=\"glyphicon glyphicon-ok\">\n          </span>\n      </a>\n    </div>\n    <a class=\"navbar-brand cl-text-white cl-text-bold\" href=\"#\">\n      New Page\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input [(ngModel)]=\"newPage.name\" type=\"text\" class=\"form-control\" name=\"name\" id=\"name\" placeholder=\"Page Name\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n    <div class=\"form-group-pagenew\">\n      <label for=\"title\">Title</label>\n      <input [(ngModel)]=\"newPage.title\" type=\"text\" class=\"form-control\" name=\"title\" id=\"title\" placeholder=\"Page Title\" ngModel required>\n    </div>\n      <div class=\"form-group\">\n      <label for=\"description\">Description</label>\n      <input [(ngModel)]=\"newPage.description\" type=\"text\" class=\"form-control\" name=\"description\" id=\"description\" placeholder=\"Page Description\" ngModel required>\n      </div>\n  </form>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n      <a routerLink=\"/user/{{uid}}\" class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_page_model_client__ = __webpack_require__("../../../../../src/app/models/page.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PageNewComponent = /** @class */ (function () {
    function PageNewComponent(pageService, websiteService, userService, activatedRoute, router) {
        this.pageService = pageService;
        this.websiteService = websiteService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pages = [];
        this.newPage = {};
    }
    // createPage(websiteId: String, page: Page) {
    //   const createdPage = new Page(String(this.pages.length + 1), page.name, websiteId, page.description);
    //   this.pages.push(createdPage);
    //   return this.copyPage(createdPage);
    // }
    PageNewComponent.prototype.copyPage = function (page) {
        if (!page) {
            return undefined;
        }
        return new __WEBPACK_IMPORTED_MODULE_2__models_page_model_client__["a" /* Page */](page._id, page.name, page.websiteId, page.description);
    };
    // ngOnInit() {
    //   this.activatedRoute.params.subscribe((params: any) => {
    //     this.uid = params['userId'];
    //     this.wid = params['websiteId'];
    //   });
    // }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.websiteService.findWebsiteById(params['websiteId']).subscribe(function (website) {
                if (website._user === params['userId']) {
                    _this.wid = params['websiteId'];
                    _this.uid = params['userId'];
                }
                else {
                    console.log('User ID does not match.');
                }
            }, function (error) {
                console.log(error);
            });
        });
    };
    PageNewComponent.prototype.createPage = function (page) {
        var _this = this;
        console.log('page new create method');
        console.log('page name= ' + page.name);
        this.pageService.createPage(this.wid, page).subscribe(function (page) {
            var url = '/user/' + _this.uid + '/website/' + _this.wid + '/page';
            _this.router.navigate([url]);
        });
    };
    PageNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-new',
            template: __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */],
            __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_5__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], PageNewComponent);
    return PageNewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Login</h1>\n\n  <!-- generate error message when there are input errors -->\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <!-- using angular form (ngForm) instead of traditional <input> tag -->\n  <form (ngSubmit) = \"login(username,password)\" #f=\"ngForm\">\n\n    <div class=\"form-group\">\n      <input [(ngModel)]=\"username\" type=\"text\" name=\"username\" placeholder=\"username\" class=\"form-control\">\n    </div>\n    <!--<span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">-->\n      <!--Please enter username!-->\n    <!--</span>-->\n\n    <!--<label for=\"password\">Password</label>-->\n    <!--<input placeholder=\"password\" name=\"password\" type=\"password\" class=\"form-control\" id=\"password\" ngModel required #password=\"ngModel\"/>-->\n    <!--<span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">-->\n      <!--Please enter password!-->\n    <!--</span>-->\n    <div class=\"form-group\">\n      <input [(ngModel)]=\"password\" type=\"password\" name=\"password\" placeholder=\"password\" class=\"form-control\">\n    </div>\n\n    <div class=\"form-group\">\n    <button class=\"btn btn-primary btn-block\" type=\"submit\">Login</button>\n    </div>\n\n    <div class=\"form-group\">\n    <button class=\"btn btn-success btn-block\" routerLink=\"/register\">Register</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, activatedRoute, router) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        // users: User[] = [];
        this.errorMsg = 'Invalid username or password !';
    }
    // login() {
    //   console.log('ddddhhhhh');
    //   this.username = this.loginForm.value.username;
    //   this.password = this.loginForm.value.password;
    //
    //   this.userService.findUserByCredentials(this.username, this.password)
    //     .subscribe((user: User) => {
    //         this.errorFlag = false;
    //         console.log('username+  ' + this.username);
    //         this.router.navigate(['/user', user._id]);
    //       },
    //       (error: any) => {
    //         this.errorFlag = true;
    //         this.errorMsg = error;
    //       }
    //     );
    // }
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        // if (username.trim() === '') {
        //   this.errorMsg = 'Username cannot be empty';
        //   this.errorFlag = true;
        // }
        // if (password.trim() === '') {
        //   this.errorMsg = 'Password cannot be empty';
        //   this.errorFlag = true;
        // }
        // this.username = this.loginForm.value.username;
        // this.password = this.loginForm.value.password;
        // console.log(this.username);
        // console.log(this.password);
        alert(this.username);
        if (!this.errorFlag) {
            console.log(this.username);
            console.log(this.password);
            this.userService.findUserByCredentials(this.username, this.password)
                .subscribe(function (user) {
                console.log('message1');
                // this.errorFlag = false;
                console.log(user);
                _this.router.navigate(['/user', user._id]);
            }, function (error) {
                _this.errorFlag = true;
                // this.errorMsg = 'Invalid username or password !';
                _this.errorMsg = error;
                console.log('this is error message = ' + _this.errorMsg);
            });
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.errorFlag = false;
        // this.errorMsg = 'This is Login Page';
        // this.errorFlag = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* NgForm */])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-fixed-top navbar-light bg-primary\">\n  <div *ngIf=\"infoFlag\" class=\"alert alert-success\">\n    {{infoMsg}}\n  </div>\n  <div class=\"navbar-brand text-white font-weight-bold\">\n    Profile\n  </div>\n  <a class=\"navbar-brand btn pull-right\" (click)=\"updateUser(user)\">\n    <span class=\"glyphicon glyphicon-ok text-white\"></span>\n  </a >\n</nav>\n\n<div class=\"container\">\n  <!--<div *ngIf=\"infoFlag\" class=\"alert alert-success\">-->\n    <!--{{infoMsg}}-->\n  <!--</div>-->\n  <form>\n    <div class=\"form-group\">\n    <label for=\"username\">Username</label>\n    <input [(ngModel)]=\"user.username\" type=\"text\" name=\"username\" class=\"form-control\" id=\"username\" placeholder=\"username\">\n    </div>\n\n    <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input [(ngModel)]=\"user.password\" type=\"password\" name=\"password\" class=\"form-control\" id=\"password\" placeholder=\"password\">\n    </div>\n\n    <div class=\"form-group\">\n    <label for=\"firstname\">First Name</label>\n    <input [(ngModel)]=\"user.firstName\" type=\"text\" name=\"firstname\" class=\"form-control\" id=\"firstname\" placeholder=\"first name\">\n    </div>\n\n    <div class=\"form-group\">\n    <label for=\"lastname\">Last Name</label>\n    <input [(ngModel)]=\"user.lastName\" type=\"text\" name=\"lastname\" class=\"form-control\" id=\"lastname\" placeholder=\"last name\">\n    </div>\n\n    <div class=\"form-group\">\n    <label for=\"email\">Email</label>\n    <input [(ngModel)]=\"user.email\" type=\"email\" name=\"email\" id = \"email\" placeholder=\"jannunzi@gmail.com\" class=\"form-control\">\n    </div>\n\n    <div class=\"form-group\">\n    <label for=\"phone\">Phone</label>\n    <input [(ngModel)]=\"user.phone\" type=\"tel\" name=\"phone\" id=\"phone\" placeholder=\"2061234567\" class=\"form-control\">\n    </div>\n\n    <div class=\"form-group\">\n    <a class=\"btn btn-primary btn-block\" routerLink=\"/user/{{uid}}/website\">Websites</a>\n    </div>\n\n    <div class=\"form-group\">\n      <a (click)=\"deleteUser()\" class=\"btn btn-warning btn-block\">Delete User</a>\n    </div>\n\n    <div class=\"form-group\">\n    <a class=\"btn btn-danger  btn-block\"\n     routerLink=\"/login\">Logout</a>\n    </div>\n  </form>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom cl-blue-navbar\">\n  <div class=\"container-fuild\">\n    <a routerLink=\"/user/{{uid}}\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, activatedRoute, router) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.user = {};
        this.errorMsg = 'update success !';
    }
    ProfileComponent.prototype.updateUser = function (updatedUser) {
        var _this = this;
        this.userService.updateUser(this.uid, updatedUser).subscribe(function (user) {
            _this.errorFlag = false;
            _this.user = user;
        }, function (error) {
            _this.errorFlag = true;
            _this.errorMsg = error;
        });
    };
    ProfileComponent.prototype.deleteUser = function () {
        var _this = this;
        this.userService.deleteUser(this.uid).subscribe(function (user) {
            var url = '/login';
            _this.router.navigate([url]);
        }, function (error) {
            _this.errorFlag = true;
            _this.errorMsg = error;
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['userId'];
            return _this.userService.findUserById(_this.uid).subscribe(function (user) {
                _this.user = user;
            }, function (error) {
                _this.errorFlag = true;
                _this.errorMsg = error.toString();
            });
        });
        console.log(this.user);
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <!--<a class=\"cl-text-white navbar-brand cl-text-bold cl-text-padding\" routerLink=\"/profile/{{user._id}}\">-->\n    <h1>Register</h1>\n  <!--</a>-->\n</div>\n\n<div class=\"container\">\n  <div *ngIf=\"InfoFlag\" class=\"alert alert-success\">\n  {{infoMSG}}\n  </div>\n\n  <form (ngSubmit)=\"register(username, password, verifyPassword)\" #f=\"ngForm\">\n  <div class=\"form-group\">\n    <!--<label for=\"username\">Username</label>-->\n    <!--<input type=\"text\" name=\"username\" class=\"form-control\" id=\"username\" placeholder=\"username\" ngModel required #username=\"ngModel\" >-->\n    <input [(ngModel)]=\"username\" type=\"text\" name=\"username\" class=\"form-control\" id=\"username\" placeholder=\"username\" [ngModelOptions]=\"{standalone: true}\">\n  </div>\n\n  <!--<div class=\"form-group\">-->\n    <!--<label for=\"password\">Password</label>-->\n    <!--<input [(ngModel)]=\"user.password\" type=\"password\" name=\"password\" class=\"form-control\" id=\"password\" placeholder=\"password\" [ngModelOptions]=\"{standalone: true}\"/>-->\n  <!--</div>-->\n\n    <!--<div class=\"form-group\">-->\n    <!--<label for=\"verifypas\">Verify Password</label>-->\n    <!--<input [(ngModel)]=\"verifypas\" type=\"password\" name=\"verifypas\" class=\"form-control\" id=\"verifypas\" placeholder=\"verify password\" [ngModelOptions]=\"{standalone: true}\"/>-->\n    <!--</div>-->\n\n    <!--<button class=\"btn btn-primary btn-block\" routerLink=\"/user/{{userId}}\" (click)=\"register()\">Register</button>-->\n    <!--<button class=\"btn btn-danger  btn-block\"-->\n    <!--routerLink=\"/login\">Cancel</button>-->\n\n  <div class=\"form-group\">\n    <input [(ngModel)]=\"password\" type=\"password\" name=\"password\" placeholder=\"password\" class=\"form-control\">\n  </div>\n  <!--<span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">-->\n      <!--Please enter username!-->\n    <!--</span>-->\n\n  <div class=\"form-group\">\n    <input [(ngModel)]=\"verifypas\" type=\"password\" name=\"verifyPassword\" placeholder=\"verify password\" class=\"form-control\">\n  </div>\n  <!--<span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">-->\n      <!--Please enter password!-->\n    <!--</span>-->\n  <!--<div class=\"form-group\">-->\n    <!--<input type=\"password\" name=\"verifypas\" placeholder=\"verify password\" class=\"form-control\" ngModel required #verifyPassword=\"ngModel\">-->\n  <!--</div>-->\n  <!--<span class=\"help-block\" *ngIf=\"!verifyPassword.valid && verifyPassword.touched\">-->\n      <!--Please enter verify password!-->\n    <!--</span>-->\n\n    <div class=\"form-group\">\n      <button  class=\"btn btn-primary btn-block\">Register</button>\n    </div>\n    <div class=\"form-group\">\n      <a [routerLink]=\"['/login']\" class=\"btn btn-danger btn-block\">Cancel</a>\n    </div>\n\n</form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    // users: User[] = [];
    // uid: String;
    function RegisterComponent(userService, router, activatedRoute) {
        this.userService = userService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.user = {};
    }
    RegisterComponent.prototype.register = function (username, password, verifyPassword) {
        var _this = this;
        this.errorFlag = false;
        if (username.trim() === '') {
            this.errorMsg = 'Username cannot be empty';
            this.errorFlag = true;
        }
        if (password.trim() === '') {
            this.errorMsg = 'Password cannot be empty';
            this.errorFlag = true;
        }
        if (this.password !== this.verifypas) {
            this.errorMsg = 'Password and Verify Password do not match.';
            this.errorFlag = true;
        }
        if (!this.errorFlag) {
            this.user.username = username;
            this.user.password = password;
            this.userService.createUser(this.user).subscribe(function (user) {
                _this.errorFlag = false;
                _this.router.navigate(['/user', user._id]);
            }, function (error) {
                _this.errorFlag = true;
                _this.errorMsg = error;
            });
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */])
    ], RegisterComponent.prototype, "registerForm", void 0);
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top cl-blue-navbar\">\n  <div class=\"row\">\n    <div class=\"col-xs-4 hidden-xs\">\n      <div class=\"container-fluid\">\n        <p class=\"navbar-text pull-left\">\n          <a routerLink=\"/user/{{webDeveloperId}}/website/\" class=\"navbar-link cl-text-white\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a >\n        </p >\n        <a class=\"cl-text-white navbar-brand cl-text-bold\" routerLink=\".\">\n          Websites\n        </a >\n        <a routerLink=\".\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a >\n      </div>\n    </div>\n    <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8\">\n      <div class=\"container-fluid\">\n        <a class=\"cl-text-white navbar-brand cl-text-bold\" routerLink=\"/user/{{webDeveloperId}}/website/\">\n          Edit Websites\n        </a >\n        <a (click)=\"updateWebsite(updatedWebsite)\" routerLink=\"..\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </a >\n      </div>\n    </div>\n  </div>\n</nav>\n\n<div class=\"contain-fluid\">\n    <ul class=\"list-group cl-list-group-borderless\">\n      <li *ngFor = \"let websiteLi of websites\" class=\"list-group-item cl-list-item-borderless\">\n        <a routerLink=\"../{{websiteLi._id}}\"><span class=\"glyphicon glyphicon-cog pull-right\"></span></a >\n        <a routerLink=\"../{{websiteLi._id}}/page\">{{websiteLi.name}}</a>\n      </li>\n    </ul>\n</div>\n  <!--<div class=\"col-xs-8 borders\">-->\n  <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8 borders\">\n    <form>\n      <div class=\"form-group cl-8-top\">\n        <div class=\"form-group\">\n          <label for=\"website-name\">Website Name</label>\n          <input [(ngModel)]=\"updatedWebsite.name\" type=\"text\" class=\"form-control\" id=\"website-name\" placeholder=\"website name\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n      </div>\n      <div class=\"form-group cl-8-top\">\n        <div class=\"form-group\">\n          <label for=\"website-description\">Website Description</label>\n          <textarea [(ngModel)]=\"updatedWebsite.description\" id=\"website-description\" class=\"form-control\" rows=\"5\"\n                  placeholder=\"description\" [ngModelOptions]=\"{standalone: true}\"></textarea>\n        </div>\n      </div>\n      <a (click)=\"deleteWebsite()\" class=\"btn btn-danger btn-block cl-8-top\">Delete</a >\n    </form>\n  </div>\n\n<nav class=\"navbar navbar-fixed-bottom cl-blue-navbar\">\n  <div class=\"container-fuild\">\n    <a routerLink=\"/user/{{webDeveloperId}}\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a >\n  </div>\n</nav>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsiteEditComponent = /** @class */ (function () {
    function WebsiteEditComponent(websiteService, activatedRoute, router) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.updatedWebsite = {};
    }
    WebsiteEditComponent.prototype.updateWebsite = function (website) {
        var _this = this;
        this.websiteService.updateWebsite(this.wid, website).subscribe(function (website) {
            _this.updatedWebsite = website;
            var url = '/user/' + _this.webDeveloperId + '/website';
            _this.router.navigate([url]);
        });
        console.log(this.wid);
    };
    WebsiteEditComponent.prototype.deleteWebsite = function () {
        var _this = this;
        this.websiteService.deleteWebsite(this.wid).subscribe(function () {
            var url = '/user/' + _this.webDeveloperId + '/website';
            _this.router.navigate([url]);
        });
    };
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.websiteService.findWebsiteById(params['websiteId']).subscribe(function (website) {
                _this.wid = website._id;
                _this.webDeveloperId = website._user;
                _this.updatedWebsite = website;
            }, function (error) {
                _this.errorMsg = error;
            });
            _this.websiteService.findWebsitesByUser(params['userId']).subscribe(function (websites) {
                _this.websites = websites;
            }, function (error) {
                _this.errorMsg = error;
            });
        });
    };
    WebsiteEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-website-edit',
            template: __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], WebsiteEditComponent);
    return WebsiteEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top cl-blue-navbar\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/{{uid}}\" class=\"navbar-link cl-text-white\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n    <a class=\"cl-text-white navbar-brand cl-text-bold\" routerLink=\".\">\n      Websites\n    </a>\n    <a routerLink=\"/user/{{uid}}/website/new\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\n      <span class=\"glyphicon glyphicon-plus\"></span>\n    </a>\n  </div>\n</nav>\n\n\n<div class=\"container-fluid cl-container-padding\">\n  <div class=\"row extra-padding\">\n\n    <ul class=\"list-group cl-list-group-borderless\" *ngFor=\"let website of websites\">\n      <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"/user/{{uid}}/website/{{website._id}}\"><span class=\"glyphicon glyphicon-cog pull-right\"></span></a>\n      <a routerLink=\"/user/{{uid}}/website/{{website._id}}/page\">{{website.name}}</a>\n      </li>\n    </ul>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom cl-blue-navbar\">\n  <div class=\"container-fuild\">\n    <a routerLink=\"/user/{{uid}}\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsiteListComponent = /** @class */ (function () {
    function WebsiteListComponent(websiteService, activatedRoute) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.websites);
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.uid = (params['userId']);
            console.log('this.uid= ' + _this.uid);
            return _this.websiteService.findWebsitesByUser(_this.uid).subscribe(function (websites) {
                _this.websites = websites;
                console.log(_this.websites.length);
            });
        });
    };
    WebsiteListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-website-list',
            template: __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], WebsiteListComponent);
    return WebsiteListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-light bg-primary\">\n  <div class=\"col-xs-5 hidden-xs\">\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/{{uid}}/website\" class=\"navbar-link text-white\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </div>\n\n    <div class=\"text-white navbar-brand font-weight-bold\" [routerLink]=\"['/#']\">\n      Websites\n    </div>\n    <a [routerLink]=\"['/#']\" class=\"navbar-link navbar-text pull-right text-white\">\n      <span class=\"glyphicon glyphicon-plus\"></span>\n    </a>\n\n  </div>\n  <div class=\"col-xs-7\">\n    <div class=\"navbar-text pull-left visible-xs\">\n      <a routerLink=\"/user/{{uid}}/website/\" class=\"navbar-link text-white\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </div>\n    <div class=\"text-white navbar-brand font-weight-bold\" [routerLink]=\"['/#']\">\n      New Website\n    </div>\n    <a (click)=\"createWebsite(newWebsite)\" class=\"navbar-link navbar-text pull-right text-white\">\n      <span class=\"glyphicon glyphicon-ok\"></span>\n    </a>\n\n  </div>\n</nav>\n\n<div class=\"col-xs-4 hidden-xs cl-body-padding cl-full-height\">\n\n  <div *ngFor=\"let website of websites\" class=\"row extra-padding\">\n    <a class=\"cl-left-padding\" routerLink=\"/user/{{uid}}/website/{{website._id}}/page\">{{website.name}}</a>\n    <a class=\"pull-right\" routerLink=\"/user/{{uid}}/website/{{website._id}}\">\n      <i class=\"glyphicon glyphicon-cog text-primary\"></i>\n    </a>\n  </div>\n\n</div>\n\n<div class=\"col-xs-1 hidden-xs cl-full-height cl-right-divider\"></div>\n\n<div class=\"col-xs-7 cl-body-padding\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input [(ngModel)]=\"newWebsite.name\" type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" placeholder=\"Name\" ngModel required>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"description\">Description</label>\n      <textarea [(ngModel)]=\"newWebsite.description\" id=\"description\" name=\"description\" class=\"form-control\" rows=\"5\" placeholder=\"Description\"></textarea>\n    </div>\n  </form>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom navbar-light bg-primary\">\n  <a class=\"navbar-brand pull-right\" routerLink=\"/user/{{uid}}\">\n    <i class=\"glyphicon glyphicon-user text-white\"></i>\n  </a>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsiteNewComponent = /** @class */ (function () {
    function WebsiteNewComponent(websiteService, activatedRoute, router) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.newWebsite = {};
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['userId'];
            _this.websiteService.findWebsitesByUser(_this.uid).subscribe(function (websites) {
                _this.websites = websites;
            });
        });
    };
    WebsiteNewComponent.prototype.createWebsite = function (website) {
        var _this = this;
        if (website.name != null
            && website.description != null
            && website.name.trim() !== ''
            && website.description.trim() !== '') {
            this.websiteService.createWebsite(this.uid, website).subscribe(function (website) {
                var url = '/user/' + _this.uid + '/website';
                _this.router.navigate([url]);
            }, function (error) {
            });
        }
    };
    WebsiteNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-website-new',
            template: __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], WebsiteNewComponent);
    return WebsiteNewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-light bg-secondary\">\n  <a class=\"btn navbar-brand\" routerLink=\"..\">\n    <span class=\"glyphicon glyphicon-chevron-left text-dark\"></span>\n  </a>\n  <div class=\"navbar-brand font-weight-bold\">\n    Widget chooser\n  </div>\n  <a class=\"btn navbar-brand pull-right\" routerLink=\"./new\">\n    <span class=\"glyphicon glyphicon-plus text-dark\"></span>\n  </a>\n</nav>\n\n<div class=\"container-fluid cl-container-padding\">\n  <ul class=\"list-group cl-list-group-borderless\">\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a (click)=\"createWidget('HEADER')\">Header</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\".\">Label</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a (click)=\"createWidget('HTML')\">HTML</a>\n      <!--<a routerLink=\"../html\">HTML</a>-->\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a (click)=\"createWidget('TEXT')\">Text</a>\n      <!--<a routerLink=\"../text\">Text</a>-->\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <!--<a (click)=\"createWidget('LINK')\" )></a>-->\n      <a routerLink=\".\">Link</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\".\">Button</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a (click)=\"createWidget('IMAGE')\">Image</a>\n      <!--<a routerLink=\"../image\">Image</a>-->\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a (click)=\"createWidget('YOUTUBE')\">YOUTUBE</a>\n      <!--<a routerLink=\"../youtube\">YouTube</a>-->\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\".\">Data Table</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\".\">Repeater</a>\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n      <a routerLink=\"../../../../../..\" class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChooserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WidgetChooserComponent = /** @class */ (function () {
    // newWidget: Widget = {
    //   _id: '', widgetType: '', name: '', pageId: '', size: '1', text: '', url: '', width: '100%',
    //   height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: ''
    // };
    function WidgetChooserComponent(widgetService, userService, websiteService, pageService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.userService = userService;
        this.websiteService = websiteService;
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.pageService.findPageById(params['pageId']).subscribe(function (page) {
                if (page._website === params['websiteId']) {
                    _this.websiteService.findWebsiteById(page._website).subscribe(function (website) {
                        if (website._user === params['userId']) {
                            _this.uid = params['userId'];
                            _this.wid = params['websiteId'];
                            _this.pid = params['pageId'];
                            _this.widgetService.findWidgetsByPageId(_this.pid).subscribe(function (widgets) {
                                _this.widgets = widgets;
                            });
                        }
                        else {
                            console.log('User ID does not match.');
                        }
                    });
                }
                else {
                    console.log('Website ID does not match.');
                }
            });
        });
    };
    WidgetChooserComponent.prototype.createWidget = function (widgetType) {
        var _this = this;
        var newWidget = {
            type: widgetType, name: 'name', size: 1, width: '30%',
            height: '30%', rows: 0, deletable: false, formatted: false, placeholder: '',
            position: this.widgets.length
        };
        this.widgetService.createWidget(this.pid, newWidget).subscribe(function (widget) {
            var url = '/user/' + _this.uid + '/website/' + _this.wid + '/page/' + _this.pid + '/widget/' + widget._id;
            _this.router.navigate([url]);
        }, function (error) {
            console.log(error);
        });
    };
    WidgetChooserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-chooser',
            template: __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_5__services_page_service_client__["a" /* PageService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], WidgetChooserComponent);
    return WidgetChooserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.html":
/***/ (function(module, exports) {

module.exports = "+<div [ngSwitch]=\"widget.type\">\n<!--<div [ngSwitch]=\"123\">-->\n\n  <div *ngSwitchCase=\"'HEADER'\">\n    <app-widget-header></app-widget-header>\n  </div>\n\n  <div *ngSwitchCase=\"'IMAGE'\">\n    <app-widget-image></app-widget-image>\n  </div>\n\n  <div *ngSwitchCase=\"'YOUTUBE'\">\n    <app-widget-youtube></app-widget-youtube>\n  </div>\n\n  <div *ngSwitchCase=\"'HTML'\">\n    <app-widget-html></app-widget-html>\n  </div>\n\n  <div *ngSwitchCase=\"'TEXT'\">\n    <app-widget-text></app-widget-text>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WidgetEditComponent = /** @class */ (function () {
    function WidgetEditComponent(widgetService, pageService, websiteService, userService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.pageService = pageService;
        this.websiteService = websiteService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widget = {};
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.wgid = (params['widgetId']);
            _this.pid = params['pageId'];
            _this.uid = params['userId'];
            _this.wid = params['websiteId'];
            console.log('widget edit wgid = ' + _this.wgid);
            console.log('widget edit pid = ' + _this.pid);
            console.log('widget edit uid = ' + _this.uid);
            console.log('widget edit wid = ' + _this.wid);
            // new
            _this.widget = _this.widgetService.dumpWidget();
            if (_this.wgid === 'heading') {
                _this.widget.widgetType = 'HEADING';
            }
            else if (_this.wgid === 'image') {
                _this.widget.widgetType = 'IMAGE';
            }
            else if (_this.wgid === 'youtube') {
                _this.widget.widgetType = 'YOUTUBE';
            }
            else if (_this.wgid === 'text') {
                _this.widget.widgetType = 'TEXT';
            }
            else if (_this.wgid === 'html') {
                _this.widget.widgetType = 'HTML';
                // update
            }
            else {
                _this.widgetService.findWidgetById(_this.wgid).subscribe(function (widget) {
                    _this.widget = widget;
                    console.log(_this.widget);
                });
            }
        });
    };
    WidgetEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-edit',
            template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */],
            __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_5__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], WidgetEditComponent);
    return WidgetEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"..\" class=\"cl-text-black cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-chevron-left\">\n        </span>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a (click)=\"updateOrCreateWidget()\" class=\"cl-icon-padding cl-text-black\">\n        <span class=\"glyphicon glyphicon-ok\">\n        </span>\n      </a>\n    </div>\n    <a class=\"navbar-brand cl-text-white cl-text-bold\" routerLink=\".\">\n      Widgets Edit\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"heading-name\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"heading-name\" placeholder=\"Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"heading-text\">Text</label>\n      <input [(ngModel)]=\"widget.text\" type=\"text\" class=\"form-control\" id=\"heading-text\" placeholder=\"Text\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"heading-size\">Size</label>\n      <input [(ngModel)]=\"widget.size\" type=\"text\" class=\"form-control\" id=\"heading-size\" placeholder=\"Heading Size\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  </form>\n  <a class=\"btn btn-danger  btn-block\" (click)=\"deleteWidget()\">Delete</a>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n      <a routerLink=\"../../../../../..\" class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WidgetHeaderComponent = /** @class */ (function () {
    function WidgetHeaderComponent(widgetService, pageService, websiteService, userService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.pageService = pageService;
        this.websiteService = websiteService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widget = {};
    }
    WidgetHeaderComponent.prototype.updateOrCreateWidget = function () {
        var _this = this;
        console.log('create widget = ' + this.widget._id);
        if (!this.widget._id) {
            console.log('widget header pid = ' + this.pid);
            this.widgetService.createWidget(this.pid, this.widget).subscribe(function (widget) {
                _this.widget = widget;
                _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
                console.log(_this.widget);
            });
        }
        else {
            this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(function () {
                _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
            });
        }
    };
    WidgetHeaderComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.wgid).subscribe(function (widget) {
            var url = '/user/' + _this.uid + '/website/' + _this.wid + '/page/' + _this.pid + '/widget';
            _this.router.navigate([url]);
        }, function (error) {
            console.log(error);
        });
    };
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('from 63');
        this.activatedRoute.params.subscribe(function (params) {
            console.log('from 66');
            _this.widgetService.findWidgetById(params.widgetId).subscribe(function (widget) {
                console.log('from 69');
                if (widget._page === params.pageId) {
                    console.log('from 71');
                    _this.pageService.findPageById(widget._page).subscribe(function (page) {
                        console.log('from 74');
                        if (page._website === params.websiteId) {
                            console.log('from 76');
                            _this.websiteService.findWebsiteById(page._website).subscribe(function (website) {
                                if (website._user === params.userId) {
                                    console.log('from 80');
                                    _this.uid = params.userId;
                                    _this.wid = params.websiteId;
                                    _this.pid = params.pageId;
                                    _this.wgid = params.widgetId;
                                    _this.widget = widget;
                                    console.log('uid = ' + _this.uid);
                                    console.log('wid = ' + _this.wid);
                                    console.log('pid = ' + _this.pid);
                                    console.log('wgid = ' + _this.wgid);
                                    console.log('widget header = ' + _this.widget.widgetType);
                                }
                                else {
                                    console.log('User ID does not match.');
                                }
                            });
                        }
                        else {
                            console.log('Website ID does not match.');
                        }
                    });
                }
            });
        });
    };
    WidgetHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-header',
            template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */],
            __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_5__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], WidgetHeaderComponent);
    return WidgetHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-light bg-secondary\">\n  <a class=\"btn navbar-brand\" routerLink=\"..\">\n    <span class=\"glyphicon glyphicon-chevron-left text-dark\"></span>\n  </a>\n  <div class=\"navbar-brand font-weight-bold\" routerLink=\".\">\n    Widget Edit {{widget.widgetType}}\n  </div>\n  <a class=\"btn navbar-brand pull-right\" (click)=\"updateOrCreateWidget()\">\n    <span class=\"glyphicon glyphicon-ok text-dark\"></span>\n  </a>\n</nav>\n<div class=\"container-fluid cl-body-padding\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input [(ngModel)]=\"widget.name\" id=\"name\" type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"html\">HTML</label>\n      <!-- <input [(ngModel)]=\"widget.text\" type=\"text\" class=\"form-control\" name=\"text\" placeholder=\"Text\"> -->\n      <quill-editor [(ngModel)]=\"widget.text\" name = \"text\" id=\"html\"></quill-editor>\n    </div>\n  </form>\n  <a (click)=\"deleteWidget()\" class=\"btn btn-block btn-danger\">Delete</a>\n</div>\n<nav class=\"navbar navbar-fixed-bottom navbar-light bg-secondary\">\n  <a class=\"btn navbar-brand pull-right\" routerLink=\"/user/{{uid}}\">\n    <span class=\"glyphicon glyphicon-user text-primary\"></span>\n  </a>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHtmlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WidgetHtmlComponent = /** @class */ (function () {
    function WidgetHtmlComponent(widgetService, pageService, websiteService, userService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.pageService = pageService;
        this.websiteService = websiteService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        // properties
        this.widget = {
            _id: '', widgetType: '', name: '', pageId: '', size: '1', text: '', url: '', width: '100%',
            height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: ''
        };
    }
    // ngOnInit() {
    //   this.activatedRoute.params.subscribe(
    //     params => {
    //       this.widgetService.findWidgetById(params['widgetId']).subscribe(
    //         (widget: Widget) => {
    //           if (widget.pageId === params['pageId']) {
    //             this.pageService.findPageById(widget.pageId).subscribe(
    //               (page: Page) => {
    //                 if (page.websiteId === params['websiteId']) {
    //                   this.websiteService.findWebsiteById(page.websiteId).subscribe(
    //                     (website: Website) => {
    //                       if (website.developerId === params['userId']) {
    //                         this.uid = params['userId'];
    //                         this.wid = params['websiteId'];
    //                         this.pid = params['pageId'];
    //                         this.wgid = params['widgetId'];
    //                         this.widget = widget;
    //                       } else {
    //                         console.log('User ID does not match.');
    //                       }
    //                     }
    //                   );
    //                 } else {
    //                   console.log('Website ID does not match.');
    //                 }
    //               }
    //             );
    //           }
    //         }
    //       );
    //     }
    //   );
    // }
    WidgetHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.wgid = params['widgetId'];
            _this.pid = params['pageId'];
            _this.uid = params['userId'];
            if (_this.wgid === 'html') {
                _this.widget = _this.widgetService.dumpWidget();
                _this.widget.widgetType = 'HTML';
            }
            else {
                _this.widgetService.findWidgetById(_this.wgid).subscribe(function (widget) {
                    _this.widget = widget;
                    console.log(_this.widget);
                });
            }
        });
    };
    WidgetHtmlComponent.prototype.updateOrCreateWidget = function () {
        var _this = this;
        if (!this.widget._id) {
            this.widgetService.createWidget(this.pid, this.widget).subscribe(function (widget) {
                _this.widget = widget;
                _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
                console.log(_this.widget);
            });
        }
        else {
            this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(function () {
                _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
            });
        }
    };
    WidgetHtmlComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widget._id).subscribe(function () {
            _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
        });
    };
    WidgetHtmlComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-html',
            template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */],
            __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_5__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], WidgetHtmlComponent);
    return WidgetHtmlComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Header-->\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <!--Left arrow-->\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widgetId}}\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n    <span>\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b>Search Flickr</b>\n        </a>\n      </p>\n    </span>\n  </div>\n</nav>\n\n<!--!!Material on the page!!-->\n<div class=\"container cl-body-padding\">\n  <div class=\"input-group\">\n    <input [(ngModel)]=\"searchText\" type=\"text\" class=\"form-control\">\n    <span class=\"input-group-btn\">\n      <a (click)=\"searchPhotos()\" class=\"btn btn-default\" type=\"button\">\n        <span class=\"glyphicon glyphicon-search\"></span>\n      </a>\n    </span>\n  </div>\n\n  <div class=\"row\">\n    <div *ngFor=\"let pic of photos['photo']\" class=\"col-xs-4\">\n      <img (click)=\"selectPhoto(pic)\" width=\"100%\" [src]=\"['https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '_s.jpg']\"\n      />\n      <p></p>\n    </div>\n  </div>\n\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <!--Play Symbol-->\n    <!--User Symbol-->\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/{{userId}}\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrImageSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_flickr_service_client__ = __webpack_require__("../../../../../src/app/services/flickr.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FlickrImageSearchComponent = /** @class */ (function () {
    function FlickrImageSearchComponent(flickrService, widgetService, pageService, websiteService, userService, router, activatedRoute) {
        this.flickrService = flickrService;
        this.widgetService = widgetService;
        this.pageService = pageService;
        this.websiteService = websiteService;
        this.userService = userService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.photos = [{ photo: '' }];
        this.searchText = '';
    }
    FlickrImageSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.widgetService.findWidgetById(params.wgid).subscribe(function (widget) {
                if (widget._page === params.pid) {
                    _this.pageService.findPageById(widget._page).subscribe(function (page) {
                        if (page._website === params.wid) {
                            _this.websiteService.findWebsiteById(page._website).subscribe(function (website) {
                                if (website._user === params.uid) {
                                    _this.userId = params.uid;
                                    _this.websiteId = params.wid;
                                    _this.pageId = params.pid;
                                    _this.widgetId = params.wgid;
                                    _this.widget = widget;
                                }
                                else {
                                    console.log('User ID does not match.');
                                }
                            });
                        }
                        else {
                            console.log('Website ID does not match.');
                        }
                    });
                }
            });
        });
    };
    FlickrImageSearchComponent.prototype.searchPhotos = function () {
        var _this = this;
        this.flickrService
            .searchPhotos(this.searchText)
            .subscribe(function (data) {
            var val = data._body;
            val = val.replace('jsonFlickrApi(', '');
            val = val.substring(0, val.length - 1);
            val = JSON.parse(val);
            _this.photos = val.photos;
        });
    };
    FlickrImageSearchComponent.prototype.selectPhoto = function (photo) {
        var _this = this;
        var url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
        url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
        this.widget.url = url;
        this.widgetService
            .updateWidget(this.widgetId, this.widget)
            .subscribe(function (data) {
            var result = data;
            if (result) {
                _this.router.navigate(['/user/' + _this.userId + '/website/' +
                        _this.websiteId + '/page/' + _this.pageId + '/widget/' + _this.widgetId]);
            }
            else {
                _this.error = 'failed!';
            }
        });
    };
    FlickrImageSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-flickr-image-search',
            template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_flickr_service_client__["a" /* FlickrService */],
            __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */],
            __WEBPACK_IMPORTED_MODULE_5__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_6__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], FlickrImageSearchComponent);
    return FlickrImageSearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"..\" class=\"cl-text-black cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-chevron-left\">\n        </span>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a (click)=\"updateOrCreateWidget()\" class=\"cl-icon-padding cl-text-black\">\n        <span class=\"glyphicon glyphicon-ok\">\n        </span>\n      </a>\n    </div>\n    <a class=\"navbar-brand cl-text-white cl-text-bold\" routerLink=\".\">\n      Widgets Edit {{widget.widgetType}}\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"image-name\"></label>\n      <input type=\"text\" class=\"form-control\" id=\"image-name\" placeholder=\"Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"image-text\">Text</label>\n      <input [(ngModel)]=\"widget.text\" type=\"text\" class=\"form-control\" id=\"image-text\" placeholder=\"Text\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"image-URL\">URL</label>\n      <input [(ngModel)]=\"widget.url\" type=\"text\" class=\"form-control\" id=\"image-URL\" placeholder=\"URL\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"image-width\">Width</label>\n      <input [(ngModel)]=\"widget.width\" type=\"text\" class=\"form-control\" id=\"image-width\" placeholder=\"Width percentage\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  </form>\n\n  <form ngNoForm action=\"{{baseUrl}}/api/upload\" method=\"post\" enctype=\"multipart/form-data\">\n    <label for=\"myFile\">Upload Image</label>\n    <input  name=\"myFile\" id=\"myFile\"  type=\"file\" class=\"form-control form-group\"/>\n    <input  name=\"widgetId\" value=\"{{widget._id}}\" style=\"display: none\"/>\n    <input  name=\"pageId\" value=\"{{pid}}\" style=\"display: none\"/>\n    <input  name=\"websiteId\" value=\"{{wid}}\" style=\"display: none\"/>\n    <input  name=\"userId\" value=\"{{uid}}\" style=\"display: none\"/>\n    <button type=\"submit\" class=\"btn btn-block btn-primary\">Upload Image</button>\n    <br/>\n  </form>\n\n  <a class=\"btn btn-primary btn-block \" [routerLink]=\"['/user/'+uid+'/website/'+wid+'/page/'+pid+'/widget/'+wgid+'/flickr']\">Choose From Flickr</a>\n  <a class=\"btn btn-danger btn-block\" (click)=\"deleteWidget()\">Delete</a>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n      <a routerLink=\"../../../../../..\" class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WidgetImageComponent = /** @class */ (function () {
    function WidgetImageComponent(widgetService, pageService, websiteService, userService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.pageService = pageService;
        this.websiteService = websiteService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widget = {};
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].baseUrl;
        this.activatedRoute.params.subscribe(function (params) {
            _this.wgid = params['widgetId'];
            _this.pid = params['pageId'];
            _this.wid = params['websiteId'];
            _this.uid = params['userId'];
            // if (this.wgid === 'image') {
            //   this.widget = this.widgetService.dumpWidget();
            //   this.widget.widgetType = 'IMAGE';
            // } else {
            _this.widgetService.findWidgetById(_this.wgid).subscribe(function (widget) {
                _this.widget = widget;
                console.log(_this.widget);
            });
            // }
        });
    };
    WidgetImageComponent.prototype.updateOrCreateWidget = function () {
        var _this = this;
        if (!this.widget._id) {
            this.widgetService.createWidget(this.pid, this.widget).subscribe(function (widget) {
                _this.widget = widget;
                _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
                console.log(_this.widget);
            });
        }
        else {
            this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(function () {
                _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
            });
        }
    };
    WidgetImageComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widget._id).subscribe(function (widget) {
            var url = '/user/' + _this.uid + '/website/' + _this.wid + '/page/' + _this.pid + '/widget';
            _this.router.navigate([url]);
        });
    };
    WidgetImageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-image',
            template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */],
            __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_5__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], WidgetImageComponent);
    return WidgetImageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"..\" class=\"cl-text-black cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-chevron-left\">\n        </span>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a (click)=\"updateOrCreateWidget()\" class=\"cl-icon-padding cl-text-black\">\n        <span class=\"glyphicon glyphicon-ok\">\n        </span>\n      </a>\n    </div>\n    <a class=\"navbar-brand cl-text-white cl-text-bold\" routerLink=\".\">\n      Widgets Edit\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"text-name\">Name</label>\n      <input [(ngModel)]=\"widget.name\" type=\"text\" class=\"form-control\" id=\"text-name\" placeholder=\"Name\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"text-text\">Text</label>\n      <input [(ngModel)]=\"widget.text\" type=\"text\" class=\"form-control\" id=\"text-text\" placeholder=\"Text\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"text-rows\">Rows</label>\n      <input [(ngModel)]=\"widget.rows\" type=\"number\" class=\"form-control\" name = \"rows\" id=\"text-rows\" placeholder=\"Rows\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"placeholder\">Placeholder</label>\n      <input [(ngModel)]=\"widget.placeholder\" id= \"placeholder\" name=\"placeholder\" class=\"form-control\" required/>\n      <p></p>\n      <input type=\"text\" readonly value=\"Formatted\" class=\"form-control\" />\n      <span class=\"input-group-addon\">\n        <input [(ngModel)]=\"widget.formatted\" name=\"formatted\" type=\"checkbox\" />\n      </span>\n    </div>\n  </form>\n  <a class=\"btn btn-danger btn-block\" (click)=\"deleteWidget()\">Delete</a>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n      <a routerLink=\"/user/{{uid}}\" class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WidgetTextComponent = /** @class */ (function () {
    function WidgetTextComponent(widgetService, pageService, websiteService, userService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.pageService = pageService;
        this.websiteService = websiteService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widget = {};
    }
    WidgetTextComponent.prototype.updateOrCreateWidget = function () {
        var _this = this;
        if (!this.widget._id) {
            this.widgetService.createWidget(this.pid, this.widget).subscribe(function (widget) {
                _this.widget = widget;
                _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
                console.log(_this.widget);
            });
        }
        else {
            this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(function () {
                _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
            });
        }
    };
    WidgetTextComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widget._id).subscribe(function () {
            _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
        });
    };
    WidgetTextComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.wgid = params['widgetId'];
            _this.pid = params['pageId'];
            if (_this.wgid === 'text') {
                _this.widget = _this.widgetService.dumpWidget();
                _this.widget.widgetType = 'TEXT';
            }
            else {
                _this.widgetService.findWidgetById(_this.wgid).subscribe(function (widget) {
                    _this.widget = widget;
                    console.log(_this.widget);
                });
            }
        });
    };
    WidgetTextComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-text',
            template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */],
            __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], WidgetTextComponent);
    return WidgetTextComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "  <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"..\" class=\"cl-text-black cl-icon-padding\">\n          <span class=\"glyphicon glyphicon-chevron-left\">\n          </span>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a class=\"cl-icon-padding cl-text-black\" (click)=\"updateOrCreateWidget()\">\n      <span class=\"glyphicon glyphicon-ok\">\n        </span>\n    </a>\n    </div>\n    <a class=\"navbar-brand cl-text-white cl-text-bold\" routerLink=\".\">\n\n      Widgets Edit\n    </a>\n  </div>\n  <!--<a class=\"btn navbar-brand pull-right\" (click)=\"updateOrCreateWidget()\">-->\n    <!--<span class=\"glyphicon glyphicon-ok text-dark\"></span>-->\n  <!--</a>-->\n</nav>\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"website-name\">Name</label>\n      <input [(ngModel)]=\"widget.name\" type=\"text\" class=\"form-control\" id=\"website-name\" placeholder=\"Name\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"youtube-text\">Text</label>\n      <input [(ngModel)]=\"widget.text\" type=\"text\" class=\"form-control\" id=\"youtube-text\" placeholder=\"Text\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"youtube-URL\">URL</label>\n      <input [(ngModel)]=\"widget.url\" type=\"text\" class=\"form-control\" id=\"youtube-URL\" placeholder=\"URL\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"youtube-width\">Width</label>\n      <input [(ngModel)]=\"widget.width\" type=\"text\" class=\"form-control\" id=\"youtube-width\" placeholder=\"100%\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  </form>\n  <a class=\"btn btn-danger btn-block\" routerLink=\"..\" (click)=\"deleteWidget()\">Delete</a>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n\n      <a routerLink=\"/user\" class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n\n    </div>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WidgetYoutubeComponent = /** @class */ (function () {
    function WidgetYoutubeComponent(widgetService, pageService, websiteService, userService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.pageService = pageService;
        this.websiteService = websiteService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widget = {};
    }
    // ngOnInit() {
    //   this.activatedRoute.params.subscribe(
    //     params => {
    //       this.widgetService.findWidgetById(params['widgetId']).subscribe(
    //         (widget: Widget) => {
    //           if (widget.pageId === params['pageId']) {
    //             this.pageService.findPageById(widget.pageId).subscribe(
    //               (page: Page) => {
    //                 if (page.websiteId === params['websiteId']) {
    //                   this.websiteService.findWebsiteById(page.websiteId).subscribe(
    //                     (website: Website) => {
    //                       if (website.developerId === params['userId']) {
    //                         this.uid = params['userId'];
    //                         this.wid = params['websiteId'];
    //                         this.pid = params['pageId'];
    //                         this.wgid = params['widgetId'];
    //                         this.widget = widget;
    //                         console.log(this.widget);
    //                       } else {
    //                         console.log('User ID does not match.');
    //                       }
    //                     }
    //                   );
    //                 } else {
    //                   console.log('Website ID does not match.');
    //                 }
    //               }
    //             );
    //           }
    //         }
    //       );
    //     }
    //   );
    // }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.wgid = params['widgetId'];
            _this.pid = params['pageId'];
            if (_this.wgid === 'youtube') {
                _this.widget = _this.widgetService.dumpWidget();
                _this.widget.widgetType = 'YOUTUBE';
            }
            else {
                _this.widgetService.findWidgetById(_this.wgid).subscribe(function (widget) {
                    _this.widget = widget;
                    console.log(_this.widget);
                });
            }
        });
    };
    // updateWidget(widget: Widget) {
    //   this.widgetService.updateWidget(widget._id, widget);
    // }
    WidgetYoutubeComponent.prototype.updateOrCreateWidget = function () {
        var _this = this;
        if (!this.widget._id) {
            this.widgetService.createWidget(this.pid, this.widget).subscribe(function (widget) {
                _this.widget = widget;
                _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
                console.log(_this.widget);
            });
        }
        else {
            this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(function () {
                _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
            });
        }
    };
    WidgetYoutubeComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widget._id).subscribe(function () {
            _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
        });
    };
    WidgetYoutubeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-youtube',
            template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */],
            __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_5__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], WidgetYoutubeComponent);
    return WidgetYoutubeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/order-by-pipe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderByPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderByPipe = /** @class */ (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (array, args) {
        array.sort(function (a, b) {
            if (a.position < b.position) {
                return -1;
            }
            else if (a.position > b.position) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return array;
    };
    OrderByPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'orderBy'
        })
    ], OrderByPipe);
    return OrderByPipe;
}());



/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".youtube-widget {\n  position: relative;\n  padding-bottom: 52.25%; /* 16:9 */\n  height: 0;\n}\n\n.youtube-widget iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-light bg-secondary\">\n  <a class=\"btn navbar-brand\" routerLink=\"../..\">\n    <span class=\"glyphicon glyphicon-chevron-left text-dark\"></span>\n  </a>\n  <div class=\"navbar-brand font-weight-bold\">\n    Widgets\n  </div>\n  <a class=\"btn navbar-brand pull-right\" routerLink=\"./new\">\n    <span class=\"glyphicon glyphicon-plus text-dark\"></span>\n  </a>\n</nav>\n\n<div id=\"sortable\" class=\"cl-body-padding\" appSortable (newIndexes)=\"reorderWidgets($event)\">\n  <div *ngFor=\"let widget of widgets | orderBy\">\n    <div *ngIf=\"widget.type == 'HEADER'\">\n      <div class=\"pull-right\">\n        <a [routerLink]=\"['/#']\" class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n        </a>\n        <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/{{widget._id}}\">\n          <span class=\"glyphicon glyphicon-cog\"></span>\n        </a>\n      </div>\n      <h1>{{widget.text}}</h1>\n    </div>\n\n    <div *ngIf=\"widget.type == 'HTML'\">\n      <div class=\"pull-right\">\n        <a [routerLink]=\"['/#']\" class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n        </a>\n        <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/{{widget._id}}\">\n          <span class=\"glyphicon glyphicon-cog\"></span>\n        </a>\n      </div>\n      <!--<h1>Html name: {{widget.name}}</h1>-->\n      <div [innerHTML]=\"widget.text\"></div>\n    </div>\n\n    <div *ngIf=\"widget.type == 'TEXT'\">\n      <div *ngIf=\"widget.formatted\">\n        <quill-editor [(ngModel)]=\"widget.text\" name=\"text\"></quill-editor>\n      </div>\n\n      <input *ngIf=\"!widget.formatted && (!widget.rows || widget.rows===1)\"\n             placeholder=\"{{widget.placeholder}}\" class=\"form-control\"/>\n\n      <textarea *ngIf=\"!widget.formatted && (widget.rows > 1)\"\n                rows=\"{{widget.rows}}\" placeholder=\"{{widget.placeholder}}\"\n                class=\"form-control\">{{widget.text}}</textarea>\n    </div>\n\n    <div *ngIf=\"widget.type == 'IMAGE'\">\n      <div>\n        <a [routerLink]=\"['/#']\" class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n        </a>\n        <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/{{widget._id}}\" class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-cog\"></span>\n        </a>\n        <!-- <img class=\"img-responsive cl-widget-images\" src=\"{{baseUrl}}/api/image/{{widget.url}}\" alt=\"alt\" width=\"widget.width\"> -->\n        <img class=\"img-responsive cl-widget-images\" src=\"{{widget.url}}\" alt=\"alt\" width=\"widget.width\">\n      </div>\n      <br>\n    </div>\n\n    <div class=\"embed-responsive embed-responsive-16by9\" *ngIf=\"widget.type == 'YOUTUBE'\">\n      <div>\n        <iframe width=\"{{widget.width}}\" height=\"{{widget.height}}\" [src]=\"photoURL(widget.url)\" frameborder=\"0\" allowfullscreen>\n        </iframe>\n        <a [routerLink]=\"['/#']\" class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-menu-hamburger\" style=\"  background-color: white\"></span>\n        </a>\n        <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/{{widget._id}}\" class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-cog\" style=\"background-color: white\"></span>\n        </a>\n      </div>\n      <br>\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom navbar-light bg-secondary\">\n  <a [routerLink]=\"['/#']\" class=\"navbar-brand\">\n    <span class=\"glyphicon glyphicon-play text-dark\"></span>\n  </a>\n  <a [routerLink]=\"['/#']\" class=\"navbar-brand\">\n    <span class=\"glyphicon glyphicon-eye-open text-dark\"></span>\n  </a>\n  <a class=\"btn navbar-brand pull-right\" routerLink=\"/user/{{uid}}\">\n    <span class=\"glyphicon glyphicon-user text-primary\"></span>\n  </a>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(widgetService, pageService, websiteService, userService, activatedRoute, sanitizer) {
        this.widgetService = widgetService;
        this.pageService = pageService;
        this.websiteService = websiteService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.sanitizer = sanitizer;
        this.widgets = [{}];
        this.widget = {};
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.pageService.findPageById(params.pageId).subscribe(function (page) {
                if (page._website === params.websiteId) {
                    _this.websiteService.findWebsiteById(page._website).subscribe(function (website) {
                        if (website._user === params.userId) {
                            _this.uid = params.userId;
                            _this.wid = params.websiteId;
                            _this.pid = params.pageId;
                            _this.widgetService.findWidgetsByPageId(_this.pid).subscribe(function (widgets) {
                                _this.widgets = widgets;
                            }, function (error) {
                                console.log(error);
                            });
                        }
                        else {
                            console.log('User ID does not match.');
                        }
                    });
                }
                else {
                    console.log('Website ID does not match.');
                }
            });
        });
    };
    WidgetListComponent.prototype.photoURL = function (url) {
        var changeUrl = url.replace('youtu.be', 'youtube.com/embed');
        return this.sanitizer.bypassSecurityTrustResourceUrl(changeUrl);
    };
    // receiving the emitted event
    WidgetListComponent.prototype.reorderWidgets = function (indexes) {
        // call widget service function to update widget as per index
        this.widgetService.reorderWidgets(indexes.startIndex, indexes.endIndex, this.pid)
            .subscribe(function (data) { return console.log(data); });
    };
    WidgetListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-list',
            template: __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */],
            __WEBPACK_IMPORTED_MODULE_5__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_6__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */]])
    ], WidgetListComponent);
    return WidgetListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/page.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page; });
var Page = /** @class */ (function () {
    function Page(_id, name, websiteId, description) {
        this._id = _id;
        this.name = name;
        this.websiteId = websiteId;
        this.description = description;
    }
    return Page;
}());



/***/ }),

/***/ "../../../../../src/app/models/widget.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Widget; });
var Widget = /** @class */ (function () {
    function Widget(_id, type, name, pageId, size, text, width, url) {
        if (name === void 0) { name = ''; }
        if (size === void 0) { size = '1'; }
        if (text === void 0) { text = ''; }
        if (width === void 0) { width = '100%'; }
        if (url === void 0) { url = ''; }
        this._id = _id;
        this.widgetType = type;
        this.name = name;
        this.pageId = pageId;
        this.size = size;
        this.url = url;
        this.width = width;
        this.height = 0;
        this.rows = 0;
        this.class = '';
        this.icon = '';
        this.deletable = false;
        this.formatted = false;
        this.placeholder = '';
    }
    return Widget;
}());



/***/ }),

/***/ "../../../../../src/app/services/flickr.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FlickrService = /** @class */ (function () {
    function FlickrService(_http) {
        this._http = _http;
        this.key = '90ea0df0685933f65ea96fab852a3023';
        this.secret = '59b7fb7ceb0a467b';
        this.urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';
    }
    FlickrService.prototype.searchPhotos = function (searchTerm) {
        var url = this.urlBase
            .replace('API_KEY', this.key)
            .replace('TEXT', searchTerm);
        return this._http.get(url);
    };
    FlickrService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])() // needed as we're injecting Http service into this service
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], FlickrService);
    return FlickrService;
}());



/***/ }),

/***/ "../../../../../src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_page_model_client__ = __webpack_require__("../../../../../src/app/models/page.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { Observable } from 'rxjs/Observable ';


var PageService = /** @class */ (function () {
    function PageService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl;
    }
    PageService.prototype.dumpPage = function () {
        return new __WEBPACK_IMPORTED_MODULE_0__models_page_model_client__["a" /* Page */](undefined, undefined, undefined, undefined);
    };
    PageService.prototype.createPage = function (websiteId, page) {
        var url = this.baseUrl + '/api/website/' + websiteId + '/page';
        return this.http.post(url, page).map(function (res) {
            return res.json();
        });
    };
    PageService.prototype.findPageByWebsiteId = function (websiteId) {
        var url = this.baseUrl + '/api/website/' + websiteId + '/page';
        return this.http.get(url).map(function (res) {
            return res.json();
        });
    };
    PageService.prototype.findPageById = function (pageId) {
        var url = this.baseUrl + '/api/page/' + pageId;
        return this.http.get(url).map(function (res) {
            return res.json();
        });
    };
    PageService.prototype.updatePage = function (pageId, page) {
        var url = this.baseUrl + '/api/page/' + pageId;
        return this.http.put(url, page).map(function (res) {
            return res.json();
        });
    };
    PageService.prototype.deletePage = function (pageId) {
        return this.http.delete(this.baseUrl + '/api/page/' + pageId);
    };
    PageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Observable } from 'rxjs/Observable ';


// import {environment} from '../../environments/environment.prod';
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    UserService.prototype.createUser = function (user) {
        var url = this.baseUrl + '/api/user';
        return this.http.post(url, user).map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        console.log('client side find user by cre');
        var url = this.baseUrl + '/api/user?username=' + username + '&password=' + password;
        console.log('url =' + url);
        return this.http.get(url).map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.findUserById = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.get(url).map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        var url = this.baseUrl + '/api/user?username=' + username;
        return this.http.get(url).map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.updateUser = function (userId, user) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.put(url, user).map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.deleteUser = function (userId) {
        console.log('client side delete user');
        var url = this.baseUrl + '/api/user/' + userId;
        console.log('delete user url= ' + url);
        return this.http.delete(url).map(function (res) {
            return res.json();
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Observable } from 'rxjs/Observable ';


// import {environment} from '../../environments/environment.prod';
var WebsiteService = /** @class */ (function () {
    function WebsiteService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    WebsiteService.prototype.createWebsite = function (userId, website) {
        var url = this.baseUrl + '/api/user/' + userId + '/website';
        return this.http.post(url, website).map(function (res) {
            return res.json();
        });
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        var url = this.baseUrl + '/api/website/' + websiteId;
        return this.http.put(url, website).map(function (res) {
            return res.json();
        });
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        var url = this.baseUrl + '/api/website/' + websiteId;
        return this.http.get(url).map(function (res) {
            return res.json();
        });
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        var url = this.baseUrl + '/api/website/' + websiteId;
        return this.http.delete(url).map(function (res) {
            return res;
        });
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId + '/website';
        return this.http.get(url).map(function (res) {
            return res.json();
        });
    };
    WebsiteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], WebsiteService);
    return WebsiteService;
}());



/***/ }),

/***/ "../../../../../src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_widget_model_client__ = __webpack_require__("../../../../../src/app/models/widget.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import {environment} from '../../environments/environment.prod';
var WidgetService = /** @class */ (function () {
    function WidgetService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl;
    }
    WidgetService.prototype.dumpWidget = function () {
        return new __WEBPACK_IMPORTED_MODULE_1__models_widget_model_client__["a" /* Widget */](undefined, undefined, undefined, undefined);
    };
    WidgetService.prototype.findImage = function (imageName) {
        var url = this.baseUrl + '/api/image/' + imageName;
        return this.http.get(url).map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.createWidget = function (pageId, widget) {
        console.log('client side create widget');
        var url = this.baseUrl + '/api/page/' + pageId + '/widget';
        console.log('create widget url= ' + url);
        return this.http.post(url, widget).map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        var url = this.baseUrl + '/api/page/' + pageId + '/widget';
        return this.http.get(url).map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        var url = this.baseUrl + '/api/widget/' + widgetId;
        // console.log('from widget server client ts');
        console.log('client side find widget by id');
        console.log('find widget by id url = ' + url);
        return this.http.get(url).map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        var url = this.baseUrl + '/api/widget/' + widgetId;
        return this.http.put(url, widget).map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        var url = this.baseUrl + '/api/widget/' + widgetId;
        return this.http.delete(url).map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.reorderWidgets = function (startIndex, endIndex, pageId) {
        var url = this.baseUrl + '/api/page/' + pageId + '/widget?initial=' + startIndex + '&final=' + endIndex;
        return this.http.put(url, '').map(function (res) {
            var data = res;
            return data;
        });
    };
    WidgetService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], WidgetService);
    return WidgetService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    // baseUrl: 'https://webdev-wenfei.herokuapp.com'
    baseUrl: 'http://localhost:3100'
    // baseUrl: ''
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map