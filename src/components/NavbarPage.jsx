import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';
import ModalLogin from './ModalLogin';
import { useState } from 'react';
import ModalRegistro from './ModalRegistro';

const NavbarPage = () => {
    //Estado para abrir el modal login
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Estado para abrir modal de registro
    const [showRegister, setShowRegister] = useState(false);

    const handleShowRegister = () => {
        handleClose()
        setShowRegister(true);
    }

    const handleCloseRegister = () => setShowRegister(false);
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#home"><i className="bi bi-fork-knife me-1"></i>Kitchen</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link href="#home">Recetas</Nav.Link>
                            <Nav.Link href="#link">Contacto</Nav.Link>
                            <Nav.Link href="#link">Acerca De</Nav.Link>
                        </Nav>
                        <hr className='m-0' />
                        <Nav className='ms-auto'>
                            {/*En dispositivos medianos en adelante mostramos botones */}
                            <Button className='btn btn-success d-none d-lg-block me-2' onClick={handleShow}>Iniciar Sesion</Button>
                            <Button variant='outline-dark d-none d-md-block' onClick={handleShowRegister}>Registrarse</Button>
                            {/* En dispositivos mobile mostramos links */}
                            <Nav.Link className='d-lg-none' onClick={handleShow}>Iniciar Sesion</Nav.Link>
                            <Nav.Link className='d-lg-none' onClick={handleShowRegister}>Registrarse</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
            <ModalLogin handleShow={handleShow} handleShowRegister={handleShowRegister} show={show} handleClose={handleClose}></ModalLogin>
            <ModalRegistro handleShowRegister={handleShowRegister} handleCloseRegister={handleCloseRegister} showRegister={showRegister} ></ModalRegistro>
        </>
    );
};

export default NavbarPage;