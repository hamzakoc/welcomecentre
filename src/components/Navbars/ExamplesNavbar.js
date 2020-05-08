/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll=""
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">
         
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
          <NavItem>
              <NavLink to="/index" tag={Link}>
                    <img
                        alt="..."
                        src={require("assets/img/logosmall.jpg")}
                      />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/index" tag={Link}>
                <i className="" /> Anasayfa
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/hakkimizda" tag={Link}>
                <i className="" /> Hakkimizda
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/belgeler" tag={Link}>
                <i className="" /> Belgeler
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink to="/saglik" tag={Link}>
                <i className="" /> Saglik
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/barinma" tag={Link}>
                <i className="" /> Barinma
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/istihdam" tag={Link}>
                <i className="" /> Istihdam
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/egitim" tag={Link}>
                <i className="" /> Egitim
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/kultursanat" tag={Link}>
                <i className="" /> Kultur/Sanat
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink to="/gidaalisveris" tag={Link}>
                <i className="" /> Gida/Alisveris
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/ozelbakim" tag={Link}>
                <i className="" /> Ozel Bakim
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href=""
                target="_blank"
                title="Follow us on Twitter"
              >
                <i className="fa fa-twitter" />
                <p className="d-lg-none">Twitter</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href=""
                target="_blank"
                title="Like us on Facebook"
              >
                <i className="fa fa-facebook-square" />
                <p className="d-lg-none">Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href=""
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="fa fa-instagram" />
                <p className="d-lg-none">Instagram</p>
              </NavLink>
            </NavItem>
           
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default ExamplesNavbar;
