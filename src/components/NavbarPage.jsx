import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';
import ModalLogin from './ModalLogin';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import FormularioRegistro from './FormularioRegistro';

const NavbarPage = ({ usuarioLogueado, setUsuarioLogueado }) => {
    //Estado para abrir el modal login
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Funcion para verificar en que pagina nos encontramos
    const location = useLocation();
    const registro = location.pathname === "/registro";

    const navigate = useNavigate();

    const cerrarSesion = () => {
        sessionStorage.removeItem("usuarioKey");
        setUsuarioLogueado(null);
        navigate("/");
    }

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand as={Link} to="/"><i className="bi bi-fork-knife me-1"></i>Kitchen</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link as={Link} to="/">Recetas</Nav.Link>
                            <Nav.Link href="#link">Contacto</Nav.Link>
                            <Nav.Link href="#link">Acerca De</Nav.Link>
                        </Nav>
                        <hr className='m-0' />
                        <Nav className='ms-auto'>
                            {usuarioLogueado ? (
                                <>
                                    <Link className="navbar-text text-secondary me-3" to={"/administrador"}>{usuarioLogueado.usuario}</Link>
                                    <Button className='btn btn-danger' onClick={cerrarSesion}>Cerrar Sesion</Button>

                                </>
                            ) : (
                                <>
                                    {/*En dispositivos medianos en adelante mostramos botones */}
                                    <Button className='btn btn-success d-none d-lg-block me-2' onClick={handleShow}>Iniciar Sesion</Button>
                                    {/* aplicamos un renderizado condicional, ocultamos el boton en caso de encontrarnos en la pagina de registro */}
                                    {!registro && (
                                        <Button variant='outline-dark d-none d-md-block' as={Link} onClick={handleClose} to="/registro">Registrarse</Button>
                                    )}
                                </>
                            )}
                            {/* En dispositivos mobile mostramos links */}
                            <Nav.Link className='d-lg-none' onClick={handleShow}>Iniciar Sesion</Nav.Link>
                            {!registro && (
                                <Nav.Link className='d-lg-none' as={Link} to="/registro">Registrarse</Nav.Link>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
            <ModalLogin handleShow={handleShow} show={show} handleClose={handleClose} setUsuarioLogueado={setUsuarioLogueado} ></ModalLogin>
        </>
    );
};

export default NavbarPage;