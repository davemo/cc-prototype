(function($) {
  
  CC = {};
  
  _.extend(CC, Backbone.Events);
  
  CC.bind("rendered", function() {
    $(".tabs").tabs();
  });
  
  CC.bind("navigated", function(navItem) {
    $(".nav .active").removeClass("active");
    $(".nav").find("." + navItem).addClass("active"); 
  });
  
})(jQuery);