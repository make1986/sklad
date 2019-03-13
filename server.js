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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
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
  IMAGE_PREFIX: "http://localhost:3000/Uploads/Images",
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

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("socket.io-stream");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 8 */
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
/* 9 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Home = __webpack_require__(28);

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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Home = __webpack_require__(33);

var _Home2 = _interopRequireDefault(_Home);

var _Categories = __webpack_require__(34);

var _Categories2 = _interopRequireDefault(_Categories);

var _AddCategory = __webpack_require__(37);

var _AddCategory2 = _interopRequireDefault(_AddCategory);

var _Catalog = __webpack_require__(72);

var _Catalog2 = _interopRequireDefault(_Catalog);

var _AddProduct = __webpack_require__(74);

var _AddProduct2 = _interopRequireDefault(_AddProduct);

var _load = __webpack_require__(12);

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
  path: "/admin/categories",
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
}, {
  path: "/admin/add-category",
  exact: false,
  component: _AddCategory2.default,
  title: "Категория товаров"
}, {
  path: "/admin/edit-category/:id",
  exact: false,
  component: _AddCategory2.default,
  handlerClass: _load.MultiBootloader,
  params: {
    url: "categories/get_by_id",
    params: function params(path) {
      return getParams(path, "/admin/edit-category/");
    }
  },
  title: "Категория товаров"
}, {
  path: "/admin/catalog",
  exact: false,
  component: _Catalog2.default,
  handlerClass: _load.MultiBootloader,
  params: {
    url: "products/get_by_params",
    params: function params(path) {
      return getParams(path, "/admin/catalog/");
    }
  },
  title: "Каталог товаров"
}, {
  path: "/admin/add-product",
  exact: false,
  component: _AddProduct2.default,
  title: "Товар"
}];

exports.default = routes;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.upload_city_xls = exports.MultiBootloader = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _isomorphicFetch = __webpack_require__(13);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _config = __webpack_require__(1);

var _axios = __webpack_require__(14);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MultiBootloader = exports.MultiBootloader = function () {
  function MultiBootloader(url) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

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
        console.error(err);
        return { ok: false };
      });
    }
  }]);

  return MultiBootloader;
}();

var upload_city_xls = exports.upload_city_xls = function upload_city_xls(data) {
  return _axios2.default.post(_config.API_PREFIX + "/api/upload/city-xls", data);
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _LoadImage = __webpack_require__(45);

var _LoadImage2 = _interopRequireDefault(_LoadImage);

var _Preloader = __webpack_require__(8);

var _Preloader2 = _interopRequireDefault(_Preloader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImageBlock = function ImageBlock(_ref) {
  var src = _ref.src,
      handlerLoad = _ref.handlerLoad,
      load = _ref.load,
      classes = _ref.classes;
  return _react2.default.createElement(
    "div",
    { className: "image-block " + classes },
    _react2.default.createElement("img", { src: src, onLoad: handlerLoad }),
    !load ? _react2.default.createElement(_Preloader2.default, null) : ""
  );
};

exports.default = (0, _LoadImage2.default)(ImageBlock);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(4);

var _express2 = _interopRequireDefault(_express);

var _socket = __webpack_require__(5);

var _socket2 = _interopRequireDefault(_socket);

var _cors = __webpack_require__(17);

var _cors2 = _interopRequireDefault(_cors);

var _path = __webpack_require__(6);

var _path2 = _interopRequireDefault(_path);

var _fs = __webpack_require__(7);

var _fs2 = _interopRequireDefault(_fs);

var _compression = __webpack_require__(18);

var _compression2 = _interopRequireDefault(_compression);

var _bodyParser = __webpack_require__(19);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _helmet = __webpack_require__(20);

var _helmet2 = _interopRequireDefault(_helmet);

var _expressSession = __webpack_require__(9);

var _expressSession2 = _interopRequireDefault(_expressSession);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

var _connect = __webpack_require__(21);

var _connect2 = _interopRequireDefault(_connect);

var _sessionStore = __webpack_require__(22);

var _sessionStore2 = _interopRequireDefault(_sessionStore);

var _router = __webpack_require__(24);

var _router2 = _interopRequireDefault(_router);

var _api = __webpack_require__(56);

var _files = __webpack_require__(65);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var http = __webpack_require__(66).Server(app);
var io = __webpack_require__(67)(http);


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
app.use("/api/products", _api.products);

app.use(_express2.default.static("public"));
app.use(_router2.default);

io.on("connection", function (socket) {
  (0, _socket2.default)(socket).on("upload_img", function (stream, data) {
    (0, _files.loadImage)(stream, data, socket);
  });
  socket.on("delete_file", function (filename) {
    (0, _files.deleteFile)(filename);
  });
});

http.listen(_config2.default.PORT, function () {
  console.log("Server is listening on port: " + _config2.default.PORT);
});

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),
/* 21 */
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var express = __webpack_require__(4);
var mongoose = __webpack_require__(2);
var session = __webpack_require__(9);
var MongoStore = __webpack_require__(23)(session);

var sessionStore = new MongoStore({
  mongooseConnection: mongoose.connection
});

module.exports = sessionStore;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("connect-mongo");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(4);

var _express2 = _interopRequireDefault(_express);

var _server = __webpack_require__(25);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _serializeJavascript = __webpack_require__(26);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactRouterDom = __webpack_require__(3);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

var _App = __webpack_require__(27);

var _App2 = _interopRequireDefault(_App);

var _App3 = __webpack_require__(32);

var _App4 = _interopRequireDefault(_App3);

var _routes = __webpack_require__(10);

var _routes2 = _interopRequireDefault(_routes);

var _routes3 = __webpack_require__(11);

var _routes4 = _interopRequireDefault(_routes3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get("/admin/*", function (req, res, next) {
  var activeRoute = _routes4.default.find(function (route) {
    return (0, _reactRouterDom.matchPath)(req.url, route);
  }) || {};

  var handlerObject = activeRoute.handlerClass ? new activeRoute.handlerClass(activeRoute.params.url, activeRoute.params.params(req.path)) : null;

  var promise = handlerObject !== null ? handlerObject.response() : Promise.resolve();

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

router.get("*", function (req, res, next) {
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

module.exports = router;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _routes = __webpack_require__(10);

var _routes2 = _interopRequireDefault(_routes);

var _ = __webpack_require__(29);

var _2 = _interopRequireDefault(_);

var _Header = __webpack_require__(30);

var _Header2 = _interopRequireDefault(_Header);

var _Error = __webpack_require__(31);

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
/* 28 */
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 30 */
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _routes = __webpack_require__(11);

var _routes2 = _interopRequireDefault(_routes);

var _ = __webpack_require__(47);

var _2 = _interopRequireDefault(_);

var _Header = __webpack_require__(48);

var _Header2 = _interopRequireDefault(_Header);

var _Confirm = __webpack_require__(70);

var _Confirm2 = _interopRequireDefault(_Confirm);

var _Error = __webpack_require__(55);

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

    _this.state = { error: "", confirm: { open: false } };
    _this.addError = _this.addError.bind(_this);
    _this.HeaderWithProps = _this.HeaderWithProps.bind(_this);
    _this.confirmToggle = _this.confirmToggle.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: "addError",
    value: function addError(err) {
      this.setState({ error: err });
    }
  }, {
    key: "confirmToggle",
    value: function confirmToggle(obj) {
      if (!obj.open) {
        this.setState({ confirm: { open: false } });
        document.body.style.overflowY = "auto";
      } else {
        this.setState({
          confirm: {
            open: true,
            text: obj.text,
            handler: obj.handler,
            data: obj.data
          }
        });
        document.body.style.overflowY = "hidden";
      }
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

      var _state = this.state,
          error = _state.error,
          confirm = _state.confirm;

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
                return _react2.default.createElement(C, _extends({}, props, rest, {
                  addError: _this2.addError,
                  confirmToggle: _this2.confirmToggle
                }));
              }
            });
          }),
          _react2.default.createElement(_reactRouterDom.Route, { render: function render(props) {
              return _react2.default.createElement(_2.default, props);
            } })
        ),
        confirm.open ? _react2.default.createElement(_Confirm2.default, {
          text: confirm.text,
          handler: confirm.handler,
          data: confirm.data,
          close: this.confirmToggle
        }) : "",
        error ? _react2.default.createElement(_Error2.default, { ok: this.addError, error: error }) : ""
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),
/* 33 */
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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _WithMany = __webpack_require__(35);

