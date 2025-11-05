import { Button } from 'react-bootstrap';
import { Link } from 'react-router';

const ItemReceta = () => {
    const parametroPrueba = "art";

    return (
        <tr>
            <td>Pastel de papas</td>
            <td>Un delicioso platillo para disfrutar con tu familia, especial para los amantes de las comidas al horno.</td>
            <td>Preparar los ingredientes mencionados</td>
            <td>
                <img src="" alt="imagen comida" />
            </td>
            <td>Guarnicion</td>
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