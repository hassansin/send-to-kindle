module.exports =
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(1));

var _assign = _interopRequireDefault(__webpack_require__(12));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(4));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(2));

var _http = _interopRequireDefault(__webpack_require__(5));

var _querystring = __webpack_require__(14);

var API_ENDPOINT = 'http://api.pdflayer.com/api/convert';
var defaultOptions = {
  margin_top: 0,
  margin_bottom: 0,
  margin_left: 0,
  margin_right: 0,
  use_print_media: 1,
  test: 0
  /**
  * converts any url to pdf using pdflayer.com
  */

};

var _default =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(_ref) {
    var apiKey, url, html, options, qs, opts;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            apiKey = _ref.apiKey, url = _ref.url, html = _ref.html, options = (0, _objectWithoutProperties2.default)(_ref, ["apiKey", "url", "html"]);
            qs = (0, _assign.default)({}, defaultOptions, options);
            qs.access_key = apiKey;

            if (url) {
              qs.document_url = url;
            }

            opts = {
              url: API_ENDPOINT + '?' + (0, _querystring.stringify)(qs),
              encoding: null
            };

            if (html) {
              opts.form = {
                document_html: html
              };
              opts.method = 'POST';
            }

            return _context.abrupt("return", (0, _http.default)(opts));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _promise = _interopRequireDefault(__webpack_require__(6));

var _request = _interopRequireDefault(__webpack_require__(13));

function _default(config) {
  return new _promise.default(function (resolve, reject) {
    (0, _request.default)(config, function (err, res, body) {
      if (err || res.statusCode !== 200) {
        return reject(err || new Error(`invalide status ${res.statusCode}`));
      }

      return resolve({
        res,
        body
      });
    });
  });
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/core-js/promise");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(8);

var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(1));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(2));

var _express = _interopRequireDefault(__webpack_require__(9));

var _webtaskTools = _interopRequireDefault(__webpack_require__(10));

var _bodyParser = _interopRequireDefault(__webpack_require__(11));

var _pdf = _interopRequireDefault(__webpack_require__(3));

var _kindle = _interopRequireDefault(__webpack_require__(15));

var _attachment = _interopRequireWildcard(__webpack_require__(17));

var _middleware = __webpack_require__(19);

var app = (0, _express.default)();
app.use(_middleware.validate);
app.get('/', (0, _middleware.asyncware)(
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(req, res, next) {
    var ctx, url, test, title, convert, _ref2, filename, content, info;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ctx = req.webtaskContext;
            url = ctx.query.url;
            test = ctx.query.test;
            title = ctx.query.title;
            convert = Boolean(ctx.query.convert);

            if (url) {
              _context.next = 7;
              break;
            }

            throw new Error('missing url parameter');

          case 7:
            _context.next = 9;
            return (0, _attachment.default)({
              apiKey: ctx.secrets.PDFLAYER_APIKEY,
              url,
              test
            });

          case 9:
            _ref2 = _context.sent;
            filename = _ref2.filename;
            content = _ref2.content;
            filename = title ? title.replace('.pdf') + '.pdf' : filename;
            _context.next = 15;
            return (0, _kindle.default)({
              smtp: ctx.secrets.SMTP_CONFIG,
              address: ctx.secrets.KINDLE_ADDRESS,
              attachments: [{
                filename,
                content
              }],
              convert
            });

          case 15:
            info = _context.sent;
            res.json(info);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}()));
