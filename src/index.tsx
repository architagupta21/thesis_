import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faCog, faStore } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import store from "./store";
import App from "./components/App";
import Admin from "./admin";
import AppMenu from "./AppMenu";
const Fragment = React.Fragment;

const StudioView = styled.div`
  text-align: center;
  padding-top: "100px";
`;

library.add(faReact, faCog, faStore);

const renderApp = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        {$LTI.user_role === "Instructor" ||
        $LTI.user_role === "Administrator" ? (
          <AppMenu />
        ) : (
          ""
        )}
        <Switch>
          <Route path="/edit" render={props => <Admin {...props} />} />
          <Route path="/" render={props => <App {...props} />} />
        </Switch>
      </Fragment>
    </Router>
  </Provider>
);

/* Disable Activity when in studio view 
(edX studio view sets userID as 'student') 
as course ID is different in edX Live View */
if ($LTI.userID === "student") {
  const divStyle = {
    textAlign: "center",
    paddingTop: "100px"
  };
  ReactDOM.render(
    <StudioView>
      <h2>Please Author This Activity In Live View</h2>
    </StudioView>,
    document.getElementById("app")
  );
} else {
  ReactDOM.render(renderApp(), document.getElementById("app"));
}
