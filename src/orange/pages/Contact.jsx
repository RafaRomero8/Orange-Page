
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button, TextField } from '@mui/material';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xel40ex', 'template_og658j4',
     form.current, 'cUTJvK1LQKu2gFIAd')
      .then((result) => {
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
    <form ref={form} onSubmit={sendEmail} className=''>
      <TextField
          name='user_name'
          label="Name"
          type="text"
          variant='outlined'
        />
          <TextField
          name='user_phone'
          label="Telefono"
          type="text"
          variant='outlined'
        />
          <TextField
          name='user_company'
          label="Empresa"
          type="text"
          variant='outlined'
        />
          <TextField
          name='user_email'
          label="Email"
          type="email"
          variant='outlined'
        />
           <TextField
          name='message'
          label="Mensaje"
          type="textarea"
          variant='outlined'
        />
      
      <Button type="submit" value="Send"
       variant="contained">Send</Button>
    </form>
    </>
    
  )
}
