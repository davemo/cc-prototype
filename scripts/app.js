(function($) {
  
  CC = {};
  
  _.extend(CC, Backbone.Events);
  
  CC.bind("rendered", function() {
    $(".tabs").tabs();
  });
  
})(jQuery);