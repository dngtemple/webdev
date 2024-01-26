function Register(){
    return(
        <div className="form_container">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder=" Username" />
            <input type="email" placeholder=" Email" />
            <input type="number" placeholder=" Contact" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Enter city" />

            <button className="btn btn-primary">Register</button>


        </div>
    );
}
export default Register;