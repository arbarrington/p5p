export function FarmCard () {
  return (<>
    <div className="card">
      <h1>farm name</h1>
      <img src={"https://via.placeholder.com/400"} alt={"plant name"} />
      <h4>farm message</h4>
        <button className="primary">Edit Farm Info</button>
        <button>Edit Product Selection</button>
    </div>
  </>)
}