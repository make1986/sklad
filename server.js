/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  PORT: process.env.PORT || 3000,
  API_PREFIX: "http://localhost:3000",
  MONGO_URL: "mongodb://localhost/skladuma",
  SECRET_SESSION: "212is44Is32SSecret000S4edon1Code009919-14-32-1Jnj9k1378"
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Home = __webpack_require__(17);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getParams(path, noparams) {
  var params = path.split(noparams)[1];
  if (!params || params.lenght === 0) {
    return [];
  } else {
    return params.split("/");
  }
}

var routes = [{
  path: "/",
  exact: true,
  component: _Home2.default
}];

exports.default = routes;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Home = __webpack_require__(22);

var _Home2 = _interopRequireDefault(_Home);

var _CDEK = __webpack_require__(23);

var _CDEK2 = _interopRequireDefault(_CDEK);

var _Categories = __webpack_require__(43);

var _Categories2 = _interopRequireDefault(_Categories);

var _load = __webpack_require__(45);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getParams(path, noparams) {
  var params = path.split(noparams)[1];
  if (!params || params.lenght === 0) {
    return "";
  } else {
    return params;
  }
}

var routes = [{
  path: "/admin",
  exact: true,
  component: _Home2.default
}, {
  path: "/admin/cdek",
  exact: false,
  component: _CDEK2.default
}, {
  path: "/admin/categories/:page/:limit/:sort",
  exact: false,
  component: _Categories2.default,
  handlerClass: _load.MultiBootloader,
  params: {
    url: "categories/get_by_params",
    params: function params(path) {
      return getParams(path, "/admin/categories/");
    }
  },
  title: "Категории"
}];

exports.default = routes;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(3);

var _express2 = _interopRequireDefault(_express);

var _cors = __webpack_require__(10);

var _cors2 = _interopRequireDefault(_cors);

var _server = __webpack_require__(11);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _serializeJavascript = __webpack_require__(12);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactRouterDom = __webpack_require__(4);

var _compression = __webpack_require__(13);

var _compression2 = _interopRequireDefault(_compression);

var _bodyParser = __webpack_require__(14);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _helmet = __webpack_require__(15);

var _helmet2 = _interopRequireDefault(_helmet);

var _fs = __webpack_require__(5);

var _fs2 = _interopRequireDefault(_fs);

var _expressSession = __webpack_require__(6);

var _expressSession2 = _interopRequireDefault(_expressSession);

var _App = __webpack_require__(16);

var _App2 = _interopRequireDefault(_App);

var _App3 = __webpack_require__(21);

var _App4 = _interopRequireDefault(_App3);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

var _routes = __webpack_require__(7);

var _routes2 = _interopRequireDefault(_routes);

var _routes3 = __webpack_require__(8);

var _routes4 = _interopRequireDefault(_routes3);

var _connect = __webpack_require__(33);

var _connect2 = _interopRequireDefault(_connect);

var _sessionStore = __webpack_require__(34);

var _sessionStore2 = _interopRequireDefault(_sessionStore);

var _api = __webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();


_connect2.default.setUpConnect();
app.use((0, _helmet2.default)());
app.use((0, _cors2.default)({ origin: _config2.default.API_PREFIX, methods: "GET,HEAD,PUT,PATCH,POST,DELETE" }));
app.use((0, _compression2.default)());
app.use(_bodyParser2.default.urlencoded({ limit: "50mb", extended: true }));
app.use(_bodyParser2.default.json({ limit: "50mb", extended: true }));

app.use((0, _expressSession2.default)({
  secret: _config2.default.SECRET_SESSION,
  resave: false,
  key: "sid",
  saveUninitialized: false,
  store: _sessionStore2.default
}));

app.use("/api/upload", _api.file);
app.use("/api/categories", _api.categories);

app.use(_express2.default.static("public"));

