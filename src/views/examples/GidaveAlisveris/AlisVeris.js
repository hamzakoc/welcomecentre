import React, { Component } from 'react'
import { Container, Row, Col} from 'reactstrap';

import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/GidaalisverisPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import GidaalisverisNavbar from "components/Navbars/GidaalisverisNavbar";


export default class Alisveris extends Component {
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
            <h3 className="title font-weight-bold">Alışveriş</h3>
                 
                
               
                 <p>Bakkal tarzı esnaflar pek  bulunmamaktadır.Genellikle büyük alışveriş merkezleri mevcut. 
                     Aradığınız çoğu şeyi buralardan bulabilirsiniz. Müslümanlar için özel üretim helal gıdalar
                      bazı marketlerde satılabiliyor. Türk marketleri Montreal ve Toronto gibi büyük şehirlerde çok sayıda var. 
                      Ayrıca süpermarketlerde de yaprak sarma, dolma gibi Tamek marka konserve gıdalar bulunabilir.</p>

                    
                 
                 <p>Torondo'daki başlıca Alışveriş Merkezleri</p>
                 <ul>
                     <li>Yorkdale Shopping Centre</li>
                     <li>Scarborough Town Centre</li>
                     <li>CF Sherway Gardens</li>
                     <li>CF Fairview Mall</li>
                     <li>CF Shops at Don Mills</li>
                     <li>Pacific Mall</li>
                     <li>CF Toronto Eaton Centre</li>
                     <li>Vaughan Mills</li>
                     <li>Bayview Village Shops</li>
                     <li>Square One Shopping Centre</li>
                 </ul>
                 
                 
                 </Col>
                </Row>
           
        </Container>  <br></br> <br></br> <br></br>
        <DemoFooter />
            </div>
        )
    }
}
