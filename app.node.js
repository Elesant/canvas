module.exports =
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
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  __webpack_require__(15);

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _fastclick = __webpack_require__(16);

  var _fastclick2 = _interopRequireDefault(_fastclick);

  var _coreDispatcher = __webpack_require__(4);

  var _coreDispatcher2 = _interopRequireDefault(_coreDispatcher);

  var _router = __webpack_require__(14);

  var _router2 = _interopRequireDefault(_router);

  var _coreLocation = __webpack_require__(5);

  var _coreLocation2 = _interopRequireDefault(_coreLocation);

  var _constantsActionTypes = __webpack_require__(3);

  var _constantsActionTypes2 = _interopRequireDefault(_constantsActionTypes);

  var container = document.body;
  var context = {
    onSetTitle: function onSetTitle(value) {
      return document.title = value;
    },
    onSetMeta: function onSetMeta(name, content) {
      // Remove and create a new <meta /> tag in order to make it work
      // with bookmarks in Safari
      var elements = document.getElementsByTagName('meta');
      [].slice.call(elements).forEach(function (element) {
        if (element.getAttribute('name') === name) {
          element.parentNode.removeChild(element);
        }
      });
      var meta = document.createElement('meta');
      meta.setAttribute('name', name);
      meta.setAttribute('content', content);
      document.getElementsByTagName('head')[0].appendChild(meta);
    }
  };

  function run() {
    var currentPath = window.location.pathname || '/';
    _router2['default'].dispatch({ path: currentPath }, function (state, component) {
      _react2['default'].render(component, container);
    });

    _coreDispatcher2['default'].register(function (action) {
      if (action.type === _constantsActionTypes2['default'].CHANGE_LOCATION) {
        _router2['default'].dispatch({ path: action.path, context: context }, function (state, component) {
          _react2['default'].render(component, container);
        });
      }
    });
  }

  function handlePopState(event) {
    _coreLocation2['default'].navigateTo(window.location.pathname, { replace: !!event.state });
  }

  // Run the application when both DOM is ready
  // and page content is loaded
  new Promise(function (resolve) {
    if (window.addEventListener) {
      window.addEventListener('DOMContentLoaded', resolve);
      window.addEventListener('popstate', handlePopState);
    } else {
      window.attachEvent('onload', resolve);
      window.attachEvent('popstate', handlePopState);
    }
  }).then(function () {
    return _fastclick2['default'].attach(document.body);
  }).then(run);

