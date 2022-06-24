import {   useRef, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";




function UpdatePage(){
    const first_name_ref = useRef();
    const last_name_ref = useRef();
    const email_ref = useRef();
    const active_ref = useRef();
    const create_date_ref = useRef();
    const address_id_ref = useRef();
    const store_id_ref = useRef();
    const { id } = useParams();
    const [updateStatus,setUpdateStatus] = useState(false)
    //useEffect(()=>)


    async function Update(){
        //useEffect(() => {
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                id: id,
                first_name: first_name_ref.current.value,
                last_name: last_name_ref.current.value,
                email: email_ref.current.value,
                address_id: address_id_ref.current.value,
                active: active_ref.current.value,
                created_date: create_date_ref.current.value,
                store_id: store_id_ref.current.value})
                
            };
            
            // console.log(requestOptions.body);
            // fetch('https://demo-1655722854865.azurewebsites.net/Home/Update_Customer', requestOptions)
            // .then(res => res.json())
            // .then(setUpdateStatus);
            // console.log(updateStatus);
            // if(updateStatus){
            //     Navigate('../Customers/'+id)
            //     alert("Customer "+id+" Updated successfully!!")
            // }
            fetch('https://demo-1655722854865.azurewebsites.net/Home/Update_Customer', requestOptions)
           .then(res=>res.json())
           .then(setUpdateStatus)
            if(updateStatus){
                Navigate('../Customers/'+id)
                alert("Customer "+id+" Updated successfully!!")
            }


        //})
        
    }

    
    //console.log(requestOptions.body);
   // var first_name = document.getElementsByName("first_name").value;
    // var last_name= document.getElementsByName("last_name").value;
    // var address_id= document.getElementsByName("address_id").value;
    // var created_date = document.getElementsByName("created_date").value;
    // var store_id = document.getElementsByName("store_id").value;
    // var email = document.getElementsByName("email").value;
    // var active = document.getElementsByName("active").value;
    
    

    return(
        <div>
            <form>
                <label>
                    First Name:
                    <input type="text" name="first_name" ref={first_name_ref}/><br></br>
                </label>
                <label>
                    Last Name:
                    <input type="text" name="last_name"ref={last_name_ref} /><br></br>
                </label>
                <label>
                    Email:
                    <input type="email" name="email"ref={email_ref} /><br></br>
                </label>
                <label>
                    Address ID:
                    <input type="number" name="address_id" ref={address_id_ref}/><br></br>
                </label>
                <label>
                    Active:
                    <input type="number" name="active" ref={active_ref}/><br></br>
                </label>
                <label>
                    Create Date:
                    <input type="date" name="created_date" ref={create_date_ref}/><br></br>
                </label>
                <label>
                    Store ID:
                    <input type="number" name="store_id" ref={store_id_ref} /><br></br>
                </label>
                <button id="back" > <Link to={"../Customer/"+id}>BACK</Link> </button>
                <input type="submit" value="Submit" onClick={Update} />
            </form>
        </div>
    );
}
export default UpdatePage;