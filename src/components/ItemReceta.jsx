import { Button } from 'react-bootstrap';
import { Link } from 'react-router';

const ItemReceta = ({ itemReceta }) => {
    const parametroPrueba = "art";

    return (
        <tr>
            <td>{itemReceta.nombreReceta}</td>
            <td>{itemReceta.descripcion}</td>
            <td>{itemReceta.preparacion}</td>
            <td>
                <img src={itemReceta.imagen} alt="imagen comida" className='img-recetaAdmin' />
            </td>
            <td>{itemReceta.categoria}</td>
            <td>{itemReceta.ingredientes}</td>
            <td>
                <div className='d-flex'>
                    <Button className='btn btn-warning me-2' as={Link} to={`editar/${parametroPrueba}`}>
                        <i className="bi bi-pencil-fill"></i>
                    </Button>
                    <Button className='btn btn-danger me-2'>
                        <i className="bi bi-trash3-fill"></i>
                    </Button>
                </div>
            </td>
        </tr>
    );
};

export default ItemReceta;