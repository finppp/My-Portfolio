import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { AppContainer } from 'react-hot-loader';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root')
  );
};
registerServiceWorker();

// Render once
render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  });
}

if (typeof Object.assign != 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, "assign", {
    value: function assign(target, varArgs) { // .length of function is 2
      'use strict';
      if (target == null) { // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) { // Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true
  });
}

if (!Function.prototype.bind) {
   Function.prototype.bind = function(oThis) {
     if (typeof this !== 'function') {
         // closest thing possible to the ECMAScript 5
        // internal IsCallable function
   throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
}

var aArgs   = Array.prototype.slice.call(arguments, 1),
    fToBind = this,
    fNOP    = function() {},
    fBound  = function() {
      return fToBind.apply(this instanceof fNOP
             ? this
             : oThis,
             aArgs.concat(Array.prototype.slice.call(arguments)));
    };

if (this.prototype) {
  // Function.prototype doesn't have a prototype property
  fNOP.prototype = this.prototype;
}
fBound.prototype = new fNOP();

return fBound;
};
}

if (!Object.setPrototypeOf) {
  Object.setPrototypeOf = (function(Object, magic) {
    'use strict';
    var set;
    function checkArgs(O, proto) {
      if (typeof O !== 'object' || O === null) {
        throw new TypeError('can not set prototype on a non-object');
      }
      if (typeof proto !== 'object' && proto !== null) {
        throw new TypeError('can only set prototype to an object or null');
      }
    }
    function setPrototypeOf(O, proto) {
      checkArgs(O, proto);
      set.call(O, proto);
      return O;
    }
    try {
      // this works already in Firefox and Safari
      set = Object.getOwnPropertyDescriptor(Object.prototype, magic).set;
      set.call({}, null);
    } catch (o_O) {
      if (
        // IE < 11 cannot be shimmed
        Object.prototype !== {}[magic] ||
        // neither can any browser that actually
        // implemented __proto__ correctly
        // (all but old V8 will return here)
        {__proto__:null}.__proto__ === void 0
        // this case means null objects cannot be passed
        // through setPrototypeOf in a reliable way
        // which means here a **Sham** is needed instead
      ) {
        return;
      }
      // nodejs 0.8 and 0.10 are (buggy and..) fine here
      // probably Chrome or some old Mobile stock browser
      set = function(proto) {
        this[magic] = proto;
      };
      // please note that this will **not** work
      // in those browsers that do not inherit
      // __proto__ by mistake from Object.prototype
      // in these cases we should probably throw an error
      // or at least be informed about the issue
      setPrototypeOf.polyfill = setPrototypeOf(
        setPrototypeOf({}, null),
        Object.prototype
      ) instanceof Object;
      // setPrototypeOf.polyfill === true means it works as meant
      // setPrototypeOf.polyfill === false means it's not 100% reliable
      // setPrototypeOf.polyfill === undefined
      // or
      // setPrototypeOf.polyfill ==  null means it's not a polyfill
      // which means it works as expected
      // we can even delete Object.prototype.__proto__;
    }
    return setPrototypeOf;
  }(Object, '__proto__'));
}

// if (!global.Intl) {
//     // line below allows for code splitting
//     require.ensure([
//         'intl',
//         'intl/locale-data/jsonp/en.js'
//     ], function (require) {
//         // requires like this will just initialize them, and the modules set the globals
//         require('intl');
//         require('intl/locale-data/jsonp/en.js');
//     });
// }
