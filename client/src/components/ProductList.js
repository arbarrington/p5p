import { ProductCard } from "./ProductCard"
import { AddCartButton } from './AddCartButton'
import { LabeledInput } from "./LabeledInput";
import {useState} from 'react'
import {Col, Row, Button, Modal} from 'react-bootstrap'

export function ProductList ({farm, products, user, setCart, cart}) {
  const [addNew, setAddNew] = useState(false)
  const [show, setShow] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(products[0])
  const handleClose = () => setShow(false);
  const handleShow = () => {setShow(true);console.log('addNew', addNew)};
  
  const displayedProducts = products.filter((product)=> {
    return product.farm_id === farm.id
  })

  const [productInfo, setProductInfo] = useState({})
  const [attachment, setAttachment] = useState(null)
  const handleProductEdit = ({target:{name, value}})=>setProductInfo(productInfo=>({...productInfo, [name]: value}))

  function patchProduct (e) {
    e.preventDefault()
    const formData = new FormData()
    for (const key in productInfo) { formData.append(key, productInfo[key]) }
    if (attachment) formData.append('attachment', attachment, attachment.name)
    if (addNew) formData.append('farm_id', farm.id)
    console.log('patch or post product triggered')
    
    fetch(addNew?'/products':`/products/${selectedProduct.id}`, {
      method: addNew?"POST":"PATCH",
      body: formData
      }).then(r=>{if (r.ok) {
        console.log(addNew?'prod post':'prod patch', formData)
        setAddNew(false)
        handleClose()
      }})
  }

  return (<>
    <div className="col">
      <Row md={3} xs={1} lg={5} className="g-3">
        {displayedProducts.map((product)=> {return(
          <Col key={product.id}>
            <ProductCard id={product.id} addNew={addNew} user={user} setSelectedProduct={setSelectedProduct} product={product}/>
            {user.producer?
            <Button variant="primary" onClick={handleShow}>Edit Product</Button>
            :<AddCartButton product={product} className="primary">Add To Cart</AddCartButton>}
          </Col>
        )})}
      </Row>
      {user.producer?
      <Button onClick={()=>{setAddNew(true);handleShow()}}>Add Product for {farm.name}</Button>
      :null}
    </div>
    
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{addNew?`Add Product for ${farm.name}`:`Edit ${selectedProduct.name}`} </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form className="col" onSubmit={patchProduct}>
        <LabeledInput value={productInfo.name} name="name" label="Product Name" onChange={(e)=>handleProductEdit(e)}/>
        <LabeledInput value={productInfo.description} name="description" label="Product Description" onChange={(e)=>handleProductEdit(e)}/>
        <LabeledInput value={productInfo.price} name="price" label="Product Price" onChange={(e)=>handleProductEdit(e)}/>
        <LabeledInput value={productInfo.unit} name="unit" label="Product Unit" onChange={(e)=>handleProductEdit(e)}/>
        <div>Is the product available?
        <select value={productInfo.stocked} name="stocked" label="Available?" onChange={(e)=>handleProductEdit(e)}>
          <option value={true} label="Yes, available now"></option>
          <option value={false} label="Not available now"></option>
        </select>
        </div>
        <div>
        <label htmlFor="product-input">Product Image:</label>
        <input value={productInfo.attachment} name="banner" label="Photo of your product" onChange={e=>setAttachment(e.target.files[0])} type="file" accept="image/*" htmlFor="product-input"/>
        </div>
        </form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        <Button variant="primary" onClick={(e)=>patchProduct(e)}>Save Changes</Button>
      </Modal.Footer>

    </Modal>

  </>)
}