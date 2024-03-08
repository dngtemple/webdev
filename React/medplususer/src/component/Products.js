import { Link } from "react-router-dom";


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
                      <div style={{height:"100%",width:"100%",position:"absolute",opacity:"0.7"}}>
                        <img src={p.images[0]} style={{height:"100%",width:"100%"}}/>

                      </div>

                      <div className="prod_details">

                        <h5>{p.name}</h5>

                        <p>
                          <i className="fa-solid fa-cedi-sign"></i>
                          {p.price}
                        </p>
                        
                        <Link to={"/products/"+p._id}>
                         <div>View more</div>
                        </Link>

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
