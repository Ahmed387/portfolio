import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/Logo.webp";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/icons8-github.svg";

export const Footer = () => {
  return (
    <footer className="footer pt-4">
      <Container>
        <Row className="align-items-center mx-auto">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" className="Rounded" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/ahmed-salah-a55538248/"
                target="_blank"
              >
                <img src={navIcon1} alt="icon" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100007106804830&sk=about&viewas=&show_switched_toast=false&show_switched_tooltip=false&is_tour_dismissed=false&is_tour_completed=false&show_podcast_settings=false&show_community_review_changes=false&should_open_composer=false&badge_type=NEW_MEMBER&show_community_rollback_toast=false&show_community_rollback=false&show_follower_visibility_disclosure=false&bypass_exit_warning=true"
                target="_blank"
              >
                <img src={navIcon2} alt="icon" />
              </a>
              <a href="https://github.com/Ahmed387" target="_blank">
                <img src={navIcon3} alt="icon" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
