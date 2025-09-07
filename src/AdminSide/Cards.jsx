import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

function Cards() {

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/v/p/-original-imah4jyfveygyubc.jpeg?q=70" className='p-3' style={{ height: "200px", objectFit: "contain" }} />
                <Card.Body>
                    <Card.Title>Product Name</Card.Title>
                    <Card.Text>
                        Description
                    </Card.Text>
                    <Card.Text>
                        Price:
                    </Card.Text>
                    <div className='d-flex flex-block gap-3 justify-between'>
                        <Button variant="success"><FaEdit /></Button>
                        <Button variant="danger"><MdDelete /></Button>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default Cards