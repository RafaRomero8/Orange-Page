import { Container, Grid } from "@mui/material"
import ReactImageMagnify from 'react-image-magnify';
import batman from '../../assets/heroes/rampa.jpg';

//https://www.npmjs.com/package/react-image-magnify

export const Landing = () => {
 // const imgUrl = '../../assets/heroes/dc-batman.jpg'
  return (
    <Container sx={{borderStyle:"solid",color:"gray",mt:2}}>
        <Grid container sx={{borderStyle:"solid",color:"black"}}>
          {/*xs={utiliza 12 columnas el 100% de mi pagina}
            sm={6} me lo divide a la mitad

          */ }
          <Grid item xs={12} sm={6} sx={{border:5,borderStyle:"solid",color:"red",pb:2 }}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repellat numquam nesciunt omnis magni fuga harum odio! At architecto adipisci beatae iste, dolor qui voluptatum quod, unde, a corporis sapiente?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repellat numquam nesciunt omnis magni fuga harum odio! At architecto adipisci beatae iste, dolor qui voluptatum quod, unde, a corporis sapiente?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repellat numquam nesciunt omnis magni fuga harum odio! At architecto adipisci beatae iste, dolor qui voluptatum quod, unde, a corporis sapiente?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repellat numquam nesciunt omnis magni fuga harum odio! At architecto adipisci beatae iste, dolor qui voluptatum quod, unde, a corporis sapiente?</p>
  
          </Grid>
   
          <Grid item xs={12} sm={6} md={4} sx={{border:5,borderStyle:"solid",color:"green",pb:2 }} >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repellat numquam nesciunt omnis magni fuga harum odio! At architecto adipisci beatae iste, dolor qui voluptatum quod, unde, a corporis sapiente?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repellat numquam nesciunt omnis magni fuga harum odio! At architecto adipisci beatae iste, dolor qui voluptatum quod, unde, a corporis sapiente?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repellat numquam nesciunt omnis magni fuga harum odio! At architecto adipisci beatae iste, dolor qui voluptatum quod, unde, a corporis sapiente?</p>
            
          </Grid>


        </Grid>
        <Grid div sx={{width:330,height:270}} >
        <ReactImageMagnify {...{
        smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src:batman,
       },
         largeImage: {
        src:batman,
        width: 1000,
        height: 1000
       },
        isHintEnabled:true,
        //enlargedImagePosition:'over',
        //shouldHideHintAfterFirstActivation:false,
          }} />
          
        </Grid>
        

    </Container>
 
  )
}
