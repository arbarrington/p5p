import { LabeledInput } from "../components/LabeledInput"
import { useEffect, useState } from "react"
import {Button, Form} from "react-bootstrap"

export function Profile ({user, navigate, logOut=()=>{window.location.reload()}}) {
  const [profileInfo, setProfileInfo] = useState({user})
  const [icon, setIcon] = useState(null)

  const handleProfileEdit = ({target:{name, value}})=>setProfileInfo(profileInfo=>({...profileInfo, [name]: value}))

  function patchProfile (e) {
    e.preventDefault()
    const formData = new FormData()
    for (const key in profileInfo) { formData.append(key, profileInfo[key]) }
    if (icon)   formData.append('icon', icon, icon.name)
    console.log("patch profile triggered", profileInfo.icon)

    fetch(`/users/${user.username}`, {
      method: "PATCH",
      body: formData
      }).then(r=>{if (r.ok) {
        window.location.reload() 
      }})
  }

  return (<>
    <h1>Update Your Personal Information, {user.display_name}</h1>
    <Form >
      <Form.Group className="mb-3" controlId="formDisplayName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" value={profileInfo.display_name} name="display_name" onChange={(e)=>handleProfileEdit(e)}/>
        <Form.Text className="text-muted">
          This is the name that will be displayed when other users view your profile.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBio">
        <Form.Label>Biography</Form.Label>
        <Form.Control type="text" placeholder="Share some information with other users" value={profileInfo.bio} name="bio" onChange={(e)=>handleProfileEdit(e)}/>
        <Form.Text className="text-muted">
          Ex: "Owner of Boone Hall Farms", "Mother of four hungry, healthy kids!"
        </Form.Text>
      </Form.Group>


      <Form.Group>
        <Form.Label htmlFor="icon-input">Upload a new image for your profile:</Form.Label>
        {/* <div className="spacer"/> */}
        <input id="icon-input" type="file" accept="image/*" onChange={e=>setIcon(e.target.files[0])}/>
      </Form.Group>

      <div className="mb-3">Did you mean to make a Producer account?
        <select value={profileInfo.producer} name="producer" label="Did you mean to make a Producer account?" onChange={(e)=>handleProfileEdit(e)}>
          <option value={false} label="No, I am here to purchase produce"></option>
          <option value={true} label="Yes, I am here to sell my produce"></option>
        </select>
      </div>

      <Button className="mb-5" variant="primary" type="submit" onClick={(e)=>{patchProfile(e)}}>Submit Changes</Button>
    </Form>

    <div className="" onClick={()=>fetch('/logout', {method:"DELETE"}).then(r=>{if(r.ok){logOut()}})}>
      <Button className="bg-danger">Log Out @{user.username}</Button>
    </div>
  </>)
}


{/* {user.producer?<>
<h1>Edit your Farm</h1>
<form>
<LabeledInput value={farmInfo.name} name="name" label="Farm Name" onChange={(e)=>handleFarmEdit(e)}/>
<LabeledInput value={farmInfo.location} name="location" label="Where are you located?" onChange={(e)=>handleFarmEdit(e)}/>
<LabeledInput value={farmInfo.message} name="message" label="Tell consumers about your operation:" onChange={(e)=>handleFarmEdit(e)}/>
<LabeledInput value={farmInfo.website} name="website" label="Link to your operation's website (if applicable):" onChange={(e)=>handleFarmEdit(e)}/>
<LabeledInput value={farmInfo.banner} name="banner" label="Photo of your operation" onChange={(e)=>handleFarmEdit(e)} type="file" accept="image/*" htmlFor="banner-input"/>
<input type="submit" onClick={(e)=>{patchFarm(e)}}/>
</form>
</>
:null} */}

    {/* <LabeledInput value={profileInfo.display_name} name="display_name" label="Displayed name:" onChange={(e)=>handleProfileEdit(e)}/> */}
    {/* <LabeledInput value={profileInfo.bio} name="bio" label="Biography" onChange={(e)=>handleProfileEdit(e)}/> */}