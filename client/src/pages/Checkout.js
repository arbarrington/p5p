import {Col, Row} from 'react-bootstrap'

export function Checkout ({cart}) {
  console.log('checkout', cart[0])
  return (<>
  <h1>I'm the checkout</h1>
  <Row>
    <Col>Product Name</Col>
    <Col>Quantity Ordered</Col>
    <Col>Price per Unit</Col>
    <Col>Total</Col>
  </Row>
    {cart.map((item)=>{return <Row>
     <Col>{item.product.name}</Col>
     <Col>{item.quantity} {item.product.unit}</Col>
     <Col>{item.product.price}</Col>
     <Col>{item.quantity * item.product.price}</Col>
     </Row>})}
 </> )
}