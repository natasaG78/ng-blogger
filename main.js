(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-bloger/add-bloger.component.css":
/*!*****************************************************!*\
  !*** ./src/app/add-bloger/add-bloger.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1ibG9nZXIvYWRkLWJsb2dlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/add-bloger/add-bloger.component.html":
/*!******************************************************!*\
  !*** ./src/app/add-bloger/add-bloger.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row m-3 bg-light border\">\n  <div class=\"col-md-8\">\n    <h1>Bloggers job</h1>\n    <p>Lorem ipsum dolar sit amet,consectetur adipisicing elit.\n      Amet omnis fuga maiores excepturi dolores explicabo.\n    </p>\n  </div>\n  <div class=\"col-md-4\">\n    <div class=\"card text-center bg-success text-white mb-3 m-auto\">\n      <div class=\"card-body\">\n        <h3>Add New Blogger</h3>\n        <h1 class=\"display-4\">\n          <i class=\"fa fa-user-plus\"></i>6\n        </h1>\n        <a href=\"#\" class=\"btn btn-outline-light btn-sm\" data-toggle=\"modal\"\n        data-target=\"#addblogger\">Add Blogger</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n<div class=\"modal fade\" id=\"addblogger\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header bg-success text-white\">\n        <h5 class=\"modal-title\">Add New Blogger</h5>\n        <button class=\"close\" data-dismiss=\"modal\">\n          <span>&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form #f=\"ngForm\" id=\"addForm\">\n          <div class=\"form-group\">\n            <label for=\"name\">Name</label>\n            <input type=\"text\" class=\"form-control\" id=\"name\" ngModel required\n            name=\"name\" #nameBlogger=\"ngModel\">\n            <span class=\"help-block text-danger\" *ngIf=\"!nameBlogger.valid && nameBlogger.touched\">\n              You must insert Nam</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input type=\"email\" class=\"form-control\" id=\"email\" ngModel required\n            name=\"email\" #emailBlogger=\"ngModel\">\n            <span class=\"help-block text-danger\" *ngIf=\"!emailBlogger.valid && emailBlogger.touched\">\n              You must insert Email</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"About\">About Blogger</label>\n            <textarea name=\"about\" class=\"form-control\" rows=\"5\" value=\"Aboout blogger\"ngModel></textarea>\n         </div>\n        </form>\n        <div class=\"modal-footer\">\n          <button class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button (click)=\"addBlogger()\" type=\"button\" class=\"btn btn-success\"[disabled]=!f.valid>Add</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/add-bloger/add-bloger.component.ts":
/*!****************************************************!*\
  !*** ./src/app/add-bloger/add-bloger.component.ts ***!
  \****************************************************/
/*! exports provided: AddBlogerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBlogerComponent", function() { return AddBlogerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _bloggers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bloggers.service */ "./src/app/bloggers.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _blogger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blogger */ "./src/app/blogger.ts");
/* harmony import */ var _bloggers_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../bloggers.actions */ "./src/app/bloggers.actions.ts");







var AddBlogerComponent = /** @class */ (function () {
    function AddBlogerComponent(bloggersService, store) {
        this.bloggersService = bloggersService;
        this.store = store;
    }
    AddBlogerComponent.prototype.ngOnInit = function () {
        this.bloggersState = this.store.select('bloggers');
    };
    AddBlogerComponent.prototype.addBlogger = function () {
        var _this = this;
        this.store.dispatch(new _bloggers_actions__WEBPACK_IMPORTED_MODULE_6__["AddBlogger"](new _blogger__WEBPACK_IMPORTED_MODULE_5__["Blogger"](this.form.value.name, this.form.value.email, this.form.value.about)));
        this.bloggersState.subscribe(function (blog) {
            _this.bloggersService.saveBlogger(blog.bloggers).subscribe();
        });
        this.form.reset();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], AddBlogerComponent.prototype, "form", void 0);
    AddBlogerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-bloger',
            template: __webpack_require__(/*! ./add-bloger.component.html */ "./src/app/add-bloger/add-bloger.component.html"),
            styles: [__webpack_require__(/*! ./add-bloger.component.css */ "./src/app/add-bloger/add-bloger.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_bloggers_service__WEBPACK_IMPORTED_MODULE_3__["BloggersService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], AddBlogerComponent);
    return AddBlogerComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guard.service */ "./src/app/guard.service.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/posts/posts.component.ts");