app.get("/admin/*", function (req, res, next) {
  var activeRoute = _routes4.default.find(function (route) {
    return (0, _reactRouterDom.matchPath)(req.url, route);
  }) || {};

  var handlerObject = activeRoute.handlerClass ? new activeRoute.handlerClass(activeRoute.params.url, activeRoute.params.params(req.path)) : null;

  var promise = handlerObject !== null ? handlerObject.response() : Promise.resolve();

  // const promise = activeRoute.fetchInitialData
  //   ? activeRoute.fetchInitialData(req.path)
  //   : Promise.resolve();

  var title = activeRoute.title ? activeRoute.title : "Панель администратора";

  promise.then(function (data) {
    var context = { data: data };
    var markup = (0, _server.renderToString)(_react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.url, context: context },
      _react2.default.createElement(_App4.default, null)
    ));

    res.send("\n        <!DOCTYPE html>\n        <html lang=\"en\">\n        <head>\n          <meta charset=\"UTF-8\">\n          <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n          <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n          <title>" + title + "</title>\n          <link rel=\"shortcut icon\" href=\"/Static/favicon.ico\" type=\"image/x-icon\">\n          <script src=\"/adminbundle.js\" defer></script>\n          <script>window.__INITIAL_DATA__ = " + (0, _serializeJavascript2.default)(data) + "</script>\n        </head>\n        <body>\n          <div id=\"admin\">" + markup + "</div>\n        </body>\n        </html>\n        ");
  }).catch(next);
});

app.get("*", function (req, res, next) {
  var activeRoute = _routes2.default.find(function (route) {
    return (0, _reactRouterDom.matchPath)(req.url, route);
  }) || {};
  var promise = activeRoute.fetchInitialData ? activeRoute.fetchInitialData(req.path) : Promise.resolve();

  var title = activeRoute.title ? activeRoute.title : "Склад ума - магазин развивающих и настольных игр, книг и пособий.";

  promise.then(function (data) {
    var context = { data: data };
    var markup = (0, _server.renderToString)(_react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.url, context: context },
      _react2.default.createElement(_App2.default, null)
    ));

    res.send("\n      <!DOCTYPE html>\n      <html lang=\"en\">\n      <head>\n        <meta charset=\"UTF-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n        <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n        <title>" + title + "</title>\n        <link rel=\"shortcut icon\" href=\"/Static/favicon.ico\" type=\"image/x-icon\">\n        <script src=\"/bundle.js\" defer></script>\n        <script>window.__INITIAL_DATA__ = " + (0, _serializeJavascript2.default)(data) + "</script>\n      </head>\n      <body>\n        <div id=\"app\">" + markup + "</div>\n      </body>\n      </html>\n      ");
  }).catch(next);
});

app.listen(_config2.default.PORT, function () {
  console.log("Server is listening on port: " + _config2.default.PORT);
});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

var _routes = __webpack_require__(7);

var _routes2 = _interopRequireDefault(_routes);

var _ = __webpack_require__(18);

var _2 = _interopRequireDefault(_);

var _Header = __webpack_require__(19);

var _Header2 = _interopRequireDefault(_Header);

var _Error = __webpack_require__(20);

