import React, { Component } from 'react'

import FormPage from './FormPage'
import { Container, Row, Col} from 'reactstrap';

import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import AboutPageHeader from "components/Headers/AboutPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import HakkimizdaNavbar from "components/Navbars/HakkimizdaNavbar";

export default class BizeUlasin extends Component {
    render() {
        return (
            <>
            <ExamplesNavbar />
            
            <AboutPageHeader />
            <div>
               <Container>
               <hr></hr>
               <HakkimizdaNavbar/>
               <hr></hr>
               <Row>
                    <Col className="ml-auto mr-auto " md="8">
                     
                         
                         <h3 className="title font-weight-bold">Bize Ulaşın</h3>
                         <br></br>
                         <p>Bizlere ileteceğiniz talep, şikayet, öneri ve istekleriniz için yardımcı olmaya hazırız.
                         Aşağıdaki formu doldurarak sorularınızı bize iletebilirsiniz. En kısa sürede size yanıt verilecektir.</p>
                         </Col>
                        </Row>
                    
                </Container>

                <FormPage className="ml-auto mr-auto text-center" md="6" />

                <br></br> <br></br> <br></br>
                    
            </div>

            </>
        )
    }
}
