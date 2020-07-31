import React from 'react';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

interface RowDataProps {
    rowData: Array<CwpDetail>
}

interface MaterialState {
    columnDefs: Array<HeaderProperty>,
    rowData: Array<CwpDetail>
}

interface HeaderProperty {
    headerName: string,
    field: string
}

interface CwpDetail {
    cwpCode: string,
    materialCode: string,
    quantity: number,
    rosDate: string,
    poNumber: string,
    vendorName: string,
    poQuantity: number,
    etaDate: string
}

class Material extends React.Component<RowDataProps, MaterialState> {
  constructor(props: RowDataProps) {
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

  componentWillReceiveProps(nextProps: RowDataProps) {
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

export {
  Material, CwpDetail
}