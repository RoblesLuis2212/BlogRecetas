import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormularioRegistro = () => {
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control type="text" placeholder="ingrese un nombre de usuario" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="ingrese un email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="ingrese una contraseña" />
            </Form.Group>
            <Button variant="success" type="submit" className='mb-2'>
                Crear Cuenta
            </Button>
        </Form>
    );
};

export default FormularioRegistro;