import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Contact from "./Contact";
import Project from "./Project";
import Resume from "./Resume";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Project" component={Project} />
      <Route path="/Resume" component={Resume} />
    </Switch>
  );
};

export default Main;
