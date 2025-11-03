import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardRecetas = ({ imagen, nombrePlato, descripcion }) => {
    return (
        <Card className='h-100'>
            <Card.Img src={imagen} className='img-recetas' />
            <Card.Body>
                <Card.Title>{nombrePlato}</Card.Title>
                <Card.Text className='text-truncate' style={{ maxWidth: "300px" }}>
                    {descripcion}
                </Card.Text>
                <Button variant="primary" className='w-100'>Ver Más</Button>
            </Card.Body >
        </Card >
    );
};

export default CardRecetas;