import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tarot from "../../Assets/Projects/tarot_app.png";
import gissa from "../../Assets/Projects/gissa.png";
import beautyLens from "../../Assets/Projects/make_up.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tarot}
              isBlog={false}
              title="Lunear Tarot"
              description="Lunear Tarot is a modern tarot reading app built with Jetpack Compose, offering daily card readings and three-card spreads. It features reactive state management with ViewModel and StateFlow, and includes custom animations, background music, and AdMob integration. The app provides a seamless user experience with navigation components and asynchronous operations handled via Coroutines."
              ghLink="https://github.com/KatyaNichi/tarot-app"
              demoLink="https://play.google.com/store/apps/details?id=com.superapp.luneartarot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={beautyLens}
              isBlog={false}
              title="BeautyLens"
              description="BeautyLens is a React Native app powered by Expo framework that integrates with external APIs to deliver a comprehensive cosmetics catalog. Users can explore and search beauty products based on brands and vegan status, making it easy to discover their perfect cosmetic products."
              ghLink="https://github.com/KatyaNichi/BeautyLens/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gissa}
              isBlog={false}
              title="GissaFärgen"
              description="GissaFärgen is an iOS game developed in Swift and SwiftUI, launched in January 2024. The app challenges users to enhance their color perception by guessing RGB values through interactive sliders. Through its engaging gameplay mechanics, players learn about color composition while having fun, making it both an educational tool and an entertaining experience for exploring the world of colors."
              ghLink="https://github.com/KatyaNichi/BeautyLens"
              demoLink="https://apps.apple.com/se/app/gissaf%C3%A4rgen/id6475969060?l=en-GB"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
