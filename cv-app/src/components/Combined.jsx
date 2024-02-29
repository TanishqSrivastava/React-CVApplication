import Form from './Form.jsx'
import React, {useState} from 'react'
import LiveContent from './LiveContent.jsx'
import InputTag from './InputTag.jsx'
function Combined(){
    const [input, setInput] = useState({
        Name: "",
        Email: "",
        Phone:"",
        School: "",
        Degree: "",
        Graduation: "",
        Company: "",
        Position: "",
        Tasks: "",
        Start: "",
        End: ""
    });
    const inputChange = (name, value) =>{
        setInput({...input, [name]:value});
    };
    return(
        <>
        <div className="headingPage">
            <h1> CV Creator </h1>
        </div>
        <div className="headInfo">
        <div className="pInfo">
            <h1> Personal Info </h1>
            <InputTag name="Name" onInputChange={inputChange}/>
            <InputTag name="Email" onInputChange={inputChange}/>
            <InputTag name="Phone" onInputChange={inputChange}/>
        </div>
        <div className="eduInfo">
            <h1> Education </h1>
            <InputTag name="School" onInputChange={inputChange}/>
            <InputTag name="Degree" onInputChange={inputChange}/>
            <InputTag name="Graduation" onInputChange={inputChange}/>
        </div>
        <div className="workInfo">
            <h1> Work</h1>
            <InputTag name="Company" onInputChange={inputChange}/>
            <InputTag name="Position" onInputChange={inputChange}/>
            <InputTag name="Tasks" onInputChange={inputChange}/>
            <InputTag name="Start" onInputChange={inputChange}/>
            <InputTag name="End" onInputChange={inputChange}/>
        </div>
        </div>
        <div className="liveContent">
            <LiveContent inputValue={input}/>
            </div>
        </>
    )

}

export default Combined;