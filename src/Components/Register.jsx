import React, { useState } from "react"
const Register=()=>{

   const [formData,setFormData]= useState({
    Name:"",
    Email:"",
    MobileNumber:""
   })

    const handleform=(e)=>{
       const {name,value}=e.target;
       setFormData({...formData,[name]:value})
    } 
    const handleSubmit=(e)=>{
        e.preventDefault();
        if((!formData.Name)||(!formData.Email)||(!formData.MobileNumber)) return;
        console.log("Form Submitted ",formData)
        setFormData({
            Name:"",
            Email: "",
            MobileNumber: ""
        })
    }
    return(
        <>
        <div><h1  className='text-primary text-center mt-3'>
          Register Page
       
        </h1></div>
          <form onSubmit={handleSubmit}>
           <div className="mb-3">
             <label className="form-label">Name</label>
           <input   className="form-control" name="Name" value={formData.Name} onChange={handleform} /><br/>
           </div>
             <div className="mb-3">
            <label className="form-label">Email</label>
            <input   className="form-control" name="Email" value={formData.Email} onChange={handleform} /><br/>
            </div>
              <div className="mb-3">
             <label className="form-label">Mobile Number</label>
            <input   className="form-control" name="MobileNumber" value={formData.MobileNumber} onChange={handleform} />
            </div>
             <button className="btn btn-primary" type="submit">Add Data</button>
          </form>
        </>
    )
}

export default Register











