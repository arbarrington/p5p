import {useEffect, useState} from 'react' 
import {Row,Col} from 'react-bootstrap'
import CustomerOrderCard from '../components/CustomerOrderCard'

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

  const myFarmNames = user.farms.map((farm)=>{
    return farm.name
  })
  
  const parsedCart = ordersOut.map((order)=>{
    return JSON.parse(order.cart)
    })

  const myOrders = parsedCart.map((item)=> {
    return item.filter((group)=>{return myFarmIds.includes(group.product.farm_id)})
  })


  
  console.log('my farm names', myFarmNames)
  console.log('parsed Cart',parsedCart)
  console.log('my farm ids', myFarmIds)
  console.log('my orders', myOrders)

  



  return (
    <div className="">
      {/* <h2 className="col">{user.display_name}</h2>
      <img className="icon" src={user.icon} alt="User Icon"/> */}
      {/* <h3>{user.bio}</h3> */}
      <h1 className="">My Orders and Subscriptions</h1>
      {user.producer?
        
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Amount</th>
              <th scope="col">Operation</th>
              <th scope="col">Due Date</th>
            </tr>
          </thead>
          <tbody>
            {myOrders.map((order)=>{
              return order.map((item)=>{
                return (<>
                <tr>
                <td>{item.product.name}</td>
                <td>{item.quantity} {item.product.unit}</td>
                <td>{myFarmNames[myFarmIds.indexOf(item.product.farm_id)]}</td>
                <td>1/23/2023</td> 
                </tr>
                </>)
              })
            })}
          </tbody>
        </table>
        :
        ordersIn.map((order)=>{return <>
        <CustomerOrderCard order={order}/>
        </>})
      }
      {!user.producer?
        <h1>Favorite Producers</h1>
      :<h1>Consumer Analytics</h1>}
    </div>
  )
}