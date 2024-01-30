/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/catalog-books/books-api.js":
/*!****************************************!*\
  !*** ./src/catalog-books/books-api.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getBooks: () => (/* binding */ getBooks)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = \"function\" == typeof Symbol ? Symbol : {}, a = i.iterator || \"@@iterator\", c = i.asyncIterator || \"@@asyncIterator\", u = i.toStringTag || \"@@toStringTag\"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, \"\"); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, \"_invoke\", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: \"normal\", arg: t.call(e, r) }; } catch (t) { return { type: \"throw\", arg: t }; } } e.wrap = wrap; var h = \"suspendedStart\", l = \"suspendedYield\", f = \"executing\", s = \"completed\", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { [\"next\", \"throw\", \"return\"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if (\"throw\" !== c.type) { var u = c.arg, h = u.value; return h && \"object\" == _typeof(h) && n.call(h, \"__await\") ? e.resolve(h.__await).then(function (t) { invoke(\"next\", t, i, a); }, function (t) { invoke(\"throw\", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke(\"throw\", t, i, a); }); } a(c.arg); } var r; o(this, \"_invoke\", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error(\"Generator is already running\"); if (o === s) { if (\"throw\" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if (\"next\" === n.method) n.sent = n._sent = n.arg;else if (\"throw\" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else \"return\" === n.method && n.abrupt(\"return\", n.arg); o = f; var p = tryCatch(e, r, n); if (\"normal\" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } \"throw\" === p.type && (o = s, n.method = \"throw\", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, \"throw\" === n && e.iterator[\"return\"] && (r.method = \"return\", r.arg = t, maybeInvokeDelegate(e, r), \"throw\" === r.method) || \"return\" !== n && (r.method = \"throw\", r.arg = new TypeError(\"The iterator does not provide a '\" + n + \"' method\")), y; var i = tryCatch(o, e.iterator, r.arg); if (\"throw\" === i.type) return r.method = \"throw\", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, \"return\" !== r.method && (r.method = \"next\", r.arg = t), r.delegate = null, y) : a : (r.method = \"throw\", r.arg = new TypeError(\"iterator result is not an object\"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = \"normal\", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: \"root\" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || \"\" === e) { var r = e[a]; if (r) return r.call(e); if (\"function\" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + \" is not iterable\"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, \"GeneratorFunction\"), e.isGeneratorFunction = function (t) { var e = \"function\" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || \"GeneratorFunction\" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, \"GeneratorFunction\")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, \"Generator\"), define(g, a, function () { return this; }), define(g, \"toString\", function () { return \"[object Generator]\"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) \"t\" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if (\"throw\" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = \"throw\", a.arg = e, r.next = n, o && (r.method = \"next\", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if (\"root\" === i.tryLoc) return handle(\"end\"); if (i.tryLoc <= this.prev) { var c = n.call(i, \"catchLoc\"), u = n.call(i, \"finallyLoc\"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error(\"try statement without catch or finally\"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, \"finallyLoc\") && this.prev < o.finallyLoc) { var i = o; break; } } i && (\"break\" === t || \"continue\" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = \"next\", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if (\"throw\" === t.type) throw t.arg; return \"break\" === t.type || \"continue\" === t.type ? this.next = t.arg : \"return\" === t.type ? (this.rval = this.arg = t.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, \"catch\": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if (\"throw\" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, \"next\" === this.method && (this.arg = t), y; } }, e; }\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\nfunction getBooks(_x, _x2) {\n  return _getBooks.apply(this, arguments);\n}\nfunction _getBooks() {\n  _getBooks = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(category, startIndex) {\n    var books_in_category;\n    return _regeneratorRuntime().wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          books_in_category = [];\n          _context.next = 3;\n          return fetch(\"https://www.googleapis.com/books/v1/volumes?q=\\\"subject:\".concat(category, \"\\\"\\n    &key=AIzaSyDx59Zky8nzghjMIiz6vat5T5LUv4DWEz0&printType=books&startIndex=\").concat(startIndex, \"&maxResults=6&langRestrict=en\")).then(function (response) {\n            return response.json();\n          }).then(function (data) {\n            books_in_category = data.items;\n          })[\"catch\"](function () {\n            console.log(\"Ошибка!\");\n          });\n        case 3:\n          return _context.abrupt(\"return\", books_in_category);\n        case 4:\n        case \"end\":\n          return _context.stop();\n      }\n    }, _callee);\n  }));\n  return _getBooks.apply(this, arguments);\n}\n\n//# sourceURL=webpack://bookshop/./src/catalog-books/books-api.js?");

