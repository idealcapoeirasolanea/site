import React from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import {degrees, degreesChildren} from "../../portfolio";
import {DarkTheme, LightTheme, ThemeProvider} from "baseui";
import {Accordion, Panel} from "baseui/accordion";


function Educations(props) {
  const theme = props.theme;

  return (
    <div className="main" id="educations">
      <div className="educations-header-div">

      </div>
      <div className="educations-body-div">


          <ThemeProvider theme={theme.name === "light" ? LightTheme : DarkTheme}>
              <Accordion onChange={({ expanded }) => console.log(expanded)}>
                  {[{'id': 1, title: 'Graduação para Crianças/Jovens (de 9 a 16 anos)'}].map((id) => {
                      return (
                          <Panel
                              className="accord-panel"
                              title={id['title']}
                              key={id['id']}
                          >
                              {degreesChildren.degrees.map((degree, index) => {
                                  return <DegreeCard key={index} degree={degree} theme={theme}/>;
                              })}
                          </Panel>


                      );
                  })}

              </Accordion>
              <Accordion onChange={({ expanded }) => console.log(expanded)}>
                  {[{'id': 1, title: 'Graduação para Adultos (A partir de 17 anos)'}].map((id) => {
                      return (
                          <Panel
                              className="accord-panel"
                              title={id['title']}
                              key={id['id']}
                          >
                              {degrees.degrees.map((degree, index) => {
                                  return <DegreeCard key={index} degree={degree} theme={theme} />;
                              })}
                          </Panel>


                      );
                  })}

              </Accordion>
          </ThemeProvider>

      </div>
    </div>
  );
}

export default Educations;
