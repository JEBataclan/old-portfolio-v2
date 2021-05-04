import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Montserrat", Open Sans',
  },
  mixins: {
    denseToolbar: {
      minHeight: 48,
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
