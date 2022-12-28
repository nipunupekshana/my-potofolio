import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import { ProgressCmp } from "./CircleProgress_CMP";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Tech Skills</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <ProgressCmp percentage={98} />
                  <h5>VueJs(Nuxt)</h5>
                </div>
                <div className="item">
                  <ProgressCmp percentage={90} />
                  <h5>ReactJs</h5>
                </div>
                <div className="item">
                  <ProgressCmp percentage={80} />
                  <h5>NodeJs(Express)</h5>
                </div>
                <div className="item">
                  <ProgressCmp percentage={95} />
                  <h5>Redux</h5>
                </div>
                <div className="item">
                  <ProgressCmp percentage={95} />
                  <h5>Vuex</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="color-sharp"
      />
    </section>
  );
};
