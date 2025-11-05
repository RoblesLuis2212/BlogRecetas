import React from 'react';
import TablaRecetas from './TablaRecetas';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';

const Administrador = () => {
    return (
        <section className='container'>
            <div className='d-flex align-items-start'>
                <h2 className='text-center mt-2 flex-grow-1'>Administracion de recetas</h2>
                <Button className='btn btn-success mt-2 me-1' as={Link} to="/administrador/crear">
                    Agregar
                    <i className="bi bi-plus"></i>
                </Button>
            </div>
            <TablaRecetas></TablaRecetas>
        </section>
    );
};

export default Administrador;