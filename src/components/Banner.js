import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import ReactTyped from "react-typed";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={7} xl={7}>
            <TrackVisibility once>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h2>
                    {`Hi I'm Nipun Upekshana`}
                  </h2>
                  <h1>
                  <ReactTyped
                        strings={[
                          "Full Stack Developer",
                          "JavaScript lover",
                          "Photographer",
                        ]}
                        typeSpeed={150}
                        backSpeed={100}
                        loop
                      />
                  </h1>
                  <p>
                    Software engineer based in Sri Lanka with years of
                    experience in ERP systems & mortgage broker platforms. My
                    goal is to always build products that provide pixel-perfect,
                    performant experiences.
                    <b>
                      Open To Remote/Onsite opportunities from anywhere in the
                      world.
                    </b>
                  </p>
                  <button
                    onClick={() =>
                      window.open(
                        "mailto:nipunupekshana1@gmail.com?subject=Mail from Portfolio",
                        "_blank"
                      )
                    }
                  >
                    Let's connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
