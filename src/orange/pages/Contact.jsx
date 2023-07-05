
import  { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Box, Button, TextField } from '@mui/material';
import { Container, Grid } from "@mui/material"
import * as Yup from 'yup'
//console.log(import.meta.env.VITE_SERVICE_ID)

export const Contact = () => {

  const service = import.meta.env.VITE_SERVICE_ID
  const template = import.meta.env.VITE_TEMPLATE_ID
  const public_key = import.meta.env.VITE_PUBLIC_KEY

  const schema = Yup.object().shape({
    //email:Yup.string().email('Email invalido').required(),
    password:Yup.string().min(2).required(),
  
  })
  
  

  const form = useRef();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [interprise,setInterprise] = useState("");
  const [phone,setPhone] = useState("");
  const [name,setName] = useState("");
  
  const [error, setError] = useState({
    error:false,
    message:" ",
  });


  const [error_name, setError_name] = useState({
    error_name:false,
    message:" ",
  });

  //const [value, setValue] = useState('');

  const validateEmail = (email) =>{
    //const regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  const validateName = () =>{
       
          schema
    //return regex.test(email);
  };


  const sendEmail = (e) => {
    e.preventDefault();
    //setEmail('');
    setMessage('');
    setInterprise('');
    setPhone('');
    

  const  send_email = ()=>{
    emailjs.sendForm(service,template,
      form.current, public_key)
       .then((result) => {
           console.log(result.text);
           alert("Mensaje Enviado con Exito")
         // form.current.reset() //current melimpia el formulario
       }, (error) => {
           console.log(error.text);
       });
  }

   
    if(validateEmail(email) && validateName()){
      setError_name({
        error_name:false,
        message:"",
      })
      setError({
        error:false,
        message:"",   
      })
       //send_email()
       setName('')
       setEmail(''); 
       console.log("Email correcto");
    }else{
      setError({
        error:true,
        message:"Email incorrecto",
      })
      setError_name({
        error_name:true,
        message:"Ingrese almenos 2 caracteres",
      })
      console.log("Email incorrecto");
    }
      //e.target.reset();
  };
  return (
    <>
    
     <h1>Contact</h1>
    
     <Container>  
     
      {/* <Box  component="form" ref="form" onSubmit={sendEmail}> */}
      <form ref={form} onSubmit={sendEmail} className=''>
      <TextField
          name='user_name'
          label="Name"
          type="text"
          variant='outlined'
          
          color="warning"
          fullWidth
          //required='min'
          error={error_name.error_name}
          helperText={error_name.message}
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{mb:2 }}
        />
          <TextField
          name='user_phone'
          label="Telefono"
          type="text"
          variant='outlined'
          fullWidth
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
         // error={error.error}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          sx={{mb:2 }}
        />
          <TextField
          name='user_company'
          label="Empresa"
          type="text"
          variant='outlined'
          fullWidth
          //error={error.error}
          value={interprise}
          onChange={(e) => setInterprise(e.target.value)}
          sx={{mb:2 }}
        />
          <TextField
          name='user_email'
          label="Email"
          type="email"
          variant='outlined'
          fullWidth
          required //poner required si el campo es obligatrio OJO
          error={error.error}
          helperText={error.message}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{mb:2 }}
        />
           <TextField
          name='message'
          label="Mensaje"
          type="textarea"
          variant='outlined'
          fullWidth
          //error={error.error}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          sx={{mb:2 }}
          
        />
      
        <Button 
           type="submit"  
           value="Send"
          variant="contained"
          sx={{mb:2 }}
          >
            Send
        </Button>
        </form>
      {/* </Box> */}
   

    {/* <form ref={form} onSubmit={sendEmail} className=''>
    <Grid xs={12}> 
      
        </Grid>
      </form> */}
    
    </Container>
  
    </>
    
  )
}