var routes = [
    { path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"], canActivate: [_guard_service__WEBPACK_IMPORTED_MODULE_8__["GuardService"]] },
    { path: 'posts', component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_9__["PostsComponent"], canActivate: [_guard_service__WEBPACK_IMPORTED_MODULE_8__["GuardService"]], children: [
            { path: ':id', component: _post_post_component__WEBPACK_IMPORTED_MODULE_5__["PostComponent"] }
        ] },
    { path: 'signup', component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__["SignUpComponent"] },
    { path: 'signin', component: _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_6__["SignInComponent"] },
    { path: 'pagenotfound', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"] },
    { path: '**', redirectTo: '/pagenotfound' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class = \"navbar navbar-expand-sm bg-dark navbar-dark fixed-top\">\n  <div class=\"container\">\n    <a href=\"#\" class=\"navbar-brand\">Blogger.com</a>\n    <button class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n      <ul class=\"navbar-nav ml-auto\">\n        <ng-template [ngIf]=\"authService.authenticated()\">\n          <li class=\"nav-item\">\n            <a routerLink=\"/\" class=\"nav-link\">Home</a>\n          </li>\n          <li class=\"nav-item\">\n            <a routerLink=\"/post\" class=\"nav-link\">Posts</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\"(click)=\"signOut()\">SingOut</a>\n          </li>\n        </ng-template>\n        <ng-template [ngIf]=\"!authService.authenticated()\">\n          <li class=\"nav-item\">\n            <a routerLink=\"/singin\" class=\"nav-link\">SingIn</a>\n          </li>\n          <li class=\"nav-item\">\n            <a routerLink=\"/singUp\" class=\"nav-link\">SingUp</a>\n          </li>\n        </ng-template>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>\n\n<footer id=\"main-footer\" class=\"bg-dark\">\n  <div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col text--center text-white\">\n      <div clas=\"py-4\">\n        <h1 class=\"h3\">Blogger.com</h1>\n        <p>Copyright &copy; 2017</p>\n      </div>\n    </div>\n  </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AppComponent = /** @class */ (function () {
    function AppComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        firebase__WEBPACK_IMPORTED_MODULE_2__["initializeApp"]({
            apiKey: "AIzaSyCGhArjVzd6Q3uvSvpkVLEnevpx57354sg",
            authDomain: "bloggers-3d482.firebaseapp.com",
        });
    };
    AppComponent.prototype.signOut = function () {
        this.authService.signout();
        this.router.navigate(['/signin']);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _bloggers_bloggers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bloggers/bloggers.component */ "./src/app/bloggers/bloggers.component.ts");
/* harmony import */ var _blogger_blogger_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blogger/blogger.component */ "./src/app/blogger/blogger.component.ts");
/* harmony import */ var _add_bloger_add_bloger_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add-bloger/add-bloger.component */ "./src/app/add-bloger/add-bloger.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/posts/posts.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _bloggers_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./bloggers.service */ "./src/app/bloggers.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _guard_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./guard.service */ "./src/app/guard.service.ts");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./post.service */ "./src/app/post.service.ts");
/* harmony import */ var _bloggers_reducers__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./bloggers.reducers */ "./src/app/bloggers.reducers.ts");























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_9__["MainComponent"],
                _bloggers_bloggers_component__WEBPACK_IMPORTED_MODULE_10__["BloggersComponent"],
                _blogger_blogger_component__WEBPACK_IMPORTED_MODULE_11__["BloggerComponent"],
                _add_bloger_add_bloger_component__WEBPACK_IMPORTED_MODULE_12__["AddBlogerComponent"],
                _posts_posts_component__WEBPACK_IMPORTED_MODULE_13__["PostsComponent"],
                _post_post_component__WEBPACK_IMPORTED_MODULE_14__["PostComponent"],
                _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_15__["SignInComponent"],
                _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_16__["SignUpComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_17__["PageNotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot({ bloggers: _bloggers_reducers__WEBPACK_IMPORTED_MODULE_22__["bloggersReducer"] }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]
            ],
            providers: [_bloggers_service__WEBPACK_IMPORTED_MODULE_18__["BloggersService"], _auth_service__WEBPACK_IMPORTED_MODULE_19__["AuthService"], _guard_service__WEBPACK_IMPORTED_MODULE_20__["GuardService"], _post_service__WEBPACK_IMPORTED_MODULE_21__["PostService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
    }
    AuthService.prototype.signinUser = function (email, password) {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().signInWithEmailAndPassword(email, password)
            .then(function (response) {
            _this.router.navigate(['/']);
            firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser.getIdToken()
                .then(function (token) { return _this.token = token; });
        })
            .catch(function (error) { return console.log(error); });
    };
    AuthService.prototype.getToken = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser.getIdToken()
            .then(function (token) { return _this.token = token; });
        return this.token;
    };
    AuthService.prototype.signupUser = function (email, password) {
        firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().createUserWithEmailAndPassword(email, password)
            .catch(function (error) { return console.log(error); });
    };
    AuthService.prototype.authenticated = function () {
        return this.token != null;
    };
    AuthService.prototype.signout = function () {
        firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().signOut();
        this.token = null;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/blogger.ts":
/*!****************************!*\
  !*** ./src/app/blogger.ts ***!
  \****************************/
/*! exports provided: Blogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Blogger", function() { return Blogger; });
var Blogger = /** @class */ (function () {
    function Blogger(name, email, about) {
        this.name = name;
        this.about = about;
        this.email = email;
    }
    return Blogger;
}());



/***/ }),

