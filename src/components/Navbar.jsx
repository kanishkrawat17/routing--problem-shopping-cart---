import React from 'react';
import {Link,Redirect} from "react-router-dom";

const Navbar = ()=>{
  return (
    <> 
    <Link to = "/cart">
      <p style={{textAlign : "center" , border :"1px solid", padding : "20px" }}> Shopping-Cart</p>
      </Link >
    </>
  )
}

export default Navbar;