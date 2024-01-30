function Header(){
    return(
        <>
        {/* header section */}

        <header className="header_section">
            <div className="header">
                <div className="logo">MoviesHUB</div> 


                <div className="search">
                    <input type="text" placeholder="search movies"/>

                    <i className="fa-solid fa-magnifying-glass searching" ></i>

                    <i className="fa-regular fa-user user" ></i>
                    
                </div>
            </div>
            
            
        </header>
        </>
    );
}
export default Header;