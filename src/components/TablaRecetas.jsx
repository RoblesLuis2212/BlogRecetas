import { Table } from 'react-bootstrap';
import ItemReceta from './ItemReceta';

const TablaRecetas = () => {
    return (
        <Table responsive>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Preparacion</th>
                    <th>Imagen</th>
                    <th>Categoria</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <ItemReceta></ItemReceta>
            </tbody>
        </Table>
    );
};

export default TablaRecetas;