import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';

const FormularioRegistro = () => {

    const { register, handleSubmit, formState: { errors }, reset, clearErrors } = useForm();

    const postValidaciones = (data) => {
        console.log(data);
        reset();
    }

    return (
        <Form onSubmit={handleSubmit(postValidaciones)}>
            <Form.Group className="mb-3">
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control type="text" placeholder="ingrese un nombre de usuario"
                    {...register("nombreUsuario", {
                        required: "este campo es obligatorio",
                        minLength: {
                            value: 12,
                            message: "el nombre de usuario debe contener minimo 12 caracteres"
                        },
                        maxLength: {
                            value: 50,
                            message: "el nombre de usuario debe contener maximo 50 caracteres"
                        }
                    })}
                    onChange={() => clearErrors("nombreUsuario")}
                />
                <Form.Text className="text-danger">
                    {errors.nombreUsuario?.message}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="ingrese un email"
                    {...register("email", {
                        required: "este campo es obligatorio",
                        pattern: {
                            value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                            message: "el email ingresado es invalido"
                        }
                    })}
                    onChange={() => clearErrors("email")}
                />
                <Form.Text className="text-danger">
                    {errors.email?.message}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="ingrese una contraseña"
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
            <Button variant="success" type="submit" className='mb-2'>
                Crear Cuenta
            </Button>
        </Form>
    );
};

export default FormularioRegistro;