(function() {
var __webpack_modules__ = {
"./src Sync  recursive ^a.*.js$": function (module, exports, __webpack_require__) {
var map = {};
function webpackContext(req) {
var id = webpackContextResolve(req);

return __webpack_require__(id);

}
function webpackContextResolve(req) {

      if(!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }
      return map[req];
    
}
webpackContext.id = './src Sync  recursive ^a.*.js$';

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };
      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      },
"./src/index.js": function (module, exports, __webpack_require__) {
const a = 'nswer';
console.log(__webpack_require__('./src Sync  recursive ^a.*.js$')(`./a${a}.js`).answer);
},

}
// The module cache
 var __webpack_module_cache__ = {};
function __webpack_require__(moduleId) {
// Check if module is in cache
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== undefined) {
      return cachedModule.exports;
      }
      // Create a new module (and put it into the cache)
      var module = (__webpack_module_cache__[moduleId] = {
       exports: {} 
      });
      // Execute the module function
      __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
// Return the exports of the module
 return module.exports;

}
// webpack/runtime/has_own_property
(function() {
__webpack_require__.o = function (obj, prop) {
	return Object.prototype.hasOwnProperty.call(obj, prop);
};

})();
var __webpack_exports__ = __webpack_require__('./src/index.js');

})();
