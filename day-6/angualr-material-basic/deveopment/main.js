"use strict";
(self["webpackChunkangualr_material_basic"] = self["webpackChunkangualr_material_basic"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game/game.component */ 8339);




const _c0 = ["secondNameInput"];
class AppComponent {
    constructor() {
        this.secondNameInputRef = '';
        this.title = 'angualr-material-basic';
        this.order = 1;
        console.log('I am from constructor()!! and my order::::' + this.order);
        this.order++;
    }
    ngOnChanges(changes) {
        //  throw new Error('Method not implemented.');
        //It is called before ngOnInit( ) and whenever one or more data-bound input properties change. It detects simple changes in the property values.
        console.log('I am from ngOnChanges()!! and my order::::' + this.order);
        this.order++;
    }
    ngOnInit() {
        // It initializes the directive/component after Angular displays the data-bound properties and is called once after ngOnChanges( ).
        console.log('I am from ngOnInit() and my order::::' + this.order);
        console.log('environment.baseURL', _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL);
        this.order++;
    }
    ngDoCheck() {
        //Changes that are not detected by Angular itself are detected and resolved by it. It is called every time a change is detected and immediately after ngOnChanges() and ngOnInit( )
        console.log('I am from ngDoCheck() and my order::::' + this.order);
        this.order++;
    }
    ngAfterContentInit() {
        console.log('I am from ngAfterContentInit() and my order::::' + this.order);
        this.order++;
    }
    ngAfterContentChecked() {
        console.log('I am from ngAfterContentChecked() and my order::::' + this.order);
        this.order++;
    }
    ngAfterViewInit() {
        console.log('I am from ngAfterViewInit() and my order::::' + this.order);
        this.order++;
    }
    ngAfterViewChecked() {
        console.log('I am from ngAfterViewChecked() and my order::::' + this.order);
        this.order++;
    }
    ngOnDestroy() {
        console.log('I am from ngOnDestroy() and my order::::' + this.order);
        this.order++;
    }
    showInput(text) {
        console.log('text', text, this.secondNameInputRef.nativeElement.value);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.secondNameInputRef = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 8, vars: 0, consts: [["type", "text"], ["firstNameInput", ""], ["secondNameInput", ""], [3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "router-outlet")(1, "app-game")(2, "input", 0, 1)(4, "input", 0, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.showInput(_r0.value)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Show");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _game_game_component__WEBPACK_IMPORTED_MODULE_1__.GameComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var src_modules_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/modules/material.module */ 5509);
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product/product.component */ 7695);
/* harmony import */ var _game_game_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game/game.module */ 7361);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule,
        src_modules_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
        _game_game_module__WEBPACK_IMPORTED_MODULE_4__.GameModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _product_product_component__WEBPACK_IMPORTED_MODULE_3__.ProductComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule,
        src_modules_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
        _game_game_module__WEBPACK_IMPORTED_MODULE_4__.GameModule] }); })();


/***/ }),

/***/ 175:
/*!******************************************************************!*\
  !*** ./src/app/game/components/drop-list/drop-list.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropListComponent": () => (/* binding */ DropListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);



function DropListComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropListComponent_li_4_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const option_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.handleOptionChange(option_r1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r1.text);
} }
class DropListComponent {
    constructor() {
        this.selectionOptions = [];
        this.optionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.selectedOption = '';
    }
    ngOnInit() {
    }
    handleOptionChange(option) {
        this.selectedOption = option.text;
        this.optionChange.emit(option);
    }
}
DropListComponent.ɵfac = function DropListComponent_Factory(t) { return new (t || DropListComponent)(); };
DropListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DropListComponent, selectors: [["app-drop-list"]], inputs: { selectionOptions: ["options", "selectionOptions"] }, outputs: { optionChange: "optionChange" }, decls: 5, vars: 2, consts: [[1, "dropdown"], ["type", "button", "id", "dropdownMenuButton1", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuButton1", 1, "dropdown-menu"], [4, "ngFor", "ngForOf"], ["href", "#", 1, "dropdown-item", 3, "click"]], template: function DropListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DropListComponent_li_4_Template, 3, 1, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.selectedOption || "Select", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectionOptions);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcm9wLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 5789:
/*!******************************************************************!*\
  !*** ./src/app/game/components/game-card/game-card.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameCardComponent": () => (/* binding */ GameCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

const _c0 = [[["h1"]], "*"];
const _c1 = ["h1", "*"];
class GameCardComponent {
    constructor() {
        this.title = '';
    }
    ngOnInit() {
    }
}
GameCardComponent.ɵfac = function GameCardComponent_Factory(t) { return new (t || GameCardComponent)(); };
GameCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameCardComponent, selectors: [["app-game-card"]], inputs: { title: "title" }, ngContentSelectors: _c1, decls: 6, vars: 1, consts: [[1, "card"], [1, "card-header"], [1, "card-body"]], template: function GameCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnYW1lLWNhcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6757:
/*!************************************************************************!*\
  !*** ./src/app/game/components/game-content/game-content.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameContentComponent": () => (/* binding */ GameContentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function GameContentComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function GameContentComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Some Header\n");
} }
class GameContentComponent {
    constructor() {
        this.headerTemplate = '';
    }
    ngOnInit() {
    }
}
GameContentComponent.ɵfac = function GameContentComponent_Factory(t) { return new (t || GameContentComponent)(); };
GameContentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameContentComponent, selectors: [["app-game-content"]], inputs: { headerTemplate: "headerTemplate" }, decls: 14, vars: 1, consts: [[1, "card", "text-center"], [1, "card-header"], [4, "ngTemplateOutlet"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["href", "#", 1, "btn", "btn-primary"], [1, "card-footer", "text-muted"], ["defaultHeader", ""]], template: function GameContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GameContentComponent_ng_container_2_Template, 1, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Special title treatment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "With supporting text below as a natural lead-in to additional content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Go somewhere");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " 2 days ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, GameContentComponent_ng_template_12_Template, 1, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.headerTemplate ? ctx.headerTemplate : _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnYW1lLWNvbnRlbnQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 9434:
/*!**********************************************************************!*\
  !*** ./src/app/game/components/game-detail/game-detail.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameDetailComponent": () => (/* binding */ GameDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class GameDetailComponent {
    constructor() { }
    ngOnInit() {
    }
}
GameDetailComponent.ɵfac = function GameDetailComponent_Factory(t) { return new (t || GameDetailComponent)(); };
GameDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameDetailComponent, selectors: [["app-game-detail"]], decls: 2, vars: 0, template: function GameDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "game-detail works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnYW1lLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 2965:
/*!******************************************************************!*\
  !*** ./src/app/game/components/game-info/game-info.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameInfoComponent": () => (/* binding */ GameInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class GameInfoComponent {
    constructor() {
        this.footerTitle = "Footer title of game info component";
    }
    ngOnInit() {
    }
}
GameInfoComponent.ɵfac = function GameInfoComponent_Factory(t) { return new (t || GameInfoComponent)(); };
GameInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameInfoComponent, selectors: [["app-game-info"]], decls: 3, vars: 1, template: function GameInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "game-info works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n", ctx.footerTitle, "\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnYW1lLWluZm8uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 4886:
/*!******************************************************************!*\
  !*** ./src/app/game/components/game-list/game-list.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameListComponent": () => (/* binding */ GameListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/game.service */ 7690);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _star_star_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../star/star.component */ 6130);
