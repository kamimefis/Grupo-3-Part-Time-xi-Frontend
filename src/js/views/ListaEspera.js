import React, { useState } from 'react';
import NavbarTop from '../components/NavbarTop';
import ResumenRest from '../components/ResumenRest';
import ListaEsperaCard from '../components/ListaEsperaCard';
import { Button, Card, Container, Jumbotron, Col, Row, Image } from 'react-bootstrap';


const ListaEspera = props => {
    const [inList, setInList] = useState(true);

    return (
        <Container>
            <NavbarTop />
            <ResumenRest></ResumenRest>
            
            {/* <div className='container p-4 text-center d-flex justify-content-center'>
                <div className='row  my-4'>
                    <div className='col'>
                        <h1 className='text-left'>
                            Nombre del restaurante 
                        </h1>
                        <div className='row'>
                            <p className='text-justify col-6 '>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                                magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                                qui dolorem ipsum quia dolor sit amet, consectetur
                            </p>
                            <img className='col- 6' alt='Imagen del restaurante'>

                            </img>
                        </div> */}
                        
                    {/* </div>
                </div>
            </div> */}
        </Container>
    )



}

export default ListaEspera;
