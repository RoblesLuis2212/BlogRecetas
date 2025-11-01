import React from 'react';
import CardCategorias from './CardCategorias';
import { Card } from 'react-bootstrap';

const Categorias = () => {
    return (
        <section className='container mt-3'>
            <h2 className='text-center'>Categorias</h2>
            <div className="row">
                <div className="col-12 col-md-4">
                    <CardCategorias imagen="https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg" titulo="Platos Principales"></CardCategorias>
                </div>
                <div className="col-12 col-md-4">
                    <CardCategorias imagen="https://images.pexels.com/photos/12176271/pexels-photo-12176271.jpeg" titulo="Desayunos"></CardCategorias>
                </div>
                <div className="col-12 col-md-4">
                    <CardCategorias imagen="https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg" titulo="Postres"></CardCategorias>
                </div>
            </div>
        </section>
    );
};

export default Categorias;