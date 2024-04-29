// import { useState } from "react"
// function Change() {

//     const[user,setUser] = useState("khadarbasha")
//     const Change=e=>{
//         setUser(e.target.value)
//     }
//   return (
//     <div>
//         <input type='text'
//     onChange={Change}/>
//       <h1>{user}</h1>
     
//     </div>
//   )}
//   export default Change

import { useState } from "react";
function ChangeMsg(){
    const[user , setUser]=useState("ss")
    const ChangeMsg=e=>{
        setUser(e.target.value)
    }
    return(
        <div>
            <input type="text" onChange={ChangeMsg}/>
            <h2>{user}</h2>
        </div>
    )
}
export default ChangeMsg