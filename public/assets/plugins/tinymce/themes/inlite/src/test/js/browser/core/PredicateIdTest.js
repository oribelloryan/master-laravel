test("browser/core/PredicateIdTest",["ephox/tinymce","tinymce/inlite/core/PredicateId"],function(e,t){var r=function(){var e=function(){return!0},r=function(){return!1},o=t.fromContextToolbars([{toolbar:"a b c",predicate:e,id:"a"},{toolbar:"d e",predicate:r,id:"b"}]);assert.eq([t.create("a",e),t.create("b",r)],o)};r()});