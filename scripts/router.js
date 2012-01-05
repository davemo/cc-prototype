(function($) {
  
  CC.R = new (Backbone.Router.extend({
    
    routes: {
      'agent' : 'agent',
      'supervisor' : 'supervisor',
      'supervisor/csr-detail' : 'csrDetail',
      'supervisor/team-detail' : 'teamDetail',      
      'manager' : 'manager',
      'manager/supervisors' : 'supervisorList',
      'manager/team-detail' : 'managerTeamDetail',
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
    
    supervisorList: function() {
      new CC.V.SupervisorList();
      CC.trigger("navigated", "supervisor");      
    },
    
    exec: function(business) {
      new CC.V.ExecDashboard({
        business: business ? _.capitalize(business) : ""
      });
      CC.trigger("navigated", "executive");      
    }
    
  }))();
  
})(jQuery);