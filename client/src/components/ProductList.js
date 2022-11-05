import { ProductCard } from "./ProductCard"
import {ProductEditor} from './ProductEditor'
import {useState} from 'react'

export function ProductList ({farm, products}) {
  const [addNew, setAddNew] = useState(false)
  const [showEditorModal, setShowEditorModal] = useState(false)
  
  const selectedFarmProducts = products.filter((product)=> {
    return product.farm_id === farm.id
  })

  
  return (<>
    <div className="col">
    <button onClick={()=>{setAddNew(true);setShowEditorModal(true)}}>Add Product for {farm.name}</button>
    {selectedFarmProducts.map((product)=> {return(
      <ProductCard addNew={addNew} className='row' product={product}/>
    )})}
    </div>
    {showEditorModal?<ProductEditor farm_id={farm.id} addNew={addNew} setAddNew={setAddNew} exit={()=>{setShowEditorModal(false);setAddNew(false)}}/>:null}

  </>)
}