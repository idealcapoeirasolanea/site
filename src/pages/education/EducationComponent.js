import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Educations from "../../containers/education/Educations";
import "./EducationComponent.css";
import { Fade } from "react-reveal";

function Education(props) {
  const theme = props.theme;
  return (
    <div className="education-main">
      <Header theme={props.theme} setTheme={props.setTheme} />
      <div className="basic-education">
        <Fade bottom duration={2000} distance="40px">
          <div className="heading-div">
            <div className="heading-img-div">
              <img 
              src="https://raw.githubusercontent.com/idealcapoeirasolanea/images/main/LOGO_IDEAL_CAPOEIRA.jpg" 
              alt="Educação" 
              theme={theme} 
              style={{borderRadius: '25px'}}/>
            </div>
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
                Educação
              </h1>
              <h3 className="heading-sub-text" style={{ color: theme.text }}>
                Sistema de Qualificação e Graduação
              </h3>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                A corda crua não é uma graduação, mas sim apenas uma forma do aluno já contemplar seu engajamento no grupo.
              </p>
            </div>
          </div>
        </Fade>
        <Educations theme={props.theme} />

      </div>
      <Footer theme={props.theme} />
    </div>
  );
}

export default Education;
