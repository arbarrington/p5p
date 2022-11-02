export function Home ({user}) {
  return (
    <div className="">
      <h2 className="col">{user.username}</h2>
      <img className="icon" src={user.icon} alt="User Icon"/>
      <h1 className="">My Orders and Subscriptions</h1>
      <p>Order 1 details</p>
      <h1>Favorite Producers</h1>
      <p>Recurring subscription details</p>
    </div>
  )
}