import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta, socialprofils } from "../../content_option";
import { Container, Row, Col } from "react-bootstrap";
import { contactConfig } from "../../content_option";
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'; // Importing icons from react-icons
import ThreeJSPointCloudComponent from "./ThreeJSPointCloudComponent";

export const CoolStuff = () => {
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
            <h1 className="display-4 mb-4">Cool Stuff</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
      <h2>This page is a work in progress</h2>
      </Container>
      <ThreeJSPointCloudComponent />
    </HelmetProvider>
  );
};
