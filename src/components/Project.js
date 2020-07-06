import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
} from "react-mdl";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 2 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="project-cards">
          {/*project1*/}
          <Card
            shadow={5}
            style={{ width: "320px", height: "320px", margin: "auto" }}
          >
            <CardTitle
              expand
              style={{
                color: "#fff",
                background:
                  "url(https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/github-universe.jpg?itok=lwRZddXA) bottom right 15% no-repeat #46B6AC",
              }}
            >
              HTML Project
            </CardTitle>
            <CardText>
              My first HTML project, show company employees cards and all ther
              details,see on Github for more details
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/imtiyaaztem/Projects">
                GITHUB
              </Button>
            </CardActions>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="project-cards">
          {/*project1*/}
          <Card
            shadow={5}
            style={{ width: "320px", height: "320px", margin: "auto" }}
          >
            <CardTitle
              expand
              style={{
                color: "#fff",
                background:
                  "url(https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/github-universe.jpg?itok=lwRZddXA) bottom right 15% no-repeat #46B6AC",
              }}
            >
              Python Project
            </CardTitle>

            <CardText>
              My python project, it like a lotto machine,see on Github for more
              detail.
            </CardText>
            <CardActions border>
              <Button
                colored
                href="https://github.com/imtiyaaztem/lotto-python"
              >
                GITHUB
              </Button>
            </CardActions>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="project-cards">
          {/*project1*/}
          <Card
            shadow={5}
            style={{ width: "320px", height: "320px", margin: "auto" }}
          >
            <CardTitle
              expand
              style={{
                color: "#fff",
                background:
                  "url(https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/github-universe.jpg?itok=lwRZddXA) bottom right 15% no-repeat #46B6AC",
              }}
            >
              Javascript Project
            </CardTitle>
            <CardText>
              My Javscript project, it a contact keeper, see more on Github
            </CardText>
            <CardActions border>
              <Button
                colored
                href="https://github.com/imtiyaaztem/contact_keeper"
              >
                GITHUB
              </Button>
            </CardActions>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="demo-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>HTML/CSS</Tab>
          <Tab>PYTHON</Tab>
          <Tab>JAVASCRIPT</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <Cell className="content">{this.toggleCategories()} </Cell>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Project;
