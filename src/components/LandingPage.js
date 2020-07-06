import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://previews.123rf.com/images/gmast3r/gmast3r1603/gmast3r160300762/54398260-business-man-profile-icon-male-avatar-hipster-style-fashion-cartoon-guy-beard-portrait-casual-busine.jpg"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

              <hr />
              <p>HTM/CSS | Bootstrap | React | Node.js | MongoDB</p>
              <div className="social-link">
                <a
                  href="https://www.linkedin.com/in/imtiyaaz-temoore-9912401b2/"
                  rel="noopener noreferrer"
                  target="blank"
                >
                  <i class="fab fa-linkedin" aria-hidden="true" />
                </a>

                <a
                  href="https://github.com/imtiyaaztem"
                  rel="noopener noreferrer"
                  target="blank"
                >
                  <i class="fab fa-github" aria-hidden="true" />
                </a>

                <a
                  href="https://www.instagram.com/imtiyaaztemoore/"
                  rel="noopener noreferrer"
                  target="blank"
                >
                  <i class="fab fa-instagram" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default LandingPage;
