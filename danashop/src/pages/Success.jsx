import React from 'react'
import { useLocation } from 'react-router-dom';
import Nav from '../components/Nav';


const Success = () => {
               const loc=useLocation;
               const data=loc.state;
               console.log(data)
  return (
    <div>
               <Nav/>
               Successfully
               </div>
  )
}

export default Success