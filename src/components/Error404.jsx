import { Link } from "react-router";
import "../index.css"

const Error404 = () => {
    return (
        <div className="error-container">
            <div className="error-content">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
                    alt="404 icon"
                    className="error-icon"
                />
                <h1 className="error-title">404</h1>
                <h2 className="error-subtitle">¡Oops! Esta receta se nos quemó 🍞</h2>
                <p className="error-text">
                    Parece que la página que buscas no existe o fue movida al recetario
                    secreto del chef. 🧑‍🍳
                </p>
                <Link to="/" className="error-button">
                    Volver al inicio
                </Link>
            </div>
        </div>
    );
};

export default Error404;
