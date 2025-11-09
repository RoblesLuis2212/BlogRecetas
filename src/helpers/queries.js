const recetasBackend = import.meta.env.VITE_API_RECETAS;
const usuariosBackend = import.meta.env.VITE_API_USUARIOS;

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

export const crearReceta = async (receta) => {
  try {
    const respuesta = await fetch(recetasBackend, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(sessionStorage.getItem("usuarioKey")).token,
      },
      body: JSON.stringify(receta),
    });
    return respuesta;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const login = async (usuario) => {
  try {
    const respuesta = await fetch(usuariosBackend + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    console.log(respuesta);
    return respuesta;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const registroUsuario = async (usuario) => {
  try {
    const respuesta = await fetch(usuariosBackend, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    return respuesta;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const eliminarRecetaAPI = async (id) => {
  try {
    const respuesta = await fetch(`${recetasBackend}/${id}`, {
      method: "DELETE",
      headers: {
        "x-token": JSON.parse(sessionStorage.getItem("usuarioKey")).token,
      },
    });
    return respuesta;
  } catch (err) {
    console.error(err);
    return null;
  }
};
