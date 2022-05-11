const Input = ({name,label,type,value,errMsg,err,formInputs,setFormInputs,min,max,step})=> {
    
    const setValue = (value) =>{
        
        let result = {...formInputs}

        result[name].value = value;
        setFormInputs(result);
    }

    return (

        <div className="input-section" >
            
            <label>{label}</label>
            <input name={name} type={type} value={value} min={min} max={max} step={step} style={{padding:0,}} onChange={(e)=>{setValue(e.target.value)}}/>
            {err && <div className='error' > *{errMsg} </div> }

        </div>
    );
}

export default Input;
