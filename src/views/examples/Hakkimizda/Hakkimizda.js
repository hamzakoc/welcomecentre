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
import AboutPageHeader from "components/Headers/AboutPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import HakkimizdaNavbar from "components/Navbars/HakkimizdaNavbar";



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
      <AboutPageHeader />
      <div className="section profile-content">
        <Container>
        
        <hr></hr>
        <HakkimizdaNavbar />
        <hr></hr>
          
         
          <Row>
            <Col className="ml-auto mr-auto " md="8">
            <h3 className="title font-weight-bold">Hakkımızda</h3>
                         <br></br>
                            <p>Canada Welcome Center, faaliyetlerini Northern Lights Relief Foundation'ın çatısı 
                                altında gerçekleştiren gönüllü bir organizasyondur.Başlıca görevi, güvenilir ve 
                                pratik bilgiler vererek yeni gelenlerin yeni yaşam ortamlarına adapte olmalarına 
                                yardımcı olmaktır. Ayrıca, oluşturduğu kaynaklar ile yeni gelenlerin  ihtiyaçları 
                                için yardımcı olmaktadır.
                                <br></br> <br></br> <br></br>
                                <h3 className="title font-weight-bold">Vizyonumuz</h3> 
                                Kanadada bulunan topluluklara yardım ederek hayata adapte olmalarını sağlamak.
                                 Bugünün yeni gelenleri, toplumumuzun geleceğinin yerleşik üyeleri olacak.Bu slogan ile
                                 yola çıkarak toplumumuzu birbirine yardımcı olan bireyler olarak yönlendirme gayretindeyiz.
                                 İlk uzatılan yardım elinin asla unutulmayacağına inanıyoruz.Tüm yeni üyelere 
                                  yardım etmek için buradayız<br></br> <br></br> <br></br>

                                  <h3 className="title font-weight-bold">Misyonumuz</h3> 
                                  
                                  Arkadaşlarımızı bu misyon ve vizyonda bize çeşitli 
                                  şekillerde katkıda bulunarak yardımcı olmaları için teşvik ediyoruz; bağışlar,
                                   gönüllü olarak etkinliklere katılmak ve faaliyetlerimiz hakkında başkalarını 
                                   bilgilendirmek.</p>
                                   <br></br> <br></br> <br></br>
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

