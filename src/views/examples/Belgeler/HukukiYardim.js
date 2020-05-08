
import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/BelgelerPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

import IndexNavbar from "components/Navbars/IndexNavbar";

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
        <IndexNavbar />
        <hr></hr>
        <Row>
                    <Col className="ml-auto mr-auto " md="8">
                    <div>
                         <h3 className="title font-weight-bold">Hukuki Yardım</h3>
                         
                         <p  className="description">Gelir seviyesi düşük bireyler için Ontario eyaletinin hukuksal yardım imkanları bulunmaktadır.</p>
                         <h3>Nasıl başvuru yapabirilirim ?</h3><br></br>
                         <p> 416-979-1446 veya 1-800-668‑8258 numaraları ile Pazartesiden Cumaya, 08.00 - 17.00 saatleri 
                             arasında ücretsiz olarak arayabilirsiniz.
                              </p>
                              <p> Daha fazla bilgi için<a href="https://www.legalaid.on.ca/" target="_blank"> Legal Aid</a> </p> 

                          <h3>Hukuki Yardım çeşitlerinden bazıları</h3>   
                          <ul>
                              <li>Ceza hukuku sorunları</li>
                              <li>Aile içi şiddet</li>
                              <li>Aile yasal sorunları</li>
                              <li>Ruh sağlığı yasal konuları</li>
                              <li>Mülteci ve göçmenlik yasal konuları</li>
                              <li>Yasal klinikler</li>
                              
                        </ul> 
                              
                         </div>
                         
                    </Col>
                    </Row>
                </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default ProfilePage;
