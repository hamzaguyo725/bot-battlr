import React from "react";
import "../styles/BotCollection.css"
import BotProfile from "./BotProfile";


function BotCollection({deleteWithoutRefresh,bots,addBot,handleId}) {
    let botList = bots.map((bot,index)=>{
        return <BotProfile deleteWithoutRefresh = {deleteWithoutRefresh} handleId={handleId} id = {bot.id} addBot = {addBot} key={index} damage={bot.damage} armor={bot.armor} health={bot.health} phrase={bot.catchphrase} name = {bot.name} image = {bot.avatar_url}/>
    })
    return (  
     <div id="grid">
       {botList}
     </div>
    );
}
export default BotCollection;