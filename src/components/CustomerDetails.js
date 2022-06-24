import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


function CustomerDetails() {
    const [customer, setCustomer] = useState(null);
    const [deleteStatus,setDeleteStatus] = useState(false)

    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        fetch(
            "https://demo-1655722854865.azurewebsites.net/Home/Get_Customer_By_Id?Id=" + id)
            .then((res) => res.json())
            .then(setCustomer)
    }, [id])

    function Delete(){
        fetch('https://demo-1655722854865.azurewebsites.net/Home/Delete_Customer?id=' + id, { method: 'DELETE' })
        .then(() => setDeleteStatus(true));
        if(deleteStatus){
            navigate('../Get_Customers')
            alert("Customer "+id+" Deleted successfully!!")
        }
        
    }



    if (customer === null) return <div>
        <h1> Pleses wait some time.... </h1> </div>;

    return (

        <div className="CustomerDetails">
            <h1> Fetch data from API </h1>

            <ol id={"customerDetailList"+customer.customer_id} >
                Customer ID: {customer.customer_id}<br></br>
                First Name: {customer.first_name}<br></br>
                Last name {customer.last_name}<br></br>
                Store ID:{customer.store_id}<br></br>
                Email:{customer.email}<br></br>
                Address:{customer.address["address"]}<br></br>
                District:{customer.address["district"]}<br></br>
            
            </ol>

            <button id="back" > <Link to={"../Get_Customers"}>BACK</Link> </button>
            <button id="delete" onClick={Delete} > DELETE </button>
            <button id="update"> <Link to={"../Update/"+customer.customer_id}>UPDATE</Link> </button>
        </div>
        
    );

}

export default CustomerDetails;