/* harmony import */ var _drop_list_drop_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../drop-list/drop-list.component */ 175);
/* harmony import */ var _game_card_game_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game-card/game-card.component */ 5789);
/* harmony import */ var _game_content_game_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../game-content/game-content.component */ 6757);
/* harmony import */ var _game_info_game_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../game-info/game-info.component */ 2965);
/* harmony import */ var _game_wrapper_game_wrapper_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../game-wrapper/game-wrapper.component */ 2693);
/* harmony import */ var _pipes_cost_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/cost.pipe */ 9187);
/* harmony import */ var _pipes_fallback_image_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/fallback-image.pipe */ 2134);
/* harmony import */ var _pipes_game_filter_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pipes/game-filter.pipe */ 2451);














const _c0 = function (a0) { return { width: a0 }; };
function GameListComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "fallbackImage");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](16, "cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "td")(18, "app-star", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ratingClicked", function GameListComponent_tr_26_Template_app_star_ratingClicked_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r5.handleRatingClick($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const game_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](i_r4 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](5, 8, game_r3.imageUrl, "assets/images/no-image.jpg"), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"])("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](20, _c0, ctx_r0.showImage ? "90px" : "40px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 11, game_r3.productName));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](game_r3.productCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind4"](13, 13, game_r3.price, "INR", "symbol-narrow", "4.5-8"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](16, 18, game_r3.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("rating", game_r3.starRating);
} }
function GameListComponent_ng_template_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Header template of card component");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
class GameListComponent {
    constructor(gameService) {
        this.gameService = gameService;
        this.filterText = '';
        this.showImage = false;
        this.games = [];
        this.carList = [
            { text: 'BMW', value: 'bmw' },
            { text: 'MG', value: 'mg' },
            { text: 'Audi', value: 'audi' }
        ];
        this.productList = [];
    }
    ngOnInit() {
        this.games = this.gameService.getGameList();
        this.productList = this.games.map(game => ({
            text: game.productName,
            value: game.productName
        }));
    }
    toggleImage() {
        this.showImage = !this.showImage;
    }
    handleRatingClick(message) {
        console.log('message', message);
    }
    handleOptionChange(option) {
        this.filterText = option.value;
    }
}
GameListComponent.ɵfac = function GameListComponent_Factory(t) { return new (t || GameListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_0__.GameService)); };
GameListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: GameListComponent, selectors: [["app-game-list"]], decls: 89, vars: 10, consts: [[1, "mb-3"], ["for", "exampleInputEmail1", 1, "form-label"], ["type", "email", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "options", "optionChange"], [1, "table"], ["scope", "col"], ["aria-hidden", "false", "aria-label", "Example home icon", 3, "click"], [4, "ngFor", "ngForOf"], [1, "m-4"], [3, "title"], ["scope", "row"], ["colspan", "2"], ["for", "exampleFormControlInput1", 1, "form-label"], ["type", "email", "id", "exampleFormControlInput1", "placeholder", "name@example.com", 1, "form-control"], ["for", "exampleFormControlTextarea1", 1, "form-label"], ["id", "exampleFormControlTextarea1", "rows", "3", 1, "form-control"], ["cardHeader", ""], [3, "headerTemplate"], ["width", "90px", 3, "src", "ngStyle"], [3, "rating", "ratingClicked"]], template: function GameListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function GameListComponent_Template_input_ngModelChange_3_listener($event) { return ctx.filterText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "app-drop-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("optionChange", function GameListComponent_Template_app_drop_list_optionChange_4_listener($event) { return ctx.handleOptionChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "app-drop-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("optionChange", function GameListComponent_Template_app_drop_list_optionChange_5_listener($event) { return ctx.handleOptionChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "table", 4)(7, "thead")(8, "tr")(9, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "Image ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function GameListComponent_Template_mat_icon_click_13_listener() { return ctx.toggleImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "image");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, "Cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, "Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](26, GameListComponent_tr_26_Template, 19, 22, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](27, "gameFilter");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](28, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "div", 8)(30, "app-game-card", 9)(31, "table", 4)(32, "thead")(33, "tr")(34, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37, "First");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](39, "Last");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41, "Handle");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "tbody")(43, "tr")(44, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](45, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](47, "Mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](49, "Otto");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](51, "@mdo");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "tr")(53, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](54, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](56, "Jacob");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](58, "Thornton");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](60, "@fat");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](61, "tr")(62, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](63, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](64, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](65, "Larry the Bird");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](66, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](67, "@twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](68, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](69, "Game List");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](70, "div", 8)(71, "app-game-card", 9)(72, "div", 0)(73, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](74, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](75, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](76, "div", 0)(77, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](78, "Example textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](79, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](80, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](81, "Game Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](82, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](83, GameListComponent_ng_template_83_Template, 2, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](85, "app-game-content", 17)(86, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](87, "app-game-wrapper");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](88, "app-game-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.filterText);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("options", ctx.carList);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("options", ctx.productList);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](27, 7, ctx.games, ctx.filterText));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("title", "Game Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("title", "Game Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("headerTemplate", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgStyle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _star_star_component__WEBPACK_IMPORTED_MODULE_1__.StarComponent, _drop_list_drop_list_component__WEBPACK_IMPORTED_MODULE_2__.DropListComponent, _game_card_game_card_component__WEBPACK_IMPORTED_MODULE_3__.GameCardComponent, _game_content_game_content_component__WEBPACK_IMPORTED_MODULE_4__.GameContentComponent, _game_info_game_info_component__WEBPACK_IMPORTED_MODULE_5__.GameInfoComponent, _game_wrapper_game_wrapper_component__WEBPACK_IMPORTED_MODULE_6__.GameWrapperComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.CurrencyPipe, _pipes_cost_pipe__WEBPACK_IMPORTED_MODULE_7__.CostPipe, _pipes_fallback_image_pipe__WEBPACK_IMPORTED_MODULE_8__.FallbackImagePipe, _pipes_game_filter_pipe__WEBPACK_IMPORTED_MODULE_9__.GameFilterPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnYW1lLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 2693:
/*!************************************************************************!*\
  !*** ./src/app/game/components/game-wrapper/game-wrapper.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameWrapperComponent": () => (/* binding */ GameWrapperComponent)
/* harmony export */ });
/* harmony import */ var _game_info_game_info_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game-info/game-info.component */ 2965);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


const _c0 = ["*"];
class GameWrapperComponent {
    constructor() {
        this.gameInfoComponent = null;
    }
    ngOnInit() {
    }
    ngAfterContentInit() {
        this.gameInfoComponent.footerTitle = 'title properties changed';
    }
}
GameWrapperComponent.ɵfac = function GameWrapperComponent_Factory(t) { return new (t || GameWrapperComponent)(); };
GameWrapperComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GameWrapperComponent, selectors: [["app-game-wrapper"]], contentQueries: function GameWrapperComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _game_info_game_info_component__WEBPACK_IMPORTED_MODULE_0__.GameInfoComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.gameInfoComponent = _t.first);
    } }, ngContentSelectors: _c0, decls: 12, vars: 0, consts: [[1, "card", "text-center"], [1, "card-header"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["href", "#", 1, "btn", "btn-primary"], [1, "card-footer", "text-muted"]], template: function GameWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Featured ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Special title treatment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "With supporting text below as a natural lead-in to additional content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Go somewhere");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnYW1lLXdyYXBwZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6130:
