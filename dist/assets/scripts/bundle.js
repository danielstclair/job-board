(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

module.exports = React.createClass({
  displayName: "exports",

  render: function render() {
    return React.createElement(
      "header",
      null,
      React.createElement("img", { id: "logo", src: "assets/images/logo.png" }),
      React.createElement(
        "h1",
        null,
        "Fresh Jobs"
      ),
      React.createElement(
        "nav",
        null,
        React.createElement(
          "a",
          { href: "#" },
          "Nav Link 1"
        ),
        React.createElement(
          "a",
          { href: "#" },
          "Nav Link 2"
        ),
        React.createElement(
          "a",
          { href: "#" },
          "Nav Link 3"
        ),
        React.createElement(
          "a",
          { href: "#" },
          "Nav Link 4"
        )
      )
    );
  }
});

},{}],2:[function(require,module,exports){
'use strict';

function consoleIt() {
  console.log('oh shit, that\'s nice');
}
// module.exports = consoleIt;
consoleIt();

var NavComponent = require('./components/NavigationComponent.js');

var AppComponent = React.createClass({
  displayName: 'AppComponent',

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(NavComponent, null)
    );
  }
});

ReactDOM.render(React.createElement(AppComponent), document.getElementById('app'));

},{"./components/NavigationComponent.js":1}]},{},[2])


//# sourceMappingURL=maps/bundle.js.map
