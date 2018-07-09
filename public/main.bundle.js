webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

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

module.exports = "<div class=\"wrapper\">\r\n  <app-navbar></app-navbar>\r\n    \r\n    <router-outlet></router-outlet>\r\n  <!-- <app-admin></app-admin> -->\r\n    \r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_admin_createuser_createuser_component__ = __webpack_require__("../../../../../src/app/components/admin/createuser/createuser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_admin_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/admin/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_admin_managebookings_managebookings_component__ = __webpack_require__("../../../../../src/app/components/admin/managebookings/managebookings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_admin_inventory_inventory_component__ = __webpack_require__("../../../../../src/app/components/admin/inventory/inventory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_admin_editusers_editusers_component__ = __webpack_require__("../../../../../src/app/components/admin/editusers/editusers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_admin_reports_reports_component__ = __webpack_require__("../../../../../src/app/components/admin/reports/reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_loader_loader_component__ = __webpack_require__("../../../../../src/app/components/loader/loader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_admin_customers_customers_component__ = __webpack_require__("../../../../../src/app/components/admin/customers/customers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_admin_admin_component__ = __webpack_require__("../../../../../src/app/components/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var appRoutes = [
    {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_23__components_admin_admin_component__["a" /* AdminComponent */],
        children: [
            {
                path: '',
                redirectTo: 'reports',
                pathMatch: 'full'
            },
            {
                path: 'reports',
                component: __WEBPACK_IMPORTED_MODULE_20__components_admin_reports_reports_component__["a" /* ReportsComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]]
            },
            {
                path: 'profile',
                component: __WEBPACK_IMPORTED_MODULE_9__components_admin_profile_profile_component__["a" /* ProfileComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]]
            },
            {
                path: 'createuser',
                component: __WEBPACK_IMPORTED_MODULE_7__components_admin_createuser_createuser_component__["a" /* CreateuserComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]]
            },
            {
                path: 'managebookings',
                component: __WEBPACK_IMPORTED_MODULE_16__components_admin_managebookings_managebookings_component__["a" /* ManagebookingsComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]]
            },
            {
                path: 'inventory',
                component: __WEBPACK_IMPORTED_MODULE_18__components_admin_inventory_inventory_component__["a" /* InventoryComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]]
            },
            {
                path: 'edituser',
                component: __WEBPACK_IMPORTED_MODULE_19__components_admin_editusers_editusers_component__["a" /* EditusersComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]]
            },
            {
                path: 'customers',
                component: __WEBPACK_IMPORTED_MODULE_22__components_admin_customers_customers_component__["a" /* CustomersComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]]
            }
        ]
    },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_admin_createuser_createuser_component__["a" /* CreateuserComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_admin_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_admin_managebookings_managebookings_component__["a" /* ManagebookingsComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_admin_inventory_inventory_component__["a" /* InventoryComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_admin_editusers_editusers_component__["a" /* EditusersComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_admin_reports_reports_component__["a" /* ReportsComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_loader_loader_component__["a" /* LoaderComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_admin_customers_customers_component__["a" /* CustomersComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_admin_admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_sidebar_sidebar_component__["a" /* SidebarComponent */]
        ],
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_17_angular2_flash_messages__["FlashMessagesModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_13__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_14__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-loader [loading]=\"loading\"></app-loader> -->\r\n\r\n<app-sidebar></app-sidebar>\r\n<div class=\"content-wrapper\">\r\n  <flash-messages></flash-messages>\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__("../../../../../src/app/components/admin/admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/admin.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AdminComponent);

//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/createuser/createuser.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/createuser/createuser.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-loader [loading]=\"loading\"></app-loader> -->\r\n<!-- <h2 class=\"page-header\">Create New User</h2> -->\r\n<div *ngIf=\"adminuser\">\r\n<!-- <form (submit)=\"onCreateSubmit()\">\r\n  <div class=\"form-group col-md-6\">\r\n    <label>Name</label>\r\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\r\n  </div>\r\n  <div class=\"form-group col-md-6\">\r\n    <label>Username</label>\r\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Designation</label>\r\n    <select name=\"designation\" [(ngModel)]=\"designation\" class=\"form-control\"> \r\n      <option *ngFor=\"let d of designationsToDisplay\">{{d}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group col-md-6\">\r\n    <label>Password</label>\r\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\r\n  </div>\r\n  <div class=\"form-group col-md-6\">\r\n    <label>Confirm Password</label>\r\n    <input type=\"password\" [(ngModel)]=\"confirmPassword\" name=\"confirmPassword\" class=\"form-control\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <h3>\r\n    <label>Center</label>\r\n    <li *ngFor=\"let c of centers;let i = index\">\r\n      <input type=\"checkbox\" name=\"selectedCenters[i]\" value=\"selectedCenters[i]\" [(ngModel)] = \"selectedCenters[i]\"> {{c}}\r\n    </li>\r\n    </h3>\r\n  </div>\r\n   <div class=\"form-group\">\r\n    <h3>  <label>Grant Permission(s) </label>\r\n    <li *ngIf=\"adminuser['book_approve']\"><input type=\"checkbox\" name=\"book_approve\" value=\"book_approve\" [(ngModel)] = \"book_approve\" > Approve Bookings </li>\r\n    <li *ngIf=\"adminuser['book_add']\"><input type=\"checkbox\" name=\"book_add\" value=\"book_add\" [(ngModel)] = \"book_add\" > Add Booking</li>\r\n    <li *ngIf=\"adminuser['book_delete']\"><input type=\"checkbox\"  name=\"book_delete\" value=\"book_delete\" [(ngModel)] = \"book_delete\" > Delete Booking</li>\r\n    <li *ngIf=\"adminuser['adminuser_create']\"><input type=\"checkbox\" name=\"adminuser_create\" value=\"adminuser_create\" [(ngModel)] = \"adminuser_create\" > Create Admin User</li>\r\n    <li *ngIf=\"adminuser['adminuser_modify']\"><input type=\"checkbox\"  name=\"adminuser_modify\" value=\"adminuser_modify\" [(ngModel)] = \"adminuser_modify\" > Modify Admin User</li>\r\n    <li *ngIf=\"adminuser['adminuser_delete']\"><input type=\"checkbox\" name=\"adminuser_delete\" value=\"adminuser_delete\" [(ngModel)] = \"adminuser_delete\" > Delete Admin User</li>\r\n    <li *ngIf=\"adminuser['reports_view']\"><input type=\"checkbox\"  name=\"reports_view\" value=\"reports_view\" [(ngModel)] = \"reports_view\" > View Reports</li>\r\n    <li *ngIf=\"adminuser['manage_inventory']\"><input type=\"checkbox\"  name=\"reports_view\" value=\"manage_inventory\" [(ngModel)] = \"manage_inventory\" > Manage Inventory</li>\r\n    </h3>\r\n  </div>\r\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Create\">\r\n</form> -->\r\n\r\n<!-- Content Header (Page header) -->\r\n<section class=\"content-header\">\r\n  <h1>\r\n     Create New User\r\n    <!-- <small>Preview</small> -->\r\n  </h1>\r\n</section>\r\n<!-- Horizontal Form -->\r\n<div class=\"box box-success\">\r\n  \r\n  <!-- /.box-header -->\r\n  <!-- form start -->\r\n  <form class=\"form-horizontal\" (submit)=\"onCreateSubmit()\">\r\n    <div class=\"box-body\">\r\n      <div class=\"form-group\">\r\n        <label for=\"name\" class=\"col-sm-2 control-label\">Name</label>\r\n        \r\n        <div class=\"col-sm-10\">\r\n          <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"username\" class=\"col-sm-2 control-label\">Username</label>\r\n        \r\n        <div class=\"col-sm-10\">\r\n          <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"designation\" class=\"col-sm-2 control-label\">Designation</label>\r\n        \r\n        <div class=\"col-sm-10\">\r\n          <!-- <input type=\"text\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"text\"> -->\r\n          \r\n          <select name=\"designation\" [(ngModel)]=\"designation\" class=\"form-control\">\r\n            <option *ngFor=\"let d of designationsToDisplay\">{{d}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"form-group\">\r\n        <label for=\"password\" class=\"col-sm-2 control-label\">Password</label>\r\n      \r\n        <div class=\"col-sm-10\">\r\n          <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"form-group\">\r\n        <label for=\"confirmPassword\" class=\"col-sm-2 control-label\">Confirm Password</label>\r\n      \r\n        <div class=\"col-sm-10\">\r\n          <input type=\"password\" [(ngModel)]=\"confirmPassword\" name=\"confirmPassword\" class=\"form-control\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"box-header with-border\">\r\n        <h3 class=\"box-title\">Locations</h3>\r\n      </div>\r\n      \r\n      <div class=\"form-group\">\r\n        <!-- <label for=\"center\" class=\"control-label\">Centers</label>       -->\r\n        <div *ngFor=\"let c of centers;let i = index\" class=\"col-md-3 col-md-offset-1\">\r\n          <h5>\r\n            <input type=\"checkbox\" class=\"flat-green icheckbox_flat-green\" name=\"selectedCenters[i]\" value=\"selectedCenters[i]\" [(ngModel)]=\"selectedCenters[i]\"> {{c}}\r\n          </h5>          \r\n        </div>\r\n      </div>\r\n      <!-- /form-group -->\r\n      \r\n      <div class=\"box-header with-border\">\r\n        <h3 class=\"box-title\">Grant Permission(s)</h3>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <!-- <label for=\"permission\" class=\"control-label\">Grant Permission(s)</label> -->\r\n        <div *ngIf=\"adminuser['book_approve']\" class=\"col-md-3 col-md-offset-1\">\r\n          <h5>\r\n            <input type=\"checkbox\" class=\"flat-green icheckbox_flat-green\" name=\"book_approve\" value=\"book_approve\" [(ngModel)]=\"book_approve\"> Approve Bookings\r\n          </h5>\r\n        </div>\r\n\r\n        <div *ngIf=\"adminuser['book_add']\" class=\"col-md-3 col-md-offset-1\">\r\n          <h5>\r\n            <input type=\"checkbox\" class=\"flat-green icheckbox_flat-green\" name=\"book_add\" value=\"book_add\" [(ngModel)]=\"book_add\"> Add Booking\r\n          </h5>\r\n        </div>\r\n\r\n        <div *ngIf=\"adminuser['book_delete']\" class=\"col-md-3 col-md-offset-1\">\r\n          <h5>\r\n            <input type=\"checkbox\" class=\"flat-green icheckbox_flat-green\" name=\"book_delete\" value=\"book_delete\" [(ngModel)]=\"book_delete\"> Delete Booking\r\n          </h5>\r\n        </div>\r\n\r\n        <div *ngIf=\"adminuser['adminuser_create']\" class=\"col-md-3 col-md-offset-1\">\r\n          <h5>\r\n            <input type=\"checkbox\" class=\"flat-green icheckbox_flat-green\" name=\"adminuser_create\" value=\"adminuser_create\" [(ngModel)]=\"adminuser_create\"> Create Admin User\r\n          </h5>\r\n        </div>\r\n        \r\n        <div *ngIf=\"adminuser['adminuser_modify']\" class=\"col-md-3 col-md-offset-1\">\r\n          <h5>\r\n            <input type=\"checkbox\" class=\"flat-green icheckbox_flat-green\" name=\"adminuser_modify\" value=\"adminuser_modify\" [(ngModel)]=\"adminuser_modify\"> Modify Admin User\r\n          </h5>\r\n        </div>\r\n\r\n        <div *ngIf=\"adminuser['adminuser_delete']\" class=\"col-md-3 col-md-offset-1\">\r\n          <h5>\r\n            <input type=\"checkbox\" class=\"flat-green icheckbox_flat-green\" name=\"adminuser_delete\" value=\"adminuser_delete\" [(ngModel)]=\"adminuser_delete\"> Delete Admin User\r\n          </h5>\r\n        </div>\r\n        \r\n        <div *ngIf=\"adminuser['reports_view']\" class=\"col-md-3 col-md-offset-1\">\r\n          <h5>\r\n            <input type=\"checkbox\" class=\"flat-green icheckbox_flat-green\" name=\"reports_view\" value=\"reports_view\" [(ngModel)]=\"reports_view\"> View Reports\r\n          </h5>\r\n        </div>\r\n        \r\n        <div *ngIf=\"adminuser['manage_inventory']\" class=\"col-md-3 col-md-offset-1\">\r\n          <h5>\r\n            <input type=\"checkbox\" class=\"flat-green icheckbox_flat-green\" name=\"reports_view\" value=\"manage_inventory\" [(ngModel)]=\"manage_inventory\"> Manage Inventory\r\n          </h5>\r\n        </div>\r\n      </div>\r\n      <!-- /form-group -->\r\n      \r\n    </div>\r\n    <!-- /.box-body -->\r\n    <div class=\"box-footer\">\r\n      <button type=\"submit\" class=\"btn btn-logo btn-w-md\">Create</button>\r\n    </div>\r\n    <!-- /.box-footer -->\r\n  </form>\r\n</div>\r\n<!-- /.box -->\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/admin/createuser/createuser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateuserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateuserComponent = (function () {
    function CreateuserComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.loading = true;
        this.centers = [];
        this.updatedCenters = [];
        this.selectedCenters = [false];
        this.designations = [];
        this.designation = "";
        this.designationsToDisplay = [];
        // Permissions 
        this.book_approve = false;
        this.book_add = false;
        this.book_delete = false;
        this.adminuser_create = false;
        this.adminuser_modify = false;
        this.adminuser_delete = false;
        this.reports_view = false;
        this.manage_inventory = false;
    }
    CreateuserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getProfile().then(function (adminuser) {
            _this.adminuser = adminuser;
            if (!adminuser['adminuser_create']) {
                _this.flashMessage.show('Access Denied', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/profile']);
            }
            _this.authService.getGlobalDesignations().subscribe(function (data) {
                _this.designations = data.globalDesignations;
                for (var i = adminuser['admin_level'] + 1; i < _this.designations.length; i++) {
                    _this.designationsToDisplay.push(_this.designations[i]);
                }
                _this.designation = _this.designationsToDisplay[0];
                _this.loading = false;
            });
            _this.centers = adminuser['center'];
        });
    };
    CreateuserComponent.prototype.getProfile = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var adminuser = JSON.parse(localStorage.getItem("adminuser"));
            var id = {
                id: adminuser.id
            };
            _this.authService.getProfile(id).subscribe(function (profile) {
                resolve(profile.adminuser);
            }, function (err) {
                console.log(err);
                return false;
            });
        });
    };
    CreateuserComponent.prototype.getInventory = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.authService.getInfo().subscribe(function (info) {
                resolve(info.inventory);
            });
        });
    };
    CreateuserComponent.prototype.onCreateSubmit = function () {
        var _this = this;
        new Promise(function (resolve, reject) {
            var centersToAdd = [];
            for (var i = 0; i < _this.centers.length; i++) {
                if (_this.selectedCenters[i]) {
                    centersToAdd.push(_this.centers[i]);
                }
            }
            _this.updatedCenters = centersToAdd;
            resolve(centersToAdd);
        }).then(function (centersToAdd) {
            if (!_this.validateService.validateCenters(centersToAdd)) {
                _this.flashMessage.show('Please select atleast 1 center!', { cssClass: 'alert-danger', timeout: 3000 });
                return false;
            }
            else {
                _this.createuser();
            }
        });
    };
    CreateuserComponent.prototype.createuser = function () {
        var _this = this;
        var adminuser = {
            name: this.name,
            username: this.username,
            password: this.password,
            book_approve: this.book_approve,
            book_add: this.book_add,
            book_delete: this.book_delete,
            adminuser_create: this.adminuser_create,
            adminuser_modify: this.adminuser_modify,
            adminuser_delete: this.adminuser_delete,
            reports_view: this.reports_view,
            manage_inventory: (this.manage_inventory && this.adminuser['manage_inventory']),
            designation: this.designation,
            admin_level: this.designations.indexOf(this.designation),
            center: this.updatedCenters
        };
        // Required Fields
        if (!this.validateService.validateRegister(adminuser)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Confirm password 
        if (!this.validateService.validateConfirmPassword(adminuser.password, this.confirmPassword)) {
            this.flashMessage.show("Passwords don't match. Please try again.", { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Username
        this.validateUsername(adminuser.username).then(function (success) {
            if (success) {
                _this.flashMessage.show('Username is already taken! Please try another username', { cssClass: 'alert-danger', timeout: 3000 });
                return false;
            }
            else {
                // Register user
                _this.authService.registerUser(adminuser).subscribe(function (data) {
                    if (data.success) {
                        _this.flashMessage.show('User Registered', { cssClass: 'alert-success', timeout: 3000 });
                    }
                    else {
                        _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                    }
                });
            }
        });
    };
    CreateuserComponent.prototype.validateUsername = function (username) {
        var _this = this;
        var usernameData = {
            username: username
        };
        return new Promise(function (resolve) {
            _this.authService.validateAdminUsername(usernameData).subscribe(function (data) {
                resolve(data.success);
            });
        });
    };
    return CreateuserComponent;
}());
CreateuserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-createuser',
        template: __webpack_require__("../../../../../src/app/components/admin/createuser/createuser.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/createuser/createuser.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], CreateuserComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=createuser.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/customers/customers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/customers/customers.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-loader [loading]=\"loading\"></app-loader> -->\r\n<section class=\"content-header\">\r\n  <h1>\r\n     Customers\r\n    <!-- <small>Preview</small> -->\r\n  </h1>\r\n</section>\r\n<!-- <h2>Customers</h2> -->\r\n\r\n\r\n<!-- <div *ngIf=\"customers\">\r\n  <ol>\r\n    <div *ngFor=\"let customer of customers\">\r\n      <li>\r\n        Name : {{customer.name}} <br> Username: {{customer.username}} <br> Email: {{customer.email}} <br> Phone: {{customer.phone}}\r\n        <br> <br>\r\n      </li>\r\n    </div>\r\n  </ol>\r\n</div> -->\r\n\r\n<section class=\"content\">\r\n  <form (submit)=\"onFilterSubmit()\">\r\n  \r\n    <div class=\"form-group col-lg-4\">\r\n      <label>Name</label>\r\n      <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\r\n    </div>\r\n  \r\n    <div class=\"form-group col-md-4\">\r\n      <label>Username</label>\r\n      <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\r\n    </div>\r\n  \r\n    <div class=\"form-group col-md-4\">\r\n      <label>Email</label>\r\n      <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\r\n    </div>\r\n    <br>\r\n    <input type=\"submit\" class=\"btn btn-logo btn-w-md\" value=\"Filter\">\r\n    <input type=\"submit\" class=\"btn btn-secondary btn-w-md\" (click)=\"reset=1\" value=\"Reset\">\r\n  </form>\r\n  <br>\r\n  \r\n  <div class=\"row\" *ngIf=\"customers\">\r\n    <div class=\"col-xs-12\">\r\n      <div class=\"box\">\r\n        <div class=\"box-header\">\r\n          <h3 class=\"box-title\"> Customers List</h3>\r\n        </div>\r\n        <!-- /.box-header -->\r\n        <div class=\"box-body\">\r\n          <table id=\"example1\" class=\"table table-bordered table-striped\">\r\n            <thead>\r\n              <tr>\r\n                <th>S.No</th>\r\n                <th>Name</th>\r\n                <th>Username</th>\r\n                <th>Email</th>\r\n                <th>Phone</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let customer of customers;let i=index;\">\r\n                <td>{{i+1}}</td>\r\n                <td>{{customer.name}}</td>\r\n                <td>{{customer.username}}</td>\r\n                <td>{{customer.email}}</td>\r\n                <td>{{customer.phone}}</td>\r\n              </tr>\r\n            </tbody>\r\n            <tfoot>\r\n              <tr>\r\n                <th>S.No</th>\r\n                <th>Name</th>\r\n                <th>Username</th>\r\n                <th>Email</th>\r\n                <th>Phone</th>\r\n              </tr>\r\n            </tfoot>\r\n          </table>\r\n        </div>\r\n        <!-- /.box-body -->\r\n      </div>\r\n      <!-- /.box -->\r\n    </div>\r\n    <!-- /.col -->\r\n  </div>\r\n  <!-- /.row -->\r\n</section>\r\n<!-- /.content -->\r\n\r\n\r\n  "

/***/ }),

/***/ "../../../../../src/app/components/admin/customers/customers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomersComponent = (function () {
    // private alert:Number = 0;
    function CustomersComponent(flashMessage, authService, router) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.loading = true;
        this.reset = 0;
        this.name = "";
        this.username = "";
        this.email = "";
    }
    CustomersComponent.prototype.ngOnInit = function () {
        this.filterUsers();
    };
    CustomersComponent.prototype.filterUsers = function () {
        var _this = this;
        this.loading = true;
        var params = {
            name: this.name.trim(),
            username: this.username.trim(),
            email: this.email.trim(),
            phone: this.phone
        };
        this.authService.filterUsers(params).subscribe(function (data) {
            if (data.success) {
                if (data.customers.length) {
                    _this.customers = data.customers.reverse();
                    // this.alert = 0;          
                }
                else {
                    _this.flashMessage.show('No Customers found with this search criteria', { cssClass: 'alert-danger', timeout: 5000 });
                    // this.alert=1;
                    _this.customers = null;
                }
            }
            else {
                // this.alert = 2;
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 5000 });
                _this.customers = null;
            }
            _this.loading = false;
        });
    };
    CustomersComponent.prototype.onFilterSubmit = function () {
        if (this.reset != 0) {
            this.name = "";
            this.username = "";
            this.email = "";
            this.reset = 0;
        }
        this.filterUsers();
    };
    return CustomersComponent;
}());
CustomersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-customers',
        template: __webpack_require__("../../../../../src/app/components/admin/customers/customers.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/customers/customers.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], CustomersComponent);

var _a, _b, _c;
//# sourceMappingURL=customers.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/editusers/editusers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/editusers/editusers.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-loader [loading]=\"loading\"></app-loader> -->\r\n<!-- <h3> List of Admins </h3> -->\r\n<section class=\"content-header\">\r\n  <h1>\r\n     List of Admins\r\n    <!-- <small>Preview</small> -->\r\n  </h1>\r\n</section>\r\n\r\n\r\n<div class=\"content\" *ngIf=\"otheradmins\">\r\n  <!-- <ol>\r\n    <li *ngFor=\"let otheradmin of otheradmins\">\r\n      Designation : {{otheradmin.designation}} <br> Name: {{otheradmin.name}} <br> Username: {{otheradmin.username}} <br>    \r\n      Center: {{otheradmin.center}} <br> Permissions: Admin - Create : {{otheradmin.adminuser_create}}, Modify : {{otheradmin.adminuser_modify}}, Delete :\r\n      {{otheradmin.adminuser_delete}} <br> &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;\r\n      &nbsp;&nbsp;&nbsp; &nbsp; Book - Create : {{otheradmin.book_add}}, Approve : {{otheradmin.book_approve}}, Delete\r\n      : {{otheradmin.book_delete}}\r\n      <br>\r\n      <input type=\"button\" *ngIf=\"adminuser.adminuser_modify\" (click)=\"toggleEditUser(otheradmin._id)\" value=\"Edit User\">\r\n      <div *ngIf=\"editUser[otheradmin._id]\">\r\n        <form (submit)=\"updateUserSubmit(otheradmin._id)\">\r\n          <div>\r\n            <label>Name</label>\r\n            <input type=\"text\" value=\"{{otheradmin.name}}\" name=\"name\" [(ngModel)]=\"name\">\r\n          </div>\r\n          <div>\r\n            <label>Designation</label>\r\n            <select name=\"designation\" value=\"{{otheradmin.designation}}\" name=\"designation\" [(ngModel)]=\"designation\"> \r\n            <option *ngFor=\"let d of designationsToDisplay\">{{d}}</option>\r\n          </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Center</label>\r\n            <ul>\r\n              <li *ngFor=\"let c of adminuser.center;let i=index\">\r\n                <input type=\"checkbox\" [checked]=\"selectedCenters[i]\" (click)=\"selectedCenters[i]==true?selectedCenters[i]=null:selectedCenters[i]=true\">{{c}}\r\n              </li>\r\n            </ul>\r\n           </div>\r\n          <div>\r\n            Edit Permission(s) <br>\r\n            <ul>\r\n              <li *ngIf=\"adminuser['book_approve']\"><input type=\"checkbox\" value=\"{{otheradmin.book_approve}}\" name=\"book_approve\" [(ngModel)]=\"book_approve\">Approve Booking </li>\r\n              <li *ngIf=\"adminuser['book_add']\"><input type=\"checkbox\" value=\"{{otheradmin.book_add}}\" name=\"book_add\" [(ngModel)]=\"book_add\"> Add Booking</li>\r\n              <li *ngIf=\"adminuser['book_delete']\"><input type=\"checkbox\" value=\"{{otheradmin.book_delete}}\" name=\"book_delete\" [(ngModel)]=\"book_delete\"> Delete Booking</li>\r\n              <li *ngIf=\"adminuser['adminuser_create']\"><input type=\"checkbox\" value=\"{{otheradmin.adminuser_create}}\" name=\"adminuser_create\" [(ngModel)]=\"adminuser_create\"> Create Admin User</li>\r\n              <li *ngIf=\"adminuser['adminuser_modify']\"><input type=\"checkbox\" value=\"{{otheradmin.adminuser_modify}}\" name=\"adminuser_modify\" [(ngModel)]=\"adminuser_modify\"> Modify Admin User</li>\r\n              <li *ngIf=\"adminuser['adminuser_delete']\"><input type=\"checkbox\" value=\"{{otheradmin.adminuser_delete}}\" name=\"adminuser_delete\" [(ngModel)]=\"adminuser_delete\"> Delete Admin User</li>\r\n              <li *ngIf=\"adminuser['reports_view']\"><input type=\"checkbox\" value=\"{{otheradmin.reports_view}}\" name=\"reports_view\" [(ngModel)]=\"reports_view\"> View Reports</li>\r\n              <li *ngIf=\"adminuser['manage_inventory']\"><input type=\"checkbox\"  name=\"reports_view\" value=\"manage_inventory\" [(ngModel)] = \"manage_inventory\" > Manage Inventory</li>         \r\n            </ul>\r\n          </div>\r\n          <input type=\"submit\" value=\"Update\">\r\n        </form>\r\n        <input type=\"button\" (click)=\"toggleEditUser(otheradmin._id)\" value=\"Cancel\">\r\n      </div>\r\n      \r\n      <input type=\"button\" *ngIf=\"adminuser.adminuser_delete\" (click)=\"delete_otheradmin(otheradmin._id)\" value=\"Delete User\">\r\n    </li>\r\n  </ol> -->\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <div class=\"box box-success\">\r\n        <!-- <div class=\"box-header\">\r\n          <h3 class=\"box-title\"> Meeting Bookings (Total {{meetingroombookings.length}} Bookings)</h3>\r\n        </div> -->\r\n        <!-- /.box-header -->\r\n        <div class=\"box-body\">\r\n          <table id=\"example1\" class=\"table table-bordered table-striped\">\r\n            <thead>\r\n              <tr>\r\n                <th>S.No</th>\r\n                <th>Name</th>\r\n                <th>Username</th>\r\n                <th>Designation</th>\r\n                <th>Locations</th>\r\n                <th>Permissions</th>\r\n                <th>Action</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let otheradmin of otheradmins;let i=index;\">\r\n                <td>{{i+1}}</td>\r\n                <td>{{otheradmin.name}}</td>\r\n                <td>{{otheradmin.username}}</td>\r\n                <td>{{otheradmin.designation}}</td>\r\n                <td>{{otheradmin.center}}</td>\r\n                <td class=\"text-center\">\r\n                  <!-- <div class=\"box-header\">\r\n                    <h3 class=\"box-title\">Admin</h3>\r\n                  </div> -->\r\n                  <!-- Admin -->\r\n\r\n                  <table class=\"table table-bordered table-striped\">\r\n                    <thead>\r\n                      <th></th>\r\n                      <th>Create</th>\r\n                      <th>Modify</th>\r\n                      <th>Delete</th>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr>\r\n                        <td>Admin</td>\r\n                        <td>\r\n                          <span *ngIf=\"otheradmin.adminuser_create==true\" class=\"label label-success bg-logo\">\r\n                            <i class=\"fa fa-check text-white\"></i>\r\n                          </span>\r\n                          <span *ngIf=\"otheradmin.adminuser_create==false\" class=\"label label-danger\">\r\n                            <i class=\"fa fa-remove text-white\"></i>\r\n                          </span>\r\n                        </td>\r\n                        <td>\r\n                          <span *ngIf=\"otheradmin.adminuser_modify==true\" class=\"label label-success bg-logo\">\r\n                            <i class=\"fa fa-check text-white\"></i>\r\n                          </span>\r\n                          <span *ngIf=\"otheradmin.adminuser_modify==false\" class=\"label label-danger\">\r\n                            <i class=\"fa fa-remove text-white\"></i>\r\n                          </span>\r\n                        </td>\r\n                        <td>\r\n                          <span *ngIf=\"otheradmin.adminuser_delete==true\" class=\"label label-success bg-logo\">\r\n                            <i class=\"fa fa-check text-white\"></i>\r\n                          </span>\r\n                          <span *ngIf=\"otheradmin.adminuser_delete==false\" class=\"label label-danger\">\r\n                            <i class=\"fa fa-remove text-white\"></i>\r\n                          </span>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Bookings</td>\r\n                        <td>\r\n                          <span *ngIf=\"otheradmin.book_add==true\" class=\"label label-success bg-logo\">\r\n                            <i class=\"fa fa-check text-white\"></i>\r\n                          </span>\r\n                          <span *ngIf=\"otheradmin.book_add==false\" class=\"label label-danger\">\r\n                            <i class=\"fa fa-remove text-white\"></i>\r\n                          </span>\r\n                        </td>\r\n                        <td>\r\n                          <span *ngIf=\"otheradmin.book_approve==true\" class=\"label label-success bg-logo\">\r\n                            <i class=\"fa fa-check text-white\"></i>\r\n                          </span>\r\n                          <span *ngIf=\"otheradmin.book_approve==false\" class=\"label label-danger\">\r\n                            <i class=\"fa fa-remove text-white\"></i>\r\n                          </span>\r\n                        </td>\r\n                        <td>\r\n                          <span *ngIf=\"otheradmin.book_delete==true\" class=\"label label-success bg-logo\">\r\n                            <i class=\"fa fa-check text-white\"></i>\r\n                          </span>\r\n                          <span *ngIf=\"otheradmin.book_delete==false\" class=\"label label-danger\">\r\n                            <i class=\"fa fa-remove text-white\"></i>\r\n                          </span>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n\r\n                  <!-- <b>Admin - Create :</b> \r\n                  <span *ngIf=\"otheradmin.adminuser_create==true\" class=\"label label-success\">\r\n                    <i class=\"fa fa-check text-white\"></i>\r\n                  </span>\r\n                  <span *ngIf=\"otheradmin.adminuser_create==false\" class=\"label label-danger\">\r\n                    <i class=\"fa fa-remove text-white\"></i>\r\n                  </span>,\r\n                  \r\n                  <b>Modify :</b> \r\n                  <span *ngIf=\"otheradmin.adminuser_modify==true\" class=\"label label-success\">\r\n                    <i class=\"fa fa-check text-white\"></i>\r\n                  </span>\r\n                  <span *ngIf=\"otheradmin.adminuser_modify==false\" class=\"label label-danger\">\r\n                    <i class=\"fa fa-remove text-white\"></i>\r\n                  </span>, \r\n                  \r\n                  <b>Delete :</b> \r\n                  <span *ngIf=\"otheradmin.adminuser_delete==true\" class=\"label label-success\">\r\n                    <i class=\"fa fa-check text-white\"></i>\r\n                  </span>\r\n                  <span *ngIf=\"otheradmin.adminuser_delete==false\" class=\"label label-danger\">\r\n                    <i class=\"fa fa-remove text-white\"></i>\r\n                  </span> -->\r\n                  \r\n                  <!-- <br>  -->\r\n                  \r\n                  <!-- <div class=\"box-header\">\r\n                    <h3 class=\"box-title\">Bookings</h3>\r\n                  </div> -->\r\n                  <!-- Bookings -->\r\n\r\n                  <!-- <table class=\"table table-bordered table-striped\">\r\n                    <thead>\r\n                      <th></th>\r\n                      <th>Create</th>\r\n                      <th>Approve</th>\r\n                      <th>Delete</th>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr>\r\n                        <td>Bookings</td>\r\n                        <td>\r\n                          <span *ngIf=\"otheradmin.book_add==true\" class=\"label label-success\">\r\n                            <i class=\"fa fa-check text-white\"></i>\r\n                          </span>\r\n                          <span *ngIf=\"otheradmin.book_add==false\" class=\"label label-danger\">\r\n                            <i class=\"fa fa-remove text-white\"></i>\r\n                          </span>\r\n                        </td>\r\n                        <td>\r\n                          <span *ngIf=\"otheradmin.book_approve==true\" class=\"label label-success\">\r\n                            <i class=\"fa fa-check text-white\"></i>\r\n                          </span>\r\n                          <span *ngIf=\"otheradmin.book_approve==false\" class=\"label label-danger\">\r\n                            <i class=\"fa fa-remove text-white\"></i>\r\n                          </span>\r\n                        </td>\r\n                        <td>\r\n                          <span *ngIf=\"otheradmin.book_delete==true\" class=\"label label-success\">\r\n                            <i class=\"fa fa-check text-white\"></i>\r\n                          </span>\r\n                          <span *ngIf=\"otheradmin.book_delete==false\" class=\"label label-danger\">\r\n                            <i class=\"fa fa-remove text-white\"></i>\r\n                          </span>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table> -->\r\n\r\n                  <!-- <b>Book - Create :</b>\r\n                  <span *ngIf=\"otheradmin.book_add==true\" class=\"label label-success\">\r\n                    <i class=\"fa fa-check text-white\"></i>\r\n                  </span>\r\n                  <span *ngIf=\"otheradmin.book_add==false\" class=\"label label-danger\">\r\n                    <i class=\"fa fa-remove text-white\"></i>\r\n                  </span>, \r\n                  \r\n                  <b>Approve :</b> \r\n                  <span *ngIf=\"otheradmin.book_approve==true\" class=\"label label-success\">\r\n                    <i class=\"fa fa-check text-white\"></i>\r\n                  </span>\r\n                  <span *ngIf=\"otheradmin.book_approve==false\" class=\"label label-danger\">\r\n                    <i class=\"fa fa-remove text-white\"></i>\r\n                  </span>,\r\n                  \r\n                  <b>Delete :</b> \r\n                  <span *ngIf=\"otheradmin.book_delete==true\" class=\"label label-success\">\r\n                    <i class=\"fa fa-check text-white\"></i>\r\n                  </span>\r\n                  <span *ngIf=\"otheradmin.book_delete==false\" class=\"label label-danger\">\r\n                    <i class=\"fa fa-remove text-white\"></i>\r\n                  </span> -->\r\n\r\n                  \r\n                </td>\r\n                <td style=\"vertical-align:middle;\">\r\n                  <div class=\"\">\r\n                    <button type=\"button\" *ngIf=\"adminuser.adminuser_modify\" (click)=\"toggleEditUser(otheradmin._id)\" class=\"btn btn-logo d-block w-100\">Edit User</button>\r\n                    <button type=\"button\" *ngIf=\"adminuser.adminuser_delete\" (click)=\"delete_otheradmin(otheradmin._id)\" class=\"btn btn-secondary d-block w-100 mt-3\">Delete User</button>\r\n                  </div>\r\n                </td>\r\n                <div class=\"fixed bring-front left-0 top-0 bottom-0 right-0 bg-gradient\" *ngIf=\"editUser[otheradmin._id]\">\r\n                  <!-- Edit User Form -->\r\n                  <div class=\"box box-info fixed bring-front absolute-center w-40\">\r\n                    <div class=\"box-header with-border\">\r\n                      <h3 class=\"box-title\">Edit User</h3>\r\n                    </div>\r\n                    <!-- /.box-header -->\r\n                    <!-- form start -->\r\n                    <form class=\"form-horizontal\" (submit)=\"updateUserSubmit(otheradmin._id)\">\r\n                      <div class=\"box-body\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"inputname\" class=\"col-sm-2 control-label\">Name</label>\r\n                  \r\n                          <div class=\"col-sm-10\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"inputname\" placeholder=\"Name\" value=\"{{otheradmin.name}}\" name=\"name\" [(ngModel)]=\"name\">\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                          <label for=\"inputdesignnation\" class=\"col-sm-2 control-label\">Designation</label>\r\n                  \r\n                          <div class=\"col-sm-10\">\r\n                            <!-- <input type=\"password\" class=\"form-control\" id=\"inputdesignnation\"> -->\r\n                            <select name=\"designation\" value=\"{{otheradmin.designation}}\" name=\"designation\" [(ngModel)]=\"designation\" class=\"form-control\">\r\n                              <option class=\"form-control\" *ngFor=\"let d of designationsToDisplay\">{{d}}</option>\r\n                            </select>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class=\"box-header with-border\">\r\n                          <h3 class=\"box-title\">Locations</h3>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                          <!-- <label for=\"inputcenter\" class=\"col-sm-2 control-label\">Locations</label> -->\r\n                        \r\n                          <div class=\"col-sm-12 px-0\">\r\n                            <div class=\"col-md-4\" *ngFor=\"let c of adminuser.center;let i = index\">\r\n                              <h5>\r\n                                <input type=\"checkbox\" class=\"flat-green icheckbox_flat-green\" [checked]=\"selectedCenters[i]\" (click)=\"selectedCenters[i]==true?selectedCenters[i]=null:selectedCenters[i]=true\">{{c}}\r\n                              </h5>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        \r\n                        <div class=\"box-header with-border\">\r\n                          <h3 class=\"box-title\">Grant Permission(s)</h3>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                          <!-- <label for=\"permission\" class=\"control-label col-sm-2\">Grant Permission(s)</label> -->\r\n\r\n                          <div *ngIf=\"adminuser['book_approve']\" class=\"col-md-5 col-md-push-1\">\r\n                            <h5>\r\n                              <input type=\"checkbox\" class=\"flat-green icheckbox_flat-green\" name=\"book_approve\" value=\"{{otheradmin.book_approve}}\" [(ngModel)]=\"book_approve\"> Approve Bookings\r\n                            </h5>\r\n                          </div>\r\n                        \r\n                          <div *ngIf=\"adminuser['book_add']\" class=\"col-md-5 col-md-push-1\">\r\n                            <h5>\r\n                              <input type=\"checkbox\" class=\"flat-green icheckbox_flat-green\" name=\"book_add\" value=\"{{otheradmin.book_add}}\" [(ngModel)]=\"book_add\"> Add Booking\r\n                            </h5>\r\n                          </div>\r\n                        \r\n                          <div *ngIf=\"adminuser['book_delete']\" class=\"col-md-5 col-md-push-1\">\r\n                            <h5>\r\n                              <input type=\"checkbox\" class=\"flat-green icheckbox_flat-green\" name=\"book_delete\" value=\"{{otheradmin.book_delete}}\" [(ngModel)]=\"book_delete\"> Delete Booking\r\n                            </h5>\r\n                          </div>\r\n                        \r\n                          <div *ngIf=\"adminuser['adminuser_create']\" class=\"col-md-5 col-md-push-1\">\r\n                            <h5>\r\n                              <input type=\"checkbox\" class=\"flat-green icheckbox_flat-green\" name=\"adminuser_create\" value=\"{{otheradmin.adminuser_create}}\" [(ngModel)]=\"adminuser_create\"> Create Admin User\r\n                            </h5>\r\n                          </div>\r\n                        \r\n                          <div *ngIf=\"adminuser['adminuser_modify']\" class=\"col-md-5 col-md-push-1\">\r\n                            <h5>\r\n                              <input type=\"checkbox\" class=\"flat-green icheckbox_flat-green\" name=\"adminuser_modify\" value=\"{{otheradmin.adminuser_modify}}\" [(ngModel)]=\"adminuser_modify\"> Modify Admin User\r\n                            </h5>\r\n                          </div>\r\n                        \r\n                          <div *ngIf=\"adminuser['adminuser_delete']\" class=\"col-md-5 col-md-push-1\">\r\n                            <h5>\r\n                              <input type=\"checkbox\" class=\"flat-green icheckbox_flat-green\" name=\"adminuser_delete\" value=\"{{otheradmin.adminuser_delete}}\" [(ngModel)]=\"adminuser_delete\"> Delete Admin User\r\n                            </h5>\r\n                          </div>\r\n                        \r\n                          <div *ngIf=\"adminuser['reports_view']\" class=\"col-md-5 col-md-push-1\">\r\n                            <h5>\r\n                              <input type=\"checkbox\" class=\"flat-green icheckbox_flat-green\" name=\"reports_view\" value=\"{{otheradmin.reports_view}}\" [(ngModel)]=\"reports_view\"> View Reports\r\n                            </h5>\r\n                          </div>\r\n                        \r\n                          <div *ngIf=\"adminuser['manage_inventory']\" class=\"col-md-5 col-md-push-1\">\r\n                            <h5>\r\n                              <input type=\"checkbox\" class=\"flat-green icheckbox_flat-green\" name=\"reports_view\" value=\"{{otheradmin.manage_inventory}}\" [(ngModel)]=\"manage_inventory\"> Manage Inventory\r\n                            </h5>\r\n                          </div>\r\n                        </div>\r\n                        <!-- /form-group -->\r\n\r\n                      </div>\r\n                      <!-- /.box-body -->\r\n                      <div class=\"box-footer\">\r\n                        <button type=\"button\" class=\"btn btn-secondary btn-w-md\" (click)=\"toggleEditUser(otheradmin._id)\">Cancel</button>\r\n                        <button type=\"submit\" class=\"btn btn-logo btn-w-md pull-right\">Update</button>\r\n                      </div>\r\n                      <!-- /.box-footer -->\r\n                    </form>\r\n                  </div>\r\n                  <!-- /.box -->\r\n                  <!-- <form (submit)=\"updateUserSubmit(otheradmin._id)\">\r\n                    <div>\r\n                      <label>Name</label>\r\n                      <input type=\"text\" value=\"{{otheradmin.name}}\" name=\"name\" [(ngModel)]=\"name\">\r\n                    </div>\r\n                    <div>\r\n                      <label>Designation</label>\r\n                      <select name=\"designation\" value=\"{{otheradmin.designation}}\" name=\"designation\" [(ngModel)]=\"designation\">\r\n                        <option *ngFor=\"let d of designationsToDisplay\">{{d}}</option>\r\n                      </select>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label>Center</label>\r\n                      <ul>\r\n                        <li *ngFor=\"let c of adminuser.center;let i=index\">\r\n                          <input type=\"checkbox\" [checked]=\"selectedCenters[i]\" (click)=\"selectedCenters[i]==true?selectedCenters[i]=null:selectedCenters[i]=true\">{{c}}\r\n                        </li>\r\n                      </ul>\r\n                    </div>\r\n                    <div>\r\n                      Edit Permission(s)\r\n                      <br>\r\n                      <ul>\r\n                        <li *ngIf=\"adminuser['book_approve']\">\r\n                          <input type=\"checkbox\" value=\"{{otheradmin.book_approve}}\" name=\"book_approve\" [(ngModel)]=\"book_approve\">Approve Booking </li>\r\n                        <li *ngIf=\"adminuser['book_add']\">\r\n                          <input type=\"checkbox\" value=\"{{otheradmin.book_add}}\" name=\"book_add\" [(ngModel)]=\"book_add\"> Add Booking</li>\r\n                        <li *ngIf=\"adminuser['book_delete']\">\r\n                          <input type=\"checkbox\" value=\"{{otheradmin.book_delete}}\" name=\"book_delete\" [(ngModel)]=\"book_delete\"> Delete Booking</li>\r\n                        <li *ngIf=\"adminuser['adminuser_create']\">\r\n                          <input type=\"checkbox\" value=\"{{otheradmin.adminuser_create}}\" name=\"adminuser_create\" [(ngModel)]=\"adminuser_create\"> Create Admin User</li>\r\n                        <li *ngIf=\"adminuser['adminuser_modify']\">\r\n                          <input type=\"checkbox\" value=\"{{otheradmin.adminuser_modify}}\" name=\"adminuser_modify\" [(ngModel)]=\"adminuser_modify\"> Modify Admin User</li>\r\n                        <li *ngIf=\"adminuser['adminuser_delete']\">\r\n                          <input type=\"checkbox\" value=\"{{otheradmin.adminuser_delete}}\" name=\"adminuser_delete\" [(ngModel)]=\"adminuser_delete\"> Delete Admin User</li>\r\n                        <li *ngIf=\"adminuser['reports_view']\">\r\n                          <input type=\"checkbox\" value=\"{{otheradmin.reports_view}}\" name=\"reports_view\" [(ngModel)]=\"reports_view\"> View Reports</li>\r\n                        <li *ngIf=\"adminuser['manage_inventory']\">\r\n                          <input type=\"checkbox\" name=\"reports_view\" value=\"manage_inventory\" [(ngModel)]=\"manage_inventory\"> Manage Inventory</li>\r\n                      </ul>\r\n                    </div>\r\n                    <input type=\"submit\" value=\"Update\" class=\"btn btn-primary\">\r\n                  </form> -->\r\n                  <!-- <input type=\"button\" (click)=\"toggleEditUser(otheradmin._id)\" value=\"Cancel\" class=\"btn btn-default\"> -->\r\n                </div>\r\n              </tr>\r\n            </tbody>\r\n            <tfoot>\r\n              <tr>\r\n                <th>S.No</th>\r\n                <th>Name</th>\r\n                <th>Username</th>\r\n                <th>Designation</th>\r\n                <th>Locations</th>\r\n                <th>Permissions</th>\r\n                <th>Action</th>                \r\n              </tr>\r\n            </tfoot>\r\n          </table>\r\n        </div>\r\n        <!-- /.box-body -->\r\n      </div>\r\n      <!-- /.box -->\r\n    </div>\r\n    <!-- /.col -->\r\n  </div>\r\n  <!-- /.row -->\r\n</div>\r\n<!-- /.content -->"

/***/ }),

