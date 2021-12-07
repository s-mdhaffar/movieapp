import React, { useState } from 'react'
import { Modal,Button} from 'react-bootstrap';

const AddModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          +
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div>
                <div>
                    <label className="input" >Title : </label>
                    <input type="text" />
                </div>
                <div>
                    <label className="input" >Image : </label>
                    <input type="text" />
                </div>
                <div>
                    <label className="input" >Rating : </label>
                    <input type="text" />
                </div>
                <div>
                    <label className="input" >Year : </label>
                    <input type="text" />
                </div>
              </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Add Movie
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default AddModal
