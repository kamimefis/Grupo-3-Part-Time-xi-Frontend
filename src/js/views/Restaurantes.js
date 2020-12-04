import React, {useContext} from 'react'
import { Context } from '../store/appContext';
import { Button, Container, Row, Col, ListGroup, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NavbarTop from '../components/NavbarTop'
import RestaurantCard from '../components/RestaurantCard'

const Restaurantes = () => {
    const {store, actions} = useContext(Context);

    let pers = sessionStorage.getItem('persona_data')
    let perso= JSON.parse(pers)
    let person= perso.usuario
                    console.log ("prueba",person.nombre)
    return (
        <Container>
            <NavbarTop />
            <div>
                <h2 className='mx-auto my-3 text-center'> Bienvenido {"*Nombre de la persona"}</h2>
                <Row>
                    <Col>
                    <Row className='d-flex justify-content-between'>

                        <Col xs lg="10" className='mt-4'>
                        <h2 className='my-2'>Restaurantes disponibles:</h2>
                        </Col>
                        <Col xs lg="2" className='mt-4 '>
                            <Button variant="primary" size="lg">
                                <Link className="text-white" to='/nuevo_restaurante'>Agregar restaurante</Link>
                            </Button>
                        </Col>
                    </Row>
                        <ListGroup className='my-4 md-auto' variant='flush'>
                                        {store.restaurantes.map((element, index)=>{
                                        return (<RestaurantCard element={element} index={index} key={index}>
                                            </RestaurantCard>
                                            )
                                        })}
                        </ListGroup>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default Restaurantes