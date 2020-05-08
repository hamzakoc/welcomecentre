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

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/GidaalisverisPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import GidaalisverisNavbar from "components/Navbars/GidaalisverisNavbar";


function ProfilePage() {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <ProfilePageHeader />
      <div className="section profile-content">
        <Container>
        <hr></hr>
        <GidaalisverisNavbar />
        <hr></hr>
          
         
          <Row>
            <Col className="ml-auto mr-auto " md="8">
            <h3 className="title font-weight-bold">Gida ve Alisveris</h3>

              <p>
              Kanada’da gıda tüketimi kolay hazırlanabilirlik, sağlıklı olması, lezzet ve fiyat kriterleri çerçevesinde şekillenmektedir. 
              Tüketicilerin kişisel tercihleri çerçevesinde zaman zaman ürünlerde bir veya birkaç unsur alım kararında etkili olup, tüketiciler kendi yaşam tarzlarını en iyi ifade ettiğini düşündükleri ürünlere yönelmektedir.
              </p>
              <br />
            </Col>
          </Row>
          <br />
         
          {/* Tab panes */}
         
        </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default ProfilePage;
