/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Card, Row,Container, Col
} from "reactstrap";


import Exchange from "../examples/Exchange.js";
// core components

function SectionLogin() {
  return (
    <>
   
    <div className="section profile-content">
      <Container>

        
      
        <Row>
          <Col className="ml-auto mr-auto text-center" md="6">
            <p><Exchange/>
            </p>
            <br />
          </Col>
        </Row>
        <br />
       
        {/* Tab panes */}
       
      </Container>
    </div>
  </>
);
}

export default SectionLogin;
