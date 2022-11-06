// TODO : charge a percentage for pickup orders, charge a flat fee for deliveries
// TODO : offer a deal on recurring orders/subscriptions
// TODO : farms can offer recipe packages based on number of servings
// TODO : farms can offer seasonal deals
import { Button, Offcanvas, Stack } from "react-bootstrap"

export function Cart ({cartOpen, setCartOpen, cart, setCart}) {

  return(
    <Offcanvas show={cartOpen} onHide={()=>setCartOpen(false)} placement="end">
      <Stack gap={3}>
      {cart.map((item)=>{
        <p>{item.name}</p>
      })}
      <Button>Checkout</Button>
      </Stack>
    </Offcanvas>
  )
}