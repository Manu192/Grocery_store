import React, { useState } from 'react'
import { Card, CardHeader, CardTitle, CardBody, Form, Button, Image } from "react-bootstrap";

function Dashboard() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };
  return (
    <div className='w-100'>
      <Card className="w-100 text-center">
        <CardHeader>
          <CardTitle>Upload Banner Image</CardTitle>
        </CardHeader>
        <CardBody>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Select Banner Image</Form.Label>
            <Form.Control type="file" accept="image/*" onChange={handleImageChange} />
          </Form.Group>

          {image && (
            <div className="d-flex justify-content-center">
              <Image src={image} thumbnail width={200} height={200} />
            </div>
          )}

          <Button variant="success" className="mt-3">upload Image</Button>
        </CardBody>
      </Card>
    </div>
  )
}

export default Dashboard