import {useEffect, useState} from 'react'

export function Home ({user}) {
  const [ordersIn,setOrdersIn] = useState([])
  const [ordersOut,setOrdersOut] = useState([])
  
  const fetchUserData = ()=> fetch(`/users/${user.username}`)
  .then(r=>r.json()).then(data=>{ setOrdersIn(data.orders) })

  const fetchOrderData = ()=> fetch(`/orders`)
  .then(r=>r.json()).then(data=>{ setOrdersOut(data) })

  useEffect(() => { fetchUserData(); fetchOrderData() }, [user.username])
  
  const myOrders = ordersOut.filter((order)=>{})
  console.log(ordersOut[0].cart)




  return (
    <div className="">
      <h2 className="col">{user.display_name}</h2>
      <img className="icon" src={user.icon} alt="User Icon"/>
      <h3>{user.bio}</h3>
      <h1 className="">My Orders and Subscriptions</h1>
      {user.producer?
        ordersOut.map((order)=>{return <>
        <h2>{order.first_name}</h2>
        </>})
        :
        ordersIn.map((order)=>{return <>
        <h2>${order.price}---{order.delivery_address}</h2>
        </>})}
      {!user.producer?
        <h1>Favorite Producers</h1>
      :<h1>Consumer Analytics</h1>}
    </div>
  )
}