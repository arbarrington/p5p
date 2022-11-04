export function ProductCard ({product}) {
  return (<>
    <div className="card">
      <h1>{product.name}</h1>
      <img src={product.image} alt={"plant name"} />
      <h4>{product.description}</h4>
      <h4>${product.price} per {product.unit}</h4>
      <h4>{product.stocked? "Listed as Available" : "Listed as Unavailable"}</h4>
        <button className="primary">Edit Product</button>
    </div>
  </>)
}