/***/ "../../../../../src/app/components/admin/editusers/editusers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditusersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditusersComponent = (function () {
    function EditusersComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        //private centers: String[] = [];
        //private inventory;
        this.center = "";
        this.selectedCenters = [];
        this.updatedCenters = [];
        this.editUser = [false];
        this.designations = [];
        this.designationsToDisplay = [];
        this.designation = "";
        this.name = "";
        this.book_approve = false;
        this.book_add = false;
        this.book_delete = false;
        this.adminuser_create = false;
        this.adminuser_modify = false;
        this.adminuser_delete = false;
        this.reports_view = false;
        this.manage_inventory = false;
    }
    EditusersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getProfile().then(function (adminuser) {
            _this.adminuser = adminuser;
            if (!adminuser['adminuser_modify'] && !adminuser['adminuser_delete']) {
                // this.flashMessage.show('Access Denied', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/profile']);
            }
            _this.authService.getGlobalDesignations().subscribe(function (data) {
                _this.designations = data.globalDesignations;
                for (var i = adminuser['admin_level'] + 1; i < _this.designations.length; i++) {
                    _this.designationsToDisplay.push(_this.designations[i]);
                }
            });
            _this.adminData = {
                admin_level: adminuser['admin_level'],
                centers: adminuser['center']
            };
            _this.getOtherAdmins(_this.adminData).then(function (otheradmins) {
                _this.otheradmins = otheradmins;
            });
        });
    };
    EditusersComponent.prototype.getProfile = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var adminuser = JSON.parse(localStorage.getItem("adminuser"));
            var id = {
                id: adminuser.id
            };
            _this.authService.getProfile(id).subscribe(function (profile) {
                resolve(profile.adminuser);
            }, function (err) {
                console.log(err);
                return false;
            });
        });
    };
    EditusersComponent.prototype.getInventory = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.authService.getInfo().subscribe(function (info) {
                resolve(info.inventory);
            });
        });
    };
    EditusersComponent.prototype.getOtherAdmins = function (adminDetails) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.authService.getOtherAdmins(adminDetails).subscribe(function (otheradmins) {
                resolve(otheradmins.otheradmins);
            });
        });
    };
    EditusersComponent.prototype.toggleEditUser = function (id) {
        this.editUser[id] = !this.editUser[id];
        if (this.editUser[id]) {
            for (var _i = 0, _a = this.otheradmins; _i < _a.length; _i++) {
                var otheradmin = _a[_i];
                if (id == otheradmin._id) {
                    this.name = otheradmin.name;
                    this.designation = otheradmin.designation;
                    this.book_add = otheradmin.book_add;
                    this.book_approve = otheradmin.book_approve;
                    this.book_delete = otheradmin.book_delete;
                    this.adminuser_create = otheradmin.adminuser_create;
                    this.adminuser_modify = otheradmin.adminuser_modify;
                    this.adminuser_delete = otheradmin.adminuser_delete;
                    this.reports_view = otheradmin.reports_view;
                    this.manage_inventory = otheradmin.manage_inventory;
                    for (var i = 0; i < this.adminuser['center'].length; i++) {
                        if (otheradmin.center.includes(this.adminuser['center'][i])) {
                            this.selectedCenters[i] = true;
                        }
                        else {
                            this.selectedCenters[i] = false;
                        }
                    }
                    console.log(otheradmin.name + this.selectedCenters);
                    break;
                }
            }
        }
    };
    EditusersComponent.prototype.updateUserSubmit = function (id) {
        var _this = this;
        new Promise(function (resolve, reject) {
            var centersToAdd = [];
            for (var i = 0; i < _this.adminuser['center'].length; i++) {
                if (_this.selectedCenters[i]) {
                    centersToAdd.push(_this.adminuser['center'][i]);
                }
            }
            _this.updatedCenters = centersToAdd;
            resolve(centersToAdd);
        }).then(function (centersToAdd) {
            if (!_this.validateService.validateCenters(centersToAdd)) {
                _this.flashMessage.show('Please select atleast 1 center!', { cssClass: 'alert-danger', timeout: 3000 });
                return false;
            }
            else {
                _this.updateUser(id);
            }
        });
    };
    EditusersComponent.prototype.updateUser = function (id) {
        var _this = this;
        var adminuser = {
            admin_id: id,
            name: this.name,
            book_approve: this.book_approve,
            book_add: this.book_add,
            book_delete: this.book_delete,
            adminuser_create: this.adminuser_create,
            adminuser_modify: this.adminuser_modify,
            adminuser_delete: this.adminuser_delete,
            reports_view: this.reports_view,
            manage_inventory: this.manage_inventory,
            designation: this.designation,
            admin_level: this.designations.indexOf(this.designation),
            center: this.updatedCenters
        };
        this.authService.updateUser(adminuser).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Admin User details updated successfully!', { cssClass: 'alert-success', timeout: 3000 });
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
        this.editUser[id] = !this.editUser[id];
        this.getOtherAdmins(this.adminData).then(function (otheradmins) {
            _this.otheradmins = otheradmins;
        });
    };
    EditusersComponent.prototype.delete_otheradmin = function (id) {
        var _this = this;
        if (confirm("Delete action cannot be undone. Are you sure?")) {
            var admin_id = {
                id: id
            };
            this.authService.deleteUser(admin_id).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessage.show('Admin Deleted!', { cssClass: 'alert-success', timeout: 3000 });
                }
                else {
                    _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                }
            });
            this.getOtherAdmins(this.adminData).then(function (otheradmins) {
                _this.otheradmins = otheradmins;
            });
        }
    };
    return EditusersComponent;
}());
EditusersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-editusers',
        template: __webpack_require__("../../../../../src/app/components/admin/editusers/editusers.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/editusers/editusers.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], EditusersComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=editusers.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/inventory/inventory.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/inventory/inventory.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-loader [loading]=\"loading\"></app-loader> -->\r\n<!-- <h3> Inventory </h3> -->\r\n<section class=\"content-header\">\r\n    <h1>\r\n        Inventory List\r\n        <!-- <small>Preview</small> -->\r\n    </h1>\r\n</section>\r\n\r\n<!-- <div class=\"content\">\r\n\r\n    <div class=\"list-group col-sm-6\" *ngFor=\"let eachinventory of inventory\">\r\n\r\n        <div>\r\n            \r\n            <li class=\"list-group-item col-sm-12 active\">\r\n                <div [ngClass]=\"{'col-sm-11':!editInventory[eachinventory._id],'col-sm-10':editInventory[eachinventory._id]}\">\r\n                    <strong> {{eachinventory.center}} </strong>\r\n                </div>\r\n                <a *ngIf=\"!editInventory[eachinventory._id]&&adminuser['manage_inventory']\" class=\"col-sm-1\" href=\"javascript:void(0)\" (click)=\"toggleEditInventory(eachinventory._id)\">\r\n                    <i style=\"color:white\" class=\"glyphicon glyphicon-pencil\"></i>\r\n                </a>\r\n                <a *ngIf=\"editInventory[eachinventory._id]\" class=\"col-sm-1\" href=\"javascript:void(0)\" (click)=\"updateInventory(eachinventory._id)\">\r\n                    <i style=\"color:white\" class=\"glyphicon glyphicon-ok\"></i>\r\n                </a>\r\n                <a *ngIf=\"editInventory[eachinventory._id]\" class=\"col-sm-1\" href=\"javascript:void(0)\" (click)=\"toggleEditInventory(eachinventory._id)\">\r\n                    <i style=\"color:white\" class=\"glyphicon glyphicon-remove\"></i>\r\n                </a>\r\n            </li>\r\n            <li class=\"list-group-item col-sm-6\"> Minimum subscription duration </li>\r\n            <li *ngIf=\"!editInventory[eachinventory._id]\" class=\"list-group-item col-sm-6\"> {{eachinventory.plan_duration}} months</li>\r\n            <div class=\"py-2px col-sm-6\" *ngIf=\"editInventory[eachinventory._id]\">\r\n                <input value=\"{{eachinventory.plan_duration}}\" [(ngModel)]=\"plan_duration\" name=\"plan_duration\" class=\"form-control-static\">\r\n            </div>\r\n            <li class=\"list-group-item col-sm-12\"> Hotdesk Pricing </li>\r\n            <li class=\"list-group-item col-sm-12\">\r\n                <ul class=\"list-group\">\r\n                    <li class=\"list-group-item col-sm-6\"> One day pass </li>\r\n                    <li *ngIf=\"!editInventory[eachinventory._id]\" class=\"list-group-item col-sm-6\">\r\n                        Rs {{eachinventory.hotdesk_price._1DP}}/-\r\n                    </li>\r\n                    <div class=\"py-2px col-sm-6\" *ngIf=\"editInventory[eachinventory._id]\">\r\n                        <input value=\"{{eachinventory.hotdesk_price._1DP}}\" [(ngModel)]=\"hotdesk_price._1DP\" name=\"hotdesk_price._1DP\" class=\"form-control-static\">\r\n                    </div>\r\n                    <li class=\"list-group-item col-sm-6\"> Four Days Pass </li>\r\n                    <li *ngIf=\"!editInventory[eachinventory._id]\" class=\"list-group-item col-sm-6\">\r\n                        Rs {{eachinventory.hotdesk_price._4DP}}/- \r\n                    </li>\r\n                    <div class=\"py-2px col-sm-6\" *ngIf=\"editInventory[eachinventory._id]\">\r\n                        <input value=\"{{eachinventory.hotdesk_price._4DP}}\" [(ngModel)]=\"hotdesk_price._4DP\" name=\"hotdesk_price._4DP\" class=\"form-control-static\">\r\n                    </div>\r\n                    <li class=\"list-group-item col-sm-6\"> Ten Days Pass </li>\r\n                    <li *ngIf=\"!editInventory[eachinventory._id]\" class=\"list-group-item col-sm-6\">\r\n                        Rs {{eachinventory.hotdesk_price._10DP}}/-\r\n                    </li>\r\n                    <div class=\"py-2px col-sm-6\" *ngIf=\"editInventory[eachinventory._id]\">\r\n                        <input value=\"{{eachinventory.hotdesk_price._10DP}}\" [(ngModel)]=\"hotdesk_price._10DP\" name=\"hotdesk_price._10DP\" class=\"form-control-static\">\r\n                    </div>\r\n                </ul>\r\n            </li>\r\n            <li class=\"list-group-item col-sm-6\"> Meeting Room Rate (Hourly)</li>\r\n            <li *ngIf=\"!editInventory[eachinventory._id]\" class=\"list-group-item col-sm-6\"> {{eachinventory.meetingroom_price.price}}/- </li>\r\n            <div class=\"py-2px col-sm-6\" *ngIf=\"editInventory[eachinventory._id]\">\r\n                <input value=\"{{eachinventory.meetingroom_price.price}}\" [(ngModel)]=\"meetingroom_price.price\" name=\"meetingroom_price.price\" class=\"form-control-static\">\r\n            </div>\r\n            <li class=\"list-group-item col-sm-6\"> Total Meeting Rooms</li>\r\n            <li *ngIf=\"!editInventory[eachinventory._id]\" class=\"list-group-item col-sm-6\"> {{eachinventory.meetingroom_price.total}} </li>\r\n            <div class=\"py-2px col-sm-6\" *ngIf=\"editInventory[eachinventory._id]\">\r\n                <input value=\"{{eachinventory.meetingroom_price.total}}\" [(ngModel)]=\"meetingroom_price.total\" name=\"meetingroom_price.total\" class=\"form-control-static\">\r\n            </div>\r\n            <li class=\"list-group-item col-sm-12\"> Dedicated Seats Pricing </li>\r\n            <li class=\"list-group-item col-sm-12\">\r\n                <ul class=\"list-group\">\r\n                    <li class=\"list-group-item col-sm-6\"> 18 days pass </li>\r\n                    <li *ngIf=\"!editInventory[eachinventory._id]\" class=\"list-group-item col-sm-6\">\r\n                        Rs {{eachinventory.permanentbook_price._18DP}}/-\r\n                    </li>\r\n                    <div class=\"py-2px col-sm-6\" *ngIf=\"editInventory[eachinventory._id]\">\r\n                        <input value=\"{{eachinventory.permanentbook_price._18DP}}\" [(ngModel)]=\"permanentbook_price._18DP\" name=\"permanentbook_price._18DP\" class=\"form-control-static\">\r\n                    </div>\r\n                    <li class=\"list-group-item col-sm-6\"> 30 days pass </li>\r\n                    <li *ngIf=\"!editInventory[eachinventory._id]\" class=\"list-group-item col-sm-6\">\r\n                        Rs {{eachinventory.permanentbook_price._30DP}}/-\r\n                    </li>\r\n                    <div class=\"py-2px col-sm-6\" *ngIf=\"editInventory[eachinventory._id]\">\r\n                        <input value=\"{{eachinventory.permanentbook_price._30DP}}\" [(ngModel)]=\"permanentbook_price._30DP\" name=\"permanentbook_price._30DP\" class=\"form-control-static\">\r\n                    </div>\r\n                </ul>\r\n            </li>\r\n            <li class=\"list-group-item col-sm-6\"> Total Seats </li>\r\n            <li *ngIf=\"!editInventory[eachinventory._id]\" class=\"list-group-item col-sm-6\"> {{eachinventory.total_seats}} </li>\r\n            <div class=\"py-2px col-sm-6\" *ngIf=\"editInventory[eachinventory._id]\">\r\n                <input value=\"{{eachinventory.total_seats}}\" [(ngModel)]=\"total_seats\" name=\"total_seats\" class=\"form-control-static\">\r\n            </div>\r\n        </div> -->\r\n<!-- \r\n        <div *ngIf=\"editInventory[eachinventory._id] && adminuser['manage_inventory']\">\r\n\r\n            <form (submit)=\"updateInventory(eachinventory._id)\">\r\n                <div>\r\n                    <h3> {{eachinventory.center}} </h3>\r\n                    <br>\r\n                    <label> Minimum duration of plan:  </label>\r\n                    <input type=\"number\" value=\"{{eachinventory.plan_duration}}\" name=\"plan_duration\"\r\n                                [(ngModel)]=\"plan_duration\" min=\"1\"> (months)\r\n                    <br>\r\n                    <label>Hotdesk</label>\r\n                    <ul>\r\n                        <li> One day pass : Rs <input type=\"number\" value=\"{{eachinventory.hotdesk_price._1DP}}\" name=\"hotdesk_price._1DP\"\r\n                                [(ngModel)]=\"hotdesk_price._1DP\"></li>\r\n                        <li> Four days pass : Rs <input type=\"number\" value=\"{{eachinventory.hotdesk_price._4DP}}\" name=\"hotdesk_price._4DP\"\r\n                                [(ngModel)]=\"hotdesk_price._4DP\"></li>\r\n                        <li> Ten Days Pass : Rs <input type=\"number\" value=\"{{eachinventory.hotdesk_price._10DP}}\" name=\"hotdesk_price._10DP\"\r\n                                [(ngModel)]=\"hotdesk_price._10DP\"></li>\r\n                    </ul>\r\n                    <label> Meeting Room </label>\r\n                    <ul>\r\n                        <li> Hourly Rate : Rs <input type=\"number\" value=\"{{eachinventory.meetingroom_price.price}}\" name=\"meetingroom_price.price\"\r\n                                [(ngModel)]=\"meetingroom_price.price\"> </li>\r\n                    </ul>\r\n                    <label> Dedicated Seats </label>\r\n                    <ul>\r\n                        <li> 18 days pass : Rs <input type=\"number\" value=\"{{eachinventory.permanentbook_price._18DP}}\" name=\"permanentbook_price._18DP\"\r\n                                [(ngModel)]=\"permanentbook_price._18DP\"></li>\r\n                        <li> 30 days pass : Rs <input type=\"number\" value=\"{{eachinventory.permanentbook_price._30DP}}\" name=\"permanentbook_price._30DP\"\r\n                                [(ngModel)]=\"permanentbook_price._30DP\"></li>\r\n                    </ul>\r\n                    <label> Seats </label>\r\n                    <ul>\r\n                        <li> Total :<input type=\"number\" value=\"{{eachinventory.total_seats}}\" name=\"total_seats\"\r\n                                [(ngModel)]=\"total_seats\"></li>\r\n                    </ul>\r\n                </div>\r\n                <input type=\"submit\" value=\"Update\">\r\n            </form> <br>\r\n            <input type=\"button\" (click)=\"toggleEditInventory(eachinventory._id)\" value=\"Cancel Update\">\r\n        </div>\r\n    </div> -->\r\n\r\n    <!-- </div>\r\n</div> -->\r\n<!-- /.content -->\r\n\r\n\r\n<section class=\"content\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4\" *ngFor=\"let eachinventory of inventory\">\r\n            <div class=\"box box-info mb-0\">\r\n                <div class=\"box-header\">\r\n                    <h3 class=\"box-title\"> {{eachinventory.center}}</h3>\r\n                    <div class=\"box-tools\">\r\n                        <a *ngIf=\"!editInventory[eachinventory._id]&&adminuser['manage_inventory']\" class=\"btn bg-transparent b-0\" (click)=\"toggleEditInventory(eachinventory._id)\">\r\n                            <i class=\"glyphicon glyphicon-pencil\"></i>\r\n                        </a>\r\n                        <a *ngIf=\"editInventory[eachinventory._id]\" class=\"btn bg-transparent b-0\" (click)=\"updateInventory(eachinventory._id)\">\r\n                            <i class=\"glyphicon glyphicon-ok\"></i>\r\n                        </a>\r\n                        <a *ngIf=\"editInventory[eachinventory._id]\" class=\"btn bg-transparent b-0\" (click)=\"toggleEditInventory(eachinventory._id)\">\r\n                            <i class=\"glyphicon glyphicon-remove\"></i>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                <!-- /.box-header -->\r\n                <div class=\"box-body\">\r\n                    <table id=\"example1\" class=\"table table-bordered table-striped\">\r\n                        <!-- <thead>\r\n                            <tr>\r\n                                <th>Minimum subscription duration</th>\r\n                                <th>Hotdesk Pricing</th>\r\n                                <th>Meeting Room Rate (Hourly)</th>\r\n                                <th>Total Meeting Rooms</th>\r\n                                <th>Dedicated Seats Pricing</th>\r\n                                <th>Total Seats</th>\r\n                            </tr>\r\n                        </thead> -->\r\n                        <tbody>\r\n                            <tr>\r\n                                <td>Minimum subscription duration</td>                                \r\n                                <td>\r\n                                    <span *ngIf=\"!editInventory[eachinventory._id]\"> {{eachinventory.plan_duration}} months</span>\r\n                                    <span *ngIf=\"editInventory[eachinventory._id]\">\r\n                                        <input value=\"{{eachinventory.plan_duration}}\" [(ngModel)]=\"plan_duration\" name=\"plan_duration\" class=\"form-control\">\r\n                                    </span>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td colspan=\"2\">\r\n                                    <div class=\"box-header\">\r\n                                        <h3 class=\"box-title\">Hotdesk Pricing</h3>\r\n                                    </div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>One day pass</td>\r\n                                <td>\r\n                                    <span *ngIf=\"!editInventory[eachinventory._id]\">&#x20B9; {{eachinventory.hotdesk_price._1DP}}</span>\r\n                                    <span *ngIf=\"editInventory[eachinventory._id]\">\r\n                                        <input value=\"{{eachinventory.hotdesk_price._1DP}}\" [(ngModel)]=\"hotdesk_price._1DP\" name=\"hotdesk_price._1DP\" class=\"form-control\">\r\n                                    </span>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Four days pass</td>\r\n                                <td>\r\n                                    <span *ngIf=\"!editInventory[eachinventory._id]\">&#x20B9; {{eachinventory.hotdesk_price._4DP}}</span>\r\n                                    <span *ngIf=\"editInventory[eachinventory._id]\">\r\n                                        <input value=\"{{eachinventory.hotdesk_price._4DP}}\" [(ngModel)]=\"hotdesk_price._4DP\" name=\"hotdesk_price._4DP\" class=\"form-control\">\r\n                                    </span>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Ten days pass</td>\r\n                                <td>\r\n                                    <span *ngIf=\"!editInventory[eachinventory._id]\">&#x20B9; {{eachinventory.hotdesk_price._10DP}}</span>\r\n                                    <span *ngIf=\"editInventory[eachinventory._id]\">\r\n                                        <input value=\"{{eachinventory.hotdesk_price._10DP}}\" [(ngModel)]=\"hotdesk_price._10DP\" name=\"hotdesk_price._10DP\" class=\"form-control\">\r\n                                    </span>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Meeting Room Rate (Hourly)</td>                                \r\n                                <td>\r\n                                    <span *ngIf=\"!editInventory[eachinventory._id]\">&#x20B9; {{eachinventory.meetingroom_price.price}}</span>\r\n                                    <span *ngIf=\"editInventory[eachinventory._id]\">\r\n                                        <input value=\"{{eachinventory.meetingroom_price.price}}\" [(ngModel)]=\"meetingroom_price.price\" name=\"meetingroom_price.price\"\r\n                                            class=\"form-control\">\r\n                                    </span>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Total Meeting Rooms</td>                                \r\n                                <td>\r\n                                    <span> {{eachinventory.meetingroom_price.total}}</span>\r\n                                    <!-- <span *ngIf=\"editInventory[eachinventory._id]\">\r\n                                        <input value=\"{{eachinventory.meetingroom_price.total}}\" [(ngModel)]=\"meetingroom_price.total\" name=\"meetingroom_price.total\"\r\n                                            class=\"form-control\">\r\n                                    </span> -->\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td colspan=\"2\">\r\n                                    <div class=\"box-header\">\r\n                                        <h3 class=\"box-title\">Dedicated desk Pricing</h3>\r\n                                    </div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>18 days pass</td>\r\n                                <td>\r\n                                    <span *ngIf=\"!editInventory[eachinventory._id]\">&#x20B9; {{eachinventory.permanentbook_price._18DP}}</span>\r\n                                    <span *ngIf=\"editInventory[eachinventory._id]\">\r\n                                        <input value=\"{{eachinventory.permanentbook_price._18DP}}\" [(ngModel)]=\"permanentbook_price._18DP\" name=\"permanentbook_price._18DP\"\r\n                                            class=\"form-control-static\">\r\n                                    </span>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>30 days pass</td>\r\n                                <td>\r\n                                    <span *ngIf=\"!editInventory[eachinventory._id]\">&#x20B9; {{eachinventory.permanentbook_price._30DP}}</span>\r\n                                    <span *ngIf=\"editInventory[eachinventory._id]\">\r\n                                        <input value=\"{{eachinventory.permanentbook_price._30DP}}\" [(ngModel)]=\"permanentbook_price._30DP\" name=\"permanentbook_price._30DP\"\r\n                                            class=\"form-control-static\">\r\n                                    </span>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Total Seats</td>                                \r\n                                <td>\r\n                                    <span> {{eachinventory.total_seats}}</span>\r\n                                    <!-- <span *ngIf=\"editInventory[eachinventory._id]\">\r\n                                        <input value=\"{{eachinventory.total_seats}}\" [(ngModel)]=\"total_seats\" name=\"total_seats\" class=\"form-control\">\r\n                                    </span> -->\r\n                                </td>\r\n\r\n                            </tr>\r\n                        </tbody>\r\n                        <!-- <tfoot>\r\n                            <tr>\r\n                                <th>Minimum subscription duration</th>\r\n                                <th>Hotdesk Pricing</th>\r\n                                <th>Meeting Room Rate (Hourly)</th>\r\n                                <th>Total Meeting Rooms</th>\r\n                                <th>Dedicated Seats Pricing</th>\r\n                                <th>Total Seats</th>\r\n                            </tr>\r\n                        </tfoot> -->\r\n                    </table>\r\n                </div>\r\n                <!-- /.box-body -->\r\n            </div>\r\n            <!-- /.box -->\r\n        </div>\r\n        <!-- /.col -->\r\n    </div>\r\n    <!-- /.row -->\r\n</section>\r\n<!-- /.content -->"

/***/ }),

