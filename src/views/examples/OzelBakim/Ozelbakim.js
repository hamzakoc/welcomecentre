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
import ProfilePageHeader from "components/Headers/OzelbakimPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import OzelbakimNavbar from "components/Navbars/OzelbakimNavbar";


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
        <OzelbakimNavbar />
        <hr></hr>
          
         
          <Row>
            <Col className="ml-auto mr-auto " md="8">
              <p>
              <h3 className="title font-weight-bold">   Özel Bakım</h3>

              Özel Bakım demekle kastımız hayatını devam ettirmek için başkalarının yardımına ihtiyaç duyan bireylerin bakımıdır. Bu durumda bulunan bireyler genelde toplumda sağlık engeli olan veya yaşlılıktan dolayı sağlık sıkıntıları olan kişler 
              olarak görülür. Maalesef tüm toplumların bu kişlere olan bakış açısı yeterince yardımcı olamadığından bu bireyleri toplumsal haytta görmek oldukça zordur. Kanda Karşılama Merkezi olarak Kanada’ya yeni gelen bireyler içerisinde bu şekilde özel bakıma ihtiyaç duyanlara faydalı olacağını düşündüğümüz bu bçlümü oluşturmayı bir gçrev addettik. Bu sorumlulukla bu bölümü ve alt başlıklarını oluşturmaya çalıştık. Bu bölümde çzel bakıma ihtiyaç duyan arladaşlarımıza rehber olabilecek bilgiler paylaşarak onların da yeni Kanada kltürü ve hayatına adapte olmalarına yardımcı olmayı hedeflemekteyiz. umarız burada paykaşılan ve paylaşılacak bilgiler herkes için faydalı olacaktır.
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
