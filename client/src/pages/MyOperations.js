import {FarmCard} from '../components/FarmCard';
import {ProductList} from '../components/ProductList';
import {useEffect, useState} from 'react';
import {Row, Col, Button, Modal} from 'react-bootstrap'
import {LabeledInput} from '../components/LabeledInput'
import "bootstrap/dist/css/bootstrap.min.css"

export function MyOperations ({user, setUser, navigate}) {
  const [selectedFarm, setSelectedFarm] = useState(user.farms[0])
  
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
  
  function patchFarm (e) {
    // e.preventDefault()
    const formData = new FormData()
    for (const key in farmInfo) { formData.append(key, farmInfo[key]) }
    if (banner) formData.append('banner', banner, banner.name)
    // console.log("patch farm triggered", farmInfo)
    fetch(`/farms/${selectedFarm.id}`, {
      method: "PATCH",
      body: formData
      }).then(r=>{if (r.ok) {
        console.log('successfully patched farm', selectedFarm.id)
        // navigate('/')
        handleClose()
      }})
  }

  // TODO : ADD OPERATION
  return (<>
    <Row>
      {user.farms.map((farm)=>{
        return(
          <Col>
            <FarmCard setSelectedFarm={setSelectedFarm} reload={fetchUserData} navigate={navigate} id={farm.id} farm={farm} user={user}/>  
            <Button onClick={handleShow}>Edit Farm Info</Button>
          </Col>
        )
      })}
    </Row>
    
    <div className='col'>
      <h1>{selectedFarm.name}</h1>
      <ProductList farm={selectedFarm} user={user} products={user.products} className='row'/>
    </div>

    {/* {user.products.filter((product)=>{
      (product.farm_id == selectedFarm.id)
    return <p>{product.name}</p> */}



      <Modal show={show} onHide={handleClose}>
          
          <Modal.Header closeButton>
            <Modal.Title>Edit your Farm</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form onSubmit={patchFarm}>
              <LabeledInput value={farmInfo.name} name="name" label="Farm Name" onChange={(e)=>handleFarmEdit(e)}/>
              <LabeledInput value={farmInfo.location} name="location" label="Where are you located?" onChange={(e)=>handleFarmEdit(e)}/>
              <LabeledInput value={farmInfo.message} name="message" label="Tell consumers about your operation:" onChange={(e)=>handleFarmEdit(e)}/>
              <LabeledInput value={farmInfo.website} name="website" label="Link to your operation's website (if applicable):" onChange={(e)=>handleFarmEdit(e)}/>
              <label htmlFor="icon-input">Icon:</label>
              <input value={farmInfo.banner} name="banner" label="Photo of your operation" onChange={e=>setBanner(e.target.files[0])} type="file" accept="image/*" htmlFor="banner-input"/>
            </form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
            <Button variant="primary" onClick={(e)=>patchFarm(e)}>Save Changes</Button>
          </Modal.Footer>

      </Modal>
  </>)
}