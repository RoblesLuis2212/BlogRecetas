import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router';

const CardRecetas = ({ itemReceta }) => {
    return (
        <Card className='h-100'>
            <Card.Img src={itemReceta.imagen} className='img-recetas' />
            <Card.Body>
                <Card.Title>{itemReceta.nombreReceta}</Card.Title>
                <Card.Text className='text-truncate' style={{ maxWidth: "300px" }}>
                    {itemReceta.descripcion}
                </Card.Text>
                <Button variant="primary" as={Link} to={`detalle/${itemReceta._id}`} className='w-100'>Ver Más</Button>
            </Card.Body >
        </Card >
    );
};

export default CardRecetas;