import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


export default function Products(props){

    console.log("Products:",props.products);
    return (
      

      <section className='products_section'>
        <div className='products'>
             <div className='product_head'>
                <h3 style={{fontSize:"19px"}}>{props.products && props.products.title}</h3>

                <button>
                    View all
                </button>

            </div>

           
            <div className='product'>
            {
                props.products && props.products.products && props.products.products.map((p,i)=>{
                  return(
                        // <Link to={"/products/"+p._id}>

                    <div key={i} className='pro'>
                        <img  src={p.images[0]}/>

                        <h5 style={{textAlign:"center","color":"black"}}>{p.name} - 
                        <i className="fa-solid fa-cedi-sign"> </i>
                         <span>{p.price}</span>
                        </h5>

                        <div style={{width:"100%",display:"flex",alignSelf:"flex-end"}}>
                          <button style={{width:"50%",height:"25px",outline:"none"}}>
                            <i className='fa-solid fa-minus'></i>
                          </button>

                          {/* <div style={{width:"40%"}}>Add</div> */}

                          <button style={{width:"50%",height:"25px",outline:"none"}}>
                          <i className='fa-solid fa-plus'></i>

                          </button>
                          
                        </div>
                    </div>
                    
                  
                  )
                })
            }

        </div>
            

        </div>

      </section>
    )
  
}
