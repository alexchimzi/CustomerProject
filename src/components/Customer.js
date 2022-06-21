import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function Customer(){

	const [customers,setCustomers] = useState(null);

	useEffect(() => {
		fetch(
			"https://demo-1655722854865.azurewebsites.net/Home/Get_All_Customer")
			.then((res) => res.json())
			.then(setCustomers)

	},[])

	

	// ComponentDidMount is used to
	// execute the code
	
	
		if (customers === null ) return <div>
			<h1> Pleses wait some time.... </h1> </div>;

		return (
			<div className="Customer">
				<h1> Fetch data from API </h1> {
					customers.map((customer) => (
						<Link to = {"/Customer/"+customer.customer_id} key={customer.customer_id} >
							Customer ID: {customer.customer_id}<br></br>
							First Name: {customer.first_name}<br></br>
							Last name:{customer.last_name}<br></br><br></br>
							
							{/* City:{customer.address}<br></br> */}
							{/* Country:{item.address["city"].country}<br></br> */}

						</Link>
					))
				}
			</div>
		);
}


export default Customer;