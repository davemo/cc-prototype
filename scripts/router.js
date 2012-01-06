(function($) {
  
  CC.R = new (Backbone.Router.extend({
    
    routes: {
      'agent' : 'agent',
      'supervisor' : 'supervisor',
      'supervisor/csr-detail' : 'csrDetail',
      'supervisor/team-detail' : 'teamDetail',      
      'supervisor/prescriptions' : 'sprescriptions',      
      'manager' : 'manager',
      'manager/team-detail' : 'managerTeamDetail',
      'manager/prescriptions' : 'mprescriptions',            
      'exec' : 'exec',
      'exec/:business' : 'exec'
    },
    
    agent: function() {
      new CC.V.AgentDashboard();
      CC.trigger("navigated", "agent");
    },
    
    supervisor: function() {
      new CC.V.SupervisorDashboard();
      CC.trigger("navigated", "supervisor");
    },
    
    sprescriptions: function() {
      new CC.V.Prescriptions();
      CC.trigger("navigated", "supervisor");
    },
    
    mprescriptions: function() {
      new CC.V.Prescriptions();
      CC.trigger("navigated", "manager");
    },
    
    csrDetail: function() {
      new CC.V.CSRDetail({ model: new CC.M.Agent() });
      CC.trigger("navigated", "supervisor");      
    },
    
    teamDetail: function() {
      new CC.V.TeamDetail();
      CC.trigger("navigated", "supervisor");      
    },
    
    managerTeamDetail: function() {
      new CC.V.ManagerTeamDetail();
      CC.trigger("navigated", "manager");      
    },
    
    manager: function() {
      new CC.V.ManagerDashboard();
      CC.trigger("navigated", "manager");      
    },
    
    exec: function(business) {
      new CC.V.ExecDashboard({
        business: business ? _.capitalize(business) : ""
      });
      CC.trigger("navigated", "executive");      
    }
    
  }))();
  
})(jQuery);