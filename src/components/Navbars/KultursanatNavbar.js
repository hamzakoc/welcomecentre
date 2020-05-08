
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
              <NavLink to="/gonullucalismak" tag={Link} style={{color: 'black', fontWeight:"bold"}}>
                <i className="" /> Gönüllü Çalışmak
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink to="/kanadakulturu" tag={Link} style={{color: 'black', fontWeight:"bold"}}>
                <i className="" /> Kanada Kültürü
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink to="/gezilecekyerler" tag={Link} style={{color: 'black', fontWeight:"bold"}}>
                <i className="" /> Gezilecek Yerler
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink to="/onemlikutsalmekanlar" tag={Link} style={{color: 'black', fontWeight:"bold"}}>
                <i className="" /> Önemli Kutsal Mekanlar
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink to="/sporfaaliyetleri" tag={Link} style={{color: 'black', fontWeight:"bold"}}>
                <i className="" /> Spor Faaliyetleri
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/sanatfaaliyetleri" tag={Link} style={{color: 'black', fontWeight:"bold"}}>
                <i className="" /> Sanat Faaliyetleri 
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/muzikfaaliyetleri" tag={Link} style={{color: 'black', fontWeight:"bold"}}>
                <i className="" /> Müzik Faaliyetleri
              </NavLink>
            </NavItem>
                                
          </Nav>
    </div>
  );
}

export default IndexNavbar;
