import './App.css';

// import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


import { BrowserRouter as Router, Routes, Route , Navigate} from 'react-router-dom';

import Header from './Component/Header';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Create from './Pages/Create';
// import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Testing from './Component/Testing';
import Bottom from './Component/Bottom';


// login signup modules import 
import Login from './Pages/Login/index'
import Home from './Pages/Home/index'



function App() {
  const [user, setUser] = useState(null);

	const getUser = async () => {
		try {
			const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
			const { data } = await axios.get(url, { withCredentials: true });
			setUser(data.user._json);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getUser();
	}, []);
  return (
    <>
    {user &&  <Header/>}
    <Routes>
				<Route
					exact
					path="/"
					element={user ? <Home user={user} /> : <Navigate to="/login" />}
				/>
				<Route
					exact
					path="/login"
					element={user ? <Navigate to="/" /> : <Login />}
				/>
        <Route
					exact
					path="/contact"
					element={user ? <Contact user={user} /> : <Navigate to="/login" />}
				/>
        <Route
					exact
					path="/about"
					element={user ? <About user={user} /> : <Navigate to="/login" />}
				/>
        <Route
					exact
					path="/create"
					element={user ? <Create user={user} /> : <Navigate to="/login" />}
				/>
       
			</Routes>
    </>
   
  );
}

export default App;
