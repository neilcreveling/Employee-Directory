import React from "react";
import "./style.css";

import Table from 'react-bootstrap/Table'

function EmployeeTable(props) {

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Department</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.firstName}</td>
                        <td>{props.lastName}</td>
                        <td>{props.department}</td>
                        <td>{props.address}</td>
                        <td>{props.phone}</td>
                        <td>{props.firstName}.{props.lastName}@employee.com</td>
                    </tr>
                </tbody>
            </Table>
        </div> 
    )
}