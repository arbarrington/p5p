import {useEffect, useState} from 'react'

export function Home ({user}) {
  const [orders,setOrders] = useState([])
  const fetchUserData = ()=> fetch(`/users/${user.username}`)
  .then(r=>r.json()).then(data=>{ setOrders(data.orders) })
  // eslint-disable-next-line
  useEffect(() => { fetchUserData() }, [user.username])
  console.log(orders)
  return (
    <div className="">
      <h2 className="col">{user.display_name}</h2>
      <img className="icon" src={user.icon} alt="User Icon"/>
      <h3>{user.bio}</h3>
      <h1 className="">My Orders and Subscriptions</h1>
      {orders.map((order)=>{return <>
        <h2>${order.price}---{order.delivery_address}</h2>
        </>})}
      {!user.producer?
        <h1>Favorite Producers</h1>
      :<h1>Consumer Analytics</h1>}
    </div>
  )
}