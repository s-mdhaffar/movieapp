import React, { useState } from 'react'
import { Modal,Button,InputGroup,FormControl, Form} from 'react-bootstrap';
import StarsRating from './StarsRating';

const MovieEdit = ({movie,handleEdit}) => {
    const [show, setShow] = useState(false);

    const [name, setName] = useState(movie.name);
    const [image, setImage] = useState(movie.image);
    const [rating, setRating] = useState(movie.rating);
    const [year, setYear] = useState(movie.year)
    const [trailer, setTrailer] = useState(movie.trailer);
    const [description, setDescription] = useState(movie.description);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleRating=(x)=> setRating(x)


    const handleSubmit=(e)=>{
      e.preventDefault();
      const editMovie={
        id:movie.id,
        name,
        rating,
        image,
        year,
        trailer,
        description
      };
      handleEdit(editMovie)
      handleClose()
    }

    
  
    return (
      <div>
        <Button variant="primary" onClick={handleShow}>
          Edit
        </Button>
        <Modal  show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Movie</Modal.Title>
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
                <div>
                  <InputGroup className="mb-3">
                  <InputGroup.Text id="inputGroup-sizing-default" type="Date">Trailer</InputGroup.Text>
                  <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  type="url"
                  value={trailer}
                  onChange={(e)=>setTrailer(e.target.value)}
                  />
                  </InputGroup>
                </div>
                <div>
                  <InputGroup className="mb-3">
                  <InputGroup.Text id="inputGroup-sizing-default" type="Date">Description</InputGroup.Text>
                  <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  type="url"
                  value={description}
                  onChange={(e)=>setDescription(e.target.value)}
                  />
                  </InputGroup>
                </div>
                <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={handleSubmit} type="submit" variant="primary" >
              Save
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

export default MovieEdit
