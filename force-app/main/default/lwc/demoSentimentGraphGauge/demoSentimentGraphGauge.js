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

  // constructor() {
  //   super();
  //   // Because our event is owned by the parent and requires highcharts to
  //   // rerender the chart, we use global event listeners in updateGauge to pass
  //   // the new value and a global dispatch event in the parent.
  //   this.addEventListener('sentimentGaugeUpdate', this.updateGauge);
  // }

  // Loads libraries and calls functions.
  renderedCallback() {
    this.containerId = this.template.querySelector('div').id;
    this.containerDiv = this.template.querySelector('div');

    console.log('DSGG Highcharts: ', typeof Highcharts == undefined ? 'undefined' : 'defined');
      
    if (typeof Highcharts == undefined) {
      Promise.all([
        loadScript(this, demoSentimentGraph + '/highcharts.js')
          .then(() => {
            console.log("DSGG: Highcharts loaded");
            loadScript(this, demoSentimentGraph + '/highcharts-more.js')
              .then(()=> {
                console.log("DSG: Highcharts More loaded")
                loadScript(this, demoSentimentGraph + '/solid-gauge.js')
                  .then(()=> {
                    console.log("DSG: Solid Gauge loaded");
                    this.buildChart();
                  })
                  .catch(error => console.log("DSG: Error in loading Solid Gauge"));
              })
              .catch(error => console.log("DSG: Error in loading Highcharts More"));
          })
          .catch(error => console.log("DSGG: Error in loading Highcharts"))
      ])
        .catch(error => {
          window.console.log("DSG: The error is: " + error);
        });
    } else {    
      Promise.all([        
          loadScript(this, demoSentimentGraph + '/highcharts-more.js')
            .then(()=> {
              console.log("DSG: Highcharts More loaded")
              loadScript(this, demoSentimentGraph + '/solid-gauge.js')
                .then(()=> {
                  console.log("DSG: Solid Gauge loaded");
                  this.buildChart();
                })
                .catch(error => console.log("DSG: Error in loading Solid Gauge"));
            })
            .catch(error => console.log("DSG: Error in loading Highcharts More"))
      ])
        .catch(error => {
          window.console.log("DSG: The error is: " + error);
        });
    }
  }
  
  buildChart(){
    console.log('DSGG: Gauge Built for ', this.containerId);
    console.log('DSGG: ', this.title, this.color, this.value);
    this.gauge = new Highcharts.chart(this.containerDiv, {
      renderTo: this.containerId,
      chart: {
        type: 'solidgauge',
        height: '100%',
        maxWidth: 100,
        events: {
          load: function () {
              this.setSubtitle({ text: '0%' });
          }
        }
      },
      title: {
        text: this.title,
        floating: true,
        y: 38,
        style: {
          'font-size': '9px',
          'font-weight': 'bold',
          'text-transform': 'uppercase'
        }
      },
      subtitle: {
        text: '-',
        floating: true,
        y: 50,
        style: {
          color: '#777',
          'font-size': '8px',
          'text-transform': 'uppercase'
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
          backgroundColor: '#CCC',
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
          y: this.value
        }]
      }],
      credits: { enabled: false },
      exporting: { enabled: false },
    });
  }

  updateChart(value){
    //  listener version const newValue = value.detail;

    this.gauge.series[0].data[0].update({ y: value });
    this.gauge.setSubtitle({ text: value + '%' });
  }
}