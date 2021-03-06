import React, { useContext, useEffect } from "react";
import { Form } from 'react-bootstrap';
import { Context } from "../store/appContext";
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import NavbarTop from '../components/NavbarTop'

const NuevoRestaurante = props => {
    const { store, actions } = useContext(Context);
    useEffect(() => { }, []);
    return (
        <div className="container">
            <NavbarTop />
            <Form onSubmit={(e)=>actions.onSubmitRest(e)}>
                <Form.Group controlId="name">
                    <Form.Label>Nombre de Restaurant/Pub</Form.Label>
                    <Form.Control type="text" placeholder="La manito de d10s" name="nombre" onChange={(e) => actions.onChangeRest(e)} value={store.restaurante.nombre}/>
                </Form.Group>
                <Form.Row>
                    <Form.Group as={Col} controlId="formDirección">
                        <Form.Label>Dirección</Form.Label>
                        <Form.Control type="text" placeholder="calle Campari" name="direccion" onChange={(e) => actions.onChangeRest(e)} value={store.restaurante.direccion} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formTelefono">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control type="text" placeholder="+569 76878786" name="telefono" onChange={(e) => actions.onChangeRest(e)}value={store.restaurante.telefono} />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="mesas">
                    <Form.Label>Número de mesas</Form.Label>
                    <Form.Control type="text" placeholder="20" name="numero_mesas" onChange={(e) => actions.onChangeRest(e)} value={store.restaurante.numero_mesas}/>
                </Form.Group>

                <Form.Group controlId="formCapListaespera">
                    <Form.Label>Capacidad lista de espera</Form.Label>
                    <Form.Control type="text" placeholder="20" name="cap_lista" onChange={(e) => actions.onChangeRest(e)} value={store.restaurante.cap_lista} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Registrar Restaurant
  </Button>
            </Form>
        </div>
    );
};


export default NuevoRestaurante
