function InputTag({name, onInputChange}){
    const handleInputChange = (event) =>{
        const value = event.target.value;
        onInputChange(name, value);
    }
    return(
        <input className={name} onChange = {handleInputChange} id={name} type="text" placeholder={name}/>
    )
}

export default InputTag;