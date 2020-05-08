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
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/KultursanatPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import KultursanatNavbar from "components/Navbars/KultursanatNavbar";


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
        <KultursanatNavbar />
        <hr></hr>
          
       
          <Row>
            <Col className="ml-auto mr-auto " md="8">
            <h3 className="title font-weight-bold">Kultur ve Sanat</h3>
              <p>
              Dogal güzelikleri ve genis açik alanlari ile ünlü Kanada, modern artistik eserlerin merkezi olmasi ile de taninmaktadir.

Kanada güzel sanatlarinin kökeni çesitli kaynaklara dayanmaktadir: Kanada'nin cografyasi, iklimi, etnokültürel çesitliligi ve tarihi. Günümüzde, edebiyatta, dansta, 
sinemada ve diger artistik anlatimlarda Kanadalilar dünyanin en büyük kültürel faaliyetlerinde aranan uluslar arasindadir.
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
