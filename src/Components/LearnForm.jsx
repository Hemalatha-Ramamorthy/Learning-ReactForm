import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup';
import '../css/App.css'

export default function LearnForm() {

    const basicSchema=yup.object().shape({
        name:yup.string().min(5,'Enter valid name').required('Please enter name'),
        email:yup.string().email().required('Please enter email'),
         mobilenumber:yup.number().positive()
         .min(10,'Enter valid mobile number').required('Please enter mobile number'),
    })




   const onSubmit = async (values, actions) => {
    
      const isEmpty = Object.values(values).every(
          value => value === ""
       );

  if (isEmpty)  return;

  const errors = await actions.validateForm();

  if (Object.keys(errors).length > 0) {
    console.log("Errors exist:", errors);
    return;
  }

  

  console.log(values);
  actions.resetForm();
};

   const {values,handleChange,handleSubmit,errors,touched}= useFormik({
    initialValues:{
        name:'',
        email:'',
        mobilenumber:''
    },
    validationSchema:basicSchema,
    onSubmit,
   })
  return (
   <>
   <div className="container">
    <form onSubmit={handleSubmit} autoComplete='off'>
        <input type="text" className={`form-control mb-2 ${errors.name && touched.name?'errors':''}`}  id="name" 
        onChange={handleChange} placeholder='Enter name' value={values.name}/>

         {errors.name && touched.name && <p className='error-text'>{errors.name}</p>}

        <input type="text" className={`form-control mb-2 ${errors.email && touched.email?'errors':''}`} 
        id="email" onChange={handleChange}  placeholder='Enter email'  value={values.email}/>
        {errors.email && touched.email && <p className='error-text'>{errors.email}</p>}

        <input type="number" className={`form-control mb-2 ${errors.mobilenumber && touched.mobilenumber?'errors':''}`} 
         id="mobilenumber" onChange={handleChange}  placeholder='Enter mobile number' value={values.mobilenumber}/>
        {errors.mobilenumber && touched.mobilenumber && <p className='error-text'>{errors.mobilenumber}</p>}

        <button className='btn btn-primary' type='submit'>Submit</button>
    </form>
   </div>
   </>
  )
}
