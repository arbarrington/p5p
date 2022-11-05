import {useState} from 'react'
import { Link } from "react-router-dom";
import {FarmEditor} from './FarmEditor'

export function FarmCard ({id, navigate, reload, farm, setSelectedFarm, user}) {
  const [showEditorModal, setShowEditorModal] = useState(false)

  function handleFarmSelection() {
    setSelectedFarm(farm)
  }


  return (<>
    <div key={id} onClick={()=>{handleFarmSelection()}}>
    <div className="card" style={{backgroundImage:`url(${farm.banner})`}}>
      <h1>{farm.name}</h1>
      <img className="" src={farm.banner} alt="No banner is available yet" />
      <h4>{farm.message}</h4>
      {user.producer?
      <button onClick={()=>setShowEditorModal(true)}className="primary">Edit Farm Info</button>
      :<Link to={farm.website}><button className="primary">Visit {farm.name}'s Website</button></Link>
      }  
    </div>
    </div>
    {showEditorModal?<FarmEditor reload={reload} navigate={navigate} id={id} exit={()=>setShowEditorModal(false)}/>:null}
  </>)
}