function invoiceFormatter(e,t){return'<a href="#" class="btn-link" > Order #'+e+"</a>"}function nameFormatter(e,t){return'<a href="#" class="btn-link" > '+e+"</a>"}function dateFormatter(e,t){t.id%2===0?"fa-star":"fa-user";return'<span class="text-muted"> '+e+"</span>"}function statusFormatter(e,t){var a;"Paid"==e?a="success":"Unpaid"==e?a="warning":"Shipped"==e?a="info":"Refunded"==e&&(a="danger");t.id%2===0?"fa-star":"fa-user";return'<div class="label label-table label-'+a+'"> '+e+"</div>"}function priceSorter(e,t){return e=+e.substring(1),t=+t.substring(1),e>t?1:t>e?-1:0}$(document).ready(function(){var e=$("#demo-custom-toolbar"),t=$("#demo-delete-row");e.on("check.bs.table uncheck.bs.table check-all.bs.table uncheck-all.bs.table",function(){t.prop("disabled",!e.bootstrapTable("getSelections").length)}),t.click(function(){var a=$.map(e.bootstrapTable("getSelections"),function(e){return e.id});e.bootstrapTable("remove",{field:"id",values:a}),t.prop("disabled",!0)})}),$(window).load(function(){$('[data-toggle="table"]').show()});