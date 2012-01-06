(function($) {
  
  CC = {};
  
  _.extend(CC, Backbone.Events);
  
  CC.bind("rendered", function() {
    $(".tabs").tabs();
    $( ".datepicker" ).datepicker({
      changeMonth: true,
      changeYear: true
		});
  });
  
  CC.bind("navigated", function(navItem) {
    $(".nav .active").removeClass("active");
    $(".nav").find("." + navItem).addClass("active"); 
  });
  
  Handlebars.registerPartial("filter", $("#filter-partial").html());
  Handlebars.registerPartial("team-filter", $("#team-filter-partial").html());
  
})(jQuery);