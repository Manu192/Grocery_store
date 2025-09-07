import React from 'react'
import { Button, Card, CardBody, CardHeader, CardTitle } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';

function Orders() {
  return (
    <>
      <div className='d-flex w-100 justify-content-center px-2'>
        <Card className='w-100 text-center'>
          <CardHeader>
            <CardTitle>Order History</CardTitle>
          </CardHeader>
          <CardBody className="d-flex justify-content-center">
            <Table responsive striped bordered hover className="text-center mb-0">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Order Name</th>
                  <th>Order ID</th>
                  <th>Order Status</th>
                  <th colSpan={2}>Order Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Coconut</td>
                  <td>123</td>
                  <td>Pending</td>
                  <td>20₹</td>
                  <td>
                    <Button size="sm" variant="success">Order details</Button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Chicken</td>
                  <td>123</td>
                  <td>Completed</td>
                  <td>20₹</td>
                  <td>
                    <Button size="sm" variant="success">Order details</Button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Carrot</td>
                  <td>123</td>
                  <td>Pending</td>
                  <td>20₹</td>
                  <td>
                    <Button size="sm" variant="success">Order details</Button>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Beef</td>
                  <td>123</td>
                  <td>Completed</td>
                  <td>20₹</td>
                  <td>
                    <Button size="sm" variant="success">Order details</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </div>
    </>
  )
}

export default Orders
