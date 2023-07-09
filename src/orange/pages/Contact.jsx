import { useRef} from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser';
import { Container, Grid } from "@mui/material"
//import { Box, Button, TextField } from '@mui/material';
//import ButtonsResult from "./ButtonsResult";

export const Contact = () => {


  const service = import.meta.env.VITE_SERVICE_ID
  const template = import.meta.env.VITE_TEMPLATE_ID
  const public_key = import.meta.env.VITE_PUBLIC_KEY

  const form = useRef();
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  // const [interprise,setInterprise] = useState("");
  // const [phone,setPhone] = useState("");
  // const [name,setName] = useState("");


  const { register, handleSubmit, formState: { errors }, reset,watch } = useForm() 
  const customSubmit = () => {
      
      // emailjs.sendForm(service,template,
      //   form.current, public_key)
      //    .then((result) => {
      //     reset(
      //       {                descomentar esta seccion de codigo o emailjs
      //         user_name:"",
      //         user_phone:"",
      //         user_company:"",
      //         user_email:"",
      //         message: "",
      //       }
      //     )
      //        console.log(result.text);
      //        //alert("Mensaje Enviado con Exito")
      //      // form.current.reset() //current melimpia el formulario
      //    }, (error) => {
      //        console.log(error.text);
      //    });
         
      //alert("¡Validación exitosa!")
  }

  // const [colorInput, setColorInput] = useState('#fff7f7')
  // useEffect( ()=> {
  //     let words = watch('prueba')
  //     if(words === 'react'){setColorInput('#614ad3')}
  // } )
  
  return (
    <>
        <h2>Form Validation</h2>
        <Container sx={{borderStyle:"solid",color:"gray",mt:2}}>

        
        <form ref={form} onSubmit={ handleSubmit(customSubmit) } className='form-react'>
        <Grid item xs={12} sm={6} sx={{border:5,borderStyle:"solid",color:"red",pb:2 }}>
        <div className="col-md-4 mb-3">
                  <label >First name</label>
                  <input  className={(errors.user_name?.type === 'required') || ( errors.user_name?.type === 'minLength') ? 'form-control is-invalid':'form-control is-valid' }   placeholder="Username"  type="text" {...register('user_name',{ 
                    required:true,
                    minLength:5
                      })} />
                  {errors.user_name?.type === 'required' && <div className="invalid-feedback" >El campo no puede estar vacío</div>}
                  {errors.user_name?.type === 'minLength' && <div className="invalid-feedback">El minimo de caracteres es 5</div>}
                </div>
          
        </Grid>


        <div >
            

              <div className="col-md-4 mb-3">
              <label>Telefono</label>
                <input  type="text" {...register('user_phone', {
                    required: {
                        value:true,
                        message:"Custom Message: Ingrese los datos"
                    }
                })} />

              </div>

              <div className="col-md-4 mb-3">
              <label>Empresa</label>
                <input  type="text" {...register('user_company', {
                    required: {
                        value:true,
                        message:"Custom Message: Ingrese los datos"
                    }
                })} />
              </div>

              <div className="col-md-4 mb-3">
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

              <div className="col-md-4 mb-3">
              <label>Mensaje</label>
                <input  type="text" {...register('message', {
                    required: {
                        value:true,
                        message:"Custom Message: Ingrese los datos"
                    }
                })} />
              </div>
        </div>     

         <button type={'submit'} >Enviar</button>
        </form>
        </Container>
    </>
  )
}

//export default Contact