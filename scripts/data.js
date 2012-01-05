(function() {
  
  var achieved = "#A9DBA9"; // green
  var danger   = "#FFE38D"; // yellow
  var below    = "#F0B4AF"; // red
  
  Data = {
    Team: {
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
          {name: 'Goal', data: 80},
          {name: 'Team Agresta', data: 90}
        ]
      },
      CSAT: {
        title: "CSAT", // %
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
          {name:'Briggs', data:20},
          {name:'Team Agresta', data:73}
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
          {name:'Goal', data:92},
          {name:'Team Agresta', data:89}
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
          achieved,
          achieved
        ],
        data: [
          {name:'Goal', data:315}, // seconds
          {name:'Team Agresta', data:225}
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
          {name:'Goal', data: 270}, // seconds
          {name:'Team Agresta', data: 180}
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
          achieved,
          achieved
        ],
        data: [
          {name:'Goal', data: 45},
          {name:'Team Agresta', data: 30}
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
          achieved,
          achieved
        ],
        data: [
          {name:'Goal', data:10},
          {name:'Team Agresta', data:12}
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
          achieved,
          achieved
        ],
        data: [
          {name: 'Goal', data: 7}, // count
          {name: 'Team Agresta', data: 11.5}
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
          achieved,
          achieved
        ],
        data: [
          {name:'Goal', data:90},
          {name:'Team Agresta', data:95}
        ]
      }
    },
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
      CSAT: {
        title: "CSAT", // %
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
          {name:'Briggs', data:20},
          {name:'Team Agresta', data:73}
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
      },
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
      CSAT: {
        title: "CSAT",
        data: [
          ['Achieved', 0.25],
          ['Danger', 0.45],
          ['Below', 0.30]
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
      AHT: {
        title: "AHT",
        data: [
          ['Achieved', 0.1],
          ['Danger', 0.5],
          ['Below', 0.4]
        ]
      },
      TLK: {
        title: "TLK",
        data: [
          ['Achieved', 0.15],
          ['Danger', 0.35],
          ['Below', 0.5]
        ]
      },
      ACW: {
        title: "ACW",
        data: [
          ['Achieved', 0.2],
          ['Danger', 0.2],
          ['Below', 0.6]
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
      CPLH: {
        title: "CPLH",
        data: [
          ['Achieved', 0.33],
          ['Danger', 0.33],
          ['Below', 0.33]
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