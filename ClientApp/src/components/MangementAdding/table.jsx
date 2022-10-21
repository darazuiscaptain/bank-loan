import React from 'react';
import {Button, ButtonToolbar, Table} from "react-bootstrap";
import ModalsBank from "./modal";


const TableBank = (props) => {
    return (
        <Table className="mt-4" striped bordered hover size="sm">
            <thead>
            <tr>
                <th>DepartmentId</th>
                <th>DepartmentName</th>
                <th>Options</th>
            </tr>
            </thead>
            <tbody>
            {props.deps.map(dep =>
                <tr key={dep.DepartmentId}>
                    <td>{dep.DepartmentId}</td>
                    <td>{dep.DepartmentName}</td>
                    <td>
                        <ButtonToolbar>
                            <Button className="mr-2" variant="info"
                                    // onClick={() => this.setState({
                                    //     editModalShow: true,
                                    //     depid: dep.DepartmentId, depname: dep.DepartmentName
                                    // })}>
                                >Edit
                            </Button>

                            <Button className="mr-2" variant="danger">
                                {/* onClick={() => this.deleteDep(dep.DepartmentId)}>*/}
                                Delete
                            </Button>

                            <ModalsBank show={props.editModalShow}
                                        onHide={props.editModalClose}
                                        header={props.header}
                                        handleSubmit={props.handleSubmit}/>

                        </ButtonToolbar>

                    </td>

                </tr>)}
            </tbody>

        </Table>

    );
}

export default TableBank
