import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [LoopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["web developer", "web designer", "freelancer"];
  const [Text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => tick(), delta);
    return () => clearInterval(ticker);
  }, [Text, isDeleting, LoopNum, delta, period]);

  const tick = () => {
    const i = LoopNum % toRotate.length;
    const fullTxt = toRotate[i];

    if (isDeleting) {
      setText(fullTxt.substring(0, Text.length - 1));
    } else {
      setText(fullTxt.substring(0, Text.length + 1));
    }

    setDelta(300 - Math.random() * 100);

    if (!isDeleting && Text === fullTxt) {
      setDelta(period);
      setIsDeleting(true);
    } else if (isDeleting && Text === "") {
      setIsDeleting(false);
      setLoopNum(LoopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={7} xl={7}>
            <TrackVisibility once>
              {({ isVisible }) => (
                <div
                  className={isVisible ? "animate__animated animate__fadeIn" : ""}
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi I'm Nipun`} <span className="wrap">{Text}</span>
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </p>
                  <button onClick={() => console.log("connect")}>
                    Let's connect <ArrowRightCircle size={25} />{" "}
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
