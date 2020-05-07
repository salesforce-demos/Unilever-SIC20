import { LightningElement, track, api } from 'lwc';
import demoSentimentGraph from '@salesforce/resourceUrl/demoSentimentGraph';
import { loadScript } from 'lightning/platformResourceLoader';

export default class DemoSentimentGraph extends LightningElement {
    
    // lineGraph needs to be tracked to handle updates.
    @track lineGraph = {};
    @track isrunning = false;

    // Child component data is passed from this parent
    @track gaugeArray = [[76,71],[50, 51, 53, 55, 50, 57, 63],[39, 35, 33, 39, 37]];

    // Images
    metricsicon = demoSentimentGraph + '/metrics.png';
    datedropdown = demoSentimentGraph + '/datedropdown.png';

    constructor() {
        super();
        // Because our event is listening to window events, it cannot be owned
        // by the component. So, we use global event listeners in listenKeyup
        // and a global dispatch event in dispatchKeyup on the window.
        this.addEventListener('sentimentgraphevent', this.listenKeyup);        
        window.addEventListener("startsentimentgraph", this.updateInterval.bind(this));
      
    }

    // Loads libraries and calls functions.
    renderedCallback() {
        // this.containerId = this.template.querySelector('div').id;
        // this.containerDiv = this.template.querySelector('div');
        this.metricsicon = this.metricsicon;
        this.datedropdown = this.datedropdown;
        this.isrunning = false;

        console.log()
        
        if (typeof Highcharts == undefined) {
          Promise.all([
              loadScript(this, demoSentimentGraph + '/highcharts.js')
                .then(() => console.log("DSG: Highcharts loaded"))
                .catch(error => console.log("DSG: Error in loading Highcharts"))
            ])
            .then(() => {
              this.buildCharts();
              this.dispatchKeyup();              
            })
            .catch(error => {
              window.console.log("DSG: The error is: " + error);
            });
          } else {
            setTimeout(() => {              
              this.buildCharts();
              this.dispatchKeyup();              
            }, 1000);
              
          }
    }

    // Builds chart using highcharts
    buildCharts() {
        
        const containerId = this.template.querySelector('div').id;
        const containerDiv = this.template.querySelector('div');
              
        this.lineGraph = new Highcharts.chart(containerDiv, {
            renderTo: containerId,
            chart: {
                type: 'spline',
                scrollablePlotArea: {
                  minWidth: 300,
                  scrollPositionX: 1
                },
                height: 192,
                width: 300,
                backgroundColor: null,
              },
              legend: {
                  enabled: false,
              },
              title: {
                text: '',
                align: 'left',
              },
              credits: {
                enabled: false
              },
              exporting: { enabled: false },
              xAxis: {                
                type: 'datetime', // 'category' 'linear'
                labels: { enabled: false },
                tickInterval: 60 * 24 * 3600 * 1000, 
                tickLength: 0,
              },
              yAxis: {
                title: {
                  text: ''
                },
                // offset: -350,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                tickLength: 0,
                plotBands: [{ 
                  from: 0,
                  to: 0,
                  color: '#B8C8D3',
                },{ 
                  from: 25,
                  to: 25,
                  color: '#E5E5E5',
                },{ 
                  from: 50,
                  to: 50,
                  color: '#E5E5E5',
                },{ 
                  from: 75,
                  to: 75,
                  color: '#E5E5E5',
                },
                {
                  from: 100,
                  to: 100,
                  color: '#E5E5E5',
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
                    // enabled: false
                    radius: 6,
                    lineWidth: 2,
                    fillColor: '#FFFFFF',
                    lineColor: null,
                  },
                },
                pointInterval: 3000, // 3 seconds
                pointStart: Date.UTC(2018, 1, 13, 0, 0, 0)
              },
              series: [{
                name: '',
                data: [
                  
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

        // Add 5 points for initial format
        this.updateLineGraph(27);
        this.updateGauges(27);
        this.updateLineGraph(29);
        this.updateGauges(29);
        this.updateLineGraph(31);
        this.updateGauges(31);
        this.updateLineGraph(37);
        this.updateGauges(37);
        this.updateLineGraph(63);
        this.updateGauges(63);
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
      
      let shift = true;
      if (this.lineGraph.series[0].data.length < 5) {
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
      
      const positivevalue = Math.round(this.gaugeArray[0].length/totalPoints * 100);
      const neutralvalue = Math.round(this.gaugeArray[1].length/totalPoints * 100);
      const negativealue = Math.round(this.gaugeArray[2].length/totalPoints * 100);
      this.template.querySelectorAll("c-demo-sentiment-graph-gauge")[0].updateGauge(positivevalue);
      this.template.querySelectorAll("c-demo-sentiment-graph-gauge")[1].updateGauge(neutralvalue);
      this.template.querySelectorAll("c-demo-sentiment-graph-gauge")[2].updateGauge(negativealue);

    }

    // Generates new number for updateGraph on setInterval
    @api updateInterval () {
        console.log('startsentimentgraph fired. Interval is running = ', this.isrunning); 
        // We have to bind the setInterval to this, otherwise it will not 
        // be able to call updateGraph
        if (this.isrunning == false ) {
          this.isrunning = true;

          setInterval(function() {
            let value = this.generateNewNumber(3);
            this.updateLineGraph(value);
            this.updateGauges(value);
          }.bind(this), 3000);

        }
        
    }

    // Dispatches global custom event while listening to window events.
    dispatchKeyup () {
        const that = this;

        window.addEventListener('keyup', function(evt){
            
            const is_negative = evt.which == 187 ? 1 : evt.which == 189 ? -1 : false;
            if (is_negative) {
              that.dispatchEvent(new CustomEvent('sentimentgraphevent', { detail: is_negative }));
            } 
        });
    }

    // Listens for global custom event from dispatchKeyup
    listenKeyup(evt){            
      let value = this.generateNewNumber(10, evt.detail);
        try { 
          this.updateLineGraph(value);
          this.updateGauges(value);
        }
        catch (error) { console.log(error); }
    }

}