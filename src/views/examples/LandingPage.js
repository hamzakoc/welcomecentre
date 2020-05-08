
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <div className="main"><hr></hr>
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h5 className="description">Projemizin amacı, devam eden projelerimize toplumun katılımını ve ilgisini teşvik etmektir. Northern Lights Relief Foundation ile bir proje kurarak, 
                ihtiyacı olanlara yardım etmek için dünya çapında bir çabaya katkıda bulunuyoruz. Daha fazla bilgi icin
                </h5>
                <br />
                
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col >
                <div className="info">
               
                  <div className="description">
                    <div className="">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img-circle img-no-padding img-responsive"
                        src={require("assets/img/neyapiyoruz.png")}
                      />
                    </a>
                  </div><br></br>
                   <h4 className="info-title">Ne yapıyoruz ?</h4>
                   <br></br>
                   
                    <p className="description">Karşılama Merkezi, çalışanlarına ve gönüllülerine yardım etmek, 
                    toplumun her bir üyesinine, herhangi bir şekilde veya hiçbir şekilde yargılamayı veya 
                    ayrımcılıgı kabul etmeyen, hoş ve saygılı bir ortamda çalışan gönüllü bir kuruluştur.
                    </p><hr></hr>
                   <br></br>
                   <br></br>
                   <br></br>
                  </div>
                </div>
              </Col>
              <Col >  
                <div className="info">
                <div className="">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img-circle img-no-padding img-responsive"
                        src={require("assets/img/education.jpg")}
                      />
                    </a>
                  </div>
                
                  <div className="description">
                    <h4 className="info-title">Katkılarımızı Kanada'nın ötesine taşıyoruz..</h4> 
                   <br></br>
                   <br></br>
                    <p>İnsanlığı şefkatli bir yürekle kucaklamanın önemini anlarken, katkılarımızı ve gönüllülüğümüzü Kanada'nın ötesine taşıyoruz.. 
                      İnsanların yardımında yerel ve uluslararası alanda işbirliği yapmak için gönüllü ekiplerimiz ile buradayız.
                    </p><hr></hr>
                  </div>
                </div><br></br>
                   <br></br><br></br>
              </Col>
              <Col >
                <div className="info">
                <div className="">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img-circle img-no-padding img-responsive"
                        src={require("assets/img/entegrasyon.jpg")}
                      />
                    </a>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Entegrasyon</h4><br></br>
                    <p>Hem entegrasyon hem de yerleşim açısından yeni yerleşenlere yardım ediyoruz.
                       Ailelerin ihtiyaçlarına maddi, duygusal ve fiziksel olarak yardım etmeyi teklif eden bir dizi destek sağlamak için burdayız.
                    </p>
                    <hr></hr>
                  </div>
                </div>
              </Col>
             
            </Row>
          </Container><hr></hr>
        </div>
        <div className="section text-center">
          <Container>
            <Row>
              <Col md="4">
                <Card className=" ">
                  <div className="">
                    <a href="#" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/help.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Yardıma İhtiyacınız mı var?</CardTitle>
                      </div>
                    </a>
                    <p className="card-description text-center color-dark">
                        Kanada'ya alışmak zaman alabilir. Çözmeniz gereken birçok probleminiz olacak. Biz Kanada Karşılama 
                        Merkezi olarak karşılaştığınız sorunları çözmek için elimizden geldiğince yardımcı olacağız.Daha fazla bilgi için
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                  <Button
                  className="btn-round"
                  color="success"
                  href="#"
                  onClick={e => e.preventDefault()}
                >
                  Tiklayiniz
                </Button><br></br> 
                   
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className=" ">
                  <div className="">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        
                        src={require("assets/img/volunter.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Gönüllü Olun!</CardTitle>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Gönüllü olmak ile sadece zamanınızı ve becerilerinizi vermekle kalmayacaksınız; karşılığında çok daha fazlasını geri kazanacaksınız. Yeni arkadaş edinmenize, yeni beceriler kazamanıza, 
                      kariyerinizi ilerletmenize ve hatta daha mutlu ve daha sağlıklı hissetmenize yardımcı olabilir. Daha fazla bilgi için
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                  <Button
                  className="btn-round"
                  color="success"
                  href="#"
                  onClick={e => e.preventDefault()}
                >Tiklayiniz
                </Button>
                   
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className=" ">
                  <div className="">
                    <a href="#" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/donation.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Bağış Yapın!</CardTitle>
                      </div>
                    </a>
                    <p className="card-description text-center">
              Bize bağışlarınızla katkıda bulunmak istiyorsanız, lütfen aşağıdaki bağlantıyı
                    </p>
                  </CardBody>
                  <CardFooter className="text-center"><br></br> <br></br> <br></br> <br></br> <br></br> 
                  <Button
                  className="btn-round"
                  color="success"
                  href="#"
                  onClick={e => e.preventDefault()}
                >
                  Tiklayiniz
                </Button>
                   
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        </div>
      
    </>
  );
}

export default LandingPage;
