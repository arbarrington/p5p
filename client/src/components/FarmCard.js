import {useState} from 'react'
import {FarmEditor} from './FarmEditor'

export function FarmCard ({id, navigate, reload, farm, setSelectedFarm}) {
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
      <button onClick={()=>setShowEditorModal(true)}className="primary">Edit Farm Info</button>  
    </div>
    </div>
    {showEditorModal?<FarmEditor reload={reload} navigate={navigate} id={id} exit={()=>setShowEditorModal(false)}/>:null}
  </>)
}