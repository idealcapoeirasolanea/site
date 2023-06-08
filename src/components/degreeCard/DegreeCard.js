import React from "react";
import "./DegreeCard.css";
import { Fade, Flip } from "react-reveal";
import { style } from "glamor";


function DegreeCard(props) {
  const degree = props.degree;
  const theme = props.theme;



  const card_body = style({
    borderBottom: `1px solid black`,
    borderLeft: `1px solid black`,
    borderRight: `1px solid black`,
    borderRadius: "7px",
    width: "90%",
    margin: "10px",
    boxShadow: `0px 1px 5px black`,
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `0 5px 15px black`,
    },
    "@media (max-width: 768px)": {
      width: "100%",
    },
  });


  return (
    <div className="degree-card">

      <Flip left duration={2000}>

          <img
            style={{
              width: "100px",
              height: "100px",

            }}
            src={degree.image}
            alt={degree.alt_name}
          />

      </Flip>

      <Fade right duration={2000} distance="40px">
        <div {...card_body}>
          <div
            className="body-header"

          >
            <div className="body-header-title">

              <h3 className="card-subtitle" style={{ color: theme.text }}>
                {degree.nome}
              </h3>
            </div>
            <div className="body-header-duration">
              <h3 className="duration" style={{ color: "#FFFFFF" }}>
                {degree.duration}
              </h3>
            </div>
          </div>
          <div classname="body-content">
            <p style={{marginLeft: "10px", marginTop: "-10px"}}>

              {degree.requisitos.map((text)=>{
                return (
                    <p>{text}</p>
                );
              })}
            </p>
          </div>
        </div>
      </Fade>

    </div>

  );
}

export default DegreeCard;
