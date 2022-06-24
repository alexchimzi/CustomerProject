
import React from 'react'
import Actor from './components/Actor';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import Customer from './components/Customer';
import CustomerDetails from './components/CustomerDetails';
import UpdatePage from './components/UpdatePage'
import Home from './components/Home';
import NavBar from './components/NavBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Get_Actors" element={<Actor />} />
            <Route path="Get_Customers" element={<Customer />} />
            <Route path="Customer/:id" element={<CustomerDetails />} />
            <Route path="Update/:id" element={<UpdatePage />} />
            <Route path="Update" element={<UpdatePage />} />

        </Routes>

    </Router>
);