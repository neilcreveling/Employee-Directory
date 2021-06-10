import React from "react";
import "./style.css";

const Filter = (props) => {

    const handleFilter = () => {
        props.filterEmployees( 'job' )
        console.log('Filtered Employees')
    }

    const handleReset = () => {
        props.resetFilter()
        console.log('Filter Reset');
    }

    return (

    )
}

export default Filter;