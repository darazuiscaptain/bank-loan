import React from 'react';
import ModalsBank from "./modal";


const AddSomethings = (props) => {
    return (

        <ModalsBank
            header={props.header}
            handleSubmit={props.handleSubmit}
            hanleHide={props.onHide}
        />

    );
}

export default AddSomethings
