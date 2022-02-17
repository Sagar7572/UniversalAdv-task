import React from "react";

import { Button, Col, Container, Row } from "react-bootstrap";
import img from "../../Assets/Scuba Diving.jpg";
import { Icon } from '@iconify/react';



const Card = (props) =>{
    return(
        <>
            <Container className="activity-card">
                <Row className=" cards justify-content-md-center mt-0 mb-2 " >
                    <Col lg={4} sm={12}  className = "m-auto mt-" ><img className="d-block  img-fluid  activity-card-img " src={img}/></Col>
                    <Col lg={5}>
                    <Row >
                    <Col lg={12}>
                    <h1 className="heading">{props.heading}</h1>
                    </Col>
                    </Row>
                    <Row>
                    <Col lg={3}>
                    <h5 className = "sub-heading"><Icon icon="akar-icons:clock" />{props.time}</h5>
                    </Col>
                    <Col lg={4}>
                    <h5 className = "sub-heading"><Icon icon="entypo:location-pin" />{props.location}</h5>
                    </Col>
                    </Row>
                    <Row>
                        <h1></h1>
                    </Row>
                    

                    <Row className="card-list">
                    <Col lg={12} d-inline className = "Tiles">
                       <Button variant="light"> <h2 className = "list"><Icon className="list-icons" icon="icon-park-outline:snacks" /> <bR/>{props.list1}</h2></Button>
                       <Button variant="light"> <h2 className = "list "><Icon className="list-icons" icon="ant-design:car-filled" /><br/>{props.list2}</h2></Button>
                       <Button variant="light"><h2 className = "list"><Icon className="list-icons" icon="ant-design:camera-outlined" /><br/>{props.list2}</h2></Button>
                       <Button variant="light"> <h2 className = "list"><Icon className="list-icons" icon="lucide:mountain-snow" /><br/>{props.list4}</h2></Button>
                        </Col>
                    </Row>
                    <Row className ="buttons mt-3">
                        <Col>
                        <Button className = "card-button " variant="light">Long tail boat ride</Button> 

                        <Button className = "card-button" variant="light">Underwater photo and video</Button> 
                        </Col>
                    </Row>
                    </Col>
                    <Col lg={3}>
                        <Row className="rating offset-lg-1 mr-5">
                            <Col>
                            <Icon icon="emojione:star" />
                            <Icon icon="emojione:star" />
                            <Icon icon="emojione:star" />
                            <Icon icon="emojione:star" />
                            <Icon icon="emojione:star" />
                            </Col>
                            <Row>
                                <h6>36 Reviews</h6>
                            </Row>
                            <Row>
                                <h5>Starting From</h5>
                                <h3> <Icon icon="bx:rupee" />{props.price}</h3>
                                <Button variant="success">View Details</Button>{' '}
                            </Row>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>

    )
};
export default Card;