/***/ },
/* 1 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _fbjsLibInvariant = __webpack_require__(18);

  var _fbjsLibInvariant2 = _interopRequireDefault(_fbjsLibInvariant);

  var _coreLocation = __webpack_require__(5);

  var _coreLocation2 = _interopRequireDefault(_coreLocation);

  function handleClick(event) {

    // If not left mouse click
    if (event.button !== 0) {
      return;
    }

    // If modified event
    if (event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) {
      return;
    }

    var el = event.currentTarget;

    (0, _fbjsLibInvariant2['default'])(el && el.nodeName === 'A', 'The target element must be a link.');

    // Rebuild path
    var path = el.pathname + el.search + (el.hash || '');

    event.preventDefault();
    _coreLocation2['default'].navigateTo(path);
  }

  exports['default'] = { handleClick: handleClick };
  module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _fbjsLibKeyMirror = __webpack_require__(19);

  var _fbjsLibKeyMirror2 = _interopRequireDefault(_fbjsLibKeyMirror);

  exports['default'] = (0, _fbjsLibKeyMirror2['default'])({
    CHANGE_LOCATION: null
  });
  module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _flux = __webpack_require__(20);

  var dispatcher = new _flux.Dispatcher();

  exports['default'] = dispatcher;
  module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _fbjsLibExecutionEnvironment = __webpack_require__(17);

  var _dispatcher = __webpack_require__(4);

  var _dispatcher2 = _interopRequireDefault(_dispatcher);

  var _constantsActionTypes = __webpack_require__(3);

  var _constantsActionTypes2 = _interopRequireDefault(_constantsActionTypes);

  var location = {

    navigateTo: function navigateTo(path, options) {
      if (_fbjsLibExecutionEnvironment.canUseDOM) {
        if (options && options.replace) {
          window.history.replaceState({}, document.title, path);
        } else {
          window.history.pushState({}, document.title, path);
        }
      }

      _dispatcher2['default'].dispatch({
        type: _constantsActionTypes2['default'].CHANGE_LOCATION,
        path: path
      });
    }

  };

  exports['default'] = location;
  module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function () {
    function _default() {
      _classCallCheck(this, _default);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Not Found'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'The page you\'re looking for was not found.'
          )
        );
      }
    }]);

    return _default;
  })();

  exports['default'] = _default;
  ;
  module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function () {
    function _default() {
      _classCallCheck(this, _default);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Error'
          ),
          _react2['default'].createElement(
            'pre',
            null,
            this.props.error ? this.props.error.message + '\n\n' + this.props.error.stack : 'An critical error occurred.'
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        error: _react.PropTypes.instanceOf(Error)
      },
      enumerable: true
    }]);

    return _default;
  })();

  exports['default'] = _default;
  ;
  module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var Layout = (function () {
    function Layout() {
      _classCallCheck(this, Layout);
    }

    _createClass(Layout, [{
      key: "render",
      value: function render() {
        return _react2["default"].createElement(
          "div",
          { className: "Layout" },
          this.props.children
        );
      }
    }], [{
      key: "propTypes",
      value: {
        children: _react.PropTypes.element.isRequired
      },
      enumerable: true
    }]);

    return Layout;
  })();

  exports["default"] = Layout;
  module.exports = exports["default"];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _utilsLink = __webpack_require__(2);

  var _utilsLink2 = _interopRequireDefault(_utilsLink);

  var _default = (function () {
    function _default() {
      _classCallCheck(this, _default);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'About Us'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          ),
          _react2['default'].createElement(
            'a',
            { href: '/', onClick: _utilsLink2['default'].handleClick },
            'Go to Home Page'
          ),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement(
            'a',
            { href: '/blog', onClick: _utilsLink2['default'].handleClick },
            'Go to Blog Page'
          )
        );
      }
    }]);

    return _default;
  })();

  exports['default'] = _default;
  ;
  module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _utilsLink = __webpack_require__(2);

  var _utilsLink2 = _interopRequireDefault(_utilsLink);

  var _default = (function () {
    function _default() {
      _classCallCheck(this, _default);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Blog'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          ),
          _react2['default'].createElement(
            'a',
            { href: '/blog/test-article-one', onClick: _utilsLink2['default'].handleClick },
            'Test Article One'
          ),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement(
            'a',
            { href: '/blog/test-article-two', onClick: _utilsLink2['default'].handleClick },
            'Test Article Two'
          ),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement(
            'a',
            { href: '/', onClick: _utilsLink2['default'].handleClick },
            'Go to Home Page'
          ),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement(
            'a',
            { href: '/about', onClick: _utilsLink2['default'].handleClick },
            'Go to About Page'
          )
        );
      }
    }]);

    return _default;
  })();

  exports['default'] = _default;
  ;
  module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function () {
    function _default() {
      _classCallCheck(this, _default);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Test Article 1'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })();

  exports['default'] = _default;
  ;
  module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function () {
    function _default() {
      _classCallCheck(this, _default);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Test Article 2'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })();

  exports['default'] = _default;
  ;
  module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _utilsLink = __webpack_require__(2);

  var _utilsLink2 = _interopRequireDefault(_utilsLink);

  var _default = (function () {
    function _default() {
      _classCallCheck(this, _default);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Home Page'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          ),
          _react2['default'].createElement(
            'a',
            { href: '/about', onClick: _utilsLink2['default'].handleClick },
            'Go to About Page'
          ),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement(
            'a',
            { href: '/blog', onClick: _utilsLink2['default'].handleClick },
            'Go to Blog Page'
          )
        );
      }
    }]);

    return _default;
  })();

  exports['default'] = _default;
  ;
  module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _reactRouting = __webpack_require__(21);

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsLayout = __webpack_require__(8);

  var _componentsLayout2 = _interopRequireDefault(_componentsLayout);

  var _pages404 = __webpack_require__(6);

  var _pages4042 = _interopRequireDefault(_pages404);

  var _pages500 = __webpack_require__(7);

  var _pages5002 = _interopRequireDefault(_pages500);

  var router = new _reactRouting.Router(function (on) {

    on('*', function callee$1$0(state, next) {
      var component;
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            context$2$0.next = 2;
            return regeneratorRuntime.awrap(next());

          case 2:
            component = context$2$0.sent;
            return context$2$0.abrupt('return', _react2['default'].createElement(
              _componentsLayout2['default'],
              null,
              component
            ));

          case 4:
          case 'end':
            return context$2$0.stop();
        }
      }, null, _this);
    });

    var Component404 = __webpack_require__(6);
    on('/404', function () {
      return _react2['default'].createElement(Component404, null);
    });
    var Component500 = __webpack_require__(7);
    on('/500', function () {
      return _react2['default'].createElement(Component500, null);
    });
    var Componentabout = __webpack_require__(9);
    on('/about', function () {
      return _react2['default'].createElement(Componentabout, null);
    });
    var Componentblogindex = __webpack_require__(10);
    on('/blog', function () {
      return _react2['default'].createElement(Componentblogindex, null);
    });
    var Componentblogtestarticleone = __webpack_require__(11);
    on('/blog/test-article-one', function () {
      return _react2['default'].createElement(Componentblogtestarticleone, null);
    });
    var Componentblogtestarticletwo = __webpack_require__(12);
    on('/blog/test-article-two', function () {
      return _react2['default'].createElement(Componentblogtestarticletwo, null);
    });
    var Componentindex = __webpack_require__(13);
    on('/', function () {
      return _react2['default'].createElement(Componentindex, null);
    });

    on('error', function (state, error) {
      return state.statusCode === 404 ? _react2['default'].createElement(
        App,
        { context: state.context, error: error },
        _react2['default'].createElement(_pages4042['default'], null)
      ) : _react2['default'].createElement(
        App,
        { context: state.context, error: error },
        _react2['default'].createElement(_pages5002['default'], null)
      );
    });
  });

  exports['default'] = router;
  module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports) {

  module.exports = require("babel/polyfill");

/***/ },
/* 16 */
/***/ function(module, exports) {

  module.exports = require("fastclick");

/***/ },
/* 17 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/ExecutionEnvironment");

/***/ },
/* 18 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/invariant");

/***/ },
/* 19 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/keyMirror");

/***/ },
/* 20 */
/***/ function(module, exports) {

  module.exports = require("flux");

/***/ },
/* 21 */
/***/ function(module, exports) {

  module.exports = require("react-routing");

/***/ }
/******/ ]);