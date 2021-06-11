import { Table, Column, Cell } from 'fixed-data-table-2';
import getData from './getData';
import 'fixed-data-table-2/dist/fixed-data-table.css';
import React from 'react';
import ReactDOM from 'react-dom'
import './styles.css';


function App() {
    const data = getData();
  
    return (
      <div className="App">
        <Table
          rowHeight={50}
          rowsCount={data.length}
          headerHeight={50}
          width={1000}
          height={500}
        >
          <Column
            columnKey="firstName"
            header={<Cell>First Name</Cell>}
            width={130}
            cell={({ rowIndex, columnKey }) => {
              return <Cell>{data[rowIndex][columnKey]}</Cell>;
            }}
          />
          <Column
            columnKey="lastName"
            header={<Cell>Last Name</Cell>}
            width={130}
            cell={({ rowIndex, columnKey }) => {
              return <Cell>{data[rowIndex][columnKey]}</Cell>;
            }}
          />
          <Column
            columnKey="email"
            header={<Cell>Email</Cell>}
            width={320}
            cell={({ rowIndex, columnKey }) => {
              return <Cell>{data[rowIndex][columnKey]}</Cell>;
            }}
          />
          <Column
            columnKey="city"
            header={<Cell>City</Cell>}
            width={180}
            cell={({ rowIndex, columnKey }) => {
              return <Cell>{data[rowIndex][columnKey]}</Cell>;
            }}
          />
        </Table>
      </div>
    );
  }