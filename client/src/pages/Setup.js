import { LabeledInput } from "../components/LabeledInput"
import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"

export function Setup ({user, fetchUserData, navigate}) {
  const [profileInfo, setProfileInfo] = useState({user})
  const [farmInfo, setFarmInfo] = useState({})
  const [icon, setIcon] = useState(null)
  const [banner, setBanner] = useState(null)
  const handleProfileEdit = ({target:{name, value}})=>setProfileInfo(profileInfo=>({...profileInfo, [name]: value}))
  const handleFarmEdit = ({target:{name, value}})=>setFarmInfo(farmInfo=>({...farmInfo, [name]: value}))

  function patchProfile (e) {
    // e.preventDefault()
    const formData = new FormData()
    // copy the normal stuff into form data
    for (const key in profileInfo) { formData.append(key, profileInfo[key]) }
    // put the images in
    if (icon)   formData.append('icon', icon, icon.name)
    console.log("patch profile triggered", formData)

    fetch(`/users/${user.username}`, {
      method: "PATCH",
      body: formData
      }).then(r=>{if (r.ok) {
        navigate('/')
        window.location.reload()
      }})
  }

  function postFarm (e) {
    // e.preventDefault()
    const formData2 = new FormData()
    // copy the normal stuff into form data
    for (const key in farmInfo) { formData2.append(key, farmInfo[key]) }
    if (banner) formData2.append('banner', banner, banner.name)
    if (user) formData2.append('user_id', user.id)

    // console.log('failed farm post',formData2)
    fetch(`/farms`, {
      method: "POST",
      body: formData2
      }).then(r=>{if (r.ok) {
        navigate('/operations')
        window.location.reload()
        console.log('succesful farm post',farmInfo)
      }})
  }


  return (<>
    <h1>Just a few more things before we can begin, {user.display_name}!</h1>
    {!user.producer?
    <form>
    <LabeledInput value={profileInfo.display_name} name="display_name" label="Your Name" onChange={(e)=>handleProfileEdit(e)}/>
    <LabeledInput value={profileInfo.bio} name="bio" label="Your Bio" onChange={(e)=>handleProfileEdit(e)}/>
    </form>
    :
    <>
    <form>
      <h1>Tell us about your farm</h1>
      <LabeledInput value={farmInfo.name} name="name" label="Farm Name" onChange={(e)=>handleFarmEdit(e)}/>
      <LabeledInput value={farmInfo.location} name="location" label="Where are you located?" onChange={(e)=>handleFarmEdit(e)}/>
      <LabeledInput value={farmInfo.message} name="message" label="Tell consumers about your operation:" onChange={(e)=>handleFarmEdit(e)}/>
      <LabeledInput value={farmInfo.website} name="website" label="Link to your operation's website (if applicable):" onChange={(e)=>handleFarmEdit(e)}/>
      <label htmlFor="icon-input">Banner:</label>
        <input value={farmInfo.banner} name="banner" label="Photo of your operation" onChange={e=>setBanner(e.target.files[0])} type="file" accept="image/*" htmlFor="banner-input"/>
    </form>
    </>}
    <input type="submit" onClick={(e)=>{user.producer?postFarm():patchProfile()}}/>
    </>
  )
}