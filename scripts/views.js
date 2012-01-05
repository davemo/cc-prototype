(function($) {
  
  CC.V = {};
  
  CC.V.Page = Backbone.View.extend({
    el: "#view",
    initialize: function() {
      $(this.el).html(this.template);
      CC.trigger("rendered");
    }
  });
  
  CC.V.TeamDetail = CC.V.Page.extend({
    template: $("#team-detail-tpl").html()
  });
  
  CC.V.CSRDetail = CC.V.Page.extend({
    template: Handlebars.compile($("#csr-detail-tpl").html()),
    initialize: function() {
      $(this.el).html(this.template(this.model.toJSON()));
      CC.trigger("rendered");
      this.lineGraphs();
    },
    
    lineGraphs: function() {
      // fcr
      this.$(".line-graphs").append(new CC.V.LineChart({
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

      // scorecard
      this.$(".line-graphs").append(new CC.V.LineChart({
        title: "Call Flow",
        xAxis: { categories: ['Open', 'Discover', 'Solution', 'Resolution'] },
        yAxis: { title: { text: '%' } },
        series: [{ name: "Brittney Briggs", data: [15, 58, 54, 93]}, { name: "Ideal", data: [10, 20, 45, 95]}]
      }).render());
      
      // aht
      this.$(".line-graphs").append(new CC.V.LineChart({
        title: "AHT",
        xAxis: {
           type: 'datetime',
           title: {
              text: null
           }
        },
        yAxis: {
           title: {
              text: 'Seconds'
           }
        },
        series: [{
          name: "Brittney Briggs",
          pointInterval: 24 * 3600 * 1000,
          pointStart: Date.UTC(2011, 11, 01),
          data: [425, 409, 330, 500, 495, 415, 460, 1200, 400, 500, 515, 425]        
        }]
      }).render());
      
      
      // applied speech analytics
      this.$(".line-graphs").append(new CC.V.LineChart({
        title: "Applied Speech Analytics",
        xAxis: { categories: ['G', 'E', 'D', 'A', 'A','C'] },
        yAxis: { title: { text: '%' } },
        series: [{ name: "Discovery", data: [20, 22, 49, 49, 22, 20]}, { name: "FCR", data: [95, 90, 80, 80, 90, 95]}]
      }).render());
    }
  });
  
  CC.V.AgentDashboard = CC.V.Page.extend({
    template: $("#agent-dashboard-tpl").html(),
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
    template: $("#supervisor-dashboard-tpl").html(),
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
    template: $("#manager-dashboard-tpl").html(),
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
  
  CC.V.SupervisorList = CC.V.Page.extend({
    template: $("#supervisor-list-tpl").html()
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
    events: {
      'click .detail-view' : 'jumpToTeamDetail'
    },
    initialize: function(options) {
      this.$(".dynamic").attr("class", "dynamic " + options.className.toLowerCase());
      $(this.el).modal({show:true, backdrop: true});
    },
    jumpToTeamDetail: function() {
      $(this.el).modal("hide");
      Backbone.history.navigate("supervisor/team-detail", true);
    }
  });
  
})(jQuery);