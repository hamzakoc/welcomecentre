
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
                         <h3 className="title font-weight-bold ">Araba Sigortası ve Fiyatlar</h3>
                         <p>Araba Sigortası yeni gelenler için en masraflı kalemlerden birisidir. 
                             Yüzlerce sigorta firması arasından hangisinin size ve bütçenize uygun 
                             olduğunu bulmak oldukça zor işlerden birisidir. Ödemeler genelde aylık taksitler halinde yapılır. 
                             Sigorta fiyatları her yeni yılda bir önceki yılki kaza, ceza puanı ve trafik cezası 
                             gibi koşullara bakarak artır veya azalır.  </p> 

                             <h3>Araba sigortası rakamlarınızı düşürebilecek öneriler</h3>
                            <ul>
                                <li>G ehliyeti size sigortanızda G2’ye oranla yaklaşık %30 bir indirim sağlayacaktır.</li>
                                <li> Sürücü kurslarına katılıp sürücü sertifikası aldığınızda bu sertifika Service Ontario’da 
                                    kayıt altında tutulur ve bu kayıt araç aldığınızda  ile %20 den %30 lara varan indirimler sağlayabilir.</li>
                                <li>Pahalı olmayan ve düşük model araçlar almak ödeyecek sigorta rakamını etkiler.</li>
                                <li>Aracın gece kapalı ve kameralı sistemi bulunan bir otoparkta bırakılıyor olması fiyatı düşüren etkenlerdendir</li>
                                <li>Günlük ve yıllık yapacağınız kilometre fiyatları etkilemekte</li>
                                <li>Oturduğunuz semtteki suç oranıda sigortayı etkileyen başka bir faktördür</li>


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
