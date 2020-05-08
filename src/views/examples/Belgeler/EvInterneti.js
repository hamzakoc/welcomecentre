
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
                         <h3 className="title font-weight-bold"> Toronto'da Mevcut İnternet Seçenekleri </h3>
                        <p className="description">Toronto'da, ISS'ler birkaç modda hızlı internet sunar
                             <ul>
                                <li> Dijital Abone Hattı (DSL) - DSL, telefon hatlarını kullanır ve geleneksel çevirmeli 
                              bağlantılara göre nispeten daha hızlıdır.</li>
                              <li>Kablo İnternet - Kablo İnternet, DSL ile karşılaştırıldığında daha hızlı internet 
                              hızı sunar. Bunu diğer bağlantılardan ayıran şey, internet hızının bir mahalledeki 
                              bağlantıların geri kalanıyla paylaşılmasıdır.</li>
                              <li>Uydu İnternet - Bu tür bir bağlantı, alıcı uydularının yardımı ile çalışır. 
                                  Uzak yerlerde daha etkilidir. Ancak, asıl olumsuz yanı oldukça pahalı ve daha az hızlı olmasıdır.</li>
                              <li>Fiber Optik - Fiber Optik internet, optik ağ üzerinden çalışır. Şu anda, evler, işletmeler ve 
                                  kurumlar için en hızlı bağlantı türlerinden biridir.</li>
                              </ul>
                              </p> 
                        
                          <h3>Doğru İnternet Servis Sağlayıcısını Seçme</h3>   
                          Genel olarak, beklentileriniz sizin için doğru olan bağlantı türünü, veri miktarını ve hızı belirleyecektir.
                          <ul>
                          <li>Router ve Modem Kiralama veya Satın Alma </li> 
                          <li>Hız </li> 
                          <li>İhtiyaçlarınız Hakkında Açık Olun </li> 
                          <li>Katma Değerli Hizmetler </li>
                          </ul>  
                          gibi faktörler karar vermede yardımcı olabilir
                          <br></br><br></br>

                           <p><a href="https://www.findinternet.ca/en/toronto-ontario" target="_blank">Buradan </a>detaylı internet tarifelerine ulaşabilirsiniz</p>
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