/***/ "../../../../../src/app/components/admin/inventory/inventory.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InventoryComponent = (function () {
    function InventoryComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.loading = false;
        this.editInventory = [false];
        this.hotdesk_price = {
            _1DP: Number,
            _4DP: Number,
            _10DP: Number
        };
        this.permanentbook_price = {
            _18DP: Number,
            _30DP: Number
        };
        this.meetingroom_price = {
            price: Number,
            total: Number
        };
    }
    InventoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.getProfile().then(function (adminuser) {
            _this.adminuser = adminuser;
            _this.getInventory().then(function (inventory) {
                _this.inventory = inventory;
                _this.loading = false;
            });
        });
    };
    InventoryComponent.prototype.getProfile = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var adminuser = JSON.parse(localStorage.getItem("adminuser"));
            var id = {
                id: adminuser.id
            };
            _this.authService.getProfile(id).subscribe(function (profile) {
                resolve(profile.adminuser);
            }, function (err) {
                console.log(err);
                return false;
            });
        });
    };
    InventoryComponent.prototype.getInventory = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.authService.getInfo().subscribe(function (info) {
                resolve(info.inventory);
            });
        });
    };
    InventoryComponent.prototype.toggleEditInventory = function (id) {
        this.editInventory[id] = !this.editInventory[id];
        if (this.editInventory[id]) {
            for (var _i = 0, _a = this.inventory; _i < _a.length; _i++) {
                var eachInventory = _a[_i];
                if (id == eachInventory._id) {
                    this.plan_duration = eachInventory.plan_duration;
                    this.hotdesk_price._1DP = eachInventory.hotdesk_price._1DP;
                    this.hotdesk_price._4DP = eachInventory.hotdesk_price._4DP;
                    this.hotdesk_price._10DP = eachInventory.hotdesk_price._10DP;
                    this.permanentbook_price._18DP = eachInventory.permanentbook_price._18DP;
                    this.permanentbook_price._30DP = eachInventory.permanentbook_price._30DP;
                    this.meetingroom_price.price = eachInventory.meetingroom_price.price;
                    this.meetingroom_price.total = eachInventory.meetingroom_price.total;
                    this.total_seats = eachInventory.total_seats;
                    break;
                }
            }
        }
    };
    InventoryComponent.prototype.updateInventory = function (id) {
        var _this = this;
        if (confirm("Update Inventory?")) {
            var inventory = {
                inventory_id: id,
                hotdesk_price: this.hotdesk_price,
                permanentbook_price: this.permanentbook_price,
                meetingroom_price: this.meetingroom_price,
                total_seats: this.total_seats,
                plan_duration: this.plan_duration
            };
            this.authService.updateInventory(inventory).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessage.show('Inventory details updated successfully!', { cssClass: 'alert-success', timeout: 3000 });
                }
                else {
                    _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                }
            });
            this.editInventory[id] = !this.editInventory[id];
            this.getInventory().then(function (inventory) {
                _this.inventory = inventory;
            });
        }
    };
    return InventoryComponent;
}());
InventoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-inventory',
        template: __webpack_require__("../../../../../src/app/components/admin/inventory/inventory.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/inventory/inventory.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], InventoryComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=inventory.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/managebookings/managebookings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* body {\r\n  background-color: #006064;\r\n} */\r\n/* \r\n.container {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n} */\r\n\r\n/* .box {\r\n  position: absolute;\r\n  width: 16em;\r\n  height: 16em;\r\n  border: solid #fff;\r\n  background-color: #1B609B;\r\n  opacity: 0.11765;\r\n  -webkit-animation: ba 2s cubic-bezier(0.46, 0.03, 0.52, 0.96) infinite alternate;\r\n          animation: ba 2s cubic-bezier(0.46, 0.03, 0.52, 0.96) infinite alternate;\r\n}\r\n.box:nth-child(1) {\r\n  -webkit-animation-delay: 0s;\r\n          animation-delay: 0s;\r\n  -webkit-transform: translate(-50%, -50%) scale(0) rotate(360deg);\r\n          transform: translate(-50%, -50%) scale(0) rotate(360deg);\r\n}\r\n.box:nth-child(2) {\r\n  -webkit-animation-delay: 0.05882s;\r\n          animation-delay: 0.05882s;\r\n  -webkit-transform: translate(-50%, -50%) scale(0.05882) rotate(381.17647deg);\r\n          transform: translate(-50%, -50%) scale(0.05882) rotate(381.17647deg);\r\n}\r\n.box:nth-child(3) {\r\n  -webkit-animation-delay: 0.11765s;\r\n          animation-delay: 0.11765s;\r\n  -webkit-transform: translate(-50%, -50%) scale(0.11765) rotate(402.35294deg);\r\n          transform: translate(-50%, -50%) scale(0.11765) rotate(402.35294deg);\r\n}\r\n.box:nth-child(4) {\r\n  -webkit-animation-delay: 0.17647s;\r\n          animation-delay: 0.17647s;\r\n  -webkit-transform: translate(-50%, -50%) scale(0.17647) rotate(423.52941deg);\r\n          transform: translate(-50%, -50%) scale(0.17647) rotate(423.52941deg);\r\n}\r\n.box:nth-child(5) {\r\n  -webkit-animation-delay: 0.23529s;\r\n          animation-delay: 0.23529s;\r\n  -webkit-transform: translate(-50%, -50%) scale(0.23529) rotate(444.70588deg);\r\n          transform: translate(-50%, -50%) scale(0.23529) rotate(444.70588deg);\r\n}\r\n.box:nth-child(6) {\r\n  -webkit-animation-delay: 0.29412s;\r\n          animation-delay: 0.29412s;\r\n  -webkit-transform: translate(-50%, -50%) scale(0.29412) rotate(465.88235deg);\r\n          transform: translate(-50%, -50%) scale(0.29412) rotate(465.88235deg);\r\n}\r\n.box:nth-child(7) {\r\n  -webkit-animation-delay: 0.35294s;\r\n          animation-delay: 0.35294s;\r\n  -webkit-transform: translate(-50%, -50%) scale(0.35294) rotate(487.05882deg);\r\n          transform: translate(-50%, -50%) scale(0.35294) rotate(487.05882deg);\r\n}\r\n.box:nth-child(8) {\r\n  -webkit-animation-delay: 0.41176s;\r\n          animation-delay: 0.41176s;\r\n  -webkit-transform: translate(-50%, -50%) scale(0.41176) rotate(508.23529deg);\r\n          transform: translate(-50%, -50%) scale(0.41176) rotate(508.23529deg);\r\n}\r\n.box:nth-child(9) {\r\n  -webkit-animation-delay: 0.47059s;\r\n          animation-delay: 0.47059s;\r\n  -webkit-transform: translate(-50%, -50%) scale(0.47059) rotate(529.41176deg);\r\n          transform: translate(-50%, -50%) scale(0.47059) rotate(529.41176deg);\r\n}\r\n.box:nth-child(10) {\r\n  -webkit-animation-delay: 0.52941s;\r\n          animation-delay: 0.52941s;\r\n  -webkit-transform: translate(-50%, -50%) scale(0.52941) rotate(550.58824deg);\r\n          transform: translate(-50%, -50%) scale(0.52941) rotate(550.58824deg);\r\n}\r\n.box:nth-child(11) {\r\n  -webkit-animation-delay: 0.58824s;\r\n          animation-delay: 0.58824s;\r\n  -webkit-transform: translate(-50%, -50%) scale(0.58824) rotate(571.76471deg);\r\n          transform: translate(-50%, -50%) scale(0.58824) rotate(571.76471deg);\r\n}\r\n.box:nth-child(12) {\r\n  -webkit-animation-delay: 0.64706s;\r\n          animation-delay: 0.64706s;\r\n  -webkit-transform: translate(-50%, -50%) scale(0.64706) rotate(592.94118deg);\r\n          transform: translate(-50%, -50%) scale(0.64706) rotate(592.94118deg);\r\n}\r\n.box:nth-child(13) {\r\n  -webkit-animation-delay: 0.70588s;\r\n          animation-delay: 0.70588s;\r\n  -webkit-transform: translate(-50%, -50%) scale(0.70588) rotate(614.11765deg);\r\n          transform: translate(-50%, -50%) scale(0.70588) rotate(614.11765deg);\r\n}\r\n.box:nth-child(14) {\r\n  -webkit-animation-delay: 0.76471s;\r\n          animation-delay: 0.76471s;\r\n  -webkit-transform: translate(-50%, -50%) scale(0.76471) rotate(635.29412deg);\r\n          transform: translate(-50%, -50%) scale(0.76471) rotate(635.29412deg);\r\n}\r\n.box:nth-child(15) {\r\n  -webkit-animation-delay: 0.82353s;\r\n          animation-delay: 0.82353s;\r\n  -webkit-transform: translate(-50%, -50%) scale(0.82353) rotate(656.47059deg);\r\n          transform: translate(-50%, -50%) scale(0.82353) rotate(656.47059deg);\r\n}\r\n.box:nth-child(16) {\r\n  -webkit-animation-delay: 0.88235s;\r\n          animation-delay: 0.88235s;\r\n  -webkit-transform: translate(-50%, -50%) scale(0.88235) rotate(677.64706deg);\r\n          transform: translate(-50%, -50%) scale(0.88235) rotate(677.64706deg);\r\n}\r\n.box:nth-child(17) {\r\n  -webkit-animation-delay: 0.94118s;\r\n          animation-delay: 0.94118s;\r\n  -webkit-transform: translate(-50%, -50%) scale(0.94118) rotate(698.82353deg);\r\n          transform: translate(-50%, -50%) scale(0.94118) rotate(698.82353deg);\r\n}\r\n\r\n@-webkit-keyframes ba {\r\n  to {\r\n    -webkit-transform: translate(-50%, -50%) scale(1) rotate(0);\r\n            transform: translate(-50%, -50%) scale(1) rotate(0);\r\n  }\r\n}\r\n\r\n@keyframes ba {\r\n  to {\r\n    -webkit-transform: translate(-50%, -50%) scale(1) rotate(0);\r\n            transform: translate(-50%, -50%) scale(1) rotate(0);\r\n  }\r\n} */\r\n/* .bookinfo-btn{\r\n        position: fixed;\r\n        top: 50%;\r\n        left: 5%;\r\n        transform:translateY(-50%);\r\n} */\r\n\r\n\r\n.invoice-overlay{\r\n        width: 100vw;\r\n        height: 100vh;\r\n        background-color: rgba(0, 0, 0, 0.4);\r\n        position: fixed;\r\n        top: 0;\r\n        left: 0;\r\n        z-index: 99;\r\n}\r\n.invoice-close-btn{\r\n        /* position: fixed;\r\n        top: 12%;\r\n        right: 6%;\r\n        font-size: 2em; */\r\n        cursor: pointer;\r\n        font-weight: normal;\r\n        float: right;\r\n        /* z-index: 101; */\r\n}\r\n.invoice-popup{\r\n        color:black;\r\n        position: fixed;\r\n        top: 8%;\r\n        left: 19%;\r\n        background-color: white;\r\n        width: 75%;\r\n        height: 88%;\r\n        z-index: 100;\r\n        /* display: none; */\r\n        /* margin: 30%; */\r\n        /* transform: translate(-50%, -50%); */\r\n        /* border: solid 3px; */\r\n        /* padding: 20px; */\r\n        /* font-size: 1.2em; */\r\n        overflow: hidden;\r\n}\r\n.invoice-title{\r\n        font-size: 2em;\r\n        font-weight: bold;\r\n        text-align: center;\r\n}\r\n.invoice-tagline{\r\n        font-style: italic;\r\n        font-weight: light;\r\n        text-align: center;\r\n}\r\n.invoice-bold-style{\r\n        font-weight: bold;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/managebookings/managebookings.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-loader [loading]=\"loading\"></app-loader> -->\r\n<!-- <div *ngIf=\"!permanentbookings && !meetingroombookings && !hotdeskbookings\">\r\n  <div id=\"loading\" class=\"container\">\r\n    <div class=\"box\"></div>\r\n    <div class=\"box\"></div>\r\n    <div class=\"box\"></div>\r\n    <div class=\"box\"></div>\r\n    <div class=\"box\"></div>\r\n    <div class=\"box\"></div>\r\n    <div class=\"box\"></div>\r\n    <div class=\"box\"></div>\r\n    <div class=\"box\"></div>\r\n    <div class=\"box\"></div>\r\n    <div class=\"box\"></div>\r\n    <div class=\"box\"></div>\r\n    <div class=\"box\"></div>\r\n    <div class=\"box\"></div>\r\n    <div class=\"box\"></div>\r\n    <div class=\"box\"></div>\r\n    <div class=\"box\"></div>\r\n  </div>\r\n</div> -->\r\n<section class=\"content-header\">\r\n  <h1>\r\n    Booking History\r\n    <!-- <small>Preview</small> -->\r\n  </h1>\r\n</section>\r\n<section class=\"content\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <!-- <div class=\"col-sm-3\">\r\n        <div class=\"bookinfo-btn\">\r\n          <a [ngClass]=\"{disabled:bookingsToShow==1}\" class=\"btn btn-primary btn-block\" (click)=\"bookingsToShow=1\">Dedicated Bookings</a>\r\n          <a [ngClass]=\"{disabled:bookingsToShow==2}\" class=\"btn btn-primary btn-block\" (click)=\"bookingsToShow=2\">Meeting Room Bookings</a>\r\n          <a [ngClass]=\"{disabled:bookingsToShow==3}\" class=\"btn btn-primary btn-block\" (click)=\"bookingsToShow=3\">HotDesk Bookings</a>\r\n        </div>\r\n      </div> -->\r\n      <div class=\"form-group\">\r\n        <div class=\"btn-group\">\r\n          <a [ngClass]=\"{'btn-success':bookingsToShow==1}\" class=\"btn btn-primary\" (click)=\"bookingsToShow=1\">Dedicated Bookings</a>\r\n          <a [ngClass]=\"{'btn-success':bookingsToShow==2}\" class=\"btn btn-primary\" (click)=\"bookingsToShow=2\">Meeting Room Bookings</a>\r\n          <a [ngClass]=\"{'btn-success':bookingsToShow==3}\" class=\"btn btn-primary\" (click)=\"bookingsToShow=3\">HotDesk Bookings</a>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"\">\r\n        \r\n        <!-- Dedicated booking content -->\r\n        <div class=\"box box-info\" *ngIf=\"permanentbookings&&bookingsToShow==1\" id=\"dedicated\">\r\n          <div class=\"box-header\">\r\n            <h3 class=\"box-title\"> Dedicated Bookings (Total {{permanentbookings.length}} Bookings)</h3>\r\n          </div>\r\n          <!-- /.box-header -->\r\n          <div class=\"box-body\">\r\n            <table id=\"example1\" class=\"table table-bordered table-striped\">\r\n              <thead>\r\n                <tr>\r\n                  <th>S.No</th>\r\n                  <th>Username</th>\r\n                  <th>Email</th>\r\n                  <th>Plan</th>\r\n                  <th>Center</th>\r\n                  <th>Start Date</th>\r\n                  <th>End Date</th>\r\n                  <th>Seat</th>\r\n                  <th>Status</th>\r\n                  <th>Amount</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let booking of permanentbookings; let i=index\">\r\n                  <td>{{i+1}}</td>\r\n                  <td>{{booking.username}}</td>\r\n                  <td>{{booking.email}}</td>\r\n                  <td>{{booking.plan}}</td>\r\n                  <td>{{booking.center}}</td>\r\n                  <td>{{booking.startdate | date:'d MMM y'}}</td>\r\n                  <td>{{booking.enddate | date:'d MMM y'}}</td>\r\n                  <td>{{booking.seatsNumber}}</td>\r\n                  <td>\r\n                    <span *ngIf=\"!booking.isPendingApproval && booking.isApproved\" class=\"label label-success bg-logo\">Approved</span>\r\n                    <span *ngIf=\"booking.isPendingApproval\" class=\"label label-warning\">Pending</span>\r\n                    <span *ngIf=\"!booking.isPendingApproval && !booking.isApproved\" class=\"label label-danger\">Declined</span>\r\n                  </td>\r\n                  <td>&#x20B9; {{booking.amount}}</td>\r\n                  <td>\r\n                    <span *ngIf=\"adminuser.book_approve && booking.isPendingApproval\">\r\n                      <a class=\"btn bg-transparent b-0\" (click)=\"approve_permanent(booking._id, true)\">\r\n                        <i class=\"glyphicon glyphicon-ok\"></i>\r\n                      </a>\r\n                    </span>\r\n\r\n                    <span *ngIf=\"!booking.isApproved||booking.isPendingApproval\">\r\n                      <a *ngIf=\"adminuser.book_approve && booking.isPendingApproval\" (click)=\"approve_permanent(booking._id, false)\" class=\"btn bg-transparent b-0\">\r\n                        <i class=\"glyphicon glyphicon-remove\"></i>\r\n                      </a>\r\n\r\n                      <a *ngIf=\"adminuser.book_delete && !booking.isPendingApproval && !booking.isApproved\" (click)=\"movetotrash(booking._id, 'permanent')\" class=\"btn bg-transparent b-0\">\r\n                        <i class=\"glyphicon glyphicon-trash\"></i>\r\n                      </a>\r\n                    </span>\r\n\r\n                    <span *ngIf=\"adminuser.book_approve && !booking.isPendingApproval && booking.isApproved\">\r\n                      <button type=\"button\" (click)=\"invoice(booking._id, 'hotdesk');getInvoiceDates(0,booking.startdate)\" value=\"Invoice\" class=\"btn btn-primary\">Generate Invoice</button>\r\n                    </span>\r\n                  </td>\r\n                  \r\n                  <div *ngIf=\"showInvoiceId==booking._id\">\r\n                    <div class=\"invoice-overlay\" (click)=\"invoice(booking._id, 'hotdesk')\"></div>\r\n                    \r\n                    \r\n                    \r\n                    <div class=\"invoice-popup invoice\" [ngClass]=\"booking.invoiceVisible[i]==true?'':'hidden'\" *ngFor=\"let a of booking.amountBreakdown; let i=index;\">\r\n                      <!--Main content -->\r\n                      <div class=\"\">\r\n                        <!-- title row -->\r\n                        <div class=\"row\">\r\n                          <div class=\"col-xs-12\">\r\n                            <h2 class=\"page-header\">\r\n                              <i class=\"fa fa-globe\"></i> One Co.Work\r\n                              <small class=\"pull-right\">Date: Today's Date</small>\r\n                            </h2>\r\n                          </div>\r\n                          <!-- /.col -->\r\n                        </div>\r\n                        <!-- info row -->\r\n                        <div class=\"row invoice-info\">\r\n                          <div class=\"col-sm-4 invoice-col\">\r\n                            From\r\n                            <address>\r\n                              <strong>One Co.Work</strong>\r\n                              <br> Address 1\r\n                              <br> Address 2\r\n                              <br> Phone: (+91) 9599818189\r\n                              <br> Email: info@oneco.work\r\n                            </address>\r\n                          </div>\r\n                          <!-- /.col -->\r\n                          <div class=\"col-sm-4 invoice-col\">\r\n                            To\r\n                            <address>\r\n                              <strong>{{booking.name}}</strong>\r\n                              <br> Address 1\r\n                              <br> Address 2\r\n                              <br> Phone: {{booking.phone}}\r\n                              <br> Email: {{booking.email}}\r\n                            </address>\r\n                          </div>\r\n                          <!-- /.col -->\r\n                          <div class=\"col-sm-4 invoice-col\">\r\n                            <b>Invoice #{{i+1}}</b>\r\n                            <br>\r\n                            <!-- <br> -->\r\n                            <!-- <b>Order ID:</b> 4F3S8J<br> -->\r\n                            <!-- <b>Payment Due:</b> 2/22/2014<br> -->\r\n                            <!-- <b>Account:</b> 968-34567 -->\r\n                          </div>\r\n                          <!-- /.col -->\r\n                        </div>\r\n                        <!-- /.row -->\r\n                      \r\n                        <!-- Table row -->\r\n                        <div class=\"row\">\r\n                          <div class=\"col-xs-12 table-responsive\">\r\n                            <table class=\"table table-striped\">\r\n                              <thead>\r\n                                <tr>\r\n                                  <th>Plan</th>\r\n                                  <th>Seat(s)</th>\r\n                                  <th>Time Period</th>\r\n                                  <th>Subtotal</th>\r\n                                </tr>\r\n                              </thead>\r\n                              <tbody>\r\n                                <tr>\r\n                                  <td>{{booking.plan}}</td>\r\n                                  <td>{{booking.seatsNumber}}</td>\r\n                                  <td>{{invoiceStartDate | date: \"mediumDate\"}} - {{invoiceEndDate | date: \"mediumDate\"}}</td>\r\n                                  <td>&#x20B9; {{a.toFixed(2)}}</td>\r\n                                </tr>\r\n                              </tbody>\r\n                            </table>\r\n                          </div>\r\n                          <!-- /.col -->\r\n                        </div>\r\n                        <!-- /.row -->\r\n                      \r\n                        <div class=\"row\">\r\n                          <!-- accepted payments column -->\r\n                          <!-- <div class=\"col-xs-6\">\r\n                                <p class=\"lead\">Payment Methods:</p>\r\n                                <img src=\"../../dist/img/credit/visa.png\" alt=\"Visa\">\r\n                                <img src=\"../../dist/img/credit/mastercard.png\" alt=\"Mastercard\">\r\n                                <img src=\"../../dist/img/credit/american-express.png\" alt=\"American Express\">\r\n                                <img src=\"../../dist/img/credit/paypal2.png\" alt=\"Paypal\">\r\n                      \r\n                                <p class=\"text-muted well well-sm no-shadow\" style=\"margin-top: 10px;\">\r\n                                  Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem plugg\r\n                                  dopplr jibjab, movity jajah plickers sifteo edmodo ifttt zimbra.\r\n                                </p>\r\n                              </div> -->\r\n                          <!-- /.col -->\r\n                          <div class=\"col-xs-6 col-xs-push-3\">\r\n                            <p class=\"lead\">Amount Due {{invoiceEndDate | date: \"mediumDate\"}}</p>\r\n                      \r\n                            <div class=\"table-responsive\">\r\n                              <table class=\"table\">\r\n                                <tr>\r\n                                  <th style=\"width:50%\">Subtotal:</th>\r\n                                  <td>&#x20B9; {{a.toFixed(2)}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                  <th>GST (18%)</th>\r\n                                  <td>&#x20B9; {{(a*0.18).toFixed(2)}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                  <th>Total:</th>\r\n                                  <td>&#x20B9; {{(a*1.18).toFixed(2)}}</td>\r\n                                </tr>\r\n                              </table>\r\n                            </div>\r\n                          </div>\r\n                          <!-- /.col -->\r\n                        </div>\r\n                        <!-- /.row -->\r\n                      \r\n                        <!-- this row will not appear when printing -->\r\n                        <div class=\"row no-print\">\r\n                          <div class=\"col-xs-12\">\r\n                            <!-- <a class=\"btn btn-default\" (click)=\"invoice(booking._id, 'hotdesk')\">\r\n                              <i class=\"fa fa-remove\"></i> Cancel</a> -->\r\n                      \r\n                            <button type=\"button\" class=\"btn btn-secondary btn-w-md\" (click)=\"booking.invoiceVisible[i]=false;booking.invoiceVisible[(i-1)%booking.invoiceVisible.length]=true;getInvoiceDates(i-1,booking.startdate,booking.invoiceVisible.length)\">\r\n                              <i class=\"fa fa-arrow-left\"></i> Previous</button>\r\n                      \r\n                            <button type=\"button\" class=\"btn btn-secondary btn-w-md\" (click)=\"booking.invoiceVisible[i]=false;booking.invoiceVisible[(i+1)%booking.invoiceVisible.length]=true;getInvoiceDates(i+1,booking.startdate,booking.invoiceVisible.length)\">\r\n                              Next <i class=\"fa fa-arrow-right\"></i></button>\r\n                      \r\n                            <button type=\"button\" class=\"btn btn-danger pull-right btn-w-md\" (click)=\"invoice(booking._id, 'hotdesk')\"><i class=\"fa fa-remove\"></i> Cancel\r\n                                </button>\r\n                      \r\n                            <button type=\"button\" onclick=\"alert('in development')\" class=\"btn btn-logo pull-right mr-2\">\r\n                              <i class=\"fa fa-download\"></i> Generate PDF\r\n                            </button>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <!-- /.content -->\r\n                    </div>\r\n\r\n                  </div>\r\n                </tr>\r\n              </tbody>\r\n              <tfoot>\r\n                <tr>\r\n                  <th>S.No</th>\r\n                  <th>Username</th>\r\n                  <th>Email</th>\r\n                  <th>Plan</th>\r\n                  <th>Center</th>\r\n                  <th>Start Date</th>\r\n                  <th>End Date</th>\r\n                  <th>Seat</th>\r\n                  <th>Status</th>\r\n                  <th>Amount</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </tfoot>\r\n            </table>\r\n          </div>\r\n          <!-- /.box-body -->\r\n        </div>\r\n        <!-- /.box -->\r\n\r\n        <!-- <div *ngIf=\"permanentbookings&&bookingsToShow==1\" id=\"dedicated\">\r\n\r\n          <div class=\"col-sm-12 list-group-item\">\r\n            <h4> Dedicated Bookings (18/30 days), Total : {{permanentbookings.length}} Bookings </h4>\r\n          </div>\r\n          <div class=\"list-group\" *ngFor=\"let booking of permanentbookings; let i=index\">\r\n            <div class=\"col-sm-12\">\r\n              <hr>\r\n            </div>\r\n            <li class=\"list-group-item hidden\">NOTHING TO WORRY ABOUT</li>\r\n            <li [ngClass]=\"{'col-sm-10':adminuser.book_approve && booking.isPendingApproval,'col-sm-11':adminuser.book_approve && !booking.isPendingApproval && !booking.isApproved,'col-sm-12':adminuser.book_approve && !booking.isPendingApproval && booking.isApproved}\"\r\n              class=\"list-group-item active\">Dedicated Booking {{i+1}}</li>\r\n            <li *ngIf=\"adminuser.book_approve && booking.isPendingApproval\" class=\"list-group-item active col-sm-1\">\r\n              <i class=\"glyphicon glyphicon-ok\" (click)=\"approve_permanent(booking._id, true)\"></i>\r\n            </li>\r\n            <li *ngIf=\"!booking.isApproved||booking.isPendingApproval\" class=\"list-group-item active col-sm-1\">\r\n              <i class=\"glyphicon glyphicon-remove\" *ngIf=\"adminuser.book_approve && booking.isPendingApproval\" (click)=\"approve_permanent(booking._id, false)\"></i>\r\n              <i class=\"glyphicon glyphicon-trash\" *ngIf=\"adminuser.book_delete && !booking.isPendingApproval && !booking.isApproved\" (click)=\"movetotrash(booking._id, 'permanent')\"></i>\r\n            </li>\r\n            <li class=\"col-sm-6 list-group-item\">\r\n              <strong>Username</strong>\r\n            </li>\r\n            <li class=\"col-sm-6 list-group-item\">{{booking.username}}</li>\r\n            <li class=\"col-sm-6 list-group-item\">\r\n              <strong>Email</strong>\r\n            </li>\r\n            <li class=\"col-sm-6 list-group-item\">{{booking.email}}</li>\r\n            <li class=\"col-sm-6 list-group-item\">\r\n              <strong>Plan</strong>\r\n            </li>\r\n            <li class=\"col-sm-6 list-group-item\">{{booking.plan}}</li>\r\n            <li class=\"col-sm-6 list-group-item\">\r\n              <strong>Center</strong>\r\n            </li>\r\n            <li class=\"col-sm-6 list-group-item\">{{booking.center}}</li>\r\n            <li class=\"col-sm-6 list-group-item\">\r\n              <strong>Start Date</strong>\r\n            </li>\r\n            <li class=\"col-sm-6 list-group-item\">{{booking.startdate}}</li>\r\n            <li class=\"col-sm-6 list-group-item\">\r\n              <strong>End Date</strong>\r\n            </li>\r\n            <li class=\"col-sm-6 list-group-item\">{{booking.enddate}}</li>\r\n            <li class=\"col-sm-6 list-group-item\">\r\n              <strong>Alloted Fixed Seats</strong>\r\n            </li>\r\n            <li class=\"col-sm-6 list-group-item\">{{booking.seatsNumber}}</li>\r\n            <li class=\"col-sm-6 list-group-item\">\r\n              <strong>Status</strong>\r\n            </li>\r\n            <li *ngIf=\"!booking.isApproved && booking.isPendingApproval\" class=\"col-sm-6 list-group-item\">Pending Action</li>\r\n            <li *ngIf=\"booking.isApproved && !booking.isPendingApproval\" class=\"col-sm-6 list-group-item\">Approved</li>\r\n            <li *ngIf=\"!booking.isApproved && !booking.isPendingApproval\" class=\"col-sm-6 list-group-item\">Declined</li>\r\n            <li class=\"col-sm-6 list-group-item\">\r\n              <strong>Amount</strong>\r\n            </li>\r\n            <li class=\"col-sm-6 list-group-item\">{{booking.amount}}</li>\r\n            <li *ngIf=\"booking.isApproved\" class=\"col-sm-12 list-group-item\">\r\n              <button type=\"button\" (click)=\"invoice(booking._id, 'hotdesk');getInvoiceDates(0,booking.startdate)\" value=\"Invoice\">\r\n              Generate Invoice</button>\r\n            </li>\r\n            <li class=\"col-sm-12 list-group-item\" *ngIf=\"showInvoiceId==booking._id\">\r\n\r\n              <div class=\"invoice-overlay\" (click)=\"invoice(booking._id, 'hotdesk')\"></div>\r\n              <div class=\"invoice-close-btn\" (click)=\"invoice(booking._id, 'hotdesk')\">x</div>\r\n\r\n              \r\n              <div class=\"invoice-popup\" [ngClass]=\"booking.invoiceVisible[i]==true?'':'hidden'\" *ngFor=\"let a of booking.amountBreakdown; let i=index;\">\r\n                <div>\r\n\r\n                  <div class=\"col-sm-12 invoice-title\">ONE CO. WORK</div>\r\n                  <div class=\"col-sm-12 invoice-tagline\">Eat, Sleep, Work , Play for startups</div>\r\n\r\n                  <div style=\"visibility: hidden\" class=\"col-sm-12\">line space</div>\r\n\r\n                  <div class=\"col-sm-12 invoice-bold-style\">Invoice #[{{i+1}}]</div>\r\n                  <div class=\"col-sm-12\">Date: (Today's Date)</div>\r\n\r\n                  <div style=\"visibility: hidden\" class=\"col-sm-12\">line space</div>\r\n\r\n                  <div class=\"col-sm-6\">\r\n                    <div>From:</div>\r\n                    <div>Address 1</div>\r\n                    <div>Address 2</div>\r\n                    <div>Contact Details</div>\r\n                  </div>\r\n                  <div class=\"col-sm-6 text-right\">\r\n                    <div>To:</div>\r\n                    <div>{{booking.username}}</div>\r\n                    <div>{{booking.email}}</div>\r\n                    <div>More Details</div>\r\n                  </div>\r\n                  <div class=\"col-sm-12 list-group\">\r\n                    <div class=\"col-sm-12\" style=\"visibility: hidden\">first-col-item</div>\r\n                    <div class=\"col-sm-6 list-group-item active\">Booking Plan (Seats Allotted)</div>\r\n                    <div class=\"col-sm-4 list-group-item active\">Time Period</div>\r\n                    <div class=\"col-sm-2 list-group-item active\">Amount</div>\r\n\r\n                    <div class=\"col-sm-6 list-group-item\">{{booking.plan}} ({{booking.seatsNumber}})</div>\r\n                    <div class=\"col-sm-4 list-group-item\">{{invoiceStartDate | date: \"mediumDate\"}} - {{invoiceEndDate | date: \"mediumDate\"}}</div>\r\n                    <div class=\"col-sm-2 list-group-item\">{{a.toFixed(2)}}</div>\r\n\r\n                    <div class=\"col-sm-6 list-group-item\">-</div>\r\n                    <div class=\"col-sm-4 list-group-item\">GST (18%)</div>\r\n                    <div class=\"col-sm-2 list-group-item\">{{(a*0.18).toFixed(2)}}</div>\r\n\r\n                    <div class=\"col-sm-10 text-right list-group-item\">Total (inclusive of taxes): </div>\r\n                    <div class=\"col-sm-2 list-group-item\">{{(a*1.18).toFixed(2)}}</div>\r\n\r\n                    <div class=\"col-sm-12\" style=\"visibility: hidden\">last-col-item</div>\r\n                  </div>\r\n                  <div class=\"col-sm-8\" style=\"visibility: hidden\">space</div>\r\n                  <div class=\"col-sm-2\">\r\n                    <button class=\"btn btn-primary btn-block\" onclick=\"alert('in development')\">Generate</button>\r\n                  </div>\r\n                  <div class=\"col-sm-2\">\r\n                    <button class=\"btn btn-primary btn-block\" (click)=\"booking.invoiceVisible[i]=false;booking.invoiceVisible[(i+1)%booking.invoiceVisible.length]=true;getInvoiceDates(i+1,booking.startdate,booking.invoiceVisible.length)\">Next</button>\r\n                  </div>\r\n                  \r\n                </div>\r\n              </div>\r\n\r\n\r\n            </li>\r\n          </div>\r\n\r\n        </div> -->\r\n\r\n\r\n        <!-- Meeting room booking content -->\r\n        <div class=\"box box-info\" *ngIf=\"meetingroombookings&&bookingsToShow==2\" id=\"mtr\">\r\n          <div class=\"box-header\">\r\n            <h3 class=\"box-title\"> Meeting Bookings (Total {{meetingroombookings.length}} Bookings)</h3>\r\n          </div>\r\n          <!-- /.box-header -->\r\n          <div class=\"box-body\">\r\n            <table id=\"example1\" class=\"table table-bordered table-striped\">\r\n              <thead>\r\n                <tr>\r\n                  <th>S.No</th>\r\n                  <th>Username</th>\r\n                  <th>Email</th>\r\n                  <th>Center</th>\r\n                  <th>Date</th>\r\n                  <th>Start Time</th>\r\n                  <th>End Time</th>\r\n                  <th>Status</th>\r\n                  <th>Amount</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let booking of meetingroombookings;let i=index;\">\r\n                  <td>{{i+1}}</td>\r\n                  <td>{{booking.username}}</td>\r\n                  <td>{{booking.email}}</td>\r\n                  <td>{{booking.center}}</td>\r\n                  <td>{{booking.startdate | date:'d MMM y'}}</td>\r\n                  <td>{{booking.startdate | date:'hh:mm:ss a'}}</td>\r\n                  <td>{{booking.enddate | date:'hh:mm:ss a'}}</td>\r\n                  <td>\r\n                    <span *ngIf=\"booking.isApproved\" class=\"label label-success bg-logo\">Approved</span>\r\n                    <span *ngIf=\"!booking.isApproved\" class=\"label label-danger\">Declined</span>\r\n                  </td>\r\n                  <td>&#x20B9; {{booking.amount}}</td>\r\n                  \r\n                  <td>\r\n                    <!-- <span *ngIf=\"adminuser.book_approve && booking.isPendingApproval\">\r\n                      <a class=\"btn bg-transparent b-0\" (click)=\"approve_mtr(booking._id, true)\">\r\n                        <i class=\"glyphicon glyphicon-ok\"></i>\r\n                      </a>\r\n                    </span> -->\r\n                  \r\n                    <span *ngIf=\"!booking.isApproved\">\r\n                      <!-- <a *ngIf=\"adminuser.book_approve && booking.isPendingApproval\" (click)=\"approve_mtr(booking._id, false)\" class=\"btn bg-transparent b-0\">\r\n                        <i class=\"glyphicon glyphicon-remove\"></i>\r\n                      </a> -->\r\n                  \r\n                      <a *ngIf=\"adminuser.book_delete && !booking.isApproved\" (click)=\"movetotrash(booking._id, 'mtr')\"\r\n                        class=\"btn bg-transparent b-0\">\r\n                        <i class=\"glyphicon glyphicon-trash\"></i>\r\n                      </a>\r\n                    </span>\r\n                  \r\n                    <span *ngIf=\"adminuser.book_approve && !booking.isPendingApproval && booking.isApproved\">\r\n                      <button type=\"button\" (click)=\"invoice(booking._id, 'hotdesk');getInvoiceDates(0,booking.startdate)\" value=\"Invoice\" class=\"btn btn-primary\">Generate Invoice</button>\r\n                    </span>\r\n                  </td>\r\n\r\n                  <div *ngIf=\"showInvoiceId==booking._id\">\r\n                    <div class=\"invoice-overlay\" (click)=\"invoice(booking._id, 'hotdesk')\"></div>\r\n                    \r\n                    \r\n                    <div class=\"invoice-popup invoice\" [ngClass]=\"booking.invoiceVisible[i]==true?'':'hidden'\" *ngFor=\"let a of booking.amountBreakdown; let i=index;\">\r\n                      <!--Main content -->\r\n                      <div class=\"\">\r\n                        <!-- title row -->\r\n                        <div class=\"row\">\r\n                          <div class=\"col-xs-12\">\r\n                            <h2 class=\"page-header\">\r\n                              <i class=\"fa fa-globe\"></i> One Co.Work\r\n                              <small class=\"pull-right\">Date: Today's Date</small>\r\n                            </h2>\r\n                          </div>\r\n                          <!-- /.col -->\r\n                        </div>\r\n                        <!-- info row -->\r\n                        <div class=\"row invoice-info\">\r\n                          <div class=\"col-sm-4 invoice-col\">\r\n                            From\r\n                            <address>\r\n                              <strong>One Co.Work</strong>\r\n                              <br> Address 1\r\n                              <br> Address 2\r\n                              <br> Phone: (+91) 9599818189\r\n                              <br> Email: info@oneco.work\r\n                            </address>\r\n                          </div>\r\n                          <!-- /.col -->\r\n                          <div class=\"col-sm-4 invoice-col\">\r\n                            To\r\n                            <address>\r\n                              <strong>{{booking.name}}</strong>\r\n                              <br> Address 1\r\n                              <br> Address 2\r\n                              <br> Phone: {{booking.phone}}\r\n                              <br> Email: {{booking.email}}\r\n                            </address>\r\n                          </div>\r\n                          <!-- /.col -->\r\n                          <div class=\"col-sm-4 invoice-col\">\r\n                            <b>Invoice #{{i+1}}</b>\r\n                            <br>\r\n                            <!-- <br> -->\r\n                            <!-- <b>Order ID:</b> 4F3S8J<br> -->\r\n                            <!-- <b>Payment Due:</b> 2/22/2014<br> -->\r\n                            <!-- <b>Account:</b> 968-34567 -->\r\n                          </div>\r\n                          <!-- /.col -->\r\n                        </div>\r\n                        <!-- /.row -->\r\n                      \r\n                        <!-- Table row -->\r\n                        <div class=\"row\">\r\n                          <div class=\"col-xs-12 table-responsive\">\r\n                            <table class=\"table table-striped\">\r\n                              <thead>\r\n                                <tr>\r\n                                  <th>Plan</th>\r\n                                  <th>Seat(s)</th>\r\n                                  <th>Time Period</th>\r\n                                  <th>Subtotal</th>\r\n                                </tr>\r\n                              </thead>\r\n                              <tbody>\r\n                                <tr>\r\n                                  <td>{{booking.plan}}</td>\r\n                                  <td>{{booking.seatsNumber}}</td>\r\n                                  <td>{{invoiceStartDate | date: \"mediumDate\"}} - {{invoiceEndDate | date: \"mediumDate\"}}</td>\r\n                                  <td>&#x20B9; {{a.toFixed(2)}}</td>\r\n                                </tr>\r\n                              </tbody>\r\n                            </table>\r\n                          </div>\r\n                          <!-- /.col -->\r\n                        </div>\r\n                        <!-- /.row -->\r\n                      \r\n                        <div class=\"row\">\r\n                          <!-- accepted payments column -->\r\n                          <!-- <div class=\"col-xs-6\">\r\n                                <p class=\"lead\">Payment Methods:</p>\r\n                                <img src=\"../../dist/img/credit/visa.png\" alt=\"Visa\">\r\n                                <img src=\"../../dist/img/credit/mastercard.png\" alt=\"Mastercard\">\r\n                                <img src=\"../../dist/img/credit/american-express.png\" alt=\"American Express\">\r\n                                <img src=\"../../dist/img/credit/paypal2.png\" alt=\"Paypal\">\r\n                      \r\n                                <p class=\"text-muted well well-sm no-shadow\" style=\"margin-top: 10px;\">\r\n                                  Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem plugg\r\n                                  dopplr jibjab, movity jajah plickers sifteo edmodo ifttt zimbra.\r\n                                </p>\r\n                              </div> -->\r\n                          <!-- /.col -->\r\n                          <div class=\"col-xs-6 col-xs-push-3\">\r\n                            <p class=\"lead\">Amount Due {{invoiceEndDate | date: \"mediumDate\"}}</p>\r\n                      \r\n                            <div class=\"table-responsive\">\r\n                              <table class=\"table\">\r\n                                <tr>\r\n                                  <th style=\"width:50%\">Subtotal:</th>\r\n                                  <td>&#x20B9; {{a.toFixed(2)}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                  <th>GST (18%)</th>\r\n                                  <td>&#x20B9; {{(a*0.18).toFixed(2)}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                  <th>Total:</th>\r\n                                  <td>&#x20B9; {{(a*1.18).toFixed(2)}}</td>\r\n                                </tr>\r\n                              </table>\r\n                            </div>\r\n                          </div>\r\n                          <!-- /.col -->\r\n                        </div>\r\n                        <!-- /.row -->\r\n                      \r\n                        <!-- this row will not appear when printing -->\r\n                        <div class=\"row no-print\">\r\n                          <div class=\"col-xs-12\">\r\n                      \r\n                            <button type=\"button\" class=\"btn btn-secondary btn-w-md\" (click)=\"booking.invoiceVisible[i]=false;booking.invoiceVisible[(i-1)%booking.invoiceVisible.length]=true;getInvoiceDates(i-1,booking.startdate,booking.invoiceVisible.length)\">\r\n                              <i class=\"fa fa-arrow-left\"></i> Previous</button>\r\n                      \r\n                            <button type=\"button\" class=\"btn btn-secondary btn-w-md\" (click)=\"booking.invoiceVisible[i]=false;booking.invoiceVisible[(i+1)%booking.invoiceVisible.length]=true;getInvoiceDates(i+1,booking.startdate,booking.invoiceVisible.length)\">Next\r\n                              <i class=\"fa fa-arrow-right\"></i>\r\n                            </button>\r\n                      \r\n                            <button type=\"button\" class=\"btn btn-danger btn-w-md pull-right\" (click)=\"invoice(booking._id, 'hotdesk')\">\r\n                              <i class=\"fa fa-remove\"></i> Cancel</button>\r\n                      \r\n                            <button type=\"button\" onclick=\"alert('in development')\" class=\"btn btn-logo pull-right mr-2\">\r\n                              <i class=\"fa fa-download\"></i> Generate PDF\r\n                            </button>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <!-- /.content -->\r\n                    </div>\r\n\r\n                  </div>\r\n\r\n                </tr>\r\n              </tbody>\r\n              <tfoot>\r\n                <tr>\r\n                  <th>S.No</th>\r\n                  <th>Username</th>\r\n                  <th>Email</th>\r\n                  <th>Center</th>\r\n                  <th>Date</th>\r\n                  <th>Start Time</th>\r\n                  <th>End Time</th>\r\n                  <th>Status</th>\r\n                  <th>Amount</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </tfoot>\r\n            </table>\r\n          </div>\r\n          <!-- /.box-body -->\r\n        </div>\r\n        <!-- /.box -->\r\n\r\n\r\n        <!-- <div *ngIf=\"meetingroombookings&&bookingsToShow==2\" id=\"mtr\">\r\n          <div class=\"col-sm-12 list-group-item\">\r\n            <h4> Meeting Room Bookings, Total : {{meetingroombookings.length}} Bookings </h4>\r\n          </div>\r\n          <div class=\"list-group\" *ngFor=\"let booking of meetingroombookings; let i=index\">\r\n            <div class=\"col-sm-12\">\r\n              <hr>\r\n            </div>\r\n            <li class=\"list-group-item hidden\">NOTHING TO WORRY ABOUT</li>\r\n            <li [ngClass]=\"{'col-sm-10':adminuser.book_approve && booking.isPendingApproval,'col-sm-11':adminuser.book_approve && !booking.isPendingApproval && !booking.isApproved,'col-sm-12':adminuser.book_approve && !booking.isPendingApproval && booking.isApproved}\"\r\n              class=\"list-group-item active\">Meeting Room Booking {{i+1}}</li>\r\n            <li *ngIf=\"adminuser.book_approve && booking.isPendingApproval\" class=\"list-group-item active col-sm-1\">\r\n              <i class=\"glyphicon glyphicon-ok\" (click)=\"approve_mtr(booking._id, true)\"></i>\r\n            </li>\r\n            <li *ngIf=\"!booking.isApproved||booking.isPendingApproval\" class=\"list-group-item active col-sm-1\">\r\n              <i class=\"glyphicon glyphicon-remove\" *ngIf=\"adminuser.book_approve && booking.isPendingApproval\" (click)=\"approve_mtr(booking._id, false)\"></i>\r\n              <i class=\"glyphicon glyphicon-trash\" *ngIf=\"adminuser.book_delete && !booking.isPendingApproval && !booking.isApproved\" (click)=\"movetotrash(booking._id, 'mtr')\"></i>\r\n            </li>\r\n            <li class=\"col-sm-6 list-group-item\">\r\n              <strong>Username</strong>\r\n            </li>\r\n            <li class=\"col-sm-6 list-group-item\">{{booking.username}}</li>\r\n            <li class=\"col-sm-6 list-group-item\">\r\n              <strong>Email</strong>\r\n            </li>\r\n            <li class=\"col-sm-6 list-group-item\">{{booking.email}}</li>\r\n            <li class=\"col-sm-6 list-group-item\">\r\n              <strong>Center</strong>\r\n            </li>\r\n            <li class=\"col-sm-6 list-group-item\">{{booking.center}}</li>\r\n            <li class=\"col-sm-6 list-group-item\">\r\n              <strong>Date</strong>\r\n            </li>\r\n            <li class=\"col-sm-6 list-group-item\">{{booking.startdate.toLocaleDateString()}}</li>\r\n            <li class=\"col-sm-6 list-group-item\">\r\n              <strong>Start Time</strong>\r\n            </li>\r\n            <li class=\"col-sm-6 list-group-item\">{{booking.startdate.toLocaleTimeString()}}</li>\r\n            <li class=\"col-sm-6 list-group-item\">\r\n              <strong>End Time</strong>\r\n            </li>\r\n            <li class=\"col-sm-6 list-group-item\">{{booking.enddate.toLocaleTimeString()}}</li>\r\n            <li class=\"col-sm-6 list-group-item\">\r\n              <strong>Status</strong>\r\n            </li>\r\n            <li *ngIf=\"!booking.isApproved && booking.isPendingApproval\" class=\"col-sm-6 list-group-item\">Pending Action</li>\r\n            <li *ngIf=\"booking.isApproved && !booking.isPendingApproval\" class=\"col-sm-6 list-group-item\">Approved</li>\r\n            <li *ngIf=\"!booking.isApproved && !booking.isPendingApproval\" class=\"col-sm-6 list-group-item\">Declined</li>\r\n            <li class=\"col-sm-6 list-group-item\">\r\n              <strong>Amount</strong>\r\n            </li>\r\n            <li class=\"col-sm-6 list-group-item\">{{booking.amount}}</li>\r\n            <li class=\"col-sm-6 list-group-item\">\r\n              <strong>Amount</strong>\r\n            </li>\r\n            <li class=\"col-sm-6 list-group-item\">{{booking.amount}}</li>\r\n            <li *ngIf=\"booking.isApproved\" class=\"col-sm-12 list-group-item\">\r\n              <button type=\"button\" (click)=\"invoice(booking._id, 'hotdesk');getInvoiceDates(0,booking.startdate)\" value=\"Invoice\">\r\n              Generate Invoice</button>\r\n            </li>\r\n            <li class=\"col-sm-12 list-group-item\" *ngIf=\"showInvoiceId==booking._id\">\r\n\r\n              <div class=\"invoice-overlay\" (click)=\"invoice(booking._id, 'hotdesk')\"></div>\r\n              <div class=\"invoice-close-btn\" (click)=\"invoice(booking._id, 'hotdesk')\">x</div>\r\n\r\n              <div class=\"invoice-popup\" [ngClass]=\"booking.invoiceVisible[i]==true?'':'hidden'\" *ngFor=\"let a of booking.amountBreakdown; let i=index;\">\r\n                <div>\r\n\r\n                  <div class=\"col-sm-12 invoice-title\">ONE CO. WORK</div>\r\n                  <div class=\"col-sm-12 invoice-tagline\">Eat, Sleep, Work , Play for startups</div>\r\n\r\n                  <div style=\"visibility: hidden\" class=\"col-sm-12\">line space</div>\r\n\r\n                  <div class=\"col-sm-12 invoice-bold-style\">Invoice #[{{i+1}}]</div>\r\n                  <div class=\"col-sm-12\">Date: (Today's Date)</div>\r\n\r\n                  <div style=\"visibility: hidden\" class=\"col-sm-12\">line space</div>\r\n\r\n                  <div class=\"col-sm-6\">\r\n                    <div>From:</div>\r\n                    <div>Address 1</div>\r\n                    <div>Address 2</div>\r\n                    <div>Contact Details</div>\r\n                  </div>\r\n                  <div class=\"col-sm-6 text-right\">\r\n                    <div>To:</div>\r\n                    <div>{{booking.username}}</div>\r\n                    <div>{{booking.email}}</div>\r\n                    <div>More Details</div>\r\n                  </div>\r\n                  <div class=\"col-sm-12 list-group\">\r\n                    <div class=\"col-sm-12\" style=\"visibility: hidden\">first-col-item</div>\r\n                    <div class=\"col-sm-6 list-group-item active\">Booking Plan (Seats Allotted)</div>\r\n                    <div class=\"col-sm-4 list-group-item active\">Time Period</div>\r\n                    <div class=\"col-sm-2 list-group-item active\">Amount</div>\r\n\r\n                    <div class=\"col-sm-6 list-group-item\">{{booking.plan}} ({{booking.seatsNumber}})</div>\r\n                    <div class=\"col-sm-4 list-group-item\">{{invoiceStartDate | date: \"mediumDate\"}} - {{invoiceEndDate | date: \"mediumDate\"}}</div>\r\n                    <div class=\"col-sm-2 list-group-item\">{{a.toFixed(2)}}</div>\r\n\r\n                    <div class=\"col-sm-6 list-group-item\">-</div>\r\n                    <div class=\"col-sm-4 list-group-item\">GST (18%)</div>\r\n                    <div class=\"col-sm-2 list-group-item\">{{(a*0.18).toFixed(2)}}</div>\r\n\r\n                    <div class=\"col-sm-10 text-right list-group-item\">Total (inclusive of taxes): </div>\r\n                    <div class=\"col-sm-2 list-group-item\">{{(a*1.18).toFixed(2)}}</div>\r\n\r\n                    <div class=\"col-sm-12\" style=\"visibility: hidden\">last-col-item</div>\r\n                  </div>\r\n                  <div class=\"col-sm-8\" style=\"visibility: hidden\">space</div>\r\n                  <div class=\"col-sm-2\">\r\n                    <button class=\"btn btn-primary btn-block\" onclick=\"alert('in development')\">Generate</button>\r\n                  </div>\r\n                  <div class=\"col-sm-2\">\r\n                    <button class=\"btn btn-primary btn-block\" (click)=\"booking.invoiceVisible[i]=false;booking.invoiceVisible[(i+1)%booking.invoiceVisible.length]=true;getInvoiceDates(i+1,booking.startdate,booking.invoiceVisible.length)\">Next</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n            </li>\r\n          </div>\r\n        </div> -->\r\n\r\n        <!-- hotdesk booking content -->\r\n        <div class=\"box box-info\" *ngIf=\"hotdeskbookings&&bookingsToShow==3\" id=\"hotdesks\">\r\n          <div class=\"box-header\">\r\n            <h3 class=\"box-title\"> Hotdesk Bookings (Total {{hotdeskbookings.length}} Bookings)</h3>\r\n          </div>\r\n          <!-- /.box-header -->\r\n          <div class=\"box-body\">\r\n            <table id=\"example1\" class=\"table table-bordered table-striped\">\r\n              <thead>\r\n                <tr>\r\n                  <th>S.No</th>\r\n                  <th>Username</th>\r\n                  <th>Email</th>\r\n                  <th>Plan</th>\r\n                  <th>Center</th>\r\n                  <th>Start Date</th>\r\n                  <th>End Date</th>\r\n                  <th>Status</th>\r\n                  <th>Amount</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let booking of hotdeskbookings;let i=index;\">\r\n                  <td>{{i+1}}</td>\r\n                  <td>{{booking.username}}</td>\r\n                  <td>{{booking.email}}</td>\r\n                  <td>{{booking.plan}}</td>\r\n                  <td>{{booking.center}}</td>\r\n                  <td>{{booking.startdate | date:'d MMM y'}}</td>\r\n                  <td>{{booking.enddate | date:'d MMM y'}}</td>\r\n                  <td>\r\n                    <span *ngIf=\"!booking.isPendingApproval && booking.isApproved\" class=\"label label-success bg-logo\">Approved</span>\r\n                    <span *ngIf=\"booking.isPendingApproval\" class=\"label label-warning\">Pending</span>\r\n                    <span *ngIf=\"!booking.isPendingApproval && !booking.isApproved\" class=\"label label-danger\">Declined</span>\r\n                  </td>\r\n                  <td>&#x20B9; {{booking.amount}}</td>\r\n                  \r\n                  <td>\r\n                    <span *ngIf=\"adminuser.book_approve && booking.isPendingApproval\">\r\n                      <a class=\"btn bg-transparent b-0\" (click)=\"approve_hotdesk(booking._id, true)\">\r\n                        <i class=\"glyphicon glyphicon-ok\"></i>\r\n                      </a>\r\n                    </span>\r\n\r\n                    <span *ngIf=\"!booking.isApproved||booking.isPendingApproval\">\r\n                      <a *ngIf=\"adminuser.book_approve && booking.isPendingApproval\" (click)=\"approve_hotdesk(booking._id, false)\" class=\"btn bg-transparent b-0\">\r\n                        <i class=\"glyphicon glyphicon-remove\"></i>\r\n                      </a>\r\n\r\n                      <a *ngIf=\"adminuser.book_delete && !booking.isPendingApproval && !booking.isApproved\" (click)=\"movetotrash(booking._id, 'hotdesk')\" class=\"btn bg-transparent b-0\">\r\n                        <i class=\"glyphicon glyphicon-trash\"></i>\r\n                      </a>\r\n                    </span>\r\n\r\n                    <span *ngIf=\"adminuser.book_approve && !booking.isPendingApproval && booking.isApproved\">\r\n                      <button type=\"button\" (click)=\"invoice(booking._id, 'hotdesk');getInvoiceDates(0,booking.startdate)\" value=\"Invoice\" class=\"btn btn-primary\">Generate Invoice</button>\r\n                    </span>\r\n                  </td>\r\n                  \r\n                  <div *ngIf=\"showInvoiceId==booking._id\">\r\n                    <div class=\"invoice-overlay\" (click)=\"invoice(booking._id, 'hotdesk')\"></div>\r\n                    \r\n                    \r\n                    <div class=\"invoice-popup invoice\" [ngClass]=\"booking.invoiceVisible[i]==true?'':'hidden'\" *ngFor=\"let a of booking.amountBreakdown; let i=index;\">\r\n                      <!--Main content -->\r\n                      <div class=\"\">\r\n                        <!-- title row -->\r\n                        <div class=\"row\">\r\n                          <div class=\"col-xs-12\">\r\n                            <h2 class=\"page-header\">\r\n                              <i class=\"fa fa-globe\"></i> One Co.Work\r\n                              <small class=\"pull-right\">Date: Today's Date</small>\r\n                            </h2>\r\n                          </div>\r\n                          <!-- /.col -->\r\n                        </div>\r\n                        <!-- info row -->\r\n                        <div class=\"row invoice-info\">\r\n                          <div class=\"col-sm-4 invoice-col\">\r\n                            From\r\n                            <address>\r\n                              <strong>One Co.Work</strong>\r\n                              <br> Address 1\r\n                              <br> Address 2\r\n                              <br> Phone: (+91) 9599818189\r\n                              <br> Email: info@oneco.work\r\n                            </address>\r\n                          </div>\r\n                          <!-- /.col -->\r\n                          <div class=\"col-sm-4 invoice-col\">\r\n                            To\r\n                            <address>\r\n                              <strong>{{booking.name}}</strong>\r\n                              <br> Address 1\r\n                              <br> Address 2\r\n                              <br> Phone: {{booking.phone}}\r\n                              <br> Email: {{booking.email}}\r\n                            </address>\r\n                          </div>\r\n                          <!-- /.col -->\r\n                          <div class=\"col-sm-4 invoice-col\">\r\n                            <b>Invoice #{{i+1}}</b>\r\n                            <br>\r\n                            <!-- <br> -->\r\n                            <!-- <b>Order ID:</b> 4F3S8J<br> -->\r\n                            <!-- <b>Payment Due:</b> 2/22/2014<br> -->\r\n                            <!-- <b>Account:</b> 968-34567 -->\r\n                          </div>\r\n                          <!-- /.col -->\r\n                        </div>\r\n                        <!-- /.row -->\r\n                      \r\n                        <!-- Table row -->\r\n                        <div class=\"row\">\r\n                          <div class=\"col-xs-12 table-responsive\">\r\n                            <table class=\"table table-striped\">\r\n                              <thead>\r\n                                <tr>\r\n                                  <th>Plan</th>\r\n                                  <th>Seat(s)</th>\r\n                                  <th>Time Period</th>\r\n                                  <th>Subtotal</th>\r\n                                </tr>\r\n                              </thead>\r\n                              <tbody>\r\n                                <tr>\r\n                                  <td>{{booking.plan}}</td>\r\n                                  <td>{{booking.seatsNumber}}</td>\r\n                                  <td>{{invoiceStartDate | date: \"mediumDate\"}} - {{invoiceEndDate | date: \"mediumDate\"}}</td>\r\n                                  <td>&#x20B9; {{a.toFixed(2)}}</td>\r\n                                </tr>\r\n                              </tbody>\r\n                            </table>\r\n                          </div>\r\n                          <!-- /.col -->\r\n                        </div>\r\n                        <!-- /.row -->\r\n                      \r\n                        <div class=\"row\">\r\n                          <!-- accepted payments column -->\r\n                          <!-- <div class=\"col-xs-6\">\r\n                                <p class=\"lead\">Payment Methods:</p>\r\n                                <img src=\"../../dist/img/credit/visa.png\" alt=\"Visa\">\r\n                                <img src=\"../../dist/img/credit/mastercard.png\" alt=\"Mastercard\">\r\n                                <img src=\"../../dist/img/credit/american-express.png\" alt=\"American Express\">\r\n                                <img src=\"../../dist/img/credit/paypal2.png\" alt=\"Paypal\">\r\n                      \r\n                                <p class=\"text-muted well well-sm no-shadow\" style=\"margin-top: 10px;\">\r\n                                  Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem plugg\r\n                                  dopplr jibjab, movity jajah plickers sifteo edmodo ifttt zimbra.\r\n                                </p>\r\n                              </div> -->\r\n                          <!-- /.col -->\r\n                          <div class=\"col-xs-6 col-xs-push-3\">\r\n                            <p class=\"lead\">Amount Due {{invoiceEndDate | date: \"mediumDate\"}}</p>\r\n                      \r\n                            <div class=\"table-responsive\">\r\n                              <table class=\"table\">\r\n                                <tr>\r\n                                  <th style=\"width:50%\">Subtotal:</th>\r\n                                  <td>&#x20B9; {{a.toFixed(2)}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                  <th>GST (18%)</th>\r\n                                  <td>&#x20B9; {{(a*0.18).toFixed(2)}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                  <th>Total:</th>\r\n                                  <td>&#x20B9; {{(a*1.18).toFixed(2)}}</td>\r\n                                </tr>\r\n                              </table>\r\n                            </div>\r\n                          </div>\r\n                          <!-- /.col -->\r\n                        </div>\r\n                        <!-- /.row -->\r\n                      \r\n                        <!-- this row will not appear when printing -->\r\n                        <div class=\"row no-print\">\r\n                          <div class=\"col-xs-12\">\r\n                      \r\n                            <button type=\"button\" class=\"btn btn-secondary btn-w-md\" (click)=\"booking.invoiceVisible[i]=false;booking.invoiceVisible[(i-1)%booking.invoiceVisible.length]=true;getInvoiceDates(i-1,booking.startdate,booking.invoiceVisible.length)\">\r\n                              <i class=\"fa fa-arrow-left\"></i> Previous</button>\r\n                      \r\n                            <button type=\"button\" class=\"btn btn-secondary btn-w-md\" (click)=\"booking.invoiceVisible[i]=false;booking.invoiceVisible[(i+1)%booking.invoiceVisible.length]=true;getInvoiceDates(i+1,booking.startdate,booking.invoiceVisible.length)\">Next\r\n                              <i class=\"fa fa-arrow-right\"></i>\r\n                            </button>\r\n                      \r\n                            <button type=\"button\" class=\"btn btn-danger btn-w-md pull-right\" (click)=\"invoice(booking._id, 'hotdesk')\">\r\n                              <i class=\"fa fa-remove\"></i> Cancel</button>\r\n                      \r\n                            <button type=\"button\" onclick=\"alert('In Development')\" class=\"btn btn-logo pull-right mr-2\">\r\n                              <i class=\"fa fa-download\"></i> Generate PDF\r\n                            </button>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <!-- /.content -->\r\n                    </div>\r\n\r\n                  </div>\r\n\r\n                </tr>\r\n              </tbody>\r\n              <tfoot>\r\n                <tr>\r\n                  <th>S.No</th>\r\n                  <th>Username</th>\r\n                  <th>Email</th>\r\n                  <th>Plan</th>\r\n                  <th>Center</th>\r\n                  <th>Start Date</th>\r\n                  <th>End Date</th>\r\n                  <th>Status</th>\r\n                  <th>Amount</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </tfoot>\r\n            </table>\r\n          </div>\r\n          <!-- /.box-body -->\r\n        </div>\r\n        <!-- /.box -->\r\n\r\n\r\n        <!-- <div *ngIf=\"hotdeskbookings&&bookingsToShow==3\" id=\"hotdesks\">\r\n          <div class=\"col-sm-12 list-group-item\">\r\n            <h4> HotDesk Bookings, Total : {{hotdeskbookings.length}} Bookings </h4>\r\n          </div>\r\n          <div class=\"list-group\" *ngFor=\"let booking of hotdeskbookings; let i=index\">\r\n            <div class=\"col-sm-12\">\r\n              <hr>\r\n            </div>\r\n            <li class=\"list-group-item hidden\">NOTHING TO WORRY ABOUT</li>\r\n            <li [ngClass]=\"{'col-sm-10':adminuser.book_approve && booking.isPendingApproval,'col-sm-11':adminuser.book_approve && !booking.isPendingApproval && !booking.isApproved,'col-sm-12':adminuser.book_approve && !booking.isPendingApproval && booking.isApproved}\"\r\n              class=\"list-group-item active\">HotDesk Booking {{i+1}}</li>\r\n            <li *ngIf=\"adminuser.book_approve && booking.isPendingApproval\" class=\"list-group-item active col-sm-1\">\r\n              <i class=\"glyphicon glyphicon-ok\" (click)=\"approve_hotdesk(booking._id, true)\"></i>\r\n            </li>\r\n            <li *ngIf=\"!booking.isApproved||booking.isPendingApproval\" class=\"list-group-item active col-sm-1\">\r\n              <i class=\"glyphicon glyphicon-remove\" *ngIf=\"adminuser.book_approve && booking.isPendingApproval\" (click)=\"approve_hotdesk(booking._id, false)\"></i>\r\n              <i class=\"glyphicon glyphicon-trash\" *ngIf=\"adminuser.book_delete && !booking.isPendingApproval && !booking.isApproved\" (click)=\"movetotrash(booking._id, 'hotdesk')\"></i>\r\n            </li>\r\n            <li class=\"col-sm-6 list-group-item\">\r\n              <strong>Username</strong>\r\n            </li>\r\n            <li class=\"col-sm-6 list-group-item\">{{booking.username}}</li>\r\n            <li class=\"col-sm-6 list-group-item\">\r\n              <strong>Email</strong>\r\n            </li>\r\n            <li class=\"col-sm-6 list-group-item\">{{booking.email}}</li>\r\n            <li class=\"col-sm-6 list-group-item\">\r\n              <strong>Plan</strong>\r\n            </li>\r\n            <li class=\"col-sm-6 list-group-item\">{{booking.plan}}</li>\r\n            <li class=\"col-sm-6 list-group-item\">\r\n              <strong>Center</strong>\r\n            </li>\r\n            <li class=\"col-sm-6 list-group-item\">{{booking.center}}</li>\r\n            <li class=\"col-sm-6 list-group-item\">\r\n              <strong>Start Date</strong>\r\n            </li>\r\n            <li class=\"col-sm-6 list-group-item\">{{booking.startdate}}</li>\r\n            <li class=\"col-sm-6 list-group-item\">\r\n              <strong>End Date</strong>\r\n            </li>\r\n            <li class=\"col-sm-6 list-group-item\">{{booking.enddate}}</li>\r\n            <li class=\"col-sm-6 list-group-item\">\r\n              <strong>Total Seats</strong>\r\n            </li>\r\n            <li class=\"col-sm-6 list-group-item\">{{booking.seats}}</li>\r\n            <li class=\"col-sm-6 list-group-item\">\r\n              <strong>Status</strong>\r\n            </li>\r\n            <li *ngIf=\"!booking.isApproved && booking.isPendingApproval\" class=\"col-sm-6 list-group-item\">Pending Action</li>\r\n            <li *ngIf=\"booking.isApproved && !booking.isPendingApproval\" class=\"col-sm-6 list-group-item\">Approved</li>\r\n            <li *ngIf=\"!booking.isApproved && !booking.isPendingApproval\" class=\"col-sm-6 list-group-item\">Declined</li>\r\n            <li class=\"col-sm-6 list-group-item\">\r\n              <strong>Amount</strong>\r\n            </li>\r\n            <li class=\"col-sm-6 list-group-item\">{{booking.amount}}</li>\r\n            <li class=\"col-sm-6 list-group-item\">\r\n              <strong>Amount</strong>\r\n            </li>\r\n            <li class=\"col-sm-6 list-group-item\">{{booking.amount}}</li>\r\n            <li *ngIf=\"booking.isApproved\" class=\"col-sm-12 list-group-item\">\r\n              <button type=\"button\" (click)=\"invoice(booking._id, 'hotdesk');getInvoiceDates(0,booking.startdate)\" value=\"Invoice\">\r\n              Generate Invoice</button>\r\n            </li>\r\n            <li class=\"col-sm-12 list-group-item\" *ngIf=\"showInvoiceId==booking._id\">\r\n\r\n              <div class=\"invoice-overlay\" (click)=\"invoice(booking._id, 'hotdesk')\"></div>\r\n              <div class=\"invoice-close-btn\" (click)=\"invoice(booking._id, 'hotdesk')\">x</div>\r\n\r\n              <div class=\"invoice-popup\" [ngClass]=\"booking.invoiceVisible[i]==true?'':'hidden'\" *ngFor=\"let a of booking.amountBreakdown; let i=index;\">\r\n                <div>\r\n\r\n                  <div class=\"col-sm-12 invoice-title\">ONE CO. WORK</div>\r\n                  <div class=\"col-sm-12 invoice-tagline\">Eat, Sleep, Work , Play for startups</div>\r\n\r\n                  <div style=\"visibility: hidden\" class=\"col-sm-12\">line space</div>\r\n\r\n                  <div class=\"col-sm-12 invoice-bold-style\">Invoice #[{{i+1}}]</div>\r\n                  <div class=\"col-sm-12\">Date: (Today's Date)</div>\r\n\r\n                  <div style=\"visibility: hidden\" class=\"col-sm-12\">line space</div>\r\n\r\n                  <div class=\"col-sm-6\">\r\n                    <div>From:</div>\r\n                    <div>Address 1</div>\r\n                    <div>Address 2</div>\r\n                    <div>Contact Details</div>\r\n                  </div>\r\n                  <div class=\"col-sm-6 text-right\">\r\n                    <div>To:</div>\r\n                    <div>{{booking.username}}</div>\r\n                    <div>{{booking.email}}</div>\r\n                    <div>More Details</div>\r\n                  </div>\r\n                  <div class=\"col-sm-12 list-group\">\r\n                    <div class=\"col-sm-12\" style=\"visibility: hidden\">first-col-item</div>\r\n                    <div class=\"col-sm-6 list-group-item active\">Booking Plan (Seats Allotted)</div>\r\n                    <div class=\"col-sm-4 list-group-item active\">Time Period</div>\r\n                    <div class=\"col-sm-2 list-group-item active\">Amount</div>\r\n\r\n                    <div class=\"col-sm-6 list-group-item\">{{booking.plan}} ({{booking.seatsNumber}})</div>\r\n                    <div class=\"col-sm-4 list-group-item\">{{invoiceStartDate | date: \"mediumDate\"}} - {{invoiceEndDate | date: \"mediumDate\"}}</div>\r\n                    <div class=\"col-sm-2 list-group-item\">{{a.toFixed(2)}}</div>\r\n\r\n                    <div class=\"col-sm-6 list-group-item\">-</div>\r\n                    <div class=\"col-sm-4 list-group-item\">GST (18%)</div>\r\n                    <div class=\"col-sm-2 list-group-item\">{{(a*0.18).toFixed(2)}}</div>\r\n\r\n                    <div class=\"col-sm-10 text-right list-group-item\">Total (inclusive of taxes): </div>\r\n                    <div class=\"col-sm-2 list-group-item\">{{(a*1.18).toFixed(2)}}</div>\r\n\r\n                    <div class=\"col-sm-12\" style=\"visibility: hidden\">last-col-item</div>\r\n                  </div>\r\n                  <div class=\"col-sm-8\" style=\"visibility: hidden\">space</div>\r\n                  <div class=\"col-sm-2\">\r\n                    <button class=\"btn btn-primary btn-block\" onclick=\"alert('in development')\">Generate</button>\r\n                  </div>\r\n                  <div class=\"col-sm-2\">\r\n                    <button class=\"btn btn-primary btn-block\" (click)=\"booking.invoiceVisible[i]=false;booking.invoiceVisible[(i+1)%booking.invoiceVisible.length]=true;getInvoiceDates(i+1,booking.startdate,booking.invoiceVisible.length)\">Next</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n            </li>\r\n          </div>\r\n        </div> -->\r\n\r\n      </div>\r\n\r\n    </div>\r\n    <!-- /.col -->\r\n  </div>\r\n  <!-- /.row -->  \r\n</section>\r\n<!-- /.content -->"

/***/ }),