app.post('/', _bodyParser.default.raw({
  type: function type() {
    return true;
  }
}), (0, _middleware.asyncware)(
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(req, res, next) {
    var ctx, test, title, convert, filename, _ref4, body, info;

    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            ctx = req.webtaskContext;
            test = ctx.query.test;
            title = ctx.query.title;
            convert = Boolean(ctx.query.convert);

            if (req.body) {
              _context2.next = 6;
              break;
            }

            throw new Error('missing html body');

          case 6:
            filename = title ? title.replace('.pdf') + '.pdf' : (0, _attachment.parseTitle)(req.body);
            _context2.next = 9;
            return (0, _pdf.default)({
              apiKey: ctx.secrets.PDFLAYER_APIKEY,
              html: req.body,
              test
            });

          case 9:
            _ref4 = _context2.sent;
            body = _ref4.body;
            _context2.next = 13;
            return (0, _kindle.default)({
              smtp: ctx.secrets.SMTP_CONFIG,
              address: ctx.secrets.KINDLE_ADDRESS,
              attachments: [{
                filename,
                content: body
              }],
              convert
            });

          case 13:
            info = _context2.sent;
            res.json(info);

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function (_x4, _x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}()));

var _default = _webtaskTools.default.fromExpress(app);

exports.default = _default;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("webtask-tools");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/core-js/object/assign");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("request");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(1));

var _promise = _interopRequireDefault(__webpack_require__(6));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(2));

var _nodemailer = _interopRequireDefault(__webpack_require__(16));

/**
* sends attachments to kindle address
*/
var _default =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(_ref) {
    var smtp, address, convert, attachments;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            smtp = _ref.smtp, address = _ref.address, convert = _ref.convert, attachments = _ref.attachments;
            return _context.abrupt("return", new _promise.default(function (resolve, reject) {
              var transporter = _nodemailer.default.createTransport(smtp);

              var opts = {
                to: address,
                text: 'document',
                subject: convert ? 'convert' : 'document',
                attachments
              };
              console.log('sending to kindle');
              transporter.sendMail(opts, function (err, info) {
                if (err) {
                  return reject(err);
                }

                info.attachments = attachments.map(function (att) {
                  return att.filename;
                });
                return resolve(info);
              });
            }));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("nodemailer");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseTitle = parseTitle;
exports.fetchContent = exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(1));

var _extends2 = _interopRequireDefault(__webpack_require__(18));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(4));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(2));

var _http = _interopRequireDefault(__webpack_require__(5));

var _pdf = _interopRequireDefault(__webpack_require__(3));

var _default =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(_ref) {
    var apiKey, url, options, _ref3, res, body, filename, _ref4, content;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            apiKey = _ref.apiKey, url = _ref.url, options = (0, _objectWithoutProperties2.default)(_ref, ["apiKey", "url"]);
            _context.next = 3;
            return fetchContent(url);

          case 3:
            _ref3 = _context.sent;
            res = _ref3.res;
            body = _ref3.body;
            filename = url.replace(/\/\?.*/, '').split('/').pop();

            if (res.headers['content-type'].indexOf('text/html') > -1) {
              filename = parseTitle(body);
            }

            _context.next = 10;
            return (0, _pdf.default)((0, _extends2.default)({
              html: body,
              apiKey
            }, options));

          case 10:
            _ref4 = _context.sent;
            content = _ref4.body;
            return _context.abrupt("return", {
              filename,
              content
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.default = _default;

var fetchContent =
/*#__PURE__*/
function () {
  var _ref5 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(url) {
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log('fetching url', url);
            return _context2.abrupt("return", (0, _http.default)({
              url,
              headers: {
                'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36'
              },
              encoding: null
            }));

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function fetchContent(_x2) {
    return _ref5.apply(this, arguments);
  };
}();

exports.fetchContent = fetchContent;

function parseTitle(body) {
  var matches = body.toString().match(/title>([\s\S]*?)<\/title/i);
  var title = matches ? `${matches[1]}.pdf` : 'document.pdf';
  return title.replace(/\s+/g, '-').replace(/[-]+/g, '-');
}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = validate;
exports.asyncware = asyncware;

function validate(req, res, next) {
  if (!req.webtaskContext.secrets.PDFLAYER_APIKEY) {
    return next('missing PDFLAYER_APIKEY');
  }

  if (!req.webtaskContext.secrets.SMTP_CONFIG) {
    return next('missing SMTP_CONFIG');
  }

  if (!req.webtaskContext.secrets.KINDLE_ADDRESS) {
    return next('missing KINDLE_ADDRESS');
  }

  next();
}

function asyncware(fn) {
  return function (req, res, next) {
    return fn(req, res, next).catch(next);
  };
}

/***/ })
/******/ ]);module.exports = module.exports.default