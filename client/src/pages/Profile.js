import { LabeledInput } from "../components/LabeledInput"
import { useEffect, useState } from "react"

export function Profile ({user, navigate}) {
  const [profileInfo, setProfileInfo] = useState({user})
  const [icon, setIcon] = useState(null)

  const handleProfileEdit = ({target:{name, value}})=>setProfileInfo(profileInfo=>({...profileInfo, [name]: value}))

  function patchProfile (e) {
    e.preventDefault()
    const formData = new FormData()
    for (const key in profileInfo) { formData.append(key, profileInfo[key]) }
    if (icon)   formData.append('icon', icon, icon.name)
    console.log("patch profile triggered", profileInfo)

    fetch(`/users/${user.username}`, {
      method: "PATCH",
      body: formData
      }).then(r=>{if (r.ok) {
        navigate('/') 
      }})
  }

  return (<>
    <h1>Update your...</h1>
    <form>
    <LabeledInput value={profileInfo.display_name} name="display_name" label="Displayed name:" onChange={(e)=>handleProfileEdit(e)}/>
    <LabeledInput value={profileInfo.bio} name="bio" label="Biography" onChange={(e)=>handleProfileEdit(e)}/>
    <div className="">
      <label htmlFor="icon-input">Icon:</label>
      {/* <div className="spacer"/> */}
      <input id="icon-input" type="file" accept="image/*" onChange={e=>setIcon(e.target.files[0])}/>
    </div>

    <div>Did you mean to make a Producer account?
      <select value={profileInfo.producer} name="producer" label="Did you mean to make a Producer account?" onChange={(e)=>handleProfileEdit(e)}>
        <option value={false} label="No, I am here to purchase produce"></option>
        <option value={true} label="Yes, I am here to sell my produce"></option>
      </select>
    </div>

    <input type="submit" onClick={(e)=>{patchProfile(e)}}/>
    </form>
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
  </>)
}