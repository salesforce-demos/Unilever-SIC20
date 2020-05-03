import { LightningElement, track, api } from 'lwc';
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

    @track gaugeArray = [[],[50,50,50,50,50,50],[]];
    @track positivevalue = 0;    
    @track neutralvalue = 0;  
    @track negativealue = 0;

    @track metricsIcon = demoSentimentGraph + '/metrics.png';

    constructor() {
        super();
        // Because our event is listening to window events, it cannot be owned
        // by the component. So, we use global event listeners in listenKeyup
        // and a global dispatch event in dispatchKeyup on the window.
        this.addEventListener('sentimentgraphevent', this.listenKeyup);
    }

    // Loads libraries and calls functions.
    renderedCallback() {
        this.containerId = this.template.querySelector('div').id;
        this.containerDiv = this.template.querySelector('div');
        this.metricsIcon = demoSentimentGraph + '/metrics.png';

        this.positivevalue = this.gaugeArray[0][this.gaugeArray[0].length-1];
        
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
            setTimeout(() => {
              console.log('Highcharts: ', typeof Highcharts);
              this.buildCharts();
              this.dispatchKeyup();
              this.updateInterval();
            }, 1000);
              
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
                  minWidth: 320,
                  scrollPositionX: 1
                }
              },
              legend: {
                  enabled: false,
              },
              title: {
                text: 'Timeline',
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
                  50, 50, 50, 50, 50, 50,
                ],
                zones: [{
                      value: 40,
                      color: '#FA5858'
                  }, {
                      value: 70,
                      color: '#00A1E0'
                  }, {            
                      color: '#4ACE23'
                  }]
              }],
              navigation: {
                menuItemStyle: {
                  fontSize: '10px'
                }
              }
        });
    }

    generateNewNumber(range, is_negative = null){
      var newNumber = 0;
      var data = this.lineGraph.yAxis[0].series[0].processedYData;
      var lastNumber = data[data.length-1];
      if ( !is_negative ) {
        is_negative = Math.random() < 0.5 ? -1 : 1;
      }
      
      if (range < 5) {
        // Calculate a new random number
        newNumber = Math.min(Math.max(parseInt(lastNumber + ( is_negative * Math.floor(Math.random() * range))), 1), 100);
      } else {
        // Use the number passed
        newNumber = Math.min(Math.max(parseInt(lastNumber + ( is_negative * range ))));
      }
    
      return newNumber;
    }

    @api updateLineGraph(newValue){
      // addPoint(value, redraw, shift, animation)
      newValue = newValue > 100 ? 99 : newValue < 0 ? 1 : newValue;
      console.log(this.lineGraph.series[0].data.length);
      let shift = true;
      if (this.lineGraph.series[0].data.length < 12) {
        shift = false;
      }
      this.lineGraph.series[0].addPoint(newValue, true, shift);      
    }

    @api updateGauges(newNumber) {

      // Update the array
      if (newNumber > 70) {
        this.gaugeArray[0].push(newNumber);
      } else if (newNumber > 40) {
        this.gaugeArray[1].push(newNumber);
      } else {
        this.gaugeArray[2].push(newNumber);
      }
    
      // Grab the lengths
      const positiveLength = this.gaugeArray[0].length;
      const neutralLength = this.gaugeArray[1].length;
      const negativeLength = this.gaugeArray[2].length;  
      const totalPoints = positiveLength + neutralLength + negativeLength;

      // Rebuild each chart
      
      this.positivevalue = Math.round(this.gaugeArray[0].length/totalPoints * 100);
      this.neutralvalue = Math.round(this.gaugeArray[1].length/totalPoints * 100);
      this.negativealue = Math.round(this.gaugeArray[2].length/totalPoints * 100);
      this.template.querySelectorAll("c-demo-sentiment-graph-gauge")[0].updateGauge(this.positivevalue);
      this.template.querySelectorAll("c-demo-sentiment-graph-gauge")[1].updateGauge(this.neutralvalue);
      this.template.querySelectorAll("c-demo-sentiment-graph-gauge")[2].updateGauge(this.negativealue);

    }

    // Generates new number for updateGraph on setInterval
    updateInterval () {        
        // We have to bind the setInterval to this, otherwise it will not 
        // be able to call updateGraph
        setInterval(function() {
          let value = this.generateNewNumber(3);
          this.updateLineGraph(value);
          this.updateGauges(value);

        }.bind(this), 3000);
    }

    // Dispatches global custom event while listening to window events.
    dispatchKeyup () {
        const that = this;

        window.addEventListener('keyup', function(evt){
            const is_negative = evt.which == 187 ? 1 : evt.which == 189 ? -1 : false;
            that.dispatchEvent(new CustomEvent('sentimentgraphevent', { detail: is_negative }));
        });
    }

    // Listens for global custom event from dispatchKeyup
    listenKeyup(evt){            
      let value = this.generateNewNumber(10, evt.detail);
        try { this.updateLineGraph(value) }
        catch (error) { console.log(error); }
    }
    
}