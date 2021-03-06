import React from 'react';
import { Link } from 'react-router-dom';





const Navbar = () => {
    return ( <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
  <Link to='/' className="navbar-brand" style={{paddingLeft: "10px"}}>Exercise Tracker</Link>


  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link to='/' className="nav-link">Exercises </Link>
      </li>
      <li className="nav-item">
        <Link to='/create' className="nav-link">Create Exercise Log</Link>
      </li>
      <li className="nav-item">
        <Link to='/user' className="nav-link">Create User</Link>
      </li>
      
        </ul>
    
  </div>
</nav> );
}
 
export default Navbar;