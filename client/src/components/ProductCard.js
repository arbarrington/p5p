import {useState} from 'react'
import { ProductEditor } from './ProductEditor'
import {Card, Button} from 'react-bootstrap'
import { AddCartButton } from './AddCartButton'

export function ProductCard ({product, user, setCart, cart, setSelectedProduct, handleShow}) {


  function handleProductSelection() {
    setSelectedProduct(product)
  }

  return (<>
    <Card className="h-100 d-flex flex-column" key={product.id} onClick={()=>{handleProductSelection()}}>
      {product.attachment?<img className="h-100"src={product.attachment} alt={"No image provided"} />:null}
      <Card.Title className="justify-content-between align-items-baseline mb-2">{product.name}</Card.Title>
      <span>{product.description}</span>
      <span>${product.price} per {product.unit}</span>
      <span>{product.stocked? "Listed as Available" : "Listed as Unavailable"}</span>
      {user.producer?
      <Button variant="primary" onClick={handleShow}>Edit/Remove Product</Button>
      :<AddCartButton cart={cart} setCart={setCart} product={product} className="primary">Add To Cart</AddCartButton>}
    </Card>
  </>)
}

// reload={reload} navigate={navigate}
//   const [showEditorModal, setShowEditorModal] = useState(false)
// onClick={()=>setShowEditorModal(true)}
// exit={()=>setShowEditorModal(false)}