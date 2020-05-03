import { LightningElement, track } from 'lwc';
import demoSentimentGraph from '@salesforce/resourceUrl/demoSentimentGraph';
import { loadScript } from 'lightning/platformResourceLoader';

export default class DemoSentimentGraph extends LightningElement {
    
    // lineGraph needs to be tracked to handle updates.
    @track lineGraph = {};
    // Both containerDiv and containerId are used to maintain
    // stability for highcharts. Since the id is generated randomly,
    // we need to set containerId in highcharts and use containerDiv
    // for the initial build. 
    // @TODO test to see if these don't need to be tracked
    @track containerDiv = {};
    @track containerId = '';

    @track positiveArray = [50];
    @track positiveValue = this.positiveArray[this.positiveArray.length];

      // neutral:  { 
      //   name: 'neutralCircularGaugeChart', 
      //   id: 'demo-sentiment--gauge--neutral', 
      //   title: 'Neutral', 
      //   color: '#0000CC', 
      //   values: [] 
      // },
      // negative: { 
      //   name: 'negativeCircularGaugeChart', 
      //   id: 'demo-sentiment--gauge--negative', 
      //   title: 'Negative', 
      //   color: '#CC0000', 
      //   values: [] 
      // }

    constructor() {
        super();
        // Because our event is listening to window events, it cannot be owned
        // by the component. So, we use global event listeners in listenKeyup
        // and a global dispatch event in dispatchKeyup on the window.
        this.addEventListener('sentimentGraphEvent', this.listenKeyup);
    }

    // Loads libraries and calls functions.
    renderedCallback() {
        this.containerId = this.template.querySelector('div').id;
        this.containerDiv = this.template.querySelector('div');

        console.log('DSG Highcharts: ', typeof Highcharts == undefined ? 'undefined' : 'defined');
        if (typeof Highcharts == undefined) {
          Promise.all([
              loadScript(this, demoSentimentGraph + '/highcharts.js')
                .then(() => console.log("DSG: Highcharts loaded"))
                .catch(error => console.log("DSG: Error in loading Highcharts"))
            ])
            .then(() => {
              this.buildCharts();
              this.dispatchKeyup();
              this.updateInterval();            
            })
            .catch(error => {
              window.console.log("DSG: The error is: " + error);
            });
          } else {
              this.buildCharts();
              this.dispatchKeyup();
              this.updateInterval();   
          }
    }

    // Builds chart using highcharts
    buildCharts() {
        // this.containerId = this.template.querySelector('div');        
        this.lineGraph = new Highcharts.chart(this.containerDiv, {
            renderTo: this.containerId,
            chart: {
                type: 'spline',
                scrollablePlotArea: {
                  minWidth: 200,
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
                type: 'datetime', // 'category' 'linear'
                labels: {
                  formatter: function () {
                      // If we want to add custom labels
                      //   var label = this.axis.defaultLabelFormatter.call(this);            
                      
                      return '';
                  }
                },
                // categories: [
                //     'Moon', '','','','','',
                //     '06:00','','','','','',
                //     'Sun',  '','','','','',
                //     '18:00','','','','','',
                //     'Moon'
                //   ],
                // min: 0,
                // max: 24
              },
              yAxis: {
                title: {
                  text: ''
                },
                // offset: -350,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                plotBands: [ { // High wind
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
                },
                pointInterval: 3000, // 3 seconds
                pointStart: Date.UTC(2018, 1, 13, 0, 0, 0)
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

    // Updates series data in graph
    updateGraph(is_negative, lastNumber, range) {       
        if (range < 5) {
          // Calculate a new random number
          range = Math.min(Math.max(parseInt(lastNumber + ( is_negative * Math.floor(Math.random() * range))), 1), 100);
        } else {
          // Add/subtract the range 
          range = Math.min(Math.max(parseInt(lastNumber + ( is_negative * range ))));
        } 

        // Keep the line in the graph area
        if (range > 99) {
            range = 99;
        } else if (range < 1) {
            range = 1;
        }
        // highcharts addPoint(value, redraw, shift)
        this.lineGraph.series[0].addPoint(range, true, true);
    }

    // Generates new number for updateGraph on setInterval
    updateInterval () {        
        // We have to bind the setInterval to this, otherwise it will not 
        // be able to call updateGraph
        setInterval(function() {            
            var data = this.lineGraph.yAxis[0].series[0].processedYData;        
            var lastNumber = data[data.length-1];                        
            var is_negative = Math.random() < 0.5 ? -1 : 1;
            this.updateGraph(is_negative, lastNumber, 3);            
        }.bind(this), 3000);
    }

    // Dispatches global custom event while listening to window events.
    dispatchKeyup () {
        const that = this;

        window.addEventListener('keyup', function(evt){
            const is_negative = evt.which == 187 ? 1 : evt.which == 189 ? -1 : false;
            that.dispatchEvent(new CustomEvent('sentimentGraphEvent', { detail: is_negative }));
        });
    }

    // Listens for global custom event from dispatchKeyup
    listenKeyup(evt){
        
        const is_negative = evt.detail;
        const data = this.lineGraph.yAxis[0].series[0].processedYData;
        const lastNumber = data[data.length-1];

        try { this.updateGraph(is_negative,lastNumber, 10); } 
        catch (error) { console.log(error); }
    }
    
}