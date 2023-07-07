import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser';
//import ButtonsResult from "./ButtonsResult";

export const Contact = () => {


  const service = import.meta.env.VITE_SERVICE_ID
  const template = import.meta.env.VITE_TEMPLATE_ID
  const public_key = import.meta.env.VITE_PUBLIC_KEY

  const form = useRef();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [interprise,setInterprise] = useState("");
  const [phone,setPhone] = useState("");
  const [name,setName] = useState("");


  const { register, handleSubmit, formState: { errors }, reset,watch } = useForm() 
  const customSubmit = () => {
      //console.log(data)
      //register('');
      emailjs.sendForm(service,template,
        form.current, public_key)
         .then((result) => {
          reset(
            {
              user_name:"",
              user_phone:"",
              user_company:"",
              user_email:"",
              message: "",
            }
          )
             console.log(result.text);
             //alert("Mensaje Enviado con Exito")
           // form.current.reset() //current melimpia el formulario
         }, (error) => {
             console.log(error.text);
         });
         
      //alert("¡Validación exitosa!")
  }

  const [colorInput, setColorInput] = useState('#fff7f7')
  useEffect( ()=> {
      let words = watch('prueba')
      if(words === 'react'){setColorInput('#614ad3')}
  } )
  
  return (
    <>
        <h2>Form Validation</h2>
        <form ref={form} onSubmit={ handleSubmit(customSubmit) } className='form-react'>
            <div className='form-control'>
                <label>Name</label>
                <input  type="text" {...register('user_name',{ 
                    required:true,
                    minLength:5
                })} />
                {errors.name?.type === 'required' && <small className='fail'>El campo no puede estar vacío</small>}
                {errors.name?.type === 'minLength' && <small className='fail'>El minimo de caracteres es 5</small>}
                
            </div>
            {/* <div className='form-control'>
                <label>Age</label>
                <input type="number" {...register('age', {
                    required:true,
                    min:10,
                    max:100
                })} />
                {errors.age?.type === 'required' && <small className='fail'>El campo no puede estar vacío</small>}
                {errors.age?.type === 'min' && <small className='fail'>La edad mínima es de 10 años</small>}
                {errors.age?.type === 'max' && <small className='fail'>La edad máxima es de 100 años</small>}
            </div> */}
            <div className='form-control'>
                <label>Telefono</label>
                <input  type="text" {...register('user_phone', {
                    required: {
                        value:true,
                        message:"Custom Message: Ingrese los datos"
                    }
                })} />
                {/* {errors.country && <small className='fail'>{errors.country.message}</small>} */}
            </div>
            <div className='form-control'>
                <label>Empresa</label>
                <input  type="text" {...register('user_company', {
                    required: {
                        value:true,
                        message:"Custom Message: Ingrese los datos"
                    }
                })} />
                {/* {errors.country && <small className='fail'>{errors.country.message}</small>} */}
            </div>
            <div className='form-control'>
                <label>email</label>
                <input  type="email" {...register('user_email', {
                    required: {
                        value:true,
                        message:"Custom Message: Ingrese los datos"
                    },
                    pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                })} />
                {/* {errors.country && <small className='fail'>{errors.country.message}</small>} */}
            </div>

            <div className='form-control'>
                <label>Mensaje</label>
                <input  type="text" {...register('message', {
                    required: {
                        value:true,
                        message:"Custom Message: Ingrese los datos"
                    }
                })} />
                {/* {errors.country && <small className='fail'>{errors.country.message}</small>} */}
            </div>
             {/* <div className='form-control'>
                 <input {...register('prueba')} style={{ backgroundColor:colorInput }} />
             </div>    */}


                 {/* <ButtonsResult type='submit' {...{ reset }} /> */}
           
             {/* <button   
               type="submit"
                 
           value="Send"
        onClick={() => {
          customSubmit()
          
        }}
         >Send</button>  */}
         <button type={'submit'} >Enviar</button>
        </form>
    </>
  )
}

//export default Contact