var _Error2 = _interopRequireDefault(_Error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = { error: "" };
    _this.addError = _this.addError.bind(_this);
    _this.HeaderWithProps = _this.HeaderWithProps.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: "addError",
    value: function addError(err) {
      this.setState({ error: err });
    }
  }, {
    key: "HeaderWithProps",
    value: function HeaderWithProps(props) {
      return _react2.default.createElement(_Header2.default, _extends({}, props, { addError: this.addError }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var error = this.state.error;

      return _react2.default.createElement(
        "div",
        { className: "page" },
        _react2.default.createElement(_reactRouterDom.Route, { component: this.HeaderWithProps }),
        _react2.default.createElement(
          _reactRouterDom.Switch,
          null,
          _routes2.default.map(function (_ref) {
            var path = _ref.path,
                exact = _ref.exact,
                C = _ref.component,
                rest = _objectWithoutProperties(_ref, ["path", "exact", "component"]);

            return _react2.default.createElement(_reactRouterDom.Route, {
              key: path,
              path: path,
              exact: exact,
              render: function render(props) {
                return _react2.default.createElement(C, _extends({}, props, rest, { addError: _this2.addError }));
              }
            });
          }),
          _react2.default.createElement(_reactRouterDom.Route, { render: function render(props) {
              return _react2.default.createElement(_2.default, props);
            } })
        ),
        error ? _react2.default.createElement(_Error2.default, { ok: this.addError, error: error }) : ""
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePage = function (_React$Component) {
  _inherits(HomePage, _React$Component);

  function HomePage(props) {
    _classCallCheck(this, HomePage);

    return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call(this, props));
  }

  _createClass(HomePage, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "page__container home-page" },
        _react2.default.createElement(
          "span",
          null,
          "Home page"
        )
      );
    }
  }]);

  return HomePage;
}(_react2.default.Component);

exports.default = HomePage;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Header() {
  return _react2.default.createElement(
    "div",
    { className: "header" },
    _react2.default.createElement(
      "span",
      null,
      "Header"
    )
  );
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

var _routes = __webpack_require__(8);

var _routes2 = _interopRequireDefault(_routes);

var _ = __webpack_require__(30);

var _2 = _interopRequireDefault(_);

var _Header = __webpack_require__(31);

var _Header2 = _interopRequireDefault(_Header);

var _Error = __webpack_require__(32);

var _Error2 = _interopRequireDefault(_Error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = { error: "" };
    _this.addError = _this.addError.bind(_this);
    _this.HeaderWithProps = _this.HeaderWithProps.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: "addError",
    value: function addError(err) {
      this.setState({ error: err });
    }
  }, {
    key: "HeaderWithProps",
    value: function HeaderWithProps(props) {
      return _react2.default.createElement(_Header2.default, _extends({}, props, { addError: this.addError }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var error = this.state.error;

      return _react2.default.createElement(
        "div",
        { className: "page" },
        _react2.default.createElement(_reactRouterDom.Route, { component: this.HeaderWithProps }),
        _react2.default.createElement(
          _reactRouterDom.Switch,
          null,
          _routes2.default.map(function (_ref) {
            var path = _ref.path,
                exact = _ref.exact,
                C = _ref.component,
                rest = _objectWithoutProperties(_ref, ["path", "exact", "component"]);

            return _react2.default.createElement(_reactRouterDom.Route, {
              key: path,
              path: path,
              exact: exact,
              render: function render(props) {
                return _react2.default.createElement(C, _extends({}, props, rest, { addError: _this2.addError }));
              }
            });
          }),
          _react2.default.createElement(_reactRouterDom.Route, { render: function render(props) {
              return _react2.default.createElement(_2.default, props);
            } })
        ),
        error ? _react2.default.createElement(_Error2.default, { ok: this.addError, error: error }) : ""
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePage = function (_React$Component) {
  _inherits(HomePage, _React$Component);

  function HomePage(props) {
    _classCallCheck(this, HomePage);

    return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call(this, props));
  }

  _createClass(HomePage, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "page__container home-page" },
        _react2.default.createElement(
          "span",
          null,
          "Home page"
        )
      );
    }
  }]);

  return HomePage;
}(_react2.default.Component);

exports.default = HomePage;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Upload = __webpack_require__(24);

var _Upload2 = _interopRequireDefault(_Upload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CdekPage = function (_React$Component) {
  _inherits(CdekPage, _React$Component);

  function CdekPage(props) {
    _classCallCheck(this, CdekPage);

    return _possibleConstructorReturn(this, (CdekPage.__proto__ || Object.getPrototypeOf(CdekPage)).call(this, props));
  }

  _createClass(CdekPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "page__container cdek-page" },
        _react2.default.createElement(
          "span",
          null,
          "CDEK"
        ),
        _react2.default.createElement(_Upload2.default, { name: "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C .xls", classes: "upload-form", type: "XLS" })
      );
    }
  }]);

  return CdekPage;
}(_react2.default.Component);

