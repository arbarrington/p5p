import {useState} from 'react'
import { NavLink } from "react-router-dom";
import {FarmEditor} from './FarmEditor'

export function FarmCard ({id, navigate, reload, farm, setSelectedFarm, user, setSelectedProducts}) {
  const [showEditorModal, setShowEditorModal] = useState(false)

  function handleFarmSelection() {
    setSelectedFarm(farm)
    setSelectedProducts(farm.products)
  }


  return (<>
    <div key={id} onClick={()=>{handleFarmSelection()}}>
    <div className="card" style={{backgroundImage:`url(${farm.banner})`}}>
      <h1>{farm.name}</h1>
      <img className="" src={farm.banner} alt="No banner is available yet" />
      <h4>{farm.message}</h4>
      {(user.producer && farm.website)?
      <button onClick={()=>setShowEditorModal(true)}className="primary">Edit Farm Info</button>
      :<NavLink to={farm.website}><button className="primary">Visit {farm.name}'s Website</button></NavLink>
      }  
    </div>
    </div>
    {showEditorModal?<FarmEditor reload={reload} navigate={navigate} id={id} exit={()=>setShowEditorModal(false)}/>:null}
  </>)
}