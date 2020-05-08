import React, { Component } from 'react'
import { Container, Row, Col} from 'reactstrap';
import FormPage from './FormPage'
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import AboutPageHeader from "components/Headers/AboutPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import HakkimizdaNavbar from "components/Navbars/HakkimizdaNavbar";


export default class Yardim extends Component {
    render() {
        return (
            <div>

                
         <ExamplesNavbar />
            <AboutPageHeader />
                <Container>
                <hr></hr>
                <HakkimizdaNavbar/>
                <hr></hr>
                    <Col className="ml-auto mr-auto " md="8">
                     <Row>
                         
                         <h3 className="title font-weight-bold">Yardıma İhtiyacınız mı var ?</h3>
                         <br></br>
                         <p>Kanada'ya alışmak zaman alabilir. Çözmeniz gereken birçok probleminiz olacak. Biz
                             Kanada Karşılama Merkezi olarak karşılaştığınız sorunları çözmek için elimizden geldiğince 
                    yardımcı olacağız.Size yardımcı olabilmemiz için aşağıdaki formu doldurunuz.</p>
                    
                        </Row>
                    </Col>
                    </Container>
                    <br></br><br></br><br></br>
                    <FormPage/>
                    <br></br> <br></br> <br></br>

                
            </div>
        )
    }
}
