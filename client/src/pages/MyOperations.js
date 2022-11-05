import {FarmCard} from '../components/FarmCard';
import {ProductList} from '../components/ProductList';
import {useEffect, useState} from 'react';

export function MyOperations ({user, setUser, navigate}) {
  const [selectedFarm, setSelectedFarm] = useState(user.farms[0])
  const [userFarms, setUserFarms] = useState(user.farms)

  const fetchUserData = ()=> fetch(`/users/${user.username}`)
  .then(r=>r.json()).then(data=>{ console.log('successful fetch from my ops',data.products) })
  // eslint-disable-next-line
  useEffect(() => { fetchUserData() }, [user.username])


  return (<>
    <div className="row">
      {user.farms.map((farm)=>{
        // setSelectedFarm(farm)
        return(
          <FarmCard setSelectedFarm={setSelectedFarm} reload={fetchUserData} navigate={navigate} id={farm.id} farm={farm} user={user}/>
        )
      })}
    </div>
    
    <div className='col'>
      <h1>{selectedFarm.name}</h1>
      <ProductList farm={selectedFarm} user={user} products={user.products} className='row'/>
    </div>

    {/* {user.products.filter((product)=>{
      (product.farm_id == selectedFarm.id)
    return <p>{product.name}</p> */}
  </>)
}