exports.default = CdekPage;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Upload = __webpack_require__(25);

var _Upload2 = _interopRequireDefault(_Upload);

var _Preloader = __webpack_require__(29);

var _Preloader2 = _interopRequireDefault(_Preloader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Upload = function Upload(_ref) {
  var name = _ref.name,
      type = _ref.type,
      state = _ref.state,
      constant = _ref.constant,
      change = _ref.change;
  return _react2.default.createElement(
    "div",
    { className: "upload-block" },
    state == constant.INPUT ? _react2.default.createElement(
      _react2.default.Fragment,
      null,
      _react2.default.createElement("input", { onChange: change, type: "file", name: "file", id: "_upload" }),
      _react2.default.createElement(
        "label",
        { htmlFor: "_upload" },
        name
      )
    ) : state == constant.LOADING ? _react2.default.createElement(_Preloader2.default, null) : ""
  );
};

exports.default = (0, _Upload2.default)(Upload);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _config = __webpack_require__(1);

var _upload = __webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var uploadWithProps = function uploadWithProps(Component) {
  var LOAD_CONST = {
    INPUT: 0,
    LOADING: 1,
    SUCCESSFULLY: 2,
    UNSUCCESSFULLY: 3
  };

  var WithUpload = function (_React$Component) {
    _inherits(WithUpload, _React$Component);

    function WithUpload(props) {
      _classCallCheck(this, WithUpload);

      var _this = _possibleConstructorReturn(this, (WithUpload.__proto__ || Object.getPrototypeOf(WithUpload)).call(this, props));

      _this.state = {
        onload: LOAD_CONST.INPUT
      };
      _this.change = _this.change.bind(_this);
      return _this;
    }

    _createClass(WithUpload, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        console.log(this.props.type);
      }
    }, {
      key: "change",
      value: function change(event) {
        var _this2 = this;

        var file = event.target.files[0];
        var formData = new FormData();
        formData.append("file", file, file.name);
        this.setState({ onload: LOAD_CONST.LOADING });
        (0, _upload.upload_city_xls)(formData).then(function (res) {
          if (res && res.status >= 200 && res.status <= 300 && res.data && res.data.ok) {
            _this2.setState({ onload: LOAD_CONST.SUCCESSFULLY });
          }
        });
      }
    }, {
      key: "render",
      value: function render() {
        return _react2.default.createElement(Component, _extends({
          change: this.change,
          constant: LOAD_CONST,
          state: this.state.onload
        }, this.props));
      }
    }]);

    return WithUpload;
  }(_react2.default.Component);

  WithUpload.displayName = "WithUpload(" + (Component.displayName || Component.name || "Component") + ")";
  return WithUpload;
};

exports.default = uploadWithProps;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.upload_city_xls = undefined;

var _isomorphicFetch = __webpack_require__(27);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _config = __webpack_require__(1);

