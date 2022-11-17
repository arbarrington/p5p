import {Button} from "react-bootstrap"
import {useState} from 'react'

// TODO : fix cart to match add quantity button

export function AddCartButton ({product, cart, setCart}) {
  const [cartQuantity,setCartQuantity] = useState(0)
  console.log('addbtn',cart.find((item)=>{if (item.product.id == product.id) return item.quantity }))

  function increaseCartQuantity(product){
    setCartQuantity((cartQuantity)=> cartQuantity+1)
    setCart(cart => {
      if (cart.find(item => item.product.id === product.id) == null) {
        return [...cart, { product, quantity: 1 }]
      } else {
        return cart.map(item => {
          if (item.product.id === product.id) {
            return {...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function decreaseCartQuantity(product){
    setCartQuantity((cartQuantity)=> cartQuantity-1)
    setCart(cart => {
      if (cart.find(item => item.product.id === product.id)?.quantity === 1) {
        return cart.filter(item => item.product.id !== product.id)
      } else {
        return cart.map(item => {
          if (item.product.id === product.id) {
            return {...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function removeFromCart(product){
    setCartQuantity(0)
    setCart(cart => {
      return cart.filter((item)=>item.product.id !== product.id)
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
                  // onClick={()=>console.log('decrease clicked')} 
                  onClick={() => decreaseCartQuantity(product)}
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
                // onClick={()=>console.log('remove clicked')} 
                onClick={() => removeFromCart(product)}
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