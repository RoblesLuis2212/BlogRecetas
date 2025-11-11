import React from 'react';
import FormularioRegistro from './FormularioRegistro';

const RegistroUsuarios = () => {
    return (
        <section className='container bg-white mt-4 rounded-2 shadow-lg'>
            <div className="row">
                <div className="col-12 col-lg-6 order-3 order-md-2">
                    <h2 className='text-center'>Crear Cuenta</h2>
                    <FormularioRegistro></FormularioRegistro>
                </div>
                <div className="col-12 order-md-1 order-lg-2 col-lg-6 p-0 order-2">
                    <img src="https://cdn.pixabay.com/photo/2017/11/28/13/46/dark-mood-food-2983709_1280.jpg" alt="fondo verduras" className='img-registro' />
                </div>
            </div>
        </section>
    );
};

export default RegistroUsuarios;