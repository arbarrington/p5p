import { useState } from 'react';
import { LabeledInput } from "./LabeledInput";


export function ProductEditor ({product, exit, id}) {
  const [productInfo, setProductInfo] = useState({})
  const [image, setImage] = useState(null)
  
  const handleProductEdit = ({target:{name, value}})=>setProductInfo(productInfo=>({...productInfo, [name]: value}))

  function patchProduct (e) {
    // e.preventDefault()
    const formData = new FormData()
    for (const key in productInfo) { formData.append(key, productInfo[key]) }
    if (image) formData.append('image', image, image.name)
    console.log("patch farm triggered", productInfo)

    fetch(`/products/${id}`, {
      method: "PATCH",
      body: formData
      }).then(r=>{if (r.ok) {
        console.log('product patch triggerd', formData)
        // TODO : fetch user data
      }})
  }
    return (<>
      <div className="modalOverlay">
        <div className='modal'>
      <h1>Edit {product.name}, currently listed as {product.stocked? "Available":"Unavailable"}</h1>
      <form onSubmit={patchProduct}>
      <button className="closeModal" aria-label="close" onClick={exit}>X</button>
      <LabeledInput value={productInfo.name} name="name" label="Farm Name" onChange={(e)=>handleProductEdit(e)}/>
      <label htmlFor="icon-input">Image:</label>
      <input value={product.image} name="banner" label="Photo of your product" onChange={e=>setImage(e.target.files[0])} type="file" accept="image/*" htmlFor="product-input"/>
      <input type="submit" />
      </form>
      </div>
      </div>
    </>)

}