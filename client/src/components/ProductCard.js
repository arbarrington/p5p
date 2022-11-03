export function ProductCard () {
  return (<>
    <div className="card">
      <h1>farm name</h1>
      <img src={"https://via.placeholder.com/400"} alt={"plant name"} />
      <h4>farm message</h4>
      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </div>
  </>)
}