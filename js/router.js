(function($) {
  
  CC.R = new (Backbone.Router.extend({
    
    routes: {
      'agent' : 'agent',
      'supervisor' : 'supervisor',
      'manager' : 'manager',
      'exec' : 'exec'
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
    
    exec: function() {
      new CC.V.ExecDashboard();
    }
    
  }))();
  
})(jQuery);