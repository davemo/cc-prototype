(function($) {

  CC.M = {};
  
  CC.M.ChartData = Backbone.Model.extend({
    
    defaults: {
      title: "My Chart",
      data: [
        ['Achieved', 0.5],
        ['Danger', 0.3],
        ['Below', 0.2]
      ]
    }
    
  });
  
  CC.M.Agent = Backbone.Model.extend({
    defaults: {
      name: "Brittney Briggs",
      data: {
        pie: Data.Piecharts,
        bar: Data.Briggs
      }
    }
  });


})(jQuery);