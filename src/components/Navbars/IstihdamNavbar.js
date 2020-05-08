
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
              <NavLink to="/isbulmakurumlari" tag={Link} style={{color: 'black', fontWeight:"bold"}}>
                <i className="" /> İş Bulma Kurumları
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink to="/denklik" tag={Link} style={{color: 'black', fontWeight:"bold"}}>
                <i className="" /> WES, ICAS (Denklik)
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink to="/sertifikalar" tag={Link} style={{color: 'black', fontWeight:"bold"}}>
                <i className="" /> Sertifikalar
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink to="/kurslar" tag={Link} style={{color: 'black', fontWeight:"bold"}}>
                <i className="" /> Kurslar
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/ciraklik" tag={Link} style={{color: 'black', fontWeight:"bold"}}>
                <i className="" /> Çıraklık
              </NavLink>
            </NavItem>
      
                                
          </Nav>
    </div>
  );
}

export default IndexNavbar;
