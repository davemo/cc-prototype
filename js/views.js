(function($) {
  
  CC.V = {};
  
  CC.V.Page = Backbone.View.extend({
    el: "#view",
    initialize: function() {
      $(this.el).html(this.template);
    }
  });
  
  CC.V.AgentDashboard = CC.V.Page.extend({
    template: $("#agent-dashboard-tpl").html()
  });
  
  CC.V.SupervisorDashboard = CC.V.Page.extend({
    template: $("#supervisor-dashboard-tpl").html()
  });  
  
})(jQuery);