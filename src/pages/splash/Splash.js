import React, { useState, useEffect } from "react";
import "./Splash.css";
import { Redirect } from "react-router-dom";

function AnimatedSplash(props) {
  return (
    <div className="logo_wrapper">
      <div className="loading">
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
      </div>
    </div>
  );
}

function Splash(props) {
  const [redirect, setRedirect] = useState(false);
  


useEffect(() => {
  setTimeout(() => {
    setRedirect(true)
  }, 2000);
}, []);

 

  return redirect ? (
    <Redirect to="/inicio" />
  ) : (
    <AnimatedSplash theme={props.theme} />
  );
}

export default Splash;