/***/ "./src/app/blogger/blogger.component.css":
/*!***********************************************!*\
  !*** ./src/app/blogger/blogger.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "i{\r\n    color: black;\r\n    font-size: 25px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZ2dlci9ibG9nZ2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvYmxvZ2dlci9ibG9nZ2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpe1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/blogger/blogger.component.html":
/*!************************************************!*\
  !*** ./src/app/blogger/blogger.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-md-3\">\n  <div class=\"card-header\">\n    <h3>{{bloger.name}}</h3>\n  </div>\n  <div class=\"card-body\">\n    <h5 class=\"text-muted\">{{blogger.email}}</h5>\n    <p>{{bloger.about}}</p>\n    <div class=\"d-flex flex-row justify-content-center\">\n      <div class=\"p-4\">\n        <a href=\"https://www.facebook.com/\">\n        <i class=\"fa fa-facebook\"></i>\n      </a>\n     </div>\n     <div class=\"p-4\">\n       <a href=\"https://twitter.com/twitter?lang=en\">\n      <i class=\"fa fa-twitter\"></i>\n      </a>\n     </div>\n     <div class=\"p-4\">\n       <a href=\"https://www.instagram.com/\">\n      <i class=\"fa-fa-instagram\"></i>\n      </a>\n     </div>\n    </div>\n  </div>\n  <div class=\"card-footer\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <button class=\"btn-block btn btn-warning\" data-toggle=\"modal\"\n        data-target=\"#changeblogger\">Change</button>\n      </div>\n      <div class=\"col-md-6\">\n        <button class=\"btn-block btn btn-danger\" (click)=\"deleteBlogger()\">\n          Delete</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"modal fade\" id=\"changeblogger\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header bg-warning text-white\">\n        <h5 class=\"modal-title\">Change Blogger</h5>\n        <button class=\"close\" data-dismiss=\"modal\">\n          <span>&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form #f=\"ngForm\" id=\"changeForm\">\n          <div class=\"form-group\">\n            <lable fore=\"name\">Name</lable>\n            <input type=\"text\" class=\"form-control\" id=\"name\" ngModel required name=\"name\" #nameBlogger=\"ngModel\">\n            <span class=\"help-block text-danger\" *ngIf=\"!nameBlogger.valid && nameBlogger.touched\">You must insert Name</span>\n          </div>\n          <div class=\"form-group\">\n            <lable for=\"email\">Email</lable>\n            <input type=\"email\" class=\"form-control\" id=\"email\" ngModel required name=\"email\" #emailBlogger=\"ngModel\">\n            <span class=\"help-block text-danger\" *ngIf=\"!emailBlogger.valid && emailBlogger.touched\">You must insert Email</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"About\">About Blogger</label>\n            <textarea name=\"about\" class=\"form-control\" rows=\"5\" value=\"About blogger\" ngModel></textarea>\n          </div>\n        </form>\n        <div class=\"modal-footer\">\n          <button class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button (click)=\"changeBlogger(f)\" type=\"submit\" class=\"btn btn-warning\" data-dismiss=\"modal\" [disabled]=!f.valid>Finish Editing</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/blogger/blogger.component.ts":
/*!**********************************************!*\
  !*** ./src/app/blogger/blogger.component.ts ***!
  \**********************************************/
/*! exports provided: BloggerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BloggerComponent", function() { return BloggerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blogger */ "./src/app/blogger.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _bloggers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../bloggers.service */ "./src/app/bloggers.service.ts");
/* harmony import */ var _bloggers_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../bloggers.actions */ "./src/app/bloggers.actions.ts");






var BloggerComponent = /** @class */ (function () {
    function BloggerComponent(bloggersService, store) {
        this.bloggersService = bloggersService;
        this.store = store;
    }
    BloggerComponent.prototype.ngOnInit = function () {
        this.bloggersState = this.store.select('bloggers');
        this.modalIndex = this.index;
    };
    BloggerComponent.prototype.changeBlogger = function (form) {
        var _this = this;
        this.store.dispatch(new _bloggers_actions__WEBPACK_IMPORTED_MODULE_5__["EditBlogger"]({ index: this.index,
            blogger: new _blogger__WEBPACK_IMPORTED_MODULE_2__["Blogger"](form.value.name, form.value.email, form.value.about) }));
        this.bloggersState.subscribe(function (blog) {
            _this.bloggersService.saveBlogger(blog.bloggers).subscribe();
        });
        form.reset();
    };
    BloggerComponent.prototype.deleteBlogger = function () {
        var _this = this;
        this.store.dispatch(new _bloggers_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteBlogger"](this.index));
        this.bloggersState.subscribe(function (blog) {
            _this.bloggersService.saveBlogger(blog.bloggers).subscribe();
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _blogger__WEBPACK_IMPORTED_MODULE_2__["Blogger"])
    ], BloggerComponent.prototype, "blogger", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], BloggerComponent.prototype, "index", void 0);
    BloggerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'blogger.component',
            template: __webpack_require__(/*! ./blogger.component.html */ "./src/app/blogger/blogger.component.html"),
            styles: [__webpack_require__(/*! ./blogger.component.css */ "./src/app/blogger/blogger.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_bloggers_service__WEBPACK_IMPORTED_MODULE_4__["BloggersService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], BloggerComponent);
    return BloggerComponent;
}());



