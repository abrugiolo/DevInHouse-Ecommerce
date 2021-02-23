import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import theme from "./utils/theme"
import {MuiThemeProvider, CssBaseline } from "@material-ui/core";
import Card from './components/card/card';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
      <Card />
  </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
