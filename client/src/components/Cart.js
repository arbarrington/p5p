// TODO : charge a percentage for pickup orders, charge a flat fee for deliveries
// TODO : offer a deal on recurring orders/subscriptions
// TODO : farms can offer recipe packages based on number of servings
// TODO : farms can offer seasonal deals

export function Cart ({cart, setCart}) {
  console.log(cart)
  
  return(
    <div>
      <h1>hi</h1>
      {cart.map((product)=>{
        <h1>{product.name}</h1>
      })}
    </div>
  )
}