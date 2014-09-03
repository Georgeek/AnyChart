anychart.onDocumentReady(function() {
  var dataSet = new anychart.data.Set([
    ['P1', 297, 243, 235, 223],
    ['P2', 184, 255, 156, 249],
    ['P3', 136, 199, 177, 276],
    ['P4', 142, 186, 242, 249],
    ['P5', 228, 145, 267, 297]
  ]);

  //map data for the first series, take x from the zero column and value from the first column of data set
  var seriesData_1 = dataSet.mapAs({x: [0], value: [1]});

  //map data for the second series, take x from the zero column and value from the second column of data set
  var seriesData_2 = dataSet.mapAs({x: [0], value: [2]});

  //map data for the second series, take x from the zero column and value from the third column of data set
  var seriesData_3 = dataSet.mapAs({x: [0], value: [3]});

  //map data for the fourth series, take x from the zero column and value from the fourth column of data set
  var seriesData_4 = dataSet.mapAs({x: [0], value: [4]});


  var stage = acgraph.create('container', '100%', '100%');

  var background = stage.rect(0, 0, 600, 600).fill('blue .3');

  var hSplitter = new anychart.ui.Splitter();
  hSplitter.container(stage);
  hSplitter.bounds(0, 0, 600, 600);
  hSplitter.position(0.5);
  hSplitter.layout('horizontal');
  hSplitter.listen(anychart.ui.Splitter.CHANGE, function() {
    var leftHeight = hSplitter.getLeftBounds().height;
    barChart.bounds().height(leftHeight);

    var rightHeight = hSplitter.getRightBounds().height;
    var y = 600 - rightHeight;

    columnChart.bounds().top(y);
    columnChart.bounds().height(rightHeight);

    pieChart.bounds().top(y);
    pieChart.bounds().height(rightHeight);

    vSplitter.bounds().top(y);
    vSplitter.bounds().height(rightHeight);
    vSplitter.draw();
  });


  var vSplitter = new anychart.ui.Splitter();
  vSplitter.container(stage);
  vSplitter.bounds(hSplitter.getBottomBounds());
  vSplitter.position(0.5);
  vSplitter.listen(anychart.ui.Splitter.CHANGE, function() {
    columnChart.bounds(vSplitter.getLeftBounds());
    pieChart.bounds(vSplitter.getRightBounds());
  });





  //create bar chart
  var barChart = anychart.barChart();

  //force chart to stack values by Y scale.
  barChart.yScale().stackMode('percent');

  //set container id for the chart
  barChart.container(stage);
  barChart.bounds(hSplitter.getTopBounds());

  //set chart title text settings
  barChart.title().text('100% Stacked bar Chart');

  //set yAxis labels formatting, force it to add % to values
  barChart.yAxis(0).enabled(false);
  barChart.xAxis(0).title().enabled(false);

  //helper function to setup label settings for all series
  var setupSeriesLabels = function(series) {
    var seriesLabels = series.labels();
    seriesLabels.enabled(true);
    seriesLabels.position('center');
    seriesLabels.anchor('center');
    seriesLabels.fontColor('white');
    seriesLabels.fontWeight('bold');
    seriesLabels.textFormatter(function(info) {
      return Math.ceil(info.value / info.seriesSum * 100) + '%';
    });
  };

  //temp variable to store series instance
  var series;

  //create first series with mapped data
  series = barChart.bar(seriesData_1);
  setupSeriesLabels(series);

  //create second series with mapped data
  series = barChart.bar(seriesData_2);
  setupSeriesLabels(series);

  //create third series with mapped data
  series = barChart.bar(seriesData_3);
  setupSeriesLabels(series);

  //create fourth series with mapped data
  series = barChart.bar(seriesData_4);
  setupSeriesLabels(series);

  //initiate chart drawing

  var columnChart = anychart.columnChart();
  columnChart.title().text('P1 Category details');
  columnChart.container(stage);
  columnChart.bounds(vSplitter.getLeftBounds());
  columnChart.column(seriesData_1);
  columnChart.xAxis(0).title().enabled(false);
  columnChart.yAxis(0).title().enabled(false);

  var pieChart = anychart.pieChart(seriesData_2);
  pieChart.title().text('P2 Category details');
  pieChart.container(stage);
  pieChart.bounds(vSplitter.getRightBounds());
  pieChart.legend().enabled(false);

  barChart.draw();
  columnChart.draw();
  pieChart.draw();
  vSplitter.draw();
  hSplitter.draw();





});