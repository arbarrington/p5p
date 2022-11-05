import {useState} from 'react'
import { ProductEditor } from './ProductEditor'

export function ProductCard ({product, user}) {
  const [showEditorModal, setShowEditorModal] = useState(false)



  return (<>
    <div className="card">
      <h1>{product.name}</h1>
      <img src={product.image} alt={"plant name"} />
      <h4>{product.description}</h4>
      <h4>${product.price} per {product.unit}</h4>
      <h4>{product.stocked? "Listed as Available" : "Listed as Unavailable"}</h4>
        {user.producer?
        <button className="primary" onClick={()=>setShowEditorModal(true)}>Edit Product</button>
        :<button className="primary" onClick={()=>console.log('figuring out the cart')}>Add To Cart</button>}
    </div>
    {showEditorModal?<ProductEditor id={product.id} product={product} exit={()=>setShowEditorModal(false)}/>:null}
  </>)
}

// reload={reload} navigate={navigate}