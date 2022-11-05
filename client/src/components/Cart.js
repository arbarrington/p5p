// TODO : charge a percentage for pickup orders, charge a flat fee for deliveries
// TODO : offer a deal on recurring orders/subscriptions
// TODO : farms can offer recipe packages based on number of servings
// TODO : farms can offer seasonal deals
import { Offcanvas, Stack } from "react-bootstrap"

export function Cart ({cartOpen, setCartOpen}) {

  console.log('cart open?', cartOpen)
  return(
    <Offcanvas show={cartOpen} onHide={()=>setCartOpen(false)} placement="end">
      <Stack gap={3}>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      </Stack>
    </Offcanvas>
  )
}