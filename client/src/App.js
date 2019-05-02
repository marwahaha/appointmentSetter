import React, { Component } from "react";
import { Container } from "reactstrap";

import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

//import PrivateRoute from "./components/common/PrivateRoute";

import { setCurrentUser, logOutUser } from "./actions/authActions";

import NavBar from "./components/layouts/NavBar";
import Landing from "./components/layouts/Landing";
import Footer from "./components/layouts/Footer";
import UserRegister from "./components/auth/UserRegister";

import "./App.css";

//set up jwt token auth here
if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logOutUser());
    //store.dispatch(clearData());
    window.location.href = "/"; //this may need to get refactored
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Container fluid={true} className="App bg-light">
            <NavBar />

            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/signup" component={UserRegister} />
            </Switch>

            <Footer />
          </Container>
        </Router>
      </Provider>
    );
  }
}

export default App;
