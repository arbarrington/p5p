import { Fragment, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { MDBAccordion, MDBAccordionItem, MDBBtn, MDBCard, MDBCardBody, MDBCardFooter, MDBCardHeader, MDBCardImage, MDBCheckbox, MDBCol, MDBContainer, MDBInput, MDBListGroup, MDBListGroupItem, MDBRow, MDBTextArea, MDBTypography } from 'mdb-react-ui-kit';
import {Button} from 'react-bootstrap'

export function LoginSignup({ user, setUser, isLogin }) {
  const navigate = useNavigate()
  if (user) navigate("/")

  const [username, setUsername]   = useState("")
  const [password, setPassword]   = useState("")
  const [errorText, setErrorText] = useState("")
  const [icon, setIcon] = useState(null)
  const [producer, setProducer] = useState(false)

  // TODO : include email in signin

  function handleSubmit(event) {
    event.preventDefault()

    if (username.length===0) { setErrorText("Username must be filled"); return; }
    else if (password.length<6) { setErrorText("Password must be at least 6 characters in length"); return; }
    else { setErrorText("") }

    const formData = new FormData()
    formData.append('username', username)
    formData.append('password', password)
    formData.append('producer', producer)
    if (icon)   formData.append('icon', icon, icon.name)
    

    fetch(isLogin?"/login":"/signup", {
      method: "POST",
      body: formData
    }).then(r=>{ if (r.ok) { r.json().then(user=>{
      setUser(user) // save user details
      isLogin ? navigate("/") : navigate("/setup") // send user to setup if they just signed up
    })} else {
      r.json().then(({errors})=>{
        setErrorText(errors)
      })
    }})
  }

  let errorNode = errorText.length===0 ? null : (<span className="centered" style={{color:"red", textAlign:"center"}}>{errorText}</span>)
  
 
  return (<MDBContainer className="py-2" style={{maxWidth: '800px'}}>
    <MDBCard>
    <div className="col">
        <MDBCardHeader>
        <h1>{isLogin? "Log In": "Sign Up"}</h1>
        </MDBCardHeader>
        <MDBCardBody>
        <form onSubmit={handleSubmit} className="login centered col" id="log-form">

        <MDBInput  onChange={(e)=>{setUsername(e.target.value)}} value={username} label="username" type="text"/>
        
        <MDBInput className="mt-3" onChange={(e)=>{setPassword(e.target.value)}} value={password} label="password" type="password"/>

        {!isLogin && <div className="images col">
          <div className="row">
            <div className="spacer"/>
            <MDBInput id="icon-MDBInput" type="file" className="mt-3" accept="image/*" label="profile photo" onChange={e=>setIcon(e.target.files[0])}/>
          </div>
          <div className="row mt-3">
              <label htmlFor="usertype-input">Are you a producer or consumer?</label>
              <select id="usertype" onChange={(e)=>setProducer(e.target.value)}>
                <option>Choose one...</option>
                <option value={true}>Producer</option>
                <option value={false}>Consumer</option>
              </select>
          </div>
        </div>}
        <div className="col centerChildren">
          <Button className="centered mt-3" type="submit">Submit</Button>
          <div className="spacer"/>
          <span className="centered mt-3">{isLogin? "New?":"Not New?"} <Link className="link" style={{textDecoration:"underline"}} to={isLogin? "/signup":"/login"}>{isLogin? "Sign Up":"Log In"}</Link></span>
        </div>
      </form>
      {errorNode}
      </MDBCardBody>
    </div>
    </MDBCard>
  </MDBContainer>)
}