import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';;
import Form from 'react-bootstrap/Form';

const ModalLogin = ({ handleShow, show, handleClose }) => {
    return (
        <>
            <Modal show={show} onHide={handleClose} size='lg' dialogClassName='modal-login'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 p-0">
                            <img src="https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg" alt="sandwich login" className='img-login' />
                        </div>
                        <div className="col-12 col-md-6">
                            <h3 className='text-center mt-2'>Iniciar Sesion</h3>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="juanperez@gmail.com" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control type="password" placeholder="ingrese su contraseña" />
                                </Form.Group>
                                <Button variant="success" type="submit" className='w-100'>
                                    Iniciar Sesion
                                </Button>
                                {/* Boton para dispositivo mobile */}
                                <Button variant='success' onClick={handleClose} className='w-100 mt-2 mb-3 d-lg-none'>Atras</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </Modal >
        </>
    );
};

export default ModalLogin;