!function(e){"use strict";var t=function(){};t.prototype.init=function(){e(".easy-pie-chart-1").easyPieChart({easing:"easeOutBounce",barColor:"#5d9cec",lineWidth:10,animate:1e3,scaleColor:!1,lineCap:"square",trackColor:"#e5e5e5",onStep:function(t,n,a){e(this.el).find(".percent").text(Math.round(a))}}),e(".easy-pie-chart-2").easyPieChart({easing:"easeOutBounce",barColor:"#fb6d9d",lineWidth:10,trackColor:!1,lineCap:"butt",onStep:function(t,n,a){e(this.el).find(".percent").text(Math.round(a))}}),e(".easy-pie-chart-3").easyPieChart({easing:"easeOutBounce",barColor:"#34d3eb",lineWidth:10,lineCap:"square",scaleColor:"transparent",onStep:function(t,n,a){e(this.el).find(".percent").text(Math.round(a))}}),e(".easy-pie-chart-4").easyPieChart({easing:"easeOutBounce",barColor:"#5fbeaa",lineWidth:10,onStep:function(t,n,a){e(this.el).find(".percent").text(Math.round(a))}})},e.EasyPieChart=new t,e.EasyPieChart.Constructor=t}(window.jQuery),function(e){"use strict";e.EasyPieChart.init()}(window.jQuery);