/*!********************************************************!*\
  !*** ./src/app/game/components/star/star.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StarComponent": () => (/* binding */ StarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 7822);



class StarComponent {
    constructor() {
        this.rating = 0;
        this.ratingClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.totalStarWidth = 120;
        this.starWidth = 0;
    }
    ngOnChanges(changes) {
        console.log('changes', changes);
        if (this.rating) {
            this.starWidth = 24 * this.rating;
        }
    }
    ngOnInit() {
    }
    ratingStartClick() {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}
StarComponent.ɵfac = function StarComponent_Factory(t) { return new (t || StarComponent)(); };
StarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StarComponent, selectors: [["app-star"]], inputs: { rating: "rating" }, outputs: { ratingClicked: "ratingClicked" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 12, vars: 5, consts: [[1, "star-wrapper"], [3, "title", "click"], ["aria-hidden", "false", "aria-label", "Example home icon"]], template: function StarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StarComponent_Template_div_click_1_listener() { return ctx.ratingStartClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.totalStarWidth, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.starWidth, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.rating);
    } }, dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIcon], styles: [".star-wrapper[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  overflow: hidden;\n  cursor: pointer;\n}\n.star-wrapper[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  display: inline-table;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQUo7QUFHRTtFQUNFLHFCQUFBO0FBREoiLCJmaWxlIjoic3Rhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGFyLXdyYXBwZXIge1xyXG4gIGRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIG1hdC1pY29uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS10YWJsZTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 8339:
/*!****************************************!*\
  !*** ./src/app/game/game.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameComponent": () => (/* binding */ GameComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_game_list_game_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/game-list/game-list.component */ 4886);


class GameComponent {
    constructor() { }
    ngOnInit() {
    }
}
GameComponent.ɵfac = function GameComponent_Factory(t) { return new (t || GameComponent)(); };
GameComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GameComponent, selectors: [["app-game"]], decls: 5, vars: 0, consts: [[1, "navbar", "bg-light"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand"]], template: function GameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-game-list");
    } }, dependencies: [_components_game_list_game_list_component__WEBPACK_IMPORTED_MODULE_0__.GameListComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnYW1lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 7361:
/*!*************************************!*\
  !*** ./src/app/game/game.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameModule": () => (/* binding */ GameModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_game_list_game_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/game-list/game-list.component */ 4886);
/* harmony import */ var _components_game_detail_game_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/game-detail/game-detail.component */ 9434);
/* harmony import */ var _game_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.component */ 8339);
/* harmony import */ var src_modules_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/modules/material.module */ 5509);
/* harmony import */ var _pipes_cost_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/cost.pipe */ 9187);
/* harmony import */ var _pipes_fallback_image_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/fallback-image.pipe */ 2134);
/* harmony import */ var _pipes_game_filter_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/game-filter.pipe */ 2451);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _components_star_star_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/star/star.component */ 6130);
/* harmony import */ var _components_drop_list_drop_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/drop-list/drop-list.component */ 175);
/* harmony import */ var _components_game_card_game_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/game-card/game-card.component */ 5789);
/* harmony import */ var _components_game_content_game_content_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/game-content/game-content.component */ 6757);
/* harmony import */ var _components_game_info_game_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/game-info/game-info.component */ 2965);
/* harmony import */ var _components_game_wrapper_game_wrapper_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/game-wrapper/game-wrapper.component */ 2693);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);
















const components = [
    _components_game_list_game_list_component__WEBPACK_IMPORTED_MODULE_0__.GameListComponent,
    _components_game_detail_game_detail_component__WEBPACK_IMPORTED_MODULE_1__.GameDetailComponent,
    _game_component__WEBPACK_IMPORTED_MODULE_2__.GameComponent,
    _pipes_cost_pipe__WEBPACK_IMPORTED_MODULE_4__.CostPipe
];
class GameModule {
}
GameModule.ɵfac = function GameModule_Factory(t) { return new (t || GameModule)(); };
GameModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: GameModule });
GameModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
        src_modules_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](GameModule, { declarations: [_components_game_list_game_list_component__WEBPACK_IMPORTED_MODULE_0__.GameListComponent,
        _components_game_detail_game_detail_component__WEBPACK_IMPORTED_MODULE_1__.GameDetailComponent,
        _game_component__WEBPACK_IMPORTED_MODULE_2__.GameComponent,
        _pipes_cost_pipe__WEBPACK_IMPORTED_MODULE_4__.CostPipe, _pipes_fallback_image_pipe__WEBPACK_IMPORTED_MODULE_5__.FallbackImagePipe, _pipes_game_filter_pipe__WEBPACK_IMPORTED_MODULE_6__.GameFilterPipe, _components_star_star_component__WEBPACK_IMPORTED_MODULE_7__.StarComponent, _components_drop_list_drop_list_component__WEBPACK_IMPORTED_MODULE_8__.DropListComponent, _components_game_card_game_card_component__WEBPACK_IMPORTED_MODULE_9__.GameCardComponent, _components_game_content_game_content_component__WEBPACK_IMPORTED_MODULE_10__.GameContentComponent, _components_game_info_game_info_component__WEBPACK_IMPORTED_MODULE_11__.GameInfoComponent, _components_game_wrapper_game_wrapper_component__WEBPACK_IMPORTED_MODULE_12__.GameWrapperComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
        src_modules_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule], exports: [_game_component__WEBPACK_IMPORTED_MODULE_2__.GameComponent] }); })();


/***/ }),

/***/ 9187:
/*!*****************************************!*\
  !*** ./src/app/game/pipes/cost.pipe.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CostPipe": () => (/* binding */ CostPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class CostPipe {
    transform(value, ...args) {
        return value > 3500 ? 'High Price' : 'Low Price';
    }
}
CostPipe.ɵfac = function CostPipe_Factory(t) { return new (t || CostPipe)(); };
CostPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "cost", type: CostPipe, pure: true });


/***/ }),

/***/ 2134:
/*!***************************************************!*\
  !*** ./src/app/game/pipes/fallback-image.pipe.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FallbackImagePipe": () => (/* binding */ FallbackImagePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FallbackImagePipe {
    transform(value, fallback) {
        return value ? value : fallback;
    }
}
FallbackImagePipe.ɵfac = function FallbackImagePipe_Factory(t) { return new (t || FallbackImagePipe)(); };
FallbackImagePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "fallbackImage", type: FallbackImagePipe, pure: true });


/***/ }),

/***/ 2451:
/*!************************************************!*\
  !*** ./src/app/game/pipes/game-filter.pipe.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameFilterPipe": () => (/* binding */ GameFilterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class GameFilterPipe {
    transform(games, filterText) {
        return filterText ? games.filter(game => game.productName.toLowerCase().indexOf(filterText.toLowerCase()) > -1) : games;
    }
}
GameFilterPipe.ɵfac = function GameFilterPipe_Factory(t) { return new (t || GameFilterPipe)(); };
GameFilterPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "gameFilter", type: GameFilterPipe, pure: true });


/***/ }),

/***/ 7690:
/*!***********************************************!*\
  !*** ./src/app/game/services/game.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameService": () => (/* binding */ GameService)
