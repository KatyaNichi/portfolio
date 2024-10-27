import React from "react";
import { Col, Row } from "react-bootstrap";
import {
 SiVisualstudiocode,
 SiPostman,
 SiSlack,
 SiMacos,
 SiAndroidstudio,
 SiXcode,
 SiExpo,
} from "react-icons/si";

function Toolstack() {
 return (
   <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     {/* Mobile Development IDEs */}
     <Col xs={4} md={2} className="tech-icons">
       <SiAndroidstudio />
     </Col>
     <Col xs={4} md={2} className="tech-icons">
       <SiXcode />
     </Col>
     <Col xs={4} md={2} className="tech-icons">
       <SiExpo />
     </Col>

     {/* OS and General Development Tools */}
     <Col xs={4} md={2} className="tech-icons">
       <SiMacos />
     </Col>
     <Col xs={4} md={2} className="tech-icons">
       <SiVisualstudiocode />
     </Col>
     <Col xs={4} md={2} className="tech-icons">
       <SiPostman />
     </Col>
     <Col xs={4} md={2} className="tech-icons">
       <SiSlack />
     </Col>
   </Row>
 );
}

export default Toolstack;