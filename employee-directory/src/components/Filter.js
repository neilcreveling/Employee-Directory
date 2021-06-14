import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';

const Filter = (props) => {

    const handleAgeFilter = () => {
        props.filterAgeEmployees()
        console.log('hello filter');
    }

    const handleUSFilter = () => {
        props.filterNatUSEmployees()
        console.log('US Employees');
    }

        const handleGBFilter = () => {
        props.filterNatGBEmployees()
        console.log('GB Employees');
    }

        const handleFRFilter = () => {
        props.filterNatFREmployees()
        console.log('FR Employees');
    }

    const handleReset = () => {
        props.resetFilter()
        console.log('hello reset');
    }

    return (
        <div className='mb-3 mr-2 d-flex flex-row'>
            <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Filter Menu
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item as='button' onClick={ handleAgeFilter }>Filter Under 50</Dropdown.Item>
                    <Dropdown.Item as='button' onClick={ handleUSFilter }>Show American Employees</Dropdown.Item>
                    <Dropdown.Item as='button' onClick={ handleGBFilter }>Show British Employees</Dropdown.Item>
                    <Dropdown.Item as='button' onClick={ handleFRFilter }>Show French Employees</Dropdown.Item>
                    <Dropdown.Item as='button' onClick={ handleReset }>Clear Filters</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default Filter;