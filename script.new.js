import FusionCharts from 'fusioncharts/core';
import Column2d from 'fusioncharts/viz/column2d';
import Pie2d from 'fusioncharts/viz/pie2d';
import CandleStick from 'fusioncharts/viz/candlestick';
import AngularGauge from 'fusioncharts/viz/angulargauge';
import ZoomScatter from 'fusioncharts/viz/zoomscatter';
import TreeMap from 'fusioncharts/viz/treemap';
import Gantt from 'fusioncharts/viz/gantt';
import Maps from 'fusioncharts/maps/index';
import Abra from 'fusionmaps/maps/es/fusioncharts.abra.js';


var dataSourceList = require('./data-folder/data-source.js');
FusionCharts.addDep(Column2d);
FusionCharts.addDep(Pie2d);
FusionCharts.addDep(CandleStick);
FusionCharts.addDep(AngularGauge);
FusionCharts.addDep(ZoomScatter);
FusionCharts.addDep(TreeMap);
FusionCharts.addDep(Gantt);
FusionCharts.addDep(Maps);
FusionCharts.addDep(Abra);




var column2d = new FusionCharts({
  "type": "column2d",
  "width": "500",
  "height": "300",
  "dataFormat": "json",
  "dataSource": dataSourceList.column2d
}).render('chartContainer1');

// Charts
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

// var treemap = new FusionCharts({
//   type: 'treemap',
//   width: '550',
//   height: '350',
//   dataFormat: 'json',
//   dataSource: dataSourceList.treemap
// }).render('treemap');

// Gantt Charts
var gantt = new FusionCharts({
  type:'gantt',
  width: '750',
  height: '500',
  dataFormat: 'json',
  dataSource: dataSourceList.gantt
}).render('gantt');


var abraMap = new FusionCharts ({
  "type": "abra",
  "width": "500",
  "height": "300",
  "dataFormat": "json",
  "dataSource": {
    chart:{}
  }
}).render("map");