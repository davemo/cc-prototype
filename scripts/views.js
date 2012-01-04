(function($) {
  
  CC.V = {};
  
  CC.V.Page = Backbone.View.extend({
    el: "#view",
    initialize: function() {
      $(this.el).html(this.template);
      CC.trigger("rendered");
    }
  });
  
  CC.V.AgentDashboard = CC.V.Page.extend({
    template: $("#agent-dashboard-tpl").html()
  });
  
  CC.V.SupervisorDashboard = CC.V.Page.extend({
    template: $("#supervisor-dashboard-tpl").html(),
    initialize: function() {
      $(this.el).html(this.template);
      CC.trigger("rendered");
      this.pieGraphs(); 
    },
    
    pieGraphs: function() {
      var self = this;
      _(Data.PieCharts).each(function(modelData) {
        var v = new CC.V.PieChart({ model: new CC.M.ChartData(modelData) });
        self.$(".pie-charts").append(v.render());
      });
    }
  });
  
  CC.V.ManagerDashboard = CC.V.Page.extend({
    template: $("#manager-dashboard-tpl").html()
  });  
  
  CC.V.ExecDashboard = CC.V.Page.extend({
    template: Handlebars.compile($("#exec-dashboard-tpl").html()),
    initialize: function(options) {
      $(this.el).html(this.template({ business: options.business }));
      CC.trigger("rendered");
    }
  });
  
  CC.V.PieChart = Backbone.View.extend({
    className: "pie-chart span2",
    initialize: function() {
      var self = this;
      this.chart = new Highcharts.Chart({
        chart: {
          renderTo: self.el,
        },
        title: {
          text: self.model.get("title")
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: false
            },
            showInLegend: false
          }
        },
        series: [{
          type: 'pie',
          name: self.model.get("title"),
          data: self.model.get("data")
        }]
      });
    },
    render: function() {
      return this.el;
    }
  });
  
})(jQuery);