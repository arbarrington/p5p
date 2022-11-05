import {useState} from 'react'
import { ProductEditor } from './ProductEditor'
import {Card} from 'react-bootstrap'

export function ProductCard ({product, user, setCart, cart}) {
  const [showEditorModal, setShowEditorModal] = useState(false)

  function handleAddCart () {
    console.log('adding to cart', product)
  }
  
  let cartQuantity = 0
  return (<>
    <Card className="h-100 d-flex flex-column">
      <Card.Title className="justify-content-between align-items-baseline mb-2">{product.name}</Card.Title>
      {product.image?<img src={product.image} alt={"No image provided"} />:null}
      <span>{product.description}</span>
      <span>${product.price} per {product.unit}</span>
      <span>{product.stocked? "Listed as Available" : "Listed as Unavailable"}</span>
        {user.producer?
        <button className="primary" onClick={()=>setShowEditorModal(true)}>Edit Product</button>
        :<button className="primary" onClick={()=>handleAddCart()}>Add To Cart</button>}
    </Card>
    {showEditorModal?<ProductEditor key={product.id} product={product} exit={()=>setShowEditorModal(false)}/>:null}
  </>)
}

// reload={reload} navigate={navigate}