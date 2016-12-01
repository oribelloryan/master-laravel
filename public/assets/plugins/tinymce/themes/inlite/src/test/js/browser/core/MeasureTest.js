asynctest("browser/core/MeasureTest",["ephox.mcagar.api.TinyLoader","tinymce/inlite/core/Measure","ephox.agar.api.Pipeline","ephox.mcagar.api.TinyApis","ephox.agar.api.Step","ephox.agar.api.Chain","ephox.agar.api.UiFinder","ephox.agar.api.Assertions"],function(e,t,n,a,r,i,s,c){var o=arguments[arguments.length-2],u=arguments[arguments.length-1],p=function(e,t,n){return t>=e.x&&t<=e.x+e.w&&n>=e.y&&n<=e.y+e.h},h=function(e,t){return p(e,t.x,t.y)&&p(e,t.x+t.w,t.y+t.h)},g=function(e,n){return r.sync(function(){var a=n(),r=t.getPageAreaRect(e),i=t.getContentAreaRect(e);c.assertEq("Rect is not in page area rect",h(r,a),!0),c.assertEq("Rect is not in content area rect",h(i,a),!0),c.assertEq("Rect should have width",a.w>0,!0),c.assertEq("Rect should have height",a.h>0,!0)})},x=function(e,n){return function(){var a=e.dom.select(n)[0],r=t.getElementRect(e,a);return r}},l=function(e){return function(){var n=t.getSelectionRect(e);return n}};e.setup(function(e,t,r){var i=a(e);n.async({},[i.sSetContent('<p>a</p><div style="width: 50px; height: 300px">b</div><p>c</p>'),g(e,x(e,"p:nth-child(1)")),i.sSetCursor([0,0],0),g(e,l(e))],t,r)},{inline:!0},o,u)});