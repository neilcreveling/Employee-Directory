import './App.css';
import React from 'react';
import API from './components/utils/API';
import Employee from './components/Employee';
import Wrapper from './components/Wrapper';
import Filter from './components/Filter';
import Sort from './components/Sort';

class App extends React.Component {
  state = {
    error: '',
    employees: [],
    search: ''
  };

  componentDidMount() {
    API.getEmployees()
    .then(res => {
      console.log( res.data.results );
      this.setState({ employees: res.data.results });
    })
    .catch(err => console.log(err));
  }

  filterEmployees = () => {
    const employees = this.state.employees.filter( employee => employee.dob.age < 50);
    this.setState({ employees });
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
}




export default App;
