import React from "react";
import "./style.css";

import Dropdown from "react-bootstrap/Dropdown";

const Sort = (props) => {

    const handleSortFirstNameAz = () => {
        props.sortEmployeesByFirstNameAz()
        console.log("Sorted by First Name - A to Z");
    }

    const handleSortFirstNameZa = () => {
        props.sortEmployeesByFirstNameZa()
        console.log("Sorted by First Name - Z to A");
    }

    const handleSortLastNameAz = () => {
        props.sortEmployeesByLastNameAz()
        console.log("Sorted by Last Name - A to Z")
    }

    const handleSortLastNameZa = () => {
        props.sortEmployeesByLastNameAz()
        console.log("Sorted by Last Name- Z to A")
    }

    return (
        <div className='sort-div'>
            <div className='mb-2 d-flex flex-row'>
                <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        Sort
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item as='button' onClick={ handleSortFirstNameAz }>First Name: A-Z</Dropdown.Item>
                        <Dropdown.Item as='button' onClick={ handleSortFirstNameZa }>First Name: Z-A</Dropdown.Item>
                        <Dropdown.Item as='button' onClick={ handleSortLastNameAz }>Last Name: A-Z</Dropdown.Item>
                        <Dropdown.Item as='button' onClick={ handleSortLastNameZa }>Last Name: Z-A</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    )

};

export default Sort;