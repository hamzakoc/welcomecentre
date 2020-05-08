
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
    <>
    <div className="align-item-center color-dark font-weight-bold"  light expand="lg" >
    <Nav>
         
            
            <NavItem>
              <NavLink to="/saglikhizmetleri" tag={Link} style={{color: 'black', fontWeight:"bold"}}>
                <i className="" />Sağlık Hizmetleri
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink to="/laboratuvarlar" tag={Link} style={{color: 'black', fontWeight:"bold"}}>
                <i className="" /> Laboratuvarlar
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink to="/ailedoktorlari" tag={Link} style={{color: 'black', fontWeight:"bold"}}>
                <i className="" /> Aile Doktorları
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink to="/dishekimleri" tag={Link} style={{color: 'black', fontWeight:"bold"}}>
                <i className="" /> Diş Hekimleri
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/gidabakimi" tag={Link} style={{color: 'black', fontWeight:"bold"}}>
                <i className="" /> Gıda Bakımı 
              </NavLink>
            </NavItem>
            </Nav> 
    </div>
    </>
  );
}

export default IndexNavbar;
