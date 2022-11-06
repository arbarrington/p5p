import {useState} from 'react'
import { ProductEditor } from './ProductEditor'
import {Card, Button} from 'react-bootstrap'
import { AddCartButton } from './AddCartButton'

export function ProductCard ({product, user, setCart, cart, setSelectedProduct}) {


  function handleProductSelection() {
    setSelectedProduct(product)
  }

  return (<>
    <Card className="h-100 d-flex flex-column" key={product.id} onClick={()=>{handleProductSelection()}}>
      <Card.Title className="justify-content-between align-items-baseline mb-2">{product.name}</Card.Title>
      {product.attachment?<img src={product.attachment} alt={"No image provided"} />:null}
      <span>{product.description}</span>
      <span>${product.price} per {product.unit}</span>
      <span>{product.stocked? "Listed as Available" : "Listed as Unavailable"}</span>
        
    </Card>
  </>)
}

// reload={reload} navigate={navigate}
//   const [showEditorModal, setShowEditorModal] = useState(false)
// onClick={()=>setShowEditorModal(true)}
// exit={()=>setShowEditorModal(false)}