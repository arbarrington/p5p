// import ClickAwayListener from "react-click-away-listener";
import { Link } from "react-router-dom";
import { useState } from 'react';

export function Navbar ({user, logOut}) {
  const [path, setPath] = useState("")
  const [LogoutPopup, setLogoutPopup] = useState(false)
  
  return (
    <header className="header col" onClick={()=>setPath(window.location.href.split('/').slice(3)[0])}>
    <Link to="/"><button aria-label="home" >Home</button></Link>
    <Link to="/search"><button aria-label="search">Search</button></Link>
    {/* <button aria-label="notifications"></button> */}
    {/* <button aria-label="messages"></button> */}
    <Link to={user.username}><button aria-label="profile">Profile</button></Link>
    <div className="spacer"/>
    <button onClick={()=>{setLogoutPopup(true)}}><img src={user.icon} alt="your icon"/></button>

    {/* {LogoutPopup && <ClickAwayListener onClickAway={()=>setLogoutPopup(false)}>
      <div className="userControl popup col" onClick={()=>fetch('/logout', {method:"DELETE"}).then(r=>{if(r.ok){logOut()}})}>
        <button>Log Out @{user.username}</button>
      </div>
    </ClickAwayListener>} */}
  </header>
  )
}