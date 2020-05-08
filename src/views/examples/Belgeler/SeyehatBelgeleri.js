
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
                         <h3 className="title font-weight-bold ">Seyehat Belgesi (Travel Document)</h3>
                         <p>Seyehat Belgesi, Kanada'da sınırları içerisinde olupda mahkeme sürecini tamamlamış koruma altındaki kişilere
                             seyehat hakkı tanıyan pasaporta benzer kimlik belgesidir </p> 

                             <h3>Başvuru aşamaları</h3>
                            <ul>
                                <li>Başvuru <a href="https://www.canada.ca/content/dam/ircc/migration/ircc/english/passport/forms/pdf/pptc190.pdf" target="_blank">formunu </a> doldurun</li>
                                <li> Gerekli tüm belgeleri toplayın ve fotoğraf çektirin
                                    <ul><li>Yasal statünüzü gösterir belge</li>
                                        <li>Kimliğinizi destekleyen bir belge.</li>
                                        <li>İki adet vesikalık fotoğraf.Detaylar için <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports/photos.html" target="_blank"> tıklayınız</a></li>
                                        <li>Kanada vatandaşlığına başvurduysanız, reddetme mektubunun bir kopyası (varsa).</li>
                                        <li>Son beş yıl içerisinde size verilen geçerli bir seyahat belgesi (varsa).</li>
                                    </ul>
                                    
                                </li>
                                
                                <li>Kefil ve iki referans bulun</li>
                                <li>Başvuru ücretini ödeyin</li>
                                
                            </ul>
                            Detaylı bilgi için <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports/travel-documents-non-canadians/apply.html" target="_blank"> tıklayınız</a>
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
