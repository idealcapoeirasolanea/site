import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Fade } from "react-reveal";
import { projectsHeader } from "../../portfolio.js";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

function Projects(props) {
  const theme = props.theme;


  return (
    <div className="projects-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-projects">
        <Fade bottom duration={2000} distance="40px">
          <div className="projects-heading-div">
            <div className="projects-heading-img-div">
            <img 
              src="https://raw.githubusercontent.com/idealcapoeirasolanea/images/main/pilares.png" 
              alt="Educação" 
              theme={theme} 
              style={{borderRadius: '25px'}}/>
            </div>
            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: theme.text }}
              >
                {projectsHeader.title}
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {projectsHeader["description"]}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      
      <h3>Imagens de Trabalhos e Projetos Sociais</h3>
   
      <div className="repo-cards-div-main">
        <ProjectsImg/>
      </div>
      <br />
      <br />
      <br />
      
      <br />
      <br />
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Projects;
