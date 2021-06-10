import React from "react";
import "./style.css";

import Dropdown from "react-bootstrap/Dropdown";

const Sort = (props) => {

    const handleFirstName = () => {
        props.sortEmployeesByFirstName()
        console.log("Sorted by First Name");
    }

    const handleLastName = () => {
        props.sortEmployeesByLastName()
        console.log("Sorted by Last Name")
    }

    return (
        <div className='sort-div'>

        </div>
    )

};

export default Sort;