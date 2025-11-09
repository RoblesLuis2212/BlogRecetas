import { Button } from 'react-bootstrap';
import { Link } from 'react-router';
import { eliminarRecetaAPI, listarRecetasAPI } from '../helpers/queries.js';
import Swal from 'sweetalert2';

const ItemReceta = ({ itemReceta, setRecetas }) => {
    const parametroPrueba = "art";

    const borrarReceta = async () => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: `Vas a eliminar la receta "${itemReceta.nombreReceta}". Esta acción no se puede deshacer.`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const respuesta = await eliminarRecetaAPI(itemReceta._id);
                if (respuesta.status === 200) {
                    Swal.fire({
                        title: "Eliminado",
                        text: `La receta "${itemReceta.nombreReceta}" fue eliminada correctamente.`,
                        icon: "success",
                        timer: 2000,
                    });
                    const respuestaRecetas = await listarRecetasAPI();
                    if (respuestaRecetas.status === 200) {
                        const recetasRestantes = await respuestaRecetas.json();
                        setRecetas(recetasRestantes);
                    }
                } else {
                    alert("Error al eliminar la receta")
                }
            }
        })
    }

    return (
        <tr>
            <td>{itemReceta.nombreReceta}</td>
            <td>{itemReceta.descripcion}</td>
            <td>{itemReceta.preparacion}</td>
            <td>
                <img src={itemReceta.imagen} alt="imagen comida" className='img-recetaAdmin' />
            </td>
            <td>{itemReceta.categoria}</td>
            <td>{itemReceta.ingredientes}</td>
            <td>
                <div className='d-flex'>
                    <Button className='btn btn-warning me-2' as={Link} to={`editar/${parametroPrueba}`}>
                        <i className="bi bi-pencil-fill"></i>
                    </Button>
                    <Button className='btn btn-danger me-2' onClick={borrarReceta}>
                        <i className="bi bi-trash3-fill"></i>
                    </Button>
                </div>
            </td>
        </tr>
    );
};

export default ItemReceta;