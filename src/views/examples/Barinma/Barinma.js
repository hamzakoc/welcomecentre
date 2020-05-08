
import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/BarinmaPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import BarinmaNavbar from "components/Navbars/BarinmaNavbar";

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
        <BarinmaNavbar />
        <hr></hr>
        
          <Row>
            <Col className="ml-auto mr-auto " md="8">
            <h3 className="title font-weight-bold">Barinma</h3>
              <p>
              Ülke içinde otellerin sundugu hizmetler, fiyatlar ve otellerin kalitesi degisiklik gösterir. Genellikle büyük sehirlerdeki oda fiyatlari daha pahalidir. Fakat, Kanada’da uygun fiyatlarla, konforlu ve temiz otel bulmak mümkündür. Otellerin büyük bir kismi kredi kartlarini kabul eder.
               Otel rezarvasyonlarini kendi ülkenizden birebir olarak ya da bir seyahat acentasi yoluyla yaptirmaniz mümkündür.
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
