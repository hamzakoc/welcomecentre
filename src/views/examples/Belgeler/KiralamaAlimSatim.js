
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
                         <h3 className="title font-weight-bold">Ev Kiralama veya Satın Alma</h3>
                         <p>Ev kiralayan veya satın alan kişiler emlak danışmanına komisyon 
                             ödemezler bu komisyon ev sahibi/satıcı tarafından ödenir.Kiralanan ve 
                             satılan, konut ve iş yerleri veritabanlarına listelenmektedir.
                             Bu nedenle her emlak danışmanının ayrı tüm kiralık ve satılık ulaşabilmektedir.
                             Kiralama ve satın alma işlemleri emlakçıları, alıcı ve satıcıyı, ev sahibi ve kiracıların 
                             haklarını kanunlar çerçevesinde koruyan bir alım satım sözleşmesi ile yürütülür.</p>
                          <h4>Daire veya ev kiralarken</h4>   
                            <ul>
                                <li>Kredi geçmişini gösteren Kredi Raporu</li>
                                <li> İş yerinden temin edilen ve gelirini gösteren iş mektubu,</li>
                                <li>Kişisel ve profesyonel referanslar</li>

                            </ul>
                            <p>gibi  belgeler ev sahipleri tarfından istenebilir</p>

                            <h2>Araç Kiralama veya Satın Alma</h2>
                            <p>1-Nakit :  Nakit olarak ödemelerde daha uygun şartlarda araçlar bulunabilir.<br></br>
                                2-Banka Kredisi : Bir çok kişi araba için banka kredisi çekerek bir kısmını yada tamamını ödeyerek satın alıyor.
                                 Aylık taksitler ile geri ödeme şartları bulunmaktadır.<br></br>
                                3-Bayi Araç Kredisi : Araç satan bayiler veya galeriler çözüm ortakları üzerinden kredi imkanı sunabilmektedir<br></br>
                                4-Kiralama : Kiralama yöntemi ile araç satın alabilirsiniz. Bu kira süresi genelde 4 yıldır. Aracın servis 
                                bakımlarını ve giderlerini siz ödersiniz. Kiralama süresi dolduğunda aracı geriye iade edilir yada belli bir 
                                ücret karşılığı arabayı satın alabilirsiniz.</p>
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
