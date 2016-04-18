/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var snippets = __webpack_require__(1);

	(function (window, document, undefined) {
	  var chunkArrayInGroups = snippets.chunkArrayInGroups(['a', 'b', 'c', 'd'], 2);
	  var confirmEnding = snippets.confirmEnding('hello', 'o');

	  console.log(chunkArrayInGroups);
	  console.log(confirmEnding);
	})(window, document);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	  chunkArrayInGroups: __webpack_require__(2),
	  confirmEnding: __webpack_require__(3)
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Write a function that splits an array (first argument) into groups the length of size (second argument)
	 * and returns them as a two-dimensional array.
	 */
	function chunkArrayInGroups(arr, size) {
	  var temp = [];
	  var chunk = [];

	  temp = arr.slice(0, size);

	  chunk.push(temp);

	  return chunk;
	}

	module.exports = chunkArrayInGroups;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Check if a string (first argument, str) ends with the given target string (second argument, target).
	 */
	function confirmEnding(str, target) {
	  var i;
	  var match = false;

	  target = target.split('').reverse().join('');

	  for (i = 0; i < target.length; i++) {
	    match = target[i] === str[str.length - 1 - i];
	  }

	  return match;
	}

	module.exports = confirmEnding;

/***/ }
/******/ ]);