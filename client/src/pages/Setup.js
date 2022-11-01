import { LabeledInput } from "../components/LabeledInput"
import { useEffect, useState } from "react"

export function Setup ({user}) {
  const [profileInfo, setProfileInfo] = useState({user})
  const handleEdit = ({target:{name, value}})=>setProfileInfo(profileInfo=>({...profileInfo, [name]: value}))

  // function handleSubmit(event) {
  //   event.preventDefault()

  //   if (username.length===0) { setErrorText("Username must be filled"); return; }
  //   else if (password.length<6) { setErrorText("Password must be at least 6 characters in length"); return; }
  //   else { setErrorText("") }

  //   const formData = new FormData()
  //   formData.append('username', username)
  //   formData.append('password', password)
  //   if (icon)   formData.append('icon', icon, icon.name)

  //   fetch(isLogin?"/login":"/signup", {
  //     method: "POST",
  //     body: formData
  //   }).then(r=>{ if (r.ok) { r.json().then(user=>{
  //     setUser(user) // save user details
  //     // TODO if signup, nav to iama, else navigate to home, if i am a is null always return to loginsignup
  //     navigate("/") // send user back to home
  //   })} else {
  //     r.json().then(({errors})=>{
  //       setErrorText(errors)
  //     })
  //   }})
  // }
  console.log(user.producer)


  return (<>
    <h1>Just a few more things before we can begin, {user.username}!</h1>
    <LabeledInput value={profileInfo.display_name} name="display_name" label="Name" onChange={(e)=>handleEdit(e)}/>
    <LabeledInput value={profileInfo.bio} name="bio" label="Bio" onChange={(e)=>handleEdit(e)}/>
    {user.producer ?
    <h1>hi farmer</h1>:
    null}
    </>
  )
}