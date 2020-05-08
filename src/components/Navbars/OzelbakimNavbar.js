
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
              <NavLink to="/devlethizmetleri" tag={Link} style={{color: 'black', fontWeight:"bold"}}>
                <i className="" /> Devlet Hizmetleri 
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink to="/ozelkuruluslar" tag={Link} style={{color: 'black', fontWeight:"bold"}}>
                <i className="" /> Özel Kuruluşlar
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink to="/topluluklar" tag={Link} style={{color: 'black', fontWeight:"bold"}}>
                <i className="" /> Topluluklar
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink to="/imkanlar" tag={Link} style={{color: 'black', fontWeight:"bold"}}>
                <i className="" /> İmkanlar
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/organizasyonlar" tag={Link} style={{color: 'black', fontWeight:"bold"}}>
                <i className="" /> Organizasyonlar
              </NavLink>
            </NavItem>
         
                                
          </Nav>
    </div>
  );
}

export default IndexNavbar;
