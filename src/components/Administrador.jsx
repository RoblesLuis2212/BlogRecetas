import { useState, useEffect } from 'react';
import TablaRecetas from './TablaRecetas';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';
import { listarRecetasAPI } from '../helpers/queries.js';

const Administrador = () => {
    const [recetas, setRecetas] = useState([]);

    useEffect(() => {
        obtenerRecetas()
    }, [])

    const obtenerRecetas = async () => {
        const respuesta = await listarRecetasAPI();
        if (respuesta.status === 200) {
            const datos = await respuesta.json();
            console.log(datos);
            setRecetas(datos);
        }
    }
    return (
        <section className='container'>
            <div className='d-flex align-items-start'>
                <h2 className='text-center mt-2 flex-grow-1'>Administracion de recetas</h2>
                <Button className='btn btn-success mt-2 me-1' as={Link} to="crear">
                    Agregar
                    <i className="bi bi-plus"></i>
                </Button>
            </div>
            <TablaRecetas recetas={recetas} setRecetas={setRecetas}></TablaRecetas>
        </section>
    );
};

export default Administrador;