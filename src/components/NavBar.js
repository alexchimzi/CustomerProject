import { Link } from "react-router-dom";





function NavBar(){

    return (
        <div className="footerDiv">
            <h1><Link to={"./"}>Home</Link></h1>
            <h1><Link to={"/Get_Customers"}>Customers</Link></h1>
            <h1><Link to={"/Update/"}>Update</Link></h1>
            <h1><Link to={""}>Delete</Link></h1>
            <h1><Link to={""}>Search</Link></h1>
        </div>
    )

}
export default NavBar;