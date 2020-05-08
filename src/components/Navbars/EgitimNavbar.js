
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
              <NavLink to="/cocuklaricinokullar" tag={Link} style={{color: 'black', fontWeight:"bold"}}>
                <i className="" /> Çocuklar için Okullar
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/yetiskinlericinokullar" tag={Link} style={{color: 'black', fontWeight:"bold"}}>
                <i className="" /> Yetişkinler için Okullar
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/yazvekisokullari" tag={Link} style={{color: 'black', fontWeight:"bold"}}>
                <i className="" /> Yaz ve Kış Okulları
              </NavLink>
            </NavItem>
                                
          </Nav>
    </div>
  );
}

export default IndexNavbar;
