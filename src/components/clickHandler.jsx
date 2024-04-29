// import React from 'react'

// function ClickHandler() {
//     function clickHandler(){
//         console.log("Welcome to MOURITECH")
//     }
//   return (
//     <div>
//         <h2>ClickHandler</h2>
//         <button onClick={clickHandler}>Click It</button>
//     </div>
//   )
// }

// export default ClickHandler
import React from 'react'

export default function ClickHandler() {
  function handleChange(){
    console.log('Welcome To Digital')
  }
  
  return (
    <div>
      <button onClick={handleChange}>Click Me</button>
    </div>
  )
}
