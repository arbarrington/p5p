import {useState} from "react";
import {ProductCard} from "../components/ProductCard"

export function Search () {
  const [searchTerm, setSearchTerm] = useState("")

  // TODO figure out location service
  return (<>
    <h1>Browse Foods and Farms @Your location</h1>
    <h2>Today's Deals</h2>
    <h2>Popular Farms</h2>
    <h2>Popular Foods</h2>
    <h2>Search by food, category, or farm</h2>
    <input type="text" id="chirpsearch" onChange={(e)=>setSearchTerm(e.target.value)} placeholder="Search chirps..."></input>
  </>)
}