export function Setup ({user}) {
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

  return (
    <h1>Welcome to the setup page {user.username}</h1>
  )
}