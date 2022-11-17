import {Card, Button, Row, Col, Modal} from 'react-bootstrap'
import {useState} from 'react'


export default function CustomerOrderCard ({order}) {
  console.log(JSON.parse(order.cart))
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // TODO : Add a modal to show the product list
  return (<>

  <li onClick={()=>{handleShow()}} class="list-group-item list-group-item-action d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Expected Arrival: 1/23/2023</div>
      <div className="d-inline-flex p-2">{order.delivery_address}</div>
    </div>
    <span class="badge bg-primary rounded-pill">{JSON.parse(order.cart).length} items</span>
  </li>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>
            Delivery for {order.delivery_address} on 1/23/2023
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {JSON.parse(order.cart).map((item)=>{
          return <p>{item.product.name} - {item.quantity} {item.product.unit}</p>
        })}
      </Modal.Body>
      
      <Modal.Footer>
      <h5>Total Price = ${JSON.parse(order.cart).map((item)=>{return item.product.price*item.quantity}).reduce((partialSum, a)=>partialSum+a,0)}</h5>
        <div className="spacer"></div>
      <Button variant="secondary" onClick={handleClose}>Close</Button>
      </Modal.Footer>

    </Modal>
  </>)
}