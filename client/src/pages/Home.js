import {useEffect, useState} from 'react'

export function Home ({user}) {
  const [ordersIn,setOrdersIn] = useState([])
  const [ordersOut,setOrdersOut] = useState([])
  // const [myOrdersOut,setMyOrdersOut] = useState([])
  
  const fetchUserData = ()=> fetch(`/users/${user.username}`)
  .then(r=>r.json()).then(data=>{ setOrdersIn(data.orders) })

  const fetchOrderData = ()=> fetch(`/orders`)
  .then(r=>r.json()).then(data=>{ setOrdersOut(data) })

  useEffect(() => { fetchUserData(); fetchOrderData() }, [user.username])

  const myFarmIds = user.farms.map((farm)=>{
    return farm.id
  })
  
  const parsedCart = ordersOut.map((order)=>{
    return JSON.parse(order.cart)
    })

  const myOrders = parsedCart.map((item)=> {
    return item.filter((group)=>{return myFarmIds.includes(group.product.farm_id)})
    // return myFarmIds.includes(order.product.id)
  })

  // setMyOrdersOut(myOrders)
    // .filter((order)=>{
    //   return myFarmIds.includes(order.product.id)
    //   })
  

  console.log('parsed Cart',parsedCart)
  console.log('my farm ids', myFarmIds)
  console.log('my orders out', myOrders)
  



  return (
    <div className="">
      <h2 className="col">{user.display_name}</h2>
      <img className="icon" src={user.icon} alt="User Icon"/>
      <h3>{user.bio}</h3>
      <h1 className="">My Orders and Subscriptions</h1>
      {user.producer?
        myOrders.map((order)=>{
          return order.map((item)=>{
            return <h2>{item.product.name}</h2>
          })
        })
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