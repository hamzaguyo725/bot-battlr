import { React,useEffect,useState }  from "react";
import { NavLink } from "react-router-dom";
import "../styles/BotProfile.css"

import { useHistory } from "react-router-dom"

function BotProfile({deleteWithoutRefresh,id,image,name,phrase,health,armor,damage,addBot,handleId}) {
  let [state,setState] = useState('')
  let [added,setAdded] = useState(true)

  const history = useHistory()

 function deleteItem(){
  console.log('deleted')
  setAdded(false)
 fetch (`https://db-json-mu.vercel.app/bots/${id}`,{
  method : 'DELETE'})
  .then(console.log('deletItem'))
  history.push(`/`)
}
 


    return ( 
      <div id="card">
        <NavLink onClick={()=>{
          handleId(id)
        }} to = "/bot"  className = "hi">
          <img src = {image}></img>
          <h5 id ="botName">{name}</h5>
          <h7 id = "botPhrase" >{phrase}</h7>
         <span id="abilities" ><i id="health" className="material-icons">healing</i><h5 id="ability">{health}</h5><i id="shield" className="material-icons">shield</i><h5 id="ability">{armor}</h5><i id="bolt" className="material-icons">bolt</i><h5 id="ability">{damage}</h5>
       </span>
        </NavLink>
          <button onClick = {()=>{
            deleteItem()
            deleteWithoutRefresh(id)
            }}id="delete">X</button>
            </div>
     );
} 

export default BotProfile;