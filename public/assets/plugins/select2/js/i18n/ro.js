/*! Select2 4.0.3 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd;return e.define("select2/i18n/ro",[],function(){return{errorLoading:function(){return"Rezultatele nu au putut fi inc\u0103rcate."},inputTooLong:function(e){var n=e.input.length-e.maximum,t="V\u0103 rug\u0103m s\u0103 \u0219terge\u021bi"+n+" caracter";return 1!==n&&(t+="e"),t},inputTooShort:function(e){var n=e.minimum-e.input.length,t="V\u0103 rug\u0103m s\u0103 introduce\u021bi "+n+"sau mai multe caractere";return t},loadingMore:function(){return"Se \xeencarc\u0103 mai multe rezultate\u2026"},maximumSelected:function(e){var n="Ave\u021bi voie s\u0103 selecta\u021bi cel mult "+e.maximum;return n+=" element",1!==e.maximum&&(n+="e"),n},noResults:function(){return"Nu au fost g\u0103site rezultate"},searching:function(){return"C\u0103utare\u2026"}}}),{define:e.define,require:e.require}}();