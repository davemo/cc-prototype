(function() {
  
  var achieved = "#A9DBA9"; // green
  var danger   = "#FFE38D"; // yellow
  var below    = "#F0B4AF"; // red
  
  Data = {
    Briggs: {
      FCR: {
        title: "FCR",
        yAxis: {
          title: {
            text: '%'
          }
        },
        colors: [
          achieved,
          achieved
        ],
        data: [
          {name: 'Briggs', data: 79},
          {name: 'Team Agresta', data: 85}
        ]
      },
      CPLH: {
        title: "CPLH",
        yAxis: {
          title: {
            text: 'Count'
          }
        },
        colors: [
          danger,
          achieved
        ],
        data: [
          {name: 'Briggs', data: 3.4}, // count
          {name: 'Team Agresta', data: 7.1}
        ]
      },
      AHT: {
        title: "AHT", // time,
        yAxis: {
          title: {
            text: 'Seconds'
          }
        },
        colors: [
          danger,
          achieved
        ],
        data: [
          {name:'Briggs', data:420}, // seconds
          {name:'Team Agresta', data:336}
        ]
      },
      TLK: {
        title: "TLK", // time
        yAxis: {
          title: {
            text: 'Seconds'
          }
        },
        colors: [
          achieved,
          achieved
        ],
        data: [
          {name:'Briggs', data: 220}, // seconds
          {name:'Team Agresta', data: 240}
        ]
      },
      ACW: {
        title: "ACW", // time
        yAxis: {
          title: {
            text: 'Seconds'
          }
        },
        colors: [
          below,
          achieved
        ],
        data: [
          {name:'Briggs', data: 90},
          {name:'Team Agresta', data: 55}
        ]
      },
      XFER: {
        title: "XFER%", // %
        yAxis: {
          title: {
            text: '%'
          }
        },
        colors: [
          danger,
          danger
        ],
        data: [
          {name:'Briggs', data:15},
          {name:'Team Agresta', data:16}
        ]
      },
      QA: {
        title: "QA Score", // %
        yAxis: {
          title: {
            text: '%'
          }
        },
        colors: [
          achieved,
          achieved
        ],
        data: [
          {name:'Briggs', data:84},
          {name:'Team Agresta', data:89}
        ]
      },
      ADH: {
        title: "ADH", // %
        yAxis: {
          title: {
            text: '%'
          }
        },
        colors: [
          below,
          achieved
        ],
        data: [
          {name:'Briggs', data:80},
          {name:'Team Agresta', data:90}
        ]
      }
    },
    PieCharts: {
      FCR: {
        title: "FCR",
        data: [
          ['Achieved', 0.5],
          ['Danger', 0.3],
          ['Below', 0.2]
        ]
      },
      CPLH: {
        title: "CPLH",
        data: [
          ['Achieved', 0.33],
          ['Danger', 0.33],
          ['Below', 0.33]
        ]
      },
      AHT: {
        title: "AHT",
        data: [
          ['Achieved', 0.1],
          ['Danger', 0.5],
          ['Below', 0.4]
        ]
      },
      XFER: {
        title: "XFER%",
        data: [
          ['Achieved', 0.3],
          ['Danger', 0.3],
          ['Below', 0.3]
        ]
      },
      QA: {
        title: "QA Score",
        data: [
          ['Achieved', 0.3],
          ['Danger', 0.25],
          ['Below', 0.45]
        ]
      },
      ADH: {
        title: "ADH",
        data: [
          ['Achieved', 0.25],
          ['Danger', 0.45],
          ['Below', 0.30]
        ]
      }
    }
  };
  
})();