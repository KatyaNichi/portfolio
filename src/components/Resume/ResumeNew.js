import React, { useState, useEffect } from "react";
import { Container, Col } from "react-bootstrap";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/CV_Ekaterina_Nichiporenko_Mobile_App_Developer.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Col className="resume" style={{ textAlign: "center" }}>
          <Document file={pdf} className="d-flex justify-content-center">
          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} className="resume-page" />
            </Document>
            <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={2} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Col>
      </Container>
    </div>
  );
}

export default ResumeNew;
