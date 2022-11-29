import React from 'react';
import {  Link } from "react-router-dom";

const navbar= () =>{
  
  return (
  <div>
    <li>
      <Link to="/">Plan a Trip</Link>
    </li>
    <li>
      <Link to="/mysavedtrips">My Saved Trips</Link>
    </li>
    <li>
      <Link to="/signout">Sign Out</Link>
    </li>
    </div>
  );
};

export default navbar;