var _WithMany2 = _interopRequireDefault(_WithMany);

var _Draggable = __webpack_require__(69);

var _Draggable2 = _interopRequireDefault(_Draggable);

var _AddButton = __webpack_require__(36);

var _AddButton2 = _interopRequireDefault(_AddButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var categoriesPage = function categoriesPage(_ref) {
  var data = _ref.data,
      dragEnd = _ref.dragEnd,
      dragStart = _ref.dragStart,
      drop = _ref.drop,
      dropEnter = _ref.dropEnter,
      dropLeave = _ref.dropLeave,
      confirmToggle = _ref.confirmToggle,
      deleteField = _ref.deleteField;
  return _react2.default.createElement(
    "div",
    { className: "page__container categories-page" },
    _react2.default.createElement(
      "h2",
      { className: "title-page" },
      "\u0412\u0441\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 \u0442\u043E\u0432\u0430\u0440\u043E\u0432"
    ),
    _react2.default.createElement(
      "div",
      { className: "categories-page__container" },
      data.map(function (item, idx) {
        return _react2.default.createElement(
          _react2.default.Fragment,
          { key: item._id },
          idx === 0 ? _react2.default.createElement("div", {
            className: "drop",
            idx: item.position,
            onDragOver: function onDragOver(event) {
              return event.preventDefault();
            },
            onDrop: drop,
            onDragEnter: dropEnter,
            onDragLeave: dropLeave
          }) : "",
          _react2.default.createElement(
            "div",
            {
              draggable: "true",
              onDragStart: function onDragStart(e) {
                return dragStart(e, data);
              },
              onDragEnd: dragEnd,
              className: "drag",
              idx: item.position,
              id: "id" + item._id
            },
            _react2.default.createElement(
              "h3",
              { draggable: "false", className: "drag__name" },
              item.name
            ),
            _react2.default.createElement(
              "div",
              { draggable: "false", className: "drag__menu" },
              _react2.default.createElement(
                _reactRouterDom.Link,
                {
                  to: "/admin/edit-category/" + item._id,
                  className: "clickable edit-button"
                },
                "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C"
              ),
              _react2.default.createElement(
                "span",
                {
                  onClick: function onClick() {
                    return confirmToggle({
                      open: true,
                      text: "Вы действительно хотите удалить категорию?",
                      handler: deleteField,
                      data: item._id
                    });
                  },
                  className: "clickable delete-button"
                },
                "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"
              )
            )
          ),
          _react2.default.createElement("div", {
            className: "drop",
            idx: idx < data.length - 1 ? data[idx + 1].position : item.position + 1,
            onDragOver: function onDragOver(event) {
              return event.preventDefault();
            },
            onDrop: drop,
            onDragEnter: dropEnter,
            onDragLeave: dropLeave
          })
        );
      })
    ),
    _react2.default.createElement(_AddButton2.default, { src: "/admin/add-category" })
  );
};

exports.default = (0, _WithMany2.default)((0, _Draggable2.default)(categoriesPage), "categories/get_by_params", "Категории товаров");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _load = __webpack_require__(12);

var _Preloader = __webpack_require__(8);

var _Preloader2 = _interopRequireDefault(_Preloader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var withMany = function withMany(Component, API_URL, title) {
  var WithMany = function (_React$Component) {
    _inherits(WithMany, _React$Component);

    function WithMany(props) {
      _classCallCheck(this, WithMany);

      var _this = _possibleConstructorReturn(this, (WithMany.__proto__ || Object.getPrototypeOf(WithMany)).call(this, props));

      var data = void 0;
      if (false) {
        data = window.__INITIAL_DATA__;
        delete window.__INITIAL_DATA__;
      } else if (props.staticContext && props.staticContext.data) {
        data = props.staticContext.data;
      }
      _this.state = {
        data: data && data.data ? data.data : [],
        withData: data && data.data ? true : false
      };
      _this.getData = _this.getData.bind(_this);
      _this.deleteField = _this.deleteField.bind(_this);
      return _this;
    }

    _createClass(WithMany, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        window.scrollTo(0, 0);
        document.title = title;
        if (!this.state.withData) {
          this.getData();
        }
      }
    }, {
      key: "deleteField",
      value: function deleteField(id) {
        var _this2 = this;

        var handlerDelete = new _load.MultiBootloader("categories/delete", id);
        handlerDelete.response().then(function (data) {
          if (data && data.ok) {
            _this2.getData();
            _this2.props.confirmToggle({ open: false });
          } else {
            _this2.props.addError(data.message);
          }
        });
      }
    }, {
      key: "getData",
      value: function getData() {
        var _this3 = this;

        var loader = new _load.MultiBootloader(API_URL);
        loader.response().then(function (data) {
          _this3.setState({
            data: data && data.data ? data.data : [],
            withData: data && data.data ? true : false
          });
        }).catch(function (err) {
          _this3.props.addError("Произошла ошибка на сервере. Попробуйте позже.");
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _state = this.state,
            data = _state.data,
            withData = _state.withData;

        return _react2.default.createElement(
          _react2.default.Fragment,
          null,
          withData ? _react2.default.createElement(Component, _extends({}, this.props, {
            data: data,
            getData: this.getData,
            deleteField: this.deleteField
          })) : _react2.default.createElement(_Preloader2.default, null)
        );
      }
    }]);

    return WithMany;
  }(_react2.default.Component);

  WithMany.displayName = "WithMany(" + (Component.displayName || Component.name || "Component") + ")";
  return WithMany;
};

exports.default = withMany;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddButton = function AddButton(_ref) {
  var src = _ref.src;
  return _react2.default.createElement(
    _reactRouterDom.Link,
    { to: src, className: "add-button" },
    "+"
  );
};

exports.default = AddButton;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _WithForm = __webpack_require__(38);

var _WithForm2 = _interopRequireDefault(_WithForm);

var _TextField = __webpack_require__(40);

var _TextField2 = _interopRequireDefault(_TextField);

var _UploadBlock = __webpack_require__(42);

var _UploadBlock2 = _interopRequireDefault(_UploadBlock);

var _SaveButton = __webpack_require__(46);

var _SaveButton2 = _interopRequireDefault(_SaveButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var categoriesPage = function categoriesPage(_ref) {
  var handlerChange = _ref.handlerChange,
      data = _ref.data,
      onSave = _ref.onSave,
      isEmpty = _ref.isEmpty;
  return _react2.default.createElement(
    "div",
    { className: "page__container add-categories-page" },
    _react2.default.createElement(
      "h2",
      { className: "title-page" },
      "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u0442\u043E\u0432\u0430\u0440\u043E\u0432"
    ),
    _react2.default.createElement(
      "div",
      { className: "form" },
      _react2.default.createElement(_TextField2.default, {
        type: "input",
        placeholder: "\u0418\u043C\u044F",
        name: "name",
        handlerChange: handlerChange,
        value: data.name,
        isEmpty: isEmpty.name ? true : false
      }),
      _react2.default.createElement(_TextField2.default, {
        type: "textarea",
        placeholder: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
        name: "description",
        handlerChange: handlerChange,
        value: data.description,
        isEmpty: isEmpty.description ? true : false
      }),
      _react2.default.createElement(_UploadBlock2.default, {
        handlerChange: handlerChange,
        name: "image",
        placeholder: "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",
        isEmpty: isEmpty.image ? true : false,
        value: data.image || ""
      }),
      _react2.default.createElement(_SaveButton2.default, { name: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C", submit: onSave })
    )
  );
};

exports.default = (0, _WithForm2.default)(categoriesPage, {
  set: "categories/add",
  edit: "categories/edit",
  redirect: "/admin/categories",
  get: "categories/get_by_id"
}, "Категория", { name: true, description: true, image: false });

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _add = __webpack_require__(39);

var _load = __webpack_require__(12);

var _Preloader = __webpack_require__(8);

var _Preloader2 = _interopRequireDefault(_Preloader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var withForm = function withForm(Component, API_URLS, title, required) {
  var WithForm = function (_React$Component) {
    _inherits(WithForm, _React$Component);

    function WithForm(props) {
      _classCallCheck(this, WithForm);

      var _this = _possibleConstructorReturn(this, (WithForm.__proto__ || Object.getPrototypeOf(WithForm)).call(this, props));

      var data = void 0;
      if (false) {
        data = window.__INITIAL_DATA__;
        delete window.__INITIAL_DATA__;
      } else if (props.staticContext && props.staticContext.data) {
        data = props.staticContext.data;
      }
      _this.state = {
        data: data && data.data ? data.data : {},
        isEmpty: {},
        withData: data && data.data ? true : false
      };
      _this.handlerChange = _this.handlerChange.bind(_this);
      _this.onSave = _this.onSave.bind(_this);
      return _this;
    }

    _createClass(WithForm, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        window.scrollTo(0, 0);
        document.title = title;
        if (this.props.match && this.props.match.params && this.props.match.params.id && !this.state.withData) {
          var loader = new _load.MultiBootloader(API_URLS.get, this.props.match.params.id);
          loader.response().then(function (data) {
            if (data && data.ok && data.data) {
              _this2.setState({ data: data.data, withData: true });
            } else {
              _this2.props.addError("Ошибка сервера, попробуйте позже или обратитесь к разработчику!");
            }
          });
        } else {
          this.setState({ withData: true });
        }
      }
    }, {
      key: "handlerChange",
      value: function handlerChange(name, value) {
        var _state = this.state,
            data = _state.data,
            isEmpty = _state.isEmpty;

        data[name] = value;
        if (isEmpty[name]) {
          isEmpty[name] = false;
        }
        this.setState({ data: data, isEmpty: isEmpty });
      }
    }, {
      key: "onSave",
      value: function onSave() {
        var _this3 = this;

        var _state2 = this.state,
            data = _state2.data,
            isEmpty = _state2.isEmpty;

        var err = [];
        for (var key in required) {
          if (required[key] && !data[key]) {
            err.push(key);
          }
        }
        if (err.length > 0) {
          err.map(function (key) {
            isEmpty[key] = true;
          });
          this.setState({ isEmpty: isEmpty });
        } else {
          var url = void 0;
          if (this.props.match && this.props.match.params && this.props.match.params.id) {
            url = API_URLS.edit;
          } else {
            url = API_URLS.set;
          }
          var creator = new _add.FieldCreator(url, data);
          creator.response().then(function (res) {
            if (res && res.ok) {
              window.location.replace(API_URLS.redirect);
            } else {
              _this3.props.addError("Ошибка сервера, попробуйте позже или обратитесь к разработчику!");
            }
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _state3 = this.state,
            data = _state3.data,
            withData = _state3.withData,
            isEmpty = _state3.isEmpty;

        return _react2.default.createElement(
          _react2.default.Fragment,
          null,
          withData ? _react2.default.createElement(Component, _extends({
            handlerChange: this.handlerChange
          }, this.props, {
            data: data,
            onSave: this.onSave,
            isEmpty: isEmpty
          })) : _react2.default.createElement(_Preloader2.default, null)
        );
      }
    }]);

    return WithForm;
  }(_react2.default.Component);

  WithForm.displayName = "WithForm(" + (Component.displayName || Component.name || "Component") + ")";
  return WithForm;
};

exports.default = withForm;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldCreator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _isomorphicFetch = __webpack_require__(13);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _config = __webpack_require__(1);

var _axios = __webpack_require__(14);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FieldCreator = exports.FieldCreator = function () {
  function FieldCreator(url, data) {
    _classCallCheck(this, FieldCreator);

    this.url = _config.API_PREFIX + "/api/" + url;
    this.data = data;
    this.response = this.response.bind(this);
  }

  _createClass(FieldCreator, [{
    key: "response",
    value: function response() {
      return _axios2.default.post(this.url, this.data).then(function (res) {
        if (res.status >= 200 && res.status < 300 && res.data && res.data.ok) {
          return res.data;
        } else {
          return { ok: false };
        }
      }).catch(function (err) {
        console.error(err);
        return { ok: false };
      });
    }
  }]);

  return FieldCreator;
}();

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _InputText = __webpack_require__(41);

var _InputText2 = _interopRequireDefault(_InputText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextField = function TextField(_ref) {
  var type = _ref.type,
      placeholder = _ref.placeholder,
      name = _ref.name,
      changeMiddleware = _ref.changeMiddleware,
      value = _ref.value,
      length = _ref.length,
      handlerFocus = _ref.handlerFocus,
      handlerBlur = _ref.handlerBlur,
      focus = _ref.focus,
      isEmpty = _ref.isEmpty;
  return _react2.default.createElement(
    "div",
    { className: "text-field" },
    type === "input" ? _react2.default.createElement("input", {
      className: isEmpty ? "input empty" : "input",
      id: name,
      value: value || "",
      onChange: changeMiddleware,
      type: "text",
      name: name,
      onFocus: handlerFocus,
      onBlur: handlerBlur,
      autoComplete: "off"
    }) : _react2.default.createElement(
      _react2.default.Fragment,
      null,
      _react2.default.createElement("textarea", {
        className: isEmpty ? "input empty" : "input",
        id: name,
        value: value,
        onChange: changeMiddleware,
        name: name,
        onFocus: handlerFocus,
        onBlur: handlerBlur,
        autoComplete: "off"
      }),
      _react2.default.createElement(
        "span",
        { className: "text-field__count" },
        length
      )
    ),
    _react2.default.createElement(
      "label",
      {
        className: focus ? "text-field__label active" : "text-field__label",
        htmlFor: name
      },
      placeholder
    )
  );
};

exports.default = (0, _InputText2.default)(TextField);

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var withTextFields = function withTextFields(Component, API_URLS, title) {
  var WithTextFields = function (_React$Component) {
    _inherits(WithTextFields, _React$Component);

    function WithTextFields(props) {
      _classCallCheck(this, WithTextFields);

      var _this = _possibleConstructorReturn(this, (WithTextFields.__proto__ || Object.getPrototypeOf(WithTextFields)).call(this, props));

      _this.state = {
        focus: _this.props.value ? true : false
      };
      _this.handlerFocus = _this.handlerFocus.bind(_this);
      _this.handlerBlur = _this.handlerBlur.bind(_this);
      _this.changeMiddleware = _this.changeMiddleware.bind(_this);
      return _this;
    }

    _createClass(WithTextFields, [{
      key: "handlerFocus",
      value: function handlerFocus() {
        this.setState({ focus: true });
      }
    }, {
      key: "handlerBlur",
      value: function handlerBlur() {
        if (!this.props.value || this.props.value.length === 0) {
          this.setState({ focus: false });
        }
      }
    }, {
      key: "changeMiddleware",
      value: function changeMiddleware(e) {
        var _e$target = e.target,
            name = _e$target.name,
            value = _e$target.value;

        this.props.handlerChange(name, value);
      }
    }, {
      key: "render",
      value: function render() {
        var focus = this.state.focus;

        return _react2.default.createElement(Component, _extends({}, this.props, {
          length: this.props.value ? this.props.value.length : 0,
          handlerFocus: this.handlerFocus,
          handlerBlur: this.handlerBlur,
          focus: focus,
          changeMiddleware: this.changeMiddleware
        }));
      }
    }]);

    return WithTextFields;
  }(_react2.default.Component);

  WithTextFields.displayName = "WithTextFields(" + (Component.displayName || Component.name || "Component") + ")";
  return WithTextFields;
};

exports.default = withTextFields;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Upload = __webpack_require__(43);

var _Upload2 = _interopRequireDefault(_Upload);

var _config = __webpack_require__(1);

var _ImageBlock = __webpack_require__(15);

var _ImageBlock2 = _interopRequireDefault(_ImageBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UploadBlock = function UploadBlock(_ref) {
  var name = _ref.name,
      placeholder = _ref.placeholder,
      uploadFile = _ref.uploadFile,
      load = _ref.load,
      percent = _ref.percent,
      filename = _ref.filename,
      deleteFile = _ref.deleteFile,
      isEmpty = _ref.isEmpty;
  return _react2.default.createElement(
    "div",
    { className: "upload-block" },
    filename ? _react2.default.createElement(
      "div",
      { className: "upload-block__img" },
      _react2.default.createElement(_ImageBlock2.default, { src: _config.IMAGE_PREFIX + "/" + filename, classes: "image" }),
      _react2.default.createElement(
        "div",
        { onClick: deleteFile, className: "close clickable" },
        "\xD7"
      )
    ) : _react2.default.createElement(
      _react2.default.Fragment,
      null,
      load ? _react2.default.createElement(
        "div",
        { className: "progress-block" },
        _react2.default.createElement(
          "div",
          { className: "progress-block__line" },
          _react2.default.createElement("div", { className: "progress", style: { width: percent + "%" } })
        ),
        _react2.default.createElement(
          "span",
          null,
          percent,
          "%"
        )
      ) : _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement("input", { onChange: uploadFile, type: "file", name: name, id: name }),
        _react2.default.createElement(
          "label",
          {
            className: isEmpty ? "empty clickable" : "clickable",
            htmlFor: name
          },
          placeholder
        )
      )
    )
  );
};

exports.default = (0, _Upload2.default)(UploadBlock);

/***/ }),
/* 43 */
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

var _socket = __webpack_require__(44);

var _socket2 = _interopRequireDefault(_socket);

var _socket3 = __webpack_require__(5);

var _socket4 = _interopRequireDefault(_socket3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var socket = (0, _socket2.default)(_config.API_PREFIX);

var withLoader = function withLoader(Component, API_URLS, title) {
  var WithLoader = function (_React$Component) {
    _inherits(WithLoader, _React$Component);

    function WithLoader(props) {
      _classCallCheck(this, WithLoader);

      var _this = _possibleConstructorReturn(this, (WithLoader.__proto__ || Object.getPrototypeOf(WithLoader)).call(this, props));

      _this.state = {
        load: false,
        percent: 0,
        filename: _this.props.value,
        fieldName: ""
      };
      _this.socketConnect = _this.socketConnect.bind(_this);
      _this.uploadFile = _this.uploadFile.bind(_this);
      _this.loadSuccessful = _this.loadSuccessful.bind(_this);
      _this.deleteFile = _this.deleteFile.bind(_this);
      return _this;
    }

    _createClass(WithLoader, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.socketConnect();
        this.loadSuccessful();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        var _this2 = this;

        socket.off("load_successful", function (response) {
          if (response) {
            _this2.setState({ load: false, percent: 0, filename: response }, function () {
              var _state = _this2.state,
                  fieldName = _state.fieldName,
                  filename = _state.filename;

              _this2.props.handlerChange(fieldName, filename);
            });
          }
        });
      }
    }, {
      key: "socketConnect",
      value: function socketConnect() {
        socket.on("connect", function () {
          console.log("client");
        });
      }
    }, {
      key: "loadSuccessful",
      value: function loadSuccessful() {
        var _this3 = this;

        socket.on("load_successful", function (response) {
          if (response) {
            _this3.setState({ load: false, percent: 0, filename: response }, function () {
              var _state2 = _this3.state,
                  fieldName = _state2.fieldName,
                  filename = _state2.filename;

              _this3.props.handlerChange(fieldName, filename);
            });
          }
        });
      }
    }, {
      key: "deleteFile",
      value: function deleteFile(e) {
        var _this4 = this;

        var filename = this.state.filename;

        this.setState({ filename: "" }, function () {
          socket.emit("delete_file", filename);
          _this4.props.handlerChange(_this4.state.fieldName, _this4.state.filename);
        });
      }
    }, {
      key: "uploadFile",
      value: function uploadFile(e) {
        var _this5 = this;

        var name = e.target.name;

        this.setState({ fieldName: name });
        var file = e.target.files[0];
        var filename = file.name;
        var filesize = file.size;
        var enc = e.target.encoding;
        var stream = _socket4.default.createStream();

        (0, _socket4.default)(socket).emit("upload_img", stream, {
          data: file,
          size: filesize,
          name: filename,
          enc: enc
        });
        var blobStream = _socket4.default.createBlobReadStream(file);
        var size = 0;
        blobStream.on("data", function (chunk) {
          size += chunk.length;
          var percent = Math.floor(size / file.size * 100);
          _this5.setState({ load: true, percent: percent });
        });
        blobStream.pipe(stream);
      }
    }, {
      key: "render",
      value: function render() {
        var _state3 = this.state,
            load = _state3.load,
            percent = _state3.percent,
            filename = _state3.filename;

        return _react2.default.createElement(Component, _extends({
          uploadFile: this.uploadFile
        }, this.props, {
          load: load,
          percent: percent,
          filename: filename,
          deleteFile: this.deleteFile
        }));
      }
    }]);

    return WithLoader;
  }(_react2.default.Component);

  WithLoader.displayName = "WithLoader(" + (Component.displayName || Component.name || "Component") + ")";
  return WithLoader;
};

exports.default = withLoader;

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var withImage = function withImage(Component, API_URLS, title) {
  var WithImage = function (_React$Component) {
    _inherits(WithImage, _React$Component);

    function WithImage(props) {
      _classCallCheck(this, WithImage);

      var _this = _possibleConstructorReturn(this, (WithImage.__proto__ || Object.getPrototypeOf(WithImage)).call(this, props));

      _this.state = {
        load: false
      };
      _this.handlerLoad = _this.handlerLoad.bind(_this);
      return _this;
    }

    _createClass(WithImage, [{
      key: "handlerLoad",
      value: function handlerLoad() {
        this.setState({ load: true });
      }
    }, {
      key: "render",
      value: function render() {
        var load = this.state.load;

        return _react2.default.createElement(Component, _extends({}, this.props, { load: load, handlerLoad: this.handlerLoad }));
      }
    }]);

    return WithImage;
  }(_react2.default.Component);

  WithImage.displayName = "WithImage(" + (Component.displayName || Component.name || "Component") + ")";
  return WithImage;
};

exports.default = withImage;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SaveButton = function SaveButton(_ref) {
  var name = _ref.name,
      submit = _ref.submit;
  return _react2.default.createElement(
    "div",
    { onClick: submit, className: "save-button clickable" },
    name
  );
};

exports.default = SaveButton;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var p404 = function p404() {
  return _react2.default.createElement(
    "div",
    { className: "page__container p404" },
    _react2.default.createElement(
      "h3",
      { className: "title-page" },
      "404"
    ),
    _react2.default.createElement(
      "p",
      null,
      "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430"
    )
  );
};

exports.default = p404;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Menu = __webpack_require__(49);

var _Menu2 = _interopRequireDefault(_Menu);

var _Logo = __webpack_require__(52);

var _Logo2 = _interopRequireDefault(_Logo);

var _User = __webpack_require__(53);

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Header() {
  return _react2.default.createElement(
    "div",
    { className: "header" },
    _react2.default.createElement(_Logo2.default, null),
    _react2.default.createElement(_Menu2.default, null),
    _react2.default.createElement(_User2.default, null)
  );
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Item = __webpack_require__(50);

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = function Menu() {
  return _react2.default.createElement(
    "div",
    { className: "header__menu" },
    _react2.default.createElement(_Item2.default, {
      src: [{ name: "Категории", src: "/admin/categories" }, { name: "Товары", src: "/admin/catalog" }, { name: "Бренды", src: "/admin/brands" }, { name: "Склад", src: "/admin/stock" }],
      name: "\u0422\u043E\u0432\u0430\u0440\u044B",
      isDropDown: "yes"
    }),
    _react2.default.createElement(_Item2.default, { src: "/admin/orders", name: "\u0417\u0430\u043A\u0430\u0437\u044B", isDropDown: "no" }),
    _react2.default.createElement(_Item2.default, { src: "/admin/statistics", name: "\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430", isDropDown: "no" }),
    _react2.default.createElement(_Item2.default, { src: "/admin/ads", name: "\u0420\u0435\u043A\u043B\u0430\u043C\u0430", isDropDown: "no" }),
    _react2.default.createElement(_Item2.default, {
      src: [{ name: "Настрока оплаты", src: "/admin/payment" }, { name: "Настройка доставки", src: "/admin/delivery" }],
      name: "\u041E\u043F\u043B\u0430\u0442\u0430 \u0438 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430",
      isDropDown: "yes"
    }),
    _react2.default.createElement(_Item2.default, {
      src: [{ name: "Администраторы", src: "/admin/admins" }, { name: "Клиенты", src: "/admin/clients" }],
      name: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438",
      isDropDown: "yes"
    }),
    _react2.default.createElement(_Item2.default, { src: "/admin/contacts", name: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B", isDropDown: "no" })
  );
};

exports.default = Menu;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _itemHOC = __webpack_require__(51);

var _itemHOC2 = _interopRequireDefault(_itemHOC);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ItemMenu = function ItemMenu(_ref) {
  var src = _ref.src,
      name = _ref.name,
      isDropDown = _ref.isDropDown;
  return _react2.default.createElement(
    "div",
    { className: "item" },
    isDropDown === "yes" ? _react2.default.createElement(
      _react2.default.Fragment,
      null,
      _react2.default.createElement(
        "span",
        { className: "item__drop" },
        name
      ),
      _react2.default.createElement(
        "div",
        { className: "item__down" },
        src.map(function (item, idx) {
          return _react2.default.createElement(
            _reactRouterDom.Link,
            { key: idx, className: "link", to: item.src },
            item.name
          );
        })
      )
    ) : _react2.default.createElement(
      _reactRouterDom.Link,
      { className: "item__link", to: src },
      name
    )
  );
};

exports.default = (0, _itemHOC2.default)(ItemMenu);

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var withMenuButton = function withMenuButton(Component) {
  var WithMenuButton = function (_React$Component) {
    _inherits(WithMenuButton, _React$Component);

    function WithMenuButton(props) {
      _classCallCheck(this, WithMenuButton);

      var _this = _possibleConstructorReturn(this, (WithMenuButton.__proto__ || Object.getPrototypeOf(WithMenuButton)).call(this, props));

      _this.state = {
        active: false,
        menuDown: false
      };
      return _this;
    }

    _createClass(WithMenuButton, [{
      key: "render",
      value: function render() {
        var _state = this.state,
            menuDown = _state.menuDown,
            active = _state.active;

        return _react2.default.createElement(Component, _extends({}, this.props, { menuDown: menuDown, active: active }));
      }
    }]);

    return WithMenuButton;
  }(_react2.default.Component);

  WithMenuButton.displayName = "WithMenuButton(" + (Component.displayName || Component.name || "Component") + ")";
  return WithMenuButton;
};

exports.default = withMenuButton;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _config = __webpack_require__(1);

var _ImageBlock = __webpack_require__(15);

var _ImageBlock2 = _interopRequireDefault(_ImageBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Logo = function Logo() {
  return _react2.default.createElement(
    _reactRouterDom.Link,
    { className: "header__logo", to: "/admin" },
    _react2.default.createElement(_ImageBlock2.default, { src: _config.API_PREFIX + "/Static/Images/logo.png", classes: "img" })
  );
};

exports.default = Logo;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _HOC = __webpack_require__(54);

var _HOC2 = _interopRequireDefault(_HOC);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = function User(_ref) {
  var name = _ref.name,
      logout = _ref.logout;
  return _react2.default.createElement(
    "div",
    { className: "header__user" },
    _react2.default.createElement(
      "p",
      { className: "name" },
      name
    ),
    _react2.default.createElement(
      "p",
      { onClick: logout, className: "logout clickable" },
      "\u0412\u044B\u0445\u043E\u0434"
    )
  );
};

exports.default = (0, _HOC2.default)(User);

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var withUser = function withUser(Component) {
  var WithUser = function (_React$Component) {
    _inherits(WithUser, _React$Component);

    function WithUser(props) {
      _classCallCheck(this, WithUser);

      var _this = _possibleConstructorReturn(this, (WithUser.__proto__ || Object.getPrototypeOf(WithUser)).call(this, props));

      _this.state = {
        name: "Root"
      };
      _this.logout = _this.logout.bind(_this);
      return _this;
    }

    _createClass(WithUser, [{
      key: "logout",
      value: function logout() {
        console.log("logout");
      }
    }, {
      key: "render",
      value: function render() {
        var name = this.state.name;

        return _react2.default.createElement(Component, _extends({}, this.props, { name: name, logout: this.logout }));
      }
    }]);

    return WithUser;
  }(_react2.default.Component);

  WithUser.displayName = "WithUser(" + (Component.displayName || Component.name || "Component") + ")";
  return WithUser;
};

exports.default = withUser;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Error;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Error(_ref) {
  var error = _ref.error,
      ok = _ref.ok;

  return _react2.default.createElement(
    "div",
    { className: "error" },
    _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "p",
        null,
        error
      ),
      _react2.default.createElement(
        "div",
        { onClick: function onClick() {
            return ok("");
          }, className: "button" },
        "Ok"
      )
    )
  );
}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _categories = __webpack_require__(57);

var _categories2 = _interopRequireDefault(_categories);

var _products = __webpack_require__(73);

var _products2 = _interopRequireDefault(_products);

var _file = __webpack_require__(60);

var _file2 = _interopRequireDefault(_file);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  file: _file2.default,
  categories: _categories2.default,
  products: _products2.default
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(4);

var _express2 = _interopRequireDefault(_express);

var _mongoose = __webpack_require__(2);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _files = __webpack_require__(65);

__webpack_require__(58);

__webpack_require__(71);

var _Queries = __webpack_require__(59);

var _Queries2 = _interopRequireDefault(_Queries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

var Category = _mongoose2.default.model("Category");

var Product = _mongoose2.default.model("Product");

router.get("/get_by_params", function (req, res) {
  var categories = new _Queries2.default(Category);
  categories.getByParams({ sort: "position=1" }).then(function (data) {
    return res.json(data);
  }).catch(function (err) {
    return res.status(400).json(err);
  });
});

router.get("/get_by_id/:id", function (req, res) {
  var categories = new _Queries2.default(Category);
  categories.getById(req.params.id).then(function (data) {
    return res.json(data);
  }).catch(function (err) {
    return res.status(400).json(err);
  });
});

router.post("/add", function (req, res) {
  var categories = new _Queries2.default(Category);
  categories.getByParams({ limit: 1, sort: "position=-1" }).then(function (data) {
    if (data && data.ok && data.data.length > 0) {
      var body = req.body;

      body.position = data.data[0].position + 1;
      return categories.add(body);
    } else {
      return categories.add(req.body);
    }
  }).then(function (data) {
    return res.json(data);
  }).catch(function (err) {
    return res.status(400).json(err);
  });
});

router.post("/position", function (req, res) {
  var categories = new _Queries2.default(Category);
  categories.arrEditer(req.body, 0).then(function (data) {
    return res.json(data);
  }).catch(function (err) {
    return res.status(400).json(err);
  });
});

router.post("/edit", function (req, res) {
  var categories = new _Queries2.default(Category);
  var data = {
    name: req.body.name,
    description: req.body.description,
    image: req.body.image || ""
  };
  var id = req.body._id;
  categories.edit(id, data).then(function (data) {
    return res.json(data);
  }).catch(function (err) {
    return res.status(400).json(err);
  });
});

router.get("/delete/:id", function (req, res) {
  var categories = new _Queries2.default(Category);
  var products = new _Queries2.default(Product);
  var id = req.params.id;

  products.getByParams({ params: "category=" + id }).then(function (data) {
    if (data.data && data.data.length > 0) {
      return {
        ok: false,
        message: "Не поднимается рука, чтобы удалить данную категорию. У вас имеются товары, относящиеся к ней. Измените категорию в этих товарах или удалите их."
      };
    }
    return { ok: true };
  }).then(function (data) {
    if (data.ok) {
      return categories.delete(id);
    } else {
      return data;
    }
  }).then(function (data) {
    if (data.data && data.data.image) {
      (0, _files.deleteFile)(data.data.image);
    }
    return res.json(data);
  }).catch(function (err) {
    return res.status(400).json({ ok: false, message: "Ошибка сервера, попробуйте позже!" });
  });
});

module.exports = router;

/***/ }),
/* 58 */
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
  position: {
    type: Number,
    default: 0
  }
}, { timestamps: { createdAt: "created_at" } });

var Category = mongoose.model("Category", CategorySchema);

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
    this.getFindParams = this.getFindParams.bind(this);
    this.arrEditer = this.arrEditer.bind(this);
  }
  // get several objects by parameters


  _createClass(DataBase, [{
    key: "getByParams",
    value: function getByParams(params) {
      var _this = this;

      var limit = params.limit,
          page = params.page,
          sort = params.sort,
          search = params.search;

      var skip = this.getSkip(limit, page);
      return new Promise(function (resolve, reject) {
        _this.Model.find(_this.getFindParams(params.params, search)).limit(Number(_this.getLimit(limit))).sort(_this.getSort(sort)).skip(Number(skip)).exec(function (err, docs) {
          if (err) {
            reject({ ok: false, err: err });
          }
          resolve({ ok: true, data: docs });
        });
      });
    }
    // Add object

  }, {
    key: "add",
    value: function add(data) {
      var newObject = new this.Model(data);
      return new Promise(function (resolve, reject) {
        newObject.save({}, function (err, doc) {
          if (err) {
            reject({ ok: false, err: err });
          }
          resolve({ ok: true, data: doc });
        });
      });
    }

    // get by ID

  }, {
    key: "getById",
    value: function getById(id) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _this2.Model.findById(id, function (err, doc) {
          if (err) {
            reject({ ok: false, err: err });
          }
          resolve({ ok: true, data: doc });
        });
      });
    }

    // Delete

  }, {
    key: "delete",
    value: function _delete(id) {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        _this3.Model.findByIdAndRemove(id, function (err, doc) {
          if (err) {
            reject({ ok: false, err: err });
          }
          resolve({ ok: true, data: doc });
        });
      });
    }

    // editer

  }, {
    key: "edit",
    value: function edit(id, data) {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        _this4.Model.findByIdAndUpdate(id, { $set: data }, function (err, doc) {
          if (err) {
            reject({ ok: false, err: err });
          }
          resolve({ ok: true, data: doc });
        });
      });
    }

    //Arr editer

  }, {
    key: "arrEditer",
    value: function arrEditer(arr, idx) {
      var _this5 = this;

      return new Promise(function (resolve, reject) {
        var _arr$idx = arr[idx],
            id = _arr$idx.id,
            data = _arr$idx.data;

        _this5.Model.findByIdAndUpdate(id, { $set: data }, function (err, doc) {
          if (err) {
            reject({ ok: false, err: err });
          }
          if (idx < arr.length - 1) {
            _this5.arrEditer(arr, ++idx);
          }
          resolve({ ok: true });
        });
      });
    }
  }, {
    key: "getSkip",
    value: function getSkip(limit, page) {
      if (limit && page) {
        return (page - 1) * limit;
      } else {
        return 0;
      }
    }
  }, {
    key: "getLimit",
    value: function getLimit(limit) {
      if (limit) {
        return limit;
      } else {
        return 0;
      }
    }
  }, {
    key: "getFindParams",
    value: function getFindParams(params, search) {
      if (params && search) {
        return {
          $and: [this.getParams(params), this.getSearch(search)]
        };
      } else if (params && !search) {
        return this.getParams(params);
      } else if (!params && search) {
        return this.getSearch(search);
      } else {
        return {};
      }
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
      var _this6 = this;

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
              result.$and[idx].$or.push(_defineProperty({}, param[0], _this6.getValueForParams(param[1])));
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
      } else {
        result = { created_at: -1 };
      }
      return result;
    }
  }, {
    key: "getSearch",
    value: function getSearch(search) {
      var _this7 = this;

      var result = { $or: [] };
      search = decodeURIComponent(search);
      if (search && search !== undefined) {
        var arr = search.split("||");
        arr.map(function (el) {
          var sub = el.split("=");
          if (sub.length === 2) {
            result.$or.push(_defineProperty({}, sub[0], _this7.getValueForSearch(sub[1])));
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
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(4);

var _express2 = _interopRequireDefault(_express);

var _multer = __webpack_require__(61);

var _multer2 = _interopRequireDefault(_multer);

var _path = __webpack_require__(6);

var _path2 = _interopRequireDefault(_path);

var _fs = __webpack_require__(7);

var _fs2 = _interopRequireDefault(_fs);

var _mongoXlsx = __webpack_require__(62);

var _mongoXlsx2 = _interopRequireDefault(_mongoXlsx);

var _City = __webpack_require__(63);

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
/* 61 */
/***/ (function(module, exports) {

module.exports = require("multer");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("mongo-xlsx");

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mongoose = __webpack_require__(2);

var _mongoose2 = _interopRequireDefault(_mongoose);

__webpack_require__(64);

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
/* 64 */
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
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _socket = __webpack_require__(5);

var _socket2 = _interopRequireDefault(_socket);

var _path = __webpack_require__(6);

var _path2 = _interopRequireDefault(_path);

var _fs = __webpack_require__(7);

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports.loadImage = function (stream, data, socket) {
  if (_path2.default.extname(data.name) === ".jpg" || _path2.default.extname(data.name) === ".JPG" || _path2.default.extname(data.name) === ".jpeg" || _path2.default.extname(data.name) === ".JPEG" || _path2.default.extname(data.name) === ".png" || _path2.default.extname(data.name) === ".PNG") {
    var filename = Date.now() + _path2.default.extname(data.name);
    var filepath = _path2.default.join("public/Uploads/Images", filename);
    var ws = _fs2.default.createWriteStream(filepath);
    stream.pipe(ws);
    ws.on("finish", function () {
      if ((data.idx || data.idx === 0) && data.idx !== undefined) {
        socket.emit("load_successful", { filename: filename, idx: data.idx });
      } else {
        socket.emit("load_successful", filename);
      }
    });
  }
};

module.exports.deleteFile = function (filename) {
  _fs2.default.stat("public/Uploads/Images/" + filename, function (err, stats) {
    if (err) {
      console.error(err);
    }
    _fs2.default.unlink("public/Uploads/Images/" + filename, function (err) {
      if (err) {
        console.error(err);
      } else {
        console.log("Deleted");
      }
    });
  });
};

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ }),
/* 68 */,
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _add = __webpack_require__(39);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var withDrag = function withDrag(Component) {
  var WithDrag = function (_React$Component) {
    _inherits(WithDrag, _React$Component);

    function WithDrag(props) {
      _classCallCheck(this, WithDrag);

      var _this = _possibleConstructorReturn(this, (WithDrag.__proto__ || Object.getPrototypeOf(WithDrag)).call(this, props));

      _this.state = {
        draggable: -1,
        data: []
      };
      _this.dragStart = _this.dragStart.bind(_this);
      _this.dragEnd = _this.dragEnd.bind(_this);
      _this.dropEnter = _this.dropEnter.bind(_this);
      _this.dropLeave = _this.dropLeave.bind(_this);
      _this.drop = _this.drop.bind(_this);
      _this.editPosition = _this.editPosition.bind(_this);
      return _this;
    }

    _createClass(WithDrag, [{
      key: "dragStart",
      value: function dragStart(e, data) {
        e.dataTransfer.setData("text/html", e.target.id);
        var idx = e.target.attributes.idx.value;
        this.setState({ draggable: idx, data: data });
      }
    }, {
      key: "dragEnd",
      value: function dragEnd(e) {
        this.setState({ draggable: -1, data: [] });
      }
    }, {
      key: "dropEnter",
      value: function dropEnter(event) {
        var idx = event.target.attributes.idx.value;
        event.target.style.height = "60px";
        event.target.style.border = "2px dashed grey";
      }
    }, {
      key: "dropLeave",
      value: function dropLeave(event) {
        event.target.style.height = "10px";
        event.target.style.border = "none";
      }
    }, {
      key: "drop",
      value: function drop(event) {
        var idx = event.target.attributes.idx.value;
        var draggable = this.state.draggable;

        this.editPosition(draggable, idx);
        event.target.style.height = "10px";
        event.target.style.border = "none";
      }
    }, {
      key: "editPosition",
      value: function editPosition(prew, next) {
        var _this2 = this;

        var data = this.state.data;

        prew = Number(prew);
        next = Number(next);
        var tmp = data[prew];
        if (prew + 1 !== next && prew !== next) {
          data.splice(prew, 1);
          data.splice(next, 0, tmp);

          var editable = [];
          data.map(function (item, idx) {
            editable.push({ id: item._id, data: { position: idx } });
          });
          var editer = new _add.FieldCreator("categories/position", editable);
          editer.response().then(function (res) {
            if (res && res.ok) {
              _this2.props.getData();
            } else {
              _this2.props.addError("Произошла ошибка на сервере. Попробуйте позже.");
            }
          }).catch(function (err) {
            _this2.props.addError("Произошла ошибка на сервере. Попробуйте позже.");
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        return _react2.default.createElement(Component, _extends({}, this.props, {
          dragStart: this.dragStart,
          dragEnd: this.dragEnd,
          dropEnter: this.dropEnter,
          dropLeave: this.dropLeave,
          drop: this.drop
        }));
      }
    }]);

    return WithDrag;
  }(_react2.default.Component);

  WithDrag.displayName = "WithDrag(" + (Component.displayName || Component.name || "Component") + ")";
  return WithDrag;
};

exports.default = withDrag;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Confirm = function Confirm(_ref) {
  var text = _ref.text,
      handler = _ref.handler,
      close = _ref.close,
      data = _ref.data;
  return _react2.default.createElement(
    "div",
    { className: "confirm" },
    _react2.default.createElement(
      "div",
      { className: "confirm__container" },
      _react2.default.createElement(
        "p",
        { className: "text" },
        text
      ),
      _react2.default.createElement(
        "div",
        { className: "menu" },
        _react2.default.createElement(
          "span",
          { onClick: function onClick() {
              return handler(data);
            }, className: "clickable menu__true" },
          "\u0414\u0430"
        ),
        _react2.default.createElement(
          "span",
          {
            onClick: function onClick() {
              return close({ open: false });
            },
            className: "clickable menu__false"
          },
          "\u041D\u0435\u0442"
        )
      )
    )
  );
};

exports.default = Confirm;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(2);

var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name: {
    type: String
  },
  image: {
    type: String
  },
  description: {
    type: String
  },
  article: {
    type: String
  },
  barcode: {
    type: String
  },
  category: {
    type: String
  },
  brand: {
    type: String
  },
  minAge: {
    type: Number
  },
  maxAge: {
    type: Number
  },
  weight: {
    type: Number
  },
  tags: {
    type: Array
  },
  features: {
    type: Array
  },
  gallery: {
    type: Array
  },
  youtube: {
    type: String
  },
  price: {
    type: Number
  },
  qt: {
    type: Number,
    default: 0
  },
  sold: {
    type: Number,
    default: 0
  }
}, { timestamps: { createdAt: "created_at" } });

var Product = mongoose.model("Product", ProductSchema);

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _WithMany = __webpack_require__(35);

var _WithMany2 = _interopRequireDefault(_WithMany);

var _AddButton = __webpack_require__(36);

var _AddButton2 = _interopRequireDefault(_AddButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var catalogPage = function catalogPage(_ref) {
  var data = _ref.data,
      confirmToggle = _ref.confirmToggle,
      deleteField = _ref.deleteField;
  return _react2.default.createElement(
    "div",
    { className: "page__container catalog-page" },
    _react2.default.createElement(
      "h2",
      { className: "title-page" },
      "\u0412\u0441\u0435 \u0442\u043E\u0432\u0430\u0440\u044B"
    ),
    _react2.default.createElement(
      "div",
      { className: "categories-page__container" },
      "All"
    ),
    _react2.default.createElement(_AddButton2.default, { src: "/admin/add-product" })
  );
};

exports.default = (0, _WithMany2.default)(catalogPage, "products/get_by_params", "Каталог товаров");

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(4);

var _express2 = _interopRequireDefault(_express);

var _mongoose = __webpack_require__(2);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _files = __webpack_require__(65);

__webpack_require__(58);

__webpack_require__(71);

var _Queries = __webpack_require__(59);

var _Queries2 = _interopRequireDefault(_Queries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

var Category = _mongoose2.default.model("Category");

var Product = _mongoose2.default.model("Product");

router.get("/get_by_params", function (req, res) {
  var products = new _Queries2.default(Product);
  products.getByParams({ limit: 10 }).then(function (data) {
    return res.json(data);
  }).catch(function (err) {
    return res.status(400).json(err);
  });
});

module.exports = router;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _WithForm = __webpack_require__(38);

var _WithForm2 = _interopRequireDefault(_WithForm);

var _TextField = __webpack_require__(40);

var _TextField2 = _interopRequireDefault(_TextField);

var _UploadBlock = __webpack_require__(42);

var _UploadBlock2 = _interopRequireDefault(_UploadBlock);

var _Gallery = __webpack_require__(75);

var _Gallery2 = _interopRequireDefault(_Gallery);

var _SaveButton = __webpack_require__(46);

var _SaveButton2 = _interopRequireDefault(_SaveButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var productPage = function productPage(_ref) {
  var handlerChange = _ref.handlerChange,
      data = _ref.data,
      onSave = _ref.onSave,
      isEmpty = _ref.isEmpty;
  return _react2.default.createElement(
    "div",
    { className: "page__container add-categories-page" },
    _react2.default.createElement(
      "h2",
      { className: "title-page" },
      "\u0422\u043E\u0432\u0430\u0440"
    ),
    _react2.default.createElement(
      "div",
      { className: "form" },
      _react2.default.createElement(_Gallery2.default, {
        handlerChange: handlerChange,
        value: data.gallery,
        name: "gallery",
        placeholder: "\u0413\u0430\u043B\u0435\u0440\u0435\u044F"
      }),
      _react2.default.createElement(_TextField2.default, {
        type: "input",
        placeholder: "\u0418\u043C\u044F",
        name: "name",
        handlerChange: handlerChange,
        value: data.name,
        isEmpty: isEmpty.name ? true : false
      }),
      _react2.default.createElement(_TextField2.default, {
        type: "textarea",
        placeholder: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
        name: "description",
        handlerChange: handlerChange,
        value: data.description,
        isEmpty: isEmpty.description ? true : false
      }),
      _react2.default.createElement(_TextField2.default, {
        type: "input",
        placeholder: "\u0410\u0440\u0442\u0438\u043A\u0443\u043B",
        name: "article",
        handlerChange: handlerChange,
        value: data.article,
        isEmpty: isEmpty.article ? true : false
      }),
      _react2.default.createElement(_TextField2.default, {
        type: "input",
        placeholder: "\u0428\u0442\u0440\u0438\u0445\u043A\u043E\u0434",
        name: "barcode",
        handlerChange: handlerChange,
        value: data.barcode,
        isEmpty: isEmpty.barcode ? true : false
      }),
      _react2.default.createElement(_UploadBlock2.default, {
        handlerChange: handlerChange,
        name: "image",
        placeholder: "\u0413\u043B\u0430\u0432\u043D\u043E\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",
        isEmpty: isEmpty.image ? true : false,
        value: data.image || ""
      }),
      _react2.default.createElement(_SaveButton2.default, { name: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C", submit: onSave })
    )
  );
};

exports.default = (0, _WithForm2.default)(productPage, {
  set: "products/add",
  edit: "products/edit",
  redirect: "/admin/catalog",
  get: "products/get_by_id"
}, "Товар", {
  name: true,
  description: true,
  image: true,
  article: true,
  barcode: true,
  gallery: false
});

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Gallery = __webpack_require__(76);

var _Gallery2 = _interopRequireDefault(_Gallery);

var _config = __webpack_require__(1);

var _ImageBlock = __webpack_require__(15);

var _ImageBlock2 = _interopRequireDefault(_ImageBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Gallery = function Gallery(_ref) {
  var files = _ref.files,
      deleteFile = _ref.deleteFile,
      uploadFiles = _ref.uploadFiles,
      name = _ref.name,
      load = _ref.load;
  return _react2.default.createElement(
    "div",
    { className: "gallery" },
    files.map(function (file, idx) {
      return _react2.default.createElement(
        "div",
        { className: "gallery__item", key: idx },
        file ? _react2.default.createElement(
          _react2.default.Fragment,
          null,
          _react2.default.createElement(_ImageBlock2.default, { src: _config.IMAGE_PREFIX + "/" + file, classes: "image" }),
          _react2.default.createElement(
            "div",
            { onClick: function onClick() {
                return deleteFile(idx);
              }, className: "close clickable" },
            "\xD7"
          )
        ) : _react2.default.createElement("div", {
          style: {
            width: load[idx] + "%",
            display: load[idx] < 100 ? "block" : "none"
          },
          className: "loading"
        })
      );
    }),
    _react2.default.createElement("input", {
      multiple: "multiple",
      onChange: uploadFiles,
      type: "file",
      name: name,
      id: name
    }),
    _react2.default.createElement(
      "label",
      { className: "clickable", htmlFor: name },
      "+"
    )
  );
};

exports.default = (0, _Gallery2.default)(Gallery);

/***/ }),
/* 76 */
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

var _socket = __webpack_require__(44);

var _socket2 = _interopRequireDefault(_socket);

var _socket3 = __webpack_require__(5);

var _socket4 = _interopRequireDefault(_socket3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var socket = (0, _socket2.default)(_config.API_PREFIX);

var withLoaderArr = function withLoaderArr(Component, API_URLS, title) {
  var WithLoaderArr = function (_React$Component) {
    _inherits(WithLoaderArr, _React$Component);

    function WithLoaderArr(props) {
      _classCallCheck(this, WithLoaderArr);

      var _this = _possibleConstructorReturn(this, (WithLoaderArr.__proto__ || Object.getPrototypeOf(WithLoaderArr)).call(this, props));

      _this.state = _defineProperty({
        load: [],
        fieldName: "",
        files: _this.props.value || []
      }, "fieldName", "");
      _this.socketConnect = _this.socketConnect.bind(_this);
      _this.uploadFiles = _this.uploadFiles.bind(_this);
      _this.deleteFile = _this.deleteFile.bind(_this);
      _this.loadSuccessful = _this.loadSuccessful.bind(_this);
      return _this;
    }

    _createClass(WithLoaderArr, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.socketConnect();
        this.loadSuccessful();
      }
    }, {
      key: "loadSuccessful",
      value: function loadSuccessful() {
        var _this2 = this;

        socket.on("load_successful", function (response) {
          if (response) {
            var files = _this2.state.files;
            var filename = response.filename,
                idx = response.idx;

            files[idx] = filename;
            _this2.setState({ files: files }, function () {
              var _state = _this2.state,
                  fieldName = _state.fieldName,
                  files = _state.files;

              _this2.props.handlerChange(fieldName, files);
            });
          }
        });
      }
    }, {
      key: "socketConnect",
      value: function socketConnect() {
        socket.on("connect", function () {
          console.log("client");
        });
      }
    }, {
      key: "deleteFile",
      value: function deleteFile(idx) {
        var _this3 = this;

        var files = this.state.files;

        var file = files[idx];
        files.splice(idx, 1);
        this.setState({ files: files }, function () {
          socket.emit("delete_file", file);
          _this3.props.handlerChange(_this3.state.fieldName, _this3.state.files);
        });
      }
    }, {
      key: "uploadFiles",
      value: function uploadFiles(e) {
        var _this4 = this;

        var _e$target = e.target,
            files = _e$target.files,
            name = _e$target.name;

        this.setState({ fieldName: name });
        var load = this.state.load;

        var order = load.length;
        var allFiles = this.state.files;

        var _loop = function _loop(i) {
          load[order + i] = 0;
          allFiles[order + i] = "";
          _this4.setState({ files: allFiles });
          var file = files[i];
          var filename = file.name;
          var filesize = file.size;
          var enc = e.target.encoding;
          var stream = _socket4.default.createStream();
          (0, _socket4.default)(socket).emit("upload_img", stream, {
            data: file,
            size: filesize,
            name: filename,
            enc: enc,
            idx: order + i
          });
          var blobStream = _socket4.default.createBlobReadStream(file);
          var size = 0;
          blobStream.on("data", function (chunk) {
            size += chunk.length;
            var percent = Math.floor(size / file.size * 100);
            load[order + i] = percent;
            _this4.setState({ load: load });
            // console.log(this.state.load);
          });
          blobStream.pipe(stream);
        };

        for (var i = 0; i < files.length; i++) {
          _loop(i);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _state2 = this.state,
            load = _state2.load,
            files = _state2.files;

        return _react2.default.createElement(Component, _extends({
          uploadFiles: this.uploadFiles
        }, this.props, {
          load: load,
          deleteFile: this.deleteFile,
          files: files
        }));
      }
    }]);

    return WithLoaderArr;
  }(_react2.default.Component);

  WithLoaderArr.displayName = "WithLoaderArr(" + (Component.displayName || Component.name || "Component") + ")";
  return WithLoaderArr;
};

exports.default = withLoaderArr;

/***/ })
/******/ ]);