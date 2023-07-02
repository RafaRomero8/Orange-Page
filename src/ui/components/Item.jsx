import { Paper, Button } from '@mui/material'
import { useState } from 'react';



function Item (items)
{
 //console.log(items)
    // const [image,setImage] = useState();
    // const [title,setTitle] = useState();
   

    return (
        
        <Paper>
            <img  src={items.image} alt={items.title}  />
       
            <h2>{items.title}</h2>
            <Button className="CheckButton">
                Check it out!
            </Button>

           
        </Paper>
    )
    }

    export default Item
