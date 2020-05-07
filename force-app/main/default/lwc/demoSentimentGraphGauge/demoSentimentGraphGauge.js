import { LightningElement, track, api } from 'lwc';
import demoSentimentGraph from '@salesforce/resourceUrl/demoSentimentGraph';
import { loadScript } from 'lightning/platformResourceLoader';

export default class DemoSentimentGraphGauge extends LightningElement {

  @track gauge = {};
  // Both containerDiv and containerId are used to maintain
  // stability for highcharts. Since the id is generated randomly,
  // we need to set containerId in highcharts and use containerDiv
  // for the initial build. 
  // @TODO test to see if these don't need to be tracked
  @track containerDiv = {};
  @track containerId = '';
  
  // values to display
  @api title = 'Default Title';
  @api color = '#000000';
  @api value = 0;
  @api initialvalue = 0;

  // Loads libraries and calls functions.
  renderedCallback() {
    this.containerId = this.template.querySelector('div').id;
    this.containerDiv = this.template.querySelector('div');
      
    if (typeof Highcharts == 'undefined') {
      Promise.all([            
          loadScript(this, demoSentimentGraph + '/highcharts.js')
              .then(() => console.log("demoSentimentGraphGauge: Highcharts loaded for ", this.containerId))
              .catch(error => console.log("demoSentimentGraphGauge: Error in loading Highcharts for ", this.containerId)),
      ])
      .then(() => {  
          Promise.all([         
              loadScript(this, demoSentimentGraph + '/highcharts-more.js')
                  .then(() => console.log("DSGG 1: HighchartsMore loaded for ", this.containerId))
                  .catch(error => console.log("DSGG 1: Error in loading Highcharts for #", this.containerId)),
          ]).then(() => {
              Promise.all([
                  loadScript(this, demoSentimentGraph + '/solid-gauge.js')
                  .then(() => console.log("DSGG 1: HighchartsMore loaded for #", this.containerId))
                  .catch(error => console.log("DSGG 1: Error in loading Highcharts for #", this.containerId)),
              ]).then(() => {
                  console.log('DSGG 1: sripts loaded for #', this.containerId, ', listening for event');                  
                  this.buildChart();
              })                    
          });                
      })
      .catch(error => {
          window.console.log("DSGG 1: The error is: " + error);
      });
    } else {    
      Promise.all([         
        loadScript(this, demoSentimentGraph + '/highcharts-more.js')
            .then(() => console.log("DSGG 2: HighchartsMore loaded for #", this.containerId))
            .catch(error => console.log("DSGG 2: Error in loading HighchartsMore for #", this.containerId)),
      ]).then(() => {
        Promise.all([
            loadScript(this, demoSentimentGraph + '/solid-gauge.js')
            .then(() => console.log("DSGG 2: SolidGauge loaded for #", this.containerId))
            .catch(error => console.log("DSGG 2: Error in loading SolidGauge for #", this.containerId)),
        ]).then(() => {
            console.log('DSGG 2: sripts loaded for #', this.containerId, ', listening for event');            
            this.buildChart();
        })
      })
      .catch(error => {
        window.console.log("DSGG 2: The error is: " + error);
      });
    }
  }
  
  buildChart(){ 

    let myvalue = this.initialvalue + '<sup>%</sup>';

    this.gauge = new Highcharts.chart(this.containerDiv, {
      renderTo: this.containerId,
      chart: {
        type: 'solidgauge',
        height: '110%',
        maxWidth: '110%',
        events: {
          load: function () {
              this.setSubtitle({ text: myvalue });
          }
        }
      },
      title: {
        text: '',
        floating: true,
        y: 100,
        style: {
          'font-size': '12px',          
          'color': '#8A8A8F',
        }
      },
      subtitle: {
        text: '-',
        floating: false,
        verticalAlign: 'middle',
        useHTML: true,
        // y: 50,
        style: {
          color: '#333230',
          'font-size': '20px',
          'font-family': 'SalesforceSans-Regular',
          'letter-spacing': '0'
        }
      },
      tooltip: {
        enabled: false,
      },
      pane: {
        startAngle: 0,
        endAngle: 360,
        background: [{ // Track for Move
          outerRadius: '112%',
          innerRadius: '88%', 
          backgroundColor: 'rgb(232,236,240)',
          borderWidth: 0
        }]
      },
      yAxis: {
        min: 0,
        max: 100,
        lineWidth: 0,
        tickPositions: []
      },
      plotOptions: {
        solidgauge: {
          dataLabels: {
            enabled: false
          },
          linecap: 'round',
          stickyTracking: false,
          rounded: true
        }
      },
      series: [{
        name: this.title,
        data: [{
          color: this.color,
          radius: '112%',
          innerRadius: '88%',
          y: this.initialvalue
        }]
      }],
      credits: { enabled: false },
      exporting: { enabled: false },
    });
  }

  @api updateGauge(value){
    //  listener version const newValue = value.detail;    
    this.gauge.series[0].data[0].update({ y: value });
    this.gauge.setSubtitle({ text: value + '<sup>%</sup>' });
  }
}