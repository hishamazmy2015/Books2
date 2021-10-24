import React from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';

const  Citizen=()=> {
    const products = [
        {
          isCitizen: true,
          Name: "John Smith",
          EIDA: 123456,
          Children: {
            "Mike Smith": 123457,
            "Jessica Smith": 123458,
            "Sarah Smith": 123459,
          },
          hasDrivingLicense: true,
        },
        {
          isCitizen: false,
          Name: "Michael Tall",
          EIDA: 123461,
          Children: {},
          hasDrivingLicense: false,
        },
        {
          isCitizen: false,
          Name: "Joe Bloggs",
          EIDA: 123462,
          Children: {
            "Sarah Bloggs": 123463,
          },
          hasDrivingLicense: true,
        },
      ];
      const columns = [
        {
          dataField: "isCitizen",
          text: "Product ID",
          sort:true
        },
        {
          dataField: "Name",
          text: "Product Name",
          sort:true
    
        },
        {
          dataField: "EIDA",
          text: "EIDA",
          sort:true
    
        },
        {
          dataField: "hasDrivingLicense",
          text: "Product Price",
          sort:true
    
        },
      ];
    

  return (
    <div>
      <BootstrapTable keyField="id" data={products} columns={columns} pagination={ paginationFactory() }  />
    </div>
  );
}

export default Citizen;
