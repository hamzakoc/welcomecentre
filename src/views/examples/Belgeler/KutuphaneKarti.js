
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
                 <h3 className="title font-weight-bold">Toronto'da Kütüphaneler</h3>
                 Toronto Halk Kütüphanesi şehrinize yerleşmenize destek olmak için sizlere, 
                 tamamı ÜCRETSİZ, çok sayıda hizmet sunmaktadır.Ücretsiz bir kütüphane kartı edinerek ihtiyaçlarınızı karşılayabilirsiniz.
                 Kayıt olmak için isim ve adres bilgilerinizi içeren iki adet kimlik belgesini herhangi bir kütüphaneye götürerek
                 kayıt işleminizi yapıp kartınızı alabilirsiniz.<br></br><br></br>
                  Kütüphane kartı ile;
                     <ul>
                        <li> Her bir kütüphanede bulabileceğiniz, internet erişimi, 
                            ofis yazılımları ve birçok veritabanı içeren bilgisayarları kullabilirsiniz.</li>
                      <li>Bütün kütüphane şubelerinde ücretiz kablosuz internet hizmetinden yararlabilirsiniz.</li>
                      <li>Bizzat kütüphaneye giderek veya internet üzerinden kitaplar, filmler ve daha fazlasını 
                          ödünç alablilirsiniz, 40’tan fazla dilde kütüphane içeriği bulunmaktadır.</li>
                      <li>İş bulmanız, sürücü ehliyet belgesi almanız ve daha bir çok konuda size yardımcı olabilecek 
                          bir  uzman ile tanışınabilirsiniz.</li>
                          <li>İngilizce öğrenmek ve pratik yapmak için derslere katılabilrsiniz.</li>
                          <li>"Yabancı Dil Olarak İngilizce" materyallerini de içeren, yetişkinler ve çocuklar 
                              için bir çok elektronik kaynağı bilgisayarınıza indirebilirsiniz.</li>
                          <li>Bir küçük işletme kurmak, iş aramak ya da çocuklar için hikaye vakti 
                              gibi çok çeşitli konulara sahip programlara katılabilrisiniz.</li>
                        <li>Kütüphane çalışanlarıyla iletişime geçebilirsiniz. Bir çok dil 
                            için çevirmenlere erişim mevcuttur.</li>
                    
                      </ul>
                 
                   <p><a href="https://www.torontopubliclibrary.ca/" target="_blank">Buradan </a>detaylı bilgilere ulaşabilirsiniz</p>
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
