import * as React from 'react';
import {Link, NavLink }from 'react-router-dom';
 
function Home(){
    return(  
    <nav>
        <NavLink to="/" value="Home" >
          Home
        </NavLink>
        <NavLink to='/CryptoTableView' value="CryptoTableView" >
          CryptoTableView
        </NavLink>
    </nav>)
}

export default Home;