export function Home ({user}) {
  return (
    <div>
      {/* <h1>{user.icon}</h1> */}
      <img src={user.icon} alt="User Icon"/>
    </div>
  )
}