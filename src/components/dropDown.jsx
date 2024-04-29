// import React, { useState } from 'react'

//  function DropDown() {
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     const[selectOption,setSelectOPtion]=useState('')
//     const handleOptionChange=(event)=>{
//         setSelectOPtion(event.target.value)
//     }
//   return (
//     <div>
//         <h2>Dropdown</h2>
//         <label htmlFor='dropdown'>select</label>
//         <select id='dropdown'value={selectOption} onChange={handleOptionChange}>
//             <option value={"react"}>frontend</option>
//             <option value={"Java"}>Backend</option>
//             <option value={"IQE"}>Testing</option>
//         </select>
//         <p>Selected One:{selectOption}</p>
//     </div>
//   )
// }
// export default DropDown

import React, { useState } from 'react'

export default function DropDown() {
  const[selectData,setSelectData]=useState('')
  const changeOption=(e)=>{
    setSelectData(e.target.value)

  }
  
  return (
    <div>
      <h2>DropDown</h2>
      <label htmlFor='dropdown'>select</label>
      <select id='dropdown' value={selectData} onChange={changeOption}>
        <option value={"Digital"}>FrontEnd</option>
        <option value={"DA"}>Database</option>
        <option value={"IQE"}>Testing</option>

      </select>
      <p>Select :{selectData}</p>
      <div>
        <h2>Radio Buton</h2>
        <from>
        <input type='radio' id='react' name='fav_language' value={'react'} checked  />
        <label htmlFor='react'>React-JS</label><br></br>
        <input type='radio' id='javascript' name='fav_language' value={'javascript'}/>
        <label htmlFor='javscript'>JavaScript</label><br></br>
        </from>
      </div>
      <div>
        <label>InputText:-<textarea name='postContent' rows={'4'} cols={'50'}/>
        </label>
      </div>
      <div>
        <label htmlFor='react'>react</label>
        <input type='checkbox' id='react' name='khaar' value={'react'}/>
      </div>
      <div>
      <label htmlFor="Name">Name</label>
      <input type="text" defaultValue="Khadarbasha" id="Name" />
    </div>
    </div>
  )
}
