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
