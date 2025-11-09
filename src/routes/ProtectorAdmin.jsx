import React from 'react';
import { Outlet, Navigate } from 'react-router';


const ProtectorAdmin = ({ usuarioLogueado }) => {
    if (!usuarioLogueado.usuario) {
        return <Navigate to={"/"} />
    } else {
        return <Outlet />
    }
};

export default ProtectorAdmin;