/***/ }),

/***/ "./src/catalog-books/catalog-books.js":
/*!********************************************!*\
  !*** ./src/catalog-books/catalog-books.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _catalog_books_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./catalog-books.css */ \"./src/catalog-books/catalog-books.css\");\n/* harmony import */ var _books_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./books-api.js */ \"./src/catalog-books/books-api.js\");\n/* harmony import */ var _images_plc_book_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/plc-book.png */ \"./src/images/plc-book.png\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = \"function\" == typeof Symbol ? Symbol : {}, a = i.iterator || \"@@iterator\", c = i.asyncIterator || \"@@asyncIterator\", u = i.toStringTag || \"@@toStringTag\"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, \"\"); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, \"_invoke\", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: \"normal\", arg: t.call(e, r) }; } catch (t) { return { type: \"throw\", arg: t }; } } e.wrap = wrap; var h = \"suspendedStart\", l = \"suspendedYield\", f = \"executing\", s = \"completed\", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { [\"next\", \"throw\", \"return\"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if (\"throw\" !== c.type) { var u = c.arg, h = u.value; return h && \"object\" == _typeof(h) && n.call(h, \"__await\") ? e.resolve(h.__await).then(function (t) { invoke(\"next\", t, i, a); }, function (t) { invoke(\"throw\", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke(\"throw\", t, i, a); }); } a(c.arg); } var r; o(this, \"_invoke\", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error(\"Generator is already running\"); if (o === s) { if (\"throw\" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if (\"next\" === n.method) n.sent = n._sent = n.arg;else if (\"throw\" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else \"return\" === n.method && n.abrupt(\"return\", n.arg); o = f; var p = tryCatch(e, r, n); if (\"normal\" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } \"throw\" === p.type && (o = s, n.method = \"throw\", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, \"throw\" === n && e.iterator[\"return\"] && (r.method = \"return\", r.arg = t, maybeInvokeDelegate(e, r), \"throw\" === r.method) || \"return\" !== n && (r.method = \"throw\", r.arg = new TypeError(\"The iterator does not provide a '\" + n + \"' method\")), y; var i = tryCatch(o, e.iterator, r.arg); if (\"throw\" === i.type) return r.method = \"throw\", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, \"return\" !== r.method && (r.method = \"next\", r.arg = t), r.delegate = null, y) : a : (r.method = \"throw\", r.arg = new TypeError(\"iterator result is not an object\"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = \"normal\", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: \"root\" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || \"\" === e) { var r = e[a]; if (r) return r.call(e); if (\"function\" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + \" is not iterable\"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, \"GeneratorFunction\"), e.isGeneratorFunction = function (t) { var e = \"function\" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || \"GeneratorFunction\" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, \"GeneratorFunction\")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, \"Generator\"), define(g, a, function () { return this; }), define(g, \"toString\", function () { return \"[object Generator]\"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) \"t\" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if (\"throw\" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = \"throw\", a.arg = e, r.next = n, o && (r.method = \"next\", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if (\"root\" === i.tryLoc) return handle(\"end\"); if (i.tryLoc <= this.prev) { var c = n.call(i, \"catchLoc\"), u = n.call(i, \"finallyLoc\"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error(\"try statement without catch or finally\"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, \"finallyLoc\") && this.prev < o.finallyLoc) { var i = o; break; } } i && (\"break\" === t || \"continue\" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = \"next\", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if (\"throw\" === t.type) throw t.arg; return \"break\" === t.type || \"continue\" === t.type ? this.next = t.arg : \"return\" === t.type ? (this.rval = this.arg = t.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, \"catch\": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if (\"throw\" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, \"next\" === this.method && (this.arg = t), y; } }, e; }\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nvar books_container = document.querySelector('.book-items');\nbooks_container.addEventListener('click', handle_click_books);\nvar cart_length = 0;\nvar cart_length_container = document.querySelector('.bag-items-count');\ncart_length_container.textContent = cart_length;\n\n//Добавляем категории книг\nvar categoriesContainer = document.querySelector(\".categories\");\nvar categories = [{\n  name: 'Architecture',\n  subject: 'Architecture'\n}, {\n  name: 'Art & Fashion',\n  subject: 'Art'\n}, {\n  name: 'Biography',\n  subject: 'Biography&Autobiography'\n}, {\n  name: 'Business',\n  subject: 'Business'\n}, {\n  name: 'Crafts & Hobbies',\n  subject: 'Crafts&Hobbies'\n}, {\n  name: 'Drama',\n  subject: 'Drama'\n}, {\n  name: 'Fiction',\n  subject: 'Fiction'\n}, {\n  name: 'Food & Drink',\n  subject: 'Cooking'\n}, {\n  name: 'Health & Wellbeing',\n  subject: 'Health&Fitness'\n}, {\n  name: 'History & Politics',\n  subject: 'History'\n}, {\n  name: 'Humor',\n  subject: 'Humor'\n}, {\n  name: 'Poetry',\n  subject: 'Poetry'\n}, {\n  name: 'Psychology',\n  subject: 'Psychology'\n}, {\n  name: 'Science',\n  subject: 'Science'\n}, {\n  name: 'Technology',\n  subject: 'Technology'\n}, {\n  name: 'Travel & Maps',\n  subject: 'Travel'\n}];\nvar startIndex = 0;\n//LOAD MORE  \nvar button_load_more = document.querySelector(\".load-more\");\nbutton_load_more.addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {\n  var books_in_category;\n  return _regeneratorRuntime().wrap(function _callee$(_context) {\n    while (1) switch (_context.prev = _context.next) {\n      case 0:\n        startIndex += 6;\n        _context.next = 3;\n        return (0,_books_api_js__WEBPACK_IMPORTED_MODULE_1__.getBooks)(isCategory['subject'], startIndex);\n      case 3:\n        books_in_category = _context.sent;\n        addBooks(books_in_category);\n      case 5:\n      case \"end\":\n        return _context.stop();\n    }\n  }, _callee);\n})));\n\n//Выбранная категория\nvar isCategory = categories[0];\nselectCategory(categories[0]['subject']);\ncategories.forEach(function (category) {\n  categoriesContainer.innerHTML += \"<li class=\\\"categories__item \".concat(isCategory.name === category.name ? 'categories__item-select' : 'categories__item-not-select', \"\\\">\\n            <a data-category=\\\"\").concat(category.subject, \"\\\">\").concat(category.name, \"</a>\\n            \").concat(isCategory.name === category.name ? '<div class=\"circle-selected-categories\"></div>' : '', \"\\n        </li>\");\n});\n\n//Назначаем действия при клике на категорию\nvar categories_items = document.querySelectorAll('.categories__item');\ncategories_items.forEach(function (item) {\n  var item_subject = item.getElementsByTagName('a')[0].attributes['data-category'].nodeValue;\n  item.addEventListener('click', function () {\n    selectCategory(item_subject);\n    var last_select = document.querySelector('.categories__item-select');\n    item.classList.remove('categories__item-not-select');\n    last_select.classList.remove('categories__item-select');\n    item.classList.add('categories__item-select');\n    last_select.classList.add('categories__item-not-select');\n    var circle_selected = document.querySelector('.circle-selected-categories');\n    item.appendChild(circle_selected);\n  });\n});\n\n//Выбор категории книг\nfunction selectCategory(_x) {\n  return _selectCategory.apply(this, arguments);\n} //Очищаем контейнер с книгами\nfunction _selectCategory() {\n  _selectCategory = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(subject) {\n    var books_in_category;\n    return _regeneratorRuntime().wrap(function _callee2$(_context2) {\n      while (1) switch (_context2.prev = _context2.next) {\n        case 0:\n          if (isCategory.subject !== subject) {\n            removeAllBooks();\n          }\n          isCategory = categories.find(function (c) {\n            return c.subject === subject;\n          });\n          _context2.next = 4;\n          return (0,_books_api_js__WEBPACK_IMPORTED_MODULE_1__.getBooks)(subject, startIndex);\n        case 4:\n          books_in_category = _context2.sent;\n          addBooks(books_in_category);\n        case 6:\n        case \"end\":\n          return _context2.stop();\n      }\n    }, _callee2);\n  }));\n  return _selectCategory.apply(this, arguments);\n}\nfunction removeAllBooks() {\n  books_container.innerHTML = '';\n  startIndex = 0;\n}\n\n//Добавляем в контейнер книги\nfunction addBooks(books) {\n  books.map(function (item_book) {\n    var stars = '';\n    if (item_book['volumeInfo']['averageRating'] !== undefined) {\n      for (var i = 0; i < item_book['volumeInfo']['averageRating']; i++) {\n        stars += \"<svg class=\\\"c-icon-star active\\\" width=\\\"12\\\" height=\\\"12\\\">\\n                            <use xlink:href=\\\"#star\\\"></use>\\n                        </svg>\";\n      }\n      for (var _i = item_book['volumeInfo']['averageRating']; _i < 5; _i++) {\n        stars += \"<svg class=\\\"c-icon-star\\\" width=\\\"12\\\" height=\\\"12\\\">\\n                            <use xlink:href=\\\"#star\\\"></use>\\n                        </svg>\";\n      }\n    }\n    var book_in_cart = check_cart(item_book['id']);\n    var button_class = book_in_cart ? 'button-not-active' : 'button-active';\n    var button_text = book_in_cart ? 'IN THE CART' : 'BUY NOW';\n    var new_book = \"<div class=\\\"book-item\\\" book-id=\\\"\".concat(item_book['id'], \"\\\">\\n            <div class=\\\"book-img\\\">\\n                <image src=\\n                    \").concat(item_book['volumeInfo']['imageLinks'] !== undefined ? item_book['volumeInfo']['imageLinks']['thumbnail'] : _images_plc_book_png__WEBPACK_IMPORTED_MODULE_2__, \">\\n                </image>\\n            </div>\\n            <div class=\\\"book-info\\\">\\n                <div class=\\\"book-info__container\\\">\\n                    <p class=\\\"book-info__level-3 text-max-3-stroke\\\">\").concat(item_book['volumeInfo']['authors'] ? item_book['volumeInfo']['authors'].join(', ') : '', \"</p>\\n                    <p class=\\\"book-info__level-1 text-max-3-stroke\\\">\").concat(item_book['volumeInfo']['title'], \"</p>\\n                    <div class=\\\"book-rating m-b-16\\\">\\n                        <div class=\\\"stars\\\">\\n                            \").concat(stars, \"\\n                        </div>\\n                        \\n                        <p class=\\\"book-info__level-3\\\">\\n                            \").concat(item_book['volumeInfo']['ratingsCount'] !== undefined ? \"\".concat(item_book['volumeInfo']['ratingsCount'], \" review\") : ' ', \"\\n                        </p> \\n                    </div>\\n                    <p class=\\\"book-info__level-3 m-b-16 text-max-3-stroke\\\">\\n                        \").concat(item_book['volumeInfo']['description'] !== undefined ? \"\".concat(item_book['volumeInfo']['description']) : '', \"\\n                    </p>\\n                    <p class=\\\"book-info__level-2 m-b-16 text-max-3-stroke\\\">\\n                        \").concat(item_book['saleInfo']['retailPrice'] !== undefined ? \"\".concat(item_book['saleInfo']['retailPrice']['currencyCode'], \" \").concat(item_book['saleInfo']['retailPrice']['amount']) : \"<div style='height: 16px'></div>\", \"\\n                    </p>\\n                    <button class=\\\"button-base \").concat(button_class, \"\\\">\").concat(button_text, \"</button>\\n                </div>\\n            </div>\\n        </div>\");\n    books_container.innerHTML += new_book;\n  });\n}\nfunction handle_click_books(event) {\n  var button_buy = event.target.closest('.button-base');\n  if (!button_buy) return;\n  var book_item = button_buy.closest('.book-item');\n  var book_id = book_item.attributes['book-id'].nodeValue;\n  var books = get_cart();\n  var index_book = books.findIndex(function (i) {\n    return i == book_id;\n  });\n  if (index_book > -1) {\n    books.splice(index_book, 1);\n    button_buy.textContent = \"BUY NOW\";\n    button_buy.classList.remove('button-not-active');\n    button_buy.classList.add('button-active');\n  } else {\n    books.push(book_id);\n    button_buy.textContent = \"IN THE CART\";\n    button_buy.classList.remove('button-active');\n    button_buy.classList.add('button-not-active');\n  }\n  set_cart(books);\n}\nfunction check_cart(book_id) {\n  var books = get_cart();\n  var index_book = books.findIndex(function (i) {\n    return i == book_id;\n  });\n  cart_length = books.length;\n  cart_length_container.textContent = cart_length;\n  return index_book > -1;\n}\nfunction get_cart() {\n  var cart = localStorage.getItem('cart');\n  return cart ? JSON.parse(cart) : [];\n}\nfunction set_cart(books) {\n  localStorage.setItem('cart', JSON.stringify(books));\n  cart_length = books.length;\n  cart_length_container.textContent = cart_length;\n}\n\n//# sourceURL=webpack://bookshop/./src/catalog-books/catalog-books.js?");

