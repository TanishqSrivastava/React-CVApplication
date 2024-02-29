import React, {useState} from 'react';

function WorkForm(){
    const [workData, setWorkData] = useState({
        Company: "",
        Position: "",
        Start: "",
        End: ""
    });
    const handleChange = (event) =>{
        setWorkData({...workData,[event.target.name]:event.target.value});
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(workData);
    }


    return(
        <div className="workInfo">
        <form className="work">
            <input className="company" name="Company" type="text" onClick={handleChange} placeholder="Company"/>
            <input className="position" name="Position" type="text" onClick={handleChange} placeholder="Position"/>
            <input className="start" name="Start" type="text" onClick={handleChange} placeholder="Start Date"/>
            <input className="end" name="End" type="text" onClick={handleChange} placeholder="End Date"/>
            <button onClick={handleSubmit}>Submit</button>
        </form>
        </div>
    )
}

export default WorkForm;