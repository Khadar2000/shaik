import React, { useState } from "react";
const SignUpForm=()=>{
    const[formData,setFormData]=useState({
        name :'',
        email:'',
        course:'',
        password:'',
        confromPassword:''
    });
    const handleChange=(e)=>{
        const{name , value}=e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('Form Submitted:',formData)
        setFormData({
            name :'',
            email:'',
            course:'',
            password:'',
            confromPassword:'',
        })
    }
    return(
        <form onSubmit={handleSubmit}>
            <h2>SignUp</h2>
            <div>
                <label>Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange}/>
            </div>
            <div>
                <label>Email</label>
                <input type="text" name="email" value={formData.email} onChange={handleChange}/>
            </div>
            <div>
                <label>Course</label>
                <input type="text" name="course" value={formData.course} onChange={handleChange}/>
            </div>
            <div>
                <label>Password</label>
                <input type="text" name="password" value={formData.password} onChange={handleChange}/>
            </div>
            <div>
                <label>Conf</label>
                <input type="text" name="confromPassword" value={formData.confromPassword} onChange={handleChange}/>
            </div>
            <button type="submit">SignUp </button>
        </form>
    )
}
export default SignUpForm
