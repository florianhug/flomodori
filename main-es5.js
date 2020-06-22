function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/flomodori/flomodory.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/flomodori/flomodory.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFlomodoriFlomodoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <app-progress [currentSeconds$]=\"timerValue$\" [totalSeconds$]=\"totalSeconds$\"></app-progress>\n  <div>\n    <button (click)=\"startTimer()\" class=\"start-button\" [disabled]=\"isRunning\">Start</button>\n  </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/progress/progress.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/progress/progress.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProgressProgressComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- shamelessly copied from https://github.com/tiagobalmeida/purecss-circular-progress-bar -->\n\n<div class=\"progress-circle p{{percentage$ | async}}\"\n     [ngClass]=\"{'over50' : (percentage$ | async)>50}\">\n  <span>{{currentSeconds$ | async | timeformat}}</span>\n  <div class=\"left-half-clipper\">\n    <div class=\"first50-bar\"></div>\n    <div class=\"value-bar\"></div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _flomodori_flomodory_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./flomodori/flomodory.component */
    "./src/app/flomodori/flomodory.component.ts");

    var routes = [{
      path: '',
      component: _flomodori_flomodory_component__WEBPACK_IMPORTED_MODULE_3__["FlomodoryComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2Zsb21vZG9yaS9mbG9tb2Rvcmkvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiIsIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'flomodori';
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _flomodori_flomodory_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./flomodori/flomodory.component */
    "./src/app/flomodori/flomodory.component.ts");
    /* harmony import */


    var _timeformat_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./timeformat.pipe */
    "./src/app/timeformat.pipe.ts");
    /* harmony import */


    var _progress_progress_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./progress/progress.component */
    "./src/app/progress/progress.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _flomodori_flomodory_component__WEBPACK_IMPORTED_MODULE_7__["FlomodoryComponent"], _timeformat_pipe__WEBPACK_IMPORTED_MODULE_8__["TimeformatPipe"], _progress_progress_component__WEBPACK_IMPORTED_MODULE_9__["ProgressComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production
      })],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/flomodori/flomodory.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/flomodori/flomodory.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFlomodoriFlomodoryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  margin-top: 4em;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.start-button {\n  margin: 20px;\n  padding: 20px;\n  font-size: 2em;\n  font-weight: bold;\n  border-radius: 12px;\n  border-color: lightgray;\n}\n\n.time-display {\n  font-weight: bold;\n  font-size: 4em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2Zsb21vZG9yaS9mbG9tb2Rvcmkvc3JjL2FwcC9mbG9tb2RvcmkvZmxvbW9kb3J5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mbG9tb2RvcmkvZmxvbW9kb3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9mbG9tb2RvcmkvZmxvbW9kb3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDRlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zdGFydC1idXR0b24ge1xuICBtYXJnaW46IDIwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm9yZGVyLWNvbG9yOiBsaWdodGdyYXk7XG59XG5cbi50aW1lLWRpc3BsYXkge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA0ZW07XG59XG4iLCIuY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNGVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnN0YXJ0LWJ1dHRvbiB7XG4gIG1hcmdpbjogMjBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgZm9udC1zaXplOiAyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3JkZXItY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuLnRpbWUtZGlzcGxheSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDRlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/flomodori/flomodory.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/flomodori/flomodory.component.ts ***!
    \**************************************************/

  /*! exports provided: FlomodoryComponent */

  /***/
  function srcAppFlomodoriFlomodoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlomodoryComponent", function () {
      return FlomodoryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var FlomodoryComponent_1;

    var FlomodoryComponent = FlomodoryComponent_1 = /*#__PURE__*/function () {
      function FlomodoryComponent() {
        _classCallCheck(this, FlomodoryComponent);

        this._timerValue$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](FlomodoryComponent_1.DEFAULT_TIMER);
        this._totalSeconds$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](FlomodoryComponent_1.DEFAULT_TIMER);
      }

      _createClass(FlomodoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "startTimer",
        value: function startTimer() {
          var _this = this;

          this.isRunning = true;

          if (!!this.timer$) {
            this.timer$.unsubscribe();
          }

          this.timer$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
            return FlomodoryComponent_1.DEFAULT_TIMER - value;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeWhile"])(function (value) {
            return value >= 0;
          })).subscribe(function (value) {
            return _this._timerValue$.next(value);
          }, function (error) {
            return console.log(error);
          }, function () {
            _this._timerValue$.next(FlomodoryComponent_1.DEFAULT_TIMER);

            _this.isRunning = false;
          });
        }
      }, {
        key: "timerValue$",
        get: function get() {
          return this._timerValue$;
        }
      }, {
        key: "totalSeconds$",
        get: function get() {
          return this._totalSeconds$;
        }
      }]);

      return FlomodoryComponent;
    }();

    FlomodoryComponent.DEFAULT_TIMER = 1800;
    FlomodoryComponent = FlomodoryComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-flomodory',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./flomodory.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/flomodori/flomodory.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./flomodory.component.scss */
      "./src/app/flomodori/flomodory.component.scss"))["default"]]
    })], FlomodoryComponent);
    /***/
  },

  /***/
  "./src/app/progress/progress.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/progress/progress.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProgressProgressComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".progress-circle {\n  font-size: 20px;\n  margin: 20px;\n  padding: 0;\n  line-height: 10em;\n  width: 10em;\n  height: 10em;\n  border-radius: 50%;\n  position: relative;\n  background-color: #F2E9E1;\n}\n\n.progress-circle:after {\n  border: none;\n  position: absolute;\n  top: 1em;\n  left: 1em;\n  text-align: center;\n  display: block;\n  border-radius: 50%;\n  width: 8em;\n  height: 8em;\n  background-color: white;\n  content: \" \";\n}\n\n.progress-circle span {\n  position: absolute;\n  line-height: 10em;\n  width: 10em;\n  text-align: center;\n  display: block;\n  z-index: 2;\n  font-size: 1em;\n  color: lightgray;\n}\n\n.value-bar {\n  position: absolute;\n  clip: rect(0, 5em, 10em, 0);\n  width: 10em;\n  height: 10em;\n  border-radius: 50%;\n  border: 1em solid #ff6347;\n  box-sizing: border-box;\n}\n\n.left-half-clipper {\n  /* a round circle */\n  border-radius: 50%;\n  width: 10em;\n  height: 10em;\n  position: absolute;\n  /* needed for clipping */\n  clip: rect(0, 10em, 10em, 5em);\n  /* clips the whole left half*/\n}\n\n.progress-circle.over50 .left-half-clipper {\n  clip: rect(auto, auto, auto, auto);\n}\n\n/* Progress bar filling the whole right half for values above 50% */\n\n.progress-circle.over50 .first50-bar {\n  /*Progress bar for the first 50%, filling the whole right half*/\n  position: absolute;\n  /*needed for clipping*/\n  clip: rect(0, 10em, 10em, 5em);\n  background-color: tomato;\n  border-radius: 50%;\n  width: 10em;\n  height: 10em;\n}\n\n.progress-circle:not(.over50) .first50-bar {\n  display: none;\n}\n\n/* Progress bar rotation position */\n\n.progress-circle.p0 .value-bar {\n  display: none;\n}\n\n.progress-circle.p1 .value-bar {\n  transform: rotate(4deg);\n}\n\n.progress-circle.p2 .value-bar {\n  transform: rotate(7deg);\n}\n\n.progress-circle.p3 .value-bar {\n  transform: rotate(11deg);\n}\n\n.progress-circle.p4 .value-bar {\n  transform: rotate(14deg);\n}\n\n.progress-circle.p5 .value-bar {\n  transform: rotate(18deg);\n}\n\n.progress-circle.p6 .value-bar {\n  transform: rotate(22deg);\n}\n\n.progress-circle.p7 .value-bar {\n  transform: rotate(25deg);\n}\n\n.progress-circle.p8 .value-bar {\n  transform: rotate(29deg);\n}\n\n.progress-circle.p9 .value-bar {\n  transform: rotate(32deg);\n}\n\n.progress-circle.p10 .value-bar {\n  transform: rotate(36deg);\n}\n\n.progress-circle.p11 .value-bar {\n  transform: rotate(40deg);\n}\n\n.progress-circle.p12 .value-bar {\n  transform: rotate(43deg);\n}\n\n.progress-circle.p13 .value-bar {\n  transform: rotate(47deg);\n}\n\n.progress-circle.p14 .value-bar {\n  transform: rotate(50deg);\n}\n\n.progress-circle.p15 .value-bar {\n  transform: rotate(54deg);\n}\n\n.progress-circle.p16 .value-bar {\n  transform: rotate(58deg);\n}\n\n.progress-circle.p17 .value-bar {\n  transform: rotate(61deg);\n}\n\n.progress-circle.p18 .value-bar {\n  transform: rotate(65deg);\n}\n\n.progress-circle.p19 .value-bar {\n  transform: rotate(68deg);\n}\n\n.progress-circle.p20 .value-bar {\n  transform: rotate(72deg);\n}\n\n.progress-circle.p21 .value-bar {\n  transform: rotate(76deg);\n}\n\n.progress-circle.p22 .value-bar {\n  transform: rotate(79deg);\n}\n\n.progress-circle.p23 .value-bar {\n  transform: rotate(83deg);\n}\n\n.progress-circle.p24 .value-bar {\n  transform: rotate(86deg);\n}\n\n.progress-circle.p25 .value-bar {\n  transform: rotate(90deg);\n}\n\n.progress-circle.p26 .value-bar {\n  transform: rotate(94deg);\n}\n\n.progress-circle.p27 .value-bar {\n  transform: rotate(97deg);\n}\n\n.progress-circle.p28 .value-bar {\n  transform: rotate(101deg);\n}\n\n.progress-circle.p29 .value-bar {\n  transform: rotate(104deg);\n}\n\n.progress-circle.p30 .value-bar {\n  transform: rotate(108deg);\n}\n\n.progress-circle.p31 .value-bar {\n  transform: rotate(112deg);\n}\n\n.progress-circle.p32 .value-bar {\n  transform: rotate(115deg);\n}\n\n.progress-circle.p33 .value-bar {\n  transform: rotate(119deg);\n}\n\n.progress-circle.p34 .value-bar {\n  transform: rotate(122deg);\n}\n\n.progress-circle.p35 .value-bar {\n  transform: rotate(126deg);\n}\n\n.progress-circle.p36 .value-bar {\n  transform: rotate(130deg);\n}\n\n.progress-circle.p37 .value-bar {\n  transform: rotate(133deg);\n}\n\n.progress-circle.p38 .value-bar {\n  transform: rotate(137deg);\n}\n\n.progress-circle.p39 .value-bar {\n  transform: rotate(140deg);\n}\n\n.progress-circle.p40 .value-bar {\n  transform: rotate(144deg);\n}\n\n.progress-circle.p41 .value-bar {\n  transform: rotate(148deg);\n}\n\n.progress-circle.p42 .value-bar {\n  transform: rotate(151deg);\n}\n\n.progress-circle.p43 .value-bar {\n  transform: rotate(155deg);\n}\n\n.progress-circle.p44 .value-bar {\n  transform: rotate(158deg);\n}\n\n.progress-circle.p45 .value-bar {\n  transform: rotate(162deg);\n}\n\n.progress-circle.p46 .value-bar {\n  transform: rotate(166deg);\n}\n\n.progress-circle.p47 .value-bar {\n  transform: rotate(169deg);\n}\n\n.progress-circle.p48 .value-bar {\n  transform: rotate(173deg);\n}\n\n.progress-circle.p49 .value-bar {\n  transform: rotate(176deg);\n}\n\n.progress-circle.p50 .value-bar {\n  transform: rotate(180deg);\n}\n\n.progress-circle.p51 .value-bar {\n  transform: rotate(184deg);\n}\n\n.progress-circle.p52 .value-bar {\n  transform: rotate(187deg);\n}\n\n.progress-circle.p53 .value-bar {\n  transform: rotate(191deg);\n}\n\n.progress-circle.p54 .value-bar {\n  transform: rotate(194deg);\n}\n\n.progress-circle.p55 .value-bar {\n  transform: rotate(198deg);\n}\n\n.progress-circle.p56 .value-bar {\n  transform: rotate(202deg);\n}\n\n.progress-circle.p57 .value-bar {\n  transform: rotate(205deg);\n}\n\n.progress-circle.p58 .value-bar {\n  transform: rotate(209deg);\n}\n\n.progress-circle.p59 .value-bar {\n  transform: rotate(212deg);\n}\n\n.progress-circle.p60 .value-bar {\n  transform: rotate(216deg);\n}\n\n.progress-circle.p61 .value-bar {\n  transform: rotate(220deg);\n}\n\n.progress-circle.p62 .value-bar {\n  transform: rotate(223deg);\n}\n\n.progress-circle.p63 .value-bar {\n  transform: rotate(227deg);\n}\n\n.progress-circle.p64 .value-bar {\n  transform: rotate(230deg);\n}\n\n.progress-circle.p65 .value-bar {\n  transform: rotate(234deg);\n}\n\n.progress-circle.p66 .value-bar {\n  transform: rotate(238deg);\n}\n\n.progress-circle.p67 .value-bar {\n  transform: rotate(241deg);\n}\n\n.progress-circle.p68 .value-bar {\n  transform: rotate(245deg);\n}\n\n.progress-circle.p69 .value-bar {\n  transform: rotate(248deg);\n}\n\n.progress-circle.p70 .value-bar {\n  transform: rotate(252deg);\n}\n\n.progress-circle.p71 .value-bar {\n  transform: rotate(256deg);\n}\n\n.progress-circle.p72 .value-bar {\n  transform: rotate(259deg);\n}\n\n.progress-circle.p73 .value-bar {\n  transform: rotate(263deg);\n}\n\n.progress-circle.p74 .value-bar {\n  transform: rotate(266deg);\n}\n\n.progress-circle.p75 .value-bar {\n  transform: rotate(270deg);\n}\n\n.progress-circle.p76 .value-bar {\n  transform: rotate(274deg);\n}\n\n.progress-circle.p77 .value-bar {\n  transform: rotate(277deg);\n}\n\n.progress-circle.p78 .value-bar {\n  transform: rotate(281deg);\n}\n\n.progress-circle.p79 .value-bar {\n  transform: rotate(284deg);\n}\n\n.progress-circle.p80 .value-bar {\n  transform: rotate(288deg);\n}\n\n.progress-circle.p81 .value-bar {\n  transform: rotate(292deg);\n}\n\n.progress-circle.p82 .value-bar {\n  transform: rotate(295deg);\n}\n\n.progress-circle.p83 .value-bar {\n  transform: rotate(299deg);\n}\n\n.progress-circle.p84 .value-bar {\n  transform: rotate(302deg);\n}\n\n.progress-circle.p85 .value-bar {\n  transform: rotate(306deg);\n}\n\n.progress-circle.p86 .value-bar {\n  transform: rotate(310deg);\n}\n\n.progress-circle.p87 .value-bar {\n  transform: rotate(313deg);\n}\n\n.progress-circle.p88 .value-bar {\n  transform: rotate(317deg);\n}\n\n.progress-circle.p89 .value-bar {\n  transform: rotate(320deg);\n}\n\n.progress-circle.p90 .value-bar {\n  transform: rotate(324deg);\n}\n\n.progress-circle.p91 .value-bar {\n  transform: rotate(328deg);\n}\n\n.progress-circle.p92 .value-bar {\n  transform: rotate(331deg);\n}\n\n.progress-circle.p93 .value-bar {\n  transform: rotate(335deg);\n}\n\n.progress-circle.p94 .value-bar {\n  transform: rotate(338deg);\n}\n\n.progress-circle.p95 .value-bar {\n  transform: rotate(342deg);\n}\n\n.progress-circle.p96 .value-bar {\n  transform: rotate(346deg);\n}\n\n.progress-circle.p97 .value-bar {\n  transform: rotate(349deg);\n}\n\n.progress-circle.p98 .value-bar {\n  transform: rotate(353deg);\n}\n\n.progress-circle.p99 .value-bar {\n  transform: rotate(356deg);\n}\n\n.progress-circle.p100 .value-bar {\n  transform: rotate(360deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2Zsb21vZG9yaS9mbG9tb2Rvcmkvc3JjL2FwcC9wcm9ncmVzcy9wcm9ncmVzcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZ3Jlc3MvcHJvZ3Jlc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUVBLHlCQUFBO0FDREY7O0FESUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FDREY7O0FESUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUFvQix3QkFBQTtFQUNwQiw4QkFBQTtFQUFnQyw2QkFBQTtBQ0NsQzs7QURFQTtFQUNFLGtDQUFBO0FDQ0Y7O0FERUEsbUVBQUE7O0FBQ0E7RUFDRSwrREFBQTtFQUNBLGtCQUFBO0VBQW9CLHNCQUFBO0VBQ3BCLDhCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDRUY7O0FEQ0E7RUFDRSxhQUFBO0FDRUY7O0FEQ0EsbUNBQUE7O0FBQ0E7RUFDRSxhQUFBO0FDRUY7O0FEQ0E7RUFDRSx1QkFBQTtBQ0VGOztBRENBO0VBQ0UsdUJBQUE7QUNFRjs7QURDQTtFQUNFLHdCQUFBO0FDRUY7O0FEQ0E7RUFDRSx3QkFBQTtBQ0VGOztBRENBO0VBQ0Usd0JBQUE7QUNFRjs7QURDQTtFQUNFLHdCQUFBO0FDRUY7O0FEQ0E7RUFDRSx3QkFBQTtBQ0VGOztBRENBO0VBQ0Usd0JBQUE7QUNFRjs7QURDQTtFQUNFLHdCQUFBO0FDRUY7O0FEQ0E7RUFDRSx3QkFBQTtBQ0VGOztBRENBO0VBQ0Usd0JBQUE7QUNFRjs7QURDQTtFQUNFLHdCQUFBO0FDRUY7O0FEQ0E7RUFDRSx3QkFBQTtBQ0VGOztBRENBO0VBQ0Usd0JBQUE7QUNFRjs7QURDQTtFQUNFLHdCQUFBO0FDRUY7O0FEQ0E7RUFDRSx3QkFBQTtBQ0VGOztBRENBO0VBQ0Usd0JBQUE7QUNFRjs7QURDQTtFQUNFLHdCQUFBO0FDRUY7O0FEQ0E7RUFDRSx3QkFBQTtBQ0VGOztBRENBO0VBQ0Usd0JBQUE7QUNFRjs7QURDQTtFQUNFLHdCQUFBO0FDRUY7O0FEQ0E7RUFDRSx3QkFBQTtBQ0VGOztBRENBO0VBQ0Usd0JBQUE7QUNFRjs7QURDQTtFQUNFLHdCQUFBO0FDRUY7O0FEQ0E7RUFDRSx3QkFBQTtBQ0VGOztBRENBO0VBQ0Usd0JBQUE7QUNFRjs7QURDQTtFQUNFLHdCQUFBO0FDRUY7O0FEQ0E7RUFDRSx5QkFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7QUNFRjs7QURDQTtFQUNFLHlCQUFBO0FDRUY7O0FEQ0E7RUFDRSx5QkFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7QUNFRjs7QURDQTtFQUNFLHlCQUFBO0FDRUY7O0FEQ0E7RUFDRSx5QkFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7QUNFRjs7QURDQTtFQUNFLHlCQUFBO0FDRUY7O0FEQ0E7RUFDRSx5QkFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7QUNFRjs7QURDQTtFQUNFLHlCQUFBO0FDRUY7O0FEQ0E7RUFDRSx5QkFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7QUNFRjs7QURDQTtFQUNFLHlCQUFBO0FDRUY7O0FEQ0E7RUFDRSx5QkFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7QUNFRjs7QURDQTtFQUNFLHlCQUFBO0FDRUY7O0FEQ0E7RUFDRSx5QkFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7QUNFRjs7QURDQTtFQUNFLHlCQUFBO0FDRUY7O0FEQ0E7RUFDRSx5QkFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7QUNFRjs7QURDQTtFQUNFLHlCQUFBO0FDRUY7O0FEQ0E7RUFDRSx5QkFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7QUNFRjs7QURDQTtFQUNFLHlCQUFBO0FDRUY7O0FEQ0E7RUFDRSx5QkFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7QUNFRjs7QURDQTtFQUNFLHlCQUFBO0FDRUY7O0FEQ0E7RUFDRSx5QkFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7QUNFRjs7QURDQTtFQUNFLHlCQUFBO0FDRUY7O0FEQ0E7RUFDRSx5QkFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7QUNFRjs7QURDQTtFQUNFLHlCQUFBO0FDRUY7O0FEQ0E7RUFDRSx5QkFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7QUNFRjs7QURDQTtFQUNFLHlCQUFBO0FDRUY7O0FEQ0E7RUFDRSx5QkFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7QUNFRjs7QURDQTtFQUNFLHlCQUFBO0FDRUY7O0FEQ0E7RUFDRSx5QkFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7QUNFRjs7QURDQTtFQUNFLHlCQUFBO0FDRUY7O0FEQ0E7RUFDRSx5QkFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7QUNFRjs7QURDQTtFQUNFLHlCQUFBO0FDRUY7O0FEQ0E7RUFDRSx5QkFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7QUNFRjs7QURDQTtFQUNFLHlCQUFBO0FDRUY7O0FEQ0E7RUFDRSx5QkFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7QUNFRjs7QURDQTtFQUNFLHlCQUFBO0FDRUY7O0FEQ0E7RUFDRSx5QkFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7QUNFRjs7QURDQTtFQUNFLHlCQUFBO0FDRUY7O0FEQ0E7RUFDRSx5QkFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7QUNFRjs7QURDQTtFQUNFLHlCQUFBO0FDRUY7O0FEQ0E7RUFDRSx5QkFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7QUNFRjs7QURDQTtFQUNFLHlCQUFBO0FDRUY7O0FEQ0E7RUFDRSx5QkFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7QUNFRjs7QURDQTtFQUNFLHlCQUFBO0FDRUY7O0FEQ0E7RUFDRSx5QkFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7QUNFRjs7QURDQTtFQUNFLHlCQUFBO0FDRUY7O0FEQ0E7RUFDRSx5QkFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7QUNFRjs7QURDQTtFQUNFLHlCQUFBO0FDRUY7O0FEQ0E7RUFDRSx5QkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvcHJvZ3Jlc3MvcHJvZ3Jlc3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZ3Jlc3MtY2lyY2xlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW46IDIwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGxpbmUtaGVpZ2h0OiAxMGVtO1xuXG4gIHdpZHRoOiAxMGVtO1xuICBoZWlnaHQ6IDEwZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkU5RTE7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGU6YWZ0ZXIge1xuICBib3JkZXI6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxZW07XG4gIGxlZnQ6IDFlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogOGVtO1xuICBoZWlnaHQ6IDhlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbnRlbnQ6IFwiIFwiO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxpbmUtaGVpZ2h0OiAxMGVtO1xuICB3aWR0aDogMTBlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgei1pbmRleDogMjtcbiAgZm9udC1zaXplOiAxZW07XG4gIGNvbG9yOiBsaWdodGdyYXk7XG59XG5cbi52YWx1ZS1iYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNsaXA6IHJlY3QoMCwgNWVtLCAxMGVtLCAwKTtcbiAgd2lkdGg6IDEwZW07XG4gIGhlaWdodDogMTBlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFlbSBzb2xpZCAjZmY2MzQ3O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ubGVmdC1oYWxmLWNsaXBwZXIge1xuICAvKiBhIHJvdW5kIGNpcmNsZSAqL1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxMGVtO1xuICBoZWlnaHQ6IDEwZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgLyogbmVlZGVkIGZvciBjbGlwcGluZyAqL1xuICBjbGlwOiByZWN0KDAsIDEwZW0sIDEwZW0sIDVlbSk7IC8qIGNsaXBzIHRoZSB3aG9sZSBsZWZ0IGhhbGYqL1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLm92ZXI1MCAubGVmdC1oYWxmLWNsaXBwZXIge1xuICBjbGlwOiByZWN0KGF1dG8sIGF1dG8sIGF1dG8sIGF1dG8pO1xufVxuXG4vKiBQcm9ncmVzcyBiYXIgZmlsbGluZyB0aGUgd2hvbGUgcmlnaHQgaGFsZiBmb3IgdmFsdWVzIGFib3ZlIDUwJSAqL1xuLnByb2dyZXNzLWNpcmNsZS5vdmVyNTAgLmZpcnN0NTAtYmFyIHtcbiAgLypQcm9ncmVzcyBiYXIgZm9yIHRoZSBmaXJzdCA1MCUsIGZpbGxpbmcgdGhlIHdob2xlIHJpZ2h0IGhhbGYqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7IC8qbmVlZGVkIGZvciBjbGlwcGluZyovXG4gIGNsaXA6IHJlY3QoMCwgMTBlbSwgMTBlbSwgNWVtKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdG9tYXRvO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxMGVtO1xuICBoZWlnaHQ6IDEwZW07XG59XG5cbi5wcm9ncmVzcy1jaXJjbGU6bm90KC5vdmVyNTApIC5maXJzdDUwLWJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIFByb2dyZXNzIGJhciByb3RhdGlvbiBwb3NpdGlvbiAqL1xuLnByb2dyZXNzLWNpcmNsZS5wMCAudmFsdWUtYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wMSAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNGRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDIgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDdkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnAzIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMWRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDQgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE0ZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wNSAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMThkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA2IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMmRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDcgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI1ZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wOCAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjlkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA5IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMmRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDEwIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNmRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDExIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0MGRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDEyIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0M2RlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDEzIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0N2RlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDE0IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg1MGRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDE1IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg1NGRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDE2IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg1OGRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDE3IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg2MWRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDE4IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg2NWRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDE5IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg2OGRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDIwIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg3MmRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDIxIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg3NmRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDIyIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg3OWRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDIzIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg4M2RlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDI0IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg4NmRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDI1IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDI2IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5NGRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDI3IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5N2RlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDI4IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMDFkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnAyOSAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTA0ZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wMzAgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDEwOGRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDMxIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMTJkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnAzMiAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTE1ZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wMzMgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDExOWRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDM0IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMjJkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnAzNSAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTI2ZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wMzYgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDEzMGRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDM3IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzNkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnAzOCAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTM3ZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wMzkgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE0MGRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDQwIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNDRkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA0MSAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTQ4ZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wNDIgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE1MWRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDQzIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNTVkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA0NCAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTU4ZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wNDUgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE2MmRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDQ2IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNjZkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA0NyAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTY5ZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wNDggLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE3M2RlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDQ5IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNzZkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA1MCAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wNTEgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4NGRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDUyIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODdkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA1MyAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTkxZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wNTQgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE5NGRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDU1IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxOThkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA1NiAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjAyZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wNTcgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDIwNWRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDU4IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMDlkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA1OSAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjEyZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wNjAgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDIxNmRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDYxIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMjBkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA2MiAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjIzZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wNjMgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDIyN2RlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDY0IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMzBkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA2NSAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjM0ZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wNjYgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDIzOGRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDY3IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNDFkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA2OCAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjQ1ZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wNjkgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI0OGRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDcwIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNTJkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA3MSAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjU2ZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wNzIgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI1OWRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDczIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNjNkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA3NCAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjY2ZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wNzUgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDc2IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzRkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA3NyAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjc3ZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wNzggLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI4MWRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDc5IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyODRkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA4MCAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjg4ZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wODEgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI5MmRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDgyIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyOTVkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA4MyAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjk5ZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wODQgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDMwMmRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDg1IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMDZkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA4NiAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzEwZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wODcgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDMxM2RlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDg4IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMTdkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA4OSAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzIwZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wOTAgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDMyNGRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDkxIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMjhkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA5MiAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzMxZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wOTMgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDMzNWRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDk0IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMzhkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA5NSAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzQyZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wOTYgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDM0NmRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDk3IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNDlkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA5OCAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzUzZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wOTkgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDM1NmRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDEwMCAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbn1cbiIsIi5wcm9ncmVzcy1jaXJjbGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbjogMjBweDtcbiAgcGFkZGluZzogMDtcbiAgbGluZS1oZWlnaHQ6IDEwZW07XG4gIHdpZHRoOiAxMGVtO1xuICBoZWlnaHQ6IDEwZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJFOUUxO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlOmFmdGVyIHtcbiAgYm9yZGVyOiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMWVtO1xuICBsZWZ0OiAxZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDhlbTtcbiAgaGVpZ2h0OiA4ZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb250ZW50OiBcIiBcIjtcbn1cblxuLnByb2dyZXNzLWNpcmNsZSBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsaW5lLWhlaWdodDogMTBlbTtcbiAgd2lkdGg6IDEwZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHotaW5kZXg6IDI7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBjb2xvcjogbGlnaHRncmF5O1xufVxuXG4udmFsdWUtYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjbGlwOiByZWN0KDAsIDVlbSwgMTBlbSwgMCk7XG4gIHdpZHRoOiAxMGVtO1xuICBoZWlnaHQ6IDEwZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxZW0gc29saWQgI2ZmNjM0NztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmxlZnQtaGFsZi1jbGlwcGVyIHtcbiAgLyogYSByb3VuZCBjaXJjbGUgKi9cbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTBlbTtcbiAgaGVpZ2h0OiAxMGVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8qIG5lZWRlZCBmb3IgY2xpcHBpbmcgKi9cbiAgY2xpcDogcmVjdCgwLCAxMGVtLCAxMGVtLCA1ZW0pO1xuICAvKiBjbGlwcyB0aGUgd2hvbGUgbGVmdCBoYWxmKi9cbn1cblxuLnByb2dyZXNzLWNpcmNsZS5vdmVyNTAgLmxlZnQtaGFsZi1jbGlwcGVyIHtcbiAgY2xpcDogcmVjdChhdXRvLCBhdXRvLCBhdXRvLCBhdXRvKTtcbn1cblxuLyogUHJvZ3Jlc3MgYmFyIGZpbGxpbmcgdGhlIHdob2xlIHJpZ2h0IGhhbGYgZm9yIHZhbHVlcyBhYm92ZSA1MCUgKi9cbi5wcm9ncmVzcy1jaXJjbGUub3ZlcjUwIC5maXJzdDUwLWJhciB7XG4gIC8qUHJvZ3Jlc3MgYmFyIGZvciB0aGUgZmlyc3QgNTAlLCBmaWxsaW5nIHRoZSB3aG9sZSByaWdodCBoYWxmKi9cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvKm5lZWRlZCBmb3IgY2xpcHBpbmcqL1xuICBjbGlwOiByZWN0KDAsIDEwZW0sIDEwZW0sIDVlbSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHRvbWF0bztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTBlbTtcbiAgaGVpZ2h0OiAxMGVtO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlOm5vdCgub3ZlcjUwKSAuZmlyc3Q1MC1iYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBQcm9ncmVzcyBiYXIgcm90YXRpb24gcG9zaXRpb24gKi9cbi5wcm9ncmVzcy1jaXJjbGUucDAgLnZhbHVlLWJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDEgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDRkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnAyIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg3ZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wMyAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTFkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA0IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNGRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDUgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4ZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wNiAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjJkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA3IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNWRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDggLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI5ZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wOSAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzJkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnAxMCAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzZkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnAxMSAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDBkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnAxMiAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDNkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnAxMyAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDdkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnAxNCAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNTBkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnAxNSAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNTRkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnAxNiAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNThkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnAxNyAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNjFkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnAxOCAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNjVkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnAxOSAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNjhkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnAyMCAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNzJkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnAyMSAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNzZkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnAyMiAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNzlkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnAyMyAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoODNkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnAyNCAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoODZkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnAyNSAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnAyNiAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTRkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnAyNyAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTdkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnAyOCAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTAxZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wMjkgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDEwNGRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDMwIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMDhkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnAzMSAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTEyZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wMzIgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDExNWRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDMzIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMTlkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnAzNCAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTIyZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wMzUgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDEyNmRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDM2IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzBkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnAzNyAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTMzZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wMzggLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDEzN2RlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDM5IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNDBkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA0MCAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTQ0ZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wNDEgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE0OGRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDQyIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNTFkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA0MyAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTU1ZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wNDQgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE1OGRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDQ1IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNjJkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA0NiAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTY2ZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wNDcgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE2OWRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDQ4IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNzNkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA0OSAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTc2ZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wNTAgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDUxIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODRkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA1MiAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTg3ZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wNTMgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE5MWRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDU0IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxOTRkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA1NSAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTk4ZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wNTYgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDIwMmRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDU3IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMDVkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA1OCAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjA5ZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wNTkgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDIxMmRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDYwIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMTZkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA2MSAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjIwZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wNjIgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDIyM2RlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDYzIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMjdkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA2NCAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjMwZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wNjUgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDIzNGRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDY2IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMzhkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA2NyAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjQxZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wNjggLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI0NWRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDY5IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNDhkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA3MCAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjUyZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wNzEgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI1NmRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDcyIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNTlkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA3MyAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjYzZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wNzQgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI2NmRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDc1IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA3NiAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjc0ZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wNzcgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI3N2RlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDc4IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyODFkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA3OSAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjg0ZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wODAgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI4OGRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDgxIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyOTJkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA4MiAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjk1ZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wODMgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI5OWRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDg0IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMDJkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA4NSAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzA2ZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wODYgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDMxMGRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDg3IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMTNkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA4OCAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzE3ZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wODkgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDMyMGRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDkwIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMjRkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA5MSAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzI4ZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wOTIgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDMzMWRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDkzIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMzVkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA5NCAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzM4ZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wOTUgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDM0MmRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDk2IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNDZkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA5NyAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzQ5ZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wOTggLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDM1M2RlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDk5IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTZkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnAxMDAgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/progress/progress.component.ts":
  /*!************************************************!*\
    !*** ./src/app/progress/progress.component.ts ***!
    \************************************************/

  /*! exports provided: ProgressComponent */

  /***/
  function srcAppProgressProgressComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressComponent", function () {
      return ProgressComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ProgressComponent = /*#__PURE__*/function () {
      function ProgressComponent() {
        _classCallCheck(this, ProgressComponent);
      }

      _createClass(ProgressComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.percentage$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.totalSeconds$, this.currentSeconds$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                total = _ref2[0],
                current = _ref2[1];

            return (total - current) / total;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
            return value * 100;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
            return Math.ceil(value);
          }));
          this.percentage$.subscribe(function (value) {
            return console.log("Value: ".concat(value));
          });
        }
      }]);

      return ProgressComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProgressComponent.prototype, "totalSeconds$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProgressComponent.prototype, "currentSeconds$", void 0);
    ProgressComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-progress',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./progress.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/progress/progress.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./progress.component.scss */
      "./src/app/progress/progress.component.scss"))["default"]]
    })], ProgressComponent);
    /***/
  },

  /***/
  "./src/app/timeformat.pipe.ts":
  /*!************************************!*\
    !*** ./src/app/timeformat.pipe.ts ***!
    \************************************/

  /*! exports provided: TimeformatPipe */

  /***/
  function srcAppTimeformatPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimeformatPipe", function () {
      return TimeformatPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TimeformatPipe = /*#__PURE__*/function () {
      function TimeformatPipe() {
        _classCallCheck(this, TimeformatPipe);
      }

      _createClass(TimeformatPipe, [{
        key: "transform",
        value: function transform(value) {
          if (value < 60) {
            return "".concat(value, " seconds");
          }

          var minutes = Math.ceil(value / 60);
          return "".concat(minutes, " minutes");
        }
      }]);

      return TimeformatPipe;
    }();

    TimeformatPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'timeformat'
    })], TimeformatPipe);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/runner/work/flomodori/flomodori/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map