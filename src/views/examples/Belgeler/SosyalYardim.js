
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
                 
                    <h3 className="title font-weight-bold ">Devlet (WALFARE) Yardimi Basvurusu</h3>
                 <p>Sarı belge alan kişiler; maddi durumları iyi değilse, kısıtlı imkanı
                        olduklarını kanıtlayabilecek durumdalarsa kimlikleriyle birlikte vakit
                        geçirmeden Ontorio Works’e başvurmaları gerekir. Bu başvuru hem telefon
                        hem de online olarak yapılabilmektedir. Online başvuru yapılsa dahi
                     tekrar telefonla arayıp randevu tarihi alınmalıdır.</p>
                     Online Başvuru Formu: <a href="https://saapply.mcss.gov.on.ca/CitizenPortal/application.do" target="_blank">
                         burayı tıklayın</a>

                    <p>Telefon Numarası: +1 (855) 231 12 55</p>

                    <h5>Önemli Not</h5>

                    <p>Randevuya giderken yanınızda bulundurmanız gereken belgeler:
                        <ul>
                               <li>Sarı belge;</li> 
                               <li>Banka hesap hareketleriyle ilgili belge ve hesap ekstresi (direct deposit
                                form ve bank statement)(Kanadada açılan banka hesabı);</li> 
                                <li>Mevcut durumda kaldığınız adresi gösterir belge;</li> 
                                <li>Kira ödeyip ödemeğinize dair belge (Kira sözleşmesi)</li> 
                                
                             </ul>   
                                <p>Randevuda görüşme yapacak olan görevli (case worker), sizin
                                gerçekten devlet yardımına ihtiyacınız olduğuna inanmalıdır. 
                                Aksi takdirde para yardımı alamayabilirsiniz.
                                Para yardımı randevudan 2 iş günü içerisinde
                                banka hesabınıza yatırılır</p>         
                 </p>

                                <p>Adress: <a href="https://www.mcss.gov.on.ca/en/mcss/programs/social/ow/contacts/ow_Contacts.aspx" target="_blank">tıklayınız</a> </p>

                                <p>Daha Fazla bilgi için <a href="https://www.mcss.gov.on.ca/en/mcss/programs/social/ow/" target="_blank">tıklayınız</a></p>
                 
                    </Col>
                    </Row>
                </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default ProfilePage;
