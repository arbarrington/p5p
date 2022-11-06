import {Button} from "react-bootstrap"
import {useState} from 'react'

export function AddCartButton ({product, cart, setCart}) {


  const cartQuantity = cart.reduce(
    (quantity, product) => product.quantity + quantity,
    0
  )

  function increaseCartQuantity(product){

    setCart(cart => {
      if (cart.find(item => item.id === product.id) == null) {
        return [...cart, { product, quantity: 1 }]
      } else {
        return cart.map(item => {
          if (item.id === product.id) {

            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  return (
    <div className="mt-auto">
          {cartQuantity === 0 ? (
            <Button className="w-100"
 
              onClick={() => increaseCartQuantity(product)}
              >
              + Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}>
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}>
                <Button
                  onClick={()=>console.log('decrease clicked')} 
                  // onClick={() => decreaseCartQuantity(id)}
                >-</Button>
                <div>
                  <span className="fs-3">{cartQuantity}</span>{product.unit} in cart
                </div>
                <Button 
                  // onClick={()=>console.log('increase clicked')} 
                  onClick={() => increaseCartQuantity(product)}
                >+</Button>
              </div>
              <Button
                onClick={()=>console.log('remove clicked')} 
                // onClick={() => removeFromCart(id)}
                variant="danger"
                size="sm">
                Remove
              </Button>
            </div>
          )}
        </div>
  )
}

// TODO : context