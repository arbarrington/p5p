import { LabeledInput } from "../components/LabeledInput"
import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"

export function Setup ({user, fetchUserData, navigate}) {
  const [profileInfo, setProfileInfo] = useState({user})
  const [farmInfo, setFarmInfo] = useState({})
  const [icon, setIcon] = useState(null)
  const [banner, setBanner] = useState(null)
  const handleEdit = ({target:{name, value}})=>setProfileInfo(profileInfo=>({...profileInfo, [name]: value}))

  function patchProfile (e) {
    // e.preventDefault()
    const formData = new FormData()
    // copy the normal stuff into form data
    for (const key in profileInfo) { formData.append(key, profileInfo[key]) }
    // put the images in
    if (icon)   formData.append('icon', icon, icon.name)
    console.log("patch profile triggered", user)

    fetch(`/user/${user.username}`, {
      method: "PATCH",
      body: formData
      }).then(r=>{if (r.ok) {
        navigate('/')
        
      }})
  }

  function postFarm (e) {
    e.preventDefault()
    const formData = new FormData()
    // copy the normal stuff into form data
    for (const key in farmInfo) { formData.append(key, farmInfo[key]) }
    if (banner) formData.append('banner', banner, banner.name)
    
    fetch(`/farms`, {
      method: "POST",
      body: formData
      }).then(r=>{if (r.ok) {
        // navigate('/')
        console.log(farmInfo)
      }})
  }


  return (<>
    <h1>Just a few more things before we can begin, {user.display_name}!</h1>
    <form>
    <LabeledInput value={profileInfo.display_name} name="display_name" label="Your Name" onChange={(e)=>handleEdit(e)}/>
    <LabeledInput value={profileInfo.bio} name="bio" label="Your Bio" onChange={(e)=>handleEdit(e)}/>
    {user.producer ? (<>
      <h1>Tell us about your farm</h1>
      <LabeledInput value={farmInfo.name} name="name" label="Farm Name" onChange={(e)=>handleEdit(e)}/>
      <LabeledInput value={farmInfo.location} name="location" label="Where are you located?" onChange={(e)=>handleEdit(e)}/>
      <LabeledInput value={farmInfo.message} name="message" label="Tell consumers about your operation:" onChange={(e)=>handleEdit(e)}/>
      <LabeledInput value={farmInfo.website} name="website" label="Link to your operation's website (if applicable):" onChange={(e)=>handleEdit(e)}/>
      <LabeledInput value={farmInfo.banner} name="banner" label="Photo of your operation" onChange={(e)=>handleEdit(e)} type="file" accept="image/*" htmlFor="banner-input"/>
    </>):null}
    <input type="submit" onClick={()=>{patchProfile(); if (user.producer){postFarm()}}}/>
    </form>
    </>
  )
}