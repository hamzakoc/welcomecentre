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
import ProfilePageHeader from "components/Headers/EgitimPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import EgitimNavbar from "components/Navbars/EgitimNavbar";

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
        <EgitimNavbar />
        <hr></hr>
          

          <Row>
            <Col className="ml-auto mr-auto " md="8">
            <h3 className="title font-weight-bold">Eğitim</h3>
              <p>
              Dünyanın en eğitimli ülkelerinden biri olan Kanada, günümüzde canlı kültürü, şaşırtıcı doğa manzaraları, dünya çapında saygın üniversiteleri, Toronto, Montreal, Vancouver gibi hoşgörülü öğrenci şehirleri, refah yaşam standartları, ekonomik zenginliği ve göçmenlere uygulanan ılımlı politikaları ile uluslararası
               öğrenciler için Amerika ve İngiltere’den sonra dünyanın en çok tercih edilen yurtdışı eğitim duraklarından biridir.
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
