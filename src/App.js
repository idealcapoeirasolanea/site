import React, { useEffect } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { themes } from "./theme";
import { GlobalStyles } from "./global";
import { settings } from "./portfolio";
import { logGa } from './utils/log';
import NavigationIcon from '@mui/icons-material/Navigation';

function App() {
  useEffect(() => {
    logGa('home_page_visit');
  }, []);

  // const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const useCursor = settings.useCustomCursor;

  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("gotoTop").style.display = "block";
    } else {
      document.getElementById("gotoTop").style.display = "none";
    }

  }

  function scrollToTop() {

    window.scrollTo({ top: 0, behavior: 'smooth' });

  }

  return (
    <ThemeProvider theme={themes["light"]}>
      <>
        <GlobalStyles />
        <div>
          {useCursor ? (

            <Main theme={themes["light"]} setTheme={"light"} />

          ) : (
            <Main theme={themes["light"]} setTheme={"light"} />
          )}
        </div>
        <button className="float" onClick={scrollToTop} id="gotoTop">
          <NavigationIcon style={{fontSize: 40}}/>
        </button>
      </>
    </ThemeProvider>
  );
}

export default App;
