import { LightningElement } from 'lwc';
import HIGHCHARTS from "@salesforce/resourceUrl/highcharts";

export default class DemoSentimentGraph extends LightningElement {
    
    renderedCallback() {
        Promise.all([
            loadScript(this, HIGHCHARTS)
              .then(() => console.log("Highcharts loaded"))
              .catch(error => console.log("Error in loading Highcharts"))
          ])
          .then(() => {
            this.buildCharts();
            this.handleKeyup();
          })
          .catch(error => {
            window.console.log("The error is: " + error);
          });
    }

    buildCharts() {
        lineGraph = Highcharts.chart(this.template.querySelector('div') , {
            chart: {
              type: 'spline',
              scrollablePlotArea: {
                minWidth: 600,
                scrollPositionX: 1
              }
            },
            legend: {
                enabled: false,
            },
            title: {
              text: 'Sentiment',
              align: 'left'
            },
            credits: {
              enabled: false
            },
            exporting: { enabled: false },
            xAxis: {
              type: 'category', // 'datetime' 'linear'
              categories: [
                  'Moon', '','','','','',
                  '06:00','','','','','',
                  'Sun',  '','','','','',
                  '18:00','','','','','',
                  'Moon'
                ],
                min: 0,
                max: 24
            },
            yAxis: {
              title: {
                text: ''
              },
              minorGridLineWidth: 0,
              gridLineWidth: 0,
              alternateGridColor: null,
              plotBands: [ { // C's = Degrees
                from: 70,
                to: 70,
                color: 'rgba(170, 170, 170, 1)',
              }],
              labels: {
                formatter: function() {
                  return '';
                 }
              },
              min: 0,
              max: 100
            },
            tooltip: {
              enabled: false,
              valueSuffix: ''
            },
            plotOptions: {
              spline: {
                lineWidth: 5,
                states: {
                  hover: {
                    lineWidth: 5
                  }
                },
                marker: {
                  enabled: false
                },
              }
            },
            series: [{
              name: '',
              data: [
                57, 60, 63, 70, 74, 75,
                73, 72, 68, 65, 70, 75,
              ],
              zones: [{
                    value: 40,
                    color: '#FF0000'
                }, {
                    value: 80,
                    color: '#0000FF'
                }, {            
                    color: '#00FF00'
                }]
            }],
            navigation: {
              menuItemStyle: {
                fontSize: '10px'
              }
            }
        });
    }

    handleKeyup(){
        this.addEventListener('keyup', function(evt){
            console.log('Keyup detected: ', evt.which);
            is_negative = evt.which == 187 ? 1 : evt.which == 189 ? -1 : false;
            // "+" key for adding value, "-" for subtracting value
            if (is_negative) {
                // append a value above or equal to the last point
                var data = mychart.yAxis[0].series[0].processedYData;
                var numberOfPoints = data.length;
                var lastPoint = data[data.length-1];
        
                newValue = Math.min(Math.max(parseInt(lastPoint + ( is_negative * Math.floor(Math.random() * 20))), 1), 100);
        
                if (numberOfPoints < 25) {
                    mychart.series[0].addPoint(newValue);
                }
            }
            
        });
    }
    
}