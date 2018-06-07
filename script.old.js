var FusionCharts = require("fusioncharts");
require("fusioncharts/fusioncharts.charts")(FusionCharts);
require('fusioncharts/fusioncharts.powercharts')(FusionCharts);
require('fusioncharts/fusioncharts.widgets')(FusionCharts);
require('fusioncharts/fusioncharts.zoomscatter')(FusionCharts);
require("fusioncharts/fusioncharts.treemap")(FusionCharts);
require('fusioncharts/fusioncharts.gantt')(FusionCharts);
require('fusioncharts/fusioncharts.maps')(FusionCharts);
require("fusionmaps/maps/fusioncharts.abra")(FusionCharts);
var dataSourceList = require('./data-folder/data-source');
// Charts
// Column2d
var chart = new FusionCharts ({
   "type": "column2d",
   "width": "500",
   "height": "300",
   "dataFormat": "json",
   "dataSource": dataSourceList.column2d
}).render("chartContainer1");

// Pie2d 
var chart2 = new FusionCharts ({
  "type": "pie2d",
  "width": "500",
  "height": "300",
  "dataFormat": "json",
  "dataSource": dataSourceList.pie2d
}).render("chartContainer2");

// Powercharts
var pchart1 = new FusionCharts({
  "type": 'candlestick',
  "width": "500",
  "height": "300",
  "dataFormat": "json",
  "dataSource": dataSourceList.candlestick
}).render('pchart1');


// Widgets

var  widget1 =   new  FusionCharts({
  "type" :  "angulargauge",
  "renderAt" :  "chart-container",
  "width" :  "400",
  "height" :  "250",
  "dataFormat" :  "json",
  "dataSource" :  dataSourceList.angulargauge
}).render('widget1');


// Zoomscatter

var zoomscatter = new FusionCharts({
  type: 'zoomscatter',
  width: "400",
  height: '250',
  dataFormat: 'json',
  dataSource: dataSourceList.zoomscatter
}).render('zoomscatter');

// Treemap

var treemap = new FusionCharts({
  type: 'treemap',
  width: '550',
  height: '350',
  dataFormat: 'json',
  dataSource: dataSourceList.treemap
}).render('treemap');

// Gantt Charts
var gantt = new FusionCharts({
  type:'gantt',
  width: '750',
  height: '500',
  dataFormat: 'json',
  dataSource: dataSourceList.gantt
}).render('gantt');

// FusionMaps

var abraMap = new FusionCharts ({
  "type": "abra",
  "width": "500",
  "height": "300",
  "dataFormat": "json",
  "dataSource": {
    chart:{}
  }
}).render("map");