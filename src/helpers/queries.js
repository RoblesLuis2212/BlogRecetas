const recetasBackend = import.meta.env.VITE_API_RECETAS;

export const listarRecetasAPI = async () => {
  try {
    const respuesta = await fetch(recetasBackend);
    console.log(respuesta);
    return respuesta;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const obtenerRecetaIDAPI = async (id) => {
  try {
    const respuesta = await fetch(`${recetasBackend}/${id}`);
    console.log(respuesta);
    return respuesta;
  } catch (err) {
    console.error(err);
    return null;
  }
};
