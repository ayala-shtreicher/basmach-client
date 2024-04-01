import React, { useContext, useEffect } from 'react'
import { orderContext } from '../context/orderContext'
import { useLocation, useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
export default function OrderList({props}) {
    
  const { id } = props;
  const { orders, addOrder, getOrderById } = useContext(orderContext);

  useEffect( () => {
  //  addOrderToDB()
  getOrderById(id);
  }, [])
  const order=orders;
  return (
    <Container className="mt-4">
    <Row>
      <Col md={8} className="mx-auto">
        <Card>
          <Card.Header as="h5">Order Details</Card.Header>
          <Card.Body>
            <Card.Text>
              <strong>Order ID:</strong> {order.id}
            </Card.Text>
            <Card.Text>
              <strong>Date Ordered:</strong> {new Date(order.dateOrder).toLocaleDateString()}
            </Card.Text>
            <Card.Text>
              <strong>Start Date:</strong> {new Date(order.dateStart).toLocaleDateString()}
            </Card.Text>
            <Card.Text>
              <strong>End Date:</strong> {new Date(order.dateEnd).toLocaleDateString()}
            </Card.Text>
            <Card.Text>
              <strong>Order Amount:</strong> {order.sumOrder}
            </Card.Text>
          
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>  )
}
