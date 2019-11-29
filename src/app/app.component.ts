import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AllCommunityModules} from '@ag-grid-community/all-modules';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  [x: string]: any;

  columnDefs = [  

    {headerName: 'Country', field: 'country',editable: true,sortable: true, filter: true},
    {headerName: 'BirthDate', field: 'birthDate',editable: true,sortable: true, filter: true},
    {headerName: 'Department', field: 'department',editable: true,sortable: true, filter: true},
    {headerName: 'EmailAddress', field: 'emailAddress',editable: true,sortable: true, filter: true},
    {headerName: 'FirstName', field: 'firstName',editable: true,sortable: true, filter: true},
    {headerName: 'LastName', field: 'lastName',editable: true,sortable: true, filter: true},
    {headerName: 'Weight', field: 'weight',editable: true,sortable: true, filter: true}
  ];
  rowSelection = "multiple";
  autoGroupColumnDef = {
    headerName: 'Country',
    field: 'country',
    cellRenderer: 'agGroupCellRenderer',
    cellRendererParams: {
        checkbox: true
    }
  };
  
 
    rowData: any;

    modules = AllCommunityModules;

    constructor(private http: HttpClient) {

    }
    onPasteStart(params: any) {
      console.log("Callback onPasteStart:", params);
    }
   
    onPasteEnd(params: any) {
       console.log("Callback onPasteEnd:", params);
    }
   
     onBtCopyRows() {
      this.gridApi.copySelectedRowsToClipboard();
     }
   
     onBtCopyRange() {
      this.gridApi.copySelectedRangeToClipboard();
     }
   
     onPasteOff() {
      this.gridApi.setSuppressClipboardPaste(true);
     }
   
    onPasteOn() {
      this.gridApi.setSuppressClipboardPaste(false);
     }

    ngOnInit() {
        this.rowData = this.http.get('https://test2-c91b2.firebaseio.com/Test2.json/');
    }
    getSelectedRows() {
      const selectedNodes = this.agGrid.api.getSelectedNodes();
      const selectedData = selectedNodes.map( node => node.data );
      const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
      alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }
}