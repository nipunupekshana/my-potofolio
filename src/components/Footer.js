import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/N-Logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={12} md={6} className="my-2 d-flex justify-content-center ">
            <img src={logo} alt="logo" />
          </Col>
          <Col sm={12} md={6} className="text-center mt-2">
            <div className="social-icon d-flex justify-content-center">
              <a href="https://www.linkedin.com/in/roberto-ortiz-7b1b4b1b3/">
                <img src={navIcon1} alt="" />
              </a>
              <a href="fb">
                <img src={navIcon2} alt="" />
              </a>
              <a href="github">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <p>CopyRight 2022. All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
