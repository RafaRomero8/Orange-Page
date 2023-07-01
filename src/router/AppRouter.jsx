import { Navigate, Route, Routes } from "react-router-dom"

import { Landing } from "../auth";
import { Contact,Services,About,Home } from "../orange";
import { Navbar } from "../ui/components/Navbar";



export const AppRouter = () => {
  return (

    <>    
       <Navbar/>
      <Routes>
         <Route path="home" element={<Home/>}/>
         <Route path="about" element={<About/>}/>
         <Route path="services" element={<Services/>}/>
         <Route path="contact" element={<Contact/>}/>
         <Route path="landing" element={<Landing/>}/>

         <Route path="/" element={<Navigate to={"/landing"}/>}/>
      </Routes>
    
    </>
   
  )
}
