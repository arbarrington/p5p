import {useState, useEffect} from "react";
import {ProductCard} from "../components/ProductCard"
import {FarmCard} from "../components/FarmCard"

export function Search ({user}) {
  const [farms, setFarms] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  

  useEffect(() => {fetch("/farms").then((r) => {
    if (r.ok) { r.json().then((data) => setFarms(data)); }
    // else { setUser(null) }
  });}, []);

  console.log(farms)

  // TODO figure out location service that shows nearby farms
  // TODO 
  return (<>
    <h1>Browse Foods and Farms @Your location</h1>
    <h2>Today's Deals</h2>
    <h2>Popular Farms like </h2>
    <div className="row">
    {farms.map((farm)=>
     <FarmCard className='row' user={user} key={farm.id} farm={farm}/>
    )}
    </div>
    <h2>Popular Foods</h2>
    <h2>Search by food, category, or farm</h2>
    <input type="text" id="chirpsearch" onChange={(e)=>setSearchTerm(e.target.value)} placeholder="Search chirps..."></input>
  </>)
}