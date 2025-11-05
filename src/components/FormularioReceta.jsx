import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormularioReceta = ({ titulo }) => {
    return (
        <section className='container'>
            <h2 className='mt-2'>{titulo}</h2>
            <Form className='mt-3'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre Receta</Form.Label>
                    <Form.Control type="text" placeholder="ej: frutillas con crema" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control type="text" placeholder="ej: un delicioso postre dulce para disfrutar luego de tus comidas" />
                    <Form.Text>
                        aqui se mostrara el mensaje de error
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Preparacion</Form.Label>
                    <Form.Control type="text" placeholder="ej: batir la crema, luego colocar en la heladera por dos horas, por ultimo disfrutar" />
                    <Form.Text>
                        aqui se mostrara el mensaje de error
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Preparacion</Form.Label>
                    <Form.Control type="text" placeholder="ej: batir la crema, luego colocar en la heladera por dos horas, por ultimo disfrutar" />
                    <Form.Text>
                        aqui se mostrara el mensaje de error
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Imagen (URL)</Form.Label>
                    <Form.Control type="text" placeholder="ej: http://pexels.imagenesPastelChocolate.com" />
                    <Form.Text>
                        aqui se mostrara el mensaje de error
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Categorias</Form.Label>
                    <Form.Select>
                        <option value="">Seleccione una categoria</option>
                        <option value="">Platos Principales</option>
                        <option value="">Gaurnicion</option>
                        <option value="">Postres</option>
                        <option value="">Desayunos</option>
                    </Form.Select>
                    <Form.Text>
                        aqui se mostrara el mensaje de error
                    </Form.Text>
                </Form.Group>
                <Button variant="success" type="submit">
                    Editar
                </Button>
            </Form>
        </section>
    );
};

export default FormularioReceta;