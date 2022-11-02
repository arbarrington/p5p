import './App.css';
import { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import { LoginSignup } from './pages/LoginSignup';
import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { Profile } from './pages/Profile';
import { MyFarm } from './pages/MyFarm';
import { Navbar } from './components/Navbar';
import { Setup } from './pages/Setup';
import {useNavigate} from 'react-router-dom';

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
  const navigate = useNavigate()

  useEffect(() => { localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  // auto-login (incase cookie expired or something
  useEffect(() => {fetch("/me").then((r) => {
    if (r.ok) { r.json().then((user) => setUser(user)); }
    else { setUser(null) }
  });}, []);

  // TODO fix patch route
  const fetchUserData = () => {console.log("fix me in app.js")}
  
  // ()=> fetch(`/user/${user.username}`)
  //   .then(r=>r.json()).then(data=>{ setUser(data) })
  // useEffect(() => { fetchUserData() }, [username])

  if (!user) {
    return <Routes>
      {/* route user to login if url is login */}
      <Route path="/login" element={<LoginSignup isLogin={true}  user={user} setUser={setUser} />} />
      {/* but default to always directing to signup */}
      <Route path="*" element={<LoginSignup isLogin={false} user={user} setUser={setUser} />} />
    </Routes>
  }

  return (
    <>
    <Navbar user={user} logout={()=>setUser(null)}/>
    <div className="App"><Routes>
      <Route path='/' element={<Home user={user} setUser={setUser}/>}/>
      <Route path='/setup' element={<Setup user={user} navigate={navigate}/>}/>
      <Route path='/search' element={<Search user={user} setUser={setUser}/>}/>
      <Route path='/:username' element={<Profile user={user} setUser={setUser}/>}/>
      <Route path='/:username/farm' element={<MyFarm user={user} setUser={setUser}/>}/>
    </Routes></div>
    </>
  ) 
}

export default App;
