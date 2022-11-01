import './App.css';
import { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import { LoginSignup } from './pages/LoginSignup';
import { Home } from './pages/Home';

function App() {
  const [count, setCount] = useState(0);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
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
    <div className="App"><Routes>
      <Route path='/' element={<Home user={user} setUser={setUser}/>}/>
      <Route path='/testing' element={<h1>Testing</h1>}/>
    </Routes></div>
  ) 
}

export default App;
