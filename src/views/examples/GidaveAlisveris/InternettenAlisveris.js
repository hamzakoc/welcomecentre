import React, { Component } from 'react'
import { Container, Row, Col} from 'reactstrap';
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/GidaalisverisPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import GidaalisverisNavbar from "components/Navbars/GidaalisverisNavbar";



export default class InternettenAlisveris extends Component {
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
            <h3 className="title font-weight-bold">İnternetten Alışveriş</h3>

                 <p>Kanadalılar, online alışverişi çok sayıda mal ve hizmet almak için kullanırlar.
                     Kanada pazarı teknolojik olarak gelişmiş ve çözülebilir olduğundan, 
                     online rekabet oldukça yüksektir. Amerikan şirketlerinin pazar büyüklüğü 
                     avantajı göz önüne alındığında, Kanada e-ticaretine, özellikle Kanada'daki en büyük e-ticaret 
                     oyuncusu olan Amazon başta olmak üzere birçok segmentte çalışan ABD platformları hakimdir.Bununla
                      birlikte, Canadian Tyre ve Hudson’s Bay gibi bazı geleneksel pazar ihtiyaçlarınızın küçük bir kısmını 
                       buralardan alabilirsiniz. </p>

                    
                 
                 <p>Başlıca online Alışveriş siteleri</p>
                 <ul>
                     <li><li><a target="_blank" rel="nofollow" href="https://www.amazon.ca/">Amazon</a></li></li>
                     <li><a target="_blank" rel="nofollow" href="https://www.adidas.ca">Adidas</a></li>
                     <li><a target="_blank" rel="nofollow" href="https://www.gap.ca">Gap</a></li>
                     <li><a target="_blank" rel="nofollow" href="https://www.canadiantire.ca">Canadian Tire</a></li>
                     <li><a target="_blank" rel="nofollow" href="https://www.walmart.ca">Walmart</a></li>
                     <li><a target="_blank" rel="nofollow" href="https://www.casper.ca">Casper</a></li>
                     <li><a target="_blank" rel="nofollow" href="https://www.aliexpres.com">AliExpress</a></li>
                     <li><a target="_blank" rel="nofollow" href="https://www.ebay.com">eBay</a></li>
                     <li><a target="_blank" rel="nofollow" href="https://www.dell.ca">Dell</a></li>
                     <li><a target="_blank" rel="nofollow" href="https://www.bestbuy.ca">Best Buy</a></li>


                 </ul>
                 
                 
                 </Col>
                </Row>
           
        </Container>  <br></br> <br></br> <br></br>
        <DemoFooter />
            </div>
        )
    }
}
