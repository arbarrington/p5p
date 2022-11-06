// TODO : charge a percentage for pickup orders, charge a flat fee for deliveries
// TODO : offer a deal on recurring orders/subscriptions
// TODO : farms can offer recipe packages based on number of servings
// TODO : farms can offer seasonal deals
import { Button, Offcanvas, Stack } from "react-bootstrap"
import {CartItem} from './CartItem'
import {useEffect} from 'react'

export function Cart ({cartOpen, setCartOpen, cart, setCart}) {

//   useEffect(() => { localStorage.setItem("cart", JSON.stringify(cart));
// }, [cart]);

  return(
    <Offcanvas show={cartOpen} onHide={()=>setCartOpen(false)} placement="end">
      <Stack gap={3}>
      {cart.map(item => (
            <CartItem id={item.product.id} product={item.product} quantity={item.quantity}/>
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {(
              cart.reduce((total, cartItem) => {
                const item = cart.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}
          </div>
      <Button onClick={()=>console.log('check me out')}>Checkout</Button>
      </Stack>
    </Offcanvas>
  )
}