import {useState} from 'react'
import {FarmEditor} from './FarmEditor'

export function FarmCard ({}) {
  const [showEditorModal, setShowEditorModal] = useState(false)

  return (<>
    <div className="card">
      <h1>farms[0].name</h1>
      <img src={"https://via.placeholder.com/400"} alt={"plant name"} />
      <h4>farm message</h4>
        <button onClick={()=>setShowEditorModal(true)}className="primary">Edit Farm Info</button>
        <button onClick={()=>{console.log('hi')}}>Edit Product Selection</button>

    </div>
    {showEditorModal?<FarmEditor />:null}
  </>)
}