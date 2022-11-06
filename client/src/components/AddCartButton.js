import {Button} from "react-bootstrap"
import { useCart } from "../contexts/CartContext"

export function AddCartButton ({product, cart, setCart}) {
  const cartQuantity = 0
  let id=product.id

  function handleAddCart(id) {
    console.log('add cart', product)
    setCart(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }]
      } else {
        return currItems.map(item => {
          if (item.id === id) {
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
              onClick={()=>handleAddCart()} 
              // onClick={() => increaseCartQuantity(id)}
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
                  onClick={()=>console.log('increase clicked')} 
                  // onClick={() => increaseCartQuantity(id)}
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