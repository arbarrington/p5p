import { ProductCard } from "./ProductCard"

export function ProductsEditor ({farm, products}) {


  const selectedFarmProducts = products.filter((product)=> {
    return product.farm_id === farm.id
  })

  console.log('products came through to editor', selectedFarmProducts)
  
  return (<>
    <div className="col">
    <h1>I am the products editor for {farm.name}</h1>
    <p>my farm id is {farm.id}</p>
    {selectedFarmProducts.map((product)=> {return(
      <h1>{product.name}</h1>
    )})}
    </div>
  </>)
}