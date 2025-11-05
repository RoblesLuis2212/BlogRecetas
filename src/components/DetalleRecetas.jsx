import React from 'react';

const DetalleRecetas = () => {
    return (
        <>
            <h2 className='text-center mt-1'>Detalle Receta</h2>
            <section className='container detalle-recetas'>
                <div className="row">
                    <div className="col-12 col-md-6 p-0">
                        <img src="https://quaker.lat/cl/sites/cl/files/imgs/PASTEL-DE-PAPAS.jpg" alt="imagen comida"
                            className='img-registro' />
                    </div>
                    <div className="col-12 col-md-6">
                        <h4 className='mt-2'>Pastel de papa</h4>
                        <p>Descripcion: el pastal de papa es un platillo clasico delicioso para disfutrar en familia</p>
                        <p>Ingredientes: </p>
                        <ul>
                            <li>1k de papa</li>
                            <li>Carne</li>
                            <li>Cebolla</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DetalleRecetas;