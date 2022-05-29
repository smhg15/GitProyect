import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../views/Home";
import CryptoTableView from '../views/CryptoTableView';      
import CryptoProfileContainer from '../containers/CryptoProfileContainer';     
import Header from "../sections/Header";     


function AppRoutes() {
  return (
      <>
    <Router>
      <Header/>
			<Routes>
                <Route index element={<Home/>} />
				<Route path='/CryptoTableView' element={<CryptoTableView/>}/>			
                <Route path='/CryptoProfileContainer/:rank' element={<CryptoProfileContainer/>}/>
			</Routes>
	</Router>
    </>
  );
}

export default AppRoutes;