/***/ }),

/***/ "./src/app/bloggers.actions.ts":
/*!*************************************!*\
  !*** ./src/app/bloggers.actions.ts ***!
  \*************************************/
/*! exports provided: ADD_BLOGGER, DELETE_BLOGGER, EDIT_BLOGGER, ADD_BLOGGERS, AddBlogger, EditBlogger, DeleteBlogger, AddBloggers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_BLOGGER", function() { return ADD_BLOGGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_BLOGGER", function() { return DELETE_BLOGGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_BLOGGER", function() { return EDIT_BLOGGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_BLOGGERS", function() { return ADD_BLOGGERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBlogger", function() { return AddBlogger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBlogger", function() { return EditBlogger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteBlogger", function() { return DeleteBlogger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBloggers", function() { return AddBloggers; });
var ADD_BLOGGER = 'ADD_BLOGGER';
var DELETE_BLOGGER = 'DELETE_BLOGGER';
var EDIT_BLOGGER = 'EDIT_BLOGGER';
var ADD_BLOGGERS = 'ADD_BLOGGERS';
var AddBlogger = /** @class */ (function () {
    function AddBlogger(payload) {
        this.payload = payload;
        this.type = ADD_BLOGGER;
    }
    return AddBlogger;
}());

var EditBlogger = /** @class */ (function () {
    function EditBlogger(payload) {
        this.payload = payload;
        this.type = EDIT_BLOGGER;
    }
    return EditBlogger;
}());

var DeleteBlogger = /** @class */ (function () {
    function DeleteBlogger(payload) {
        this.payload = payload;
        this.type = DELETE_BLOGGER;
    }
    return DeleteBlogger;
}());

var AddBloggers = /** @class */ (function () {
    function AddBloggers(payload) {
        this.payload = payload;
        this.type = ADD_BLOGGERS;
    }
    return AddBloggers;
}());



/***/ }),

/***/ "./src/app/bloggers.reducers.ts":
/*!**************************************!*\
  !*** ./src/app/bloggers.reducers.ts ***!
  \**************************************/
/*! exports provided: bloggersReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bloggersReducer", function() { return bloggersReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _bloggers_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bloggers.actions */ "./src/app/bloggers.actions.ts");


var initialState = {
    bloggers: []
};
function bloggersReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _bloggers_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_BLOGGER"]:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { bloggers: state.bloggers.concat([action.payload]) });
        case _bloggers_actions__WEBPACK_IMPORTED_MODULE_1__["DELETE_BLOGGER"]:
            var oldBloggers = state.bloggers.slice();
            oldBloggers.splice(action.payload, 1);
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { bloggers: oldBloggers });
        case _bloggers_actions__WEBPACK_IMPORTED_MODULE_1__["EDIT_BLOGGER"]:
            var beforeEditingBloggers = state.bloggers.slice();
            beforeEditingBloggers[action.payload.index] = action.payload.blogger;
            console.log(action.payload.index);
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { bloggers: beforeEditingBloggers });
        case _bloggers_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_BLOGGERS"]:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { bloggers: action.payload });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/bloggers.service.ts":
/*!*************************************!*\
  !*** ./src/app/bloggers.service.ts ***!
  \*************************************/
/*! exports provided: BloggersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BloggersService", function() { return BloggersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");




var BloggersService = /** @class */ (function () {
    function BloggersService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
    }
    BloggersService.prototype.getAllBloggers = function () {
        var token = this.authService.getToken();
        return this.http.get('https://bloggers-3d482.firebaseio.com/data.json?auth =' + token, {
            headers: this.headers
        });
    };
    BloggersService.prototype.saveBlogger = function (bloggers) {
        var token = this.authService.getToken();
        return this.http.put('https://bloggers-3d482.firebaseio.com/data.json?auth =' + token, bloggers, {
            headers: this.headers
        });
    };
    BloggersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], BloggersService);
    return BloggersService;
}());



/***/ }),

/***/ "./src/app/bloggers/bloggers.component.css":
/*!*************************************************!*\
  !*** ./src/app/bloggers/bloggers.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2dnZXJzL2Jsb2dnZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/bloggers/bloggers.component.html":
/*!**************************************************!*\
  !*** ./src/app/bloggers/bloggers.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <app-blogger class=\"col-md-6\"\n  [blogger] = \"blogger\"\n  [index]=\"i\"\n  *ngFor=\"let blogger of (bloggersState|async).bloggers;let i=index\">\n</app-blogger>\n</div>\n\n<app-addblogger></app-addblogger>\n"

/***/ }),

