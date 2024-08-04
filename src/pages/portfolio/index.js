import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { workProjects, personalProjects, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Projects | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Projects</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            <h2 className="section-title">Work Projects</h2>
            {workProjects.map((data, i) => (
              <div key={i} className="project_item">
                <h3 className="project_title">{data.title}</h3>
                <p className="project_description">{data.description}</p>
                <hr className="t_border my-4 ml-0 text-left" />
              </div>
            ))}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            <h2 className="section-title">Personal Projects</h2>
            {personalProjects.map((data, i) => (
              <div key={i} className="project_item">
                <h3 className="project_title">{data.title}</h3>
                <p className="project_description">{data.description}</p>
                <hr className="t_border my-4 ml-0 text-left" />
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
