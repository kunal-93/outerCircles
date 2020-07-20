import React from "react";
import {Modal} from "react-bootstrap";

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
const ModalHOC = SubComponent =>
    ({setModalShow, ...props}) => {
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
            <SubComponent setModalShow={setModalShow}/>
        </Modal.Body>
      </Modal>
    );
  }

  export default ModalHOC;