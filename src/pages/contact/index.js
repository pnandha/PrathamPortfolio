import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta, socialprofils } from "../../content_option";
import { Container, Row, Col } from "react-bootstrap";
import { contactConfig } from "../../content_option";
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'; // Importing icons from react-icons

export const ContactUs = () => {
  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contact</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            <h3 className="color_sec py-4">Get in touch</h3>
            <address>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                {contactConfig.YOUR_EMAIL}
              </a>
              <br />
              <br />
              {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                <p>
                  <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                </p>
              ) : (
                ""
              )}
            </address>
            <p>{contactConfig.description}</p>
            <div className="social-links">
              <a href={socialprofils.linkedin} target="_blank" rel="noopener noreferrer" className="mr-3" style={{marginRight: '2%'}}>
                <FaLinkedin size={30} />
              </a>
              <a href={socialprofils.github} target="_blank" rel="noopener noreferrer" className="mr-3">
                <FaGithub size={30} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