/***/ }),

/***/ "./src/main/main.js":
/*!**************************!*\
  !*** ./src/main/main.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slider_slider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../slider/slider.js */ \"./src/slider/slider.js\");\n/* harmony import */ var _catalog_books_catalog_books_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../catalog-books/catalog-books.js */ \"./src/catalog-books/catalog-books.js\");\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.css */ \"./src/main/main.css\");\n\n\n\n\n//# sourceURL=webpack://bookshop/./src/main/main.js?");

/***/ }),

/***/ "./src/slider/slider.js":
/*!******************************!*\
  !*** ./src/slider/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slider_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider.css */ \"./src/slider/slider.css\");\n/* harmony import */ var _images_banners_banner_1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/banners/banner-1.png */ \"./src/images/banners/banner-1.png\");\n/* harmony import */ var _images_banners_banner_2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/banners/banner-2.png */ \"./src/images/banners/banner-2.png\");\n/* harmony import */ var _images_banners_banner_3_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/banners/banner-3.png */ \"./src/images/banners/banner-3.png\");\n\n\n\n\nvar imgContainer1 = document.querySelector('.slider-img');\n//Кружочки под слайдером\nvar circles = document.querySelectorAll('.slider-control__circle');\nvar slides = [_images_banners_banner_1_png__WEBPACK_IMPORTED_MODULE_1__, _images_banners_banner_2_png__WEBPACK_IMPORTED_MODULE_2__, _images_banners_banner_3_png__WEBPACK_IMPORTED_MODULE_3__];\nvar index_img = 0;\n//Устанавливаем значения по умолчанию\nsetSlideContent(index_img);\nsetInterval(function () {\n  setNone(index_img);\n  if (index_img >= slides.length - 1) index_img = 0;else index_img++;\n  setSlideContent(index_img);\n}, 5000);\nfunction setSlideContent(index) {\n  //При max-width>1300px\n  imgContainer1.style.backgroundImage = \"url(\".concat(slides[index], \")\");\n  //Меняем класс ссылки\n  setActive(index);\n}\n\n//Изменение класса ссылки на none-select\nfunction setNone(index) {\n  circles[index].classList.remove('circle-active');\n  circles[index].classList.add('circle-not-active');\n}\n\n//Изменение класса ссылки на select\nfunction setActive(index) {\n  circles[index].classList.remove('circle-not-active');\n  circles[index].classList.add('circle-active');\n}\n\n//Нажатия на кружочки\nvar _loop = function _loop(i) {\n  circles[i].addEventListener('click', function () {\n    setNone(index_img);\n    index_img = i;\n    setSlideContent(index_img);\n  });\n};\nfor (var i = 0; i < circles.length; i++) {\n  _loop(i);\n}\n\n//# sourceURL=webpack://bookshop/./src/slider/slider.js?");

