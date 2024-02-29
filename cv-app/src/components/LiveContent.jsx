import React, {useState} from "react"


function LiveContent({inputValue}){
    return(
        <>
            <div className="eduDisp">
                <div className="heading">
                    <h1>Personal Information</h1>
                </div>
                <div>
                    <h1>Name: {inputValue.Name}</h1>
                </div>
                <div>
                    <h1>Email: {inputValue.Email}</h1>
                </div>
                <div>
                    <h1>Phone: {inputValue.Phone}</h1>
                </div>
                </div>
                <div className="schDisp">
                <div className="heading">
                    <h1>School</h1>
                </div>
                <div>
                    <h1>School: {inputValue.School}</h1>
                </div>
                <div>
                    <h1>Degree: {inputValue.Degree}</h1>
                </div>
                <div>
                    <h1>Graduation: {inputValue.Graduation}</h1>
                </div>
                </div>
                <div className="workDisp">
                <div className="heading">
                    <h1>Work</h1>
                </div>
                <div>
                    <h1>Company: {inputValue.Company}</h1>
                </div>
                <div>
                    <h1>Position: {inputValue.Position}</h1>
                </div>
                <div>
                    <h1>Tasks: {inputValue.Tasks}</h1>
                </div>
                <div>
                    <h1>Start: {inputValue.Start}</h1>
                </div>
                <div>
                    <h1>End: {inputValue.End}</h1>
                </div>
                </div>
        
        </>
    )


}
export default LiveContent;