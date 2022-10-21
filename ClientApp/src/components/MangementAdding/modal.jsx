import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import fallback from '../../assets/fallback.jpg'

import {Button, FloatingLabel, Form, Image, Modal} from "react-bootstrap";

export default function ModalsBank(props) {
    return (
        <Container fluid="md">

            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header clooseButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add {props.header}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={props.handleSubmit}>
                                <Form.Group controlId="DepartmentName">
                                    <Form.Label>{props.header} Name</Form.Label>
                                    <Form.Control type="text" name="DepartmentName" required
                                                  placeholder="Name"/>
                                    <Form.Label>  Description</Form.Label>
                                    <FloatingLabel controlId="floatingTextarea2" label="Description">
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Leave a Description here"
                                            style={{ height: '100px' }}
                                        />
                                    </FloatingLabel>
                                </Form.Group>
                                <br/>
                                <br/>
                                <br/>
                                <Form.Group>
                                    <Button variant="primary" type="submit" hidden={true}>
                                        Add {props.header}
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col sm={6}>
                            <Image width="200px" height="200px" src={fallback}/>
                            <input type="File"/>
                        </Col>
                    </Row>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="danger" onClick={props.onHide}>Close</Button>
                    <Button variant="primary" type="submit">
                        Add {props.header}
                    </Button>
                </Modal.Footer>

            </Modal>

        </Container>
    );
}




