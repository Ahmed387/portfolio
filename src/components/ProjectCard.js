import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, proUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <a class="d-block" href={proUrl} target="_blank">
            Go Now
          </a>
        </div>
      </div>
    </Col>
  );
};
