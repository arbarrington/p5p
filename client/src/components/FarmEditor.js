import {LabeledInput} from './LabeledInput'
import {useState} from 'react'
import {ReactComponent as CloseSvg} from '../assets/close.svg'

export function FarmEditor ({exit, id, navigate, reload}) {
  const [farmInfo, setFarmInfo] = useState({})
  const [banner, setBanner] = useState(null)
  
  const handleFarmEdit = ({target:{name, value}})=>setFarmInfo(farmInfo=>({...farmInfo, [name]: value}))

  function patchFarm (e) {
    // e.preventDefault()
    
    const formData = new FormData()
    for (const key in farmInfo) { formData.append(key, farmInfo[key]) }
    if (banner) formData.append('banner', banner, banner.name)
    console.log("patch farm triggered", farmInfo)

    fetch(`/farms/${id}`, {
      method: "PATCH",
      body: formData
      }).then(r=>{if (r.ok) {
        // window.location.reload()
        // TODO : fetch user data
      }})
  }

  return (
    <>
      <div className="modalOverlay">
        <div className='modal'>
      <h1>Edit your Farm</h1>
      <form onSubmit={patchFarm}>
      <button className="closeModal" aria-label="close" onClick={exit}>X</button>
      <LabeledInput value={farmInfo.name} name="name" label="Farm Name" onChange={(e)=>handleFarmEdit(e)}/>
      <LabeledInput value={farmInfo.location} name="location" label="Where are you located?" onChange={(e)=>handleFarmEdit(e)}/>
      <LabeledInput value={farmInfo.message} name="message" label="Tell consumers about your operation:" onChange={(e)=>handleFarmEdit(e)}/>
      <LabeledInput value={farmInfo.website} name="website" label="Link to your operation's website (if applicable):" onChange={(e)=>handleFarmEdit(e)}/>
      <label htmlFor="icon-input">Icon:</label>
      <input value={farmInfo.banner} name="banner" label="Photo of your operation" onChange={e=>setBanner(e.target.files[0])} type="file" accept="image/*" htmlFor="banner-input"/>
      <input type="submit" />
      </form>
      </div>
      </div>
    </>
  )
}