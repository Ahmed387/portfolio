import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import zekola from "../assets/img/Zekola.png";
import Note from "../assets/img/Note.png";
import Fokir from "../assets/img/Fokir.png";
import Danilas from "../assets/img/Danilas.png";
import Kerii from "../assets/img/Kerii.png";
import Resto from "../assets/img/Resto.png";
import Login from "../assets/img/Login.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import Movies from "../assets/img/Movies.png";
import Portfolio from "../assets/img/portfolio.png";
import gym from "../assets/img/gym.png";
import notee from "../assets/img/notee.png";

import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Zekola",
      description: "Design & Development",
      imgUrl: zekola,
      proUrl: "https://zekola-store.vercel.app/",
    },
    {
      title: "ObitoGym",
      description: "Design & Development",
      imgUrl: gym,
      proUrl: "https://obito-gym.vercel.app/",
    },
    {
      title: "Movies",
      description: "Design & Development",
      imgUrl: Movies,
      proUrl: "https://movies0-ahmeds-projects-6f78cc84.vercel.app/",
    },
    {
      title: "Portfolio",
      description: "Design & Development",
      imgUrl: Portfolio,
      proUrl: "/",
    }, {
      title: "Notee",
      description: "Design & Development",
      imgUrl: notee,
      proUrl: "https://notee-xi.vercel.app/",
    }, {
      title: "Note",
      description: "Design & Development",
      imgUrl: Note,
      proUrl: "https://note-ahmeds-projects-6f78cc84.vercel.app/login",
    },
  ];
  const secendProjects = [
    {
      title: "Restaurant",
      description: "Design & Development",
      imgUrl: Resto,
      proUrl: "https://ahmed387.github.io/Restaurant/",
    },
    {
      title: "Danilas",
      description: "Design & Development",
      imgUrl: Danilas,
      proUrl: "https://ahmed387.github.io/Danials/",
    },
    {
      title: "Fokir",
      description: "Design & Development",
      imgUrl: Fokir,
      proUrl: "https://ahmed387.github.io/Fokir/",
    },
    {
      title: "Kerii",
      description: "Design & Development",
      imgUrl: Kerii,
      proUrl: "https://ahmed387.github.io/Kerii/",
    },
    {
      title: "Login",
      description: "Design & Development",
      imgUrl: Login,
      proUrl: "https://ahmed387.github.io/Login/",
    },
  ];

  // const games = [
  //   {
  //     title: "Memory game",
  //     description: "Design & Development",
  //     imgUrl: memory,
  //     proUrl: "https://tarek-98.github.io/memory-game/",
  //   },
  //   {
  //     title: "Snake game",
  //     description: "Design & Development",
  //     imgUrl: snake,
  //     proUrl: "https://snake-game-six-zeta.vercel.app/",
  //   },
  //   {
  //     title: "Dino game",
  //     description: "Design & Development",
  //     imgUrl: dino,
  //     proUrl: "https://dino-game-bay.vercel.app/",
  //   },
  //   {
  //     title: "Quiz App",
  //     description: "Design & Development",
  //     imgUrl: quiz,
  //     proUrl: "https://tarek-98.github.io/quiz-game/",
  //   },
  //   {
  //     title: "Hungman game",
  //     description: "Design & Development",
  //     imgUrl: hungman,
  //     proUrl: "https://tarek-98.github.io/hungman-game/",
  //   },
  // ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2 className="mb-5">Projects</h2>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {secendProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>

                      {/* <Tab.Pane eventKey="third">
                        <Row>
                          {games.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>  */}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