/***/ }),

/***/ "./src/catalog-books/catalog-books.css":
/*!*********************************************!*\
  !*** ./src/catalog-books/catalog-books.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://bookshop/./src/catalog-books/catalog-books.css?");

/***/ }),

/***/ "./src/main/main.css":
/*!***************************!*\
  !*** ./src/main/main.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://bookshop/./src/main/main.css?");

/***/ }),

/***/ "./src/slider/slider.css":
/*!*******************************!*\
  !*** ./src/slider/slider.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://bookshop/./src/slider/slider.css?");

/***/ }),

/***/ "./src/images/banners/banner-1.png":
/*!*****************************************!*\
  !*** ./src/images/banners/banner-1.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/banner-1.png\";\n\n//# sourceURL=webpack://bookshop/./src/images/banners/banner-1.png?");

/***/ }),

/***/ "./src/images/banners/banner-2.png":
/*!*****************************************!*\
  !*** ./src/images/banners/banner-2.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/banner-2.png\";\n\n//# sourceURL=webpack://bookshop/./src/images/banners/banner-2.png?");

/***/ }),

/***/ "./src/images/banners/banner-3.png":
/*!*****************************************!*\
  !*** ./src/images/banners/banner-3.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/banner-3.png\";\n\n//# sourceURL=webpack://bookshop/./src/images/banners/banner-3.png?");

/***/ }),

/***/ "./src/images/plc-book.png":
/*!*********************************!*\
  !*** ./src/images/plc-book.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/plc-book.png\";\n\n//# sourceURL=webpack://bookshop/./src/images/plc-book.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main/main.js");
/******/ 	
/******/ })()
;