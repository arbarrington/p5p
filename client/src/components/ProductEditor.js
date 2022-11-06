import { useState } from 'react';
import { LabeledInput } from "./LabeledInput";


export function ProductEditor ({product, exit, id, setAddNew, addNew, farm_id}) {
  const [productInfo, setProductInfo] = useState({})
  const [attachment, setAttachment] = useState(null)
  const handleProductEdit = ({target:{name, value}})=>setProductInfo(productInfo=>({...productInfo, [name]: value}))

  function patchProduct (e) {
    e.preventDefault()
    const formData = new FormData()
    for (const key in productInfo) { formData.append(key, productInfo[key]) }
    if (attachment) formData.append('attachment', attachment, attachment.name)
    if (addNew) formData.append('farm_id', farm_id)
    console.log("farmid", farm_id)

    fetch(addNew?'/products':`/products/${id}`, {
      method: addNew?"POST":"PATCH",
      body: formData
      }).then(r=>{if (r.ok) {
        console.log(addNew?'prod post':'prod patch', formData)
        setAddNew(false)
      }})
  }

  return (<>
    <div className="modal fade">
      <div className='modal-content'>
        <h1>{addNew?"Add":"Edit"} product</h1>
        <form onSubmit={patchProduct}>
        <button className="closeModal" aria-label="close" onClick={exit}>X</button>
        <LabeledInput value={productInfo.name} name="name" label="Product Name" onChange={(e)=>handleProductEdit(e)}/>
        <LabeledInput value={productInfo.description} name="description" label="Product Description" onChange={(e)=>handleProductEdit(e)}/>
        <LabeledInput value={productInfo.price} name="price" label="Product Price" onChange={(e)=>handleProductEdit(e)}/>
        <LabeledInput value={productInfo.unit} name="unit" label="Product Unit" onChange={(e)=>handleProductEdit(e)}/>
        <select value={productInfo.stocked} name="stocked" label="Available?" onChange={(e)=>handleProductEdit(e)}>
          <option value={true} label="Yes, available now"></option>
          <option value={false} label="Not available now"></option>
        </select>
        <label htmlFor="product-input">Product Image:</label>
        <input value={productInfo.attachment} name="banner" label="Photo of your product" onChange={e=>setAttachment(e.target.files[0])} type="file" accept="image/*" htmlFor="product-input"/>
        <input type="submit" />
        </form>
      </div>
    </div>
  </>)

}