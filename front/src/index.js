import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import GlobalStyle from "./styles/GlobalStyle";
import { StyledEngineProvider } from "@mui/styled-engine";
import { ThemeProvider } from "styled-components";
import myTheme from "./styles/theme";
import media from "./styles/media";

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={{ ...myTheme, ...media }}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StyledEngineProvider>,
  document.getElementById("root")
);
