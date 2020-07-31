import React from 'react';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

class Material extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        { headerName: "Project Code", field: "projectCode" }, 
        { headerName: "CWP Code", field: "cwpCode" }, 
        { headerName: "Material Code", field: "materialCode" },
        { headerName: "Net Qty", field: "netQty" },
        { headerName: "ROS Date", field: "rosDate" },
        { headerName: "PO Number", field: "poNum" },
        { headerName: "Vendor Name", field: "vendorName" },
        { headerName: "PO Qty", field: "poQty" },
        { headerName: "ETA Date", field: "etaDate" }
      ],
      rowData: props.rowData
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.rowData !== this.state.rowData) {
      this.setState({ 
        rowData: nextProps.rowData 
      });
    }
  }

  render() {
    return (
      <div className="ag-theme-alpine" style={{ height: '500px', width: '100%' }}>
        <h4>- Detail information of material for CWP</h4>
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}>
        </AgGridReact>
      </div>
    )
  }
}

export default Material;