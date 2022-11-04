import {useState} from 'react'
import {FarmEditor} from './FarmEditor'

export function FarmCard ({farmname, message, banner, id, navigate, reload, farm, setSelectedFarm}) {
  const [showEditorModal, setShowEditorModal] = useState(false)

  function handleCardSelection() {
    setSelectedFarm(farm)
  }

  return (<>
    <div key={id} onClick={()=>{handleCardSelection()}}>
    <div className="card" style={{backgroundImage:`url(${farm.banner})`}}>
      <h1>{farmname}</h1>
      <img className="" src={farm.banner} alt="No banner is available yet" />
      <h4>{message}</h4>
        <button onClick={()=>setShowEditorModal(true)}className="primary">Edit Farm Info</button>
    </div>
    </div>
    {showEditorModal?<FarmEditor reload={reload} navigate={navigate} id={id} exit={()=>setShowEditorModal(false)}/>:null}
  </>)
}