
import './App.css';
import React from 'react';
import API from './components/utils/API';
import EmployeeTable from './components/EmployeeTable';
import Wrapper from './components/Wrapper';
import Filter from './components/Filter';
import Sort from './components/Sort';

class App extends React.Component {
  state = {
    error: '',
    employees: [],
    search: ''
  };
}


export default App;
