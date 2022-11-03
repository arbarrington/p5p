import {LabeledInput} from './LabeledInput'
import {useState} from 'react'

export function FarmEditor () {
  const [farmInfo, setFarmInfo] = useState({})
  const [banner, setBanner] = useState(null)

  const handleFarmEdit = ({target:{name, value}})=>setFarmInfo(farmInfo=>({...farmInfo, [name]: value}))

  function patchFarm (e) {
    e.preventDefault()
    const formData = new FormData()
    // copy the normal stuff into form data
    for (const key in farmInfo) { formData.append(key, farmInfo[key]) }
    if (banner) formData.append('banner', banner, banner.name)
    console.log("patch farm triggered", farmInfo)

    fetch(`/farms`, {
      method: "PATCH",
      body: formData
      }).then(r=>{if (r.ok) {
        // navigate('/')
        console.log(farmInfo)
      }})
  }

  return (
    <>
      <div className="modalOverlay">
        <div className='modal'>
      <h1>Edit your Farm</h1>
      <form>
      <LabeledInput value={farmInfo.name} name="name" label="Farm Name" onChange={(e)=>handleFarmEdit(e)}/>
      <LabeledInput value={farmInfo.location} name="location" label="Where are you located?" onChange={(e)=>handleFarmEdit(e)}/>
      <LabeledInput value={farmInfo.message} name="message" label="Tell consumers about your operation:" onChange={(e)=>handleFarmEdit(e)}/>
      <LabeledInput value={farmInfo.website} name="website" label="Link to your operation's website (if applicable):" onChange={(e)=>handleFarmEdit(e)}/>
      <LabeledInput value={farmInfo.banner} name="banner" label="Photo of your operation" onChange={(e)=>handleFarmEdit(e)} type="file" accept="image/*" htmlFor="banner-input"/>
      <input type="submit" onClick={(e)=>{patchFarm(e)}}/>
      </form>
      </div>
      </div>
    </>
  )
}