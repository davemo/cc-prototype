(function($) {
  
  CC.R = new (Backbone.Router.extend({
    
    routes: {
      'agent' : 'agent'
    },
    
    agent: function() {
      new CC.V.AgentDashboard();
    }
    
  }))();
  
})(jQuery);