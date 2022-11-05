import {useState, useEffect} from "react";
import {ProductCard} from "../components/ProductCard"
import {ProductList} from "../components/ProductList"
import {FarmCard} from "../components/FarmCard"

export function Search ({user}) {
  const [farms, setFarms] = useState([])
  const [selectedProducts, setSelectedProducts] = useState([])
  const [selectedFarm, setSelectedFarm] = useState({})
  const [searchTerm, setSearchTerm] = useState("")
  


  useEffect(() => {fetch("/farms").then((r) => {
    if (r.ok) { r.json().then((data) => {setFarms(data);setSelectedFarm(data[0]);setSelectedProducts(data[0].products)}); }
    else { console.log('failed fetching farms') }
  });}, []);



  // TODO figure out location service that shows nearby farms
  // TODO 
  return (<>
    <h1>Browse Foods and Farms @Your location</h1>
    <h2>Today's Deals</h2>
    <div className="row">
      <p style={{textDecoration:"underline"}}>Spaghetti Dinner for 6</p>
      <div className="spacer"></div>
      <p style={{textDecoration:"underline"}}>20% off Beef when buying 6lbs+</p>
      <div className="spacer"></div>
      <p style={{textDecoration:"underline"}}>End of season sale - carrots</p>
    </div>
    <h2>Popular Farms</h2>
    <div className="row">
    {farms.map((farm)=>
     <FarmCard className='row' selectedFarm={selectedFarm} setSelectedFarm={setSelectedFarm} setSelectedProducts={setSelectedProducts}user={user} key={farm.id} farm={farm}/>
    )}
    </div>
    <div className='col'>
      {/* <h1>{selectedFarm.name}</h1>*/}
      <ProductList  products={selectedProducts} farm={selectedFarm} user={user} className='row'/> 
    </div>
    <h2>Search by food, category, or farm</h2>
    <input type="text" id="chirpsearch" onChange={(e)=>setSearchTerm(e.target.value)} placeholder="Search chirps..."></input>
  </>)
}