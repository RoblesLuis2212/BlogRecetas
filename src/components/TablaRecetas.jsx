import { Table } from 'react-bootstrap';
import ItemReceta from './ItemReceta';

const TablaRecetas = ({ recetas, setRecetas }) => {
    return (
        <Table responsive>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Preparacion</th>
                    <th>Imagen</th>
                    <th>Categoria</th>
                    <th>Ingredientes</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {recetas.map((itemReceta) => (
                    <ItemReceta itemReceta={itemReceta} setRecetas={setRecetas} key={itemReceta._id}></ItemReceta>
                ))}
            </tbody>
        </Table>
    );
};

export default TablaRecetas;