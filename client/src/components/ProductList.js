import { ProductCard } from "./ProductCard"
import {ProductEditor} from './ProductEditor'
import {useState} from 'react'
import {Col, Row, Button} from 'react-bootstrap'

export function ProductList ({farm, products, user, setCart, cart}) {
  const [addNew, setAddNew] = useState(false)
  const [showEditorModal, setShowEditorModal] = useState(false)
  
  const selectedFarmProducts = products.filter((product)=> {
    return product.farm_id === farm.id
  })

  return (<>
    <div className="col">
    {user.producer?
    <Button onClick={()=>{setAddNew(true);setShowEditorModal(true)}}>Add Product for {farm.name}</Button>
    :null}
    <Row md={3} xs={1} lg={5} className="g-3">
    {selectedFarmProducts.map((product)=> {return(
      <Col key={product.id}>
        <ProductCard id={product.id} addNew={addNew} user={user}  setCart={setCart} cart={cart} product={product}/>
      </Col>
    )})}
    </Row>
    </div>
    {showEditorModal?<ProductEditor farm_id={farm.id} addNew={addNew} setAddNew={setAddNew} exit={()=>{setShowEditorModal(false);setAddNew(false)}}/>:null}

  </>)
}