/***/ "../../../../../src/app/components/admin/managebookings/managebookings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagebookingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// const elementToPrint = document.getElementById('foo'); //The html element to become a pdf
// const pdf = new jsPDF('p', 'pt', 'a4');
var ManagebookingsComponent = (function () {
    function ManagebookingsComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.loading = false;
        this.bookingsToShow = 1; // 1 -> Dedicated, 2 -> Meeting Room, 3 -> HotDesk
        this.showInvoiceId = "";
        this.monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        //for invoice view only
        this.invoiceStartDate = new Date();
        this.invoiceEndDate = new Date();
    }
    ManagebookingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.getProfile().then(function (adminuser) {
            _this.adminuser = adminuser;
            if (!adminuser['book_approve'] && !adminuser['book_create'] && !adminuser['book_delete']) {
                _this.flashMessage.show('Access Denied to Manage Bookings', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/profile']);
            }
            if (_this.adminuser['center']) {
                _this.centers = {
                    centers: _this.adminuser['center']
                };
                _this.getAllPermanentBookings(_this.centers).then(function (permanentbookings) {
                    _this.permanentbookings = permanentbookings;
                    if (_this.permanentbookings.length == 0) {
                        _this.permanentbookings = null;
                    }
                    _this.loading = false;
                });
                _this.getAllHotdeskBookings(_this.centers).then(function (hotdeskbookings) {
                    _this.hotdeskbookings = hotdeskbookings;
                    if (_this.hotdeskbookings.length == 0) {
                        _this.hotdeskbookings = null;
                    }
                    _this.loading = false;
                });
                _this.getAllMeetingRoomBookings(_this.centers).then(function (meetingroombookings) {
                    _this.meetingroombookings = meetingroombookings;
                    if (_this.meetingroombookings.length == 0) {
                        _this.meetingroombookings = null;
                    }
                    _this.loading = false;
                });
            }
        });
    };
    ManagebookingsComponent.prototype.getInvoiceDates = function (i, startdate, length) {
        if (length === void 0) { length = 0; }
        var tmpStartDate = new Date(startdate);
        var tmpEndDate = new Date(startdate);
        if (i == length) {
            i = 0;
        }
        if (i == 0) {
            this.invoiceStartDate = tmpStartDate;
            tmpEndDate.setMonth(tmpEndDate.getMonth() + 1);
            tmpEndDate.setDate(tmpEndDate.getDate() - 1);
            this.invoiceEndDate = tmpEndDate;
        }
        else if (i == 1) {
            tmpStartDate.setMonth(tmpStartDate.getMonth() + 1);
            // tmpStartDate.setDate(tmpStartDate.getDate()-1);
            tmpEndDate.setMonth(tmpStartDate.getMonth() + 1);
            tmpEndDate.setDate(0);
            this.invoiceStartDate = tmpStartDate;
            this.invoiceEndDate = tmpEndDate;
        }
        else {
            tmpStartDate.setMonth(tmpStartDate.getMonth() + i);
            tmpStartDate.setDate(1);
            this.invoiceStartDate = tmpStartDate;
            tmpEndDate.setMonth(tmpEndDate.getMonth() + i + 1);
            tmpEndDate.setDate(0);
            this.invoiceEndDate = tmpEndDate;
        }
    };
    ManagebookingsComponent.prototype.getAllMeetingRoomBookings = function (centers) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.authService.getMeetingroomBookings(centers).subscribe(function (bookingdata) {
                if (bookingdata.success) {
                    for (var _i = 0, _a = bookingdata.MeetingRoomBookings; _i < _a.length; _i++) {
                        var booking = _a[_i];
                        booking.sdate = new Date(booking.startdate);
                        booking.startmonth = booking.sdate.getMonth();
                        booking.year = booking.sdate.getYear();
                        booking.startdate = new Date(booking.startdate);
                        booking.enddate = new Date(booking.enddate);
                        booking.invoiceVisible = [];
                        for (var ind = 0; ind <= (booking.enddate.getMonth() + 12 * (booking.enddate.getYear() - booking.startdate.getYear()) - booking.startdate.getMonth()); ind++) {
                            // console.log("called");
                            if (!ind) {
                                booking.invoiceVisible.push(true);
                            }
                            else {
                                booking.invoiceVisible.push(false);
                            }
                        }
                        // console.log(booking.invoiceVisible);
                    }
                    resolve(bookingdata.MeetingRoomBookings.reverse());
                }
                else {
                    _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                }
            });
        });
    };
    ManagebookingsComponent.prototype.getInventory = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.authService.getInfo().subscribe(function (info) {
                resolve(info.inventory);
            });
        });
    };
    ManagebookingsComponent.prototype.getAllHotdeskBookings = function (centers) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.authService.getHotdeskBookings(centers).subscribe(function (data) {
                if (data.success) {
                    for (var _i = 0, _a = data.HotdeskBookings; _i < _a.length; _i++) {
                        var booking = _a[_i];
                        booking.sdate = new Date(booking.startdate);
                        booking.edate = new Date(booking.enddate);
                        booking.startmonth = booking.sdate.getMonth();
                        booking.year = booking.sdate.getFullYear();
                        booking.startdate = booking.startdate.slice(0, booking.startdate.indexOf("T"));
                        booking.enddate = booking.enddate.slice(0, booking.enddate.indexOf("T"));
                        booking.invoiceVisible = [];
                        for (var ind = 0; ind <= (booking.edate.getMonth() + 12 * (booking.edate.getYear() - booking.sdate.getYear()) - booking.sdate.getMonth()); ind++) {
                            // console.log("called");
                            if (!ind) {
                                booking.invoiceVisible.push(true);
                            }
                            else {
                                booking.invoiceVisible.push(false);
                            }
                        }
                        // console.log(booking.invoiceVisible);
                        if (booking.plan == "1DP") {
                            booking.plan = "One day Pass";
                        }
                        else if (booking.plan == "4DP") {
                            booking.plan = "Four days Pass";
                        }
                        else if (booking.plan == "10DP") {
                            booking.plan = "Ten days Pass";
                        }
                    }
                    resolve(data.HotdeskBookings.reverse());
                }
                else {
                    _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                }
            });
        });
    };
    ManagebookingsComponent.prototype.getAllPermanentBookings = function (centers) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.authService.getPermanentBookings(centers).subscribe(function (data) {
                if (data.success) {
                    for (var _i = 0, _a = data.PermanentBookings; _i < _a.length; _i++) {
                        var booking = _a[_i];
                        booking.sdate = new Date(booking.startdate);
                        booking.edate = new Date(booking.enddate);
                        booking.startmonth = booking.sdate.getMonth();
                        booking.year = booking.sdate.getYear();
                        booking.startdate = booking.startdate.slice(0, booking.startdate.indexOf("T"));
                        booking.enddate = booking.enddate.slice(0, booking.enddate.indexOf("T"));
                        booking.invoiceVisible = [];
                        for (var ind = 0; ind <= (booking.edate.getMonth() + 12 * (booking.edate.getYear() - booking.sdate.getYear()) - booking.sdate.getMonth()); ind++) {
                            console.log("called");
                            if (!ind) {
                                booking.invoiceVisible.push(true);
                            }
                            else {
                                booking.invoiceVisible.push(false);
                            }
                        }
                        console.log(booking.invoiceVisible);
                        if (booking.plan == "18DP") {
                            booking.plan = "Eighteen day Pass";
                        }
                        else if (booking.plan == "30DP") {
                            booking.plan = "Thirty days Pass";
                        }
                    }
                    resolve(data.PermanentBookings.reverse());
                }
                else {
                    _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                }
            });
        });
    };
    ManagebookingsComponent.prototype.getProfile = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var adminuser = JSON.parse(localStorage.getItem("adminuser"));
            var id = {
                id: adminuser.id
            };
            _this.authService.getProfile(id).subscribe(function (profile) {
                resolve(profile.adminuser);
            }, function (err) {
                console.log(err);
                return false;
            });
        });
    };
    ManagebookingsComponent.prototype.approve_permanent = function (book_id, status) {
        var _this = this;
        if (!confirm("This action cannot be undone. Are you sure?")) {
            return false;
        }
        var bookid = {
            book_id: book_id,
            book_status: status
        };
        this.authService.approvePermanentBooking(bookid).subscribe(function (data) {
            if (data.success) {
                if (data.status) {
                    _this.flashMessage.show('Approved Successfully', { cssClass: 'alert-success', timeout: 3000 });
                }
                else if (!data.status) {
                    _this.flashMessage.show('Declined Successfully', { cssClass: 'alert-success', timeout: 3000 });
                }
            }
            else {
                _this.flashMessage.show('Failed to Approve', { cssClass: 'alert-danger', timeout: 3000 });
            }
            _this.getAllPermanentBookings(_this.centers).then(function (permanentbookings) {
                _this.permanentbookings = permanentbookings;
            });
        });
    };
    ManagebookingsComponent.prototype.approve_hotdesk = function (book_id, status) {
        var _this = this;
        if (!confirm("This action cannot be undone. Are you sure?")) {
            return false;
        }
        var bookid = {
            book_id: book_id,
            book_status: status
        };
        this.authService.approveHotdeskBooking(bookid).subscribe(function (data) {
            if (data.success) {
                if (data.status) {
                    _this.flashMessage.show('Approved Successfully', { cssClass: 'alert-success', timeout: 3000 });
                }
                else if (!data.status) {
                    _this.flashMessage.show('Declined Successfully', { cssClass: 'alert-success', timeout: 3000 });
                }
            }
            else {
                _this.flashMessage.show('Failed to Approve', { cssClass: 'alert-danger', timeout: 3000 });
            }
            _this.getAllHotdeskBookings(_this.centers).then(function (hotdeskbookings) {
                _this.hotdeskbookings = hotdeskbookings;
            });
        });
    };
    ManagebookingsComponent.prototype.approve_mtr = function (book_id, status) {
        var _this = this;
        if (!confirm("This action cannot be undone. Are you sure?")) {
            return false;
        }
        var bookid = {
            book_id: book_id,
            book_status: status
        };
        this.authService.approveMeetingroomBooking(bookid).subscribe(function (data) {
            if (data.success) {
                if (data.status) {
                    _this.flashMessage.show('Approved Successfully', { cssClass: 'alert-success', timeout: 3000 });
                }
                else if (!data.status) {
                    _this.flashMessage.show('Declined Successfully', { cssClass: 'alert-success', timeout: 3000 });
                }
            }
            else {
                _this.flashMessage.show('Failed to Approve', { cssClass: 'alert-danger', timeout: 3000 });
            }
            _this.getAllMeetingRoomBookings(_this.centers).then(function (meetingroombookings) {
                _this.meetingroombookings = meetingroombookings;
            });
        });
    };
    ManagebookingsComponent.prototype.movetotrash = function (id, itemType) {
        var _this = this;
        if (!confirm("This action cannot be undone. Are you sure?")) {
            return false;
        }
        if (itemType == 'permanent') {
            this.authService.getPermanentBookingById({ id: id }).subscribe(function (data) {
                if (data.success) {
                    var itemWrapped = {
                        item: data.PermanentBooking,
                        itemType: itemType
                    };
                    _this.authService.moveToTrash(itemWrapped).subscribe(function (data) {
                        if (data.success) {
                            _this.authService.deletePermanentBooking({ book_id: id }).subscribe(function (data) {
                                if (data.success) {
                                    _this.flashMessage.show('The booking has been moved to Trash', { cssClass: 'alert-success', timeout: 5000 });
                                    _this.getAllPermanentBookings(_this.centers).then(function (permanentbookings) {
                                        _this.permanentbookings = permanentbookings;
                                    });
                                }
                                else {
                                    _this.flashMessage.show('Failed to delete from Dedicated Bookings DB!', { cssClass: 'alert-danger', timeout: 3000 });
                                }
                            });
                        }
                        else {
                            _this.flashMessage.show('Failed to move this permanent booking to Trash', { cssClass: 'alert-danger', timeout: 3000 });
                        }
                    });
                }
                else {
                    _this.flashMessage.show('Unable to locate this permanent booking in DB', { cssClass: 'alert-danger', timeout: 3000 });
                }
            });
        }
        else if (itemType == 'hotdesk') {
            this.authService.getHotdeskBookingbyId({ id: id }).subscribe(function (data) {
                if (data.success) {
                    var itemWrapped = {
                        item: data.HotdeskBooking,
                        itemType: itemType
                    };
                    _this.authService.moveToTrash(itemWrapped).subscribe(function (data) {
                        if (data.success) {
                            _this.authService.deleteHotdeskBooking({ book_id: id }).subscribe(function (data) {
                                if (data.success) {
                                    _this.flashMessage.show('The booking has been moved to Trash', { cssClass: 'alert-success', timeout: 3000 });
                                    _this.getAllHotdeskBookings(_this.centers).then(function (hotdeskbookings) {
                                        _this.hotdeskbookings = hotdeskbookings;
                                    });
                                }
                                else {
                                    _this.flashMessage.show('Failed to delete from Hotdesk DB!', { cssClass: 'alert-danger', timeout: 3000 });
                                }
                            });
                        }
                        else {
                            _this.flashMessage.show('Failed to move this HotDesk booking to Trash', { cssClass: 'alert-danger', timeout: 3000 });
                        }
                    });
                }
                else {
                    _this.flashMessage.show('Unable to locate this HotDesk booking in DB', { cssClass: 'alert-danger', timeout: 3000 });
                }
            });
        }
        else if (itemType == 'mtr') {
            this.authService.getmtrBookingById({ id: id }).subscribe(function (data) {
                if (data.success) {
                    var itemWrapped = {
                        item: data.mtrBooking,
                        itemType: itemType
                    };
                    _this.authService.moveToTrash(itemWrapped).subscribe(function (data) {
                        if (data.success) {
                            _this.authService.deleteMeetingroomBookings({ book_id: id }).subscribe(function (data) {
                                if (data.success) {
                                    _this.flashMessage.show('The booking has been moved to Trash', { cssClass: 'alert-success', timeout: 3000 });
                                    _this.getAllMeetingRoomBookings(_this.centers).then(function (meetingroombookings) {
                                        _this.meetingroombookings = meetingroombookings;
                                    });
                                }
                                else {
                                    _this.flashMessage.show('Failed to delete from Meeting Room DB!', { cssClass: 'alert-danger', timeout: 3000 });
                                }
                            });
                        }
                        else {
                            _this.flashMessage.show('Failed to move this Meeting Room booking to Trash', { cssClass: 'alert-danger', timeout: 3000 });
                        }
                    });
                }
                else {
                    _this.flashMessage.show('Unable to locate this MTR booking in DB', { cssClass: 'alert-danger', timeout: 3000 });
                }
            });
        }
    };
    ManagebookingsComponent.prototype.invoice = function (id, plan, bkng) {
        // console.log(bkng);
        // console.log("Before");
        // console.log(this.showInvoiceId);
        this.toggleShowInvoice(id);
    };
    ManagebookingsComponent.prototype.toggleShowInvoice = function (id) {
        if (this.showInvoiceId == "") {
            this.showInvoiceId = id;
        }
        else {
            this.showInvoiceId = "";
        }
        // this.showInvoice[id] = !this.showInvoice[id];
        // console.log("After");
        // console.log(this.showInvoiceId);
    };
    ManagebookingsComponent.prototype.download = function () {
        var doc = new jsPDF();
        doc.text(20, 20, "One Co.Work");
        doc.text(100, 20, "Date: Today's Date");
        doc.text(100, 20, "Date: Today's Date");
        doc.addPage();
        doc.text(20, 20, '');
        // Save the PDF
        doc.save('Invoice.pdf');
    };
    return ManagebookingsComponent;
}());
ManagebookingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-managebookings',
        template: __webpack_require__("../../../../../src/app/components/admin/managebookings/managebookings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/managebookings/managebookings.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], ManagebookingsComponent);

var _a, _b, _c;
//# sourceMappingURL=managebookings.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-loader [loading]=\"loading\"></app-loader> -->\r\n<div *ngIf=\"adminuser\">\r\n  <section class=\"content-header text-center\">\r\n    <h1>\r\n       Welcome, {{adminuser.username | uppercase}} <br>\r\n      <small>{{adminuser.designation}} for locations: {{adminuser.center}}</small>\r\n    </h1>\r\n  </section>\r\n  <!-- <div>\r\n    <h2>Welcome, {{adminuser.username | uppercase}}</h2>\r\n    {{adminuser.designation}} for locations: {{adminuser.center}} <br>\r\n    <br>\r\n  </div> -->\r\n  <!-- <strong>PRIVILEGES:</strong><br>\r\n  <ul class=\"list-group\">\r\n    <li [ngClass]=\"{'btn-primary':adminuser.book_approve,'btn-danger':!adminuser.book_approve}\" class=\"btn\"><i [ngClass]=\"{'glyphicon-ok':adminuser.book_approve,'glyphicon-remove':!adminuser.book_approve}\" class=\"glyphicon\"> Approve-Booking</i></li>&nbsp;&nbsp;\r\n    <li [ngClass]=\"{'btn-primary':adminuser.book_add,'btn-danger':!adminuser.book_add}\" class=\"btn\"><i [ngClass]=\"{'glyphicon-ok':adminuser.book_add,'glyphicon-remove':!adminuser.book_add}\" class=\"glyphicon\"> Create-Booking</i></li>&nbsp;&nbsp;\r\n    <li [ngClass]=\"{'btn-primary':adminuser.book_delete,'btn-danger':!adminuser.book_delete}\" class=\"btn\"><i [ngClass]=\"{'glyphicon-ok':adminuser.book_delete,'glyphicon-remove':!adminuser.book_delete}\" class=\"glyphicon\"> Delete-Booking</i></li>&nbsp;&nbsp;\r\n    <br>\r\n    <br>\r\n    <li [ngClass]=\"{'btn-primary':adminuser.adminuser_create,'btn-danger':!adminuser.adminuser_create}\" class=\"btn\"><i [ngClass]=\"{'glyphicon-ok':adminuser.adminuser_create,'glyphicon-remove':!adminuser.adminuser_create}\" class=\"glyphicon\"> Create-Admin</i></li>&nbsp;&nbsp;\r\n    <li [ngClass]=\"{'btn-primary':adminuser.adminuser_modify,'btn-danger':!adminuser.adminuser_modify}\" class=\"btn\"><i [ngClass]=\"{'glyphicon-ok':adminuser.adminuser_modify,'glyphicon-remove':!adminuser.adminuser_modify}\" class=\"glyphicon\"> Modify-Admin</i></li>&nbsp;&nbsp;\r\n    <li [ngClass]=\"{'btn-primary':adminuser.adminuser_delete,'btn-danger':!adminuser.adminuser_delete}\" class=\"btn\"><i [ngClass]=\"{'glyphicon-ok':adminuser.adminuser_delete,'glyphicon-remove':!adminuser.adminuser_delete}\" class=\"glyphicon\"> Delete-Admin</i></li>&nbsp;&nbsp;\r\n    <br>\r\n    <br>\r\n    <li [ngClass]=\"{'btn-primary':adminuser.reports_view,'btn-danger':!adminuser.reports_view}\" class=\"btn\"><i [ngClass]=\"{'glyphicon-ok':adminuser.reports_view,'glyphicon-remove':!adminuser.reports_view}\" class=\"glyphicon\"> View-Reports</i></li>&nbsp;&nbsp;\r\n    <li [ngClass]=\"{'btn-primary':adminuser.manage_inventory,'btn-danger':!adminuser.manage_inventory}\" class=\"btn\"><i [ngClass]=\"{'glyphicon-ok':adminuser.manage_inventory,'glyphicon-remove':!adminuser.manage_inventory}\" class=\"glyphicon\"> Manage Inventory </i></li>&nbsp;&nbsp;\r\n  </ul> -->\r\n  <div class=\"content\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 col-md-push-3\">\r\n        <div class=\"box box-success\">\r\n          <div class=\"box-header\">\r\n            <h3 class=\"box-title\">Privileges Granted:</h3>\r\n          </div>\r\n          <!-- /.box-header -->\r\n          <div class=\"box-body no-padding\">\r\n            <table class=\"table table-striped\">\r\n              <tr>\r\n                <th>S.No</th>\r\n                <th>Privilege</th>\r\n                <th>Granted</th>\r\n              </tr>\r\n              <tr>\r\n                <td>1.</td>\r\n                <td>Apprive Booking</td>\r\n                <td>\r\n                  <span [ngClass]=\"{'bg-logo':adminuser.book_approve,'bg-red':!adminuser.book_approve}\" class=\"badge\"><i [ngClass]=\"{'glyphicon-ok':adminuser.book_approve,'glyphicon-remove':!adminuser.book_approve}\" class=\"glyphicon\"></i></span>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>2.</td>\r\n                <td>Create Booking</td>\r\n                <td>\r\n                  <span [ngClass]=\"{'bg-logo':adminuser.book_add,'bg-red':!adminuser.book_add}\" class=\"badge\">\r\n                    <i [ngClass]=\"{'glyphicon-ok':adminuser.book_add,'glyphicon-remove':!adminuser.book_add}\" class=\"glyphicon\"></i>\r\n                  </span>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>3.</td>\r\n                <td>Delete Booking</td>\r\n                <td>\r\n                  <span [ngClass]=\"{'bg-logo':adminuser.book_delete,'bg-red':!adminuser.book_delete}\" class=\"badge\">\r\n                    <i [ngClass]=\"{'glyphicon-ok':adminuser.book_delete,'glyphicon-remove':!adminuser.book_delete}\" class=\"glyphicon\"></i>\r\n                  </span>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>4.</td>\r\n                <td>Create Admin</td>\r\n                <td>\r\n                  <span [ngClass]=\"{'bg-logo':adminuser.adminuser_create,'bg-red':!adminuser.adminuser_create}\" class=\"badge\">\r\n                    <i [ngClass]=\"{'glyphicon-ok':adminuser.adminuser_create,'glyphicon-remove':!adminuser.adminuser_create}\" class=\"glyphicon\"></i>\r\n                  </span>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>5.</td>\r\n                <td>Modify Admin</td>\r\n                <td>\r\n                  <span [ngClass]=\"{'bg-logo':adminuser.adminuser_modify,'bg-red':!adminuser.adminuser_modify}\" class=\"badge\">\r\n                    <i [ngClass]=\"{'glyphicon-ok':adminuser.adminuser_modify,'glyphicon-remove':!adminuser.adminuser_modify}\" class=\"glyphicon\"></i>\r\n                  </span>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>6.</td>\r\n                <td>Delete Admin</td>\r\n                <td>\r\n                  <span [ngClass]=\"{'bg-logo':adminuser.adminuser_delete,'bg-red':!adminuser.adminuser_delete}\" class=\"badge\">\r\n                    <i [ngClass]=\"{'glyphicon-ok':adminuser.adminuser_delete,'glyphicon-remove':!adminuser.adminuser_delete}\" class=\"glyphicon\"></i>\r\n                  </span>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>7.</td>\r\n                <td>View Reports</td>\r\n                <td>\r\n                  <span [ngClass]=\"{'bg-logo':adminuser.reports_view,'bg-red':!adminuser.reports_view}\" class=\"badge\">\r\n                    <i [ngClass]=\"{'glyphicon-ok':adminuser.reports_view,'glyphicon-remove':!adminuser.reports_view}\" class=\"glyphicon\"></i>\r\n                  </span>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>8.</td>\r\n                <td>Manage Inventory</td>\r\n                <td>\r\n                  <span [ngClass]=\"{'bg-logo':adminuser.manage_inventory,'bg-red':!adminuser.manage_inventory}\" class=\"badge\">\r\n                    <i [ngClass]=\"{'glyphicon-ok':adminuser.manage_inventory,'glyphicon-remove':!adminuser.manage_inventory}\" class=\"glyphicon\"></i>\r\n                  </span>\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n          <!-- /.box-body -->\r\n        </div>\r\n        <!-- /.box -->\r\n        <div *ngIf=\"!editpw\">\r\n          <input type=\"button\" class=\"btn btn-secondary\" (click)=\"toggleEditpw()\" value=\"Change Password\">\r\n        </div>\r\n\r\n      </div>\r\n      <!-- /.col -->\r\n    </div>\r\n    <!-- /.row -->\r\n\r\n    <div class=\"row\" *ngIf=\"editpw\">\r\n      <div class=\"col-md-6 col-md-push-3\">\r\n        <!-- change password Form -->\r\n        <div class=\"box box-info\">\r\n          <div class=\"box-header with-border\">\r\n            <h3 class=\"box-title\">Change Password</h3>\r\n          </div>\r\n          <!-- /.box-header -->\r\n          <!-- form start -->\r\n          <form class=\"form-horizontal\" (submit)=\"updatePassword()\">\r\n            <div class=\"box-body\">\r\n              <div class=\"form-group\">\r\n                <label for=\"currentpass\" class=\"col-sm-4 control-label\">Current Password</label>\r\n        \r\n                <div class=\"col-sm-8\">\r\n                  <input type=\"password\" class=\"form-control\" id=\"currentpass\" placeholder=\"Current Password\" name=\"currentPassword\" [(ngModel)]=\"currentPassword\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"newpass\" class=\"col-sm-4 control-label\">New Password</label>\r\n        \r\n                <div class=\"col-sm-8\">\r\n                  <input type=\"password\" class=\"form-control\" id=\"newpass\" placeholder=\"New Password\" name=\"newPassword\" [(ngModel)]=\"newPassword\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"confirmpass\" class=\"col-sm-4 control-label\">Confirm Password</label>\r\n        \r\n                <div class=\"col-sm-8\">\r\n                  <input type=\"password\" class=\"form-control\" id=\"confirmpass\" placeholder=\"Confirm Password\" name=\"confirmPassword\" [(ngModel)]=\"confirmPassword\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- /.box-body -->\r\n            <div class=\"box-footer\">\r\n              <button type=\"button\" (click)=\"toggleEditpw()\" class=\"btn btn-secondary btn-w-md\">Cancel</button>\r\n              <button type=\"submit\" class=\"btn btn-logo btn-w-md pull-right\">Update</button>\r\n            </div>\r\n            <!-- /.box-footer -->\r\n          </form>\r\n        </div>\r\n        <!-- /.box -->\r\n      </div>\r\n      <!-- /.col -->\r\n    </div>\r\n    <!-- /.row -->\r\n\r\n    </div>\r\n    <!-- /.content -->    \r\n      \r\n\r\n    \r\n  <!-- <div *ngIf=\"editpw\">\r\n    <form (submit)=\"updatePassword()\">\r\n      <ul class=\"list-group\">\r\n        <li class=\"list-group-item\">Current Password:\r\n          <input type=\"password\" name=\"currentPassword\" [(ngModel)]=\"currentPassword\">\r\n        </li>\r\n        <li class=\"list-group-item\">New Password:\r\n          <input type=\"password\" name=\"newPassword\" [(ngModel)]=\"newPassword\">\r\n        </li>\r\n        <li class=\"list-group-item\">Confirm Password:\r\n          <input type=\"password\" name=\"confirmPassword\" [(ngModel)]=\"confirmPassword\">\r\n        </li>\r\n      </ul>\r\n      <input type=\"button\" value=\"Cancel\" (click)=\"toggleEditpw()\">\r\n      <input type=\"submit\" value=\"Update\">\r\n    </form>\r\n  </div> -->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/admin/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = (function () {
    function ProfileComponent(authService, router, flashMessage, validateService) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.validateService = validateService;
        this.loading = false;
        this.editpw = false;
        this.currentPassword = "";
        this.newPassword = "";
        this.confirmPassword = "";
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.getProfile().then(function (adminuser) {
            _this.adminuser = adminuser;
            _this.loading = false;
        });
    };
    ProfileComponent.prototype.getProfile = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var adminuser = JSON.parse(localStorage.getItem("adminuser"));
            var id = {
                id: adminuser.id
            };
            _this.authService.getProfile(id).subscribe(function (profile) {
                resolve(profile.adminuser);
            }, function (err) {
                console.log(err);
                return false;
            });
        });
    };
    ProfileComponent.prototype.toggleEditpw = function () {
        this.editpw = !this.editpw;
    };
    ProfileComponent.prototype.updatePassword = function () {
        var _this = this;
        // Validate password
        if (!this.validateService.validatePassword(this.newPassword)) {
            this.flashMessage.show('Please enter a password between starting with a letter having 7 to 16 characters which contain only characters, numeric digits, underscore', { cssClass: 'alert-danger', timeout: 10000 });
            return false;
        }
        // Confirm password 
        if (!this.validateService.validateConfirmPassword(this.newPassword, this.confirmPassword)) {
            this.flashMessage.show("Passwords don't match. Please try again.", { cssClass: 'alert-danger', timeout: 5000 });
            return false;
        }
        var adminuser = {
            adminuser_id: this.adminuser['id'],
            currentPassword: this.currentPassword,
            newPassword: this.newPassword,
            confirmPassword: this.confirmPassword
        };
        this.authService.changePassword(adminuser).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Password changed successfully!', { cssClass: 'alert-success', timeout: 5000 });
                //this.authService.addActivity("Updated Password!").subscribe();
                //this.getAllActivities(this.user["_id"]);
            }
            else if (!data.isMatch) {
                _this.flashMessage.show("Current Password doesn't match!", { cssClass: 'alert-danger', timeout: 5000 });
            }
            else {
                _this.flashMessage.show('Something went wrong!', { cssClass: 'alert-danger', timeout: 5000 });
            }
        });
        this.toggleEditpw();
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/admin/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */]) === "function" && _d || Object])
], ProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/reports/reports.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/reports/reports.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-loader [loading]=\"loading\"></app-loader> -->\r\n<!-- <h2 class=\"page-header\">Reports</h2> -->\r\n<!-- Content Header (Page header) -->\r\n<section class=\"content-header\">\r\n  <h1>\r\n    Reports\r\n    <!-- <small>Preview</small> -->\r\n  </h1>\r\n</section>\r\n<!-- <form (submit)=\"onFilterSubmit()\">\r\n\r\n\r\n  <div class=\"form-group col-md-6\">\r\n    <label>Username</label>\r\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\r\n  </div>\r\n\r\n  <div class=\"form-group col-md-6\">\r\n    <label>Email</label>\r\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\r\n  </div>\r\n\r\n  <div class=\"form-group col-md-12\">\r\n    <div>Center</div>\r\n    <div class=\"btn-group\">\r\n      <button *ngFor=\"let c of centers;let i = index\" [ngClass]=\"{disabled:selectedCenters[i]==true}\" type=\"button\" class=\"btn btn-primary\"\r\n        name=\"selectedCenters[i]\" (click)=\"selectedCenters[i]==true?selectedCenters[i]=false:selectedCenters[i]=true\"><i *ngIf=\"selectedCenters[i]==true\" class=\"glyphicon glyphicon-ok\"></i>  {{c}}</button>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"form-group col-md-12\">\r\n\r\n    <h4> Select Package </h4>\r\n    <button [ngClass]=\"{disabled:hotdesk==true}\" type=\"button\" class=\"btn btn-primary\" name=\"hotdesk\" (click)=\"hotdesk==true?hotdesk=false:hotdesk=true\"><i *ngIf=\"hotdesk==true\" class=\"glyphicon glyphicon-ok\"></i>  Hotdesk</button>\r\n    <div *ngIf=\"hotdesk\">\r\n      <div class=\"col-sm-4\">\r\n        Plan :\r\n        <select class=\"form-control\" name=\"hotdeskplan\" [(ngModel)]=\"hotdeskplan\"> \r\n            <option *ngFor=\"let displayplan of hotdeskplansToShow\">{{displayplan}}</option>\r\n          </select>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        StartDate <br> From\r\n        <input class=\"form-control\" type=\"date\" [(ngModel)]=\"hotdeskstartfromdate\" name=\"hotdeskstartfromdate\"> To\r\n        <input class=\"form-control\" type=\"date\" [(ngModel)]=\"hotdeskstarttodate\" name=\"hotdeskstarttodate\">\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        EndDate <br> From\r\n        <input class=\"form-control\" type=\"date\" [(ngModel)]=\"hotdeskendfromdate\" name=\"hotdeskendfromdate\"> To\r\n        <input class=\"form-control\" type=\"date\" [(ngModel)]=\"hotdeskendtodate\" name=\"hotdeskendtodate\">\r\n        <br>\r\n      </div>\r\n    </div>\r\n\r\n    <button [ngClass]=\"{disabled:permanent==true}\" type=\"button\" class=\"btn btn-primary\" name=\"permanent\" (click)=\"permanent==true?permanent=false:permanent=true\"><i *ngIf=\"permanent==true\" class=\"glyphicon glyphicon-ok\"></i>  Permanent</button>\r\n    <div *ngIf=\"permanent\">\r\n      <div class=\"col-sm-4\">\r\n        Plan :\r\n        <select class=\"form-control\" name=\"permanentplan\" [(ngModel)]=\"permanentplan\"> \r\n            <option *ngFor=\"let displayplan of permanentplansToShow\">{{displayplan}}</option>\r\n          </select>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        StartDate <br> From\r\n        <input class=\"form-control\" type=\"date\" [(ngModel)]=\"permanentstartfromdate\" name=\"permanentstartfromdate\"> To\r\n        <input class=\"form-control\" type=\"date\" [(ngModel)]=\"permanentstarttodate\" name=\"permanentstarttodate\">\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        EndDate <br> From\r\n        <input class=\"form-control\" type=\"date\" [(ngModel)]=\"permanentendfromdate\" name=\"permanentendfromdate\"> To\r\n        <input class=\"form-control\" type=\"date\" [(ngModel)]=\"permanentendtodate\" name=\"permanentendtodate\">\r\n        <br>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <button [ngClass]=\"{disabled:meetingroom==true}\" type=\"button\" class=\"btn btn-primary\" name=\"meetingroom\" (click)=\"meetingroom==true?meetingroom=false:meetingroom=true\"><i *ngIf=\"meetingroom==true\" class=\"glyphicon glyphicon-ok\"></i>  Meeting Room</button>\r\n    <div *ngIf=\"meetingroom\">\r\n      <div class=\"col-sm-6\">\r\n        Date <br> From\r\n        <input type=\"date\" class=\"form-control\" [(ngModel)]=\"meetingroomdatefrom\" name=\"meetingroomdatefrom\"> To\r\n        <input type=\"date\" class=\"form-control\" [(ngModel)]=\"meetingroomdateto\" name=\"meetingroomdateto\">\r\n        <br>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Generate Report\">\r\n  <input type=\"reset\" class=\"btn btn-primary\" value=\"Reset\">\r\n</form> -->\r\n\r\n<div class=\"content\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-8 col-md-push-2\">\r\n      <!-- Horizontal Form -->\r\n      <div class=\"box box-success\">\r\n\r\n        <!-- /.box-header -->\r\n        <!-- form start -->\r\n        <form class=\"form-horizontal\" (submit)=\"onFilterSubmit()\">\r\n          <div class=\"box-body\">\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"username\" class=\"col-sm-3 control-label\">Username</label>\r\n\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n            \r\n            <div class=\"form-group\">\r\n              <label for=\"email\" class=\"col-sm-3 control-label\">Email</label>\r\n              \r\n              <div class=\"col-sm-9\">\r\n                <input type=\"email\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n            \r\n            <!-- <div class=\"box-header with-border\">\r\n              <h3 class=\"box-title\">Center</h3>\r\n            </div> -->\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"center\" class=\"col-sm-3 control-label\">Choose Location</label>\r\n            \r\n              <div class=\"col-sm-9\">\r\n                <div class=\"btn-group\">\r\n                  <button *ngFor=\"let c of centers;let i = index\" [ngClass]=\"{disabled:selectedCenters[i]==true}\" type=\"button\" class=\"btn btn-primary\"\r\n                    name=\"selectedCenters[i]\" (click)=\"selectedCenters[i]==true?selectedCenters[i]=false:selectedCenters[i]=true\">\r\n                    <i *ngIf=\"selectedCenters[i]==true\" class=\"glyphicon glyphicon-ok\"></i> {{c}}</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"box-header\">\r\n              <h3 class=\"box-title\">Select Package</h3>\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-12\">\r\n            \r\n              <button [ngClass]=\"{disabled:hotdesk==true}\" type=\"button\" class=\"btn btn-primary\" name=\"hotdesk\" (click)=\"hotdesk==true?hotdesk=false:hotdesk=true\">\r\n                <i *ngIf=\"hotdesk==true\" class=\"glyphicon glyphicon-ok\"></i> Hotdesk</button>\r\n              <div *ngIf=\"hotdesk\">\r\n                <div class=\"col-sm-4\">\r\n                  Plan :\r\n                  <select class=\"form-control\" name=\"hotdeskplan\" [(ngModel)]=\"hotdeskplan\">\r\n                    <option *ngFor=\"let displayplan of hotdeskplansToShow\">{{displayplan}}</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                  StartDate\r\n                  <br> From\r\n                  <input class=\"form-control\" type=\"date\" [(ngModel)]=\"hotdeskstartfromdate\" name=\"hotdeskstartfromdate\"> To\r\n                  <input class=\"form-control\" type=\"date\" [(ngModel)]=\"hotdeskstarttodate\" name=\"hotdeskstarttodate\">\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                  EndDate\r\n                  <br> From\r\n                  <input class=\"form-control\" type=\"date\" [(ngModel)]=\"hotdeskendfromdate\" name=\"hotdeskendfromdate\"> To\r\n                  <input class=\"form-control\" type=\"date\" [(ngModel)]=\"hotdeskendtodate\" name=\"hotdeskendtodate\">\r\n                  <br>\r\n                </div>\r\n              </div>\r\n            \r\n              <button [ngClass]=\"{disabled:permanent==true}\" type=\"button\" class=\"btn btn-primary\" name=\"permanent\" (click)=\"permanent==true?permanent=false:permanent=true\">\r\n                <i *ngIf=\"permanent==true\" class=\"glyphicon glyphicon-ok\"></i> Permanent</button>\r\n              <div *ngIf=\"permanent\">\r\n                <div class=\"col-sm-4\">\r\n                  Plan :\r\n                  <select class=\"form-control\" name=\"permanentplan\" [(ngModel)]=\"permanentplan\">\r\n                    <option *ngFor=\"let displayplan of permanentplansToShow\">{{displayplan}}</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                  StartDate\r\n                  <br> From\r\n                  <input class=\"form-control\" type=\"date\" [(ngModel)]=\"permanentstartfromdate\" name=\"permanentstartfromdate\"> To\r\n                  <input class=\"form-control\" type=\"date\" [(ngModel)]=\"permanentstarttodate\" name=\"permanentstarttodate\">\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                  EndDate\r\n                  <br> From\r\n                  <input class=\"form-control\" type=\"date\" [(ngModel)]=\"permanentendfromdate\" name=\"permanentendfromdate\"> To\r\n                  <input class=\"form-control\" type=\"date\" [(ngModel)]=\"permanentendtodate\" name=\"permanentendtodate\">\r\n                  <br>\r\n                </div>\r\n              </div>\r\n            \r\n            \r\n              <button [ngClass]=\"{disabled:meetingroom==true}\" type=\"button\" class=\"btn btn-primary\" name=\"meetingroom\" (click)=\"meetingroom==true?meetingroom=false:meetingroom=true\">\r\n                <i *ngIf=\"meetingroom==true\" class=\"glyphicon glyphicon-ok\"></i> Meeting Room</button>\r\n              <div *ngIf=\"meetingroom\">\r\n                <div class=\"col-sm-6\">\r\n                  Date\r\n                  <br> From\r\n                  <input type=\"date\" class=\"form-control\" [(ngModel)]=\"meetingroomdatefrom\" name=\"meetingroomdatefrom\"> To\r\n                  <input type=\"date\" class=\"form-control\" [(ngModel)]=\"meetingroomdateto\" name=\"meetingroomdateto\">\r\n                  <br>\r\n                </div>\r\n              </div>\r\n            \r\n            \r\n            </div>\r\n\r\n\r\n          </div>\r\n          <!-- /.box-body -->\r\n          <div class=\"box-footer\">\r\n            <button type=\"submit\" class=\"btn btn-logo\">Generate Report</button>\r\n            <button type=\"reset\" class=\"btn btn-secondary btn-w-md\">Reset</button>\r\n          </div>\r\n          <!-- /.box-footer -->\r\n        </form>\r\n      </div>\r\n      <!-- /.box -->\r\n    </div>\r\n    <!-- /.col -->    \r\n  </div>\r\n  <!-- /.row -->\r\n</div>\r\n<!-- /.content -->\r\n\r\n\r\n<!-- <div *ngIf=\"hotdeskbookings.length\">\r\n  <h3> Hotdesk Bookings (Total {{hotdeskbookings.length}} Bookings)</h3>\r\n  \r\n  <li class=\"col-sm-1 list-group-item active\"><strong>S.No.</strong></li>\r\n  <li class=\"col-sm-2 list-group-item active\"><strong>Username</strong></li>\r\n  <li class=\"col-sm-2 list-group-item active\"><strong>Email</strong></li>\r\n  <li class=\"col-sm-2 list-group-item active\"><strong>Plan</strong></li>\r\n  <li class=\"col-sm-2 list-group-item active\"><small>StartDate</small></li>\r\n  <li class=\"col-sm-2 list-group-item active\"><small>EndDate</small></li>\r\n  <li class=\"col-sm-2 list-group-item active\"><strong>Center</strong></li>\r\n  <li class=\"col-sm-1 list-group-item active\"><strong>Status</strong></li>\r\n  <div *ngFor=\"let booking of hotdeskbookings;let i=index;\">\r\n    <li class=\"col-sm-1 list-group-item\">{{i+1}}</li>\r\n    <li class=\"col-sm-2 list-group-item\">{{booking.username}}</li>\r\n    <li class=\"col-sm-2 list-group-item\">{{booking.email}}</li>\r\n    <li class=\"col-sm-2 list-group-item\">{{booking.plan}}</li>\r\n    <li class=\"col-sm-2 list-group-item\"><small>{{booking.startdate}}</small></li>\r\n    <li class=\"col-sm-2 list-group-item\"><small>{{booking.enddate}}</small></li>\r\n    <li class=\"col-sm-2 list-group-item\">{{booking.center}}</li>\r\n    <li *ngIf=\"booking.isPendingApproval\" class=\"col-sm-1 list-group-item\">Pending</li>\r\n    <li *ngIf=\"!booking.isPendingApproval && booking.isApproved\" class=\"col-sm-1 list-group-item\">Approved</li>\r\n    <li *ngIf=\"!booking.isPendingApproval && !booking.isApproved\" class=\"col-sm-1 list-group-item\">Declined</li>\r\n  </div>\r\n  <div style=\"visibility:hidden;\" class=\"jumbotron\">piyush sucks</div>\r\n</div> -->\r\n\r\n<!-- <div *ngIf=\"permanentbookings.length\">\r\n  <h3> Dedicated Bookings (Total {{permanentbookings.length}} Bookings)</h3>\r\n  \r\n  <li class=\"col-sm-1 list-group-item active\"><strong>S.No.</strong></li>\r\n  <li class=\"col-sm-1 list-group-item active\"><strong>Username</strong></li>\r\n  <li class=\"col-sm-2 list-group-item active\"><strong>Email</strong></li>\r\n  <li class=\"col-sm-2 list-group-item active\"><strong>Plan</strong></li>\r\n  <li class=\"col-sm-2 list-group-item active\"><small>StartDate</small></li>\r\n  <li class=\"col-sm-2 list-group-item active\"><small>EndDate</small></li>\r\n  <li class=\"col-sm-2 list-group-item active\"><strong>Center</strong></li>\r\n  <li class=\"col-sm-1 list-group-item active\"><strong>Seats</strong></li>\r\n  <li class=\"col-sm-1 list-group-item active\"><strong>Status</strong></li>\r\n  <div *ngFor=\"let booking of permanentbookings;let i=index;\">\r\n    <li class=\"col-sm-1 list-group-item\">{{i+1}}</li>\r\n    <li class=\"col-sm-1 list-group-item\">{{booking.username}}</li>\r\n    <li class=\"col-sm-2 list-group-item\">{{booking.email}}</li>\r\n    <li class=\"col-sm-2 list-group-item\">{{booking.plan}}</li>\r\n    <li class=\"col-sm-2 list-group-item\"><small>{{booking.startdate}}</small></li>\r\n    <li class=\"col-sm-2 list-group-item\"><small>{{booking.enddate}}</small></li>\r\n    <li class=\"col-sm-2 list-group-item\">{{booking.center}}</li>\r\n    <li class=\"col-sm-1 list-group-item\">{{booking.seatsNumber}}</li>\r\n    <li *ngIf=\"booking.isPendingApproval\" class=\"col-sm-1 list-group-item\">Pending</li>\r\n    <li *ngIf=\"!booking.isPendingApproval && booking.isApproved\" class=\"col-sm-1 list-group-item\">Approved</li>\r\n    <li *ngIf=\"!booking.isPendingApproval && !booking.isApproved\" class=\"col-sm-1 list-group-item\">Declined</li>\r\n  </div>\r\n  <div style=\"display: block\">\r\n    <canvas baseChart [data]=\"pieChartData\" [labels]=\"pieChartLabels\" [chartType]=\"pieChartType\" (chartHover)=\"chartHovered($event)\"\r\n      (chartClick)=\"chartClicked($event)\"></canvas>\r\n  </div>\r\n  <div style=\"visibility:hidden;\" class=\"jumbotron\">piyush sucks</div>\r\n</div> -->\r\n\r\n<!-- <div *ngIf=\"meetingroombookings.length\">\r\n  <h3> Meeting Room Bookings </h3>\r\n  <ol>\r\n    <li *ngFor=\"let booking of meetingroombookings\">\r\n      <strong> Username </strong> : {{booking.username}} <br>\r\n      <strong>  Email </strong> : {{booking.email}}<br>\r\n      <strong>  Date </strong> : {{booking.startdate.toLocaleDateString()}}<br>\r\n      <strong>  Start Time </strong> : {{booking.startdate.toLocaleTimeString()}}<br>\r\n      <strong>  End Time  </strong> : {{booking.enddate.toLocaleTimeString()}}<br>\r\n      <strong>  Center </strong> : {{booking.center}}<br>\r\n      <p *ngIf=\"booking.isApproved\"> <strong>  Status </strong> : Approved </p>\r\n      <p *ngIf=\"!booking.isApproved\"> <strong>  Status </strong> : Not Approved </p> <br>\r\n\r\n    </li>\r\n  </ol>\r\n  <br>\r\n  <br>\r\n</div> -->\r\n\r\n\r\n\r\n<!-- Hotsdesk booking content -->\r\n<section class=\"content\" *ngIf=\"hotdeskbookings.length\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <div class=\"box\">\r\n        <div class=\"box-header\">\r\n          <h3 class=\"box-title\"> Hotdesk Bookings (Total {{hotdeskbookings.length}} Bookings)</h3>\r\n        </div>\r\n        <!-- /.box-header -->\r\n        <div class=\"box-body\">\r\n          <table id=\"example1\" class=\"table table-bordered table-striped\">\r\n            <thead>\r\n              <tr>\r\n                <th>S.No</th>\r\n                <th>Username</th>\r\n                <th>Plan</th>\r\n                <th>Start Date</th>\r\n                <th>End Date</th>\r\n                <th>Center</th>\r\n                <th>Status</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let booking of hotdeskbookings;let i=index;\">\r\n                <td>{{i+1}}</td>\r\n                <td>{{booking.username}}</td>\r\n                <td>{{booking.plan}}</td>\r\n                <td>{{booking.startdate | date:'d MMM y'}}</td>\r\n                <td>{{booking.enddate | date:'d MMM y'}}</td>\r\n                <td>{{booking.center}}</td>\r\n                <td><span *ngIf=\"!booking.isPendingApproval && booking.isApproved\" class=\"label label-success bg-logo\">Approved</span>\r\n                    <span *ngIf=\"booking.isPendingApproval\" class=\"label label-warning\">Pending</span>\r\n                    <span *ngIf=\"!booking.isPendingApproval && !booking.isApproved\" class=\"label label-danger\">Declined</span>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n            <tfoot>\r\n              <tr>\r\n                <th>S.No</th>\r\n                <th>Username</th>\r\n                <th>Plan</th>\r\n                <th>Start Date</th>\r\n                <th>End Date</th>\r\n                <th>Center</th>\r\n                <th>Status</th>\r\n              </tr>\r\n            </tfoot>\r\n          </table>\r\n        </div>\r\n        <!-- /.box-body -->\r\n      </div>\r\n      <!-- /.box -->\r\n    </div>\r\n    <!-- /.col -->\r\n  </div>\r\n  <!-- /.row -->\r\n</section>\r\n<!-- /.content -->\r\n\r\n\r\n<!-- Dedicated booking content -->\r\n<section class=\"content\" *ngIf=\"permanentbookings.length\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <div class=\"box\">\r\n        <div class=\"box-header\">\r\n          <h3 class=\"box-title\"> Dedicated Bookings (Total {{permanentbookings.length}} Bookings)</h3>\r\n        </div>\r\n        <!-- /.box-header -->\r\n        <div class=\"box-body\">\r\n          <table id=\"example1\" class=\"table table-bordered table-striped\">\r\n            <thead>\r\n              <tr>\r\n                <th>S.No</th>\r\n                <th>Username</th>\r\n                <th>Plan</th>\r\n                <th>Start Date</th>\r\n                <th>End Date</th>\r\n                <th>Center</th>\r\n                <th>Seat</th>\r\n                <th>Status</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let booking of permanentbookings;let i=index;\">\r\n                <td>{{i+1}}</td>\r\n                <td>{{booking.username}}</td>\r\n                <td>{{booking.plan}}</td>\r\n                <td>{{booking.startdate | date:'d MMM y'}}</td>\r\n                <td>{{booking.enddate | date:'d MMM y'}}</td>\r\n                <td>{{booking.center}}</td>\r\n                <td>{{booking.seatsNumber}}</td>\r\n                <td>\r\n                  <span *ngIf=\"!booking.isPendingApproval && booking.isApproved\" class=\"label label-success bg-logo\">Approved</span>\r\n                  <span *ngIf=\"booking.isPendingApproval\" class=\"label label-warning\">Pending</span>\r\n                  <span *ngIf=\"!booking.isPendingApproval && !booking.isApproved\" class=\"label label-danger\">Declined</span>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n            <tfoot>\r\n              <tr>\r\n                <th>S.No</th>\r\n                <th>Username</th>\r\n                <th>Plan</th>\r\n                <th>Start Date</th>\r\n                <th>End Date</th>\r\n                <th>Center</th>\r\n                <th>Seat</th>\r\n                <th>Status</th>\r\n              </tr>\r\n            </tfoot>\r\n          </table>\r\n        </div>\r\n        <!-- /.box-body -->\r\n      </div>\r\n      <!-- /.box -->\r\n    </div>\r\n    <!-- /.col -->\r\n  </div>\r\n  <!-- /.row -->\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 col-md-push-3\">\r\n      <!-- DONUT CHART -->\r\n      <div class=\"box box-info\">\r\n        <div class=\"box-header with-border\">\r\n          <h3 class=\"box-title\"> Seat Occupancy Chart</h3>\r\n      \r\n          <!-- <div class=\"box-tools pull-right\">\r\n            <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"collapse\">\r\n              <i class=\"fa fa-minus\"></i>\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"remove\">\r\n              <i class=\"fa fa-times\"></i>\r\n            </button>\r\n          </div> -->\r\n        </div>\r\n        <div class=\"box-body chart-responsive\">\r\n          <!-- <div class=\"chart\" id=\"sales-chart\" style=\"height: 300px; position: relative;\"></div> -->\r\n          <canvas baseChart [data]=\"pieChartData\" [labels]=\"pieChartLabels\" [chartType]=\"pieChartType\" (chartHover)=\"chartHovered($event)\"\r\n            (chartClick)=\"chartClicked($event)\"></canvas>\r\n        </div>\r\n        <!-- /.box-body -->\r\n      </div>\r\n      <!-- /.box -->\r\n    </div>\r\n    <!-- /.col -->\r\n  </div>\r\n  <!-- /.row -->\r\n</section>\r\n<!-- /.content -->\r\n\r\n<!-- Meeting room booking content -->\r\n<section class=\"content\" *ngIf=\"meetingroombookings.length\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <div class=\"box\">\r\n        <div class=\"box-header\">\r\n          <h3 class=\"box-title\"> Meeting Bookings (Total {{meetingroombookings.length}} Bookings)</h3>\r\n        </div>\r\n        <!-- /.box-header -->\r\n        <div class=\"box-body\">\r\n          <table id=\"example1\" class=\"table table-bordered table-striped\">\r\n            <thead>\r\n              <tr>\r\n                <th>S.No</th>\r\n                <th>Username</th>\r\n                <th>Email</th>\r\n                <th>Date</th>\r\n                <th>Start Time</th>\r\n                <th>End Time</th>\r\n                <th>Center</th>\r\n                <th>Status</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let booking of meetingroombookings;let i=index;\">\r\n                <td>{{i+1}}</td>\r\n                <td>{{booking.username}}</td>\r\n                <td>{{booking.email}}</td>\r\n                <td>{{booking.startdate | date:'d MMM y'}}</td>\r\n                <td>{{booking.startdate | date:'hh:mm:ss a'}}</td>\r\n                <td>{{booking.enddate | date:'hh:mm:ss a'}}</td>\r\n                <td>{{booking.center}}</td>\r\n                <td>\r\n                  <span *ngIf=\"booking.isApproved\" class=\"label label-success bg-logo\">Approved</span>\r\n                  <span *ngIf=\"!booking.isApproved\" class=\"label label-danger\">Declined</span>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n            <tfoot>\r\n              <tr>\r\n                <th>S.No</th>\r\n                <th>Username</th>\r\n                <th>Email</th>\r\n                <th>Date</th>\r\n                <th>Start Time</th>\r\n                <th>End Time</th>\r\n                <th>Center</th>\r\n                <th>Status</th>\r\n              </tr>\r\n            </tfoot>\r\n          </table>\r\n        </div>\r\n        <!-- /.box-body -->\r\n      </div>\r\n      <!-- /.box -->\r\n    </div>\r\n    <!-- /.col -->\r\n  </div>\r\n  <!-- /.row -->\r\n</section>\r\n<!-- /.content -->"

