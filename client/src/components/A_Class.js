import React, { useState } from 'react'
import { Col, Container, Row, Jumbotron, Card,Form, Button } from 'react-bootstrap'
import Navbar2 from './Navbar2'

const A_Class = () => {
    const [expand,setExpand] = useState(false);

    return (
        <>
            <Navbar2 />
            <Container className="mt-5">
                <Row >
                    <Col>
                        <div className="d-md-flex align-items-center justify-content-center">
                            <Jumbotron className="jumbo p-5 mt-4 col-md-9">
                                <h1>Subject Name</h1>
                                <p>Class_Code</p>
                                <p>Meet Link</p>
                            </Jumbotron>
                        </div>
                        <div className="d-md-flex align-items-center justify-content-center">
                            <Jumbotron className="mt-4 announce col-sm-12 col-md-7" style={{cursor:"pointer"}}>
                                {expand ? 
                                    <div className="p-4">
                                        <Form>
                                            <Form.Group>
                                                <Form.Control as="textarea" rows={1} placeholder="Announce something to the class" style={{borderRadius:"20px"}} />
                                            </Form.Group>
                                        </Form>
                                        <div className="mt-3 btns">
                                            <Button variant="outline-danger" className="btn-sm" onClick={()=>{setExpand(false)}} >Cancel</Button>
                                            <Button variant="outline-success" className="btn-sm">Submit</Button>
                                        </div>
                                    </div>
                                    :
                                    <div className="p-4" onClick={()=>{setExpand(true)}}>Announce something to the class</div>
                                    
                                }
                            </Jumbotron>
                        </div>
                        <div className="d-md-flex align-items-center justify-content-center">
                            <Card className="mt-4 announcement col-sm-12 col-md-7">
                                <Card.Body className="p-4">
                                    <Card.Title>
                                        Professor Name<br/>
                                        <p>date</p>
                                    </Card.Title>
                                    <Card.Text>
                                        Message by the Professor
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default A_Class