import {useState, useEffect} from "react";
import {ProductCard} from "../components/ProductCard"
import {ProductList} from "../components/ProductList"
import {FarmCard} from "../components/FarmCard"
import {Col, Row} from 'react-bootstrap'

export function Search ({user, setCart, cart}) {
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
    <h1>Browse from @Nearby</h1>
    
    <input type="text" id="chirpsearch" onChange={(e)=>setSearchTerm(e.target.value)} placeholder="Search products nearby..."></input>
    
    <h2>Today's Deals</h2>
    <Row>
      <Col style={{textDecoration:"underline"}}>Spaghetti Dinner for 6</Col>
      <Col style={{textDecoration:"underline"}}>20% off Beef when buying 6lbs+</Col>
      <Col style={{textDecoration:"underline"}}>End of season sale - carrots</Col>
    </Row>

    <h2>Popular Farms</h2>
    <Row>
    {farms.map((farm)=>
      <Col>
      <FarmCard className='row' 
                selectedFarm={selectedFarm} 
                setSelectedFarm={setSelectedFarm} 
                setSelectedProducts={setSelectedProducts}
                user={user}  
                farm={farm}/>
     </Col>
    )}
    </Row>

    <div className='col'>
      <h1>Products from {selectedFarm.name}</h1>
      <ProductList cart={cart} 
                   setCart={setCart} 
                   products={selectedProducts} 
                   farm={selectedFarm} 
                   user={user} 
                   className='row'/> 
    </div>

  </>)
}