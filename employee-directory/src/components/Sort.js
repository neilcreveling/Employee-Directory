import React from "react";
import "./style.css";

const Sort = (props) => {

    const handleFirstName = () => {
        props.sortEmployeesByFirstName()
        console.log("Sorted First Name");
    }

    const handleLastName = () => {
        props.sortEmployeesByLastName()
        console.log("Sorted Last Name")
    }

    return (
        <div className='sort-div'>
            
        </div>
    )

};