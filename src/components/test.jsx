import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function DataKbForm() {
    const [user, setUser] = useState({
        userName: '',
        password: '',
        conformPassword: '',
        number: ''
    });
    const [row, setRow] = useState([]);
    const [modal, setModal] = useState(false);

    const inputChanging = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const submitting = (e) => {
        e.preventDefault();
        setModal(true);
    };

    const addRow = (e) => {
        e.preventDefault(); 
        setRow([...row, { userName: user.userName, password: user.password, conformPassword: user.conformPassword }]);
        setUser({ userName: '', password: '', conformPassword: '' });
    };

    const deleteRow = (index) => {
        const deleted = [...row];
        deleted.splice(index, 1);
        setRow(deleted);
    };

    const deleteAllRows = (e) => {
    };

    return (
        <div>
            <form >
                <label>userName</label>
                <input type='text' name='userName' value={user.userName} onChange={inputChanging} /><br />
                <label>passWord</label>
                <input type='password' name='password' value={user.password} onChange={inputChanging} /><br />
                <label>conformPassword</label>
                <input type='password' name='conformPassword' value={user.conformPassword} onChange={inputChanging} /><br />
                <label>mobilenumber</label>
                <input type='text' name='number' value={user.number} onChange={inputChanging} /><br />
                <button onClick={submitting}>Submit</button><br></br>
                <button onClick={addRow}>AddRow</button>
                <button onClick={deleteAllRows}>Remove All Rows</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>userName</th>
                        <th>passWord</th>
                        <th>conformPassword</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {row.map((data, index) => (
                        <tr key={index}>
                            <td>{data.userName}</td>
                            <td>{data.password}</td>
                            <td>{data.conformPassword}</td>
                            <td>
                                <button onClick={() => deleteRow(index)}>Delete Row</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Modal show={modal} onHide={() => setModal(false)}>
                <p>userName: {user.userName}</p>
                <p>passWord: {user.password}</p>
                <p>conformPassword: {user.conformPassword}</p>
                <p>mnumber: {user.number}</p>
            </Modal>
        </div>
    );
}

export default DataKbForm;

// import React, { useEffect, useState } from 'react'
// const KhadarBasha = () => {
//     const[count,setCount]=useState(0)
//     const[double,setDouble]=useState(0)
//     const Increment=()=>{
//         setCount(count+1)
//     }
//     useEffect(()=>{
//     const EffectCount=(count+2)
//     setDouble(EffectCount)
//     console.log(EffectCount)
//     },[count])
//   return (
//     <div>
//         <p>Count:{count}</p>
//       <button onClick={Increment}>Increment </button>
//       <p>Effect:{double}</p>
//     </div>
//   )
// }
// export default KhadarBasha
 