import {useSelector} from "react-redux";
import React from "react"
import {Link } from "react-router-dom";
import { useHistory } from "react-router-dom";


 const SingleProduct = ()=>{
   let products = useSelector(state=> state.products);
    let history = useHistory();
  return(<>

    <div style = {{display:"flex",justifyContent:"center"}}>
    { products.map((product)=>{
      return (
        <section style = {{padding:"26px"}}>
          <h2 style ={{border : "2px solid"}}>{product.title}</h2>
          <p ><strong>PRICE:</strong>{product.price}</p>
          <button style= {{border:"none",width:"7rem"}}>ADD IN CART</button>
          <br/>
          <br/>

          <button style= {{border:"none",width:"7rem"}}onClick = {(e)=>{
            console.log("hi")
            history.push(`/description/${product.id}`)
          }}>VIEW</button>
        
        </section>
      )
    })
    }
    </div>
  
  </>
  )

}

export default SingleProduct

