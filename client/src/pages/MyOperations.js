import {FarmCard} from '../components/FarmCard';
import {ProductList} from '../components/ProductList';
import {useEffect, useState} from 'react';
import {Row, Col, Button, Modal} from 'react-bootstrap'
import {LabeledInput} from '../components/LabeledInput'
import "bootstrap/dist/css/bootstrap.min.css"

export function MyOperations ({user, setUser, navigate}) {
  const [selectedFarm, setSelectedFarm] = useState(user.farms[0])
  const [errorText, setErrorText] = useState("")
  const [addingFarm, setAddingFarm] = useState(false)
  
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchUserData = ()=> fetch(`/users/${user.username}`)
  .then(r=>r.json()).then(data=>{ console.log('successful fetch from my ops',data.products) })
  // eslint-disable-next-line
  useEffect(() => { fetchUserData() }, [user.username])

  const [farmInfo, setFarmInfo] = useState({})
  const [banner, setBanner] = useState(null)
  const handleFarmEdit = ({target:{name, value}})=>setFarmInfo(farmInfo=>({...farmInfo, [name]: value}))
  
  let errorNode = errorText.length===0 ? null : (<span className="centered" style={{color:"red", textAlign:"center"}}>{errorText}</span>)
  console.log('my ops', user)
  function patchFarm (e) {
    // e.preventDefault()
    const formData = new FormData()
    for (const key in farmInfo) { formData.append(key, farmInfo[key]) }
    if (banner) formData.append('banner', banner, banner.name)
    if (addingFarm) formData.append('user_id', user.id)
    // console.log("patch farm triggered", farmInfo)
    fetch(addingFarm?"/farms":`/farms/${selectedFarm.id}`, {
      method: addingFarm?"POST":"PATCH",
      body: formData
      }).then(r=>{if (r.ok) {
        console.log('successfully patched/posted farm', selectedFarm.id)
        handleClose()
        setAddingFarm(false)} 
        else {r.json().then(({errors})=>{
          setErrorText(errors)
        })}
      })
  }

  function deleteFarm(e) {
    fetch(`/farms/${selectedFarm.id}`, {method: "DELETE"}).then(r=>{if (r.ok) {
      console.log('successfully deleted farm')
      handleClose()
    }})
  }

  console.log(user.farms)
  // TODO : ADD OPERATION
  return (<>
  <div className='mt-5'>
    <h2>Select an Operation to View its Products</h2>
    <Row>
      {user.farms.map((farm)=>{
        return(
          <Col>
            <FarmCard setSelectedFarm={setSelectedFarm} reload={fetchUserData} navigate={navigate} id={farm.id} farm={farm} user={user}/>  
            <Button onClick={()=>{handleShow();setSelectedFarm(farm)}}>Edit/Remove Operation</Button>
          </Col>
        )
      })}
    </Row>
    <Button onClick={()=>{setAddingFarm(true);handleShow()}}>Add New Operation</Button>
    </div>
    <div className='spacer mb-5'></div>
    
    {selectedFarm && (<div className='col'>
      <h3>Products - {selectedFarm.name}</h3>
      <ProductList farm={selectedFarm} user={user} products={user.products} className='row'/>
    </div>)}
    

    {((user.farms === []) || addingFarm) &&
      <Modal show={show} onHide={handleClose}>
          
          <Modal.Header closeButton>
            <Modal.Title>{addingFarm? `Add a New Operation`: `Edit ${selectedFarm.name}`}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form>
              <LabeledInput value={farmInfo.name} name="name" label="Farm Name" onChange={(e)=>handleFarmEdit(e)}/>
              <LabeledInput value={farmInfo.location} name="location" label="Where are you located?" onChange={(e)=>handleFarmEdit(e)}/>
              <LabeledInput value={farmInfo.message} name="message" label="Tell consumers about your operation:" onChange={(e)=>handleFarmEdit(e)}/>
              <LabeledInput value={farmInfo.website} name="website" label="Link to your operation's website (if applicable):" onChange={(e)=>handleFarmEdit(e)}/>
              <label htmlFor="icon-input">Icon:</label>
              <input value={farmInfo.banner} name="banner" label="Photo of your operation" onChange={e=>setBanner(e.target.files[0])} type="file" accept="image/*" htmlFor="banner-input"/>
            </form>
            {errorNode}
          </Modal.Body>
          
          <Modal.Footer>
            <Button variant="secondary" className="bg-danger" onClick={(e)=>deleteFarm(e)}>Remove</Button>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
            <Button variant="primary" type="submit" onClick={(e)=>patchFarm(e)}>Save Changes</Button>
          </Modal.Footer>

      </Modal>
    }
  </>)
}

// TODO : make the farm editor use a bootstrap form