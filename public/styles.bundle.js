webpackJsonp([2],{

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--9-1!../node_modules/postcss-loader/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--9-1!../node_modules/postcss-loader/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\r\n/* FOR CIRCLE SQUARE LOADER */\r\n.loader-container {\r\n  display: block;\r\n  height: 300px;\r\n  width: 300px;\r\n  margin: 0 auto;\r\n}\r\n.expand-to-full-screen{\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  -webkit-transform: scale(0.6);\r\n          transform: scale(0.6);\r\n}\r\n  .baton {\r\n    display: block;\r\n    height: 2px;\r\n    width: 70px;\r\n    background-color: #459fa5;\r\n    -webkit-animation: scale 1.25s infinite linear;\r\n            animation: scale 1.25s infinite linear;\r\n    -webkit-transform-origin: 0;\r\n    transform-origin: 0;\r\n    -webkit-transform: rotate(-10deg);\r\n    transform: rotate(-10deg);\r\n  }\r\n  .baton:before {\r\n    content: '';\r\n    display: block;\r\n    height: 5px;\r\n    width: 5px;\r\n    background-color: #f5a51c;\r\n    position: absolute;\r\n    top: -2px;\r\n    border-radius: 5px;\r\n  }\r\n  .baton:after {\r\n    content: '';\r\n    display: block;\r\n    height: 5px;\r\n    width: 5px;\r\n    background-color: #f5a51c;\r\n    position: absolute;\r\n    top: -2px;\r\n    right: 0;\r\n    border-radius: 5px;\r\n  }\r\n  \r\n  .metronome {\r\n    -webkit-transform-origin: 0;\r\n    transform-origin: 0;\r\n    -webkit-animation: metronome 1.25s infinite linear;\r\n            animation: metronome 1.25s infinite linear;\r\n  }\r\n  \r\n  .baton-0 {\r\n    height: 1px;\r\n    width: 150px;\r\n    position: absolute;\r\n    top: calc(50% - 8px);\r\n    -webkit-transform-origin: 100%;\r\n    transform-origin: 100%;\r\n    -webkit-transform: rotate(0deg);\r\n    -moz-transform: rotate(0deg);\r\n    -ms-transform: rotate(0deg);\r\n    -o-transform: rotate(0deg);\r\n  }\r\n  .baton-0 .baton, .baton-0 .baton:after, .baton-0 .metronome {\r\n    -webkit-animation-delay: 0s;\r\n            animation-delay: 0s;\r\n  }\r\n  \r\n  .baton-1 {\r\n    height: 1px;\r\n    width: 150px;\r\n    position: absolute;\r\n    top: calc(50% - 8px);\r\n    -webkit-transform-origin: 100%;\r\n    transform-origin: 100%;\r\n    -webkit-transform: rotate(10deg);\r\n    -moz-transform: rotate(10deg);\r\n    -ms-transform: rotate(10deg);\r\n    -o-transform: rotate(10deg);\r\n  }\r\n  .baton-1 .baton, .baton-1 .baton:after, .baton-1 .metronome {\r\n    -webkit-animation-delay: -0.14s;\r\n            animation-delay: -0.14s;\r\n  }\r\n  \r\n  .baton-2 {\r\n    height: 1px;\r\n    width: 150px;\r\n    position: absolute;\r\n    top: calc(50% - 8px);\r\n    -webkit-transform-origin: 100%;\r\n    transform-origin: 100%;\r\n    -webkit-transform: rotate(20deg);\r\n    -moz-transform: rotate(20deg);\r\n    -ms-transform: rotate(20deg);\r\n    -o-transform: rotate(20deg);\r\n  }\r\n  .baton-2 .baton, .baton-2 .baton:after, .baton-2 .metronome {\r\n    -webkit-animation-delay: -0.28s;\r\n            animation-delay: -0.28s;\r\n  }\r\n  \r\n  .baton-3 {\r\n    height: 1px;\r\n    width: 150px;\r\n    position: absolute;\r\n    top: calc(50% - 8px);\r\n    -webkit-transform-origin: 100%;\r\n    transform-origin: 100%;\r\n    -webkit-transform: rotate(30deg);\r\n    -moz-transform: rotate(30deg);\r\n    -ms-transform: rotate(30deg);\r\n    -o-transform: rotate(30deg);\r\n  }\r\n  .baton-3 .baton, .baton-3 .baton:after, .baton-3 .metronome {\r\n    -webkit-animation-delay: -0.42s;\r\n            animation-delay: -0.42s;\r\n  }\r\n  \r\n  .baton-4 {\r\n    height: 1px;\r\n    width: 150px;\r\n    position: absolute;\r\n    top: calc(50% - 8px);\r\n    -webkit-transform-origin: 100%;\r\n    transform-origin: 100%;\r\n    -webkit-transform: rotate(40deg);\r\n    -moz-transform: rotate(40deg);\r\n    -ms-transform: rotate(40deg);\r\n    -o-transform: rotate(40deg);\r\n  }\r\n  .baton-4 .baton, .baton-4 .baton:after, .baton-4 .metronome {\r\n    -webkit-animation-delay: -0.56s;\r\n            animation-delay: -0.56s;\r\n  }\r\n  \r\n  .baton-5 {\r\n    height: 1px;\r\n    width: 150px;\r\n    position: absolute;\r\n    top: calc(50% - 8px);\r\n    -webkit-transform-origin: 100%;\r\n    transform-origin: 100%;\r\n    -webkit-transform: rotate(50deg);\r\n    -moz-transform: rotate(50deg);\r\n    -ms-transform: rotate(50deg);\r\n    -o-transform: rotate(50deg);\r\n  }\r\n  .baton-5 .baton, .baton-5 .baton:after, .baton-5 .metronome {\r\n    -webkit-animation-delay: -0.7s;\r\n            animation-delay: -0.7s;\r\n  }\r\n  \r\n  .baton-6 {\r\n    height: 1px;\r\n    width: 150px;\r\n    position: absolute;\r\n    top: calc(50% - 8px);\r\n    -webkit-transform-origin: 100%;\r\n    transform-origin: 100%;\r\n    -webkit-transform: rotate(60deg);\r\n    -moz-transform: rotate(60deg);\r\n    -ms-transform: rotate(60deg);\r\n    -o-transform: rotate(60deg);\r\n  }\r\n  .baton-6 .baton, .baton-6 .baton:after, .baton-6 .metronome {\r\n    -webkit-animation-delay: -0.84s;\r\n            animation-delay: -0.84s;\r\n  }\r\n  \r\n  .baton-7 {\r\n    height: 1px;\r\n    width: 150px;\r\n    position: absolute;\r\n    top: calc(50% - 8px);\r\n    -webkit-transform-origin: 100%;\r\n    transform-origin: 100%;\r\n    -webkit-transform: rotate(70deg);\r\n    -moz-transform: rotate(70deg);\r\n    -ms-transform: rotate(70deg);\r\n    -o-transform: rotate(70deg);\r\n  }\r\n  .baton-7 .baton, .baton-7 .baton:after, .baton-7 .metronome {\r\n    -webkit-animation-delay: -0.98s;\r\n            animation-delay: -0.98s;\r\n  }\r\n  \r\n  .baton-8 {\r\n    height: 1px;\r\n    width: 150px;\r\n    position: absolute;\r\n    top: calc(50% - 8px);\r\n    -webkit-transform-origin: 100%;\r\n    transform-origin: 100%;\r\n    -webkit-transform: rotate(80deg);\r\n    -moz-transform: rotate(80deg);\r\n    -ms-transform: rotate(80deg);\r\n    -o-transform: rotate(80deg);\r\n  }\r\n  .baton-8 .baton, .baton-8 .baton:after, .baton-8 .metronome {\r\n    -webkit-animation-delay: -1.12s;\r\n            animation-delay: -1.12s;\r\n  }\r\n  \r\n  .baton-9 {\r\n    height: 1px;\r\n    width: 150px;\r\n    position: absolute;\r\n    top: calc(50% - 8px);\r\n    -webkit-transform-origin: 100%;\r\n    transform-origin: 100%;\r\n    -webkit-transform: rotate(90deg);\r\n    -moz-transform: rotate(90deg);\r\n    -ms-transform: rotate(90deg);\r\n    -o-transform: rotate(90deg);\r\n  }\r\n  .baton-9 .baton, .baton-9 .baton:after, .baton-9 .metronome {\r\n    -webkit-animation-delay: -1.26s;\r\n            animation-delay: -1.26s;\r\n  }\r\n  \r\n  .baton-10 {\r\n    height: 1px;\r\n    width: 150px;\r\n    position: absolute;\r\n    top: calc(50% - 8px);\r\n    -webkit-transform-origin: 100%;\r\n    transform-origin: 100%;\r\n    -webkit-transform: rotate(100deg);\r\n    -moz-transform: rotate(100deg);\r\n    -ms-transform: rotate(100deg);\r\n    -o-transform: rotate(100deg);\r\n  }\r\n  .baton-10 .baton, .baton-10 .baton:after, .baton-10 .metronome {\r\n    -webkit-animation-delay: -1.4s;\r\n            animation-delay: -1.4s;\r\n  }\r\n  \r\n  .baton-11 {\r\n    height: 1px;\r\n    width: 150px;\r\n    position: absolute;\r\n    top: calc(50% - 8px);\r\n    -webkit-transform-origin: 100%;\r\n    transform-origin: 100%;\r\n    -webkit-transform: rotate(110deg);\r\n    -moz-transform: rotate(110deg);\r\n    -ms-transform: rotate(110deg);\r\n    -o-transform: rotate(110deg);\r\n  }\r\n  .baton-11 .baton, .baton-11 .baton:after, .baton-11 .metronome {\r\n    -webkit-animation-delay: -1.54s;\r\n            animation-delay: -1.54s;\r\n  }\r\n  \r\n  .baton-12 {\r\n    height: 1px;\r\n    width: 150px;\r\n    position: absolute;\r\n    top: calc(50% - 8px);\r\n    -webkit-transform-origin: 100%;\r\n    transform-origin: 100%;\r\n    -webkit-transform: rotate(120deg);\r\n    -moz-transform: rotate(120deg);\r\n    -ms-transform: rotate(120deg);\r\n    -o-transform: rotate(120deg);\r\n  }\r\n  .baton-12 .baton, .baton-12 .baton:after, .baton-12 .metronome {\r\n    -webkit-animation-delay: -1.68s;\r\n            animation-delay: -1.68s;\r\n  }\r\n  \r\n  .baton-13 {\r\n    height: 1px;\r\n    width: 150px;\r\n    position: absolute;\r\n    top: calc(50% - 8px);\r\n    -webkit-transform-origin: 100%;\r\n    transform-origin: 100%;\r\n    -webkit-transform: rotate(130deg);\r\n    -moz-transform: rotate(130deg);\r\n    -ms-transform: rotate(130deg);\r\n    -o-transform: rotate(130deg);\r\n  }\r\n  .baton-13 .baton, .baton-13 .baton:after, .baton-13 .metronome {\r\n    -webkit-animation-delay: -1.82s;\r\n            animation-delay: -1.82s;\r\n  }\r\n  \r\n  .baton-14 {\r\n    height: 1px;\r\n    width: 150px;\r\n    position: absolute;\r\n    top: calc(50% - 8px);\r\n    -webkit-transform-origin: 100%;\r\n    transform-origin: 100%;\r\n    -webkit-transform: rotate(140deg);\r\n    -moz-transform: rotate(140deg);\r\n    -ms-transform: rotate(140deg);\r\n    -o-transform: rotate(140deg);\r\n  }\r\n  .baton-14 .baton, .baton-14 .baton:after, .baton-14 .metronome {\r\n    -webkit-animation-delay: -1.96s;\r\n            animation-delay: -1.96s;\r\n  }\r\n  \r\n  .baton-15 {\r\n    height: 1px;\r\n    width: 150px;\r\n    position: absolute;\r\n    top: calc(50% - 8px);\r\n    -webkit-transform-origin: 100%;\r\n    transform-origin: 100%;\r\n    -webkit-transform: rotate(150deg);\r\n    -moz-transform: rotate(150deg);\r\n    -ms-transform: rotate(150deg);\r\n    -o-transform: rotate(150deg);\r\n  }\r\n  .baton-15 .baton, .baton-15 .baton:after, .baton-15 .metronome {\r\n    -webkit-animation-delay: -2.1s;\r\n            animation-delay: -2.1s;\r\n  }\r\n  \r\n  .baton-16 {\r\n    height: 1px;\r\n    width: 150px;\r\n    position: absolute;\r\n    top: calc(50% - 8px);\r\n    -webkit-transform-origin: 100%;\r\n    transform-origin: 100%;\r\n    -webkit-transform: rotate(160deg);\r\n    -moz-transform: rotate(160deg);\r\n    -ms-transform: rotate(160deg);\r\n    -o-transform: rotate(160deg);\r\n  }\r\n  .baton-16 .baton, .baton-16 .baton:after, .baton-16 .metronome {\r\n    -webkit-animation-delay: -2.24s;\r\n            animation-delay: -2.24s;\r\n  }\r\n  \r\n  .baton-17 {\r\n    height: 1px;\r\n    width: 150px;\r\n    position: absolute;\r\n    top: calc(50% - 8px);\r\n    -webkit-transform-origin: 100%;\r\n    transform-origin: 100%;\r\n    -webkit-transform: rotate(170deg);\r\n    -moz-transform: rotate(170deg);\r\n    -ms-transform: rotate(170deg);\r\n    -o-transform: rotate(170deg);\r\n  }\r\n  .baton-17 .baton, .baton-17 .baton:after, .baton-17 .metronome {\r\n    -webkit-animation-delay: -2.38s;\r\n            animation-delay: -2.38s;\r\n  }\r\n  \r\n  .baton-18 {\r\n    height: 1px;\r\n    width: 150px;\r\n    position: absolute;\r\n    top: calc(50% - 8px);\r\n    -webkit-transform-origin: 100%;\r\n    transform-origin: 100%;\r\n    -webkit-transform: rotate(180deg);\r\n    -moz-transform: rotate(180deg);\r\n    -ms-transform: rotate(180deg);\r\n    -o-transform: rotate(180deg);\r\n  }\r\n  .baton-18 .baton, .baton-18 .baton:after, .baton-18 .metronome {\r\n    -webkit-animation-delay: -2.52s;\r\n            animation-delay: -2.52s;\r\n  }\r\n  \r\n  .baton-19 {\r\n    height: 1px;\r\n    width: 150px;\r\n    position: absolute;\r\n    top: calc(50% - 8px);\r\n    -webkit-transform-origin: 100%;\r\n    transform-origin: 100%;\r\n    -webkit-transform: rotate(190deg);\r\n    -moz-transform: rotate(190deg);\r\n    -ms-transform: rotate(190deg);\r\n    -o-transform: rotate(190deg);\r\n  }\r\n  .baton-19 .baton, .baton-19 .baton:after, .baton-19 .metronome {\r\n    -webkit-animation-delay: -2.66s;\r\n            animation-delay: -2.66s;\r\n  }\r\n  \r\n  .baton-20 {\r\n    height: 1px;\r\n    width: 150px;\r\n    position: absolute;\r\n    top: calc(50% - 8px);\r\n    -webkit-transform-origin: 100%;\r\n    transform-origin: 100%;\r\n    -webkit-transform: rotate(200deg);\r\n    -moz-transform: rotate(200deg);\r\n    -ms-transform: rotate(200deg);\r\n    -o-transform: rotate(200deg);\r\n  }\r\n  .baton-20 .baton, .baton-20 .baton:after, .baton-20 .metronome {\r\n    -webkit-animation-delay: -2.8s;\r\n            animation-delay: -2.8s;\r\n  }\r\n  \r\n  .baton-21 {\r\n    height: 1px;\r\n    width: 150px;\r\n    position: absolute;\r\n    top: calc(50% - 8px);\r\n    -webkit-transform-origin: 100%;\r\n    transform-origin: 100%;\r\n    -webkit-transform: rotate(210deg);\r\n    -moz-transform: rotate(210deg);\r\n    -ms-transform: rotate(210deg);\r\n    -o-transform: rotate(210deg);\r\n  }\r\n  .baton-21 .baton, .baton-21 .baton:after, .baton-21 .metronome {\r\n    -webkit-animation-delay: -2.94s;\r\n            animation-delay: -2.94s;\r\n  }\r\n  \r\n  .baton-22 {\r\n    height: 1px;\r\n    width: 150px;\r\n    position: absolute;\r\n    top: calc(50% - 8px);\r\n    -webkit-transform-origin: 100%;\r\n    transform-origin: 100%;\r\n    -webkit-transform: rotate(220deg);\r\n    -moz-transform: rotate(220deg);\r\n    -ms-transform: rotate(220deg);\r\n    -o-transform: rotate(220deg);\r\n  }\r\n  .baton-22 .baton, .baton-22 .baton:after, .baton-22 .metronome {\r\n    -webkit-animation-delay: -3.08s;\r\n            animation-delay: -3.08s;\r\n  }\r\n  \r\n  .baton-23 {\r\n    height: 1px;\r\n    width: 150px;\r\n    position: absolute;\r\n    top: calc(50% - 8px);\r\n    -webkit-transform-origin: 100%;\r\n    transform-origin: 100%;\r\n    -webkit-transform: rotate(230deg);\r\n    -moz-transform: rotate(230deg);\r\n    -ms-transform: rotate(230deg);\r\n    -o-transform: rotate(230deg);\r\n  }\r\n  .baton-23 .baton, .baton-23 .baton:after, .baton-23 .metronome {\r\n    -webkit-animation-delay: -3.22s;\r\n            animation-delay: -3.22s;\r\n  }\r\n  \r\n  .baton-24 {\r\n    height: 1px;\r\n    width: 150px;\r\n    position: absolute;\r\n    top: calc(50% - 8px);\r\n    -webkit-transform-origin: 100%;\r\n    transform-origin: 100%;\r\n    -webkit-transform: rotate(240deg);\r\n    -moz-transform: rotate(240deg);\r\n    -ms-transform: rotate(240deg);\r\n    -o-transform: rotate(240deg);\r\n  }\r\n  .baton-24 .baton, .baton-24 .baton:after, .baton-24 .metronome {\r\n    -webkit-animation-delay: -3.36s;\r\n            animation-delay: -3.36s;\r\n  }\r\n  \r\n  .baton-25 {\r\n    height: 1px;\r\n    width: 150px;\r\n    position: absolute;\r\n    top: calc(50% - 8px);\r\n    -webkit-transform-origin: 100%;\r\n    transform-origin: 100%;\r\n    -webkit-transform: rotate(250deg);\r\n    -moz-transform: rotate(250deg);\r\n    -ms-transform: rotate(250deg);\r\n    -o-transform: rotate(250deg);\r\n  }\r\n  .baton-25 .baton, .baton-25 .baton:after, .baton-25 .metronome {\r\n    -webkit-animation-delay: -3.5s;\r\n            animation-delay: -3.5s;\r\n  }\r\n  \r\n  .baton-26 {\r\n    height: 1px;\r\n    width: 150px;\r\n    position: absolute;\r\n    top: calc(50% - 8px);\r\n    -webkit-transform-origin: 100%;\r\n    transform-origin: 100%;\r\n    -webkit-transform: rotate(260deg);\r\n    -moz-transform: rotate(260deg);\r\n    -ms-transform: rotate(260deg);\r\n    -o-transform: rotate(260deg);\r\n  }\r\n  .baton-26 .baton, .baton-26 .baton:after, .baton-26 .metronome {\r\n    -webkit-animation-delay: -3.64s;\r\n            animation-delay: -3.64s;\r\n  }\r\n  \r\n  .baton-27 {\r\n    height: 1px;\r\n    width: 150px;\r\n    position: absolute;\r\n    top: calc(50% - 8px);\r\n    -webkit-transform-origin: 100%;\r\n    transform-origin: 100%;\r\n    -webkit-transform: rotate(270deg);\r\n    -moz-transform: rotate(270deg);\r\n    -ms-transform: rotate(270deg);\r\n    -o-transform: rotate(270deg);\r\n  }\r\n  .baton-27 .baton, .baton-27 .baton:after, .baton-27 .metronome {\r\n    -webkit-animation-delay: -3.78s;\r\n            animation-delay: -3.78s;\r\n  }\r\n  \r\n  .baton-28 {\r\n    height: 1px;\r\n    width: 150px;\r\n    position: absolute;\r\n    top: calc(50% - 8px);\r\n    -webkit-transform-origin: 100%;\r\n    transform-origin: 100%;\r\n    -webkit-transform: rotate(280deg);\r\n    -moz-transform: rotate(280deg);\r\n    -ms-transform: rotate(280deg);\r\n    -o-transform: rotate(280deg);\r\n  }\r\n  .baton-28 .baton, .baton-28 .baton:after, .baton-28 .metronome {\r\n    -webkit-animation-delay: -3.92s;\r\n            animation-delay: -3.92s;\r\n  }\r\n  \r\n  .baton-29 {\r\n    height: 1px;\r\n    width: 150px;\r\n    position: absolute;\r\n    top: calc(50% - 8px);\r\n    -webkit-transform-origin: 100%;\r\n    transform-origin: 100%;\r\n    -webkit-transform: rotate(290deg);\r\n    -moz-transform: rotate(290deg);\r\n    -ms-transform: rotate(290deg);\r\n    -o-transform: rotate(290deg);\r\n  }\r\n  .baton-29 .baton, .baton-29 .baton:after, .baton-29 .metronome {\r\n    -webkit-animation-delay: -4.06s;\r\n            animation-delay: -4.06s;\r\n  }\r\n  \r\n  .baton-30 {\r\n    height: 1px;\r\n    width: 150px;\r\n    position: absolute;\r\n    top: calc(50% - 8px);\r\n    -webkit-transform-origin: 100%;\r\n    transform-origin: 100%;\r\n    -webkit-transform: rotate(300deg);\r\n    -moz-transform: rotate(300deg);\r\n    -ms-transform: rotate(300deg);\r\n    -o-transform: rotate(300deg);\r\n  }\r\n  .baton-30 .baton, .baton-30 .baton:after, .baton-30 .metronome {\r\n    -webkit-animation-delay: -4.2s;\r\n            animation-delay: -4.2s;\r\n  }\r\n  \r\n  .baton-31 {\r\n    height: 1px;\r\n    width: 150px;\r\n    position: absolute;\r\n    top: calc(50% - 8px);\r\n    -webkit-transform-origin: 100%;\r\n    transform-origin: 100%;\r\n    -webkit-transform: rotate(310deg);\r\n    -moz-transform: rotate(310deg);\r\n    -ms-transform: rotate(310deg);\r\n    -o-transform: rotate(310deg);\r\n  }\r\n  .baton-31 .baton, .baton-31 .baton:after, .baton-31 .metronome {\r\n    -webkit-animation-delay: -4.34s;\r\n            animation-delay: -4.34s;\r\n  }\r\n  \r\n  .baton-32 {\r\n    height: 1px;\r\n    width: 150px;\r\n    position: absolute;\r\n    top: calc(50% - 8px);\r\n    -webkit-transform-origin: 100%;\r\n    transform-origin: 100%;\r\n    -webkit-transform: rotate(320deg);\r\n    -moz-transform: rotate(320deg);\r\n    -ms-transform: rotate(320deg);\r\n    -o-transform: rotate(320deg);\r\n  }\r\n  .baton-32 .baton, .baton-32 .baton:after, .baton-32 .metronome {\r\n    -webkit-animation-delay: -4.48s;\r\n            animation-delay: -4.48s;\r\n  }\r\n  \r\n  .baton-33 {\r\n    height: 1px;\r\n    width: 150px;\r\n    position: absolute;\r\n    top: calc(50% - 8px);\r\n    -webkit-transform-origin: 100%;\r\n    transform-origin: 100%;\r\n    -webkit-transform: rotate(330deg);\r\n    -moz-transform: rotate(330deg);\r\n    -ms-transform: rotate(330deg);\r\n    -o-transform: rotate(330deg);\r\n  }\r\n  .baton-33 .baton, .baton-33 .baton:after, .baton-33 .metronome {\r\n    -webkit-animation-delay: -4.62s;\r\n            animation-delay: -4.62s;\r\n  }\r\n  \r\n  .baton-34 {\r\n    height: 1px;\r\n    width: 150px;\r\n    position: absolute;\r\n    top: calc(50% - 8px);\r\n    -webkit-transform-origin: 100%;\r\n    transform-origin: 100%;\r\n    -webkit-transform: rotate(340deg);\r\n    -moz-transform: rotate(340deg);\r\n    -ms-transform: rotate(340deg);\r\n    -o-transform: rotate(340deg);\r\n  }\r\n  .baton-34 .baton, .baton-34 .baton:after, .baton-34 .metronome {\r\n    -webkit-animation-delay: -4.76s;\r\n            animation-delay: -4.76s;\r\n  }\r\n  \r\n  .baton-35 {\r\n    height: 1px;\r\n    width: 150px;\r\n    position: absolute;\r\n    top: calc(50% - 8px);\r\n    -webkit-transform-origin: 100%;\r\n    transform-origin: 100%;\r\n    -webkit-transform: rotate(350deg);\r\n    -moz-transform: rotate(350deg);\r\n    -ms-transform: rotate(350deg);\r\n    -o-transform: rotate(350deg);\r\n  }\r\n  .baton-35 .baton, .baton-35 .baton:after, .baton-35 .metronome {\r\n    -webkit-animation-delay: -4.9s;\r\n            animation-delay: -4.9s;\r\n  }\r\n  \r\n  @-webkit-keyframes metronome {\r\n    0% {\r\n      -webkit-transform: rotate(-25deg);\r\n      transform: rotate(-25deg);\r\n    }\r\n    50% {\r\n      -webkit-transform: rotate(25deg);\r\n      transform: rotate(25deg);\r\n    }\r\n    100% {\r\n      -webkit-transform: rotate(-25deg);\r\n      transform: rotate(-25deg);\r\n    }\r\n  }\r\n  \r\n  @keyframes metronome {\r\n    0% {\r\n      -webkit-transform: rotate(-25deg);\r\n      transform: rotate(-25deg);\r\n    }\r\n    50% {\r\n      -webkit-transform: rotate(25deg);\r\n      transform: rotate(25deg);\r\n    }\r\n    100% {\r\n      -webkit-transform: rotate(-25deg);\r\n      transform: rotate(-25deg);\r\n    }\r\n  }\r\n  @-webkit-keyframes scale {\r\n    0% {\r\n      -webkit-transform: scaleX(1);\r\n      transform: scaleX(1);\r\n    }\r\n    25% {\r\n      -webkit-transform: scaleX(0.74);\r\n      transform: scaleX(0.74);\r\n    }\r\n    50% {\r\n      -webkit-transform: scaleX(1);\r\n      transform: scaleX(1);\r\n    }\r\n    75% {\r\n      -webkit-transform: scaleX(1.16);\r\n      transform: scaleX(1.16);\r\n    }\r\n    100% {\r\n      -webkit-transform: scaleX(1);\r\n      transform: scaleX(1);\r\n    }\r\n  }\r\n  @keyframes scale {\r\n    0% {\r\n      -webkit-transform: scaleX(1);\r\n      transform: scaleX(1);\r\n    }\r\n    25% {\r\n      -webkit-transform: scaleX(0.74);\r\n      transform: scaleX(0.74);\r\n    }\r\n    50% {\r\n      -webkit-transform: scaleX(1);\r\n      transform: scaleX(1);\r\n    }\r\n    75% {\r\n      -webkit-transform: scaleX(1.16);\r\n      transform: scaleX(1.16);\r\n    }\r\n    100% {\r\n      -webkit-transform: scaleX(1);\r\n      transform: scaleX(1);\r\n    }\r\n  }\r\n \r\n  \r\n  /* .loader {\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n  }\r\n  \r\n  .one {\r\n    position: absolute;\r\n    border-radius: 50%;\r\n    background: #FFFFFF;\r\n    opacity: .0;\r\n    -webkit-animation: loading 1.3s .65s infinite;\r\n            animation: loading 1.3s .65s infinite;\r\n    height: 20px;\r\n    width: 20px;\r\n  }\r\n  \r\n  .two {\r\n    position: absolute;\r\n    border-radius: 50%;\r\n    background: #4046ff;\r\n    opacity: .0;\r\n    -webkit-animation: loading 1.3s infinite;\r\n            animation: loading 1.3s infinite;\r\n    height: 20px;\r\n    width: 20px;\r\n  }\r\n  \r\n  @-webkit-keyframes loading {\r\n    0% {\r\n      opacity: .0;\r\n      -webkit-transform: scale(0.15);\r\n              transform: scale(0.15);\r\n      box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);\r\n    }\r\n    50% {\r\n      opacity: 1;\r\n      -webkit-transform: scale(2);\r\n              transform: scale(2);\r\n      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n    }\r\n    100% {\r\n      opacity: .0;\r\n      -webkit-transform: scale(0.15);\r\n              transform: scale(0.15);\r\n      box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);\r\n    }\r\n  }\r\n  \r\n  @keyframes loading {\r\n    0% {\r\n      opacity: .0;\r\n      -webkit-transform: scale(0.15);\r\n              transform: scale(0.15);\r\n      box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);\r\n    }\r\n    50% {\r\n      opacity: 1;\r\n      -webkit-transform: scale(2);\r\n              transform: scale(2);\r\n      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n    }\r\n    100% {\r\n      opacity: .0;\r\n      -webkit-transform: scale(0.15);\r\n              transform: scale(0.15);\r\n      box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);\r\n    }\r\n  }\r\n   */\r\n\r\n\r\n\r\n   /* MY CSS */\r\n.py-2px{\r\n  padding-top: 2px;\r\n  padding-bottom: 2px;\r\n}", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map