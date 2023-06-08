import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import { useHistory } from "react-router-dom";
import { style } from "glamor";

export default function Greeting(props) {
  const theme = props.theme;
  const history = useHistory();

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">{greeting.title}</h1>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText, textAlign: "justify" }}
              >
                <span>Somos o </span>
                <span style={{ color: theme.accentColor }}>
                  {greeting.full_name}.{" "}
                </span>
                {greeting.subTitle}
                <h3 style={{textAlign: 'center'}}>VOCÊ É O NOSSO CONVIDADO!</h3>
              </p>
              <SocialMedia />
              <div className="portfolio-repo-btn-div">
                <button
                  {...styles}
                  className="button"
                  onClick={() => {
                    history.push("/contact");
                  }}
                >
                  Venha fazer parte!
                </button>
              </div>
            </div>
          </div>
          <div className="greeting-image-div" >
            <img src="https://raw.githubusercontent.com/idealcapoeirasolanea/images/main/dev_aulas.png" alt="Ideal Capoeira" style={{borderRadius: '25px'}}/>
          </div>
        </div>
      </div>
    </Fade>
  );
}