/***/ }),

/***/ "../../../../../src/app/components/admin/reports/reports.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReportsComponent = (function () {
    function ReportsComponent(authService, validateService, router, flashMessage) {
        this.authService = authService;
        this.validateService = validateService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.loading = true;
        this.name = "";
        this.plan = "";
        this.username = "";
        this.email = "";
        this.selectedCenters = [false];
        this.hotdesk = false;
        this.hotdeskplans = ["1DP", "4DP", "10DP"];
        this.hotdeskplansToShow = ["One day Pass", "Four days Pass", "Ten days Pass", "All"];
        this.hotdeskplan = "";
        this.hotdeskbookings = [];
        this.permanent = false;
        this.permanentplans = ["18DP", "30DP"];
        this.permanentplansToShow = ["Eighteen days Pass", "Thirty days Pass", "All"];
        this.permanentplan = "";
        this.permanentbookings = [];
        this.meetingroom = false;
        this.meetingroombookings = [];
        this.totalDedicatedSeats = 0;
        this.occupiedSeats = 0;
        // Pie
        this.pieChartLabels = [];
        this.pieChartData = [];
        this.pieChartType = 'pie';
    }
    // events
    ReportsComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    ReportsComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    ReportsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getProfile().then(function (adminuser) {
            _this.adminuser = adminuser;
            if (!adminuser['reports_view']) {
                _this.flashMessage.show('Access Denied', { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['/admin/profile']);
            }
            _this.centers = adminuser['center'];
            _this.getInventory().then(function (inventory) {
                _this.inventory = inventory;
                _this.loading = false;
            });
        });
    };
    ReportsComponent.prototype.getInventory = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.authService.getInfo().subscribe(function (info) {
                resolve(info.inventory);
            });
        });
    };
    ReportsComponent.prototype.getProfile = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var adminuser = JSON.parse(localStorage.getItem("adminuser"));
            var id = {
                id: adminuser.id
            };
            _this.authService.getProfile(id).subscribe(function (profile) {
                resolve(profile.adminuser);
            }, function (err) {
                console.log(err);
                return false;
            });
        });
    };
    ReportsComponent.prototype.onFilterSubmit = function () {
        var _this = this;
        this.loading = true;
        new Promise(function (resolve, reject) {
            var centersToAdd = [];
            for (var i = 0; i < _this.centers.length; i++) {
                if (_this.selectedCenters[i]) {
                    centersToAdd.push(_this.centers[i]);
                }
            }
            resolve(centersToAdd);
        }).then(function (centersToAdd) {
            if (!_this.validateService.validateCenters(centersToAdd)) {
                _this.flashMessage.show('Please select atleast 1 location!', { cssClass: 'alert-danger', timeout: 5000 });
                return false;
            }
            else {
                _this.filter(centersToAdd);
            }
        });
    };
    ReportsComponent.prototype.filter = function (centersToAdd) {
        var _this = this;
        if (this.hotdesk) {
            if (this.hotdeskplan != "All") {
                this.plan = this.hotdeskplans[this.hotdeskplansToShow.indexOf(this.hotdeskplan)];
            }
            else {
                this.plan = "all";
            }
            var params = {
                plan: this.plan,
                username: this.username,
                email: this.email,
                startdatefrom: this.hotdeskstartfromdate,
                startdateto: this.hotdeskstarttodate,
                enddatefrom: this.hotdeskendfromdate,
                enddateto: this.hotdeskendtodate,
                centers: centersToAdd
            };
            this.authService.filterHotdeskBookings(params).subscribe(function (data) {
                if (data.success) {
                    for (var _i = 0, _a = data.HotdeskBookings; _i < _a.length; _i++) {
                        var booking = _a[_i];
                        booking.startdate = booking.startdate.slice(0, booking.startdate.indexOf("T"));
                        booking.enddate = booking.enddate.slice(0, booking.enddate.indexOf("T"));
                        if (booking.plan == "1DP") {
                            booking.plan = "One day Pass";
                        }
                        else if (booking.plan == "4DP") {
                            booking.plan = "Four days Pass";
                        }
                        else if (booking.plan == "10DP") {
                            booking.plan = "Ten days Pass";
                        }
                    }
                    _this.hotdeskbookings = data.HotdeskBookings.reverse();
                }
                else {
                    _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 5000 });
                }
                _this.loading = false;
            });
        }
        else {
            this.hotdeskbookings = [];
        }
        if (this.permanent) {
            if (this.permanentplan != "All") {
                this.plan = this.permanentplans[this.permanentplansToShow.indexOf(this.permanentplan)];
            }
            else {
                this.plan = "all";
            }
            var params = {
                plan: this.plan,
                username: this.username,
                email: this.email,
                startdatefrom: this.permanentstartfromdate,
                startdateto: this.permanentstarttodate,
                enddatefrom: this.permanentendfromdate,
                enddateto: this.permanentendtodate,
                centers: centersToAdd
            };
            this.authService.filterPermanentBookings(params).subscribe(function (data) {
                if (data.success) {
                    // extract centerwise data
                    _this.totalDedicatedSeats = 0;
                    _this.occupiedSeats = 0;
                    for (var i = 0; i < _this.inventory.length; i++) {
                        if (centersToAdd.includes(_this.inventory[i].center)) {
                            _this.totalDedicatedSeats += _this.inventory[i].total_seats;
                        }
                    }
                    for (var _i = 0, _a = data.PermanentBookings; _i < _a.length; _i++) {
                        var booking = _a[_i];
                        _this.occupiedSeats += booking.seatsNumber.length;
                        booking.startdate = booking.startdate.slice(0, booking.startdate.indexOf("T"));
                        booking.enddate = booking.enddate.slice(0, booking.enddate.indexOf("T"));
                        if (booking.plan == "18DP") {
                            booking.plan = "Eighteen days Pass";
                        }
                        else if (booking.plan == "30DP") {
                            booking.plan = "Thirty days Pass";
                        }
                    }
                    _this.percentOccupancy = Math.round(((Number(_this.occupiedSeats) / Number(_this.totalDedicatedSeats)) * 10000));
                    _this.percentOccupancy = _this.percentOccupancy / 100;
                    _this.pieChartLabels = ['Occupied', 'Vacant'];
                    _this.pieChartData = [_this.percentOccupancy, 100 - _this.percentOccupancy];
                    _this.permanentbookings = data.PermanentBookings.reverse();
                }
                else {
                    _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 5000 });
                }
                _this.loading = false;
            });
        }
        else {
            this.permanentbookings = [];
        }
        if (this.meetingroom) {
            var params = {
                username: this.username,
                email: this.email,
                datefrom: this.meetingroomdatefrom,
                dateto: this.meetingroomdateto,
                centers: centersToAdd
            };
            this.authService.filterMeetingroomBookings(params).subscribe(function (data) {
                if (data.success) {
                    for (var _i = 0, _a = data.MeetingRoomBookings; _i < _a.length; _i++) {
                        var booking = _a[_i];
                        booking.startdate = new Date(booking.startdate);
                        booking.enddate = new Date(booking.enddate);
                    }
                    _this.meetingroombookings = data.MeetingRoomBookings.reverse();
                }
                else {
                    _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 5000 });
                }
                _this.loading = false;
            });
        }
        else {
            this.meetingroombookings = [];
        }
    };
    return ReportsComponent;
}());
ReportsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-reports',
        template: __webpack_require__("../../../../../src/app/components/admin/reports/reports.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/reports/reports.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], ReportsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=reports.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n  <h2>OneCo.Work ERP</h2>\r\n  <p>Manage everything at one place.</p>\r\n  <ul *ngIf=\"!isLoggedIn\" class=\"list-group\">\r\n      <a [routerLink]=\"['/login']\" class=\"btn btn-primary\">Login</a>\r\n  </ul>\r\n</div>\r\n<div *ngIf=\"isLoggedIn\">\r\n<h4><strong>FEATURES</strong></h4>\r\n<ul class=\"list-group\">\r\n  <li class=\"list-group-item col-sm-4\"><div class=\"col-sm-8 py-2px\">View/Edit Profile</div><div class=\"col-sm-4\"><a [routerLink]=\"['/profile']\" class=\"btn btn-primary\">Select</a></div></li>\r\n  <li class=\"list-group-item col-sm-4\"><div class=\"col-sm-8 py-2px\">Create New Admin</div><div class=\"col-sm-4\"><a [routerLink]=\"['/createuser']\" class=\"btn btn-primary\">Select</a></div></li>\r\n  <li class=\"list-group-item col-sm-4\"><div class=\"col-sm-8 py-2px\">Manage Bookings</div><div class=\"col-sm-4\"><a [routerLink]=\"['/managebookings']\" class=\"btn btn-primary\">Select</a></div></li>\r\n  <li class=\"list-group-item col-sm-4\"><div class=\"col-sm-8 py-2px\">View/Edit Inventory</div><div class=\"col-sm-4\"><a [routerLink]=\"['/inventory']\" class=\"btn btn-primary\">Select</a></div></li>\r\n  <li class=\"list-group-item col-sm-4\"><div class=\"col-sm-8 py-2px\">Manage Admins</div><div class=\"col-sm-4\"><a [routerLink]=\"['/edituser']\" class=\"btn btn-primary\">Select</a></div></li>\r\n  <li class=\"list-group-item col-sm-4\"><div class=\"col-sm-8 py-2px\">View Reports</div><div class=\"col-sm-4\"><a [routerLink]=\"['/reports']\" class=\"btn btn-primary\">Select</a></div></li>\r\n</ul>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isLoggedIn = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (this.authService.loggedIn()) {
            // console.log("LOGGED IN");
            this.isLoggedIn = true;
        }
        else {
            // console.log("NOT LOGGED IN");
            // this.router.navigate(['/login']);
            this.isLoggedIn = false;
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/loader/loader.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loader{\r\n    opacity: 1;\r\n    transition: all .8s ease-in-out;\r\n    position: fixed;\r\n    width: 100%;\r\n    height:8px;\r\n    top: 0;\r\n    left: 0;\r\n    background: #000;\r\n    z-index: 10;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/loader/loader.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader progress progress-striped active\" *ngIf=\"loading\">\r\n  <div class=\"progress-bar\"  role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 100%\">\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/loader/loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderComponent = (function () {
    function LoaderComponent() {
        this.loading = false;
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    return LoaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], LoaderComponent.prototype, "loading", void 0);
LoaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-loader',
        template: __webpack_require__("../../../../../src/app/components/loader/loader.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/loader/loader.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LoaderComponent);

//# sourceMappingURL=loader.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* iCheck plugin Square skin, blue\r\n----------------------------------- */\r\n.icheckbox_square-blue,\r\n.iradio_square-blue {\r\n    display: inline-block;\r\n    *display: inline;\r\n    vertical-align: middle;\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 22px;\r\n    height: 22px;\r\n    /* background: url(blue.png) no-repeat; */\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.icheckbox_square-blue {\r\n    background-position: 0 0;\r\n}\r\n    .icheckbox_square-blue.hover {\r\n        background-position: -24px 0;\r\n    }\r\n    .icheckbox_square-blue.checked {\r\n        background-position: -48px 0;\r\n    }\r\n    .icheckbox_square-blue.disabled {\r\n        background-position: -72px 0;\r\n        cursor: default;\r\n    }\r\n    .icheckbox_square-blue.checked.disabled {\r\n        background-position: -96px 0;\r\n    }\r\n\r\n.iradio_square-blue {\r\n    background-position: -120px 0;\r\n}\r\n    .iradio_square-blue.hover {\r\n        background-position: -144px 0;\r\n    }\r\n    .iradio_square-blue.checked {\r\n        background-position: -168px 0;\r\n    }\r\n    .iradio_square-blue.disabled {\r\n        background-position: -192px 0;\r\n        cursor: default;\r\n    }\r\n    .iradio_square-blue.checked.disabled {\r\n        background-position: -216px 0;\r\n    }\r\n\r\n.login-page{\r\n    height: 100vh;\r\n}\r\n\r\n/* Retina support */\r\n/* @media only screen and (-webkit-min-device-pixel-ratio: 1.5),\r\n       only screen and (-moz-min-device-pixel-ratio: 1.5),\r\n       only screen and (-o-min-device-pixel-ratio: 3/2),\r\n       only screen and (min-device-pixel-ratio: 1.5) {\r\n    .icheckbox_square-blue,\r\n    .iradio_square-blue {\r\n        background-image: url(blue@2x.png);\r\n        -webkit-background-size: 240px 24px;\r\n        background-size: 240px 24px;\r\n    }\r\n} */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<flash-messages></flash-messages>\r\n\r\n<!-- <h2 class=\"page-header\">Login</h2>\r\n<form (submit)=\"onLoginSubmit()\">\r\n  <div class=\"form-group\">\r\n    <label>Username</label>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Password</label>\r\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\r\n  </div>\r\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\r\n</form> -->\r\n\r\n<div class=\"hold-transition login-page py-8\">\r\n  <div class=\"login-box\">\r\n    <div class=\"login-logo\">\r\n      <a routerLink=\"/\">\r\n        <b>Admin</b> OneCo.Work</a>\r\n    </div>\r\n    <!-- /.login-logo -->\r\n    <div class=\"login-box-body\">\r\n      <p class=\"login-box-msg\">Sign in to start your session</p>\r\n\r\n      <form (submit)=\"onLoginSubmit()\">\r\n        <div class=\"form-group has-feedback\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Username\" [(ngModel)]=\"username\" name=\"username\">\r\n          <span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>\r\n        </div>\r\n        <div class=\"form-group has-feedback\">\r\n          <input type=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"password\" name=\"password\">\r\n          <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\r\n        </div>\r\n        <div class=\"row\">\r\n          \r\n          <div class=\"col-xs-12\">\r\n            <button type=\"submit\" class=\"btn btn-primary btn-block btn-flat\">Sign In</button>\r\n          </div>\r\n          <!-- /.col -->\r\n        </div>\r\n      </form>\r\n\r\n    </div>\r\n    <!-- /.login-box-body -->\r\n  </div>\r\n  <!-- /.login-box -->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authService.loggedIn()) {
            this.router.navigate(['/admin']);
            return false;
        }
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var adminuser = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(adminuser).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.adminuser);
                // this.flashMessage.show('You are now logged in', {
                //   cssClass: 'alert-success',
                //   timeout: 5000});
                _this.router.navigate(['/admin']);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
                _this.router.navigate(['login']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <nav *ngIf=\"authService.loggedIn()\" class=\"navbar navbar-default\">\r\n      <div class=\"container\">\r\n        <div class=\"navbar-header\">\r\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n          </button>\r\n          <a class=\"navbar-brand\" [routerLink]=\"['/']\">ERP OneCo.Work</a>\r\n        </div>\r\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\r\n          <ul class=\"nav navbar-nav navbar-left\">\r\n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/']\">Home</a></li>\r\n          </ul>\r\n\r\n          <ul style=\"padding-top: 5px;\" class=\"nav navbar-right nav-pills\">\r\n             <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/profile']\">Profile</a></li> \r\n             <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/createuser']\">Create Admin</a></li> \r\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/managebookings']\">Bookings</a></li>\r\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/inventory']\">Inventory</a></li>\r\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/edituser']\">  Admins</a></li> \r\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/customers']\">Customers</a></li> \r\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/reports']\">Reports</a></li> \r\n            \r\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>\r\n            <li *ngIf=\"authService.loggedIn()\" ><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </nav> -->\r\n\r\n    <header class=\"main-header\"  *ngIf=\"authService.loggedIn()\">\r\n      <!-- Logo -->\r\n      <a class=\"logo\">\r\n        <!-- mini logo for sidebar mini 50x50 pixels -->\r\n        <span class=\"logo-mini\">\r\n          <b>OCW</b></span>\r\n        <!-- logo for regular state and mobile devices -->\r\n        <span class=\"logo-lg\">\r\n          <img src=\"http://www.oneco.work/img/enterprices/logo-white.png\" class=\"w-25\">\r\n          <b>Admin</b> OCW</span>\r\n      </a>\r\n      <!-- Header Navbar: style can be found in header.less -->\r\n      <nav class=\"navbar navbar-static-top\">\r\n        <!-- Sidebar toggle button-->\r\n        <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"push-menu\" role=\"button\">\r\n          <span class=\"sr-only\">Toggle navigation</span>\r\n        </a>\r\n    \r\n        <div class=\"navbar-custom-menu\">\r\n          <ul class=\"nav navbar-nav\">\r\n            <!-- Messages: style can be found in dropdown.less-->\r\n            \r\n            <!-- Notifications: style can be found in dropdown.less -->\r\n            \r\n            <!-- Tasks: style can be found in dropdown.less -->\r\n            \r\n            <!-- User Account: style can be found in dropdown.less -->\r\n            <li class=\"dropdown user user-menu\">\r\n              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                <img src=\"https://www.shareicon.net/data/128x128/2015/10/09/653498_users_512x512.png\" class=\"user-image\" alt=\"User Image\">\r\n                <span class=\"hidden-xs\">{{adminuser.username | uppercase}}</span>\r\n              </a>\r\n              <ul class=\"dropdown-menu\">\r\n                <!-- User image -->\r\n                <li class=\"user-header\">\r\n                  <img src=\"https://www.shareicon.net/data/128x128/2015/10/09/653498_users_512x512.png\" class=\"img-circle\" alt=\"User Image\">\r\n    \r\n                  <p>\r\n                     {{adminuser.username | uppercase}}\r\n                    <!-- <small>Member since Nov. 2012</small> -->\r\n                    <small>{{adminuser.designation}}</small>\r\n                  </p>\r\n                </li>\r\n                <!-- Menu Body -->\r\n                \r\n                <!-- Menu Footer-->\r\n                <li class=\"user-footer\">\r\n                  <div class=\"pull-left\">\r\n                    <a routerLink=\"/admin/profile\" class=\"btn btn-default btn-flat\">Profile</a>\r\n                  </div>\r\n                  <div class=\"pull-right\">\r\n                    <a href=\"#\" (click)=\"onLogoutClick()\" class=\"btn btn-default btn-flat\">Logout</a>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n            </li>\r\n            <!-- Control Sidebar Toggle Button -->\r\n            \r\n          </ul>\r\n        </div>\r\n      </nav>\r\n    </header>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {FlashMessagesService} from 'angular2-flash-messages';
var NavbarComponent = (function () {
    function NavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getProfile().then(function (adminuser) {
            _this.adminuser = adminuser;
        });
    };
    NavbarComponent.prototype.getProfile = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var adminuser = JSON.parse(localStorage.getItem("adminuser"));
            var id = {
                id: adminuser.id
            };
            _this.authService.getProfile(id).subscribe(function (profile) {
                resolve(profile.adminuser);
            }, function (err) {
                console.log(err);
                return false;
            });
        });
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        // this.flashMessage.show('You are logged out', {
        //   cssClass:'alert-success',
        //   timeout: 3000
        // });
        this.router.navigate(['/login']);
        return false;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], NavbarComponent);

