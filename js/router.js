(function($) {
  
  CC.R = new (Backbone.Router.extend({
    
    routes: {
      'agent' : 'agent',
      'supervisor' : 'supervisor',
      'manager' : 'manager',
      'exec' : 'exec',
      'exec/:business' : 'exec'
    },
    
    agent: function() {
      new CC.V.AgentDashboard();
    },
    
    supervisor: function() {
      new CC.V.SupervisorDashboard();
    },
    
    manager: function() {
      new CC.V.ManagerDashboard();
    },
    
    exec: function(business) {
      new CC.V.ExecDashboard({
        business: business ? _.capitalize(business) : ""
      });
    }
    
  }))();
  
})(jQuery);