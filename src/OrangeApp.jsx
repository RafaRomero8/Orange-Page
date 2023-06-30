//import { Button } from "@mui/material"
import { Container } from "@mui/material"
import Button from "@mui/material/Button"
import { AppRouter } from "./router/AppRouter"
//https://mui.com/system/properties/
//paddingBottom = pb hacia abajo
//poner imagenes en assets




const OrangeApp = () => {
  return (
    <>
    <Container sx={{border:15,borderStyle:"solid",color:"blue",
                     pb:2 }}>
      <h1>Pagina Orange</h1>
        <Button variant="contained">boton</Button>
      
    </Container>
   
    <AppRouter/>
    </>
     
  )
}

export default OrangeApp


