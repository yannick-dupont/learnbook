const dataSource = {
  chart: {
    caption: "Flare Data Store Segregation",
    subcaption: "Cliquez pour plus de détails",
    showPlotBorder: "1",
    baseFontColor: "ffffff",
    tooltipcolor: "000000",
    innerRadius: "10",
    theme: "fusion"
  },
  data: [
    {
      id: 1,
      name: "Numérique",
      value: 1
    },
    
    {
      id: 2,
      name: "Connaissances",
      value: 1
    },
    {
      id: 3,
      name: "Techniques",
      value: 1
    },

    {
      id: 4,
      name: "Attitude",
      value: 1
    }, {
      id: 5,
      name: "Stratégies",
      value: 1
    },
    {
      id: 20,
      parent: 2,
      name: "Brainstorm",
      value: 1
    },
    {
      id: 21,
      parent: 2,
      name: "Pensée Design",
      value: 1
    },
    {
      id: 200,
      parent: 20,
      name: "L'élève connait ce qu'est la pensée design.",
      value: 1
    },
    {
      id: 201,
      parent: 20,
      name: "L'élève connait la définition d'un problème.",
      value: 1
    },

  ]
};

FusionCharts.ready(function() {
  var myChart = new FusionCharts({
    type: "sunburst",
    renderAt: "chart-container",
    width: "100%",
    height: "100%",
    dataFormat: "json",
    dataSource
  }).render();
});