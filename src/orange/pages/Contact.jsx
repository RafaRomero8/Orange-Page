
import  { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Box, Button, TextField } from '@mui/material';
import { Container, Grid } from "@mui/material"

export const Contact = () => {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [error, setError] = useState({
    error:false,
    message:" ",
  });


  const validateEmail = (email) =>{
    const regex =  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

  

    emailjs.sendForm('service_xel40ex', 'template_og658j4',
     form.current, 'cUTJvK1LQKu2gFIAd')
      .then((result) => {
        if(validateEmail(email)){
          setError({
            error:false,
            message:"",
          })
          console.log("Email correcto");
        }else{
          setError({
            error:true,
            message:"Email incorrecto",
          })
          console.log("Email incorrecto");
        }
          console.log(result.text);
          alert("Mensaje Enviado con Exito")
          form.current.reset() //current melimpia el formulario
      }, (error) => {
          console.log(error.text);
      });
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
          fullWidth
          error={true}
          sx={{mb:2 }}
        />
          <TextField
          name='user_phone'
          label="Telefono"
          type="text"
          variant='outlined'
          fullWidth
          error={true}
          sx={{mb:2 }}
        />
          <TextField
          name='user_company'
          label="Empresa"
          type="text"
          variant='outlined'
          fullWidth
          error={true}
          sx={{mb:2 }}
        />
          <TextField
          name='user_email'
          label="Email"
          type="email"
          variant='outlined'
          fullWidth
          required
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
          error={true}
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