/***/ "./src/app/bloggers/bloggers.component.ts":
/*!************************************************!*\
  !*** ./src/app/bloggers/bloggers.component.ts ***!
  \************************************************/
/*! exports provided: BloggersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BloggersComponent", function() { return BloggersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bloggers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bloggers.service */ "./src/app/bloggers.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _blogger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blogger */ "./src/app/blogger.ts");
/* harmony import */ var _bloggers_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../bloggers.actions */ "./src/app/bloggers.actions.ts");






var BloggersComponent = /** @class */ (function () {
    function BloggersComponent(bloggerService, store) {
        this.bloggerService = bloggerService;
        this.store = store;
    }
    BloggersComponent.prototype.ngOnInit = function () {
        this.bloggersState = this.store.select('bloggers');
    };
    BloggersComponent.prototype.addBlogger = function (form) {
        var _this = this;
        this.store.dispatch(new _bloggers_actions__WEBPACK_IMPORTED_MODULE_5__["AddBlogger"](new _blogger__WEBPACK_IMPORTED_MODULE_4__["Blogger"](form.value.name, form.value.email, form.value.about)));
        this.bloggersState.subscribe(function (blog) {
            _this.bloggerService.saveBlogger(blog.bloggers).subscribe();
        });
        form.reset();
    };
    BloggersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bloggers',
            template: __webpack_require__(/*! ./bloggers.component.html */ "./src/app/bloggers/bloggers.component.html"),
            styles: [__webpack_require__(/*! ./bloggers.component.css */ "./src/app/bloggers/bloggers.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_bloggers_service__WEBPACK_IMPORTED_MODULE_2__["BloggersService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], BloggersComponent);
    return BloggersComponent;
}());



/***/ }),

/***/ "./src/app/guard.service.ts":
/*!**********************************!*\
  !*** ./src/app/guard.service.ts ***!
  \**********************************/
/*! exports provided: GuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuardService", function() { return GuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");



var GuardService = /** @class */ (function () {
    function GuardService(authService) {
        this.authService = authService;
    }
    GuardService.prototype.canActivate = function (route, state) {
        return this.authService.authenticated();
    };
    GuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], GuardService);
    return GuardService;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    background:#333;\r\n    color:#fff; }\r\n\r\n.navbar{\r\n        border-bottom: #008ed6 3px solid;\r\n        opacity: 0.8; }\r\n\r\n#home-section{\r\n    background: url('background.jpg') no-repeat;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    min-height: 700px; }\r\n\r\n#home-section .dark-overlay {\r\n    background-color: rgba(0,0,0,0.7);\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    min-height: 700px; }\r\n\r\n.info-header{\r\n        width: 50%;\r\n        margin: auto;\r\n        border-bottom: 1px #ddd solid;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVyxFQUFFOztBQUVqQjtRQUNRLGlDQUFpQztRQUNqQyxhQUFhLEVBQUU7O0FBRXZCO0lBQ0ksNENBQXNEO0lBQ3RELHVCQUF1QjtJQUN2Qiw2QkFBNkI7SUFDN0Isa0JBQWtCLEVBQUU7O0FBQ3hCO0lBQ0ksa0NBQWtDO0lBQ2xDLG1CQUFtQjtJQUNuQixPQUFPO0lBQ1AsUUFBUTtJQUNSLFlBQVk7SUFDWixrQkFBa0IsRUFBRTs7QUFFcEI7UUFDSSxXQUFXO1FBQ1gsYUFBYTtRQUNiLDhCQUE4QixDQUFDIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIGJhY2tncm91bmQ6IzMzMztcclxuICAgIGNvbG9yOiNmZmY7IH1cclxuXHJcbi5uYXZiYXJ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogIzAwOGVkNiAzcHggc29saWQ7XHJcbiAgICAgICAgb3BhY2l0eTogMC44OyB9XHJcblxyXG4jaG9tZS1zZWN0aW9ue1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vaW1nL2JhY2tncm91bmQuanBnXCIpIG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgbWluLWhlaWdodDogNzAwcHg7IH1cclxuI2hvbWUtc2VjdGlvbiAuZGFyay1vdmVybGF5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43KTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDcwMHB4OyB9XHJcblxyXG4gICAgLmluZm8taGVhZGVye1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCAjZGRkIHNvbGlkO30iXX0= */"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id =\"home-section\">\n  <div class=\"dark-overlay\">\n    <div class=\"conta\">\n    <div class=\"row\">\n      <div class=\"col-md-6 text-center mx-auto text-white\">\n        <h1 class=\"display-2 mt-5 pt-5\">\n          Find All About Our Bloggers\n        </h1>\n        <p class=\"lead\">Lorem ipsum dolar sit amet, consectetur adipisicing elit.Laborum,quas.</p>\n        <a href=\"#bloggers\" class=\"btn btn-outline-secondary btn-lg text-white\">\n          <i class=\"fa fa-arrow-right\"></i>Read More</a>\n      </div>\n    </div>\n    </div>\n  </div>\n</header>\n\n<section id=\"bloggers\" class=\"my-5\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"info-header mb-5 text-center\">\n          <h1 class=\"text-primaty pb-3\">\n            Meet The Bloggers\n          </h1>\n          <p class=\"lead pb-3\">\n            Loream ipsum dolar sit amet, consectetur adipisicing elit.\n            Amet omis fuga maiores exepturi dolar explicabo.\n          </p>\n        </div>\n      </div>\n    </div>\n    <app-bloggers></app-bloggers>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _bloggers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bloggers.service */ "./src/app/bloggers.service.ts");
