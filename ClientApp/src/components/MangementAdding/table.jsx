import React from 'react';
import {Table} from "react-bootstrap";


const TableBank = (props) => {
    const dataColumns = props.data.columns;
    const dataRows = props.data.rows;

    const tableHeaders = (<thead>
    <tr>
        {dataColumns.map(function(column) {
            return <th>{column}</th>; })}
    </tr>
    </thead>);

    const tableBody = dataRows.map(function(row) {
        return (
            <tr>
                {dataColumns.map(function(column) {
                    return <td>{row[column]}</td>; })}
            </tr>); });
    return (
            <Table striped bordered hover>
                {tableHeaders}
                <tbody>
                {tableBody}
                </tbody>
            </Table>
    );
}

export default TableBank
