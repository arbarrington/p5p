export function Profile ({user}) {
  return (<>
    <h1>Edit your information</h1>
    <h2>display name, bio</h2>
    {user.producer?
    <>
    <h1>Edit your Farm</h1>
    <h2>name, message, address</h2>
    </>
    :null}
  </>)
}