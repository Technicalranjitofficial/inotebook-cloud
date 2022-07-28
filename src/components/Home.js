import React from 'react'
import { Link } from 'react-router-dom'

const image= require("../wel.gif")


const Home = () => {

 
  return (
    
      
    <div style={{height:"100%",width:"100%"}} className="bg-dark">

      {/* <img src={image} className="img-fluid" alt='random'/> */}
      <p className="text-bold"><strong>We are in development mode, check out</strong> <Link className='link-danger' to="/notes">Note</Link></p>
    
    </div>
   
  )
}

export default Home
