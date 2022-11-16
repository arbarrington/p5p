import {Card, Button} from 'react-bootstrap'

export default function CustomerOrderCard ({order}) {
  console.log(order)

  // TODO : Add a modal to show the product list
  return (<>
    <Card>
      <Card.Title>{order.delivery_address} on 1/23/2023 - ${order.price}<Button>Product List</Button></Card.Title>
    </Card>
  </>)
}