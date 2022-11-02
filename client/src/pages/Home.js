export function Home ({user}) {
  return (
    <div className="">
      <h2 className="col">{user.display_name}</h2>
      <img className="icon" src={user.icon} alt="User Icon"/>
      <h3>{user.bio}</h3>
      <h1 className="">My Orders and Subscriptions</h1>
      <p>Order 1 details</p>
      <h1>Favorite Producers</h1>
      <p>Recurring subscription details</p>
    </div>
  )
}