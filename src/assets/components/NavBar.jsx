import React from "react";
import {Link} from 'react-router-dom'

const NavBar = () => {
    return ( 

        <nav className="navbar">
            <h1>NINJA BLOG</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/TODO">TODO</Link>
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: '8px'
                }}>New Blog</Link>

                
            </div>
        </nav>


     );
}
 
export default NavBar;