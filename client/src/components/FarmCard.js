import {useState} from 'react'
import { NavLink } from "react-router-dom";
import {FarmEditor} from './FarmEditor'
import {Card, Button} from 'react-bootstrap'
import {LabeledInput} from './LabeledInput'
import "bootstrap/dist/css/bootstrap.min.css"

export function FarmCard ({id, navigate, reload, farm, setSelectedFarm, user, setSelectedProducts=()=>{}}) {
  
  const [farmInfo, setFarmInfo] = useState({})
  const [banner, setBanner] = useState(null)


  function handleFarmSelection() {
    setSelectedFarm(farm)
    setSelectedProducts(farm.products)
  }

  // const myModal = document.getElementById('farmModal')
  // const myInput = document.getElementById('myInput')

  // myModal.addEventListener('shown.bs.modal', () => {
  //   myInput.focus()
  // })

  // route to farm website window.location.assign

  return (<>
    <Card className="h-100 d-flex flex-column" key={id} onClick={()=>{handleFarmSelection()}}>
      <Card.Title className="justify-content-between align-items-baseline mb-2">{farm.name}</Card.Title>
      <Card.Img className="" src={farm.banner} alt="No banner is available yet" style={{ objectFit: "cover" }}/>
      {/* <span>{farm.location}</span> */}
      {/* <span>{farm.message}</span> */} 
    </Card>
    
  </>)
}

// TODO : make cards flippable   
// TODO : <NavLink to={farm.website}><Button className="primary" >Visit {farm.name}'s Website</Button></NavLink>
// onClick={()=>setShowEditorModal(true)}
// exit={()=>setShowEditorModal(false)}
//   <FarmEditor reload={reload} navigate={navigate} id={id} />
//   const [showEditorModal, setShowEditorModal] = useState(false)