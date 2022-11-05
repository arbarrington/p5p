import {useState} from 'react'
import { NavLink } from "react-router-dom";
import {FarmEditor} from './FarmEditor'
import {Card, Button} from 'react-bootstrap'

export function FarmCard ({id, navigate, reload, farm, setSelectedFarm, user, setSelectedProducts}) {
  const [showEditorModal, setShowEditorModal] = useState(false)

  function handleFarmSelection() {
    setSelectedFarm(farm)
    setSelectedProducts(farm.products)
  }




  return (<Card className="h-100">
    <div key={id} onClick={()=>{handleFarmSelection()}}>
      <Card.Title className="justify-content-between align-items-baseline mb-2">{farm.name}</Card.Title>
      <span>{farm.location}</span>
      <span>{farm.message}</span>
      {(user.producer && farm.website)?
      <Button onClick={()=>setShowEditorModal(true)}className="primary" >Edit Farm Info</Button>
      :<NavLink to={farm.website}><Button className="primary" >Visit {farm.name}'s Website</Button></NavLink>
      }  
    </div>
    {showEditorModal?<FarmEditor reload={reload} navigate={navigate} id={id} exit={()=>setShowEditorModal(false)}/>:null}
  </Card>)
}

// TODO :       <Card.Img className="" src={farm.banner} alt="No banner is available yet" style={{ objectFit: "cover" }}/>