import {FarmCard} from '../components/FarmCard';
import {useEffect} from 'react';

export function MyOperations ({user, setUser, navigate}) {
console.log('page load', user.farms)

  const fetchUserData = ()=> fetch(`/users/${user.username}`)
  .then(r=>r.json()).then(data=>{ console.log('successful fetch',data.Farms) })
// eslint-disable-next-line
  useEffect(() => { fetchUserData() }, [user.username])

  return (<>
    <div className="row">
    <FarmCard />
    <FarmCard />
    <FarmCard />
    <FarmCard />
  </div>
  </>)
}