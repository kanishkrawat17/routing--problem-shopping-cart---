import {useParams} from "react-router-dom"
import {useSelector } from "react-redux";

const Description = ()=>{
  const { id } = useParams();
  const products  =  useSelector(state=>state.products);
  // let id =  products.filter(product=>product.id === id)
  return(<>
    {
      products.map((product)=>{
        if( product.id === id){
          return(<>
            <section>
              <h1>{product.title}</h1>
              <p>{product.description}</p>
              <button> Add to cart </button>
            </section>
          </>)
        }
      })
    }
  </>)
}



export default Description;