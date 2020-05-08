
import React from "react";

import { Link } from "react-router-dom";
import classnames from "classnames";
// reactstrap components
import {
  Navbar,
  NavItem,
  NavLink,
  Nav,
} from "reactstrap";

function IndexNavbar() {
 

  return (
    <div className="align-item-center color-dark font-weight-bold"  light expand="lg" >
    
          <Nav >
         
          
          
            
            <NavItem>
              <NavLink to="/gecicibarinma" tag={Link} style={{color: 'black', fontWeight:"bold"}}>
                <i className="" /> Geçici barınma
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink to="/evkiralama" tag={Link} style={{color: 'black', fontWeight:"bold"}}>
                <i className="" />Ev Kiralama
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink to="/evsatinalma" tag={Link} style={{color: 'black', fontWeight:"bold"}}>
                <i className="" /> Ev Satın Alma
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/yurtlar" tag={Link} style={{color: 'black', fontWeight:"bold"}}>
                <i className="" /> Yurtlar
              </NavLink>
            </NavItem>
           
                                
          </Nav>
    </div>
  );
}

export default IndexNavbar;
