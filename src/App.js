import React from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";

import "./App.css";
import Main from "./components/Main";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header
          className="header-color"
          title="Imtiyaaz Temoore Portfolio"
          scroll
        ></Header>
        <Drawer title="Menu">
          <Navigation>
            <Link to="/Resume">Resume</Link>
            <Link to="/Project">Project</Link>
            <Link to="/Contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
};

export default App;
