import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Container, Row, Col} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import './Card.css';
import cardimg from './img/fab5.jpeg'

export default function Cards() {
  return (
    <Container>         
        <Row>
            <div class="card">
                <div className='pp'>
                    <Col md={4}></Col>
                    <Col md={4}> 
                        <Card.Img variant="top" className="mypassport" src={cardimg} />
                    </Col>
                    <Col md={4}></Col>
                </div>            
                
                <div class="card-body text-center cad-tex">
                    <h2 class="card-title text-white">Fab Solar Technology</h2>                    
                    <Row>
                        <Col>
                            <Icon.TelephoneFill className='text-info'/> +234 808 530 2464
                            &nbsp; &nbsp;
                            <Icon.EnvelopeFill className='text-info'/> fabsolartechnologies@gmail.com
                        </Col>                    
                    </Row><br/><br/>
                    
                    
                    <div>
                        <h3 className='text-white'>WHO WE ARE</h3>
                        <hr className='bg-light'/>
                        <p class="card-text text-justify">
                            Fab Technology is a subsidiary of Igu World Solar, a Nigeria’s frontline renewable energy company,
                            committed to providing aﬀordable and reliable solar energy solutions
                            for households and businesses across Africa.
                        </p>
                        <p class="card-text text-justify">
                            A good number of businesses in Nigeria spends upwards 40% of their proﬁts
                            to meet their basic power needs. We exist to solve this Problem.
                            We are committed to increasing the productivity of businesses and providing
                            comfort to millions of households by oﬀering uninterrupted power supply
                            through our solar and inverter systems.
                        </p>
                        <p class="card-text text-justify">
                            We are well renowned for our deployment of top-notch solar Products, and we
                            are wholesomely driven by our organizational values of Excellence, integrity,
                            customer-centricity and accountability.
                        </p>
                    </div>

                    <br/>
                    <div>
                        <h3 className='text-white'>MISSION STATEMENT</h3>
                        <hr className='bg-light'/>
                        <p class="card-text text-justify">
                            we remain committed to provide innovative, cost eﬀective, environmentally
                            friendly reliable power and renewable energy solution to Everyone.
                            we specialize in providing viable alternative Electricity.
                        </p>

                        <br/>    
                        <div><a href="fab-profile.pdf" download className="icon-colour home-social-icons"><Button variant="info"><Icon.Download/> Download Company Brochure</Button></a></div>
                    </div>                   
                </div>
                
                <div class="text-center footer">
                    <Container>
                        <Row>
                            <Col><a className="text-info" href="https://wa.me/+2348085302464" target="_blank" rel="noopener npreferrer"><h2><Icon.Whatsapp/></h2></a></Col>
                            <Col><a className="text-info" href="#" target="_blank"><h2><Icon.Facebook/></h2></a></Col>
                            <Col><a className="text-info" href="#" target="_blank"><h2><Icon.Instagram/></h2></a></Col>
                        </Row>
                    </Container>                
                </div>
            </div> 
        </Row>              
    </Container>
  );
}

