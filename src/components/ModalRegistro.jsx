import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalRegistro = ({ showRegister, handleShowRegister, handleCloseRegister }) => {
    return (
        <Modal show={showRegister} onHide={handleCloseRegister}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseRegister}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleCloseRegister}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalRegistro;