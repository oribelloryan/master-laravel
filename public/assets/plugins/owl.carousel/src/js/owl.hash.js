!function(t,e,s,i){"use strict";var n=function(s){this._core=s,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":t.proxy(function(s){s.namespace&&"URLHash"===this._core.settings.startPosition&&t(e).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":t.proxy(function(e){if(e.namespace){var s=t(e.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");if(!s)return;this._hashes[s]=e.content}},this),"changed.owl.carousel":t.proxy(function(s){if(s.namespace&&"position"===s.property.name){var i=this._core.items(this._core.relative(this._core.current())),n=t.map(this._hashes,function(t,e){return t===i?e:null}).join();if(!n||e.location.hash.slice(1)===n)return;e.location.hash=n}},this)},this._core.options=t.extend({},n.Defaults,this._core.options),this.$element.on(this._handlers),t(e).on("hashchange.owl.navigation",t.proxy(function(t){var s=e.location.hash.substring(1),n=this._core.$stage.children(),o=this._hashes[s]&&n.index(this._hashes[s]);o!==i&&o!==this._core.current()&&this._core.to(this._core.relative(o),!1,!0)},this))};n.Defaults={URLhashListener:!1},n.prototype.destroy=function(){var s,i;t(e).off("hashchange.owl.navigation");for(s in this._handlers)this._core.$element.off(s,this._handlers[s]);for(i in Object.getOwnPropertyNames(this))"function"!=typeof this[i]&&(this[i]=null)},t.fn.owlCarousel.Constructor.Plugins.Hash=n}(window.Zepto||window.jQuery,window,document);