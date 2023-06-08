import React from "react";
import "./ExperienceCard.css";

function ExperienceCard(props) {
  const experience = props.experience;
  const theme = props.theme;
  return (
    <div
      className="experience-card"
      style={{
        border: `1px solid ${experience["color"]}`,
        backgroundColor: theme.imageDark,
      }}
    >
     <p
          className="experience-card-description"
          style={{ color: theme.text, fontSize: 16 }}
        >
          {experience["description"]}
        </p>
      
    </div>
  );
}

export default ExperienceCard;
