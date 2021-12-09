import React, { useState } from 'react'
import { Modal,Button,InputGroup,FormControl, Form} from 'react-bootstrap';
import StarsRating from './StarsRating';

const AddModal = ({add}) => {
    const [show, setShow] = useState(false);

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [rating, setRating] = useState(1);
    const [year, setYear] = useState("")

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleRating=(x)=> setRating(x)


    const handleSubmit=(e)=>{
      e.preventDefault();
      const newMovie={
        id:Math.random(),
        name,
        rating,
        image,
        year
      };
      add(newMovie)
      handleClose()
    }

    
  
    return (
      <div>
        <Button variant="primary" onClick={handleShow}>
          +
        </Button>
        <Modal  show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Movie</Modal.Title>
          </Modal.Header>
        <Form  >
          <Modal.Body onSubmit={handleSubmit}>
              <div>
                <div>
                  <InputGroup className="mb-3">
                  <InputGroup.Text id="inputGroup-sizing-default">Title</InputGroup.Text>
                  <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  />
                  </InputGroup>
                </div>
                <div>
                  <InputGroup className="mb-3">
                  <InputGroup.Text id="inputGroup-sizing-default"  >Image</InputGroup.Text>
                  <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  type="url"
                  value={image}
                  onChange={(e)=>setImage(e.target.value)}
                  />
                  </InputGroup>
                </div>
                <div>
                  <StarsRating rating={rating} handleRating={handleRating}/>
                </div>
                <div>
                  <InputGroup className="mb-3">
                  <InputGroup.Text id="inputGroup-sizing-default" type="Date">Year</InputGroup.Text>
                  <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  type="Date"
                  value={year}
                  onChange={(e)=>setYear(e.target.value)}
                  />
                  </InputGroup>
                </div>
                <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button onClick={handleSubmit} type="submit" variant="primary" >
              Add Movie
            </Button>
              </div>
          </Modal.Body>
      </Form>
          <Modal.Footer>
           
          </Modal.Footer>
        </Modal>
      </div>
    );
   
  }

export default AddModal
