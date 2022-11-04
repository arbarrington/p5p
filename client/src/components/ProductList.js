import { ProductCard } from "./ProductCard"

export function ProductList ({farm, products}) {

  const selectedFarmProducts = products.filter((product)=> {
    return product.farm_id === farm.id
  })

  console.log('products came through to editor', selectedFarmProducts)
  
  return (<>
    <div className="col">
    <button>Add Product for {farm.name}</button>
    {selectedFarmProducts.map((product)=> {return(
      <ProductCard className='row' product={product}/>
    )})}
    </div>
  </>)
}