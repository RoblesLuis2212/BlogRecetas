import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { set, useForm } from 'react-hook-form';
import { crearReceta, editarRecetaAPI, obtenerRecetaIDAPI } from '../helpers/queries.js';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router';


const FormularioReceta = ({ titulo }) => {
    const navigate = useNavigate();

    const { register, handleSubmit, reset, formState: { errors }, clearErrors, setValue } = useForm();

    const postValidaciones = async (data) => {
        if (titulo === "Crear Receta") {
            const respuesta = await crearReceta(data);
            if (respuesta.status === 201) {
                Swal.fire({
                    title: "Receta creada exitosamente!",
                    icon: "success",
                    draggable: true
                })
                navigate("/administrador");
                reset();
            } else {
                alert("Ocurrio un error al crear la receta")
            }
        } else if (titulo === "Editar Receta") {
            const respuesta = await editarRecetaAPI(id, data);
            if (respuesta.status === 200) {
                Swal.fire({
                    title: "Receta Actualizada!",
                    text: `La receta ${data.nombreReceta} se actualizo correctamente`,
                    icon: "success",
                }).then(() => {
                    navigate("/administrador");
                });
            } else {
                alert("Ocurrio un error al actualizar la receta")
            }
        }
        console.log(data);
    }

    const { id } = useParams();

    useEffect(() => {
        buscarRecetaID();
    }, [])

    const buscarRecetaID = async () => {
        if (titulo === "Editar Receta") {
            const respuesta = await obtenerRecetaIDAPI(id);
            if (respuesta.status === 200) {
                const recetaBuscada = await respuesta.json();
                setValue("nombreReceta", recetaBuscada.nombreReceta);
                setValue("descripcion", recetaBuscada.descripcion);
                setValue("ingredientes", recetaBuscada.ingredientes);
                setValue("preparacion", recetaBuscada.preparacion);
                setValue("imagen", recetaBuscada.imagen);
                setValue("categoria", recetaBuscada.categoria)
            } else {
                alert("Ocurrio un error al obtener los datos de la receta");
            }
        }
    }

    return (
        <section className='container'>
            <h2 className='mt-2'>{titulo}</h2>
            <Form onSubmit={handleSubmit(postValidaciones)} className='mt-3'>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre Receta</Form.Label>
                    <Form.Control type="text" placeholder="ej: frutillas con crema"
                        {...register("nombreReceta", {
                            required: "Esta campo es obligatorio",
                            minLength: {
                                value: 5,
                                message: "El nombre de la receta debe contener minimo 5 caracteres"
                            },
                            maxLength: {
                                value: 100,
                                message: "El nombre de la receta debe contener maximo 100 caracteres"
                            }
                        })}
                        onChange={() => clearErrors("nombreReceta")}
                    />
                    <Form.Text className="text-danger">
                        {errors.nombreReceta?.message}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control type="text" placeholder="ej: un delicioso postre dulce para disfrutar luego de tus comidas"
                        {...register("descripcion", {
                            required: "Este campo es obligatorio",
                            minLength: {
                                value: 15,
                                message: "La descripcion debe contener minimo 15 caracteres",
                            },
                            maxLength: {
                                value: 200,
                                message: "La descripcion debe contener maximo 200 caracteres"
                            }
                        })}
                        onChange={() => clearErrors("descripcion")}
                    />
                    <Form.Text className='text-danger'>
                        {errors.descripcion?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Ingredientes</Form.Label>
                    <Form.Control type="text" placeholder="ej: frutilla, crema, leche"
                        {...register("ingredientes", {
                            required: "Este campo es obligatorio",
                            minLength: {
                                value: 10,
                                message: "Los ingredientes deben contener minimo 10 caracteres"
                            },
                            maxLength: {
                                value: 250,
                                message: "Los ingredientes deben contener maximo 250 caracteres"
                            }
                        })}
                        onChange={() => clearErrors("ingredientes")}
                    />
                    <Form.Text className='text-danger'>
                        {errors.ingredientes?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Preparacion</Form.Label>
                    <Form.Control type="text" placeholder="ej: batir la crema, luego colocar en la heladera por dos horas, por ultimo disfrutar"
                        {...register("preparacion", {
                            required: "este campo es obligatorio",
                            minLength: {
                                value: 20,
                                message: "La preparacion debe contener minimo 20 caracteres"
                            },
                            maxLength: {
                                value: 300,
                                message: "La preparacion debe contener maximo 300 caracteres"
                            }
                        })}
                        onChange={() => clearErrors("preparacion")}
                    />
                    <Form.Text className='text-danger'>
                        {errors.preparacion?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Imagen (URL)</Form.Label>
                    <Form.Control type="text" placeholder="ej: http://pexels.imagenesPastelChocolate.com"
                        {...register("imagen", {
                            required: "La URL de la imagen es un dato obligatorio",
                            validate: {
                                validUrl: (value) => {
                                    /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?(\.(jpg|jpeg|png|webp))$/.test(value) || "la URL ingresada no es valida"
                                }
                            }
                        })}
                        onChange={() => clearErrors("imagen")}
                    />
                    <Form.Text className='text-danger'>
                        {errors.imagen?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Categorias</Form.Label>
                    <Form.Select {...register("categoria", {
                        required: "Debe seleccionar una categoria",
                    })}
                        onChange={() => clearErrors("categoria")}
                    >
                        <option value="">Seleccione una categoria</option>
                        <option value="Platos Principales">Platos Principales</option>
                        <option value="Postres">Postres</option>
                        <option value="Desayunos">Desayunos</option>
                        <option value="Bebidas">Bebidas</option>
                    </Form.Select>
                    <Form.Text className='text-danger'>
                        {errors.categoria?.message}
                    </Form.Text>
                </Form.Group>
                <Button variant="success" type="submit">
                    {titulo === "Crear Receta" ? "guardar" : "actualizar"}
                </Button>
            </Form>
        </section >
    );
};

export default FormularioReceta;