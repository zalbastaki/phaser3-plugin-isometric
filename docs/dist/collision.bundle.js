/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"collision": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/phaser3-plugin-isometric/dist";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/IsoCollisionExample.js","commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/IsoCollisionExample.js":
/*!************************************!*\
  !*** ./src/IsoCollisionExample.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _phaser = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n\nvar _phaser2 = _interopRequireDefault(_phaser);\n\nvar _phaser3PluginIsometric = __webpack_require__(/*! phaser3-plugin-isometric */ \"./node_modules/phaser3-plugin-isometric/dist/phaser-plugin-isometric.js\");\n\nvar _phaser3PluginIsometric2 = _interopRequireDefault(_phaser3PluginIsometric);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar IsoCollisionExample = function (_Scene) {\n  _inherits(IsoCollisionExample, _Scene);\n\n  function IsoCollisionExample() {\n    _classCallCheck(this, IsoCollisionExample);\n\n    var sceneConfig = {\n      key: 'IsoCollisionExample',\n      mapAdd: { isoPlugin: 'iso', isoPhysics: 'isoPhysics' }\n    };\n\n    return _possibleConstructorReturn(this, (IsoCollisionExample.__proto__ || Object.getPrototypeOf(IsoCollisionExample)).call(this, sceneConfig));\n  }\n\n  _createClass(IsoCollisionExample, [{\n    key: 'preload',\n    value: function preload() {\n      this.load.image('cube', '../dist/assets/cube.png');\n      this.load.scenePlugin({\n        key: 'IsoPlugin',\n        url: _phaser3PluginIsometric2.default,\n        sceneKey: 'iso'\n      });\n\n      this.load.scenePlugin({\n        key: 'IsoPhysics',\n        url: _phaser3PluginIsometric.IsoPhysics,\n        sceneKey: 'isoPhysics'\n      });\n    }\n  }, {\n    key: 'create',\n    value: function create() {\n      this.isoGroup = this.add.group();\n\n      // Apply some gravity on our cubes\n      this.isoPhysics.world.gravity.setTo(0, 0, -500);\n\n      this.isoPhysics.projector.origin.setTo(0.5, 0.3);\n\n      // Add some first cubes to our scene\n      this.spawnCubes();\n    }\n  }, {\n    key: 'update',\n    value: function update() {\n      // Collide cubes against each other\n      this.isoPhysics.world.collide(this.isoGroup);\n\n      // Moooore cuuuubes\n      if (this.input.activePointer.justDown) {\n        this.spawnCubes();\n      }\n    }\n  }, {\n    key: 'spawnCubes',\n    value: function spawnCubes() {\n      var cube = void 0;\n      for (var xx = 256; xx > 0; xx -= 64) {\n        for (var yy = 256; yy > 0; yy -= 64) {\n          // Add a cube which is way above the ground\n          cube = this.add.isoSprite(xx, yy, 600, 'cube', this.isoGroup);\n\n          // Enable the physics body on this cube\n          this.isoPhysics.world.enable(cube);\n\n          // Collide with the world bounds so it doesn't go falling forever or fly off the screen!\n          cube.body.collideWorldBounds = true;\n\n          // Add a full bounce on the x and y axes, and a bit on the z axis. \n          cube.body.bounce.set(1, 1, 0.2);\n\n          // Send the cubes off in random x and y directions! Wheee!\n          var randomX = Math.trunc(Math.random() * 100 - 50);\n          var randomY = Math.trunc(Math.random() * 100 - 50);\n          cube.body.velocity.setTo(randomX, randomY, 0);\n        }\n      }\n    }\n  }]);\n\n  return IsoCollisionExample;\n}(_phaser.Scene);\n\nvar config = {\n  type: _phaser2.default.AUTO,\n  width: 800,\n  height: 600,\n  pixelArt: true,\n  scene: IsoCollisionExample\n};\n\nnew _phaser.Game(config);\n\n//# sourceURL=webpack:///./src/IsoCollisionExample.js?");

/***/ })

/******/ });