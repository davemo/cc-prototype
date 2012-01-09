(function($) {
  
  CC.V = {};
  
  CC.V.Page = Backbone.View.extend({
    el: "#view",
    initialize: function() {
      $(this.el).html(this.template());
      CC.trigger("rendered");
    }
  });
  
  CC.V.Analytics = CC.V.Page.extend({
    template: Handlebars.compile($("#analytics-tpl").html())
  });
  
  CC.V.Prescriptions = CC.V.Page.extend({
    template: Handlebars.compile($("#prescriptions-tpl").html())
  });
  
  CC.V.TeamDetail = CC.V.Page.extend({
    template: Handlebars.compile($("#team-detail-tpl").html())
  });
  
  CC.V.ManagerTeamDetail = CC.V.Page.extend({
    template: Handlebars.compile($("#team-detail-manager-tpl").html())
  });
  
  CC.V.CSRDetail = CC.V.Page.extend({
    template: Handlebars.compile($("#csr-detail-tpl").html()),
    initialize: function() {
      $(this.el).html(this.template(this.model.toJSON()));
      CC.trigger("rendered");
      this.lineGraphs();
    },
    
    lineGraphs: function() {
      // applied speech analytics
      this.$(".line-graphs").prepend(new CC.V.LineChart({
        className: "line-chart span8",        
        title: "Applied Speech Analytics",
        yAxis: { title: { text: '%' } },
        xAxis: {type: 'datetime', title: {text: null} },
        series: [{
          name: "Discovery", 
          data: [17, 18, 19, 20, 21, 22, 49, 21, 20, 19, 18, 17],
          pointInterval: 24 * 3600 * 1000,
          pointStart: Date.UTC(2011, 11, 01)
        }, {
          name: "FCR", 
          data: [95, 94, 93, 92, 91, 90, 80, 90, 91, 92, 93, 95],
          pointInterval: 24 * 3600 * 1000,
          pointStart: Date.UTC(2011, 11, 01)
        }]
      }).render());
      
      // scorecard
      this.$(".line-graphs").prepend(new CC.V.LineChart({
        className: "line-chart span8",
        title: "Call Flow",
        xAxis: { categories: ['G', 'E', 'D', 'A', 'C'] },
        yAxis: { title: { text: '%' } },
        series: [{ name: "Brittney Briggs", data: [15, 58, 54, 72, 93]}, { name: "Ideal", data: [10, 20, 25, 55, 95]}]
      }).render());
      
      // fcr
      this.$(".line-graphs").prepend(new CC.V.LineChart({
        className: "line-chart span8",
        title: "FCR",
        xAxis: {
           type: 'datetime',
           title: {
              text: null
           }
        },
        yAxis: {
           title: {
              text: '%'
           }
        },
        series: [{
          name: "Brittney Briggs",
          pointInterval: 24 * 3600 * 1000,
          pointStart: Date.UTC(2011, 11, 01),
          data: [85, 83, 80, 79, 80, 87, 100, 78, 81, 92, 81, 79]        
        }]
      }).render());
    }
  });
  
  CC.V.AgentDashboard = CC.V.Page.extend({
    template: Handlebars.compile($("#agent-dashboard-tpl").html()),
    initialize: function() {
      $(this.el).html(this.template);
      CC.trigger("rendered");
      this.barGraphs(Data.Briggs);
    },
  
    barGraphs: function(data) {
      var self = this;
      _(data).each(function(modelData) {
        var v = new CC.V.BarChart({model: new CC.M.ChartData(modelData), xAxis: { categories: [ 'Briggs vs Team' ] } });
        self.$(".bar-charts").append(v.render());
      });
    }
  });
  
  CC.V.SupervisorDashboard = CC.V.Page.extend({
    template: Handlebars.compile($("#supervisor-dashboard-tpl").html()),
    initialize: function() {
      $(this.el).html(this.template);
      CC.trigger("rendered");
      this.pieGraphs();
      this.barGraphs(Data.Team);
    },
    
    barGraphs: function(data) {
      var self = this;
      _(data).each(function(modelData) {
        var v = new CC.V.BarChart({model: new CC.M.ChartData(modelData), xAxis: { categories: [ 'Goal vs Team' ] }});
        self.$(".bar-charts").append(v.render());
      });
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
    template: Handlebars.compile($("#manager-dashboard-tpl").html()),
    initialize: function() {
      $(this.el).html(this.template);
      CC.trigger("rendered");
      this.pieGraphs();
      this.barGraphs(Data.Team);
    },
    
    barGraphs: function(data) {
      var self = this;
      _(data).each(function(modelData) {
        var v = new CC.V.BarChart({model: new CC.M.ChartData(modelData), xAxis: { categories: [ 'Goal vs Team' ] }});
        self.$(".bar-charts").append(v.render());
      });
    },
    
    pieGraphs: function() {
      var self = this;
      _(Data.PieCharts).each(function(modelData) {
        var v = new CC.V.PieChart({ model: new CC.M.ChartData(modelData), modal: CC.V.TeamModal });
        self.$(".pie-charts").append(v.render());
      });
    }
  });  
  
  CC.V.ExecDashboard = CC.V.Page.extend({
    template: Handlebars.compile($("#exec-dashboard-tpl").html()),
    initialize: function(options) {
      $(this.el).html(this.template({ business: options.business }));
      CC.trigger("rendered");
    }
  });
  
  CC.V.LineChart = Backbone.View.extend({
    className: "line-chart span5",
    initialize: function(options) {
      var self = this;
      this.chart = new Highcharts.Chart({
        chart: {
          renderTo: self.el
        },
        xAxis: options.xAxis,
        yAxis: options.yAxis,
        title: {
          text: options.title,
        },
        series: options.series
      });
    },
    render: function() {
      return this.el;
    } 
  });
  
  CC.V.BarChart = Backbone.View.extend({
    className: "bar-chart span3",
    initialize: function(options) {
      var self = this;
      var percentage = self.model.get("yAxis").title.text === '%';
      this.chart = new Highcharts.Chart({
        chart: {
          renderTo: self.el,
          defaultSeriesType: 'column'
        },
        colors: self.model.get("colors"),
        yAxis: self.model.get("yAxis"),
        xAxis: options.xAxis,
        title: {
          text: self.model.get("title")
        },
        tooltip: {
          formatter: function() {
            return this.series.name + ' ' + this.y + (percentage ? '%' : "");
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
    initialize: function(options) {
      _.bindAll(this);
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
      var modalView = this.options.modal || CC.V.CSRModal;
      new modalView({
        className: e.point.name
      });
    }
  });
  
  CC.V.FindCallsModal = Backbone.View.extend({
    el: "#find-calls-modal",
    initialize: function() {
      $(this.el).modal({show:true, backdrop: true});
    }
  });
  
  CC.V.TeamModal = Backbone.View.extend({
    el: "#team-numbers-aggregate",
    events: {
      'click .detail-view' : 'jumpToTeamDetail'
    },
    initialize: function(options) {
      $(this.el).modal({show:true, backdrop: true});
    },
    jumpToTeamDetail: function(e) {
      e.preventDefault();
      $(this.el).modal("hide");
      Backbone.history.navigate("manager/team-detail", true);
    }
  });
  
  CC.V.CSRModal = Backbone.View.extend({
    el: "#csr-numbers-aggregate",
    events: {
      'click .detail-view' : 'jumpToCsrDetail'
    },
    initialize: function(options) {
      this.$(".dynamic").attr("class", "dynamic " + options.className.toLowerCase());
      $(this.el).modal({show:true, backdrop: true});
    },
    jumpToCsrDetail: function(e) {
      e.preventDefault();
      $(this.el).modal("hide");
      Backbone.history.navigate("supervisor/csr-rca", true);
    }
  });
  
})(jQuery);