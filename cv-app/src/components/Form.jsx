import '../index.css'
import React, { useState } from 'react'
import EducationForm from './EducationForm.jsx'
function Form({inputChange}){
    const [memberData, setMemberData] = useState({
        Name: "",
        Email: "",
        Phone:""
    })
    
    const handleChange = (event) =>{
        setMemberData({...memberData,[event.target.id]:event.target.value})
        const value = event.target.value;
        inputChange(value);
    };
    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(memberData);
    };
    return (<>
        <div className="pInfo">
        <form className="general" onSubmit={handleSubmit} >
            <input className="name" id="Name" type="text" placeholder="Name" onChange={handleChange}/>
            <input className="email" id="Email" type="email" placeholder="Email" onChange={handleChange}/>
            <input className="phone" id="Phone" type="tel" placeholder="Phone" />
            <button onClick={handleSubmit}>Submit</button>

        </form>
        </div>
        <EducationForm />
        </>
    )

}

export default Form;