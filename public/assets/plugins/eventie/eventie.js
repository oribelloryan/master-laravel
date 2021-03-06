/*!
 * eventie v1.0.6
 * event binding helper
 *   eventie.bind( elem, 'click', myFn )
 *   eventie.unbind( elem, 'click', myFn )
 * MIT license
 */
!function(e){"use strict";function n(n){var t=e.event;return t.target=t.target||t.srcElement||n,t}var t=document.documentElement,o=function(){};t.addEventListener?o=function(e,n,t){e.addEventListener(n,t,!1)}:t.attachEvent&&(o=function(e,t,o){e[t+o]=o.handleEvent?function(){var t=n(e);o.handleEvent.call(o,t)}:function(){var t=n(e);o.call(e,t)},e.attachEvent("on"+t,e[t+o])});var c=function(){};t.removeEventListener?c=function(e,n,t){e.removeEventListener(n,t,!1)}:t.detachEvent&&(c=function(e,n,t){e.detachEvent("on"+n,e[n+t]);try{delete e[n+t]}catch(o){e[n+t]=void 0}});var i={bind:o,unbind:c};"function"==typeof define&&define.amd?define(i):"object"==typeof exports?module.exports=i:e.eventie=i}(window);