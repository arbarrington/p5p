export function ProductCard ({product}) {
  return (<>
    <div className="card">
      <h1>{product.name}</h1>
      <img src={product.image} alt={"plant name"} />
      <h4>{product.description}</h4>
      <h4>{product.price} per {product.Unit}</h4>
      {product.stocked ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </div>
  </>)
}