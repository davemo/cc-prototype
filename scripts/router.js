(function($) {
  
  CC.R = new (Backbone.Router.extend({
    
    routes: {
      'agent' : 'agent',
      'supervisor' : 'supervisor',
      'supervisor/csr-detail' : 'csrDetail',
      'supervisor/team-detail' : 'teamDetail',      
      'manager' : 'manager',
      'manager/supervisors' : 'supervisorList',
      'exec' : 'exec',
      'exec/:business' : 'exec'
    },
    
    agent: function() {
      new CC.V.AgentDashboard();
    },
    
    supervisor: function() {
      new CC.V.SupervisorDashboard();
    },
    
    csrDetail: function() {
      new CC.V.CSRDetail({ model: new CC.M.Agent() });
    },
    
    teamDetail: function() {
      new CC.V.TeamDetail();
    },
    
    manager: function() {
      new CC.V.ManagerDashboard();
    },
    
    supervisorList: function() {
      new CC.V.SupervisorList();
    },
    
    exec: function(business) {
      new CC.V.ExecDashboard({
        business: business ? _.capitalize(business) : ""
      });
    }
    
  }))();
  
})(jQuery);