/* harmony export */ });
/* harmony import */ var _mockdata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mockdata */ 7805);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class GameService {
    constructor() { }
    getGameList() {
        return _mockdata__WEBPACK_IMPORTED_MODULE_0__.games;
    }
}
GameService.ɵfac = function GameService_Factory(t) { return new (t || GameService)(); };
GameService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GameService, factory: GameService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7805:
/*!*******************************************!*\
  !*** ./src/app/game/services/mockdata.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "games": () => (/* binding */ games)
/* harmony export */ });
const games = [
    {
        "productId": 1,
        "productName": "Uncharted 4 : A Thief End ",
        "productCode": "PSG-0001",
        "releaseDate": "May 10, 2016",
        "description": "A Thief s End is an action-adventure video game developed by Naughty Dog and published by Sony Interactive Entertainment for the PlayStation 4 video game console. ",
        "cost": 2999,
        "price": 3999.290,
        "genre": "Action-adventure game ",
        "imageUrl": "assets/images/ps4-uncharted.jpeg",
        "starRating": 5
    },
    {
        "productId": 2,
        "productName": "Call of Duty: Infinite Warfare",
        "productCode": "PSG-0002",
        "releaseDate": "November 4, 2016",
        "description": " Infinite Warfare is a first-person shooter video game developed by Infinity Ward and published by Activision. ",
        "cost": 2599,
        "price": 4999.15,
        "genre": "First-Person Shooter",
        "imageUrl": "assets/images/ps4-call-of-duty.jpeg",
        "starRating": 3.1
    },
    {
        "productId": 5,
        "productName": "Assassin Creed Syndicate",
        "productCode": "PSG-0005",
        "releaseDate": "October 23, 2015",
        "description": "Assassin's Creed Syndicate is an action-adventure video game developed by Ubisoft Quebec and published by Ubisoft.",
        "cost": 6900,
        "price": 7000.89,
        "genre": "Action, Adventure",
        "imageUrl": "assets/images/ps4-standard-edition-assassin-s-creed-syndicate.jpeg",
        "starRating": 4.3
    },
    {
        "productId": 8,
        "productName": "The Witcher 3",
        "productCode": "PSG-0008",
        "releaseDate": "May 15, 2009",
        "description": "The Witcher 3: Wild Hunt is an open world action role-playing video game developed by CD Projekt RED.",
        "cost": 2995,
        "price": 3350.78,
        "genre": "Action role-playing game",
        "imageUrl": "assets/images/ps4-the-witcher.jpeg",
        "starRating": 3.8
    },
    {
        "productId": 10,
        "productName": "The Tomb Raider",
        "productCode": "PSG-0010",
        "releaseDate": "October 15, 2015",
        "description": "Rise of the Tomb Raider is an action-adventure video game developed by Crystal Dynamics and published by Square Enix.",
        "cost": 2000,
        "price": 2200.65,
        "genre": "Action",
        "imageUrl": "assets/images/ps4-the-tomb-raider.jpeg",
        "starRating": 3.2
    }
];


/***/ }),

