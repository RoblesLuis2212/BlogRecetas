import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';;
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';

const ModalLogin = ({ handleShow, show, handleClose, handleShowRegister }) => {
    const navigate = useNavigate();

    const paginaRegistro = () => {
        handleClose();
        navigate("/registro");
    }

    const { register, handleSubmit, formState: { errors }, reset, clearErrors } = useForm();

    const postValidaciones = (data) => {
        console.log(data);
        reset();
    }
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
                            <Form onSubmit={handleSubmit(postValidaciones)}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="juanperez@gmail.com"
                                        {...register("email", {
                                            required: "este campo es obligatorio",
                                            pattern: {
                                                value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                                                message: "el email ingresado no es valido"
                                            },
                                        })}
                                        onChange={() => clearErrors("email")}
                                    />
                                    <Form.Text className="text-danger">
                                        {errors.email?.message}
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control type="password" placeholder="ingrese su contraseña"
                                        {...register("password", {
                                            required: "este campo es obligatorio",
                                            pattern: {
                                                value: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])\S{8,64}$/,
                                                message: "la contraseña debe contener al menos 8 caracteres, una mayuscula, una minuscula y un numero"
                                            }
                                        })}
                                        onChange={() => clearErrors("password")}
                                    />
                                    <Form.Text className='text-danger'>
                                        {errors.password?.message}
                                    </Form.Text>
                                </Form.Group>

                                <Button variant="success" type="submit" className='w-100'>
                                    Iniciar Sesion
                                </Button>
                                <p className='text-center mt-2'>¿No tienes una cuenta?<Button variant='link' className='mb-1 p-0 ms-1' onClick={paginaRegistro}>Registrate</Button></p>
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