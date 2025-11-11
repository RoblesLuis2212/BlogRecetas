import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardCategorias = ({ imagen, titulo }) => {
    return (
        <Card>
            <Card.Img src={imagen} className='img-categoria' />
            <Card.Body>
                <Card.Title className='text-center'>{titulo}</Card.Title>
            </Card.Body>
        </Card>
    );
};

export default CardCategorias;