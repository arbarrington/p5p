// TODO : charge a percentage for pickup orders, charge a flat fee for deliveries
// TODO : offer a deal on recurring orders/subscriptions
// TODO : farms can offer recipe packages based on number of servings
// TODO : farms can offer seasonal deals
import { Button, Offcanvas, Stack } from "react-bootstrap"
import {CartItem} from './CartItem'
import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'

export function Cart ({cartOpen, setCartOpen, cart, setCart}) {
  const navigate = useNavigate()
  useEffect(() => { localStorage.setItem("cart", JSON.stringify(cart));}, [cart]);

  return(
      <Offcanvas show={cartOpen} onHide={()=>setCartOpen(false)} placement="end">
        <Stack gap={3}>
        {cart.map(item => (
          <CartItem id={item.product.id} product={item.product} quantity={item.quantity} setCart={setCart}/>
        ))}
        <div className="ms-auto fw-bold fs-5">
          Total{" "}${cart.map((item)=>{return item.product.price*item.quantity}).reduce((partialSum, a)=>partialSum+a,0)}
        </div>
        <Button onClick={()=>{navigate('/checkout');setCartOpen(false)}}>Checkout</Button>
        </Stack>
      </Offcanvas>
    )
}