import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { obtenerRecetaIDAPI } from '../helpers/queries.js';

const DetalleRecetas = () => {
    const [recetaBuscada, setRecetaBuscada] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        obtenerRecetaID()
    }, [])

    const obtenerRecetaID = async () => {
        const respuesta = await obtenerRecetaIDAPI(id);
        if (respuesta.status === 200) {
            const datos = await respuesta.json();
            setRecetaBuscada(datos);
        }
    }

    return (
        <>
            <h2 className='text-center mt-1'>Detalle Receta</h2>
            <section className='container detalle-recetas'>
                <div className="row">
                    <div className="col-12 col-md-6 p-0">
                        <img src={recetaBuscada.imagen} alt="imagen comida"
                            className='img-registro' />
                    </div>
                    <div className="col-12 col-md-6">
                        <h4 className='mt-2'>{recetaBuscada.nombreReceta}</h4>
                        <p><span className='text-success fw-bold'>Descripcion:</span> {recetaBuscada.descripcion}</p>
                        <p><span className='text-success fw-bold'>Ingredientes:</span> {recetaBuscada.ingredientes}</p>
                        <p><span className='text-success fw-bold'>Preparacion:</span> {recetaBuscada.preparacion}</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DetalleRecetas;