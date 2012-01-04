(function($) {
  
  CC.V = {};
    
  CC.V.AgentDashboard = Backbone.View.extend({
    
    el: "#view",
    template: $("#agent-dashboard-tpl").html(),
    
    initialize: function() {
      $(this.el).html(this.template);
    }
    
    
  });
  
})(jQuery);