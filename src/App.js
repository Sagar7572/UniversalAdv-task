import Image from 'react-bootstrap/Image'
import Card from "./Components/Card/card.js"
import Banner from "./Assets/Banner.jpg"
import SkyDiving from "./Assets/Sky Diving.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Components/Card/cards.styles.css"

import './App.css';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  return (
        <Container className = "ml=0">
        <Row>
        <Col lg={12}>

       

        
          <Row >
            <Col lg={12}>
              <img className='Header-img' src ={Banner}/>
              <h2 className= " heading-text">Universal Adventures</h2>
            

            </Col>
            
          </Row>

          <Row className='mt-5 card-container pt-4 mr-5'>
            <Col lg={4} xs={12} >
            <img  className="d-block mx-auto img-fluid sky-diving" src={SkyDiving} />

            </Col>
            <Col lg = {8} xs={12}>
            <Row className='mb-5 '>
              <Card
                heading = "Scuba Diving in Grande Island,Goa"
                time = " 8 hours"
                location = " Goa, India"
                list1 = "Snacks"
                list2 = "Transport"
                list3 = "Photo/Video"
                list4 = "Activity"
                price = "1699"
              />
            </Row>
            <Row className = "card-2 mt=2 mb-5">
              <Card 
                heading = "Bungee Jumping in Goa"
                time = " 30 mins"
                location = " Goa, India"
                list1 = "Snacks"
                list2 = "Transport"
                list3 = "Photo/Video"
                list4 = "Activity"
                price = "2800"
              />
            </Row>

            </Col>
          </Row>
          </Col>
          </Row>
        </Container>
  );
}

export default App;
