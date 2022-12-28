import { UseState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.png";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    phone: "",
  };
  const [formDetails, setFormDetails] = UseState(formInitialDetails);
  const [buttonText, setButtonText] = UseState("Send");
  const [status, setStatus] = UseState({});

  const onFormUpdate = (key, value) => {
    setFormDetails({
      ...formDetails,
      [key]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    const data = {
      firstName: formDetails.firstName,
      lastName: formDetails.lastName,
      email: formDetails.email,
      message: formDetails.message,
      phone: formDetails.phone,
    };
    fetch('http://localhost:5000/contact', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        setButtonText("Send");
        setFormDetails(formInitialDetails);
        setStatus({
          type: "success",
          msg: "Message sent successfully.",
        });
      })
      .catch((error) => {
        setButtonText("Send");
        setStatus({
          type: "error",
          msg: "Message not sent.",
        });
      });
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Get in Touch</h2>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    name={"firstName"}
                    placeholder={"First Name"}
                    value={formDetails.firstName}
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    name={"lastName"}
                    placeholder={"Last Name"}
                    value={formDetails.lastName}
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    name={"email"}
                    placeholder={"Email"}
                    value={formDetails.email}
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    name={"phone"}
                    placeholder={"Phone"}
                    value={formDetails.phone}
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <textarea
                    rows={6}
                    name={"message"}
                    placeholder={"Message"}
                    value={formDetails.message}
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  />
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.msg && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.msg}
                    </p>
                  </Col>
                )}
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
