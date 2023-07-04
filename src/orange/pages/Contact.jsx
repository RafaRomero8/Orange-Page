
import { Formik,useFormik } from 'formik';
import  {useRef, useState } from 'react';
//import emailjs from '@emailjs/browser';
//import { Box, Button, TextField } from '@mui/material';
//import { Container, Grid } from "@mui/material"
import * as Yup from 'yup'
//ir a yup para checar lasvalidaciones

const schema = Yup.object().shape({
  email:Yup.string().email('Email invalido').required(),
  password:Yup.string().min(2).required(),

})


export const Contact = () => {
  //const {register,errors,handleSubmit} = useForm();



  const {handleSubmit,handleChange,handleReset,errors,values} = useFormik(
    {
      initialValues:{
        email:'',
        password:'' 
      },
      onSubmit: (values,{resetForm})=>{
        resetForm();
        console.log(values);
       
      },
      validationSchema:schema,
    })

  //   const  handleReset=(e) =>{
  //     e.target.reset();


  //   } 

  return (
    <>
     
        <h1>contact</h1>
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <input
              type='email'
              name='email'
              value={values.email}
              onChange={handleChange}
          />
          <input
              type='password'
              name='password'
              value={values.password}
              onChange={handleChange}
              
          />


        <button type={'submit'}>Enviar</button>
        <br/>
        {errors.email && <span>invalido</span>}
        {errors.password && <span>pass ivalido</span>}


        </form>

      {/* <Formik
       onSubmit={() =>{
          console.log('Form enviado')
       }}
      
      >
        {()=>  (
         

        )}
      </Formik> */}


        {/* <form onSubmit={handleSubmit(onSubmit)}>
       <input
          name='titulo'
          ref={
              register({
                    required:{value:true,
                     message:'Titulo obligatorio'}
              })
           }
       
       />

       <button>Enviar</button>

        </form> */}
  
    
    </>
    
  )
}
