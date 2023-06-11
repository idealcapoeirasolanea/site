import React from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { settings } from "../../portfolio.js";

function Header(props) {
  const theme = props.theme;



  const link = settings.isSplash ? "/splash" : "home";


  return (
    <Fade top duration={1000} distance="20px">
      <div>
        <header className="header">
          <NavLink to={link} tag={Link} className="logo">
            <span style={{ color: theme.text }}></span>
            <span >
            <img src="https://raw.githubusercontent.com/idealcapoeirasolanea/images/main/logo-dark.jpg" 
              width="200"
              style={{marginTop: 15,borderRadius: '25px'}} 
              alt="Ideal Solânea"
              />
            </span>
            <span style={{ color: theme.text }}></span>
          </NavLink>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <NavLink
                className="home"
                to="/inicio"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                Início
              </NavLink>
            </li>
            <li>
              <NavLink
                className="xp"
                to="/duvidas"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                Dúvidas
              </NavLink>
            </li>
            <li>
              <NavLink
                className="projects"
                to="/projetos"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                Projetos
              </NavLink>
            </li>
            <li>
              <NavLink
                  className="ec"
                  to="/educacao"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ borderRadius: 5, color: theme.text }}
              >
                Graduação
              </NavLink>
            </li>
            <li>
              <NavLink
                className="cr1"
                to="/aulas"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                Encontros
              </NavLink>
            </li>
            <li>
              <NavLink
                className="cr"
                to="/contact"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                Participe
              </NavLink>
            </li>
            {/* <button {...styles} onClick={changeTheme}>
              {icon}
            </button> */}
          </ul>
        </header>
      </div>
    </Fade>
  );
}

export default Header;
