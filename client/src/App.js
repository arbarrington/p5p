import './App.css';
import { useState, useEffect } from "react";
import { Route, Routes, useParams } from 'react-router-dom';
import { LoginSignup } from './pages/LoginSignup';
import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { Profile } from './pages/Profile';
import { MyOperations } from './pages/MyOperations';
import { Navbar } from './components/Navbar';
import { Setup } from './pages/Setup';
import { Cart } from './pages/Cart';
import {useNavigate} from 'react-router-dom';

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
  const navigate = useNavigate()
  let {username} = useParams();
  

  useEffect(() => { localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  // auto-login (incase cookie expired or something
  useEffect(() => {fetch("/me").then((r) => {
    if (r.ok) { r.json().then((user) => setUser(user)); }
    else { setUser(null) }
  });}, []);



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
    <Navbar user={user} logout={()=>{setUser(null)}}/>
    <div className="App"><Routes>
      <Route path='/' element={<Home user={user} setUser={setUser} navigate={navigate}/>}/>
      <Route path='/setup' element={<Setup user={user} navigate={navigate}/>}/>
      <Route path=":username" element={<Profile user={user} setUser={setUser} navigate={navigate}/>}/>
      <Route path='/search' element={<Search user={user} setUser={setUser} navigate={navigate}/>}/>
      <Route path="/cart" element={<Cart user={user} setUser={setUser} navigate={navigate}/>}/>
      <Route path="/operations" element={<MyOperations user={user} setUser={setUser} navigate={navigate}/>}/>
    </Routes></div>
    </>
  ) 
}

export default App;
