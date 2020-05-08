
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
              <NavLink to="/yiyecekbanklari" tag={Link}  style={{color: 'black', fontWeight:"bold", fontSize:"5"}}>
                <i className="" /> Yiyecek Bankaları
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/ozelgidalar" tag={Link} style={{color: 'black', fontWeight:"bold"}}>
                <i className="" /> Özel Gıdalar
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/marketler" tag={Link} style={{color: 'black', fontWeight:"bold"}}>
                <i className="" /> Marketler
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink to="/giysimagazalari" tag={Link} style={{color: 'black', fontWeight:"bold"}}>
                <i className="" /> Giysi Mağazaları
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink to="/alisveris" tag={Link} style={{color: 'black', fontWeight:"bold"}}>
                <i className="" />Alış Veriş
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink to="/internettenalisveris" tag={Link} style={{color: 'black', fontWeight:"bold"}}>
                <i className="" /> İnternetten Alışveriş
              </NavLink>
            </NavItem>
            
            
                                
          </Nav>
    </div>
  );
}

export default IndexNavbar;
