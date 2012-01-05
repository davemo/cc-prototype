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
    template: $("#agent-dashboard-tpl").html(),
    initialize: function() {
      $(this.el).html(this.template);
      CC.trigger("rendered");
      this.barGraphs();
    },
  
    barGraphs: function() {
      var self = this;
      _(Data.Briggs).each(function(modelData) {
        var v = new CC.V.BarChart({model: new CC.M.ChartData(modelData) });
        self.$(".bar-charts").append(v.render());
      });
    }
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
  
  CC.V.BarChart = Backbone.View.extend({
    className: "bar-chart span3",
    initialize: function() {
      var self = this;
      var percentage = self.model.get("yAxis").title.text === '%';
      this.chart = new Highcharts.Chart({
        chart: {
          renderTo: self.el,
          defaultSeriesType: 'column'
        },
        colors: self.model.get("colors"),
        yAxis: self.model.get("yAxis"),
        xAxis: {
          categories: [
            'Briggs vs Team' 
          ]
        },
        title: {
          text: self.model.get("title")
        },
        tooltip: {
          formatter: function() {
            var f = "";
            if(percentage) {
              f = this.series.name + ' ' + this.y + '%';
            }
            
            if(time) {
              f = this.series.name + ' ' + this.y / 
            }
             
          }
        },
        plotOptions: {
           column: {
              pointPadding: 0.2,
              borderWidth: 0,
              showInLegend: false
           },
        },
        series: self.model.get("data")
      });
    },
    render: function() {
      return this.el;
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
        colors: [
          "#A9DBA9",   // achieved green
          "#FFE38D",  // danger yello
          "#F0B4AF"   // below red
        ],
        title: {
          text: self.model.get("title")
        },
        tooltip: {
          formatter: function() {
            return this.percentage +' %';
          }
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: false
            },
            showInLegend: false,
            events: {
              click: self.modal
            }
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
    },
    
    modal: function(e) {
      new CC.V.CSRModal({
        className: e.point.name
      });
    }
  });
  
  CC.V.CSRModal = Backbone.View.extend({
    el: "#csr-numbers-aggregate",
    initialize: function(options) {
      this.$(".dynamic").attr("class", "dynamic " + options.className.toLowerCase());
      $(this.el).modal({show:true, backdrop: true});
    }
  });
  
})(jQuery);