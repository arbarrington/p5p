import { ProductCard } from "./ProductCard"
import {ProductEditor} from './ProductEditor'
import {useState} from 'react'

export function ProductList ({farm, products, user}) {
  const [addNew, setAddNew] = useState(false)
  const [showEditorModal, setShowEditorModal] = useState(false)
  
  const selectedFarmProducts = products.filter((product)=> {
    return product.farm_id === farm.id
  })
  console.log('products from prodlist', products)
  return (<>
    <div className="col">
    {user.producer?
    <button onClick={()=>{setAddNew(true);setShowEditorModal(true)}}>Add Product for {farm.name}</button>
    :null}
    {selectedFarmProducts.map((product)=> {return(
      <ProductCard key={product.id}addNew={addNew} user={user} className='row' product={product}/>
    )})}
    </div>
    {showEditorModal?<ProductEditor farm_id={farm.id} addNew={addNew} setAddNew={setAddNew} exit={()=>{setShowEditorModal(false);setAddNew(false)}}/>:null}

  </>)
}