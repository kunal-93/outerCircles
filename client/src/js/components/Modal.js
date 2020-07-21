import React,{useState} from "react";
import {Modal, Alert} from "react-bootstrap";

const Page = Main =>{
    return ({...props}) => {
        return (
            <>
                <Header />
                <Main {...props}/>
                <Footer />
            </>
        )
    }
}

// Modals is a popup Panel
const ModalHOC = SubComponent => {

    return ({setModalShow, ...props}) => {

        const [modalFooterText, setModalFooterText] = useState('');
        const [status, setStatus] = useState('');

        return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="text-center"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <SubComponent 
                    setModalShow={setModalShow} 
                    setModalFooterText={setModalFooterText}
                    setStatus={setStatus}
                />
            </Modal.Body>

            <Modal.Footer style={{justifyContent : "center"}}>
                {modalFooterText && <Alert variant={status}>{modalFooterText}</Alert>}
            </Modal.Footer>
        </Modal>
        );
    }
}

  export default ModalHOC;