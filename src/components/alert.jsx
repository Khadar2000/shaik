// import React from 'react'
// function MyButton() {
// 	function handleClick() {
// 		alert('You clicked me!')
// 	}

// 	return <button onClick={handleClick} >Click me</button>
// }
// export default MyButton

// import React from 'react'

// function AlertNotification() {
//     function ClickHandler(){
//     alert('You Hitted Me')
//     }
//   return (
//     <div><h3> Alert Msg</h3>
//         <button onClick={ClickHandler}>Hit Me</button>
//     </div>
//   )
// }

// export default AlertNotification

import React from 'react'

 function AlertMsg() {
  function clickHandle(){
    alert('You Harted Me')
  }
  return (
    <div>
      <button onClick={clickHandle}>Click</button>
    </div>
  )
}
export default AlertMsg
