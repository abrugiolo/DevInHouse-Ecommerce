import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import theme from "./utils/theme";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import Router from "./routes";
import store from "./redux/store";
import { Provider } from "react-redux";
import { Header } from "./components";

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Router />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
