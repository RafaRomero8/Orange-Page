//import Carousel from 'react-material-ui-carousel'
import Carousel from 'react-bootstrap/Carousel';
import { Container, Grid } from "@mui/material"
import rampa from "../../assets/heroes/rampa.jpg"
import rampa2 from "../../assets/heroes/-buda.jpg"
//import Item from './Item'
//import slider from '../helper/slider'
//import { red } from '@mui/material/colors'
//import { Paper, Button } from '@mui/material'

//https://react-bootstrap.netlify.app/docs/components/carousel#api

const Carousel_orange = () => {
    //console.log(Item)
    //const [id,setIma] = useState("");

    return (
        <Container xs={12} sx={{borderStyle:"solid",color:"gray",mt:3,pb:1}}>
         {/* {slide={true}} */}
        <Carousel variant='dark' fade={true} wrap={true}>

        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src={rampa}
            alt="First slide"
            width={400}
            height={300}
          />
          <Carousel.Caption >
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src={rampa}
            alt="Second slide"
            width={400}
             height={300}
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item  interval={4000}>
          <img
            className="d-block w-100"
            src={rampa2}
            alt="Third slide"
            width={400}
             height={300}
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Container>
       
    )
}

export default Carousel_orange


/*
function Carousel_orange()
{
   

    return (
        <Carousel>
            {
                slider.map( item => <Item key={item.id} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}
*/