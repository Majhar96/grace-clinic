import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import './Doctors.css'

const Doctors = () => {

    const footerheadingStyle = {
        color: 'black',
        fontSize: '50px',
        letterSpacing: '8px',
        margin: '40px',
        fontFamily: 'cursive'
    }

    return (
        <div className="doctors-container mb-5 mt-5 ps-5">
            <h3 style={footerheadingStyle}>!!Find A Doctor!! </h3>
            <Form className="ps-5 ms-5">
                <Row className="align-items-center">
                    <Col sm={3} className="my-1">
                        <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                            Doctor Name
                        </Form.Label>
                        <Form.Control id="inlineFormInputName" placeholder="Doctor name" />
                    </Col>

                    <Col sm={3} className="my-1">
                        <Form.Select className="me-sm-2" id="inlineFormCustomSelect" placeholder="Username">
                            <option value="0">Choose a Departments</option>
                            <option value="1">Nephrology</option>
                            <option value="2">Gynocology</option>
                            <option value="3">Gastrology</option>
                            <option value="4">Cardiology</option>
                            <option value="5"> Neurology</option>
                            <option value="6">Orthopedics</option>
                        </Form.Select>
                    </Col>
                    <Col xs="auto" className="my-1">
                        <Button type="submit">Choose Department</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default Doctors;