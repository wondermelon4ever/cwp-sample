import * as React from 'react';

import Chart from "react-google-charts";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import RequestSender from './RequestSender';
import { Material, CwpDetail } from './Material';

var sender = new RequestSender();
var header = [
  { type: 'string', label: 'Task ID' },
  { type: 'string', label: 'Task Name' },
  { type: 'date', label: 'Start Date' },
  { type: 'date', label: 'End Date' },
  { type: 'number', label: 'Duration' },
  { type: 'number', label: 'Percent Complete' },
  { type: 'string', label: 'Dependencies' },
]

function formatDate(date: string) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
}

var cwpList = Array<Cwp>();

interface Cwp {
    projectCode: string,
    cwpCode: string,
    cwpName: string,
    startDate: string,
    endDate: string,
    duration: number,
    percentCompleted: number,
    dependencies: Array<string>,
    materialList: Array<CwpDetail>
}

interface State {
    projectName: string,
    projectCode: string,
    chartData: Array<any>,
    date: Date,
    viewCalendar: boolean,
    doneMapping: boolean,
    cwpDetails: Array<CwpDetail>
}

interface Properties {

}

class App extends React.Component<Properties, State> {

  constructor(props:Properties) {
    super(props);
    this.state = {
      projectName: 'Sample Project',
      projectCode: 'PJT-2020072201',
      chartData: [],
      date: new Date(),
      viewCalendar: false,
      doneMapping: false,
      cwpDetails: Array<CwpDetail>()
    };

    this.requestProject = this.requestProject.bind(this);
    this.requestPoMapping = this.requestPoMapping.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.toggleCalendar = this.toggleCalendar.bind(this);
    this.updatePercentage = this.updatePercentage.bind(this);
  }

  componentDidMount() {
    // const calendarView: HTMLElement | null = document.getElementById('calendarView');
    const calendarView: HTMLElement = document.getElementById('calendarView')!;
    calendarView.style.display='none';
  }

  toggleCalendar() {
    const calendarView = document.getElementById('calendarView')!;
    this.state.viewCalendar == false ? calendarView.style.display='block' : calendarView.style.display='none';

    this.setState({
      viewCalendar: this.state.viewCalendar == false ? true : false
    });
  }

  updatePercentage(date: Date) {
    var chartData = this.state.chartData;

    cwpList.forEach(cwp=>{
      var cwpCode = cwp.cwpCode;

      var total = cwp.materialList.length;
      var satisfied = 0, percentage = 0;
      cwp.materialList.forEach(material=>{
        if(material.poQuantity == material.quantity && date.getTime() >= Date.parse(material.etaDate)) satisfied++;
      })
      percentage = total == satisfied ? 100 : 0;
      // console.log("cwpCode=>"+cwpCode + ", satisfied=>"+satisfied + ", total=>" + total+", " + percentage + " %");

      for(var i = 1; i < chartData.length; i++) {
        var temp = chartData[i];
        if(cwpCode == temp[0]) {
          temp[5] = percentage;
          break;
        }
      }
    });
  }

  onDateChange(date: Date) {
    this.setState({
      date: date
    });

    this.updatePercentage(date);
  }

  requestProject() {
    sender.getProject(this.state.projectCode, (data)=>{
      var chartData = [];
      chartData.push(header);

      data.forEach((cwp: Cwp) => {
        var temp = [];
        temp.push(cwp.cwpCode);
        temp.push(cwp.cwpName);
        temp.push(new Date(cwp.startDate));
        temp.push(new Date(cwp.endDate));
        temp.push(cwp.duration);
        temp.push(cwp.percentCompleted);

        var dependencies = null;
        if(cwp.dependencies.length == 1 && cwp.dependencies[0] != "null") {
          dependencies = cwp.dependencies[0];
        } else if(cwp.dependencies.length == 2) {
          dependencies = cwp.dependencies[0] + "," + cwp.dependencies[1];
        }
        temp.push(dependencies);
        chartData.push(temp);
      });

      this.setState({
        chartData: chartData
      });
    })
  }

  requestPoMapping() {
    if(this.state.doneMapping == false) {
      sender.getProjectWithPoMapping(this.state.projectCode, (data)=>{
        if(data == "") {
          window.alert("No mapping result found.");
          return;
        }
        cwpList = data;

        this.setState({
          doneMapping: true
        });
      });    
    } else {
      window.alert("Aleready fetched.");
    }

    this.updatePercentage(this.state.date);
  }

  render() {
    return (
      <React.Fragment>
        <h3>Construction Schedule for { this.state.projectName } ({ this.state.projectCode })</h3>
        <button onClick={()=>{this.requestProject();}}>Load project</button>&nbsp;
        <button onClick={()=>{this.requestPoMapping();}}>Load PO Mapping Result</button>&nbsp;
        <button onClick={()=>{this.toggleCalendar();}}>Calendar</button>&nbsp;
        <input type="text" id="selectedDate" readOnly value={formatDate(this.state.date.toString())}></input>
        <div id="calendarView">
          <Calendar
            onChange={e=> { this.onDateChange(new Date(e.toString())); }}
            value={this.state.date}
            calendarType= "ISO 8601"
          />
        </div>
        <Chart
          width={'100%'}
          height={'400px'}
          chartType="Gantt"
          loader={<div>Loading Chart</div>}
          data={this.state.chartData}
          chartEvents={[
            {
              eventName: 'select',
              callback: ({ chartWrapper }) => {
                const chart = chartWrapper.getChart();
                const selection = chart.getSelection();
                if (selection.length === 1) {
                  var rowNum = selection[0].row;
                  var cwpCode = this.state.chartData[rowNum+1][0];

                  if(cwpList.length > 0) {
                    var materialList = new Array<CwpDetail>();
                    cwpList.forEach(cwp=>{
                      if(cwp.cwpCode === cwpCode) {
                        cwp.materialList.forEach(material=>{
                          var mat = { 
                            "projectCode": cwp.projectCode, 
                            "cwpCode": cwp.cwpCode ,
                            "materialCode": material.materialCode,
                            "quantity": material.quantity,
                            "rosDate": material.rosDate,
                            "poNumber": material.poNumber,
                            "vendorName": material.vendorName,
                            "poQuantity": material.poQuantity,
                            "etaDate": material.etaDate
                          }
                          materialList.push(mat);
                        });
                      }
                    });
                    this.setState({
                      cwpDetails: materialList
                    })
                  }
                }
              }
            }
          ]}
          rootProps={{ 'data-testid': '1' }}
        />
        <div id="detailView">
          <Material rowData={this.state.cwpDetails}></Material>
        </div>
      </React.Fragment>
    );
  }
}

export default App;