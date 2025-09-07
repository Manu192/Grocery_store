import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Cards from '../Cards'
import Modal from 'react-bootstrap/Modal';

function Products() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <div className="container my-4">
        <div className="d-flex justify-content-end mb-3">
          <Button onClick={handleShow} className="btn btn-success">Add new Product</Button>
        </div>

        <div className="row g-4">
          <div className="col-12 col-md-4 col-lg-3"><Cards /></div>
          <div className="col-12 col-md-4 col-lg-3"><Cards /></div>
          <div className="col-12 col-md-4 col-lg-3"><Cards /></div>
          <div className="col-12 col-md-4 col-lg-3"><Cards /></div>
          <div className="col-12 col-md-4 col-lg-3"><Cards /></div>
          <div className="col-12 col-md-4 col-lg-3"><Cards /></div>

        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <fieldset className="border p-3 rounded">
              <legend className="float-none w-auto px-2">Add Products</legend>
              <Form.Group className="mb-3">
                <Form.Label>Product Name:</Form.Label>
                <Form.Control type="text" placeholder="Enter product name" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Price:</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Category:</Form.Label>
                <Form.Control type="text" placeholder="E.g. Grocery, Electronics " />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Add Image:</Form.Label>
                <Form.Control type="file" accept="image/*" />
              </Form.Group>
            </fieldset>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add Product
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Products
