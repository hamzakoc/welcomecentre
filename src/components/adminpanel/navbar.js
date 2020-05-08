import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ExamplesNavbar from "../Navbars/ExamplesNavbar.js";
import DemoFooter from "../Footers/DemoFooter.js";


export default class Navbar extends Component {

  render() {
    return (
      <>
      <ExamplesNavbar/>
 
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg" >
       
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/admin/news" className="nav-link text-light" >News</Link>
          </li>
          <li className="navbar-item">
          <Link  className="nav-link text-light" >||</Link>
          </li>
          <li className="navbar-item">
          <Link to="/admin/create" className="nav-link text-light">Create News</Link>
          </li>

          <li className="navbar-item">
          <Link  className="nav-link text-light" >||</Link>
          </li>
          <li className="navbar-item">
          <Link to="/admin/user" className="nav-link text-light">Create User</Link>
          </li>

          <li className="navbar-item">
          <Link  className="nav-link text-light" >||</Link>
          </li>
          <li className="navbar-item">
          <Link to="/admin/login" className="nav-link text-light">Log Me In</Link>
          </li>

          <li className="navbar-item">
          <Link  className="nav-link text-light" >||</Link>
          </li>
          <li className="navbar-item">
          <Link to="/admin/logout" className="nav-link text-light">Log Me Out</Link>
          </li>
       
        </ul>
        </div>
      </nav>

< />



    );
  }
}