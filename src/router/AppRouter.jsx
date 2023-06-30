import { Navigate, Route, Routes } from "react-router-dom"

import { Landing } from "../auth/pages/Landing";
import { Home } from "../orange/pages/Home";
import { About } from "../orange/pages/About";
import { Services } from "../orange/pages/Services";
import { Contact } from "../orange/pages/Contact";



export const AppRouter = () => {
  return (

    <>
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