/***/ 817:
/*!*************************************!*\
  !*** ./src/app/product/mockData.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = [{ "name": { "common": "United Arab Emirates", "official": "United Arab Emirates", "nativeName": { "ara": { "official": "الإمارات العربية المتحدة", "common": "دولة الإمارات العربية المتحدة" } } }, "tld": [".ae", "امارات."], "cca2": "AE", "ccn3": "784", "cca3": "ARE", "cioc": "UAE", "independent": true, "status": "officially-assigned", "unMember": true, "currencies": { "AED": { "name": "United Arab Emirates dirham", "symbol": "د.إ" } }, "idd": { "root": "+9", "suffixes": ["71"] }, "capital": ["Abu Dhabi"], "altSpellings": ["AE", "UAE", "Emirates"], "region": "Asia", "subregion": "Western Asia", "languages": { "ara": "Arabic" }, "translations": { "ara": { "official": "الإمارات العربية المتحدة", "common": "دولة الإمارات العربية المتحدة" }, "ces": { "official": "Spojené arabské emiráty", "common": "Spojené arabské emiráty" }, "cym": { "official": "United Arab Emirates", "common": "United Arab Emirates" }, "deu": { "official": "Vereinigte Arabische Emirate", "common": "Vereinigte Arabische Emirate" }, "est": { "official": "Araabia Ühendemiraadid", "common": "Araabia Ühendemiraadid" }, "fin": { "official": "Yhdistyneet arabiemiirikunnat", "common": "Arabiemiraatit" }, "fra": { "official": "Émirats arabes unis", "common": "Émirats arabes unis" }, "hrv": { "official": "Ujedinjeni Arapski Emirati", "common": "Ujedinjeni Arapski Emirati" }, "hun": { "official": "Egyesült Arab Emírségek", "common": "Egyesült Arab Emírségek" }, "ita": { "official": "Emirati Arabi Uniti", "common": "Emirati Arabi Uniti" }, "jpn": { "official": "アラブ首長国連邦", "common": "アラブ首長国連邦" }, "kor": { "official": "아랍 토후국 연방", "common": "아랍에미리트" }, "nld": { "official": "Verenigde Arabische Emiraten", "common": "Verenigde Arabische Emiraten" }, "per": { "official": "امارات متحده عربی", "common": "امارات" }, "pol": { "official": "Zjednoczone Emiraty Arabskie", "common": "Zjednoczone Emiraty Arabskie" }, "por": { "official": "Emirados Árabes Unidos", "common": "Emirados Árabes Unidos" }, "rus": { "official": "Объединенные Арабские Эмираты", "common": "Объединённые Арабские Эмираты" }, "slk": { "official": "Spojené arabské emiráty", "common": "Spojené arabské emiráty" }, "spa": { "official": "Emiratos Árabes Unidos", "common": "Emiratos Árabes Unidos" }, "swe": { "official": "Förenade Arabemiraten", "common": "Förenade Arabemiraten" }, "urd": { "official": "متحدہ عرب امارات", "common": "متحدہ عرب امارات" }, "zho": { "official": "阿拉伯联合酋长国", "common": "阿拉伯联合酋长国" } }, "latlng": [24.0, 54.0], "landlocked": false, "borders": ["OMN", "SAU"], "area": 83600.0, "demonyms": { "eng": { "f": "Emirati", "m": "Emirati" }, "fra": { "f": "Emirienne", "m": "Emirien" } }, "flag": "\uD83C\uDDE6\uD83C\uDDEA", "maps": { "googleMaps": "https://goo.gl/maps/AZZTDA6GzVAnKMVd8", "openStreetMaps": "https://www.openstreetmap.org/relation/307763" }, "population": 9890400, "gini": { "2018": 26.0 }, "fifa": "UAE", "car": { "signs": ["UAE"], "side": "right" }, "timezones": ["UTC+04:00"], "continents": ["Asia"], "flags": { "png": "https://flagcdn.com/w320/ae.png", "svg": "https://flagcdn.com/ae.svg" }, "coatOfArms": { "png": "https://mainfacts.com/media/images/coats_of_arms/ae.png", "svg": "https://mainfacts.com/media/images/coats_of_arms/ae.svg" }, "startOfWeek": "sunday", "capitalInfo": { "latlng": [24.47, 54.37] } }, { "name": { "common": "United States", "official": "United States of America", "nativeName": { "eng": { "official": "United States of America", "common": "United States" } } }, "tld": [".us"], "cca2": "US", "ccn3": "840", "cca3": "USA", "cioc": "USA", "independent": true, "status": "officially-assigned", "unMember": true, "currencies": { "USD": { "name": "United States dollar", "symbol": "$" } }, "idd": { "root": "+1", "suffixes": ["201", "202", "203", "205", "206", "207", "208", "209", "210", "212", "213", "214", "215", "216", "217", "218", "219", "220", "224", "225", "227", "228", "229", "231", "234", "239", "240", "248", "251", "252", "253", "254", "256", "260", "262", "267", "269", "270", "272", "274", "276", "281", "283", "301", "302", "303", "304", "305", "307", "308", "309", "310", "312", "313", "314", "315", "316", "317", "318", "319", "320", "321", "323", "325", "327", "330", "331", "334", "336", "337", "339", "346", "347", "351", "352", "360", "361", "364", "380", "385", "386", "401", "402", "404", "405", "406", "407", "408", "409", "410", "412", "413", "414", "415", "417", "419", "423", "424", "425", "430", "432", "434", "435", "440", "442", "443", "447", "458", "463", "464", "469", "470", "475", "478", "479", "480", "484", "501", "502", "503", "504", "505", "507", "508", "509", "510", "512", "513", "515", "516", "517", "518", "520", "530", "531", "534", "539", "540", "541", "551", "559", "561", "562", "563", "564", "567", "570", "571", "573", "574", "575", "580", "585", "586", "601", "602", "603", "605", "606", "607", "608", "609", "610", "612", "614", "615", "616", "617", "618", "619", "620", "623", "626", "628", "629", "630", "631", "636", "641", "646", "650", "651", "657", "660", "661", "662", "667", "669", "678", "681", "682", "701", "702", "703", "704", "706", "707", "708", "712", "713", "714", "715", "716", "717", "718", "719", "720", "724", "725", "727", "730", "731", "732", "734", "737", "740", "743", "747", "754", "757", "760", "762", "763", "765", "769", "770", "772", "773", "774", "775", "779", "781", "785", "786", "801", "802", "803", "804", "805", "806", "808", "810", "812", "813", "814", "815", "816", "817", "818", "828", "830", "831", "832", "843", "845", "847", "848", "850", "854", "856", "857", "858", "859", "860", "862", "863", "864", "865", "870", "872", "878", "901", "903", "904", "906", "907", "908", "909", "910", "912", "913", "914", "915", "916", "917", "918", "919", "920", "925", "928", "929", "930", "931", "934", "936", "937", "938", "940", "941", "947", "949", "951", "952", "954", "956", "959", "970", "971", "972", "973", "975", "978", "979", "980", "984", "985", "989"] }, "capital": ["Washington, D.C."], "altSpellings": ["US", "USA", "United States of America"], "region": "Americas", "subregion": "North America", "languages": { "eng": "English" }, "translations": { "ara": { "official": "الولايات المتحدة الامريكية", "common": "الولايات المتحدة" }, "ces": { "official": "Spojené státy americké", "common": "Spojené státy" }, "cym": { "official": "United States of America", "common": "United States" }, "deu": { "official": "Vereinigte Staaten von Amerika", "common": "Vereinigte Staaten" }, "est": { "official": "Ameerika Ühendriigid", "common": "Ameerika Ühendriigid" }, "fin": { "official": "Amerikan yhdysvallat", "common": "Yhdysvallat" }, "fra": { "official": "Les états-unis d'Amérique", "common": "États-Unis" }, "hrv": { "official": "Sjedinjene Države Amerike", "common": "Sjedinjene Američke Države" }, "hun": { "official": "Amerikai Egyesült Államok", "common": "Amerikai Egyesült Államok" }, "ita": { "official": "Stati Uniti d'America", "common": "Stati Uniti d'America" }, "jpn": { "official": "アメリカ合衆国", "common": "アメリカ合衆国" }, "kor": { "official": "아메리카 합중국", "common": "미국" }, "nld": { "official": "Verenigde Staten van Amerika", "common": "Verenigde Staten" }, "per": { "official": "ایالات متحده آمریکا", "common": "ایالات متحده آمریکا" }, "pol": { "official": "Stany Zjednoczone Ameryki", "common": "Stany Zjednoczone" }, "por": { "official": "Estados Unidos da América", "common": "Estados Unidos" }, "rus": { "official": "Соединенные Штаты Америки", "common": "Соединённые Штаты Америки" }, "slk": { "official": "Spojené štáty Americké", "common": "Spojené štáty americké" }, "spa": { "official": "Estados Unidos de América", "common": "Estados Unidos" }, "swe": { "official": "Amerikas förenta stater", "common": "USA" }, "urd": { "official": "ریاستہائے متحدہ امریکا", "common": "ریاستہائے متحدہ" }, "zho": { "official": "美利坚合众国", "common": "美国" } }, "latlng": [38.0, -97.0], "landlocked": false, "borders": ["CAN", "MEX"], "area": 9372610.0, "demonyms": { "eng": { "f": "American", "m": "American" }, "fra": { "f": "Américaine", "m": "Américain" } }, "flag": "\uD83C\uDDFA\uD83C\uDDF8", "maps": { "googleMaps": "https://goo.gl/maps/e8M246zY4BSjkjAv6", "openStreetMaps": "https://www.openstreetmap.org/relation/148838#map=2/20.6/-85.8" }, "population": 329484123, "gini": { "2018": 41.4 }, "fifa": "USA", "car": { "signs": ["USA"], "side": "right" }, "timezones": ["UTC-12:00", "UTC-11:00", "UTC-10:00", "UTC-09:00", "UTC-08:00", "UTC-07:00", "UTC-06:00", "UTC-05:00", "UTC-04:00", "UTC+10:00", "UTC+12:00"], "continents": ["North America"], "flags": { "png": "https://flagcdn.com/w320/us.png", "svg": "https://flagcdn.com/us.svg" }, "coatOfArms": { "png": "https://mainfacts.com/media/images/coats_of_arms/us.png", "svg": "https://mainfacts.com/media/images/coats_of_arms/us.svg" }, "startOfWeek": "sunday", "capitalInfo": { "latlng": [38.89, -77.05] }, "postalCode": { "format": "#####-####", "regex": "^\\d{5}(-\\d{4})?$" } }, { "name": { "common": "United States Virgin Islands", "official": "Virgin Islands of the United States", "nativeName": { "eng": { "official": "Virgin Islands of the United States", "common": "United States Virgin Islands" } } }, "tld": [".vi"], "cca2": "VI", "ccn3": "850", "cca3": "VIR", "cioc": "ISV", "independent": false, "status": "officially-assigned", "unMember": false, "currencies": { "USD": { "name": "United States dollar", "symbol": "$" } }, "idd": { "root": "+1", "suffixes": ["340"] }, "capital": ["Charlotte Amalie"], "altSpellings": ["VI", "Virgin Islands, U.S."], "region": "Americas", "subregion": "Caribbean", "languages": { "eng": "English" }, "translations": { "ara": { "official": "جزر العذراء الامريكية", "common": "جزر العذراء الامريكية" }, "ces": { "official": "Americké Panenské ostrovy", "common": "Americké Panenské ostrovy" }, "cym": { "official": "Virgin Islands of the United States", "common": "United States Virgin Islands" }, "deu": { "official": "Amerikanische Jungferninseln", "common": "Amerikanische Jungferninseln" }, "est": { "official": "Ühendriikide Neitsisaared", "common": "Neitsisaared, USA" }, "fin": { "official": "Yhdysvaltain Neitsytsaaret", "common": "Neitsytsaaret" }, "fra": { "official": "Îles Vierges des États-Unis", "common": "Îles Vierges des États-Unis" }, "hrv": { "official": "Djevičanski Otoci SAD", "common": "Američki Djevičanski Otoci" }, "hun": { "official": "Amerikai Virgin-szigetek", "common": "Amerikai Virgin-szigetek" }, "ita": { "official": "Isole Vergini degli Stati Uniti", "common": "Isole Vergini americane" }, "jpn": { "official": "米国のバージン諸島", "common": "アメリカ領ヴァージン諸島" }, "kor": { "official": "미국령 버진아일랜드", "common": "미국령 버진아일랜드" }, "nld": { "official": "Maagdeneilanden van de Verenigde Staten", "common": "Amerikaanse Maagdeneilanden" }, "per": { "official": "جزایر ویرجین ایالات متحده آمریکا", "common": "جزایر ویرجین ایالات متحده آمریکا" }, "pol": { "official": "Wyspy Dziewicze Stanów Zjednoczonych", "common": "Wyspy Dziewicze Stanów Zjednoczonych" }, "por": { "official": "Ilhas Virgens dos Estados Unidos", "common": "Ilhas Virgens dos Estados Unidos" }, "rus": { "official": "Виргинские острова Соединенных Штатов", "common": "Виргинские Острова" }, "slk": { "official": "Americké Panenské ostrovy", "common": "Americké Panenské ostrovy" }, "spa": { "official": "Islas Vírgenes de los Estados Unidos", "common": "Islas Vírgenes de los Estados Unidos" }, "swe": { "official": "Amerikanska Jungfruöarna", "common": "Amerikanska Jungfruöarna" }, "urd": { "official": "امریکی جزائر ورجن", "common": "امریکی جزائر ورجن" }, "zho": { "official": "美属维尔京群岛", "common": "美属维尔京群岛" } }, "latlng": [18.35, -64.933333], "landlocked": false, "area": 347.0, "demonyms": { "eng": { "f": "Virgin Islander", "m": "Virgin Islander" } }, "flag": "\uD83C\uDDFB\uD83C\uDDEE", "maps": { "googleMaps": "https://goo.gl/maps/mBfreywj8dor6q4m9", "openStreetMaps": "openstreetmap.org/relation/286898" }, "population": 106290, "fifa": "VIR", "car": { "signs": ["USA"], "side": "right" }, "timezones": ["UTC-04:00"], "continents": ["North America"], "flags": { "png": "https://flagcdn.com/w320/vi.png", "svg": "https://flagcdn.com/vi.svg" }, "coatOfArms": {}, "startOfWeek": "monday", "capitalInfo": { "latlng": [18.35, -64.93] } }, { "name": { "common": "United Kingdom", "official": "United Kingdom of Great Britain and Northern Ireland", "nativeName": { "eng": { "official": "United Kingdom of Great Britain and Northern Ireland", "common": "United Kingdom" } } }, "tld": [".uk"], "cca2": "GB", "ccn3": "826", "cca3": "GBR", "cioc": "GBR", "independent": true, "status": "officially-assigned", "unMember": true, "currencies": { "GBP": { "name": "British pound", "symbol": "£" } }, "idd": { "root": "+4", "suffixes": ["4"] }, "capital": ["London"], "altSpellings": ["GB", "UK", "Great Britain"], "region": "Europe", "subregion": "Northern Europe", "languages": { "eng": "English" }, "translations": { "ara": { "official": "المملكة المتحدة لبريطانيا العظمى وايرلندا الشمالية", "common": "المملكة المتحدة" }, "ces": { "official": "Spojené království Velké Británie a Severního Irska", "common": "Spojené království" }, "cym": { "official": "United Kingdom of Great Britain and Northern Ireland", "common": "United Kingdom" }, "deu": { "official": "Vereinigtes Königreich Großbritannien und Nordirland", "common": "Vereinigtes Königreich" }, "est": { "official": "Suurbritannia ja Põhja-Iiri Ühendkuningriik", "common": "Suurbritannia" }, "fin": { "official": "Ison-Britannian ja Pohjois-Irlannin yhdistynyt kuningaskunta", "common": "Yhdistynyt kuningaskunta" }, "fra": { "official": "Royaume-Uni de Grande-Bretagne et d'Irlande du Nord", "common": "Royaume-Uni" }, "hrv": { "official": "Ujedinjeno Kraljevstvo Velike Britanije i Sjeverne Irske", "common": "Ujedinjeno Kraljevstvo" }, "hun": { "official": "Nagy-Britannia és Észak-Írország Egyesült Királysága", "common": "Egyesült Királyság" }, "ita": { "official": "Regno Unito di Gran Bretagna e Irlanda del Nord", "common": "Regno Unito" }, "jpn": { "official": "グレート·ブリテンおよび北アイルランド連合王国", "common": "イギリス" }, "kor": { "official": "그레이트브리튼 북아일랜드 연합 왕국", "common": "영국" }, "nld": { "official": "Verenigd Koninkrijk van Groot-Brittannië en Noord-Ierland", "common": "Verenigd Koninkrijk" }, "per": { "official": "پادشاهی متحد بریتانیای کبیر و ایرلند شمالی", "common": "انگلیس" }, "pol": { "official": "Zjednoczone Królestwo Wielkiej Brytanii i Irlandii Północnej", "common": "Zjednoczone Krłlestwo" }, "por": { "official": "Reino Unido da Grã-Bretanha e Irlanda do Norte", "common": "Reino Unido" }, "rus": { "official": "Соединенное Королевство Великобритании и Северной Ирландии", "common": "Великобритания" }, "slk": { "official": "Spojené kráľovstvo Veľkej Británie a SevernéhoÌrska", "common": "Veľká Británia (Spojené kráľovstvo)" }, "spa": { "official": "Reino Unido de Gran Bretaña e Irlanda del Norte", "common": "Reino Unido" }, "swe": { "official": "Förenade konungariket Storbritannien och Nordirland", "common": "Storbritannien" }, "urd": { "official": "مملکتِ متحدہ برطانیہ عظمی و شمالی آئرلینڈ", "common": "مملکتِ متحدہ" }, "zho": { "official": "大不列颠及北爱尔兰联合王国", "common": "英国" } }, "latlng": [54.0, -2.0], "landlocked": false, "borders": ["IRL"], "area": 242900.0, "demonyms": { "eng": { "f": "British", "m": "British" }, "fra": { "f": "Britannique", "m": "Britannique" } }, "flag": "\uD83C\uDDEC\uD83C\uDDE7", "maps": { "googleMaps": "https://goo.gl/maps/FoDtc3UKMkFsXAjHA", "openStreetMaps": "https://www.openstreetmap.org/relation/62149" }, "population": 67215293, "gini": { "2017": 35.1 }, "car": { "signs": ["GB"], "side": "left" }, "timezones": ["UTC-08:00", "UTC-05:00", "UTC-04:00", "UTC-03:00", "UTC-02:00", "UTC", "UTC+01:00", "UTC+02:00", "UTC+06:00"], "continents": ["Europe"], "flags": { "png": "https://flagcdn.com/w320/gb.png", "svg": "https://flagcdn.com/gb.svg" }, "coatOfArms": { "png": "https://mainfacts.com/media/images/coats_of_arms/gb.png", "svg": "https://mainfacts.com/media/images/coats_of_arms/gb.svg" }, "startOfWeek": "monday", "capitalInfo": { "latlng": [51.5, -0.08] }, "postalCode": { "format": "@# #@@|@## #@@|@@# #@@|@@## #@@|@#@ #@@|@@#@ #@@|GIR0AA", "regex": "^(([A-Z]\\d{2}[A-Z]{2})|([A-Z]\\d{3}[A-Z]{2})|([A-Z]{2}\\d{2}[A-Z]{2})|([A-Z]{2}\\d{3}[A-Z]{2})|([A-Z]\\d[A-Z]\\d[A-Z]{2})|([A-Z]{2}\\d[A-Z]\\d[A-Z]{2})|(GIR0AA))$" } }, { "name": { "common": "United States Minor Outlying Islands", "official": "United States Minor Outlying Islands", "nativeName": { "eng": { "official": "United States Minor Outlying Islands", "common": "United States Minor Outlying Islands" } } }, "tld": [".us"], "cca2": "UM", "ccn3": "581", "cca3": "UMI", "independent": false, "status": "officially-assigned", "unMember": false, "currencies": { "USD": { "name": "United States dollar", "symbol": "$" } }, "idd": { "root": "+2", "suffixes": ["68"] }, "capital": ["Washington DC"], "altSpellings": ["UM"], "region": "Americas", "subregion": "North America", "languages": { "eng": "English" }, "translations": { "ara": { "official": "جزر الولايات المتحدة الصغيرة النائية", "common": "جزر الولايات المتحدة الصغيرة النائية" }, "ces": { "official": "Menší odlehlé ostrovy Spojených států amerických", "common": "Menší odlehlé ostrovy USA" }, "cym": { "official": "United States Minor Outlying Islands", "common": "United States Minor Outlying Islands" }, "deu": { "official": "USA, kleinere ausgelagerte Inseln", "common": "Kleinere Inselbesitzungen der Vereinigten Staaten" }, "est": { "official": "Ühendriikide väikesed hajasaared", "common": "Ühendriikide hajasaared" }, "fin": { "official": "Yhdysvaltain asumattomat saaret", "common": "Yhdysvaltain asumattomat saaret" }, "fra": { "official": "Îles mineures éloignées des États-Unis", "common": "Îles mineures éloignées des États-Unis" }, "hrv": { "official": "Mali udaljeni otoci SAD-a", "common": "Mali udaljeni otoci SAD-a" }, "hun": { "official": "Az Amerikai Egyesült Államok lakatlan külbirtokai", "common": "Az Amerikai Egyesült Államok lakatlan külbirtokai" }, "ita": { "official": "Stati Uniti Isole Minori", "common": "Isole minori esterne degli Stati Uniti d'America" }, "jpn": { "official": "アメリカ合衆国外諸島", "common": "合衆国領有小離島" }, "kor": { "official": "미국령 군소 제도", "common": "미국령 군소 제도" }, "nld": { "official": "Kleine afgelegen eilanden van de Verenigde Staten", "common": "Kleine afgelegen eilanden van de Verenigde Staten" }, "per": { "official": "جزایر کوچک حاشیه‌ای ایالات متحده آمریکا", "common": "جزایر کوچک حاشیه‌ای ایالات متحده آمریکا" }, "pol": { "official": "Dalekie Wyspy Mniejsze Stanów Zjednoczonych", "common": "Dalekie Wyspy Mniejsze Stanów Zjednoczonych" }, "por": { "official": "Estados Unidos Ilhas Menores Distantes", "common": "Ilhas Menores Distantes dos Estados Unidos" }, "rus": { "official": "Внешние малые острова США", "common": "Внешние малые острова США" }, "slk": { "official": "Menšie odľahlé ostrovy Spjoených štátov", "common": "Menšie odľahlé ostrovy USA" }, "spa": { "official": "Estados Unidos Islas menores alejadas de", "common": "Islas Ultramarinas Menores de Estados Unidos" }, "swe": { "official": "Förenta staternas mindre öar i Oceanien och Västindien", "common": "Förenta staternas mindre öar i Oceanien och Västindien" }, "urd": { "official": "امریکی چھوٹے بیرونی جزائر", "common": "امریکی چھوٹے بیرونی جزائر" }, "zho": { "official": "美国本土外小岛屿", "common": "美国本土外小岛屿" } }, "latlng": [19.3, 166.633333], "landlocked": false, "area": 34.2, "demonyms": { "eng": { "f": "American Islander", "m": "American Islander" } }, "flag": "\uD83C\uDDFA\uD83C\uDDF2", "maps": { "googleMaps": "https://goo.gl/maps/hZKnrzgeK69dDyPF8", "openStreetMaps": "https://www.openstreetmap.org/relation/6430384" }, "population": 300, "car": { "signs": [""], "side": "right" }, "timezones": ["UTC-11:00", "UTC-10:00", "UTC+12:00"], "continents": ["Oceania"], "flags": { "png": "https://flagcdn.com/w320/um.png", "svg": "https://flagcdn.com/um.svg" }, "coatOfArms": {}, "startOfWeek": "monday", "capitalInfo": {} }, { "name": { "common": "Tanzania", "official": "United Republic of Tanzania", "nativeName": { "eng": { "official": "United Republic of Tanzania", "common": "Tanzania" }, "swa": { "official": "Jamhuri ya Muungano wa Tanzania", "common": "Tanzania" } } }, "tld": [".tz"], "cca2": "TZ", "ccn3": "834", "cca3": "TZA", "cioc": "TAN", "independent": true, "status": "officially-assigned", "unMember": true, "currencies": { "TZS": { "name": "Tanzanian shilling", "symbol": "Sh" } }, "idd": { "root": "+2", "suffixes": ["55"] }, "capital": ["Dodoma"], "altSpellings": ["TZ", "Tanzania, United Republic of", "United Republic of Tanzania", "Jamhuri ya Muungano wa Tanzania"], "region": "Africa", "subregion": "Eastern Africa", "languages": { "eng": "English", "swa": "Swahili" }, "translations": { "ara": { "official": "جمهورية تنزانيا الاتحادية", "common": "تنزانيا" }, "ces": { "official": "Sjednocená tanzanská republika", "common": "Tanzanie" }, "cym": { "official": "United Republic of Tanzania", "common": "Tanzania" }, "deu": { "official": "Vereinigte Republik Tansania", "common": "Tansania" }, "est": { "official": "Tansaania Ühendvabariik", "common": "Tansaania" }, "fin": { "official": "Tansanian yhdistynyt tasavalta", "common": "Tansania" }, "fra": { "official": "République -Unie de Tanzanie", "common": "Tanzanie" }, "hrv": { "official": "Ujedinjena Republika Tanzanija", "common": "Tanzanija" }, "hun": { "official": "Tádzsik Köztársaság", "common": "Tádzsikisztán" }, "ita": { "official": "Repubblica Unita di Tanzania", "common": "Tanzania" }, "jpn": { "official": "タンザニア連合共和国", "common": "タンザニア" }, "kor": { "official": "탄자니아 연합 공화국", "common": "탄자니아" }, "nld": { "official": "Verenigde Republiek Tanzania", "common": "Tanzania" }, "per": { "official": "جمهوری متحد تانزانیا", "common": "تانزانیا" }, "pol": { "official": "Zjednoczona Republika Tanzanii", "common": "Tanzania" }, "por": { "official": "República Unida da Tanzânia", "common": "Tanzânia" }, "rus": { "official": "Объединенная Республика Танзания", "common": "Танзания" }, "slk": { "official": "Tanzánijská zjednotená republika", "common": "Tanzánia" }, "spa": { "official": "República Unida de Tanzania", "common": "Tanzania" }, "swe": { "official": "Förenade republiken Tanzania", "common": "Tanzania" }, "urd": { "official": "متحدہ جمہوریہ تنزانیہ", "common": "تنزانیہ" }, "zho": { "official": "坦桑尼亚联合共和国", "common": "坦桑尼亚" } }, "latlng": [-6.0, 35.0], "landlocked": false, "borders": ["BDI", "COD", "KEN", "MWI", "MOZ", "RWA", "UGA", "ZMB"], "area": 945087.0, "demonyms": { "eng": { "f": "Tanzanian", "m": "Tanzanian" }, "fra": { "f": "Tanzanienne", "m": "Tanzanien" } }, "flag": "\uD83C\uDDF9\uD83C\uDDFF", "maps": { "googleMaps": "https://goo.gl/maps/NWYMqZYXte4zGZ2Q8", "openStreetMaps": "https://www.openstreetmap.org/relation/195270" }, "population": 59734213, "gini": { "2017": 40.5 }, "fifa": "TAN", "car": { "signs": ["EAT"], "side": "left" }, "timezones": ["UTC+03:00"], "continents": ["Africa"], "flags": { "png": "https://flagcdn.com/w320/tz.png", "svg": "https://flagcdn.com/tz.svg" }, "coatOfArms": { "png": "https://mainfacts.com/media/images/coats_of_arms/tz.png", "svg": "https://mainfacts.com/media/images/coats_of_arms/tz.svg" }, "startOfWeek": "monday", "capitalInfo": { "latlng": [-6.16, 35.75] } }, { "name": { "common": "Mexico", "official": "United Mexican States", "nativeName": { "spa": { "official": "Estados Unidos Mexicanos", "common": "México" } } }, "tld": [".mx"], "cca2": "MX", "ccn3": "484", "cca3": "MEX", "cioc": "MEX", "independent": true, "status": "officially-assigned", "unMember": true, "currencies": { "MXN": { "name": "Mexican peso", "symbol": "$" } }, "idd": { "root": "+5", "suffixes": ["2"] }, "capital": ["Mexico City"], "altSpellings": ["MX", "Mexicanos", "United Mexican States", "Estados Unidos Mexicanos"], "region": "Americas", "subregion": "North America", "languages": { "spa": "Spanish" }, "translations": { "ara": { "official": "الولايات المتحدة المكسيكية", "common": "المسكيك" }, "ces": { "official": "Spojené státy mexické", "common": "Mexiko" }, "cym": { "official": "United Mexican States", "common": "Mexico" }, "deu": { "official": "Vereinigte Mexikanische Staaten", "common": "Mexiko" }, "est": { "official": "Mehhiko Ühendriigid", "common": "Mehhiko" }, "fin": { "official": "Meksikon yhdysvallat", "common": "Meksiko" }, "fra": { "official": "États-Unis du Mexique", "common": "Mexique" }, "hrv": { "official": "Sjedinjene Meksičke Države", "common": "Meksiko" }, "hun": { "official": "Mexikói Egyesült Államok", "common": "Mexikó" }, "ita": { "official": "Stati Uniti del Messico", "common": "Messico" }, "jpn": { "official": "メキシコ合衆国", "common": "メキシコ" }, "kor": { "official": "멕시코 합중국", "common": "멕시코" }, "nld": { "official": "Verenigde Mexicaanse Staten", "common": "Mexico" }, "per": { "official": "ایالات متحد مکزیک", "common": "مکزیک" }, "pol": { "official": "Meksykańskie Stany Zjednoczone", "common": "Meksyk" }, "por": { "official": "Estados Unidos Mexicanos", "common": "México" }, "rus": { "official": "Мексиканские Соединённые Штаты", "common": "Мексика" }, "slk": { "official": "Spojené štášy mexické", "common": "Mexiko" }, "spa": { "official": "Estados Unidos Mexicanos", "common": "México" }, "swe": { "official": "Mexikos förenta stater", "common": "Mexiko" }, "urd": { "official": "ریاستہائے متحدہ میکسیکو", "common": "میکسیکو" }, "zho": { "official": "墨西哥合众国", "common": "墨西哥" } }, "latlng": [23.0, -102.0], "landlocked": false, "borders": ["BLZ", "GTM", "USA"], "area": 1964375.0, "demonyms": { "eng": { "f": "Mexican", "m": "Mexican" }, "fra": { "f": "Mexicaine", "m": "Mexicain" } }, "flag": "\uD83C\uDDF2\uD83C\uDDFD", "maps": { "googleMaps": "https://goo.gl/maps/s5g7imNPMDEePxzbA", "openStreetMaps": "https://www.openstreetmap.org/relation/114686" }, "population": 128932753, "gini": { "2018": 45.4 }, "fifa": "MEX", "car": { "signs": ["MEX"], "side": "right" }, "timezones": ["UTC-08:00", "UTC-07:00", "UTC-06:00"], "continents": ["North America"], "flags": { "png": "https://flagcdn.com/w320/mx.png", "svg": "https://flagcdn.com/mx.svg" }, "coatOfArms": { "png": "https://mainfacts.com/media/images/coats_of_arms/mx.png", "svg": "https://mainfacts.com/media/images/coats_of_arms/mx.svg" }, "startOfWeek": "monday", "capitalInfo": { "latlng": [19.43, -99.13] }, "postalCode": { "format": "#####", "regex": "^(\\d{5})$" } }];


/***/ }),

