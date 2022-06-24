import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./styles/Customer.css"


function Customer(){

	const [customers,setCustomers] = useState(null);

	useEffect(() => {
		fetch(
			"https://demo-1655722854865.azurewebsites.net/Home/Get_All_Customer")
			.then((res) => res.json())
			.then(setCustomers)

	},[])

		if (customers === null ) return <div>
			<h1> Pleses wait some time.... </h1> </div>;

		return (
			
			<div className="Customer">

				{
					customers.map((customer) => (
						<Link to = {"/Customer/"+customer.customer_id} key={customer.customer_id} >
							<div className='customer_detail' id={"customerCard"+customer.customer_id} >
							<p className='info'>Customer ID: {customer.customer_id}<br></br>
							First Name: {customer.first_name}<br></br>
							Last name:{customer.last_name}<br></br><br></br>
							
							{/* City:{customer.address.country["country"]}<br></br> */}
							{/* Country:{customer.address.city.country["country"]}<br></br> */}
							</p>
							</div>
						</Link>
					))
				}
			</div>
		);
		
}


export default Customer;