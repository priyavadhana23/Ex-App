import React from 'react';
import { useState } from 'react';
import './signup.css';
;

function Signup()

{
   
    const [inputs,setInputs]= useState({email:"@gmail.com",
                                       gender:"select",
                                       phonenumber:"+91"
                                       });
    function handleSubmit(e)
    {
        e.preventDefault(); // stops the page from reloading
        console.log('Form submitted:', inputs);
    }
    function handleChange(e)
    {
        const name=e.target.name  //name,email.age
        const value=e.target.value // now typing value,as well as previous type default value
       setInputs((previousState)=>{
                                   return{...previousState,[name]:value}
                                }
                )
    }
    return  <form onSubmit={handleSubmit}>
            <label>NAME : <input type="text"  onChange={handleChange} name="name"   /></label><br/>
            <label>EMAIL: <input type="text"  onChange={handleChange} name="email" value={inputs.email}/></label><br/>
            <label>AGE  : <input type="text"  onChange={handleChange} name="age" /></label><br/>
            <label>GENDER:
                <select onChange={handleChange} name="gender">
                    <option value="SELECT">SELECT</option>
                    <option value="male">MALE</option>
                    <option value="female">FEMALE</option>
                    <option value="transgender">TRANSGENDER</option>
                </select>
            </label><br/>
            <label>PHONE NUMBER: <input type="text" onChange={handleChange} name="phonenumber" value={inputs.phonenumber}/></label><br/>
         
            <input type="submit" values="Submit Form"/>
         </form>
}

export default Signup;