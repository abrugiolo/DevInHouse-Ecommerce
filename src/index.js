import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import theme from "./utils/theme";
import {MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Router basename = {"ecommerce"} >
      <Switch>
        {routes.map(route => (
          <Route 
          key = {route.path} 
          path = {route.path}
          component = {route.component}
          exact = {route.exact}
          />
        ))}
      </Switch>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
