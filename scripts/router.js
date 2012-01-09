(function($) {
  
  CC.R = new (Backbone.Router.extend({
    
    routes: {
      'agent' : 'agent',
      'supervisor' : 'supervisor',
      'supervisor/csr-detail' : 'csrDetail',
      'supervisor/team-detail' : 'teamDetail',      
      'supervisor/prescriptions' : 'sprescriptions',
      'supervisor/analytics' : 'sanalytics',      
      'manager' : 'manager',
      'manager/team-detail' : 'managerTeamDetail',
      'manager/prescriptions' : 'mprescriptions',            
      'manager/analytics' : 'manalytics',
      'exec' : 'exec',
      'exec/analytics' : 'eanalytics',      
      'exec/:business' : 'exec'
    },
    
    agent: function() {
      new CC.V.AgentDashboard();
      CC.trigger("navigated", "agent");
    },
    
    sanalytics: function() {
      new CC.V.Analytics();
      CC.trigger("navigated", "supervisor");
    },
    
    manalytics: function() {
      new CC.V.Analytics();
      CC.trigger("navigated", "manager");
    },
    
    eanalytics: function() {
      new CC.V.Analytics();
      CC.trigger("navigated", "executive");
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