/* harmony import */ var _bloggers_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../bloggers.actions */ "./src/app/bloggers.actions.ts");





var MainComponent = /** @class */ (function () {
    function MainComponent(bloggersService, store) {
        this.bloggersService = bloggersService;
        this.store = store;
    }
    MainComponent.prototype.ngOnInit = function () {
        this.getAllBloggers();
    };
    MainComponent.prototype.getAllBloggers = function () {
        var _this = this;
        this.bloggersService.getAllBloggers()
            .subscribe(function (bloggers) {
            _this.store.dispatch(new _bloggers_actions__WEBPACK_IMPORTED_MODULE_4__["AddBloggers"](bloggers));
        });
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_bloggers_service__WEBPACK_IMPORTED_MODULE_3__["BloggersService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/post.service.ts":
/*!*********************************!*\
  !*** ./src/app/post.service.ts ***!
  \*********************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");




var PostService = /** @class */ (function () {
    function PostService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
    }
    PostService.prototype.getAllPost = function () {
        var token = this.authService.getToken();
        return this.http.get('https://bloggers-3d482.firebaseio.com/data.json?auth =' + token, {
            headers: this.headers
        });
    };
    PostService.prototype.savePosts = function (posts) {
        var token = this.authService.getToken();
        return this.http.put('https://bloggers-3d482.firebaseio.com/data.json?auth =' + token, posts, {
            headers: this.headers
        });
    };
    PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/post/post.component.css":
/*!*****************************************!*\
  !*** ./src/app/post/post.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QvcG9zdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/post/post.component.html":
/*!******************************************!*\
  !*** ./src/app/post/post.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"condition\" class=\"card m-3 bg-light\">\r\n    <div class=\"card-header text-dark\">\r\n        <h3>{{post.title | uppercase}}</h3>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <h3 class=\"text-muted\">{{post.category}}</h3>\r\n    \r\n    </div>\r\n    <div class=\"card-footer text-right\">\r\n        <p>{{post.datePosted}}</p>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/post/post.component.ts":
/*!****************************************!*\
  !*** ./src/app/post/post.component.ts ***!
  \****************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PostComponent = /** @class */ (function () {
    function PostComponent(postService, route, router) {
        this.postService = postService;
        this.route = route;
        this.router = router;
        this.condition = false;
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        this.postService.getAllPost()
            .subscribe(function (posts) {
            for (var index in posts) {
                if (posts[index].id == id) {
                    _this.post = posts[index];
                    _this.condition = true;
                    break;
                }
            }
        });
        this.route.params
            .subscribe(function (params) {
            var id = params['id'];
            console.log(id);
            _this.postService.getAllPost()
                .subscribe(function (posts) {
                for (var index in posts) {
                    if (posts[index].id == id) {
                        _this.post = posts[index];
                        _this.condition = true;
                        break;
                    }
                }
            });
        });
    };
    PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/post/post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/posts/posts.component.css":
/*!*******************************************!*\
  !*** ./src/app/posts/posts.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#home-section {\r\n    background: url('posts.jpg') no-repeat;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    min-height: 350px;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvcG9zdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVDQUFpRDtJQUNqRCx1QkFBdUI7SUFDdkIsNkJBQTZCO0lBQzdCLGtCQUFrQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvcG9zdHMvcG9zdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNob21lLXNlY3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vaW1nL3Bvc3RzLmpwZ1wiKSBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIG1pbi1oZWlnaHQ6IDM1MHB4O30iXX0= */"

/***/ }),

/***/ "./src/app/posts/posts.component.html":
/*!********************************************!*\
  !*** ./src/app/posts/posts.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"home-section\">\n  <div class=\"dark-overlay\">\n </div>\n</header>\n\n<div class=\"bg-light\">\n  <div class=\"container my-4\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"card m-3\">\n          <div class=\"card-header\">\n            <h4>Posts</h4>\n          </div>\n          <table class=\"table table-hover table-bordered text-center\">\n            <thead>\n              <tr>\n                <th>#</th>\n                <th>Title</th>\n                <th>Deleting</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngForm=\"let post of posts;let i=index\"[@postAnim]>\n                <td>{{i+1}}</td>\n                <td [routerLink]=\"['/posts',posts.id]\">{{post.title}}</td>\n                <td>\n                  <button class=\"btn btn-danger btn-block\"(click)=\"deletePost(post.id)\">\n                    Delete Post</button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container my-4\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"info-header mb-5 text-center\">\n        <h1 class=\"text-primary pb-3\">\n          Add New Post\n        </h1>\n        <p class=\"lead pb-3\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n          Amet omnis fuga maiores excepturi dolores explicabo.\n        </p>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6 bg-dark text-white mx-auto\">\n      <form [formGroup]=\"addForm\" (ngSubmit)=\"submit()\" class=\"my-4\">\n        <div class=\"form-group\">\n          <label for=\"title\">Title</label>\n          <input type=\"text\" id=\"title\" formControlName=\"title\" class=\"form-control\">\n          <span *ngIf=\"!addForm.get('title').valid && addForm.get('title').touched\">\n            Enter the Title!</span>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"Category\">Category</label>\n          <input type=\"text\" id=\"category\" formControlName=\"category\" class=\"form-control\">\n          <span *ngIf=\"!addForm.get('category').valid && addForm.get('category').touched\">\n            Enter Category!</span>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"date\">Posted</label>\n          <input type=\"text\" id=\"date\" formControlName=\"date\" class=\"form-control\">\n          <span *ngIf=\"!addForm.get('date').valid && addForm.get('date').touched\">\n            Enter Date of Posting!</span>\n        </div>\n        <span *ngIf=\"!addForm.valid && addForm.touched\">\n          Fill Form!!!</span>\n          <br>\n          <button class=\"btn btn-outline-secondary btn-block\" type=\"submit\">Save</button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/posts/posts.component.ts":
/*!******************************************!*\
  !*** ./src/app/posts/posts.component.ts ***!
  \******************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");





var PostsComponent = /** @class */ (function () {
    function PostsComponent(postService) {
        this.postService = postService;
        this.posts = [];
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'title': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'category': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'date': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
        });
        this.postService.getAllPost()
            .subscribe(function (posts) {
            _this.posts = posts;
        });
    };
    PostsComponent.prototype.deletePost = function (id) {
        this.posts = this.posts.filter(function (posts) { return posts.id != id; });
        this.postService.savePosts(this.posts)
            .subscribe();
    };
    PostsComponent.prototype.submit = function () {
        var newPost = {
            id: this.posts[this.posts.length - 1].id + 1, title: this.addForm.value.title,
            category: this.addForm.value.category, datePosted: this.addForm.value.date
        };
        this.posts.push(newPost);
        this.postService.savePosts(this.posts)
            .subscribe();
        this.addForm.reset();
    };
    PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! ./posts.component.html */ "./src/app/posts/posts.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('postAnim', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('insert', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: 1,
                        transform: 'translatex(0)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(1300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                                opacity: 0,
                                transform: 'translate(-100px)',
                                offset: 0
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                                opacity: 0.5,
                                transform: 'translate(-70px)',
                                offset: 0.3
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                                opacity: 0.8,
                                transform: 'translate(-40px)',
                                offset: 0.8
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                                opacity: 1,
                                transform: 'translate(0)',
                                offset: 1
                            })
                        ]))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(900, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            opacity: 0,
                            transform: 'translate(100px)'
                        }))
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./posts.component.css */ "./src/app/posts/posts.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/sign-in/sign-in.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#home-section{\r\n    background: url('welcome.jpg') no-repeat;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    min-height: 700px;}\r\n#home-section .dark-overlay{\r\n    background-color: rgba(0,0,0,0.7);\r\n    position:absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    min-height: 700px;}\r\n.home-inner{\r\n        padding-top: 150px;\r\n    }\r\n.card-form{\r\n        opacity: 0.8;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5Q0FBbUQ7SUFDbkQsdUJBQXVCO0lBQ3ZCLDZCQUE2QjtJQUM3QixrQkFBa0IsQ0FBQztBQUN2QjtJQUNJLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFFBQVE7SUFDUixZQUFZO0lBQ1osa0JBQWtCLENBQUM7QUFDbkI7UUFDSSxtQkFBbUI7S0FDdEI7QUFFRDtRQUNJLGFBQWE7S0FDaEIiLCJmaWxlIjoic3JjL2FwcC9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNob21lLXNlY3Rpb257XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9pbWcvd2VsY29tZS5qcGdcIikgbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBtaW4taGVpZ2h0OiA3MDBweDt9XHJcbiNob21lLXNlY3Rpb24gLmRhcmstb3ZlcmxheXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43KTtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogNzAwcHg7fVxyXG4gICAgLmhvbWUtaW5uZXJ7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDE1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWZvcm17XHJcbiAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.html":
/*!************************************************!*\
  !*** ./src/app/sign-in/sign-in.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"home-section\">\n  <div class=\"dark-overlay\">\n    <div class=\"container home-inner\">\n      <div class=\"row\">\n        <div class=\"col-md-8 d-none d-md-block text-light\">\n          <h1 class=\"display-4\">\n            <strong>Sing In</strong>\n          </h1>\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n            Facilis pariatur distinctio eum consequuntur necessitatibus\n            animi impedit, dolores delectus quibusdam reprehenderit.\n          </p>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card bg-success text-center card-form\">\n            <div class=\"card-body\">\n              <form (ngSubmit)=\"singin(f)\" #f=\"ngForm\">\n                <div class=\"form-group\">\n                  <input type=\"text\" placeholder=\"User name\" id=\"name\" name=\"name\"\n                  ngModel class=\"form-control form-control-lg\">\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"email\" placeholder=\"Email\" id=\"email\" name=\"email\"\n                  ngModel class=\"form-control form-control-lg\">\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"password\" placeholder=\"Password\" id=\"password\" name=\"password\"\n                  ngModel class=\"form-control form-control-lg\">\n                </div>\n                <button class=\"btn btn-outline-light btn-block\" type=\"submit\">Sing In</button>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.ts ***!
  \**********************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");



var SignInComponent = /** @class */ (function () {
    function SignInComponent(authService) {
        this.authService = authService;
    }
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent.prototype.signin = function (form) {
        var email = form.value.email;
        var password = form.value.password;
        this.authService.signinUser(email, password);
    };
    SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/sign-in/sign-in.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/sign-up/sign-up.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#home-section{\r\n    background: url('welcome.jpg') no-repeat;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    min-height: 700px;}\r\n    #home-section .dark-overlay {\r\n        background-color: rgba(0,0,0,0.7);\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n        width: 100%;\r\n        min-height: 700px;}\r\n    .home-inner{\r\n            padding-top: 150px;\r\n        }\r\n    .card-form{\r\n            opacity: 0.8;\r\n        }\r\n    \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5Q0FBbUQ7SUFDbkQsdUJBQXVCO0lBQ3ZCLDZCQUE2QjtJQUM3QixrQkFBa0IsQ0FBQztJQUNuQjtRQUNJLGtDQUFrQztRQUNsQyxtQkFBbUI7UUFDbkIsT0FBTztRQUNQLFFBQVE7UUFDUixZQUFZO1FBQ1osa0JBQWtCLENBQUM7SUFDbkI7WUFDSSxtQkFBbUI7U0FDdEI7SUFFRDtZQUNJLGFBQWE7U0FDaEIiLCJmaWxlIjoic3JjL2FwcC9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNob21lLXNlY3Rpb257XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9pbWcvd2VsY29tZS5qcGdcIikgbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBtaW4taGVpZ2h0OiA3MDBweDt9XHJcbiAgICAjaG9tZS1zZWN0aW9uIC5kYXJrLW92ZXJsYXkge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43KTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWluLWhlaWdodDogNzAwcHg7fVxyXG4gICAgICAgIC5ob21lLWlubmVye1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5jYXJkLWZvcm17XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgICB9XHJcbiAgICAiXX0= */"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.html":
/*!************************************************!*\
  !*** ./src/app/sign-up/sign-up.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"home-section\">\n  <div class=\"dark-overlay\">\n    <div class=\"container home-inner\">\n      <div class=\"row\">\n        <div class=\"col-md-8 d-none d-md-block text-light\">\n          <h1 class=\"display-4\">\n            <strong>Sign Up</strong>\n          </h1>\n          <p>Lorem ipsum dolor sit amet,consectetur adipisicing elit.Facilis pariatur distinctio eum consequuntur\n            necessitatibus animi impedit, dolores delectus quibusdam reprehenderit.Lorem ipsum dolor sit amet,\n            consectetur adipisicing elit.facilis pariatur distinctio eum consequuntur necessitatibus animi impedit,\n            dolores delectus quibusdam reprehenderit.\n          </p>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card bg-success text-center card-form\">\n            <div class=\"card-body\">\n              <form (ngSubmit)=\"signup(f)\" #f=\"ngForm\">\n                <div class=\"form-group\">\n                  <input type=\"text\" placeholder=\"User Name\" id=\"name\" name=\"name\"\n                  ngModel class=\"form-control form-control-lg\">\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"email\" placeholder=\"Email\" id=\"email\" name =\"email\"\n                  ngModel class=\"form-control form-control-lg\">\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"password\" placeholder=\"Password\" id=\"password\" name=\"password\"\n                  ngModel class=\"form-control form-control-lg\">\n                </div>\n                <button class=\"btn btn-outline-light btn-block\" type=\"submit\">Sing Up</button>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.ts ***!
  \**********************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");



var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(authService) {
        this.authService = authService;
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.signup = function (form) {
        var email = form.value.email;
        var password = form.value.password;
        this.authService.signupUser(email, password);
    };
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/sign-up/sign-up.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\natas\ZavrsnaAplikacija\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map