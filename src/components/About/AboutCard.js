import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
       <Card.Body>
       <blockquote className="blockquote mb-0">
         <p style={{ textAlign: "justify" }}>
           Hi Everyone, I am <span className="purple">Ekaterina Nichiporenko </span>
           from <span className="purple"> Malmö, Sweden.</span>
           <br />
           I am currently working as a Mobile App Development Intern.
           <br />
           I am studying in the <span className="purple">iPhone and Android Developer Program</span> at
           Malmö Yrkeshögskola.
           <br />
           <br />
           Apart from coding, some other activities that I love to do!
         </p>
         <ul>
           <li className="about-activity">
             <ImPointRight />  Playing Games
           </li>
           <li className="about-activity">
             <ImPointRight />  Listening to Classical Music
           </li>
           <li className="about-activity">
             <ImPointRight />  Embroidery
           </li>
         </ul>
       </blockquote>
     </Card.Body>
    </Card>
  );
}

export default AboutCard;
