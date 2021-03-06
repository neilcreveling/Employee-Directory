import './App.css';
import React from 'react';
import API from './utils/API';
import Filter from './components/Filter';
import Sort from './components/Sort';
import Table from "react-bootstrap/Table";
import Title from './components/Title';

class App extends React.Component {
  state = {
    error: '',
    employees: [],
  };


  componentDidMount() {
    API.getEmployees()
    .then(res => {
      console.log( res.data.results );
      this.setState({ employees: res.data.results });
    })
    .catch(err => console.log(err));
  }

  filterAgeEmployees = () => {
    const employees = this.state.employees.filter( employee => employee.dob.age < 50);
    this.setState({ employees });
  }

    filterNatUSEmployees = () => {
    const employees = this.state.employees.filter( employee => employee.nat === "US");
    this.setState({ employees });
  }

      filterNatGBEmployees = () => {
    const employees = this.state.employees.filter( employee => employee.nat === "GB");
    this.setState({ employees });
  }

      filterNatFREmployees = () => {
    const employees = this.state.employees.filter( employee => employee.nat === "FR");
    this.setState({ employees });
  }

  resetFilter = () => {
    this.setState(this.baseState);
  }

  sortEmployeesByFirstNameAz = () => {
    const employees = this.state.employees.sort((a,b)=>(a.name.first > b.name.first) ? 1 : ((b.name.first > a.name.first) ? -1 : 0));
    this.setState({ employees });
  }

  sortEmployeesByFirstNameZa = () => {
    const employees = this.state.employees.sort((a,b)=>(a.name.first < b.name.first) ? 1 : ((b.name.first < a.name.first) ? -1 : 0));
    this.setState({ employees });
  }

  sortEmployeesByLastNameAz = () => {
    const employees = this.state.employees.sort((a,b)=>(a.name.last > b.name.last) ? 1 : ((b.name.last > a.name.last) ? -1 : 0));
    this.setState({ employees });
  }

  sortEmployeesByLastNameZa = () => {
    const employees = this.state.employees.sort((a,b)=>(a.name.last < b.name.last) ? 1 : ((b.name.last < a.name.last) ? -1 : 0));
    this.setState({ employees });
  }

  mapEmployeeRows = () => {
    return this.state.employees.map( employee => (
      <tr key={employee.phone}>
        <th>{employee.name.first} {employee.name.last}</th>
        <th>{employee.location.city}</th>
        <th>{employee.dob.date}</th>
        <th>{employee.dob.age}</th>
        <th>{employee.nat}</th>
      </tr>
    ))
  }

  render() {
    return (
      <div>
        <header className="header">
          <Title>Employee Directory</Title>
          <nav className='d-flex align-items-baseline'>
            <Filter
              filterAgeEmployees={this.filterAgeEmployees}
              filterNatUSEmployees={this.filterNatUSEmployees}
              filterNatGBEmployees={this.filterNatGBEmployees}
              filterNatFREmployees={this.filterNatFREmployees}
            />
          </nav>
        </header>
        <Table responsive striped bordered hover className="mt-1">
          <thead>
            <tr>
              <th className="d-flex alight-items-center justify-content-between">
                Name
                <Sort
                  sortEmployeesByFirstNameAz={ this.sortEmployeesByFirstNameAz }
                  sortEmployeesByFirstNameZa={ this.sortEmployeesByFirstNameZa }
                  sortEmployeesByLastNameAz={ this.sortEmployeesByLastNameAz }
                  sortEmployeesByLastNameZa={ this.sortEmployeesByLastNameZa }
                />
              </th>
              <th>Location</th>
              <th>DOB</th>
              <th>Age</th>
              <th>Nationality</th>
            </tr>
          </thead>
          <tbody>
            { this.mapEmployeeRows() }
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;
