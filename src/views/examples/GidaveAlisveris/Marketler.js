import React, { Component } from 'react'
import { Container, Row, Col} from 'reactstrap';
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/GidaalisverisPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import GidaalisverisNavbar from "components/Navbars/GidaalisverisNavbar";

export default class Marketler extends Component {
    render() {
        return (
            <div>
              <ExamplesNavbar />
      <ProfilePageHeader />
        <Container>
        <hr></hr>
        <GidaalisverisNavbar />
        <hr></hr>
          
         
          <Row>
            <Col className="ml-auto mr-auto " md="8">
            <h3 className="title font-weight-bold">Marketler</h3>

                 <p><strong>Ünlü Toronto Marketleri</strong></p>
                 <p>Toronto'da ihtiyaçlarınızı karşılamak için çeşitli ürün, fiyat ve hizmetler sunan 
                     çok sayıda market vardır.Gıda pazarlarında taze ürünler 
                      bulunur ve bit pazarlarında giyimden ev eşyalarına kadar ihtiyacınız olan her şey vardır.</p>
                  
                         <ol>
                             <li><a href="http://www.kensington-market.ca/Default.asp?id=home&l=1" target="_blank">Kensington Market </a> 
                             -Klasik giysiler, taze ürünler satan mağazalar, kafeleler, mücevherlerden ev eşyalarına, dekorlara ve tabii ki eski kıyafetlere kadar çoğu şeyi bulabilirsiniz.</li>
                             <li><a href="https://www.drfleas.com/" target="_blank">Dr Flea's Market </a> -Toronto'daki en büyük bit pazarı! Toronto'nun batı ucunda bulunur. 
                             1000'in üzerinde  ürün ve hizmet sunan yaklaşık 400 satıcı vardır.</li>
                             <li><a href="http://www.dpmarket.com/" target="_blank"> Downsview Park Merchant Market</a>- Pazarda antikalar, sağlık ve güzellik ürünleri, oyunlar, kitaplar, 
                             kilim kıyafetleri ve diğer ürün ve hizmetler ile ilgili birçok şey bulunmaktadır.</li>
                             <li><a href="http://www.stlawrencemarket.com/" target="_blank"> St. Lawrence Market </a>- Şehir merkezindeki popüler bir pazardır. Pazarda fırıncılar, 
                             kasaplar, zanaatkarlar bulunuyor.</li>
                             <li><a href="http://www.fairmountmarket.ca/" target="_blank">  Fairmont Farm Market  </a>- Mevsimine göre yerel meyve ve sebse bulabileceğiniz bir pazar alanıdır.</li>
                             <li><a href="https://leslievilleflea.com/" target="_blank">  Leslieville Flee Markets   </a>- Pazarda ahşap ürünler, eski kıyafetler, antikalar, koleksiyon ürünleri bulunur ve aylık olarak düzenlenir.</li>
                             <li><a href="http://blackmarkettoronto.com/" target="_blank">  Black Market Toronto  </a>- Retro tarzı bir pazardır, eski ve yeni kıyafetler, baskılı tişörtler ve aksesuarlar satılmaktadır.</li>
                             <li><a href="https://www.artsmarket.ca/" target="_blank">  Arts Market   </a>- 150'den fazla sanatçı, tasarımcının eserlerinin sergilendiği yerdir. </li>
                         
                         </ol>
               
                 </Col>
                </Row>
            
        </Container>  <br></br> <br></br> <br></br>
          <DemoFooter />
            </div>
        )
    }
}