var _axios = __webpack_require__(28);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var upload_city_xls = exports.upload_city_xls = function upload_city_xls(data) {
  return _axios2.default.post(_config.API_PREFIX + "/api/upload/city-xls", data);
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _config = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Preloader = function Preloader() {
  return _react2.default.createElement(
    "div",
    { className: "preloader" },
    _react2.default.createElement("img", { src: _config.API_PREFIX + "/Static/SVG/Ellipsis-1s-200px.svg" })
  );
};

exports.default = Preloader;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Header() {
  return _react2.default.createElement(
    "div",
    { className: "header" },
    _react2.default.createElement(
      "span",
      null,
      "Header"
    )
  );
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mongoose = __webpack_require__(2);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.set("useFindAndModify", false);

module.exports.setUpConnect = function () {
  _mongoose2.default.connect(_config2.default.MONGO_URL, { useNewUrlParser: true });
  var db = _mongoose2.default.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function () {
    console.log("Mongo connected!");
  });
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var express = __webpack_require__(3);
var mongoose = __webpack_require__(2);
var session = __webpack_require__(6);
var MongoStore = __webpack_require__(35)(session);

var sessionStore = new MongoStore({
  mongooseConnection: mongoose.connection
});

module.exports = sessionStore;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("connect-mongo");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _categories = __webpack_require__(46);

var _categories2 = _interopRequireDefault(_categories);

var _file = __webpack_require__(37);

var _file2 = _interopRequireDefault(_file);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  file: _file2.default,
  categories: _categories2.default
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(3);

var _express2 = _interopRequireDefault(_express);

var _multer = __webpack_require__(38);

var _multer2 = _interopRequireDefault(_multer);

var _path = __webpack_require__(39);

var _path2 = _interopRequireDefault(_path);

var _fs = __webpack_require__(5);

var _fs2 = _interopRequireDefault(_fs);

var _mongoXlsx = __webpack_require__(40);

var _mongoXlsx2 = _interopRequireDefault(_mongoXlsx);

var _City = __webpack_require__(41);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get("/test/:page", function (req, res) {
  return res.json({ page: req.params.page });
});

router.post("/city-xls", function (req, res) {
  var storage = _multer2.default.diskStorage({
    destination: function destination(req, file, callback) {
      callback(null, "public/Uploads/Tmp");
    },
    filename: function filename(req, file, callback) {
      callback(null, Date.now() + _path2.default.extname(file.originalname));
    }
  });
  var upload = (0, _multer2.default)({
    storage: storage,
    limits: {},
    fileFilter: function fileFilter(req, file, callback) {
      var ext = _path2.default.extname(file.originalname);
      if (ext !== ".xlsx" && ext !== ".xls") {
        var err = new Error("Extention");
        err.code = "EXTENTION";
        return callback(err);
      }
      callback(null, true);
    }
  }).single("file");

  upload(req, res, function (err) {
    var error = "";
    var filename = "";
    if (err) {
      if (err.code === "LIMIT_FILE_SIZE") {
        error = "Слишком большой файл!";
      }
      if (err.code === "EXTENTION") {
        error = "Можно загружать файлы с расширениями XLSX, XLS!";
      }
      return res.status(400).json({
        ok: false,
        err: err,
        data: error
      });
    } else {
      if (req.file && req.file.filename) {
        filename = req.file.filename;
      }
      var model = null;
      var xlsx = "public/Uploads/Tmp/" + filename;
      _mongoXlsx2.default.xlsx2MongoData(xlsx, model, function (err, data) {
        _fs2.default.unlinkSync(xlsx);
        if (err) {
          return res.json({
            ok: false,
            err: err,
            data: "Ошибка чтения файла"
          });
        }
        var newData = [];
        data.map(function (city, idx) {
          if (city.ID) {
            newData.push(city);
          }
        });
        var AddCity = newData.map(function (city) {
          return new Promise(function (resolve, reject) {
            (0, _City.PushCity)(city).then(function (result) {
              console.log(result);
              resolve(city);
            });
          });
        });
        return Promise.all(AddCity).then(function (sub) {
          return res.json({ ok: true });
        }, function (err) {
          console.log(err);
        });
      });
    }
  });
});

module.exports = router;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("multer");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("mongo-xlsx");

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mongoose = __webpack_require__(2);

var _mongoose2 = _interopRequireDefault(_mongoose);

__webpack_require__(42);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var City = _mongoose2.default.model("City");

module.exports.PushCity = function (data) {
  var ID = data.ID,
      FullName = data.FullName,
      CityName = data.CityName,
      OblName = data.OblName,
      Center = data.Center,
      NalSumLimit = data.NalSumLimit,
      EngName = data.EngName,
      PostCodeList = data.PostCodeList,
      EngFullName = data.EngFullName,
      EngOblName = data.EngOblName,
      CountryCode = data.CountryCode,
      CountryName = data.CountryName,
      EngCountryName = data.EngCountryName,
      FullNameFIAS = data.FullNameFIAS,
      FIAS = data.FIAS,
      KLADR = data.KLADR,
      cityDD = data.cityDD,
      pvzCode = data.pvzCode;

  return City.findOne({ CityID: ID }, function (err, doc) {
    if (err) {
      return { ok: false };
    }
    if (doc) {
      return City.findByIdAndUpdate({ id: doc._id }, {
        $set: {
          CityID: ID,
          FullName: FullName,
          CityName: CityName,
          OblName: OblName,
          Center: Center,
          NalSumLimit: NalSumLimit,
          EngName: EngName,
          PostCodeList: PostCodeList,
          EngFullName: EngFullName,
          EngOblName: EngOblName,
          CountryCode: CountryCode,
          CountryName: CountryName,
          EngCountryName: EngCountryName,
          FullNameFIAS: FullNameFIAS,
          FIAS: FIAS,
          KLADR: KLADR,
          cityDD: cityDD,
          pvzCode: pvzCode
        }
      }, function (err, docum) {
        if (err) {
          return { ok: false };
        }
        return { ok: true };
      });
    } else {
      var newCity = new City({
        CityID: ID,
        FullName: FullName,
        CityName: CityName,
        OblName: OblName,
        Center: Center,
        NalSumLimit: NalSumLimit,
        EngName: EngName,
        PostCodeList: PostCodeList,
        EngFullName: EngFullName,
        EngOblName: EngOblName,
        CountryCode: CountryCode,
        CountryName: CountryName,
        EngCountryName: EngCountryName,
        FullNameFIAS: FullNameFIAS,
        FIAS: FIAS,
        KLADR: KLADR,
        cityDD: cityDD,
        pvzCode: pvzCode
      });
      return newCity.save({}, function (err, doc) {
        if (err) {
          return { ok: false };
        }
        return { ok: true };
      });
    }
  });
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(2);

var Schema = mongoose.Schema;

var CitySchema = new Schema({
  CityID: {
    type: String
  },
  FullName: {
    type: String
  },
  CityName: {
    type: String
  },
  OblName: {
    type: String
  },
  Center: {
    type: String
  },
  NalSumLimit: {
    type: String
  },
  EngName: {
    type: String
  },
  PostCodeList: {
    type: String
  },
  EngFullName: {
    type: String
  },
  EngOblName: {
    type: String
  },
  CountryCode: {
    type: String
  },
  CountryName: {
    type: String
  },
  EngCountryName: {
    type: String
  },
  FullNameFIAS: {
    type: String
  },
  FIAS: {
    type: String
  },
  KLADR: {
    type: String
  },
  cityDD: {
    type: String
  },
  pvzCode: {
    type: String
  }
}, { timestamps: { createdAt: "created_at" } });

var City = mongoose.model("City", CitySchema);

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _WithMany = __webpack_require__(44);

var _WithMany2 = _interopRequireDefault(_WithMany);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var categoriesPage = function categoriesPage() {
  return _react2.default.createElement(
    "div",
    { className: "page__container categories-page" },
    _react2.default.createElement(
      "span",
      null,
      "Categories"
    )
  );
};

exports.default = (0, _WithMany2.default)(categoriesPage);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var withMany = function withMany(Component) {
  var WithMany = function (_React$Component) {
    _inherits(WithMany, _React$Component);

    function WithMany(props) {
      _classCallCheck(this, WithMany);

      var _this = _possibleConstructorReturn(this, (WithMany.__proto__ || Object.getPrototypeOf(WithMany)).call(this, props));

      _this.state = {
        data: []
      };
      return _this;
    }

    _createClass(WithMany, [{
      key: "componentDidMount",
      value: function componentDidMount() {}
    }, {
      key: "render",
      value: function render() {
        return _react2.default.createElement(Component, this.props);
      }
    }]);

    return WithMany;
  }(_react2.default.Component);

  WithMany.displayName = "WithMany(" + (Component.displayName || Component.name || "Component") + ")";
  return WithMany;
};

exports.default = withMany;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.upload_city_xls = exports.MultiBootloader = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _isomorphicFetch = __webpack_require__(27);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _config = __webpack_require__(1);

var _axios = __webpack_require__(28);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MultiBootloader = exports.MultiBootloader = function () {
  function MultiBootloader(url) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "1/0/created_at=1";

    _classCallCheck(this, MultiBootloader);

    this.url = encodeURI(_config.API_PREFIX + "/api/" + url + "/" + params);
    this.params = params;
    this.response = this.response.bind(this);
  }

  _createClass(MultiBootloader, [{
    key: "response",
    value: function response() {
      return (0, _isomorphicFetch2.default)(this.url).then(function (res) {
        return res.json();
      }).catch(function (err) {
        console.log(err);
        return null;
      });
    }
  }]);

  return MultiBootloader;
}();

var upload_city_xls = exports.upload_city_xls = function upload_city_xls(data) {
  return _axios2.default.post(_config.API_PREFIX + "/api/upload/city-xls", data);
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(3);

var _express2 = _interopRequireDefault(_express);

var _mongoose = __webpack_require__(2);

var _mongoose2 = _interopRequireDefault(_mongoose);

__webpack_require__(48);

var _Queries = __webpack_require__(47);

var _Queries2 = _interopRequireDefault(_Queries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

var Category = _mongoose2.default.model("Category");

router.get("/get_by_params/:page/:limit/:sort/:params/:search", function (req, res) {
  var categories = new _Queries2.default(Category);
  categories.getByParams(req.params).then(function (data) {
    return res.json(data);
  }).catch(function (err) {
    return res.status(400).json(err);
  });
});

module.exports = router;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
  Параметры запроса:
  params. Состоит из строки, в которой указываются 
*/

var DataBase = function () {
  function DataBase(Model) {
    _classCallCheck(this, DataBase);

    this.Model = Model;
    this.getByParams = this.getByParams.bind(this);
    this.getParams = this.getParams.bind(this);
    this.getSort = this.getSort.bind(this);
    this.getSearch = this.getSearch.bind(this);
    this.getValueForParams = this.getValueForParams.bind(this);
    this.getValueForSearch = this.getValueForSearch.bind(this);
    this.getMinOrMax = this.getMinOrMax.bind(this);
  }

  _createClass(DataBase, [{
    key: "getByParams",
    value: function getByParams(params) {
      var _this = this;

      var limit = params.limit,
          page = params.page,
          sort = params.sort,
          search = params.search;

      var skip = (page - 1) * limit;
      console.log("params", this.getParams(params.params));
      console.log("search", this.getSearch(search));
      console.log("limit", limit);
      console.log("sort", this.getSort(sort));
      console.log("skip", skip);
      return new Promise(function (resolve, reject) {
        _this.Model.find({
          $and: [_this.getParams(params.params), _this.getSearch(search)]
        }).limit(Number(limit)).sort(_this.getSort(sort)).skip(Number(skip)).exec(function (err, docs) {
          if (err) {
            reject({ ok: false, err: err });
          }
          resolve({ ok: true, data: docs });
        });
      });
    }
  }, {
    key: "getMinOrMax",
    value: function getMinOrMax(param) {
      var max = param.indexOf("+lte");
      var min = param.indexOf("+gte");
      var value = param;
      if (max >= 0) {
        value = { $lte: param.substring(max + 4, param.length) };
      } else if (min >= 0) {
        value = { $gte: param.substring(min + 4, param.length) };
      }
      return value;
    }
  }, {
    key: "getParams",
    value: function getParams(params) {
      var _this2 = this;

      var result = {};
      params = decodeURIComponent(params);
      if (params && params !== undefined) {
        var and = params.split("&&");
        result.$and = [];
        and.map(function (el, idx) {
          var or = el.split("||");
          result.$and[idx] = { $or: [] };
          or.map(function (elem) {
            var param = elem.split("=");
            if (param.length === 2) {
              result.$and[idx].$or.push(_defineProperty({}, param[0], _this2.getValueForParams(param[1])));
            }
          });
        });
      }
      return result;
    }
  }, {
    key: "getValueForParams",
    value: function getValueForParams(param) {
      var indexArr = param.indexOf("+in");
      var indexObj = param.indexOf("+elem");
      if (indexObj < 0 && indexArr < 0) {
        return this.getMinOrMax(param);
      } else if (indexObj < 0 || indexArr >= 0 && indexObj >= 0 && indexArr < indexObj) {
        var value = param.substring(indexArr + 3, param.length);
        return { $in: this.getValueForParams(value) };
      } else if (indexArr < 0 || indexArr >= 0 && indexObj >= 0 && indexObj < indexArr) {
        var _value = param.substring(indexObj + 5, param.length);
        var sepIdx = _value.indexOf("+:");
        var elemKey = _value.substring(0, sepIdx);
        var elemVal = _value.substring(sepIdx + 2, _value.length);
        return { $elemMatch: _defineProperty({}, elemKey, this.getValueForParams(elemVal)) };
      }
    }
  }, {
    key: "getValueForSearch",
    value: function getValueForSearch(param) {
      var indexArr = param.indexOf("+in");
      var indexObj = param.indexOf("+elem");
      if (indexObj < 0 && indexArr < 0) {
        return new RegExp(param, "i");
      } else if (indexObj < 0 || indexArr >= 0 && indexObj >= 0 && indexArr < indexObj) {
        var value = param.substring(indexArr + 3, param.length);
        return { $in: this.getValueForSearch(value) };
      } else if (indexArr < 0 || indexArr >= 0 && indexObj >= 0 && indexObj < indexArr) {
        var _value2 = param.substring(indexObj + 5, param.length);
        var sepIdx = _value2.indexOf("+:");
        var elemKey = _value2.substring(0, sepIdx);
        var elemVal = _value2.substring(sepIdx + 2, _value2.length);
        return { $elemMatch: _defineProperty({}, elemKey, this.getValueForSearch(elemVal)) };
      }
    }
  }, {
    key: "getSort",
    value: function getSort(sort) {
      var result = {};
      if (sort && sort !== undefined) {
        var arr = sort.split("=");
        if (arr.length === 2) {
          result[arr[0]] = arr[1];
        }
      }
      return result;
    }
  }, {
    key: "getSearch",
    value: function getSearch(search) {
      var _this3 = this;

      var result = { $or: [] };
      search = decodeURIComponent(search);
      if (search && search !== undefined) {
        var arr = search.split("||");
        arr.map(function (el) {
          var sub = el.split("=");
          if (sub.length === 2) {
            result.$or.push(_defineProperty({}, sub[0], _this3.getValueForSearch(sub[1])));
          }
        });
      }
      return result;
    }
  }]);

  return DataBase;
}();

exports.default = DataBase;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(2);

var Schema = mongoose.Schema;

var CategorySchema = new Schema({
  name: {
    type: String
  },
  image: {
    type: String
  },
  description: {
    type: String
  },
  test: {
    type: Array
  },
  obj: {
    type: Map
  }
}, { timestamps: { createdAt: "created_at" } });

var Category = mongoose.model("Category", CategorySchema);

/***/ })
/******/ ]);