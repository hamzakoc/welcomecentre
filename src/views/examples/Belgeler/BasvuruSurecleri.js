
import React from "react";

// reactstrap components
import {
  Button,
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
            <Col className="ml-auto mr-auto " md="8" >
                <h3 className="title font-weight-bold">MAHKEME İŞLEMLERİ</h3>
             
	                <h5 className="description">Mahkeme işlemlerine baslangıç üç farklı şekilde olmaktadır ;</h5>  
                    
                    <ul>

                    <li><strong>Montreal den border'dan geçip gelenlerle alakalı 
                    interview Montreal'de yapılarak ellerinde sarı kagıt ile gelenler ;</strong><br></br>
                    Bu şekilde Torontoya gelenler kendilerine uygun 
                    gördükleri avukatı seçerek direkt avukatların yanındaki 
                    danışmanlar ile irtibata gecerek "legal aid" ve historylerini
                    oluşturarak mahkeme işlemlerini danışmanlar aracılığı ile başlatabilirler.</li>
                    <br></br>

                    <li><strong>Montreal den giriş yapıp interview tarihi ileri tarihe 
                    verilip interview olmadan gelenler ;</strong><br></br>
                    Bu şekilde Torontaya gelenler kendilerine uygun gördükleri 
                    danışmanlar aracılıgı ile Torontodaki cic ofisine giderek 
                    Montrealden giriş yaptıklarını, kendilerine interview tarihinin
                    ileri bir tarihe verildigini ve bu sekilde Torontaya geldiklerini, 
                    interviewlerinin burada yapılmasını isteyerek danışmanlar aracılığı 
                    ile interview,avukat,legal aid ve history işlemlerini başlatabilirler.</li>
                    <br></br>
                    <li><strong>Torontoya giriste havalaninda iltica ederek gelenler ;</strong><br></br>
                    Bu sekilde Torontoya gelenler Montreal den border dan 
                    gecerek ellerinde sari kagit la gelenler gibi islemlerini baslatabilirler.</li>
                    </ul>
                    <br></br>
                    <h5>MAHKEME ISLEMLERI ICIN BASVURULABILECEK DANISMANLAR</h5>
                    <ul>
                        <li>VEYS BEY (647)551 9404</li>
                        <li>ISMAIL BEY (647)551 7851</li>
                        <li>MAHMUT BEY (647)937 3278</li>
                        <li>MEHDI BEY (647)907 3483</li>
                        <li>ERKAN BEY (437)988 5883</li>
                        <li>HAKAN BEY (647)739 4453</li>
                    </ul>
                    <br></br>
                    <h5>SAĞLIK MUAYENESI İŞLEMi</h5>
                    <p>İltica başvurusunda bulunan kişilerin 1 ay içerisinde cic nin yönlendirmiş 
                        olduğu sağlık merkezlerinde sağlık muayenesinde
                        geçmeleri gerekmektedir.Bunun için aşağıdaki linkten, en
                        yakın sağlık merkezinden en yakın tarihe telefonla muayene
                        randevusu alınması gerektedir.</p>

                        <a href="https://secure.cic.gc.ca/pp-md/pp-list.aspx" target="_blank">Panel Physician</a>
                        
                        <br></br>  <br></br>
                        <h5>  WORK PERMIT(Çalışma İzni)</h5>

              <p> Kanada’da refugee claimant statüsünde yasal olarak çalışabilmeniz için çalışma 
                izni (work permit) ve sosyal sigorta numarasına (social insurance number, SIN) ihtiyaç  bulunmaktadır.</p> 
                <br></br>
                <strong>Başvuru internet üzerinden online olarak yapılmaktadır</strong><br></br>
                <p>Sağlık muayenesinin hemen ardından <a href="http://www.cic.gc.ca/english/e-services/account.asp" target="_blank">cic </a> 
                adresinden bir hesap açılıp çalışma izni başvurusu yapılmalıdır.
                Online başvuru işlemlerini GCKey denilen sistem vasıtasıyla yapmak zorundasınız. 
                Bunun için aynı siteden GCKey’e üye olunuz. Şifre ve güvenlik sorularını saklayınız. 
                GCKey hesabı üzerinden başka başvurular yapacağınız için şifreleri ve güvenlik sorularını unutmayınız<br></br><br></br>
                Başvuru yapmanız için sağlık belgenizin tamamlanmasını beklemenize gerek yoktur.Sağlık muayenesinden sonra size verilen belgede
                bu sayfaya yüklenecektir.</p> 
                <br></br>
                <p> <strong>Çalışma izni başvurusu için gerekli belgeler şunlardır:</strong><br></br> </p> 
                <ul>
                        <li>Pasaportun ilk sayfası veya sarı kağıt,</li>
                        <li>Aileniz burada ise onların da pasaport ve sarı  kağıtları,</li>
                        <li>Muayenede tarafınıza tek sayfalık medical exampaper,</li>
                        <li>Dijital fotoğraf</li>
                      
                    </ul>
               
                    <p>   Bu belgeler jpeg veya pdf haline getirilerek online başvuru esnasında sisteme yüklenmelidir. 
                Başvuru sırasındaki ana formu doldurup VALIDATE yaptıktan ıslak imzaya gerek kalmamaktadır.
                 Çalışma izninin sonuçlanması yoğunluğa göre değişmektedir. ( Genelde 1 ay içerisinde gelmektedir)</p> 
                 </Col>
          </Row>
              </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default ProfilePage;
