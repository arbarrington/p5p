

export function Checkout ({cart}) {
  console.log('checkout', cart)
  return (
    cart.map((item)=>{
      <h1>{item.product.name}</h1>
    })
  )
}