var _a, _b;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\r\n<form (submit)=\"onRegisterSubmit()\">\r\n  <div class=\"form-group\">\r\n    <label>Name</label>\r\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Username</label>\r\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Designation</label>\r\n    <select name=\"designation\" [(ngModel)]=\"designation\" class=\"form-control\"> \r\n      <option *ngFor=\"let d of designations\">{{d}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Password</label>\r\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\r\n  </div>\r\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.designations = [];
        this.designation = "";
    }
    RegisterComponent.prototype.ngOnInit = function () {
        if (this.authService.loggedIn()) {
            this.router.navigate(['']);
        }
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var adminuser = {
            name: this.name,
            username: this.username,
            password: this.password,
            designation: this.designation,
            admin_level: this.designations.indexOf(this.designation)
        };
        // Required Fields
        if (!this.validateService.validateRegister(adminuser)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Username
        this.validateUsername(adminuser.username).then(function (success) {
            if (success) {
                _this.flashMessage.show('Username is already taken!', { cssClass: 'alert-danger', timeout: 3000 });
                return false;
            }
            else {
                // Register user
                _this.authService.registerUser(adminuser).subscribe(function (data) {
                    if (data.success) {
                        _this.flashMessage.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
                        _this.router.navigate(['/login']);
                    }
                    else {
                        _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                        _this.router.navigate(['/register']);
                    }
                });
            }
        });
    };
    RegisterComponent.prototype.validateUsername = function (username) {
        var _this = this;
        var usernameData = {
            username: username
        };
        return new Promise(function (resolve) {
            _this.authService.validateAdminUsername(usernameData).subscribe(function (data) {
                resolve(data.success);
            });
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Left side column. contains the logo and sidebar -->\r\n<aside class=\"main-sidebar\">\r\n  <!-- sidebar: style can be found in sidebar.less -->\r\n  <section class=\"sidebar\">\r\n    <!-- Sidebar user panel -->\r\n    <div class=\"user-panel\">\r\n      <div class=\"pull-left image\">\r\n        <img src=\"https://www.shareicon.net/data/128x128/2015/10/09/653498_users_512x512.png\" class=\"img-circle\" alt=\"User Image\">\r\n      </div>\r\n      <div class=\"pull-left info\">\r\n        <p>{{adminuser.username | uppercase}}</p>\r\n        <a>\r\n          <i class=\"fa fa-circle text-success\"></i> Online</a>\r\n      </div>\r\n    </div>\r\n    <!-- search form -->\r\n    <!-- <form action=\"#\" method=\"get\" class=\"sidebar-form\">\r\n      <div class=\"input-group\">\r\n        <input type=\"text\" name=\"q\" class=\"form-control\" placeholder=\"Search...\">\r\n        <span class=\"input-group-btn\">\r\n          <button type=\"submit\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\">\r\n            <i class=\"fa fa-search\"></i>\r\n          </button>\r\n        </span>\r\n      </div>\r\n    </form> -->\r\n    <!-- /.search form -->\r\n    <!-- sidebar menu: : style can be found in sidebar.less -->\r\n    <ul class=\"sidebar-menu\" data-widget=\"tree\">\r\n      <li class=\"header\">QUICK LINKS</li>\r\n      <!-- <li class=\"active treeview\">\r\n        <a href=\"#\">\r\n          <i class=\"fa fa-dashboard\"></i>\r\n          <span>Dashboard</span>\r\n          <span class=\"pull-right-container\">\r\n            <i class=\"fa fa-angle-left pull-right\"></i>\r\n          </span>\r\n        </a>\r\n        <ul class=\"treeview-menu\">\r\n          <li class=\"active\">\r\n            <a href=\"index.html\">\r\n              <i class=\"fa fa-circle-o\"></i> Dashboard v1</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"index2.html\">\r\n              <i class=\"fa fa-circle-o\"></i> Dashboard v2</a>\r\n          </li>\r\n        </ul>\r\n      </li> -->\r\n      <li>\r\n        <a routerLink=\"/admin/reports\">\r\n          <i class=\"fa fa-files-o\"></i>\r\n          <span>View Reports</span>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a routerLink=\"/admin/managebookings\">\r\n          <i class=\"fa fa-book\"></i>\r\n          <span>Manage Bookings</span>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a routerLink=\"/admin/customers\">\r\n          <i class=\"fa fa-group\"></i>\r\n          <span>View Customers</span>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a routerLink=\"/admin/inventory\">\r\n          <i class=\"fa fa-cubes\"></i>\r\n          <span>Manage Inventory</span>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a routerLink=\"/admin/createuser\">\r\n          <i class=\"fa fa-user\"></i>\r\n          <span>Create New Admin</span>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a routerLink=\"/admin/edituser\">\r\n          <i class=\"fa fa-users\"></i>\r\n          <span>View/Edit/Delete Admins</span>\r\n        </a>\r\n      </li>\r\n      \r\n      <!-- <li class=\"header\">LABELS</li>\r\n      <li>\r\n        <a href=\"#\">\r\n          <i class=\"fa fa-circle-o text-red\"></i>\r\n          <span>Important</span>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a href=\"#\">\r\n          <i class=\"fa fa-circle-o text-yellow\"></i>\r\n          <span>Warning</span>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a href=\"#\">\r\n          <i class=\"fa fa-circle-o text-aqua\"></i>\r\n          <span>Information</span>\r\n        </a>\r\n      </li> -->\r\n    </ul>\r\n  </section>\r\n  <!-- /.sidebar -->\r\n</aside>"

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = (function () {
    function SidebarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getProfile().then(function (adminuser) {
            _this.adminuser = adminuser;
        });
    };
    SidebarComponent.prototype.getProfile = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var adminuser = JSON.parse(localStorage.getItem("adminuser"));
            var id = {
                id: adminuser.id
            };
            _this.authService.getProfile(id).subscribe(function (profile) {
                resolve(profile.adminuser);
            }, function (err) {
                console.log(err);
                return false;
            });
        });
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SidebarComponent);

var _a, _b;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard.prototype.canActivateChild = function () {
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.getGlobalDesignations = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('adminusers/getdesignations', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getInfo = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('inventories/getinfo', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.updateInventory = function (inventory) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('inventories/updateinventory', inventory, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.validateAdminUsername = function (username) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('adminusers/checkusername', username, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.registerUser = function (adminuser) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('adminusers/register', adminuser, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //update admin 
    AuthService.prototype.updateUser = function (adminuser) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('adminusers/updateadmin', adminuser, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // delete admin user
    AuthService.prototype.deleteUser = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('adminusers/deleteadmin', id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (adminuser) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('adminusers/authenticate', adminuser, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, adminuser) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('adminuser', JSON.stringify(adminuser));
        this.authToken = token;
        this.adminuser = adminuser;
    };
    // return other admins (below level)
    AuthService.prototype.getOtherAdmins = function (adminLevel) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('adminusers/getotheradmins', adminLevel, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //get all hotdesk bookings 
    AuthService.prototype.getHotdeskBookings = function (centers) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('bookings/gethotdeskbooking', centers, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // filter hotdesk
    AuthService.prototype.filterHotdeskBookings = function (params) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('bookings/filterhotdeskbooking', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // filter customers
    AuthService.prototype.filterUsers = function (params) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-type', 'application/json');
        return this.http.post('users/filterusers', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // approve hotdesk 
    AuthService.prototype.approveHotdeskBooking = function (bookid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('bookings/approvehotdeskbooking', bookid, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // delete hotdesk
    AuthService.prototype.deleteHotdeskBooking = function (bookid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('bookings/deletehotdeskbooking', bookid, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //get all permanent bookings
    AuthService.prototype.getPermanentBookings = function (centers) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('bookings/getpermanentbooking', centers, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // get a permanent booking by id 
    AuthService.prototype.getPermanentBookingById = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('bookings/getpermanentbookingbyid', id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // get a hotdesk booking by id
    AuthService.prototype.getHotdeskBookingbyId = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('bookings/gethotdeskbookingbyid', id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // get a meeting room booking by id 
    AuthService.prototype.getmtrBookingById = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('bookings/getmtrbookingbyid', id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // move to trash
    AuthService.prototype.moveToTrash = function (item) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('bookings/movetotrash', item, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // filter permanent bookings
    AuthService.prototype.filterPermanentBookings = function (params) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('bookings/filterpermanentbookings', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // approve permanent
    AuthService.prototype.approvePermanentBooking = function (bookid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('bookings/approvepermanentbooking', bookid, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // delete permanent
    AuthService.prototype.deletePermanentBooking = function (bookid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('bookings/deletepermanentbooking', bookid, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // get all mtr bookings
    AuthService.prototype.getMeetingroomBookings = function (centers) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('bookings/getallmeetingroombookings', centers, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // Filter meeting room bookings 
    AuthService.prototype.filterMeetingroomBookings = function (params) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('bookings/filtermeetingroombookings', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // approve mtr
    AuthService.prototype.approveMeetingroomBooking = function (bookid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('bookings/approvemeetingroombooking', bookid, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // delete mtr
    AuthService.prototype.deleteMeetingroomBookings = function (bookid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('bookings/deletemeetingroombooking', bookid, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.changePassword = function (adminuser) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('adminusers/changepassword', adminuser, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function (id) {
        console.log("GET PROFILE CALLED!");
        console.log(id);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        return this.http.post('adminusers/adminprofile', id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        var tmpLocalData = JSON.parse(localStorage.getItem("adminuser"));
        if (this.adminuser == null) {
            if (tmpLocalData) {
                this.adminuser = tmpLocalData.username;
                this.authToken = localStorage.getItem("id_token");
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.adminuser = null;
        localStorage.clear();
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (adminuser) {
        if (adminuser.name == undefined || adminuser.username == undefined || adminuser.password == undefined || adminuser.designation == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService.prototype.validateConfirmPassword = function (password, confirmPassword) {
        if (password == confirmPassword) {
            return true;
        }
        else {
            return false;
        }
    };
    ValidateService.prototype.validateCenters = function (centersToAdd) {
        if (centersToAdd.length) {
            return true;
        }
        else {
            return false;
        }
    };
    ValidateService.prototype.validatePassword = function (password) {
        var pw = /^[A-Za-z]\w{7,14}$/;
        return pw.test(password);
    };
    return ValidateService;
}());
ValidateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map