import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  education,
  hobbies,
} from "../../content_option";
import Fade from 'react-reveal/Fade'; // Importing Fade for animations

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Fade bottom>
          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
              <h1 className="display-4 mb-4">About Me</h1>
              <hr className="t_border my-4 ml-0 text-left" />
            </Col>
          </Row>
        </Fade>
        <Fade bottom>
          <Row className="sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">{dataabout.title}</h3>
            </Col>
            <Col lg="7" className="d-flex align-items-center">
              <div>
                <p>{dataabout.aboutme}</p>
              </div>
            </Col>
          </Row>
        </Fade>
        <Fade bottom>
          <Row className="sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">Work Timeline</h3>
            </Col>
            <Col lg="7">
              <table className="table caption-top">
                <tbody>
                  {worktimeline.map((data, i) => (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Col>
          </Row>
        </Fade>
        <Fade bottom>
          <Row className="sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">Education</h3>
            </Col>
            <Col lg="7">
              <table className="table caption-top">
                <tbody>
                  {education.map((data, i) => (
                    <tr key={i}>
                      <th scope="row">{data.degree}</th>
                      <td>{data.institution}</td>
                      <td>{data.year}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Col>
          </Row>
        </Fade>
        <Fade bottom>
          <Row className="sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">Skills</h3>
            </Col>
            <Col lg="7">
              {skills.map((data, i) => (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: '100%' }}></div>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </Fade>
        <Fade bottom>
          <Row className="sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">Interests and Hobbies</h3>
            </Col>
            <Col lg="7">
              <ul>
                {hobbies.map((hobby, i) => (
                  <li key={i}>{hobby}</li>
                ))}
              </ul>
            </Col>
          </Row>
        </Fade>
      </Container>
    </HelmetProvider>
  );
};
