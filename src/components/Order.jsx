import React, { useContext, useEffect } from 'react';
import { orderContext } from '../context/orderContext';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Order({ props }) {
  const { id } = useParams();
  const { orders, getOrderById } = useContext(orderContext);

  useEffect(() => {
    getOrderById(id);
  }, []);

  const order = orders;

  return (
    <Container className="mt-4">
      <Row>
        <Col md={12} className="mx-auto">
          <Card>
            <Card.Header as="h5">Order Details</Card.Header>
            <Card.Body>
              <Row>
                <Col md={4}>
                  <Card.Text>
                    <strong>Order ID:</strong> {order.id}
                  </Card.Text>
                </Col>
                <Col md={4}>
                  <Card.Text>
                    <strong>Date Ordered:</strong>{' '}
                    {new Date(order.dateOrder).toLocaleDateString()}
                  </Card.Text>
                </Col>
                <Col md={4}>
                  <Card.Text>
                    <strong>Order Amount:</strong> {order.sumOrder}
                  </Card.Text>
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <Card.Text>
                    <strong>Start Date:</strong>{' '}
                    {new Date(order.dateStart).toLocaleDateString()}
                  </Card.Text>
                </Col>
                <Col md={4}>
                  <Card.Text>
                    <strong>End Date:</strong>{' '}
                    {new Date(order.dateEnd).toLocaleDateString()}
                  </Card.Text>
                </Col>
              </Row>
              {/* Add more details as needed */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
