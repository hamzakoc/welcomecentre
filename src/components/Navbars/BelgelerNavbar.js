
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
              <NavLink to="/basvurusurecleri" tag={Link}  style={{color: 'black', fontWeight:"bold", fontSize:"5"}}>
                <i className="" /> Basvuru Surecleri
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/hukukiyardim" tag={Link} style={{color: 'black', fontWeight:"bold"}}>
                <i className="" /> Hukuki Yardim
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/ulasim" tag={Link} style={{color: 'black', fontWeight:"bold"}}>
                <i className="" /> Ulasim
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink to="/telefonhatti" tag={Link} style={{color: 'black', fontWeight:"bold"}}>
                <i className="" /> Telefon Hatlari
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink to="/evinterneti" tag={Link} style={{color: 'black', fontWeight:"bold"}}>
                <i className="" /> Ev Interneti
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink to="/kutuphanekarti" tag={Link} style={{color: 'black', fontWeight:"bold"}}>
                <i className="" /> Kutuphane Karti
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink to="/ehliyet" tag={Link} style={{color: 'black', fontWeight:"bold"}}>
                <i className="" /> Ehliyet
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink to="/bankahesaplari" tag={Link} style={{color: 'black', fontWeight:"bold"}}>
                <i className="" /> Banka Hesaplari
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink to="/kredikartlari" tag={Link} style={{color: 'black', fontWeight:"bold"}}>
                <i className="" /> Kredi Kartlari
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink to="/kiralamaalimsatim" tag={Link} style={{color: 'black', fontWeight:"bold"}}>
                <i className="" /> Kiralama, Alim-Satim
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink to="/sigortalar" tag={Link} style={{color: 'black', fontWeight:"bold"}}>
                <i className="" /> Sigortalar
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/sosyalyardim" tag={Link} style={{color: 'black', fontWeight:"bold"}}>
                <i className="" /> Sosyal Yardim
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/seyehatbelgeleri" tag={Link} style={{color: 'black', fontWeight:"bold"}}>
                <i className="" /> Seyehat Belgeleri
              </NavLink>
            </NavItem>
                                
          </Nav>
    </div>
  );
}

export default IndexNavbar;
