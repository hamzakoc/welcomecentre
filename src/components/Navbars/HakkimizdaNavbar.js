
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
          <NavItem >
              <NavLink to="/hakkimizda" tag={Link}  style={{color: 'black', fontWeight:"bold", fontSize:"5"}}>
                <i className="" /> Hakkimizda
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/yardim" tag={Link} style={{color: 'black', fontWeight:"bold"}}>
                <i className="" /> Yardıma İhtiyacınız mı var ?
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/gonullu" tag={Link} style={{color: 'black', fontWeight:"bold"}}>
                <i className="" /> Gönüllü Olun !
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink to="/katkida" tag={Link} style={{color: 'black', fontWeight:"bold"}}>
                <i className="" />Katkıda Bulunun !
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink to="/bizeulasin" tag={Link} style={{color: 'black', fontWeight:"bold"}}>
                <i className="" /> Bize Ulaşın
              </NavLink>
            </NavItem>
                                
          </Nav>
    </div>
  );
}

export default IndexNavbar;
