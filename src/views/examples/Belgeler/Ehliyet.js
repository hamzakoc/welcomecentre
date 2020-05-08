
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
                 
                    <h3 className="title font-weight-bold">Ehliyet</h3>
                        <p>Ontario bölgesinde araba sürmek için G ehliyetiniz olması gereklidir. Her eyalette farklı 
                            ehliyet tipleri vardır. Ontario’da ikamet ediyorsanız sırasıyla G1 G2 ve 
                            son olarak G ehliyetlerini almak zorundasınız. </p> <br></br>

                        <p><a href="https://drivetest.ca/" target="_blank">Drive Test</a> adı verilen başvuru merkezlerine gidip
                         ehliyete müraacat edeceğinizi belirtiyorsunuz. Kimliğinizi ve adres bilgilerinizi 
                        veriyorsunuz. Resminiz çekilerek göz testine tabi oluyorsunuz. Gözlük kullanıyorsanız belirtmeniz 
                        gerekli ve yanınızda bulundurmanız gereklidir. Cihazda belirli yerlerde kırmızı noktalar çıkıyor görevliye hangi yönde olduğunu 
                             söylüyorsunuz. Göz testinde bir sıkıntınız çıkmazsa, isterseniz hemen yazılı sınava 
                             girebiliyorsunuz. Bazı merkezler de Türkçe de girebiliyorsunuz sınava yada isterseniz 
                             daha sonra gireceğinizi söyleyebilirsiniz. Yazılı sınava girdikten sonra 10 dk içinde 
                             size sonuçları bildiriyorlar. Sınav da toplamda 40 soru bulunuyor ve her bölümden maksimum 
                             3 yanlış yapma hakkınız var. Sınavada başarılı olursanız G1 ehliyet tipini alırsınız.
                             Size önce geçtiğinize dair bir kağıt veriyorlar daha sonra ev 
                             adresinize kartınızı gönderiyorlar. Bu kart aynı zaman da sizin bir nevi kimliğiniz 
                             de oluyor. G1 ile araba sürebilirsiniz fakat tek başınıza 
                             değil. Yanınızda en az 5 senelik G ehliyeti olan birinin olması gereklidir.
                              Ayrıca belirli saatler aralığında sürebilirsiniz. </p> <br></br>
                              
                             <p> 6 ay sonra G2 ye başvurabilirsiniz. (2 yıllık tecrübe göstebilirseniz bu süreyi beklemenize gerek kalmadan
                                 G2 ve G için başvuru yapabilirsiniz) Drive Test merkezlerine giderek G2 direksiyon sınavı için randevu almanız gerekmektedir.
                                Sınav gününüz geldiği zaman sınava kendi  arabanız ile gitmeniz gereklidir. Sınavı geçtiğiniz takdirde G2 aldığınıza 
                                dair daha sonra 2 hafta içersinde belirtmiş olduğunuz adrese ehliyetinizin aslını gönderiyorlar. 
                                 G2 ehliyeti ile %0 alkol olması lazım vücunuzda ve ayrıca belli  otobanları kullanamıyorsunuz.
                                 G2 ehliyeti ile UBER,LYFT yada bu tarz işlere başvuramazsınız. Çoğu firmada sürücü 
                                    işe alımı yaparken G2 ehliyetini kabul etmiyor. Bunlar için G ehliyetini almanız gerekir</p> <br></br>

                                    <p>G ehliyeti için Drive Test merkezlerine giderek G direksiyon sınavı için randevu almanız gerekmektedir.
                                    G2 aldıktan sonra 5 sene içeresinde başvurmanız gereklidir. Sınavı sonucunu hemen söylüyorlar 
                                    ve gidip G ehliyeti aldığınıza dair kâğıt alıyorsunuz içeriden ve belirttiğiniz adrese ehliyetinizin aslını gönderiyorlar.
                                    G ehliyeti ile işlere başvurabilirsiniz. Uber , Lyft gibi yerlerde çalışabilirsiniz. </p>       

                    </Col>
                    </Row>
                </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default ProfilePage;
