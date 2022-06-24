import { Link } from "react-router-dom";

import "./styles/NavBar.css"



function NavBar(){

    return (
        <div className="nav">
            

            <li><Link to={"./"}>Home</Link></li>
            <li><Link id="customer_link" to={"/Get_Customers"}>Customers</Link></li>
            <li><Link to={"/Get_Actors"}>Actors</Link></li>
            {/* <li><Link to={""}>Delete</Link></li> */}
            <li><Link to={""}>Search</Link></li>
           
        </div>
    )

}
export default NavBar;