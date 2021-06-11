import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';

const Filter = (props) => {

    const handleFilter = () => {
        props.filterEmployees()
        console.log('hello filter');
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
                    <Dropdown.Item as='button' onClick={ handleFilter }>Filter Under 50</Dropdown.Item>
                    <Dropdown.Item as='button' onClick={ handleReset }>Clear Filters</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default Filter;