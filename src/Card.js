import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Container, Row, Col} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import './Card.css';
import cardimg from './img/logo.jpg'

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
                
                <div className="card-body text-center cad-tex container">
                    <h2 class="card-title text-warning">Tiana's Banquet</h2>                    
                    <Row>
                        <Col>
                            <h5><Icon.TelephoneFill className='text-light'/> +234 810 999 7387</h5>
                        
                            <p><Icon.EnvelopeFill className='text-light'/> tianasbanquet.eventplanning@gmail.com</p>
                        </Col>                    
                    </Row><br/><br/>
                    
                    
                    <div>
                        <h3 className='text-light'>WHO WE ARE</h3>
                        <hr className='bg-warning'/>
                        <p class="card-text text-justify">
                        We are gifted Event Planners, well experienced in decoration of all kinds, surprise packages, 
                        baking of cake, snacks, small chops and other edibles for events. We are a team of professionals
                        for all event categories. We cover, edit your pictures and videos with the latest technologies.
                        </p>
                        <p class="card-text text-justify">
                            We are well renowned for our deployment of top-notch colorful decorations, and we
                            are wholesomely driven by our organizational values of Excellence, integrity,
                            customer-centricity and accountability.
                        </p>
                    </div>
                    <br/><br/>
                    <div>
                        <h3 className='text-light'>OUR SERVICES</h3>
                        <hr className='bg-warning'/>
                        <h3 class="card-text text-justify">
                            <list>
                                <ul>
                                    <li><i class="bi bi-record2-fill text-warning"></i> Event Planning</li>
                                    <li><i class="bi bi-record2-fill text-warning"></i> Decoration</li>
                                    <li><i class="bi bi-record2-fill text-warning"></i> Cakes</li>
                                    <li><i class="bi bi-record2-fill text-warning"></i> Snacks</li>
                                    <li><i class="bi bi-record2-fill text-warning"></i> Money Banquet</li>
                                    <li><i class="bi bi-record2-fill text-warning"></i> Renting of:
                                        <ol>
                                            <li><i class="bi bi-record2 text-warning"></i> Wedding Gowns</li>
                                            <li><i class="bi bi-record2 text-warning"></i> Native Wears</li>
                                            <li><i class="bi bi-record2 text-warning"></i> Bridal Shower Gowns</li>
                                            <li><i class="bi bi-record2 text-warning"></i> Bridal Accessories</li>
                                        </ol>
                                    </li>
                                    <li><i class="bi bi-record2-fill text-warning"></i> Training Classes</li>
                                
                                </ul>
                            </list>
                        </h3>                        
                    </div>
                    <br/>
                    <div className='container-fluid text-center'>
                        
                        <hr className='bg-warning'/>

                        
                        <a href="tianas-album.pdf" download className="icon-colour home-social-icons"><Button variant="info"><Icon.Download/> Download Our Album</Button></a>                     
                    </div>                   
                </div>
         
                <div class="text-center footer">
                    <Container>
                        <Row>
                            <Col><a className="text-info" href="https://wa.me/+2348109997387" target="_blank" rel="noopener npreferrer"><h2><Icon.Whatsapp/></h2></a></Col>
                            <Col><a className="text-primary" href="https://web.facebook.com/profile.php?id=100071061309391" target="_blank"><h2><Icon.Facebook/></h2></a></Col> 
                            <Col><a className="text-danger" href="https://www.instagram.com/tianas_banquets/" target="_blank"><h2><Icon.Instagram/></h2></a></Col>                           
                        </Row>
                    </Container>                
                </div>
            </div> 
        </Row>              
    </Container>
  );
}

