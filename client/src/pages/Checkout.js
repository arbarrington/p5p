import {Col, Row} from 'react-bootstrap'
import {AddressInput} from '../components/AddressInput'

export function Checkout ({cart}) {
  console.log('checkout', cart[0])
  return (<>
  <h1>Review and Pay</h1>
  <Row>
    <Col><h2>Product Name</h2></Col>
    <Col><h2>Quantity Ordered</h2></Col>
    <Col><h2>Price per Unit</h2></Col>
    <Col><h2>Total</h2></Col>
  </Row>
    {cart.map((item)=>{return <Row>
     <Col>{item.product.name}</Col>
     <Col>{item.quantity} {item.product.unit}</Col>
     <Col>${item.product.price}</Col>
     <Col>${item.quantity * item.product.price}</Col>
     </Row>})}

  <h1 className='mt-5 mb-0'>Enter Shipping Address</h1>
      <AddressInput className='mt-0' cart={cart}></AddressInput>
 </> )
}