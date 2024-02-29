import React, {useState} from 'react';
import WorkForm from './WorkForm.jsx'
function EducationForm(){
    const [eduData, setEduData] = useState({
        School: "",
        Degree: "",
        Graduation: ""
    });
    const handleChange = (event) =>{
        setEduData({...eduData,[event.target.name]:event.target.value});
    };
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(eduData);
    };
    return(
        <>
        <div className="eduInfo">
        <form className="education">
            <input className="school" name="School" type="text" placeholder="School"/>
            <input className="degree" name="Degree" type="text" placeholder="Degree" />
            <input className="graduation" name="Graduation" type="text" placeholder="Graduation Date"/>
            <button onClick = {handleSubmit}>Submit</button>
        </form>
        </div>
        <WorkForm />
        </>
    )
}
export default EducationForm;