/***/ 7695:
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductComponent": () => (/* binding */ ProductComponent)
/* harmony export */ });
/* harmony import */ var _mockData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mockData */ 817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ 5288);



function ProductComponent_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductComponent_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r10.position, " ");
} }
function ProductComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r11.name, " ");
} }
function ProductComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Weight ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r12.weight, " ");
} }
function ProductComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Symbol ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r13.symbol, " ");
} }
function ProductComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 11);
} }
function ProductComponent_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 12);
} }
const ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
class ProductComponent {
    constructor() {
        this.mockdata = _mockData__WEBPACK_IMPORTED_MODULE_0__.data;
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA;
    }
    ngOnInit() {
    }
}
ProductComponent.ɵfac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(); };
ProductComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductComponent, selectors: [["app-product"]], decls: 15, vars: 3, consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProductComponent_th_2_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProductComponent_td_3_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ProductComponent_th_5_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ProductComponent_td_6_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ProductComponent_th_8_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ProductComponent_td_9_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](10, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ProductComponent_th_11_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ProductComponent_td_12_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ProductComponent_tr_13_Template, 1, 0, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ProductComponent_tr_14_Template, 1, 0, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, dependencies: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0YiLCJmaWxlIjoicHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    baseURL: 'http://api.dev/v1'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 5509:
/*!****************************************!*\
  !*** ./src/modules/material.module.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);






const materialModule = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
    _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTableModule,
    _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardModule,
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule
];
class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, materialModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTableModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTableModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTableModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule] }); })();


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map