import { LabeledInput } from "../components/LabeledInput"
import { useEffect, useState } from "react"

export function Profile ({user, navigate}) {
  const [profileInfo, setProfileInfo] = useState({user})
  const [farmInfo, setFarmInfo] = useState({})
  const [icon, setIcon] = useState(null)
  const [banner, setBanner] = useState(null)
  
  const handleProfileEdit = ({target:{name, value}})=>setProfileInfo(profileInfo=>({...profileInfo, [name]: value}))
  const handleFarmEdit = ({target:{name, value}})=>setFarmInfo(farmInfo=>({...farmInfo, [name]: value}))

  function patchProfile (e) {
    e.preventDefault()
    const formData = new FormData()
    for (const key in profileInfo) { formData.append(key, profileInfo[key]) }
    if (icon)   formData.append('icon', icon, icon.name)
    console.log("patch profile triggered", profileInfo)

    fetch(`/user/${user.username}`, {
      method: "PATCH",
      body: formData
      }).then(r=>{if (r.ok) {
        navigate('/')
        
      }})
  }

  function patchFarm (e) {
    e.preventDefault()
    const formData = new FormData()
    // copy the normal stuff into form data
    for (const key in farmInfo) { formData.append(key, farmInfo[key]) }
    if (banner) formData.append('banner', banner, banner.name)
    console.log("patch farm triggered", farmInfo)

    fetch(`/farms`, {
      method: "PATCH",
      body: formData
      }).then(r=>{if (r.ok) {
        // navigate('/')
        console.log(farmInfo)
      }})
  }
  return (<>
    <h1>Edit your information</h1>
    <form>
    <LabeledInput value={profileInfo.display_name} name="display_name" label="Your Name" onChange={(e)=>handleProfileEdit(e)}/>
    <LabeledInput value={profileInfo.bio} name="bio" label="Your Bio" onChange={(e)=>handleProfileEdit(e)}/>
    <input type="submit" onClick={(e)=>{patchProfile(e)}}/>
    </form>
      {user.producer?<>
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
      :null}
  </>)
}