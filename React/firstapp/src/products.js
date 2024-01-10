function Product(props){
    return(
        
        <div className="pro_container">
            <img src={props.src} alt="" className="images"/>
            <h1>{props.name}</h1>
            <h2>{props.price}</h2>
            <p>{props.para}</p>
            
        </div>

    );
}

export default Product;